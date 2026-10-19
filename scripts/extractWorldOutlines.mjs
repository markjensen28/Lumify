import { writeFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

// Isolation bounds exclude nearby offshore rocks and neighboring islands.
const bounds = {
 unknown:[[127,161],[147,117],[180,84],[225,67],[277,72],[328,88],[372,114],[395,154],[399,192],[393,210],[359,231],[290,240],[231,235],[181,218],[146,198]],
 'akashic-archives':[[363,132],[384,89],[424,55],[470,18],[522,18],[568,25],[619,35],[655,65],[670,139],[650,173],[604,194],[553,201],[500,198],[446,187],[392,168]],
 'hibla-archipelago':[[699,113],[717,73],[760,43],[806,14],[856,14],[906,28],[946,76],[975,113],[946,146],[907,173],[857,185],[802,178],[748,164],[713,142]],
 'hearthwork-terraces':[[925,192],[946,147],[1006,106],[1058,94],[1114,98],[1168,105],[1211,145],[1236,195],[1227,228],[1191,253],[1135,279],[1079,271],[1024,258],[953,237]],
 'tala-crossroad':[[31,293],[54,260],[93,217],[141,205],[191,215],[244,220],[292,244],[329,282],[340,314],[318,351],[271,370],[218,380],[162,380],[111,369],[64,348]],
 'grand-library':[[392,313],[408,267],[444,224],[493,186],[550,162],[611,148],[628,127],[647,112],[670,130],[685,166],[705,174],[710,130],[734,130],[742,172],[788,189],[848,222],[892,263],[924,307],[919,350],[883,388],[827,420],[767,434],[709,432],[649,438],[593,425],[537,430],[477,402],[428,374],[400,345]],
 'vulcan-caverns':[[0,466],[29,434],[62,411],[93,390],[135,368],[172,382],[209,365],[248,385],[289,388],[326,411],[365,436],[406,472],[412,525],[397,565],[374,606],[337,633],[290,644],[250,638],[211,651],[170,650],[133,656],[93,656],[49,628],[13,583],[0,540]],
 'reading-island':[[370,548],[392,506],[430,462],[478,429],[527,429],[574,436],[624,456],[667,489],[695,537],[704,576],[682,625],[643,657],[592,676],[540,679],[488,671],[440,662],[400,636],[376,589]],
 'numeric-ruins':[[676,545],[685,511],[723,475],[766,447],[813,435],[864,426],[918,440],[969,468],[1005,504],[1034,551],[1045,591],[1007,638],[951,678],[907,686],[854,684],[802,674],[743,651],[688,606]],
 'concord-grove':[[930,395],[949,349],[985,303],[1033,275],[1082,261],[1132,264],[1182,285],[1224,315],[1253,355],[1271,407],[1276,458],[1271,509],[1217,541],[1158,545],[1097,543],[1043,523],[994,504],[955,450]],
};
// These islands nearly touch at the Archives stairs and Library tree. Keep
// their masks on opposite sides of the water gap, including after gap closing.
const archiveLibrarySeam = [[350,205],[480,205],[514,198],[540,191],[551,189],
 [577,183],[600,175],[621,162],[638,147],[642,134],[651,123],[690,119]];
// Local corrections keep foam out of the mask and waterfall mouths inside it.
const corrections = {
 'unknown': { exclude: [[[130,130],[156,128],[160,175],[130,177]]] },
 'vulcan-caverns': { exclude: [[[274,637],[309,637],[313,671],[269,671]]] },
 'hearthwork-terraces': { exclude: [[[1206,172],[1239,166],[1250,216],[1214,221]]] },
 'numeric-ruins': {
  include: [[[769,600],[792,600],[794,634],[785,645],[766,645],[758,637]]],
  exclude: [[[991,638],[1046,638],[1046,690],[991,690]],[[676,623],[718,623],[718,685],[676,685]]],
 },
 'grand-library': { include: [
  [[653,377],[678,377],[678,413],[670,417],[651,417],[643,413]],
  [[782,360],[803,360],[804,386],[795,391],[777,391],[772,386]],
 ] },
};
// The detached ruin column gets its own stroke, avoiding a bridge over water.
const detailOutlines = {
 unknown: [[[136,135],[136,139],[140,140],[140,166],[138,169],
  [140,172],[146,172],[149,169],[148,140],[151,138],[151,134],[145,131]]],
};
const browser = await chromium.launch({headless:true});
const page = await browser.newPage({viewport:{width:1280,height:720}});
await page.goto('http://127.0.0.1:5173');
const outlines = await page.evaluate(async ({bounds, archiveLibrarySeam, corrections, detailOutlines}) => {
 const W=1280,H=720;
 const canvas=document.createElement('canvas'); canvas.width=W;canvas.height=H;
 const ctx=canvas.getContext('2d',{willReadFrequently:true});
 const image=new Image(); image.src='/assets/world/lumora-world.png'; await image.decode();
 ctx.drawImage(image,0,0,W,H); const pixels=ctx.getImageData(0,0,W,H).data;
 const inside=(x,y,poly)=>{let c=false; for(let i=0,j=poly.length-1;i<poly.length;j=i++) {const a=poly[i],b=poly[j];if((a[1]>y)!=(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0]) c=!c;} return c;};
 const morph=(input,dilate)=>{const out=new Uint8Array(W*H);for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){let v=dilate?0:1;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(dilate)v|=input[(y+dy)*W+x+dx];else v&=input[(y+dy)*W+x+dx];}out[y*W+x]=v;}return out;};
 const output={};
 const seamY=x=>{for(let i=1;i<archiveLibrarySeam.length;i++){const a=archiveLibrarySeam[i-1],b=archiveLibrarySeam[i];if(x<=b[0])return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0]);}return archiveLibrarySeam.at(-1)[1];};
 const ownIsland=(name,x,y)=>{
  if(x<350||x>690)return true;
  if(name==='akashic-archives')return y<seamY(x)-1;
  if(name==='grand-library')return y>seamY(x)+1;
  return true;
 };
 for(const [name,poly] of Object.entries(bounds)) {
  let mask=new Uint8Array(W*H);
  for(let y=0;y<H;y++)for(let x=0;x<W;x++) { if(!inside(x,y,poly)||!ownIsland(name,x,y))continue; const i=(y*W+x)*4; const r=pixels[i],g=pixels[i+1],b=pixels[i+2];
   const sea=b>r*1.22&&g>r*1.13&&b>g*1.03;
   const foam=r>145&&g>190&&b>190&&g>r*1.08;
   if(!sea&&!foam)mask[y*W+x]=1;
  }
  // Close tiny gaps, preserving bays and the actual irregular coastline.
  mask=morph(morph(morph(morph(mask,true),true),false),false);
  const correction=corrections[name];
  if(correction)for(let y=0;y<H;y++)for(let x=0;x<W;x++){
   if(correction.include?.some(poly=>inside(x,y,poly)))mask[y*W+x]=1;
   if(correction.exclude?.some(poly=>inside(x,y,poly)))mask[y*W+x]=0;
  }
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(!ownIsland(name,x,y))mask[y*W+x]=0;
  let largest=[];const seen=new Uint8Array(W*H);
  for(let i=0;i<mask.length;i++){if(!mask[i]||seen[i])continue;const queue=[i];seen[i]=1;for(let q=0;q<queue.length;q++){const p=queue[q],x=p%W;for(const n of [x>0?p-1:-1,x<W-1?p+1:-1,p-W,p+W])if(n>=0&&n<mask.length&&mask[n]&&!seen[n]){seen[n]=1;queue.push(n);}}if(queue.length>largest.length)largest=queue;}
  mask.fill(0);for(const p of largest)mask[p]=1;
  // Directed cell edges form true boundary loops, including concave sections.
  const edges=new Map(); const add=(ax,ay,bx,by)=>{const a=ay*(W+1)+ax,b=by*(W+1)+bx; if(!edges.has(a))edges.set(a,[]);edges.get(a).push(b);};
  for(const p of largest){const x=p%W,y=Math.floor(p/W);if(y===0||!mask[p-W])add(x,y,x+1,y);if(x===W-1||!mask[p+1])add(x+1,y,x+1,y+1);if(y===H-1||!mask[p+W])add(x+1,y+1,x,y+1);if(x===0||!mask[p-1])add(x,y+1,x,y);}
  let best=[],bestArea=0;
  const direction=(a,b)=>b-a===1?0:b-a===W+1?1:b-a===-1?2:3;
  while(edges.size){const first=edges.keys().next().value;let p=first,previousDirection=0;const path=[];
   do{path.push([p%(W+1),Math.floor(p/(W+1))]);const options=edges.get(p);if(!options?.length)break;
    options.sort((a,b)=>{const priority=d=>[1,0,3,2].indexOf((d-previousDirection+4)%4);return priority(direction(p,a))-priority(direction(p,b));});
    const next=options.shift();if(!options.length)edges.delete(p);previousDirection=direction(p,next);p=next;
   }while(p!==first&&path.length<W*H);
   const area=Math.abs(path.reduce((sum,a,i)=>{const b=path[(i+1)%path.length];return sum+a[0]*b[1]-b[0]*a[1];},0));
   if(p===first&&area>bestArea){best=path;bestArea=area;}
  }
  // Simplify subpixel stair steps so a thicker stroke has no tiny spikes.
  const simplify=points=>{
   if(points.length<3)return points;
   const a=points[0],b=points.at(-1),dx=b[0]-a[0],dy=b[1]-a[1];let furthest=0,index=0;
   for(let i=1;i<points.length-1;i++){
    const p=points[i],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy||1)));
    const distance=Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy);
    if(distance>furthest){furthest=distance;index=i;}
   }
   return furthest>0.8?[...simplify(points.slice(0,index+1)).slice(0,-1),...simplify(points.slice(index))]:[a,b];
  };
  const split=Math.floor(best.length/2);
  output[name]=[...simplify(best.slice(0,split+1)).slice(0,-1),...simplify([...best.slice(split),best[0]]).slice(0,-1)];
 }
 // Diagnostic overlay on the unmodified map, for visual inspection.
 ctx.lineWidth=5;ctx.lineJoin='round';ctx.strokeStyle='#fff1ad';for(const points of [...Object.values(output),...Object.values(detailOutlines).flat()]){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.stroke();}
 document.body.replaceChildren(canvas);document.body.style.margin='0';
 return output;
},{bounds, archiveLibrarySeam, corrections, detailOutlines});
await page.screenshot({path:'screenshots/world-outline-review.png'});
writeFileSync('src/config/worldOutlines.js', '// Coastline contours traced from the displayed lumora-world.png composition.\nexport const ISLAND_OUTLINES = {\n'+Object.entries(outlines).map(([name,points])=>`  ${JSON.stringify(name)}: ${JSON.stringify(points)},`).join('\n')+'\n};\n\nexport const ISLAND_DETAIL_OUTLINES = '+JSON.stringify(detailOutlines)+';\n');
for(const [name,points] of Object.entries(outlines)) console.log(name,points.length);
await browser.close();



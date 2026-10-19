import { chromium } from '@playwright/test';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1280,height:720}});
const errors=[];page.on('pageerror',error=>errors.push(error.message));
await page.goto('http://127.0.0.1:5173/?test=1');
await page.waitForFunction(()=>window.__TEST__?.ready);
await page.mouse.click(640,344);
await page.waitForFunction(()=>window.__TEST__?.ready&&window.__TEST__?.sceneKey==='IslandSelectScene');
const positions=await page.evaluate(()=>window.__TEST__.islandPositions);
for(const region of positions){
 await page.mouse.click(region.x,region.y);
 await page.waitForFunction(id=>window.__TEST__.selectedIsland===id,region.id);
 const state=await page.evaluate(()=>window.__TEST__.state());
 if(region.id!=='vulcan-caverns'&&(state.lockedFeedback!==region.id||state.sceneKey!=='IslandSelectScene'))throw new Error(`Locked selection failed: ${region.id}`);
 await page.screenshot({path:`screenshots/world-selection-${region.id}.png`});
}
await page.mouse.click(200,515);
await page.mouse.click(200,515);
await page.waitForFunction(()=>window.__TEST__?.ready&&window.__TEST__?.sceneKey==='IslandMapScene');
if(errors.length)throw new Error(errors.join('\n'));
console.log('All 10 selections and unlocked entry passed; no browser errors.');
await browser.close();

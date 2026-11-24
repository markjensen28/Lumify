param([switch]$Force)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$audioProject = Split-Path -Parent $PSScriptRoot
$audioDirectory = Join-Path $audioProject 'public/assets/english-week1/audio'
$audioManifest = Get-Content -LiteralPath (Join-Path $audioDirectory 'manifest.json') -Raw | ConvertFrom-Json
$englishVoice = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
    $englishVoice.SelectVoice($audioManifest.voice)
    $englishVoice.Rate = $audioManifest.rate
    $format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
    $written = 0
    foreach ($clip in $audioManifest.clips) {
        $destination = Join-Path $audioDirectory $clip.file
        if ((Test-Path -LiteralPath $destination) -and -not $Force) { continue }
        $englishVoice.SetOutputToWaveFile($destination, $format)
        $englishVoice.Speak($clip.text)
        $englishVoice.SetOutputToNull()
        $written++
    }
    Write-Output "Rendered $written English recordings using $($audioManifest.voice)."
} finally { $englishVoice.Dispose() }

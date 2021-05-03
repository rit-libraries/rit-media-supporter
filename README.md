# RIT Media Supporter

Get the duration of video or audio files/streams with `ffmpeg`.

# Install

```bash

FOR Ubuntu: sudo apt update && sudo apt install ffmpeg

FOR MAC: brew install ffmpeg

$ npm install --save rit-media-supporter
```

# Usage

```js
const {getAudioDuration, getVideoDuration} = require('rit-media-supporter')
(async () => {
    console.log(await getAudioDuration("https://www.w3schools.com/tags/horse.mp3"))
    console.log(await getVideoDuration("https://www.w3schools.com/tags/movie.mp4"))
})()

```

# License

MIT. Based on [rit-media-supporter](https://github.com/rit-libraries/rit-media-supporter).

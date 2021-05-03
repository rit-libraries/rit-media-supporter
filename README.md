# RIT Media Supporter

Get the duration of video or audio files/streams with `ffmpeg`.

# Install

```bash
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

MIT. Based on [rit-media-supporter](https://github.com/RIT-NODE/media).

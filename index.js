const ffmpeg = require('ffmpeg');

module.exports.getAudioDuration = function (audio) {
    return new ffmpeg(audio).then(function (audioInfo) {
        return audioInfo['metadata']['duration']['seconds']
    }, function (e) {
        console.log(e.code);
        console.log(e.msg);
    });
};

module.exports.getVideoDuration = function (video) {
    return new ffmpeg(video).then(function (videoInfo) {
        return videoInfo['metadata']['duration']['seconds']
    }, function (e) {
        console.log(e.code);
        console.log(e.msg);
    });
};

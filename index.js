const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports.getAudioDuration = async function (audio) {
    let duration = 0
    try {
        const cmd = `ffmpeg -i ${audio} 2>&1 | grep Duration | awk '{print $2}' | tr -d ,`;
        const {stdout} = await exec(cmd)
        const parts = stdout.split(".")[0].split(":")
        duration = parseInt(parts[0]) * 60 + parseInt(parts[1]) * 60 + parseInt(parts[2])
    } catch (e) {
        console.error(e)
    }
    return duration
};

module.exports.getVideoDuration = async function (video) {
    let duration = 0
    try {
        const cmd = `ffmpeg -i ${video} 2>&1 | grep Duration | awk '{print $2}' | tr -d ,`;
        const {stdout} = await exec(cmd)
        const parts = stdout.split(".")[0].split(":")
        duration = parseInt(parts[0]) * 60 + parseInt(parts[1]) * 60 + parseInt(parts[2])
    } catch (e) {
        console.error(e)
    }
    return duration
};

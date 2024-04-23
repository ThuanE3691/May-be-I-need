(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";

    chrome.runtime.onmessage.addListener((obj, sender, response) => {
        const {type, value, videoId} = obj;

        if (type === "NEW") {
            currentVideo = videoId
            newVideoLoaded();
        }
    })
})()

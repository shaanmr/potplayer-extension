chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sendToPotPlayer",
        title: "Play in PotPlayer",
        contexts: ["link", "video"]
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "sendToPotPlayer") {
        const videoUrl = info.linkUrl || info.srcUrl;
        // Send URL to PotPlayer
        fetch(`http://localhost:5000/play?url=${encodeURIComponent(videoUrl)}`);
    }
});

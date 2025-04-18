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
        if (videoUrl) {
            fetch(`http://localhost:5000/play?url=${encodeURIComponent(videoUrl)}`)
                .then(res => {
                    if (!res.ok) throw new Error("Server error");
                    return res.text();
                })
                .then(console.log)
                .catch(err => console.error("Error sending to PotPlayer:", err));
        } else {
            console.error("No valid video URL found.");
        }
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if (message.action === "getTabUrl") {
            const tabUrl = sender.tab.url;
            sendResponse({ url: tabUrl });
        }
    });
});

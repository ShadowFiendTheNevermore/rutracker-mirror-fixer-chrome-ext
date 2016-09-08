chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.pageUrl.indexOf('rutracker.net')) {
        chrome.pageAction.show(sender.tab.id)
        sendResponse({urlIsValid: true})
    } else {
        console.warn("You activate script on wrong site");
    }

})





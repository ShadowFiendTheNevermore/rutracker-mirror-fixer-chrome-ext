chrome.runtime.sendMessage({pageUrl: location.href}, (res) => {
    if (res.urlIsValid === true) {
        let body = document.body

        // VERY SIMPLE 
        body.style.cssText = 'transform:scaleX(1)'
    }
})





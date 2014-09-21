chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "chrome://settings/clearBrowserData";
    chrome.tabs.create({ url: newURL });
});

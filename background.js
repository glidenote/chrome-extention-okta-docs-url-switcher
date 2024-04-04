chrome.action.onClicked.addListener(function (tab) {
  var currentURL = tab.url;
  var newURL;

  if (currentURL.includes('help.okta.com/oie/ja-jp/')) {
    newURL = currentURL.replace('help.okta.com/oie/ja-jp/', 'help.okta.com/ja-jp/');
  } else if (currentURL.includes('help.okta.com/ja-jp/')) {
    newURL = currentURL.replace('help.okta.com/ja-jp/', 'help.okta.com/oie/ja-jp/');
  }

  if (newURL) {
    chrome.tabs.update(tab.id, { url: newURL });
  }
});

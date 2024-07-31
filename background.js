chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openLink") {
    // 新しいタブをバックグラウンドで作成
    chrome.tabs.create({ url: request.url, active: false }, function(newTab) {
      if (chrome.runtime.lastError) {
        console.error("Error creating tab:", chrome.runtime.lastError);
      } else {
        console.log("Tab created successfully in background:", newTab);
      }
    });
  }
});
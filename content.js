console.log('content.jsが読み込まれました');

// MutationObserverを設定してDOMの変化を監視
const observer = new MutationObserver((mutationsList, observer) => {
  console.log('DOMの変化を検出しました');

  // 変化があった際にリンクを探す
  const links = document.querySelectorAll('a');
  console.log('リンクを探しています', links.length);  // リンクの数を表示

  let targetLink = null;
  links.forEach(link => {
    console.log('リンクのテキスト:', link.textContent);  // 各リンクのテキストを表示
    if (link.textContent.includes('クリックすると経費精算申請を表示します')) {
      targetLink = link;
      console.log('ターゲットリンクが見つかりました:', targetLink.href);  // ターゲットリンクが見つかったことを表示
    }
    if (link.textContent.includes('クリックすると勤務表を表示します')) {
      targetLink = link;
      console.log('ターゲットリンクが見つかりました:', targetLink.href);  // ターゲットリンクが見つかったことを表示
    }
  });

  if (targetLink) {
    const url = targetLink.href;
    console.log('ターゲットリンクのURLを送信:', url);  // 送信するURLを表示
    // 背景スクリプトにリンクのURLを送信
    chrome.runtime.sendMessage({ action: "openLink", url: url });

    // 一度ターゲットリンクが見つかったら監視を停止
    observer.disconnect();
  } else {
    console.log('ターゲットリンクが見つかりませんでした');  // ターゲットリンクが見つからなかった場合のメッセージ
  }
});

// 監視を開始
observer.observe(document.body, { childList: true, subtree: true });

console.log('DOMの監視を開始しました');
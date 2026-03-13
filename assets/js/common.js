// HTMLを非同期で読み込む関数
function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(); // HTML読み込み後に実行
    });
}

// ------------------------------
// HTMLを読み込む
// ------------------------------
loadHTML("header", "/assets/components/header.html", function() {
  // header読み込み後にハンバーガーイベント登録
  const btn   = document.querySelector('.toggle_btn'); // ハンバーガー
  const aside = document.querySelector('.side-nav');   // 目次
  const mask  = document.getElementById('mask');       // 背景マスク

  // 要素が存在するか確認
  if (!btn || !aside || !mask) {
    console.warn('toggle_btn, side-nav, or mask が見つかりません');
    return;
  }

  // ハンバーガーを表示（念のため）
  btn.style.display = 'block';

  // クリックで open クラス切替
  btn.addEventListener('click', () => {
    aside.classList.toggle('open');
    mask.classList.toggle('open');
  });

  // マスククリックで閉じる
  mask.addEventListener('click', () => {
    aside.classList.remove('open');
    mask.classList.remove('open');
  });
});

// aside と footer の読み込み（イベント不要）
loadHTML("aside", "/assets/components/aside.html");
loadHTML("footer", "/assets/components/footer.html");
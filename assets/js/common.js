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
// HTMLを読み込む順番を整理
// ------------------------------
// header読み込み
loadHTML("header", "/assets/components/header.html", function() {

  // aside読み込み
  loadHTML("aside", "/assets/components/aside.html", function() {

    const btn   = document.querySelector('.toggle_btn'); // ハンバーガー
    const aside = document.querySelector('.side-nav');   // 目次
    const mask  = document.getElementById('mask');       // 背景マスク

    if (!btn || !aside || !mask) return;

    // ハンバーガークリックで開閉
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

});

// footerはイベント不要
loadHTML("footer", "/assets/components/footer.html");
// HTMLを非同期で読み込む関数
function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    });
}

// header → aside → footer
loadHTML("header", "/assets/components/header.html", function() {
  loadHTML("aside", "/assets/components/aside.html", function() {

    const btn   = document.querySelector('.toggle_btn');
    const aside = document.querySelector('.side-nav');
    const mask  = document.getElementById('mask');

    if (!btn || !aside || !mask) return;

    // 初期状態
    aside.classList.remove('open');
    mask.classList.remove('open');

    // 🍔クリックで開閉
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

loadHTML("footer", "/assets/components/footer.html");
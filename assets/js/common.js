// HTMLを非同期で読み込む関数
function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    });
}

loadHTML("header", "/assets/components/header.html", function() {
  loadHTML("aside", "/assets/components/aside.html", function() {

    const btn   = document.querySelector('.toggle_btn');
    const aside = document.querySelector('.side-nav');
    const mask  = document.getElementById('mask');

    if (!btn || !aside || !mask) return;

    // 初期非表示
    aside.style.right = "-250px";

    // 🍔クリックで開閉
    btn.addEventListener('click', () => {
      if(aside.classList.contains('open')) {
        aside.classList.remove('open');
        aside.style.right = "-250px";
        mask.classList.remove('open');
      } else {
        aside.classList.add('open');
        aside.style.right = "0";
        mask.classList.add('open');
      }
    });

    // マスククリックで閉じる
    mask.addEventListener('click', () => {
      aside.classList.remove('open');
      aside.style.right = "-250px";
      mask.classList.remove('open');
    });

  });
});
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

    const btn   = document.querySelector('.hamburger');
    const aside = document.querySelector('.side-nav');
    const mask  = document.getElementById('mask');

    if (!btn || !aside || !mask) return;

    // 初期状態（スマホのみ）
    if (window.innerWidth <= 768) {
      aside.classList.remove('active');
      mask.classList.remove('open');
    }

    // 開閉
    btn.addEventListener('click', () => {
      aside.classList.toggle('active');
      mask.classList.toggle('open');
    });

    // 背景クリックで閉じる
    mask.addEventListener('click', () => {
      aside.classList.remove('active');
      mask.classList.remove('open');
    });

  });
});

loadHTML("footer", "/assets/components/footer.html");
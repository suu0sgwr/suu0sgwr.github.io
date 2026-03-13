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

    const btn   = document.querySelector('.toggle_btn');  // 🍔
    const aside = document.querySelector('.side-nav');    // aside
    const mask  = document.getElementById('mask');        // マスク

    if (!btn || !aside || !mask) return;

    // スマホのみ、aside初期非表示
    aside.style.right = '-250px';

    btn.addEventListener('click', () => {
      aside.classList.toggle('open');
      mask.classList.toggle('open');
    });

    mask.addEventListener('click', () => {
      aside.classList.remove('open');
      mask.classList.remove('open');
    });
  });
});

loadHTML("footer", "/assets/components/footer.html");
function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadHTML("header", "/assets/components/header.html");
loadHTML("aside", "/assets/components/aside.html");
loadHTML("footer", "/assets/components/footer.html");

function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(); // HTML読み込み後に実行
    });
}

// header読み込み後にハンバーガーメニューのイベント設定
// ハンバーガークリックでサイドナビを開く
loadHTML("header", "/assets/components/header.html", function() {
  (function($){
    var $btn   = $('.toggle_btn');  // ハンバーガー
    var $aside = $('.side-nav');    // 目次
    var $mask  = $('#mask');        // 背景マスク
    var open   = 'open';

    $btn.on('click', function() {
      $aside.toggleClass(open);     // 表示/非表示
      $mask.toggleClass(open);
    });

    $mask.on('click', function() {
      $aside.removeClass(open);
      $mask.removeClass(open);
    });
  })(jQuery);
});
// asideとfooterはそのまま
loadHTML("aside", "/assets/components/aside.html");
loadHTML("footer", "/assets/components/footer.html");
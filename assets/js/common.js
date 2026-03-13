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
  (function($) {
    var $navBtn = $('.toggle_btn');   // ハンバーガーメニュー
    var $aside  = $('.side-nav');     // 目次
    var openCls = 'open';

    $navBtn.on('click', function() {
      $aside.toggleClass(openCls);    // openクラスの付け外しで表示/非表示
    });

    // マスクやクリック外で閉じたい場合
    $('#mask').on('click', function() {
      $aside.removeClass(openCls);
    });
  })(jQuery);
});
// asideとfooterはそのまま
loadHTML("aside", "/assets/components/aside.html");
loadHTML("footer", "/assets/components/footer.html");
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
  (function($){
    var $btn   = $('.toggle_btn');    // ハンバーガーメニュー
    var $aside = $('.side-nav');      // 目次
    var $mask  = $('#mask');          // 背景マスク
    var open   = 'open';

    // ハンバーガークリックで目次とマスクの表示切替
    $btn.on('click', function() {
      $aside.toggleClass(open);
      $mask.toggleClass(open);
    });

    // マスククリックで閉じる
    $mask.on('click', function() {
      $aside.removeClass(open);
      $mask.removeClass(open);
    });
  })(jQuery);
});

// aside と footer の読み込み（イベント不要）
loadHTML("aside", "/assets/components/aside.html");
loadHTML("footer", "/assets/components/footer.html");
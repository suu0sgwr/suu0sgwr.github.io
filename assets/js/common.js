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
loadHTML("header", "/assets/components/header.html", function() {
  (function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open';

    $btn.on('click', function() {
      $nav.toggleClass(open); // toggleClassにまとめると簡潔
    });

    $mask.on('click', function() {
      $nav.removeClass(open);
    });
  })(jQuery);
});

// asideとfooterはそのまま
loadHTML("aside", "/assets/components/aside.html");
loadHTML("footer", "/assets/components/footer.html");
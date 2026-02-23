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

(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open';

  $btn.on('click', function() {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });

  $mask.on('click', function() {
    $nav.removeClass(open);
  });
})(jQuery);
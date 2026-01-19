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


export function isWebp() {
  function testWebP (callback) {
    let webP = new Image();
    webP.onload = webP. onerror= function () {
      callback (webP.height === 2);
    };
    webP.src = "data:image/webp;base64, Uk1GRjoAAABXRUJQV1A4IC4AAACyAgCdASoCAAIALmk@mkoiIiIil";
  }
// Добавление класса _webр или по-webp для HTML
  testWebP (function (support) {
    let className = support === true? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}
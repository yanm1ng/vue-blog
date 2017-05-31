export function setTitle(title) {
  document.title = title;
  var i = document.createElement('iframe');
  i.src = 'https://yanm1ng.github.io';
  i.style.display = 'none';
  i.onload = function () {
    setTimeout(function () {
      i.parentNode.removeChild(i);
    }, 9)
  }
  document.body.appendChild(i);
}
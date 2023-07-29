function toggleMode() {
  const html = document.documentElement
  html.classList.toggle ('light')
  // pegar a tag img
const img = document.querySelector('#profile img')
// subustituir a img
if (html.classList.contains('light')) {

  img.setAttribute('src','./assets/flu1.png')}
  else {
    img.setAttribute ('src', './assets/brasil.png')
  }
}
  




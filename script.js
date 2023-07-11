function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src','./assets/avatarr-light.png')
  } else {
    //se tiver sem light mode, manter a imagem original
    img.setAttribute('src','./assets/avatar-dark.png')
  }

}
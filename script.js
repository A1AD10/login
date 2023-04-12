const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const containerFundo = document.querySelector('.container__fundo')
const botaologin = document.querySelector('.botao__login')
const fechaLogin = document.querySelector('.icone-close')

btn.onclick = function () {
  this.classList.toggle('active')
  container.classList.toggle('active')
  if(container.classList.contains('active')) {
    document.documentElement.style.setProperty('--cor1', '#260115')
    document.documentElement.style.setProperty('--cor2', '#2D0A1E')
  }else {
    document.documentElement.style.removeProperty('--cor1', '#260115')
    document.documentElement.style.removeProperty('--cor2', '#2D0A1E')
  }
}

botaologin.addEventListener('click', () => {
  containerFundo.classList.add('active')
}) 

fechaLogin.addEventListener('click', () => {
  containerFundo.classList.remove('active')
})





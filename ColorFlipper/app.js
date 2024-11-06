const body = document.body
const btn = body.querySelector('#btn')

btn.addEventListener('click', () => {
  body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  
})
const main = document.querySelector('.main')
const mainInsc = document.getElementById('maininsc')
const secInsc = document.getElementById('secondaryinsc')

window.addEventListener('load', () => {
  mainInsc.style.opacity = 1
  setTimeout(() => (secInsc.style.opacity = 1), 1000)
})

function listPage() {
  window.scrollTo({
    top: 940,
    behavior: 'smooth',
  })
}

const slides = document.querySelectorAll('.slide')

for (let slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}


const searchBtn = document.querySelector('[data-button]')
const searchInput = document.querySelector('[data-input]')

searchBtn.addEventListener('click', ()=>{
    searchInput.classList.toggle('hidden')
})

const cart = document.getElementById('cart')
const cartMenu = document.getElementById('cartMenu')
const closeMenu = document.getElementById('closeMenu')
const cartLog = document.getElementById('cartLog')
let cartCount = 1
const filterBtn = document.getElementById('filterBtn')
const filterMenu = document.getElementById('filterMenu')
const closeFilterMenu = document.getElementById('closeFilterMenu')
const cartButtons = document.querySelectorAll('.cartbtn')
const cartClear = document.querySelector('.cartclear')
const cartContentCont = document.querySelector('.cartcontentcont')
const cartContents = document.querySelector('.cartcontents')
const backDrop = document.querySelector('.babyback')


cartButtons.forEach(button => {
    button.addEventListener('click',() => {
    cartLog.classList.remove('hidden');
    cartLog.classList.add('flex');
    cartLog.textContent = cartCount++;
})
})
cartClear.addEventListener('click', () => {
    cartContents.classList.remove('flex')
    cartContents.classList.add('hidden')
    cartLog.classList.add('hidden')
    cartCount = 1
})

cart.addEventListener('click',() => {
    cartMenu.classList.remove('hidden');
    cartMenu.classList.add('flex');
    cartContents.classList.remove('hidden')
    cartContents.classList.add('flex')
})
closeMenu.addEventListener('click',() => {
    cartMenu.classList.remove('flex');
    cartMenu.classList.add('hidden');
})

filterBtn.addEventListener('click',() => {
    filterMenu.classList.remove('hidden');
    filterMenu.classList.add('block' , 'lg:hidden');
})
closeFilterMenu.addEventListener('click', () => {
    filterMenu.classList.add('hidden')
})
window.addEventListener('click', (e) => {
    if (e.target === filterMenu) {
        filterMenu.classList.add('hidden');
    }
});
// backDrop.addEventListener('click', () => {
// })

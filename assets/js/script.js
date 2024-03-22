let burgerMenu = document.querySelector('.burger_menu')
let sidbar = document.querySelector('aside')
let bgCover = document.querySelector('.bg_cover')

burgerMenu.addEventListener('click',e=>{
    //console.log('click')
    sidbar.classList.add('d_block')
    bgCover.classList.add('d_block')
})
bgCover.addEventListener('click',e=>{
   // console.log('click')
    sidbar.classList.remove('d_block')
    bgCover.classList.remove('d_block')
})
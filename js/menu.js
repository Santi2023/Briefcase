const mena = document.querySelector('.mena');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(mena)

mena.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target !=menu && e.target != mena){
        menu.classList.toggle("spread")
    }
})
const burgerBtn = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.header__burger--close');
const header = document.querySelector('.header__inner')
const infoTitle = document.querySelector('.info__text-title');
const infobtns = document.querySelector('.info__btns');






burgerBtn.addEventListener('click',()=>{
    headerToggle();
})
burgerClose.addEventListener('click',()=>{
    headerToggle();
})

const headerToggle = ()=>{
    infoTitle.classList.toggle('disable')
    infobtns.classList.toggle('disable')
    header.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    burgerClose.classList.toggle('active');

}



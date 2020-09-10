const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');
const navBar = document.querySelector('section');

hamburger.addEventListener('click', () => {
    hamburgerContainer.classList.toggle ('clicked');
    links.forEach((link) => {
        link.classList.toggle('fade');
    })
});

// window.addEventListener('scroll', ()=>{
//     navBar.classList.toggle('sticky', window.scrollY > 100)
// })

window.ons
window.addEventListener('scroll', ()=>{
    navBar.classList.toggle('sticky', window.scrollY > 0)
})

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = ()=>{
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%'
}
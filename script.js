const openmenu = document.getElementById('nav-menu');
const closemenu = document.getElementById('nav-menu-close');
const mobile_nav = document.getElementById('mobile-nav');
const main = document.querySelector('main')
openmenu.addEventListener('click',(e)=>{
    e.preventDefault();
    mobile_nav.style.display='block';
    document.body.classList.add("stop-scroll");
})
closemenu.addEventListener('click',(e)=>{
    e.preventDefault();
    mobile_nav.style.display='none';
    document.body.classList.remove("stop-scroll");
})
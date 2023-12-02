// changing the nav background cloro on scroll


window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >3)
})
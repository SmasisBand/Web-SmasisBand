const menu = document.querySelector(".menu")
const icon_menu = document.querySelector(".icon")
const menus = document.querySelector(".moff")

icon_menu.addEventListener("click",()=>
{
    menu.classList.toggle("on")
})

window.addEventListener("scroll",()=>
{
    const navigasi = document.querySelector(".navigasi")
    navigasi.classList.toggle("onscroll",window.scrollY > 0)
})
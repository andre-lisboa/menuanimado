const navBar = document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')
const indiCador = document.querySelector(".indicador")

allLi.forEach((li, index) =>{


    li.addEventListener("click", e=>{
        navBar.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")
        
        indiCador.style.transform = `translateX(calc(${index * 90}px))`
    })
})
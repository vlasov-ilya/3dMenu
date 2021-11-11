const burger = document.querySelector('.burger')
const container = document.querySelector('.container')
const screens = document.querySelectorAll('.screen')

burger.addEventListener('click', () => {
    container.classList.toggle('active')
})

function replaceBackGround(id){
    const background = document.getElementById(id)
    screens.forEach (screens => {
        screens.style.display = 'none'
    })
    background.style.display = 'block'
}

function changeBackGround(){
    const links = document.querySelectorAll('.link')

    links.forEach((link) => {
        link.addEventListener('mouseenter', e=>{
            e.preventDefault()
            replaceBackGround(e.target.dataset.link)

        })

        link.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toggle('active')
        })
    })

    screens.forEach( screens => {
        screens.style.display = 'none'
        screens[0].style.display = 'block'
    })
}
changeBackGround()

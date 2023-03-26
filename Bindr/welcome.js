let $ = document.querySelector.bind(document)
let getMenu = $(".nav-menu")
let getList = $('.nav-contact__mobile')

console.log("check",getMenu)

;(function(){
    getMenu.onclick =() =>
    {
        getList.classList.toggle('hide')
    }
})()
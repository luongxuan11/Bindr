let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let signIn = $('.sign-in__action')
let formWrap = $('.form-wrapper')
let getBody = $('body')
// event
;(function(){
    signIn.addEventListener('click', e => {
        formWrap.classList.remove('hide')
        formWrap.innerHTML = `<form action="">
        <div class="form-box">
            <div class="form-signIn">
                <i class='bx bx-x'></i>
                <div class="form-heading">
                    <i class='bx bx-user-circle'></i>
                    <h1 class="form-heading__title">Login to <strong>Bindr</strong></h1>
                    <button class="form-heading__signIn__action form-heading__signIn__action__facebook">Sign in with
                        Facebook</button>
                    <button class="form-heading__signIn__action form-heading__signIn__action__google">Sign in with
                        Google</button>
                </div>

                <div class="form-signIn__control  form-signIn__control__email">
                    <label for="email">Your email</label>
                    <input id="email" type="text" name="email" placeholder="Enter your email">
                    <span></span>
                </div>
                <div class="form-signIn__control">
                    <label for="password">Password</label>
                    <input id="password" type="password" name="password" placeholder="Enter your Password..">
                    <span></span>
                </div>

                <div class="remember row"><input type="checkbox">
                    <p class="remember__me">Remember me</p>
                </div>
                <div class="start row">
                    <button class="start-to-bindr">CANCEL</button>
                    <button class="start-to-bindr">LET'S GO!</button>
                </div>
                <a href="#!" class="forgot">Forgot your password ?</a>
            </div>
        </div>
    </form>`
        getBody.style.overflow = "hidden"
    })

    document.addEventListener('click', e =>
    {
        const closeForm = e.target.closest(".bx-x")
        if(closeForm){
            formWrap.classList.add('hide')
            getBody.style.overflow = "auto"
        }
    })
})()

// handle
function getData(){

}
;(function (){
    getData()
})()
import { hello } from './register.js';
console.log(hello)
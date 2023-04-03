
let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let email = $('#email')
let userName = $('#username')
let password = $('#password')
let ask = $('#ask')
let arrayInput = [email, userName, password, ask]
let notification = $('.notification')
let power = $('.power-box')
let powerInner = $('.power')
console.log(powerInner)
let api = "http://localhost:3000/infoName"

// life function
const form = $('form')
    ; (function () {
        let delay = $(".form__explore p:first-child")
        setTimeout(() => {
            delay.innerText = "Let’s begin the adventure"
            delay.style.animationName = "typing"
            delay.style.animationDuration = '3s'
            delay.style.animationIterationCount = '1'
        }, 3000)
        setTimeout(() => {
            let pLastChild = $('.form__explore p:last-child')
            pLastChild.remove()
            let formControl = $('.form-control--1')
            formControl.classList.remove('hide')
            email.focus()
        }, 6500)
    })()
    // life function visible
    ; (function () {
        arrayInput.forEach((item) => {
            if (item !== null || item !== undefined) {
                item.addEventListener('focus', () => {
                    let parentBtn = item.parentElement
                    let btnAction = parentBtn.querySelector('.form-control__btn--action')
                    btnAction.classList.remove('unVisible')
                })
                item.addEventListener('blur', () => {
                    let parentBtn = item.parentElement
                    let btnAction = parentBtn.querySelector('.form-control__btn--action')
                    btnAction.classList.add('unVisible')
                })
            }
        })
    })()



    ; (function () {
        password.addEventListener("focus", e => {
            power.classList.remove('hide')
        })
        password.addEventListener('blur', () => {
            power.classList.add('hide')
        })
    })()
// success function
function showSuccess(input) {
    let parent = input.parentElement
    let icon = parent.querySelectorAll('.bx')
    parent.classList.remove('error')
    parent.classList.add('success')
    notification.innerHTML = ""
}

// error function
function showError(input, message) {
    let parent = input.parentElement
    let icon = parent.querySelector('.bx')
    parent.classList.remove('success')
    parent.classList.add('error')
    let notification = $('.notification')
    notification.innerHTML = `<span>${message}</span>`
}

// check empty
let emptyInput = false
function checkEmptyInput(listInput) {
    listInput.forEach(item => {
        if (item !== null) {
            item.value = item.value.trim()
            if (item.value.length === 0 || item.value == "") {
                emptyInput == false

                // change icon
                let parent = item.parentElement
                let icon = parent.querySelectorAll('.bx')
                icon.forEach((item) => {
                    item.classList.remove('bx-right-arrow-alt')
                    item.classList.add('bx-x')
                })
                showError(item, "Must not be empty")
                return emptyInput = false
            }
            else {
                // change icon
                let parent = item.parentElement
                let icon = parent.querySelectorAll('.bx')
                icon.forEach((item) => {
                    item.classList.remove('bx-right-arrow-alt')
                    item.classList.remove('bx-x')
                    item.classList.add('bx-check')
                })
                showSuccess(item)
                return emptyInput = true
            }
        }
    });
    return emptyInput
}

// check length
function checkUserLength(input, min, max) {
    let checkLength = true
    input.value = input.value.trim()
    if (input !== null || input !== undefined) {
        if (input.value.length < min) {
            let parent = input.parentElement
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((input) => {
                input.classList.remove('bx-right-arrow-alt')
                input.classList.add('bx-x')
            })
            showError(input, "The name must have at least 5 characters and a maximum of 20 characters")
            return checkLength = false
        }
        else if (input.value.length > max) {
            let parent = input.parentElement
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((input) => {
                input.classList.remove('bx-right-arrow-alt')
                input.classList.add('bx-x')
            })
            showError(input, "The name too long")
            return checkLength = false
        }
        else {
            let parent = input.parentElement
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((input) => {
                input.classList.remove('bx-right-arrow-alt')
                input.classList.remove('bx-x')
                input.classList.add('bx-check')
            })
            if (checkLength !== false) {
                $('.form-control--3').classList.remove('hide')
                password.focus()
            }
            showSuccess(input)
            return checkLength = true
        }
    }
    return checkLength
}

// check email
function checkEmail(input) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()
    let isEmailOk = regexEmail.test(input.value)
    if (input !== null || input !== undefined) {
        input.oninput = () => {
            if (regexEmail.test(input.value) !== true) {
                showError(input, "Email is required or invalid")
            }
            else (
                showSuccess(input)
            )
            console.log()
        }
        if (regexEmail.test(input.value) !== true) {
            let parent = input.parentElement
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((item) => {
                item.classList.remove('bx-right-arrow-alt')
                item.classList.add('bx-x')
            })
            showError(input, "Email is required or invalid")
        }
        if (isEmailOk === true) {
            $('.form-control--2').classList.remove('hide')
            userName.focus()
        }
    }
    return isEmailOk
}

// password
function securityPassword(input, min, normal, max) {
    if (input.value !== null || input.value !== undefined) {
        input.oninput = () => {
            let point = 0
            let result = input.value
            let widthPoint = ['2%', '25%', "50%", "75%", "100%"]
            let colorPoint = ['#e74c3c', '#e74c3c', '#dc6551', '#f2b84f', '#30cec7']
            let arrayTest = [/[A-Z]/, /[0-9]/, /[a-z]/]
            arrayTest.forEach((item) => {
                if (item.test(result)) {
                    point += 1
                }
            })
            // oninput not submit
            input.value = input.value.trim()
            if (input.value.length >= min) {
                point += 1
                let parent = input.parentElement
                let icon = parent.querySelectorAll('.bx')
                icon.forEach((input) => {
                    input.classList.remove('bx-right-arrow-alt')
                    input.classList.remove('bx-x')
                    input.classList.add('bx-check')
                })
                showSuccess(input)
            }
            if (input.value.length < min) {
                let parent = input.parentElement
                let icon = parent.querySelectorAll('.bx')
                icon.forEach((input) => {
                    input.classList.remove('bx-right-arrow-alt')
                    input.classList.remove('bx-check')
                    input.classList.add('bx-x')
                })
                showError(input, `Password must be more than ${min} characters and must have both number and letter in uppercase to pass`)
            }
            else if (input.value.length > max) {
                let parent = input.parentElement
                let icon = parent.querySelectorAll('.bx')
                icon.forEach((input) => {
                    input.classList.remove('bx-right-arrow-alt')
                    input.classList.remove('bx-check')
                    input.classList.add('bx-x')
                })
                showError(input, `Password can't exceed ${max} characters`)
            }
            powerInner.style.width = widthPoint[point]
            powerInner.style.backgroundColor = colorPoint[point]
            console.log(point)
            if (point > 3) {
                $('.form-control--4').classList.remove('hide')
            }
            else {
                $('.form-control--4').classList.add('hide')
            }
        }

        // check submit
        if (input.value.length < min) {
            let parent = input.parentElement
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((input) => {
                input.classList.remove('bx-right-arrow-alt')
                input.classList.remove('bx-check')
                input.classList.add('bx-x')
            })
            return false
        }
        else {
            showSuccess(input)
            return true
        }
    }
    return true
}

// question
function checkQuestion(input) {
    let isQuestionOk = false
    input.value = input.value.trim()
    if (input.value !== null || input.value !== undefined) {
        if (input.value === "n") {
            let parent = input.parentElement
            parent.classList.remove('success')
            parent.classList.add('error')
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((input) => {
                input.classList.remove('bx-right-arrow-alt')
                input.classList.add('bx-x')
            })
            isQuestionOk = false
        }
        else if (input.value === "y") {
            let parent = input.parentElement
            let icon = parent.querySelectorAll('.bx')
            icon.forEach((input) => {
                input.classList.remove('bx-right-arrow-alt')
                input.classList.remove('bx-x')
                input.classList.add('bx-check')
            })
            isQuestionOk = true
        }
        if (isQuestionOk === true) {
            $('.submit').classList.remove('hidePlus')
            password.blur()
        }
    }
    console.log("quston>>", isQuestionOk)
    return isQuestionOk
}

// handle
function handleAllForm() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let isEmptyInput = checkEmptyInput([email, userName, password, ask])
        let isEmailOke = checkEmail(email)
        let checkUser = checkUserLength(userName, 5, 20)
        let checkPasswordLength = securityPassword(password, 5, 12, 20)
        let question = checkQuestion(ask)
        let listData = {
            valueName: userName.value,
            valueEmail: email.value,
            valuePassword: password.value
        }
        // check
        if (!isEmptyInput || !isEmailOke || !checkUser || !checkPasswordLength || !question) {
            console.log("loi")
        }
        // success
        else {

            let postUser = (data, callback) => {
                let obj = {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                fetch(api, obj).then((response) => {
                    return response.json()
                })
                    .then(callback => {
                        window.location.href = "http://127.0.0.1:5500/Bindr/Bindr.html";
                        arrayInput.forEach((item) => {
                            item.value = ""
                        })
                    })
                    .catch((error) => {
                        console.log("something wrong error!", error)
                    })
            }
                ; (function () {
                    postUser(listData)
                })()
        }
    })
}
; (function () {
    handleAllForm()
})()
let hello = "hello"
export { hello }
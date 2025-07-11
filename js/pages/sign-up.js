import { register } from "../core/auth.js"

const submitFormLogin = document.querySelector('.sent_info')

submitFormLogin.addEventListener('click', e => {
    e.preventDefault()
    register()
})
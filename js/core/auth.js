import { showSwal } from "../core/utils.js";


const register = async () => {

    const firstNameInputElem = document.querySelector('#first_name')
    const lastNameInputElem = document.querySelector('#last_name')
    const userNameInputElem = document.querySelector('#username')
    const emailInputElem = document.querySelector('#email')
    const phoneNumberInputElem = document.querySelector('#phone')
    const passwordInputElem = document.querySelector('#password')


    const newUserInfo = {
        first_name: firstNameInputElem.value,
        last_name: lastNameInputElem.value,
        // username: userNameInputElem.value,
        email: emailInputElem.value,
        // phone: phoneNumberInputElem.value,
        password: passwordInputElem.value,
    }

    const res = await fetch(`http://localhost:4000/auth/register`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserInfo)
    })
    const data = await res.json()
    console.log(data);

}
const login = async () => {
    const userNameInputElem = document.querySelector('#username')
    const phoneNumberInputElem = document.querySelector('#phone_number')

    const newUserInfo = {
        emName: userNameInputElem.value,
        password: phoneNumberInputElem.value,
    }

    const res = await fetch(`http://localhost:4000/auth/login`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserInfo)
    })
    const data = await res.json()

    console.log(data);
}
const getMe = () => { }



export { register, login, getMe }





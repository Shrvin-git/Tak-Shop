import { showSwal } from "../core/utils.js";


const register = async () => {

    const firstNameInputElem = document.querySelector('#first_name')
    const lastNameInputElem = document.querySelector('#last_name')
    const userNameInputElem = document.querySelector('#username')
    const emailInputElem = document.querySelector('#email')
    const phoneNumberInputElem = document.querySelector('#phone')
    const passwordInputElem = document.querySelector('#password')
    const userRole = 'admin'


    const newUserInfo = {
        firstName: firstNameInputElem.value,
        lastName: lastNameInputElem.value,
        userName: userNameInputElem.value,
        email: emailInputElem.value,
        mobile: phoneNumberInputElem.value,
        password: passwordInputElem.value,
        role: userRole
    }

    const res = await fetch(`https://takshop.liara.run/signUp.php`, {
        method: `POST`,
        body: JSON.stringify(newUserInfo)
    })
    const data = await res.json()
    console.log(data.status);
    if (data.status === "ok") {
        showSwal(
            'با موفقیت ثبت نام شدید ^^',
            'success',
            'برو بریم',
            async () => { location.href = 'index.html' }
        );
    }

}
const login = async () => {
    const userNameInputElem = document.querySelector('#username')
    const phoneNumberInputElem = document.querySelector('#phone_number')

    const newUserInfo = {
        emName: userNameInputElem.value,
        password: phoneNumberInputElem.value,
    }

    const res = await fetch(`https://takshop.liara.run/signIn.php`, {
        method: `POST`,
        body: JSON.stringify(newUserInfo)
    })
    const data = await res.json()

    console.log(data);
}
const getMe = () => { }



export { register, login, getMe }





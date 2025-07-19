import { showSwal, saveIntoLocalStorage } from "../core/utils.js";


const register = async () => {
    // گرفتن عناصر فرم
    const firstNameInputElem = document.querySelector('#first_name');
    const lastNameInputElem = document.querySelector('#last_name');
    const userNameInputElem = document.querySelector('#username');
    const emailInputElem = document.querySelector('#email');
    const phoneNumberInputElem = document.querySelector('#phone');
    const passwordInputElem = document.querySelector('#password');

    // ساخت بدنه دیتای کاربر - طبق اسکیمای UserModel
    const newUserInfo = {
        first_name: firstNameInputElem.value.trim(),
        last_name: lastNameInputElem.value.trim(),
        username: userNameInputElem.value.trim(),
        email: emailInputElem.value.trim().toLowerCase(),
        phone: phoneNumberInputElem.value.trim(), // دقت کن که type اون در مدل string هست
        password: passwordInputElem.value.trim()
    };


    const res = await fetch(`http://localhost:4000/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserInfo)
    });

    const data = await res.json();
    console.log(data.token);
    if (res.ok) {
        showSwal(
            'با موفقیت ثبت نام شدید',
            'success',
            'حله',
            () => { location.href = 'profile.html' }
        )

        saveIntoLocalStorage('user', { token: data.token })

    }


};



const login = async () => {
    const emailInputElem = document.querySelector('#email');
    const passwordInputElem = document.querySelector('#password');

    const loginData = {
        email: emailInputElem.value.trim().toLowerCase(),
        password: passwordInputElem.value.trim()
    };


    const res = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    const data = await res.json();
    console.log(data)
    if (res.ok) {
        showSwal(
            'با موفقیت وارد شدید',
            'success',
            'ورود به پنل کاربری',
            () => {
                location.href = 'profile.html'

            }
        )
        saveIntoLocalStorage('user', { token: data.token })

    }


};




const getMe = () => { }



export { register, login, getMe }





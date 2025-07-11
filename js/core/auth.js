const register = () => {

    const firstNameInputElem = document.querySelector('#first_name')
    const lastNameInputElem = document.querySelector('#last_name')
    const userNameInputElem = document.querySelector('#username')
    const emailInputElem = document.querySelector('#email')
    const phoneNumberInputElem = document.querySelector('#phone')
    const passwordInputElem = document.querySelector('#password')


    console.log(firstNameInputElem.value);
    console.log(lastNameInputElem.value);
    console.log(userNameInputElem.value);
    console.log(emailInputElem.value);
    console.log(phoneNumberInputElem.value);
    console.log(passwordInputElem.value);

}
const login = () => {
    const userNameInputElem = document.querySelector('#username')
    const phoneNumberInputElem = document.querySelector('#phone_number')

    console.log(userNameInputElem.value);
    console.log(phoneNumberInputElem.value);
}
const getMe = () => { }



export { register, login, getMe }
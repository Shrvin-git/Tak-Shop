const nameOrFamilyInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const messageInput = document.querySelector('#message')
const sendMeassageBtn = document.querySelector('.send-message')


sendMeassageBtn.addEventListener('click', async e => {


    const newUserInfo = {
        nameOrFamilyInput: nameOrFamilyInput.value,
        emailInput: emailInput.value,
        phoneInput: phoneInput.value,
        messageInput: messageInput.value,
        sendMeassageBtn: sendMeassageBtn.value,
    }


    const res = await fetch(``)
    const data = await res.json()
    console.log(data);

})
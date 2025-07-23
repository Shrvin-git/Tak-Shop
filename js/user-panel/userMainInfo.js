import { getToken } from "../core/utils.js";


const getAndShowAllUserInformation = async () => {


    const nameAndFamilyInput = document.querySelector('#name-family')
    const emailInput = document.querySelector('#email')
    const userPhonNumberInput = document.querySelector('#tel')
    const userLocationInput = document.querySelector('#location')
    const userAddresInput = document.querySelector('#post')


    const res = await fetch(`http://localhost:4000/user/profile`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    const data = await res.json();
    console.log(data);


    nameAndFamilyInput.value = `${data.first_name} ${data.last_name}`
    emailInput.value = data.email
    userPhonNumberInput.value = data.phone
    userLocationInput.value =  ' آدرس شما هنوز تنظیم نشده است !'  
    userAddresInput.value = ' کد پستی شما هنوز تنظیم نشده است !'
}


export { getAndShowAllUserInformation }
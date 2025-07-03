const discountSecondElem = document.querySelector('.discount_second')
const discountMinutElem = document.querySelector('.discount_minut')
const discountHourElem = document.querySelector('.discount_hour')







//  ==== Discount Timer

let second = 5
let minut = 1
let hour = 23



const deadLineDiscount = setInterval(() => {
  second--;

  if (second === -1) {
    minut--;
    second = 59;
  }

  if (minut === -1) {
    hour--;
    minut = 59;
  }

  // فرمت 2 رقمی با صفر اول
  discountSecondElem.innerHTML = String(second).padStart(2, "0");
  discountMinutElem.innerHTML = ':' + String(minut).padStart(2, "0");
  discountHourElem.innerHTML = ':' + String(hour).padStart(2, "0");

}, 1000);








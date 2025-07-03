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






//  ==== Accordion Handling
document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');

    const isOpen = panel.classList.contains('open');
    // اگر چندتا آیتم همزمان باز نباید باشن، ابتدا همه رو ببند:
    document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

    if (!isOpen) {
      panel.classList.add('open');
      arrow.classList.add('open');
    }
  });
});




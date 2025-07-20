import { getAndShowAllUserInformation } from "./userMainInfo.js";
import { getAndShowAllNotification } from "./notification.js";
import { getAndShowAllPopularProducts } from "./popularProducts.js";
import { getAndShowAllComments } from "./comments.js";
import { getAndShowAllOrders } from "./orders.js";
import { getAndShowAllGiftCart } from "./giftCart.js";



// ! User Panel Sections Handles
const sectionListElem = document.querySelectorAll('.profile-sidebar-item');
const allSectionsElem = document.querySelectorAll('.user-panel');
const profileSidebarElem = document.querySelector('.profile-sidebar')


sectionListElem.forEach(item => {
    item.addEventListener('click', e => {


        const sectionItem = e.target.closest('.profile-sidebar-item'); // مهم!
        if (!sectionItem) return;

        const dataSetSection = sectionItem.dataset.section;
        if (!dataSetSection) return;

        // غیرفعال‌سازی همه سکشن‌ها
        allSectionsElem.forEach(sec => sec.style.display = 'none');

        // نمایش سکشن انتخاب شده
        const targetSection = document.querySelector(`#${dataSetSection}`);
        if (targetSection) {
            targetSection.style.display = 'flex';
            profileSidebarElem.style.display = 'none'
        }

        // مدیریت کلاس active برای آیتم‌های سایدبار
        sectionListElem.forEach(i => i.classList.remove('item-active'));
        sectionItem.classList.add('item-active');

        // * Loded Js 
        switch (dataSetSection) {

            case 'main-info':
                getAndShowAllUserInformation()
                break;

            case 'message':
                getAndShowAllNotification()
                break;

            case 'popular-product':
                getAndShowAllPopularProducts()
                break;

            case 'comments':
                getAndShowAllComments()
                break;

            case 'user-order':
                getAndShowAllOrders()
                break;

            case 'gift-cart':
                getAndShowAllGiftCart()
                break;

            default:
                break;
        }

    });
});




// ! Orders Sections Handles
const orderSectionsElem = document.querySelectorAll('.order-modes');
const orderMoodesCounter = document.querySelectorAll('.order-moodes-counter');

orderSectionsElem.forEach(item => {
    item.addEventListener('click', e => {
        const sectionItem = e.target.closest('.order-modes');
        if (!sectionItem) return;

        // حذف کلاس active از همه آیتم‌ها
        orderSectionsElem.forEach(i => i.classList.remove('order-modes--active'));
        orderMoodesCounter.forEach(i => i.classList.remove('active'));

        // افزودن کلاس active به آیتم انتخاب‌شده
        sectionItem.classList.add('order-modes--active');

        const counterElem = sectionItem.querySelector('.order-moodes-counter');
        if (counterElem) {
            counterElem.classList.add('active');
        }
    });
});















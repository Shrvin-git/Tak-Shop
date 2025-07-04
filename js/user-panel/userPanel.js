const sectionListElem = document.querySelectorAll('.profile-sidebar-item');
const allSectionsElem = document.querySelectorAll('.user-panel');

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
            targetSection.style.display = 'block';
        }

        // مدیریت کلاس active برای آیتم‌های سایدبار
        sectionListElem.forEach(i => i.classList.remove('item-active'));
        sectionItem.classList.add('item-active');
    });
});



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


const blogCategoryItems = document.querySelectorAll('.blog-category-items')

blogCategoryItems.forEach(item => {
    item.addEventListener('click', e => {
        blogCategoryItems.forEach(item => {
            item.classList.remove('blog-category--active')
        })
        e.target.classList.add('blog-category--active')
    })
})
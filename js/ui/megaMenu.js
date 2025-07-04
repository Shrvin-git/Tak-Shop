
// ==== Mega Menu Handling

const loadMegaMenuNavbar = () => {
    const data = {
        "موبایل": {
            brand: ["آیفون", "سامسونگ", "شیائومی", "هواوی", "آنر", "ریلمی", "نوکیا"],
            price: [
                "زیر پنج میلیون تومان",
                "بین پنح تا هفت میلیون تومان",
                " بین پنح تا هفت میلیون تومان",
                "بین هفت تا ده میلیون تومان",
                "بین ده تا پونزده میلیون تومان",
                "بین پونزده تا بیست میلیون تومان",
                "بین بیست تا سی میلیون تومان",
                "بالای سی میلیون تومان",
            ],
            performance: ["پرچمدار", "میان‌رده", "اقتصادی"]
        },
        "لپ تاپ": {
            brand: ["ایسوس", "لنوو", "اچ‌پی", "دل"],
            price: ["تا ۱۰ میلیون", "۱۰ تا ۲۰", "۲۰ تا ۳۰", "بیش از ۳۰ میلیون"],
            performance: ["اداری", "دانشجویی", "گیمینگ"]
        },
        "لوازم جانبی لپ تاپ": {
            brand: ["تسکو", "گرین", "دیپ‌کول"],
            price: ["زیر ۵۰۰ هزار", "۵۰۰ تا ۱ میلیون", "بیشتر از ۱ میلیون"],
            performance: ["خنک‌کننده", "استند", "هاب USB"]
        },
        "هدست و هدفون": {
            brand: ["سونی", "جی‌بی‌ال", "شیائومی"],
            price: ["زیر ۱ میلیون", "۱ تا ۲", "۲ تا ۴"],
            performance: ["بلوتوث", "گیمینگ", "ورزشی"]
        },
        "دوربین": {
            brand: ["Canon", "Nikon", "Sony"],
            price: ["۱۰ تا ۳۰", "۳۰ تا ۵۰", "۵۰+"],
            performance: ["آینه‌ای", "بدون آینه", "اکشن"]
        },
        "اینترنت": {
            brand: ["مبین‌نت", "ایرانسل"],
            price: ["ماهانه", "سه‌ماهه", "سالیانه"],
            performance: ["مودم همراه", "مودم خانگی"]
        },
        "ساعت هوشمند": {
            brand: ["اپل", "سامسونگ", "هواوی"],
            price: ["کمتر از ۲", "۲ تا ۵", "۵+"],
            performance: ["ورزشی", "پزشکی", "عمومی"]
        }
    };

    const categoryItems = document.querySelectorAll(".menu-categories li");
    const megaMenuWrapper = document.querySelector(".mega-content-wrapper");

    function createSection(title, items) {
        const section = document.createElement("div");
        section.classList.add("mega-section");

        const h4 = document.createElement("h4");
        h4.textContent = title;

        const ul = document.createElement("ul");
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });

        section.appendChild(h4);
        section.appendChild(ul);
        return section;
    }

    function updateMegaMenu(category) {
        const content = data[category];
        if (!content) return;

        megaMenuWrapper.classList.remove("visible");

        setTimeout(() => {
            megaMenuWrapper.innerHTML = "";

            megaMenuWrapper.appendChild(createSection("دسته بندی بر اساس برند", content.brand));
            megaMenuWrapper.appendChild(createSection("دسته بندی بر اساس قیمت", content.price));
            megaMenuWrapper.appendChild(createSection("دسته بندی بر اساس عملکرد", content.performance));

            megaMenuWrapper.classList.add("visible");
        }, 200);
    }

    categoryItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            categoryItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const catText = item.textContent.trim();
            updateMegaMenu(catText);
        });
    });

    updateMegaMenu("موبایل");




}



export { loadMegaMenuNavbar }
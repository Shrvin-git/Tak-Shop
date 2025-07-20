import { showSwal } from "../core/utils.js";
import { getToken } from "../core/utils.js";

const logOutBtn = document.querySelector('.logout-account')



logOutBtn.addEventListener('click', e => {
    showSwal(
        ' واقعا میخوای از حساب کاربری حارج بشی؟ ',
        'warning',
        'بله',
        'نه',
        async (result) => {
            if (result.isConfirmed) {
                const token = getToken();

                const res = await fetch(`http://localhost:4000/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });

                const data = await res.json();
                console.log(data);
                
            }
        }
    );
});





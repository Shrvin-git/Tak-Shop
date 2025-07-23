import { showSwal } from "../core/utils.js";
import { getToken } from "../core/utils.js";

const logOutBtn = document.querySelector('.logout-account')



logOutBtn.addEventListener('click', e => {
    showSwal(
        ' واقعا میخوای از حساب کاربری خارج بشی؟ ',
        'warning',
        'بله',
        'نه',
        async (result) => {
            if (result.isConfirmed) {

                const res = await fetch(`http://localhost:4000/auth/logout`, {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });

                if (res.status === 200) {
                    localStorage.removeItem('user')

                    showSwal(
                        'با موفقیت خارج شدید',
                        'success',
                        'ممنون',
                        () => { location.href = 'login.html' }
                    )
                }

            }
        }
    );
});





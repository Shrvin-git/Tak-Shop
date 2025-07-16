import { showSwal } from "../core/utils.js";

const logOutBtn = document.querySelector('.logout-account')

logOutBtn.addEventListener('click', e => {
    localStorage.removeItem('token')

    showSwal(
        ' واقعا میخوای از حساب کاربری حارج بشی؟ ',
        'warning',
        'بله',
        'نه',
        async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(`http://localhost:4000/v1/users/${userID}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });

                if (res.ok) {
                    showSwal('با موفقیت خلرج شدید', 'success', 'فهمیدم', async () => { location.href = 'index.html' });
                    getAndShowAllUsers();
                }
            }
        }
    );
})





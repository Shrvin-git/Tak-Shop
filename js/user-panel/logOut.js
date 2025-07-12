import { showSwal } from "../core/utils.js";

const logOutBtn = document.querySelector('.logout-account')

logOutBtn.addEventListener('click', e => {
    localStorage.removeItem('token')

    showSwal(
        'آیا از حذف این کاربر اطمینان دارید؟',
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
                    showSwal('کاربر با موفقیت حذف شد', 'success', 'فهمیدم');
                    getAndShowAllUsers();
                }
            }
        }
    );
})





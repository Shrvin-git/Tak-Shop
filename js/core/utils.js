const showSwal = (title, icon, confirmButtonText, cancelButtonTextOrCallback, maybeCallback) => {
    let cancelButtonText = null;
    let callback;

    if (typeof cancelButtonTextOrCallback === 'function') {
        callback = cancelButtonTextOrCallback;
    } else {
        cancelButtonText = cancelButtonTextOrCallback;
        callback = maybeCallback;
    }

    Swal.fire({
        title,
        icon,
        confirmButtonText,
        cancelButtonText,
        showCancelButton: !!cancelButtonText,
        reverseButtons: true,
        cancelButtonColor: '#d33',
        customClass: {
            confirmButton: 'swal-confirm-btn',
            cancelButton: 'swal-cancel-btn',
            popup: 'swal-popup'
        }
    }).then((result) => callback(result));
};

const saveIntoLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

const getFromLocalStorage = (key) => {
    return JSON.stringify(localStorage.getItem(key));
};

const getToken = () => {
    const userInfos = JSON.parse(localStorage.getItem("user"));
    return userInfos ? userInfos.token : null
};

export {
    showSwal,
    saveIntoLocalStorage,
    getFromLocalStorage,
    getToken,
}
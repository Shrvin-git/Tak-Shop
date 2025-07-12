const showSwal = (title, icon, confirmButtonText, cancelButtonTextOrCallback, maybeCallback) => {
    
    let cancelButtonText = null;
    let callback;

    // اگه پارامتر چهارم تابع هست
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
        reverseButtons: true, // برای فارسی بهتره
        confirmButtonColor: '#00ff08',
        cancelButtonColor: '#d33',
    }).then((result) => callback(result));
};

export { showSwal }
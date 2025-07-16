
const loadFooterSite = () => {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = `فایل ${file} پیدا نشد`;
    }
  });

}

const loadMenuSite = () => {
  const el = document.querySelector('[data-include="partials/menu.html"]');
  if (el) {
    fetch('partials/menu.html')
      .then(res => res.ok ? res.text() : Promise.reject('فایل منو پیدا نشد'))
      .then(html => {
        el.innerHTML = html;
      })
      .catch(err => {
        el.innerHTML = err;
      });
  }
};




export { loadFooterSite, loadMenuSite }

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

export { loadFooterSite }
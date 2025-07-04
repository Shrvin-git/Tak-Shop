const productImages = document.querySelectorAll('.product-images');
const currentImgProduct = document.querySelector('.product-header_right--activ img')
const popularProductsBtn = document.querySelector('.popular-products-btn svg')


productImages.forEach((item) => {
    item.addEventListener('click', (e) => {

        productImages.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        currentImgProduct.src = e.target.src
    });
});

popularProductsBtn.addEventListener('click', () => {
    popularProductsBtn.classList.toggle('like-product')
})
const blogCategoryItems = document.querySelectorAll('.blog-category-items')

blogCategoryItems.forEach(item => {
    item.addEventListener('click', e => {
        blogCategoryItems.forEach(item => {
            item.classList.remove('blog-category--active')
        })
        e.target.classList.add('blog-category--active')
    })
})
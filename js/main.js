import { loadFooterSite } from "./core/include.js";
import { loadMegaMenuNavbar } from "./ui/megaMenu.js";
import { accordionToggle } from "./ui/accordion.js";

window.addEventListener('load', () => {
    loadFooterSite()
    loadMegaMenuNavbar()
    accordionToggle()
})

const menuMobileToggleIcon = document.querySelector('.toggle-menu')
const categoryListItemsElem = document.querySelector('#list-items')



categoryListItemsElem.addEventListener('click', e => {
    document.querySelector('.mega-menu-mobile').classList.toggle('mega-menu-mobile--open')
    document.querySelector('.sss').classList.toggle('sss-open')
})

menuMobileToggleIcon.addEventListener('click', e => {
    document.querySelector('.menu-mobile').classList.toggle('menu-mobile--open')

    const openMenuBtn = document.querySelector('#open')
    const closeMenuBtn = document.querySelector('#close')

    if (closeMenuBtn.className === 'humbrger-icon-toggle') {
        openMenuBtn.classList.add('humbrger-icon-toggle')
        closeMenuBtn.classList.remove('humbrger-icon-toggle')
    } else {
        openMenuBtn.classList.remove('humbrger-icon-toggle')
        closeMenuBtn.classList.add('humbrger-icon-toggle')
    }
})
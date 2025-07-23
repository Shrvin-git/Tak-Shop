import { getAndShowAllUserInformation } from "./userMainInfo.js";
import { getAndShowAllNotification } from "./notification.js";
import { getAndShowAllPopularProducts } from "./popularProducts.js";
import { getAndShowAllComments } from "./comments.js";
import { getAndShowAllOrders } from "./orders.js";
import { getAndShowAllGiftCart } from "./giftCart.js";

// ==== DOM Selectors ====
const sectionListElem = document.querySelectorAll('.profile-sidebar-item');
const allSectionsElem = document.querySelectorAll('.user-panel');
const profileSidebarElem = document.querySelector('.profile-sidebar');
const userPanelContainer = document.querySelector('.user-panel-container');
const flashBackBtns = document.querySelectorAll('.flash-back');
const orderSectionsElem = document.querySelectorAll('.order-modes');
const orderMoodesCounter = document.querySelectorAll('.order-moodes-counter');

// ==== Section Loaders Mapping ====
const sectionActions = {
  'main-info': getAndShowAllUserInformation,
  'message': getAndShowAllNotification,
  'popular-product': getAndShowAllPopularProducts,
  'comments': getAndShowAllComments,
  'user-order': getAndShowAllOrders,
  'gift-cart': getAndShowAllGiftCart,
};

// ==== Functions ====

function openSection(sectionName) {
  // Hide all sections
  allSectionsElem.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('user-panel--active', 'remove');
  });

  // Show target section
  const target = document.getElementById(sectionName);
  if (target) {
    target.style.display = 'block';
    target.classList.add('user-panel--active');
  }

  // Update layout
  profileSidebarElem.classList.add('profile-sidebar--toggle');
  userPanelContainer.classList.add('user-panel-container--open');

  // Call specific loader
  const loaderFn = sectionActions[sectionName];
  if (typeof loaderFn === 'function') loaderFn();
}

function closeAllSections() {
  allSectionsElem.forEach(section => {
    section.classList.add('remove');
    section.classList.remove('user-panel--active');
    section.style.display = 'none';
  });

  profileSidebarElem.classList.remove('profile-sidebar--toggle');
  userPanelContainer.classList.remove('user-panel-container--open');
}

// ==== Event Listeners ====

sectionListElem.forEach(item => {
  item.addEventListener('click', e => {
    const sectionItem = e.target.closest('.profile-sidebar-item');
    if (!sectionItem) return;

    const sectionName = sectionItem.dataset.section;
    if (!sectionName) return;

    // Update active state in sidebar
    sectionListElem.forEach(i => i.classList.remove('item-active'));
    sectionItem.classList.add('item-active');

    openSection(sectionName);
  });
});

flashBackBtns.forEach(btn => {
  btn.addEventListener('click', closeAllSections);
});

orderSectionsElem.forEach(item => {
  item.addEventListener('click', e => {
    const clickedItem = e.target.closest('.order-modes');
    if (!clickedItem) return;

    // Reset all
    orderSectionsElem.forEach(i => i.classList.remove('order-modes--active'));
    orderMoodesCounter.forEach(i => i.classList.remove('active'));

    // Activate selected
    clickedItem.classList.add('order-modes--active');
    const counter = clickedItem.querySelector('.order-moodes-counter');
    if (counter) counter.classList.add('active');
  });
});


// ======= Get Active Section Name =======

function getActiveSectionName() {
  const activeSection = document.querySelector('.user-panel--active');
  return activeSection ? activeSection.id : null;
}

switch (getActiveSectionName()) {
  case 'main-info':
    getAndShowAllUserInformation()
    break;

  case 'message':
    getAndShowAllNotification()
    break;


  case 'popular-product':
    getAndShowAllPopularProducts()
    break;


  case 'comments':
    getAndShowAllComments()
    break;


  case 'user-order':
    getAndShowAllOrders()
    break;


  case 'gift-cart':
    getAndShowAllGiftCart()
    break;
  default:
    break;
}


// ====== Delete Class In Section User Main Info
const mainUserInfoSection = document.querySelector('#main-info')
if (window.innerWidth < 768) {
  mainUserInfoSection.classList.remove('user-panel--active')
}
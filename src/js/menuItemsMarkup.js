import menuItems from './menu.json';

import menuItemTpl from '../templates/menu-item.hbs';

const markup = menuItems.reduce((menu, item) => {
  menu += menuItemTpl(item);
  return menu;
}, '');
const menu = document.querySelector('#menu');
menu.insertAdjacentHTML('beforeend', markup);

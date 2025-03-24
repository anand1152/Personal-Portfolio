const sideMenu = document.querySelector('#sideMenu');
const openBtn = document.querySelector('.md\\:hidden');
const closeBtn = document.querySelector('#sideMenu .absolute');

function openMenu() {
    sideMenu.style.right = '0';
}

function closeMenu() {
    sideMenu.style.right = '-16rem';
}

if (openBtn) openBtn.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);

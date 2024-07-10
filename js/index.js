function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    const icon = document.querySelector('.location-button .icon');
    const hoverMobiles = document.querySelectorAll('.hover-mobile');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.classList.remove('icon-rotate');
        if (window.innerWidth <= 750) { // Mobil görünüm kontrolü
            hoverMobiles.forEach(element => {
                element.style.display = 'none';
            });
        }
    } else {
        menu.classList.add('show');
        icon.classList.add('icon-rotate');
        if (window.innerWidth <= 750) { // Mobil görünüm kontrolü
            hoverMobiles.forEach(element => {
                element.style.display = 'block';
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    let hoverTimeout;

    hoverTriggers.forEach(trigger => {
        const hoverImage = trigger.nextElementSibling; // Bir sonraki eleman hover image olmalı
        trigger.addEventListener('mouseover', () => {
            clearTimeout(hoverTimeout);
            const imgUrl = trigger.getAttribute('data-hover');
            hoverImage.style.backgroundImage = `url(${imgUrl})`;
            hoverImage.style.display = 'block';
        });

        trigger.addEventListener('mouseout', () => {
            hoverTimeout = setTimeout(() => {
                hoverImage.style.display = 'none';
            }, 100); // 100ms gecikme ekleyin
        });
    });
});

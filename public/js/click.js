const enemy = document.querySelector('.enemy');
const creditCount = document.querySelector('#credit-count');
const itemsBought = document.querySelectorAll('.items-owned');

enemy.addEventListener('click', () => {
    creditCount.textContent = parseInt(creditCount.textContent) + 1;
});
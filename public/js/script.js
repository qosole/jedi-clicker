const itemButtons = document.querySelectorAll('.itemcard-dark');

let boughtItems = [];
let galacticCredits = parseInt(document.querySelector('#credit-count').textContent);

const handleClick = (event, i) => {
    event.preventDefault();
    switch (i) {
        case 0: 
            // Training Stick
            break;
        case 1: 
            console.log('blaster gun');
            break;
        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < itemButtons.length; i++) {
    itemButtons[i].addEventListener('click', () => handleClick(event, i));
}
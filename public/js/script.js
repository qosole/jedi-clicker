const itemButtons = document.querySelectorAll('.itemcard-dark');
const mercenaryButtons = document.querySelectorAll('.mercenarycard-dark');
const creditCount = document.querySelector('#credit-count');
let boughtItems = [];




const handleClick = (event, i) => {
    event.preventDefault();
    switch (i) {
            case 0: 
            creditCount.textContent = parseInt(creditCount.textContent) - 25;
            console.log('Training Stick');
            break;

            case 1: 
            creditCount.textContent = parseInt(creditCount.textContent) - 100;
            console.log('Blaster Gun');
            break;

            case 2: 
            creditCount.textContent = parseInt(creditCount.textContent) - 200;
            console.log('Helper Droid');
            break;

            case 3: 
            creditCount.textContent = parseInt(creditCount.textContent) - 500;
            console.log('Lightsaber');
            break;

            case 4: 
            creditCount.textContent = parseInt(creditCount.textContent) - 1000;
            console.log('Double Lightsaber');
            break;

            case 5: 
            creditCount.textContent = parseInt(creditCount.textContent) - 5000;
            console.log('Force Amplifier');
            break;

        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < itemButtons.length; i++) {
    itemButtons[i].addEventListener('click', () => handleClick(event, i));
}

const mercenaryClick = (event, i) => {
    event.preventDefault();
    switch (i) {
            case 0: 
            creditCount.textContent = parseInt(creditCount.textContent) - 200000;
            console.log('Kevin');
            break;

            case 1: 
            creditCount.textContent = parseInt(creditCount.textContent) - 200000;
            console.log('Vince');
            break;

            case 2: 
            creditCount.textContent = parseInt(creditCount.textContent) - 500000;
            console.log('Manuel');
            break;

            case 3: 
            creditCount.textContent = parseInt(creditCount.textContent) - 500000;
            console.log('Jerome');
            break;

        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < itemButtons.length; i++) {
    mercenaryButtons[i].addEventListener('click', () => mercenaryClick(event, i));
}

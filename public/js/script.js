const darkItemButtons = document.querySelectorAll('.itemcard-dark');
const darkMercenaryButtons = document.querySelectorAll('.mercenarycard-dark');
const lightItemButtons = document.querySelectorAll('.itemcard-light');
const lightMercenaryButtons = document.querySelectorAll('.mercenarycard-light');
const galacticCredits = document.querySelector('#credit-count');
let boughtItems = [];

// Dark Items

const darkItemsClick = (event, i) => {
    event.preventDefault();
    switch (i) {
            case 0: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 25;
            console.log('Training Stick');
            break;

            case 1: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 100;
            console.log('Blaster Gun');
            break;

            case 2: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200;
            console.log('Helper Droid');
            break;

            case 3: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500;
            console.log('Lightsaber');
            break;

            case 4: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 1000;
            console.log('Double Lightsaber');
            break;

            case 5: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 5000;
            console.log('Force Amplifier');
            break;

        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < darkItemButtons.length; i++) {
    darkItemButtons[i].addEventListener('click', () => darkItemsClick(event, i));
}

// Dark Mercenaries

const darkMercenaryClick = (event, i) => {
    event.preventDefault();
    switch (i) {
            case 0: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Kevin');
            break;

            case 1: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Vince');
            break;

            case 2: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Manuel');
            break;

            case 3: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Jerome');
            break;

        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < darkMercenaryButtons.length; i++) {
    darkMercenaryButtons[i].addEventListener('click', () => darkMercenaryClick(event, i));
}


// Light Items

const lightItemsClick = (event, i) => {
    event.preventDefault();
    switch (i) {
            case 0: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 25;
            console.log('Training Stick');
            break;

            case 1: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 100;
            console.log('Blaster Gun');
            break;

            case 2: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200;
            console.log('Helper Droid');
            break;

            case 3: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500;
            console.log('Lightsaber');
            break;

            case 4: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 1000;
            console.log('Double Lightsaber');
            break;

            case 5: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 5000;
            console.log('Force Amplifier');
            break;

        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < lightItemButtons.length; i++) {
    lightItemButtons[i].addEventListener('click', () => lightItemsClick(event, i));
}

// Light Mercenaries

const lightMercenaryClick = (event, i) => {
    event.preventDefault();
    switch (i) {
            case 0: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Kevin');
            break;

            case 1: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Vince');
            break;

            case 2: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Manuel');
            break;

            case 3: 
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Jerome');
            break;

        default:
            console.log('hi');
            break;

    }
}

for (let i = 0; i < lightMercenaryButtons.length; i++) {
    lightMercenaryButtons[i].addEventListener('click', () => lightMercenaryClick(event, i));
}
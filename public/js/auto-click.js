// This file should be loaded AFTER click.js

// This function calculates how many credits should be earned automatically.
// The player will earn 0 credits automatically by default.
// When a mercenary is purchased, credits will begin to earn automatically based on the mercenary's strength
const earnAuto = () => {
    let autoStrength = 0;
    for (let i in itemsBought) {
        // Data verification
        if (itemsBought[i].textContent == undefined) {
            continue;
        }
        
        switch(itemsBought[i].dataset.name) {
            case 'Kevin Hernandez':
                autoStrength += 1500;
                break;
            case 'Vince Lee':
                autoStrength += 1500;
                break;
            case 'Manuel Nunez':
                autoStrength += 3000;
                break;
            case 'Jerome Chenette':
                autoStrength += 3000;
                break;
            default:
                autoStrength += 0;
                break;
        }
    }

    // Update the credit count every 10 milliseconds
    setInterval(() => {
        creditCount.textContent = parseInt(creditCount.textContent) + autoStrength / 100
    }, 10);
}

earnAuto();
const enemy = document.querySelector('.enemy');
const creditCount = document.querySelector('#credit-count');
// The player's items bought should update as fast as possible to allow for responsive gameplay
let itemsBought;
setInterval(() => {
    itemsBought = document.querySelectorAll('.items-owned');
}, 10);


// This function calculates the total strength of the player.
// The base strength of the player is 1. 
// The items that a player has will increase their strength.
// The function will return an integer (total strength).
const strengthCalc = () => {
    let strength = 1;
    // Calculating the total strength of the player's items
    for (let i in itemsBought) {
        // Data verification
        if (itemsBought[i].textContent == undefined) {
            continue;
        }
        
        switch(itemsBought[i].dataset.name) {
            case 'Training Stick':
                strength += (1 * itemsBought[i].dataset.count);
                break;
            case 'Blaster Gun':
                strength += (3 * itemsBought[i].dataset.count);
                break;
            case 'Helper Droid':
                strength += (6 * itemsBought[i].dataset.count);
                break;
            case 'Lightsaber':
                strength += (25 * itemsBought[i].dataset.count);
                break;
            case 'Double-Sided Lightsaber':
                strength += (50 * itemsBought[i].dataset.count);
                break;
            case 'Force Amplifier':
                strength += (500 * itemsBought[i].dataset.count);
                break;
            default:
                strength += 0;
                break;
        }
    }

    return strength;
}

enemy.addEventListener('click', () => {
    creditCount.textContent = parseInt(creditCount.textContent) + strengthCalc();
});
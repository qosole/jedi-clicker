const enemy = document.querySelector('.enemy');
const creditCount = document.querySelector('#credit-count');
const itemsBought = document.querySelectorAll('.items-owned');

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
                strength++;
                break;
            case 'Blaster Gun':
                strength += 3;
                break;
            case 'Helper Droid':
                strength += 6;
                break;
            case 'Lightsaber':
                strength += 25;
                break;
            case 'Double-Sided Lightsaber':
                strength += 50;
                break;
            case 'Force Amplifier':
                strength += 500;
                break;
        }
    }

    return strength;
}

enemy.addEventListener('click', () => {
    creditCount.textContent = parseInt(creditCount.textContent) + strengthCalc();
});
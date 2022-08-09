const darkItemButtons = document.querySelectorAll('.itemcard-dark');
const darkMercenaryButtons = document.querySelectorAll('.mercenarycard-dark');
const lightItemButtons = document.querySelectorAll('.itemcard-light');
const lightMercenaryButtons = document.querySelectorAll('.mercenarycard-light');
const galacticCredits = document.querySelector('#credit-count');

let trainingStickCost = 25;
let blasterGunCost = 100;
let helperDroidCost = 200;
let lightsaberCost = 500;
let doubleLightsaberCost = 1000;
let forceAmplifierCost = 5000;
let kevinCost = 200000;
let jeromeCost = 500000;

// Dark Items

const darkItemsClick = (event, i) => {
    event.preventDefault();
    let itemName = '';
    switch (i) {
            case 0: 
            if (galacticCredits.textContent >= trainingStickCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - trainingStickCost;
            itemName = 'Training Stick';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= blasterGunCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - blasterGunCost;
            itemName = 'Blaster Gun';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= helperDroidCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - helperDroidCost;
            itemName = 'Helper Droid';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= lightsaberCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - lightsaberCost;
            itemName = 'Lightsaber';
            }
            break;

            case 4: 
            if (galacticCredits.textContent >= doubleLightsaberCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - doubleLightsaberCost;
            itemName = 'Double-Sided Lightsaber';
            }
            break;

            case 5: 
            if (galacticCredits.textContent >= forceAmplifierCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - forceAmplifierCost;
            itemName = 'Force Amplifier';
            }
            break;

        default:
            break;
    }

    // Adding item to Items Bought; if already exists, increment count
    let isOwned = false;
    for (let j in itemsBought) {
        // Data verification
        if (itemsBought[j].textContent == undefined) {
            continue;
        }

        if (itemsBought[j].dataset.name == itemName) {
            itemsBought[j].dataset.count++;
            itemsBought[j].textContent = itemsBought[j].dataset.name + ' x' + itemsBought[j].dataset.count;
            isOwned = true;
            break;
        }
    }
    if (!isOwned && itemName != '') {
        const newItemTag = document.createElement('p');
        newItemTag.classList.add('items-owned');
        newItemTag.setAttribute('data-name', itemName);
        newItemTag.setAttribute('data-count', 1);
        newItemTag.textContent = itemName + ' x1';
        document.querySelector('#upgradesBought').appendChild(newItemTag);
    }
}

for (let i = 0; i < darkItemButtons.length; i++) {
    darkItemButtons[i].addEventListener('click', () => darkItemsClick(event, i));
}

// Dark Mercenaries

const darkMercenaryClick = (event, i) => {
    event.preventDefault();
    let itemName = '';

    switch (i) {
            case 0: 
            if (galacticCredits.textContent >= kevinCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - kevinCost;
            itemName = 'Kevin Hernandez';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= kevinCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - kevinCost;
            itemName = 'Vince Lee';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= jeromeCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - jeromeCost;
            itemName = 'Manuel Nunez';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= jeromeCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - jeromeCost;
            itemName = 'Jerome Chenette';
            }
            break;

        default:
            break;

    }

    // Checking to see if mercenary is already owned
    let isOwned = false;
    let mercToRefund = '';
    for (let j in itemsBought) {
        // Data verification
        if (itemsBought[j].textContent == undefined) {
            continue;
        }

        if (itemsBought[j].dataset.name == itemName) {
            isOwned = true;
            mercToRefund = itemName;
            break;
        }
    }

    // Refunding the mercenary if already owned
    if (isOwned) {
        switch (mercToRefund) {
            case 'Kevin Hernandez':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + kevinCost;
                break;
            case 'Vince Lee':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + kevinCost;
                break;
            case 'Manuel Nunez':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + jeromeCost;
                break;
            case 'Jerome Chenette':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + jeromeCost;
                break;
            default:
                galacticCredits.textContent = parseInt(galacticCredits.textContent);
                break;
        }
    }

    // Adding mercenary to list of items if not already owned
    if (!isOwned && itemName != '') {
        const newItemTag = document.createElement('p');
        newItemTag.classList.add('items-owned');
        newItemTag.setAttribute('data-name', itemName);
        newItemTag.setAttribute('data-count', 1);
        newItemTag.textContent = itemName + ' x1';
        document.querySelector('#upgradesBought').appendChild(newItemTag);
    }
}

for (let i = 0; i < darkMercenaryButtons.length; i++) {
    darkMercenaryButtons[i].addEventListener('click', () => darkMercenaryClick(event, i));
}


// Light Items

const lightItemsClick = (event, i) => {
    let itemName = '';
    event.preventDefault();
    switch (i) {
            case 0: 
            if (galacticCredits.textContent >= trainingStickCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - trainingStickCost;
            itemName = 'Training Stick';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= blasterGunCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - blasterGunCost;
            itemName = 'Blaster Gun';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= helperDroidCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - helperDroidCost;
            itemName = 'Helper Droid';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= lightsaberCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - lightsaberCost;
            itemName = 'Lightsaber';
            }
            break;

            case 4: 
            if (galacticCredits.textContent >= doubleLightsaberCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - doubleLightsaberCost;
            itemName = 'Double-Sided Lightsaber';
            }
            break;

            case 5: 
            if (galacticCredits.textContent >= forceAmplifierCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - forceAmplifierCost;
            itemName = 'Force Amplifier';
            }
            break;

        default:
            break;

    }

    // Adding item to Items Bought; if already exists, increment count
    let isOwned = false;
    for (let j in itemsBought) {
        // Data verification
        if (itemsBought[j].textContent == undefined) {
            continue;
        }

        if (itemsBought[j].dataset.name == itemName) {
            itemsBought[j].dataset.count++;
            itemsBought[j].textContent = itemsBought[j].dataset.name + ' x' + itemsBought[j].dataset.count;
            isOwned = true;
            break;
        }
    }
    if (!isOwned && itemName != '') {
        const newItemTag = document.createElement('p');
        newItemTag.classList.add('items-owned');
        newItemTag.setAttribute('data-name', itemName);
        newItemTag.setAttribute('data-count', 1);
        newItemTag.textContent = itemName + ' x1';
        document.querySelector('#upgradesBought').appendChild(newItemTag);
    }
}

for (let i = 0; i < lightItemButtons.length; i++) {
    lightItemButtons[i].addEventListener('click', () => lightItemsClick(event, i));
}

// Light Mercenaries

const lightMercenaryClick = (event, i) => {
    let itemName = '';
    event.preventDefault();
    switch (i) {
            case 0: 
            if (galacticCredits.textContent >= kevinCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - kevinCost;
            itemName = 'Kevin Hernandez';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= kevinCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - kevinCost;
            itemName = 'Vince Lee';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= jeromeCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - jeromeCost;
            itemName = 'Manuel Nunez';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= jeromeCost) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - jeromeCost;
            itemName = 'Jerome Chenette';
            }
            break;

        default:
            break;

    }

    // Checking to see if mercenary is already owned
    let isOwned = false;
    let mercToRefund = '';
    for (let j in itemsBought) {
        // Data verification
        if (itemsBought[j].textContent == undefined) {
            continue;
        }

        if (itemsBought[j].dataset.name == itemName) {
            isOwned = true;
            mercToRefund = itemName;
            break;
        }
    }

    // Refunding the mercenary if already owned
    if (isOwned) {
        switch (mercToRefund) {
            case 'Kevin Hernandez':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + kevinCost;
                break;
            case 'Vince Lee':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + kevinCost;
                break;
            case 'Manuel Nunez':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + jeromeCost;
                break;
            case 'Jerome Chenette':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + jeromeCost;
                break;
            default:
                galacticCredits.textContent = parseInt(galacticCredits.textContent);
                break;
        }
    }

    // Adding mercenary to list of items if not already owned
    if (!isOwned && itemName != '') {
        const newItemTag = document.createElement('p');
        newItemTag.classList.add('items-owned');
        newItemTag.setAttribute('data-name', itemName);
        newItemTag.setAttribute('data-count', 1);
        newItemTag.textContent = itemName + ' x1';
        document.querySelector('#upgradesBought').appendChild(newItemTag);
    }
}

for (let i = 0; i < lightMercenaryButtons.length; i++) {
    lightMercenaryButtons[i].addEventListener('click', () => lightMercenaryClick(event, i));
}
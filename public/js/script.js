const darkItemButtons = document.querySelectorAll('.itemcard-dark');
const darkMercenaryButtons = document.querySelectorAll('.mercenarycard-dark');
const lightItemButtons = document.querySelectorAll('.itemcard-light');
const lightMercenaryButtons = document.querySelectorAll('.mercenarycard-light');
const galacticCredits = document.querySelector('#credit-count');
let boughtItems = [];

// Dark Items

const darkItemsClick = (event, i) => {
    event.preventDefault();
    let itemName = '';
    switch (i) {
            case 0: 
            if (galacticCredits.textContent >= 25) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 25;
            console.log('Training Stick');
            itemName = 'Training Stick';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= 100) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 100;
            console.log('Blaster Gun');
            itemName = 'Blaster Gun';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= 200) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200;
            console.log('Helper Droid');
            itemName = 'Helper Droid';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= 500) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500;
            console.log('Lightsaber');
            itemName = 'Lightsaber';
            }
            break;

            case 4: 
            if (galacticCredits.textContent >= 1000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 1000;
            console.log('Double Lightsaber');
            itemName = 'Double-Sided Lightsaber';
            }
            break;

            case 5: 
            if (galacticCredits.textContent >= 5000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 5000;
            console.log('Force Amplifier');
            itemName = 'Force Amplifier';
            }
            break;

        default:
            console.log('hi');
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
            if (galacticCredits.textContent >= 200000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Kevin');
            itemName = 'Kevin Hernandez';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= 200000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Vince');
            itemName = 'Vince Lee';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= 500000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Manuel');
            itemName = 'Manuel Nunez';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= 200000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Jerome');
            itemName = 'Jerome Chenette';
            }
            break;

        default:
            console.log('hi');
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
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 200000;
                break;
            case 'Vince Lee':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 200000;
                break;
            case 'Manuel Nunez':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 500000;
                break;
            case 'Jerome Chenette':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 500000;
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
            if (galacticCredits.textContent >= 25) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 25;
            console.log('Training Stick');
            itemName = 'Training Stick';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= 100) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 100;
            console.log('Blaster Gun');
            itemName = 'Blaster Gun';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= 200) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200;
            console.log('Helper Droid');
            itemName = 'Helper Droid';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= 500) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500;
            console.log('Lightsaber');
            itemName = 'Lightsaber';
            }
            break;

            case 4: 
            if (galacticCredits.textContent >= 1000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 1000;
            console.log('Double Lightsaber');
            itemName = 'Double-sided Lightsaber';
            }
            break;

            case 5: 
            if (galacticCredits.textContent >= 5000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 5000;
            console.log('Force Amplifier');
            itemName = 'Force Amplifier';
            }
            break;

        default:
            console.log('hi');
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
            if (galacticCredits.textContent >= 200000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Kevin');
            itemName = 'Kevin Hernandez';
            }
            break;

            case 1: 
            if (galacticCredits.textContent >= 200000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 200000;
            console.log('Vince');
            itemName = 'Vince Lee';
            }
            break;

            case 2: 
            if (galacticCredits.textContent >= 500000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Manuel');
            itemName = 'Manuel Nunez';
            }
            break;

            case 3: 
            if (galacticCredits.textContent >= 500000) {
            galacticCredits.textContent = parseInt(galacticCredits.textContent) - 500000;
            console.log('Jerome');
            itemName = 'Jerome Chenette';
            }
            break;

        default:
            console.log('hi');
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
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 200000;
                break;
            case 'Vince Lee':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 200000;
                break;
            case 'Manuel Nunez':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 500000;
                break;
            case 'Jerome Chenette':
                galacticCredits.textContent = parseInt(galacticCredits.textContent) + 500000;
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
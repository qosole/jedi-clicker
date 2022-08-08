// This function associates each item with its ID in the server.
// It will return the ID (returns 0 if cannot find the item)
const getItemId = async (itemName) => {
    const result = await fetch('/api/items', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const allItemsInDb = await result.json();
    for (let i in allItemsInDb) {
        if (itemName == allItemsInDb[i].name) {
            return allItemsInDb[i].id;
        }
    }
    return 0;
}

// Saving the game when the save button is clicked (in dark-homepage or light-homepage)
document.querySelector('#save-button').addEventListener('click', async () => {
    const creditDataToSave = { 'galactic_credits': parseInt(creditCount.textContent) };
    await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creditDataToSave)
    });

    let itemDataToSave = [];
    for (let i in itemsBought) {
        // Data validation
        if (itemsBought[i].textContent == undefined) {
            continue;
        }

        let isDupe = false;
        for (let j in originalItems) {
            // Data validation
            if (originalItems[j].textContent == undefined) {
                continue;
            }

            if (itemsBought[i].dataset.name == originalItems[j].dataset.name) {
                isDupe = true;
                break;
            }
        }
        if (!isDupe) {
            itemDataToSave.push({ 'item_id': await getItemId(itemsBought[i].dataset.name) });
        }
    }

    for (let i in itemDataToSave) {
        await fetch('/api/users/items', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemDataToSave[i])
        });
    }
    return null;
});
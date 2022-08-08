const takenUsernameAlert = document.querySelector('#taken-username-alert');

// Removing the taken username alert after 3 seconds
setTimeout(() => {
    takenUsernameAlert.style.display = 'none';
}, 3000)
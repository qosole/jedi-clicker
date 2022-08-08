const takenUsernameAlert = document.querySelector('#taken-username-alert');
const incorrectLoginAlert = document.querySelector('#incorrect-login-alert');

// Removing the taken username alert after 2 seconds
setTimeout(() => {
    takenUsernameAlert.style.display = 'none';
}, 2000);

// Removing the incorrect login alert after 2 seconds
setTimeout(() => {
    incorrectLoginAlert.style.display = 'none';
}, 2000);
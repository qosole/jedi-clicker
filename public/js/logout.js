document.querySelector('.logout-button').addEventListener('click', async () => {
    // Destroy the express-session
    const result = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (result.ok) {
        // If logged out, go back to login page
        document.location.replace('/login');
    } else {
        // If could not log out, alert the user what happened
        alert(result.statusText);
    }
});
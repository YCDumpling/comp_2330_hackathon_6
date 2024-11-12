
window.onload = function() {
    const greetingHeader = document.getElementById('greeting-area');
    const nameSection = document.getElementById('name-section');
    const nameField = document.getElementById('name');
    const saveNameButton = document.getElementById('saveName');
    const removeNameButton = document.getElementById('removeName');

    // Check if the user's name is already saved in localStorage
    const savedName = localStorage.getItem('username');
    if (savedName) {
        greetingHeader.textContent = `Welcome back, ${savedName}!`;
        nameSection.style.display = 'none';
    }

    saveNameButton.addEventListener('click', () => {
        const name = nameField.value.trim();
        if (name) {
            localStorage.setItem('username', name);
            greetingHeader.textContent = `Welcome, ${name}!`;
            nameSection.style.display = 'none';
        }
    });

    removeNameButton.addEventListener('click', () => {
        //debugger;
        localStorage.removeItem('username');
        nameField.value = '';
        greetingHeader.textContent = 'Please enter your name:';
        nameSection.style.display = 'block';
    });

}


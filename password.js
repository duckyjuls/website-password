const password = 'purplepunch';
const input = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    if (input.value === password) {
        window.location.href = 'https://duckyjuls.github.io/websitemain/';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

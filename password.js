const password = 'purplepunch';
const input = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    if (input.value === password) {
        window.location.href = 'https://github.com/duckyjuls/websitemain.git';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

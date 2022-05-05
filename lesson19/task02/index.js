import './index.css';

const ACCEPTED = 'accepted';

const button = document.querySelector('.cookie-consent__button');
button.addEventListener('click', () => {
    localStorage.setItem(ACCEPTED, true);
});

const accepted = Boolean(localStorage.getItem(ACCEPTED));
if (accepted) {
    console.log('Cookie were accepted!');
    const content = document.querySelector('.cookie-consent');
    if (!content.classList.contains('hide')) {
        content.classList.add('hide');
    }
}
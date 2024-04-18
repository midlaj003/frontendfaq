var acc = document.getElementsByClassName('question')
Array.from(acc).forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.plus-icon');

        const computedStyle = window.getComputedStyle(answer);
        const display = computedStyle.getPropertyValue('display');

        answer.style.display = display === 'none' ? 'block' : 'none';
        icon.src = answer.style.display === 'none' ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';

    })
});


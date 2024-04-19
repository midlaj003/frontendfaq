var acc = document.getElementsByClassName('question')

// Display the first answer as block
acc[0].nextElementSibling.style.display = 'block';
// Update the icon of the first question
var icon = acc[0].querySelector('.plus-icon');
icon.src = './assets/images/icon-minus.svg';

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


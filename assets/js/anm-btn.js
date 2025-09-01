const buttons = document.querySelectorAll('.buttom');

buttons.forEach(button => {
    button.addEventListener('mouseenter', e => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        button.appendChild(ripple);

        const rect = button.getBoundingClientRect();
        ripple.style.left = e.clientX - rect.left + 'px';
        ripple.style.top = e.clientY - rect.top + 'px';

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

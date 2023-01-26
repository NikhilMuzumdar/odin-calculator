// add eventlistener to all buttons
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML);
    })
});
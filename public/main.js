console.log('fufufufufuooooom')

const contact = document.querySelector('.right');
const whyBtn = document.querySelector('#why-btn');
const whoCares = document.querySelector('#why-not')


whyBtn.addEventListener('click', () =>{
   let box = window.prompt('WHY NOT?')
    let text;
    if (box === null || ''){
       text = ('get in the flask')
    } else {
       text = 'alright wise guy GET IN THE FLASK!';
       window.alert(text)

}
})

whoCares.addEventListener('click', () =>{
    alert('dude me too, i didnt even know this thing existed til yesterday')
})
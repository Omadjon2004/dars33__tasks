
const form=document.querySelector('form'),
formInput=document.querySelector('.form_input'),
formButton=document.querySelector('.btn'),
cardSpan=document.querySelectorAll('.card_span');

const speeds=[3.6,20.1,70,800];

form.addEventListener('click', function(e){
    e.preventDefault()

    if (formInput.value > 0) {
        cardSpan[0].textContent= ` Hours ${(formInput.value/speeds[0]).toFixed(2)}  `
    }if (formInput.value > 0) {
        cardSpan[1].textContent= ` Hours ${(formInput.value/speeds[1]).toFixed(2)}  `
    }if (formInput.value > 0) {
        cardSpan[2].textContent= ` Hours ${(formInput.value/speeds[2]).toFixed(2)}  `
    }if (formInput.value > 0) {
        cardSpan[3].textContent= ` Hours ${(formInput.value/speeds[3]).toFixed(2)}  `
    }
})


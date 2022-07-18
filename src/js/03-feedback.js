import _throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    inputBtn: document.querySelector('.feedback-form input'),
    textArea: document.querySelector('.feedback-form textarea'),
}

const getMessage = localStorage.getItem('feedback-message');
const throttlingHandleTextArea = _throttle(event =>{
    handleTextArea(event);
    console.log(event);
}, 500);

const throttlingHandlEmail = _throttle(event => handleInputEmail(event), 500)

if(getMessage){
    refs.textArea.value = getMessage;
}

refs.form.addEventListener('submit',submitForm);
refs.textArea.addEventListener('input',throttlingHandleTextArea );
refs.inputBtn.addEventListener('input', throttlingHandlEmail );

 function handleInputEmail (event){
    const message = event.target.value;
    localStorage.setItem('feedback-email', message)
 }
 
function handleTextArea (event){
    const message = event.target.value;
    console.log(message)
    localStorage.setItem('feedback-message', message)
}

function submitForm (event){
    event.preventDefault()
    const formData = new FormData(event.target);
    const submitedData = {};
    if(refs.textArea.value.length === 0 || refs.inputBtn.value.length  === 0){
        alert("Заполните все поля!")
     } formData.forEach((value, key) => {
        submitedData[key] = value; 
        });
   console.log(submitedData) 
   localStorage.removeItem('feedback-message');
    localStorage.removeItem('feedback-email');
        event.currentTarget.reset();
}


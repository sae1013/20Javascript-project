const $form = document.querySelector('#form');
const $username = document.querySelector('#username');
const $email = document.querySelector('#email');
const $password = document.querySelector('#password');
const $password2 = document.querySelector('#password2');

function showError(input, message){

  const $formControl = input.parentElement;
  $formControl.classList.add('error');
  $formControl.classList.remove('success');
  const small = $formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess($input){

  const $formControl = $input.parentElement;
  $formControl.classList.add('success');
  $formControl.classList.remove('error');
}

function inputValidator(formInput){
  formInput.forEach((input)=>{
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input.id)} is required`)
    }else{
      showSuccess(input);
    }
  })

}
  
function getFieldName(name){ 
  return name.charAt(0).toUpperCase() + name.slice(1); 
}

function checkEmail($input){
  if(String($input.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      showSuccess($input);
    }else {
      showError($input,'Email is not valid')
    }
}

function checkLength($input,min,max){
  if($input.value.length < min){
    showError($input,`${getFieldName($input.id)} must be at lease ${min} characters`)
  }else if($input.value.length>max){
    showError($input,`${getFieldName($input.id)} must be less ${max} characters`)
  }else {
    showSuccess($input);
  }
}

function checkPasswordMatch($input1,$input2){
  if($input1.value !== $input2.value){
    showError($input2,'Password do not match');
  }
}
function submitForm(event){
  event.preventDefault();
  inputValidator([$username,$email,$password,$password2])
  checkLength($username,3,15);
  checkEmail($email);
  checkLength($password,6,25);
  checkPasswordMatch($password,$password2)
}

addEventListener('submit',submitForm);


let fnameb=false;
let lnameb=false;
let emailb=false;
let passwordb=false;
let cpasswordb=false;
let phonenumberb=false;


function validate()
{
  if (fnameb===false){
    alert('invalid first name');
    return false;
  }
  if (lnameb===false){
    alert('invalid last name');
    return false;
  }
  if (emailb===false){
    alert('invalid emailid');
    return false;
  }
  if (passwordb===false){
    alert('invalid password');
    return false;
  }
  if (cpasswordb===false){
    alert('invalid confirm password');
    return false;
  }
  if (phonenumberb===false){
    alert('invalid phone number');
    return false;
  }
   
  alert('Form submitted successfully');
  return true;
}



const firstName=document.querySelector('#firstName')

function firstname(){
    let firstNameValue=firstName.value;
    let reg=/^[A-Z][a-z]{2,20}$/gm; 
    let error=document.querySelector('#errorFirstName');

    if (reg.test(firstNameValue)){
          error.innerHTML='';
          fnameb=true;
    }

    else{
        error.innerHTML='<span class="red">Invalid name<span>';
    }
}



const lastName=document.querySelector('#lastName');

function lastname(){
    let lastNameValue=lastName.value;
    let reg=/^[A-Z][a-z]{1,20}$/gm;
    let error=document.querySelector('#errorlastname');

    if (reg.test(lastNameValue)){
          error.innerHTML='';
          lnameb=true;
    }

    else{
        error.innerHTML='<span class="red">Invalid last name<span>';
    }
}



const EmailID=document.querySelector('#email');

function Emailid(){

    let EmailIDvalue=EmailID.value;
    let reg=/^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,30}\b$/gm;
    let error=document.querySelector('#erroremail');
    let myArr=EmailIDvalue.split('.');

    if (myArr[myArr.length-1] === myArr[myArr.length-2]){
      error.innerHTML='<span class="red">enter a valid email address <span>';
    }

    else if (reg.test(EmailIDvalue)){
        error.innerHTML='';
        emailb=true;
    }
    else{
        error.innerHTML='<span class="red">enter a valid email address <span>';
    }



}



const password=document.querySelector('#Password');


function passwords(){
    let passwordValue=password.value;
    let reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/])(?!.*\s).{8,20}$/gm;
    let error=document.querySelector('#errorPassword');

    if (reg.test(passwordValue)){
        error.innerHTML='';
        passwordb=true;
    }else{
        error.innerHTML='<span class="red">enter a valid password <span>';
    }
}




const confirmPassword=document.querySelector('#confirmPassword');

function confirmPasswords(){
    let confirmPasswordvalue=confirmPassword.value;
    let passwordvalue=password.value;
    let error=document.querySelector('#errorconfirmPassword');

    if (passwordvalue!==confirmPasswordvalue){
        error.innerHTML='<span class="red">Invalid confirm password  <span>';
    }else{
        error.innerHTML='';
        cpasswordb=true;
    }
}


function phonenumber(){
    const countrySelect = document.getElementById("country-select");
    const phoneInput = document.getElementById("phone-input");
    const codeInput = document.getElementById("code-input");
    
    countrySelect.addEventListener("change", () => {
      const selectedCountry = countrySelect.value;
      let countryCode = "";
      var maxLength = "";

      switch(selectedCountry) {
        case "india":
          countryCode = "+91";
          phoneInput.setAttribute("maxlength", "10");
          phoneInput.setAttribute("minlength", "10");
          break;
          case "nepal":
          countryCode = "+977";
          phoneInput.setAttribute("maxlength", "13");
          phoneInput.setAttribute("minlength", "12");
          break;
          case "china":
          countryCode = "+86";
          phoneInput.setAttribute("maxlength", "15");
          phoneInput.setAttribute("minlength", "12");
          break;
          case "nepal":
        default:
          codeInput.value = "";
          return;
      }

      codeInput.value = countryCode;
      phoneInput.value = "";
      phoneInput.placeholder = "Phone no:";
      
      phoneInput.focus();
    });

    phoneInput.addEventListener("input", () => {
      const selectedCountry = countrySelect.value;
      const phoneNumber = phoneInput.value;
      const regex = getRegexForCountry(selectedCountry);
      
      if (phoneNumber.match(regex)) {
        phoneInput.setCustomValidity("");
        phonenumberb=true;

      } else {
        phoneInput.setCustomValidity("Please enter a valid phone number for your selected  country.");
      }
    });

    function getRegexForCountry(countryCode) {
      switch(countryCode) {
       case "india":
          return /^[6789]\d{9}$/gm;
           default:
          return /.*/;
      }
    }
}
function togglePasswordVisibility() {
  var passwordField = document.getElementById("password-field");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

const passregex=/^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$/gm
const nameregex=/^[A-Z][a-z]{2,20}$/gm
const phoneregex=/^[1-9]\d{9}$/
function clearErrors(){
  
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

   
    var name = document.forms['myForm']["fname"].value;
    if (!name.match(nameregex)){
        seterror("name", "*Enter correct first name ");
        return false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    
    var name = document.forms['myForm']["flname"].value;
    if (!name.match(nameregex)){
        seterror("name", "*Enter correct last name ");
        return false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "*Email length is too long");
        return false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.match(phoneregex)){
        seterror("phone", "*Phone number should be of 10 digits!");
        return false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (!password.match(passregex)){

        seterror("pass", "*password shoul have one upper and lower case one no. and greater than 6 letters");
        return false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        return false;
    }

    return returnval;
}
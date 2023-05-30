function validateForm(event) {
    event.preventDefault();

    // Fetch form inputs
    var fullNameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var phoneInput = document.getElementById("phone");

    // Fetch error elements
    var fullNameError = document.getElementById("fullNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var phoneError = document.getElementById("phoneError");

    // Reset error messages
    fullNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    phoneError.textContent = "";

    // Perform validation
    var isValid = true;

    if (fullNameInput.value.trim() === "") {
      fullNameError.textContent = "Full Name is required";
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
    }

    if (passwordInput.value.trim() === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    }

    if (confirmPasswordInput.value.trim() === "") {
      confirmPasswordError.textContent = "Confirm Password is required";
      isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      isValid = false;
    }

    if (phoneInput.value.trim() === "") {
      phoneError.textContent = "Phone Number is required";
      isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
      document.getElementById("registrationForm").submit();
    }
  }

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
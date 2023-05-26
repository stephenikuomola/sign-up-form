// Making use of object-oriented programming and the constraint validation API 

class FormComponent {
  #form = document.querySelector('form'); 

  constructor() {
    this.#form.addEventListener('submit', this.#submitForm.bind(this));   
    Password.eyeIcon.addEventListener('click', this.#showPassword); 
  }


  #showPassword(evtObj) {
    const isShowing = evtObj.target.getAttribute('data-password-visible') === 'true' || false; 

    evtObj.target.dataset.passwordVisible = `${!isShowing}`; 

    if(isShowing) {
      evtObj.target.textContent = 'visibility'; 
      Password.input.setAttribute('type', 'password'); 
    }else {
      evtObj.target.textContent = 'visibility_off'; 
      Password.input.setAttribute('type', 'text'); 
    }
  }

  #submitForm(evtObj) {
    if(this.#validateInputs()) {
      FirstName.resetErrorMessageAndIndicator(); 
      LastName.resetErrorMessageAndIndicator(); 
      Email.resetErrorMessageAndIndicator(); 
      Password.resetErrorMessageAndIndicator(); 
    } else {
      evtObj.preventDefault();  
      FirstName.checkInputValidity(); 
      LastName.checkInputValidity(); 
      Email.checkInputValidity(); 
      Password.checkInputValidity(); 
    }
  }

  #validateInputs() {
    const isValid = FirstName.valid() && Email.input.validity.valid && LastName.valid() && Password.valid(); 

    return isValid; 
  }
}


class FirstName {
  static input = document.querySelector("[id='firstname']"); 
  static errorMessage = document.querySelector('.firstname-error-message'); 

  static valid() {
    const isValid = FirstName.input.validity.valueMissing || FirstName.input.validity.patternMismatch || FirstName.input.value.trim() === ''; 

    return !isValid; 
  }

  static resetErrorMessageAndIndicator() {
    FirstName.errorMessage.textContent = ""; 
    FirstName.input.className = ""; 
    FirstName.input.nextElementSibling.className = "icon-error__hide"; 
  }

  static showErrorMessageAndIndicator() {
    if(FirstName.input.validity.valueMissing || FirstName.input.value.trim() === '') {
      FirstName.errorMessage.textContent = "First Name cannot be empty"; 
    }

    if(FirstName.input.validity.patternMismatch) {
      FirstName.errorMessage.textContent = "First Name must be between 1 and 20 characters"; 
    }

    FirstName.input.className = "error"; 
    FirstName.input.nextElementSibling.className = "icon-error__show"; 
  }

  static checkInputValidity() {
    if(FirstName.valid()) {
      FirstName.resetErrorMessageAndIndicator(); 
    }else {
      FirstName.showErrorMessageAndIndicator(); 
    }
  }
}

class LastName {
  static input = document.querySelector("[id='lastname']"); 
  static errorMessage = document.querySelector('.lastname-error-message'); 

  static valid() {
    const isValid = LastName.input.validity.valueMissing || LastName.input.validity.patternMismatch || LastName.input.value.trim() === ''; 

    return !isValid; 
  }

  static resetErrorMessageAndIndicator() {
    LastName.errorMessage.textContent = ""; 
    LastName.input.className = ""; 
    LastName.input.nextElementSibling.className = "icon-error__hide"; 
  }

  static showErrorMessageAndIndicator() {
    if(LastName.input.validity.valueMissing || LastName.input.value.trim() === "") {
      LastName.errorMessage.textContent = "Last Name cannot be empty"; 
    }

    if(LastName.input.validity.patternMismatch) {
      LastName.errorMessage.textContent = "Last Name must be between 1 and 20 characters";
    }

    LastName.input.className = "error"; 
    LastName.input.nextElementSibling.className = "icon-error__show"; 
  }

  static checkInputValidity() {
    if(LastName.valid()) {
      LastName.resetErrorMessageAndIndicator(); 
    }else {
      LastName.showErrorMessageAndIndicator(); 
    }
  }
}

class Email {
  static input = document.querySelector("[id='mail']"); 
  static errorMessage = document.querySelector('.email-error-message'); 

  static resetErrorMessageAndIndicator() {
    Email.errorMessage.textContent = ""; 
    Email.input.className = ""; 
    Email.input.nextElementSibling.className = "icon-error__hide"; 
  }

  static showErrorMessageAndIndicator() {
    if(Email.input.validity.valueMissing) {
      Email.errorMessage.textContent = "Email cannot be empty";
    }

    if(Email.input.validity.typeMismatch) {
      Email.errorMessage.textContent = "Looks like this is not an email"; 
      Email.input.classList.add('error-value'); 
    }

    Email.input.classList.add('error'); 
    Email.input.nextElementSibling.className = "icon-error__show";
  }

  static checkInputValidity() {
    if(Email.input.checkValidity()) {
      Email.resetErrorMessageAndIndicator(); 
    }else {
      Email.showErrorMessageAndIndicator(); 
    }
  }
}

class Password {
  static input = document.querySelector("[id=password]"); 
  static errorMessage = document.querySelector('.password-error-message'); 
  static eyeIcon = document.querySelector('.material-symbols-outlined'); 

  static valid() {
    const isValid = Password.input.validity.valueMissing || Password.input.validity.tooShort || Password.input.value.trim() === ""; 

    return !isValid; 
  }

  static resetErrorMessageAndIndicator() {
    Password.errorMessage.textContent = ""; 
    Password.input.className = ""; 
    Password.input.nextElementSibling.className = "icon-error__hide"; 
  }

  static showErrorMessageAndIndicator() {
    if(Password.input.validity.valueMissing || Password.input.value.trim() === "") {
      Password.errorMessage.textContent = "Password cannot be empty"; 
    }

    if(Password.input.validity.tooShort) {
      Password.errorMessage.textContent = "Password must be at least 7 characters long"; 
    }

    Password.input.className = "error";
    Password.input.nextElementSibling.className = "icon-error__show";

  }

  static checkInputValidity() {
    if(Password.valid()) {
      Password.resetErrorMessageAndIndicator(); 
    } else {
      Password.showErrorMessageAndIndicator(); 
    }
  }
}

new FormComponent(); 



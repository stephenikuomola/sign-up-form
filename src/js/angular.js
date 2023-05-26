// To refactor code in validation.js

class FormComponent {
  #form = document.querySelector('form'); 
  #firstName = document.querySelector("[id='firstname']");
  #lastName = document.querySelector("[id='lastname']"); 
  #email = document.querySelector("[id='mail']");  
  #password = document.querySelector("[id='password']"); 
  #eyeIcon = document.querySelector('.material-symbols-outlined'); 

  constructor() {
    this.#form.addEventListener('submit', this.#submitForm.bind(this)); 
    this.#eyeIcon.addEventListener('click', this.#showPassword.bind(this)); 
  }

  #showPassword(evtObj) {
    const isShowing = evtObj.target.getAttribute('data-password-visible') === 'true' || false; 
    evtObj.target.dataset.passwordVisible = `${!isShowing}`; 

    if(isShowing) {
        this.#password.setAttribute('type', 'password'); 
        evtObj.target.textContent = 'visibility'; 
    }else {
        this.#password.setAttribute('type', 'text'); 
        evtObj.target.textContent = 'visibility_off'; 
    }
  }

  #submitForm(evtObj) {
    this.#checkFirstNameValidity(evtObj); 
    this.#checkLastNameValidity(evtObj); 
    this.#checkEmailValidity(evtObj); 
    this.#checkPasswordValidity(evtObj); 
  }

  #checkPasswordValidity(evtObj) {
    if(this.#password.validity.valueMissing || this.#password.value.trim() === '') {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#password, 'Password cannot be empty');
    }else if(this.#password.validity.tooShort) {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#password, 'Password must be at least 7 characters long');
    }else {
      this.#resetErrorMessageAndIndicator(this.#password, '');
    }
  }

  #checkEmailValidity(evtObj) {
    if(this.#email.validity.valid) {
      this.#resetErrorMessageAndIndicator(this.#email, ''); 
    }

    if(this.#email.validity.valueMissing) {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#email, 'Email cannot be empty'); 
    }

    if(this.#email.validity.typeMismatch) {
      evtObj.preventDefault(); 
      this.#email.classList.add('error-value'); 
      this.#showErrorMessageAndIndicator(this.#email, 'Looks like this is not an email'); 
    }
  }

  #checkFirstNameValidity(evtObj) {
    if(this.#firstName.validity.valueMissing || this.#firstName.value.trim() === '') {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#firstName, 'First Name cannot be empty'); 
    }else if(this.#firstName.validity.patterMismatch) {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#firstName, 'First Name must be between 1 and 20 characters');
    }else {
      this.#resetErrorMessageAndIndicator(this.#firstName, '')
    }
  }

  #checkLastNameValidity(evtObj) {
    if(this.#lastName.validity.valueMissing || this.#lastName.value.trim() === '') {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#lastName, 'Last Name cannot be empty'); 
    }else if(this.#lastName.validity.patterMismatch) {
      evtObj.preventDefault(); 
      this.#showErrorMessageAndIndicator(this.#lastName, 'Last Name must be between 1 and 20 characters');
    }else {
      this.#resetErrorMessageAndIndicator(this.#lastName, '')
    }
  }

  #showErrorMessageAndIndicator(input, message) {
    input.nextElementSibling.nextElementSibling.textContent = message; 
    input.classList.add('error')
    input.nextElementSibling.className = 'icon-error__show';
  }

  #resetErrorMessageAndIndicator(input, message) {
    input.nextElementSibling.nextElementSibling.textContent = message; 
    input.className = ''; 
    input.nextElementSibling.className = 'icon-error__hide';
  }

}

new FormComponent(); 


class t{static input=document.querySelector("[id='firstname']");static errorMessage=document.querySelector(".firstname-error-message");static valid(){return!(t.input.validity.valueMissing||t.input.validity.patternMismatch||""===t.input.value.trim())}static resetErrorMessageAndIndicator(){t.errorMessage.textContent="",t.input.className="",t.input.nextElementSibling.className="icon-error__hide"}static showErrorMessageAndIndicator(){(t.input.validity.valueMissing||""===t.input.value.trim())&&(t.errorMessage.textContent="First Name cannot be empty"),t.input.validity.patternMismatch&&(t.errorMessage.textContent="First Name must be between 1 and 20 characters"),t.input.className="error",t.input.nextElementSibling.className="icon-error__show"}static checkInputValidity(){t.valid()?t.resetErrorMessageAndIndicator():t.showErrorMessageAndIndicator()}}class e{static input=document.querySelector("[id='lastname']");static errorMessage=document.querySelector(".lastname-error-message");static valid(){return!(e.input.validity.valueMissing||e.input.validity.patternMismatch||""===e.input.value.trim())}static resetErrorMessageAndIndicator(){e.errorMessage.textContent="",e.input.className="",e.input.nextElementSibling.className="icon-error__hide"}static showErrorMessageAndIndicator(){(e.input.validity.valueMissing||""===e.input.value.trim())&&(e.errorMessage.textContent="Last Name cannot be empty"),e.input.validity.patternMismatch&&(e.errorMessage.textContent="Last Name must be between 1 and 20 characters"),e.input.className="error",e.input.nextElementSibling.className="icon-error__show"}static checkInputValidity(){e.valid()?e.resetErrorMessageAndIndicator():e.showErrorMessageAndIndicator()}}class r{static input=document.querySelector("[id='mail']");static errorMessage=document.querySelector(".email-error-message");static resetErrorMessageAndIndicator(){r.errorMessage.textContent="",r.input.className="",r.input.nextElementSibling.className="icon-error__hide"}static showErrorMessageAndIndicator(){r.input.validity.valueMissing&&(r.errorMessage.textContent="Email cannot be empty"),r.input.validity.typeMismatch&&(r.errorMessage.textContent="Looks like this is not an email",r.input.classList.add("error-value")),r.input.classList.add("error"),r.input.nextElementSibling.className="icon-error__show"}static checkInputValidity(){r.input.checkValidity()?r.resetErrorMessageAndIndicator():r.showErrorMessageAndIndicator()}}class s{static input=document.querySelector("[id=password]");static errorMessage=document.querySelector(".password-error-message");static eyeIcon=document.querySelector(".material-symbols-outlined");static valid(){return!(s.input.validity.valueMissing||s.input.validity.tooShort||""===s.input.value.trim())}static resetErrorMessageAndIndicator(){s.errorMessage.textContent="",s.input.className="",s.input.nextElementSibling.className="icon-error__hide"}static showErrorMessageAndIndicator(){(s.input.validity.valueMissing||""===s.input.value.trim())&&(s.errorMessage.textContent="Password cannot be empty"),s.input.validity.tooShort&&(s.errorMessage.textContent="Password must be at least 7 characters long"),s.input.className="error",s.input.nextElementSibling.className="icon-error__show"}static checkInputValidity(){s.valid()?s.resetErrorMessageAndIndicator():s.showErrorMessageAndIndicator()}}new class{#t=document.querySelector("form");constructor(){this.#t.addEventListener("submit",this.#e.bind(this)),s.eyeIcon.addEventListener("click",this.#r)}#r(t){const e="true"===t.target.getAttribute("data-password-visible")||!1;t.target.dataset.passwordVisible=`${!e}`,e?(t.target.textContent="visibility",s.input.setAttribute("type","password")):(t.target.textContent="visibility_off",s.input.setAttribute("type","text"))}#e(i){this.#s()?(t.resetErrorMessageAndIndicator(),e.resetErrorMessageAndIndicator(),r.resetErrorMessageAndIndicator(),s.resetErrorMessageAndIndicator()):(i.preventDefault(),t.checkInputValidity(),e.checkInputValidity(),r.checkInputValidity(),s.checkInputValidity())}#s(){return t.valid()&&r.input.validity.valid&&e.valid()&&s.valid()}};
//# sourceMappingURL=index.ce6105df.js.map

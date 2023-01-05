const inputs = document.querySelectorAll("input:not([type='submit'])");

inputs.forEach(input => {

    input.addEventListener('invalid', addError);
     input.addEventListener('focus', removeError);
})

function addError(e) {
    var name = e.target.getAttribute("name");
    var error_icon = document.createElement('span');
    var error_message = document.createElement('span');
    error_message.setAttribute("data-id", name);
    error_message.classList.add('error-message');
    if (e.target.value == "" || e.target.value == null) error_message.innerHTML = "" + e.target.getAttribute("placeholder") + " cannot be empty.";
    else error_message.innerHTML = "Looks like this is not an " + e.target.getAttribute("placeholder") + ".";
    e.target.after(error_message);
    e.target.classList.add('error');
}

function removeError(e) {
    
    e.target.classList.remove('error');
}
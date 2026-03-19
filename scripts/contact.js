let hasError = false; // Global definieren

function enableMsgButton() {
    let checkbox = document.getElementById("checkbox");
    let sendMessageButton = document.getElementById("sendMessageButton");

    if (checkbox.checked) {
        sendMessageButton.disabled = false;
        document.getElementById("sendMessageButton").classList.add("checked");
    } else {
        sendMessageButton.disabled = true;
        document.getElementById("sendMessageButton").classList.remove("checked");
    }
}

// Event-Listener für das Formular hinzufügen
function initContactForm() {
    const sendButton = document.getElementById('sendMessageButton');
    const form = document.querySelector('.contact-input-container');

    // Submit Event für Button
    sendButton.addEventListener('click', handleFormSubmit);

    // Real-time Validation für Input-Felder
    document.getElementById('contactName').addEventListener('blur', validateSingleField);
    document.getElementById('contactEmail').addEventListener('blur', validateSingleField);
    document.getElementById('contactMessage').addEventListener('blur', validateSingleField);
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const isValid = await validateContactInput();

    if (isValid) {
        // Hier können Sie das Formular senden
        console.log('Formular ist valid - kann gesendet werden');
        sendContactForm();
    } else {
        console.log('Formular hat Fehler');
    }
}

async function validateSingleField(event) {
    const fieldId = event.target.id;

    if (fieldId === 'contactEmail') {
        await validateAddEmailFormat();
    }
    // Weitere Validierungen können hier hinzugefügt werden
}

async function validateContactInput() {
    let inputs = getContactInputs();
    let values = {
        name: inputs.nameInput.value.trim(),
        email: inputs.emailInput.value.trim().toLowerCase(),
        message: inputs.messageInput.value.trim()
    };

    resetContactInputErrors(inputs);
    hasError = false; // Reset
    if (checkEmptyFields(inputs, values)) return false;
    let emailValid = await validateAddEmailFormat();
    let messageValid = await validateMessageFormat();
    return emailValid && messageValid && !hasError;
}

function getContactInputs() {
    return {
        nameInput: document.getElementById('contactName'),
        emailInput: document.getElementById('contactEmail'),
        messageInput: document.getElementById('contactMessage'),
        nameError: document.getElementById('nameError'),
        emailError: document.getElementById('emailError'),
        messageError: document.getElementById('messageError')
    };
}

function resetContactInputErrors(inputs) {
    [inputs.nameInput, inputs.emailInput, inputs.messageInput].forEach(input => {
        if (input) input.classList.remove('error');
    });

    [inputs.nameError, inputs.emailError, inputs.messageError].forEach(el => {
        if (el) {
            el.classList.add('dNone');
            el.innerText = "";
        }
    });

    ['namePlaceholderError', 'emailPlaceholderError', 'phonePlaceholderError'].forEach(id => {
        let el = document.getElementById(id);
        if (el) {
            el.classList.remove('visible');
            el.innerText = "Placeholder";
        }
    });
}

function checkEmptyFields(inputs, values) {
    let hasEmptyFields = false;

    if (!values.name) {
        styleNameValues(inputs);
        hasEmptyFields = true;
    }
    if (!values.email) {
        styleEmailValues(inputs);
        hasEmptyFields = true;
    }
    if (!values.message) {
        styleMessageValues(inputs);
        hasEmptyFields = true;
    }

    return hasEmptyFields;
}

function styleNameValues(inputs) {
    inputs.nameInput.classList.add('error');
    document.getElementById('namePlaceholderError').innerHTML = "Please enter a name.";
    document.getElementById('namePlaceholderError').classList.add('visible');
    hideErrorMessages('namePlaceholderError', 'contactName');
    hasError = true;
}

function styleEmailValues(inputs) {
    inputs.emailInput.classList.add('error');
    document.getElementById('emailPlaceholderError').innerHTML = "Please enter an e-mail address.";
    document.getElementById('emailPlaceholderError').classList.add('visible');
    hideErrorMessages('emailPlaceholderError', 'contactEmail');
    hasError = true;
}

function styleMessageValues(inputs) {
    inputs.messageInput.classList.add('error');
    document.getElementById('phonePlaceholderError').innerHTML = "Please enter a message.";
    document.getElementById('phonePlaceholderError').classList.add('visible');
    hideErrorMessages('phonePlaceholderError', 'contactMessage');
    hasError = true;
}

function hideErrorMessages(id, inputId) {
    setTimeout(() => {
        let el = document.getElementById(id);
        let input = document.getElementById(inputId);
        if (el) {
            el.classList.remove('visible');
            el.innerText = "Placeholder";
        }
        if (input) {
            input.classList.remove('error');
        }
    }, 3000);
}

async function validateAddEmailFormat() {
    let emailInput = document.getElementById("contactEmail");
    let email = emailInput.value.trim().toLowerCase();
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorMsgEmail = document.getElementById("emailError");

    if (emailInput.value == '') {
        return true; // Leeres Feld wird in checkEmptyFields behandelt
    }

    if (!pattern.test(email)) {
        patternTestEmail(emailInput, errorMsgEmail);
        return false;
    }

    if (errorMsgEmail) errorMsgEmail.classList.add("dNone");
    return true;
}

// Fehlende Funktion hinzufügen
async function validateMessageFormat() {
    let messageInput = document.getElementById("contactMessage");
    let message = messageInput.value.trim();
    let errorMsgMessage = document.getElementById("messageError");

    if (message === '') {
        return true; // Wird in checkEmptyFields behandelt
    }

    if (message.length < 10) {
        patternTestMessage(messageInput, errorMsgMessage);
        return false;
    }

    if (errorMsgMessage) errorMsgMessage.classList.add("dNone");
    return true;
}

function patternTestEmail(emailInput, errorMsgEmail) {
    emailInput.classList.add("error");
    errorMsgEmail.innerText = "Please enter a valid email address.";
    errorMsgEmail.classList.remove("dNone");
    setTimeout(() => {
        errorMsgEmail.classList.add("dNone");
        errorMsgEmail.innerText = "";
        emailInput.classList.remove("error");
    }, 3000);
}

function patternTestMessage(message, errorMsgMessage) {
    message.classList.add("error");
    errorMsgMessage.innerText = "Message must be at least 10 characters long.";
    errorMsgMessage.classList.remove("dNone");
    setTimeout(() => {
        errorMsgMessage.classList.add("dNone");
        errorMsgMessage.innerText = "";
        message.classList.remove("error");
    }, 3000);
}

function sendContactForm() {
    // Hier die eigentliche Versendung implementieren
    alert('Message sent successfully!');

    // Formular zurücksetzen
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
    document.getElementById('checkbox').checked = false;
    enableMsgButton(); // Button wieder deaktivieren
}


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
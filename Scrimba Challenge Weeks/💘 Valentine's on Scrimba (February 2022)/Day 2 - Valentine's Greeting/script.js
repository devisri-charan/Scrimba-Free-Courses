const greetingDisplay = document.getElementById("greeting-display");
document.getElementById("form").addEventListener("input", writeGreeting);

function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    const recipient = document.getElementById("recipient-input").value;
    const greeting = document.getElementById("greeting-select").value;
    const customMsg = document.getElementById("custom-input").value;
    const sender = document.getElementById("sender-input").value;

    if (customMsg.length > 0){
        greetingDisplay.textContent = `To ${recipient}, ${customMsg} from ${sender}`;
    }
    else{
        greetingDisplay.textContent = `To ${recipient}, ${greeting} from ${sender}`;
    }
}
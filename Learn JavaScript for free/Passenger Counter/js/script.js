let count = 0;
const passenger = document.getElementById("count-el");
const previousEntry = document.getElementById("previousEntry-el");
document.getElementById("increment-btn").addEventListener("click",increment);
document.getElementById("save-btn").addEventListener("click",save);
document.getElementById("reset-btn").addEventListener("click",reset);

function increment() {
    count +=1;
    passenger.innerText = count;
}

function save(){
    previousEntry.innerText += " " + count + " -";
    count = 0;
    passenger.innerText = count;
}

function reset(){
    count = 0;
    passenger.innerText = count;
    previousEntry.innerText = "Previous entries: ";
}
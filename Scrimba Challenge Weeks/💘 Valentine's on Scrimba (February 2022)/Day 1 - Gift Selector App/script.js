let costEl = document.getElementById("cost-el");
const balloonsAdded = document.getElementById("balloon-checkbox");
const error = document.getElementById("error");
const errorBtn = document.getElementById("error-btn");

document.getElementById("btn").addEventListener("click",calculate);
document.getElementById("reset").addEventListener("click",reset);
balloonsAdded.addEventListener("change",(e)=>{
    if(e.target.checked){
        document.getElementById("balloon-check").style.display = "inline";
    }
    if(!e.target.checked){
        document.getElementById("balloon-check").style.display = "none";
    }
});
errorBtn.addEventListener("click", confirmation);

    
function calculate(){
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    const foodCost = parseInt(document.getElementById("food-select").value);
    const transportCost = parseInt(document.getElementById("transport-select").value);

    if (!foodCost || !transportCost){
        error.style.display = "flex";
    }
    else{
        let cost = foodCost + transportCost;

        if(balloonsAdded.checked){
            cost+=10;
        }
        // 2. Display the total cost in the cost-el span.
        costEl.textContent = `$${cost}`;
    }
}

function reset(){
    document.getElementById("form").reset();
    document.getElementById("balloon-check").style.display = "none";
    costEl.textContent = `...`;
}

function confirmation() {
    error.style.display = "none";
}
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button")
const specialcharts = ["%", "*", "/", "-", "+", "="];
let output = " ";

// // define function to calculate based on button clicked 
const calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== "") {
// if output has "%" replace with "/100" before evaluating 
        output = eval(output.replace("%", "/100"));
    }else if (btnvalue === "AC") {
        output = "";
    } else if (btnvalue === "DEL") {
// is DEL button is clicked, remove the last character from output
        output = output.toString().slice(0, -1);
    }else {
// if output is empty and button is specialcharts then return
        if(output === "" && specialcharts.includes(btnvalue)) return;
    output += btnvalue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});



// ==============  https://www.youtube.com/watch?v=cHkN82X3KNU ==============


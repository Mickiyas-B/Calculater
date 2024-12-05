// =======simple Js ==================


let result = document.getElementById("inputtext");

let calculater = (Number) => {
    result.value+=Number;
}

let Result=() => {
    try{
        result.value=eval(result.value)

    }
    catch(err){
        alert("enter the valid input")

    }
}

function calr () {
    result.value= "";
}

function del() {
    result.value = result.value.slice(0, -1);
}


// ======https://www.youtube.com/watch?v=1jAEyP9a1hg ======
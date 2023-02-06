
function loading(){
    alert("Loading weather report...")
}

let cookie = document.querySelector(".cookie-policy");

function accept(){
    cookie.remove();
}

// converting temperatures 

function cTof(temp){
    return Math.round(9 / 5 * temp + 32);  //to convert C to F, should divide 9 to 5 and add 32 to it(32 cuz 0C is 32F)
}
function fToc(temp){
    return Math.round(5 / 9 * (temp - 32)); //converting F to C 
}

function convert(element){
    console.log(element.value);
    for(let i=1; i<9; i++){
        let tempSpan = document.querySelector("#temp" + i);
        let tempVal = parseInt(tempSpan.innerText);
        if(element.value == "C"){
            tempSpan.innerText = fToc(tempVal);
        }else {
            tempSpan.innerText = cTof(tempVal);
        }
    }
}
var input = document.querySelector("input");
function addvalue(getvalue) {
    input.value += getvalue;
}
function AC() {
    input.value = "";
}
function Delete() {
    input.value = input.value.slice(0, input.value.length - 1);
}
var add = input.value;
function equals(){
    input.value= eval(input.value)
}

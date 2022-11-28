var button = document.getElementById("button-addon2");
var input = document.getElementById("inputName");

input.addEventListener("keypress", function onEvent(event){
    if (event.key === "Enter" ){
        event.preventDefault();
        button.click();
    }
});

function sayHello(){
    let name = document.getElementById("inputName").value;
    alert("Nice to meet you, "+ name + " ! ٩(๑❛ᴗ❛๑)۶");
};
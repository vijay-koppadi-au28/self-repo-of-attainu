let button = document.getElementById("btn")
let inp = document.getElementById("input")
let main = document.getElementById("main")

button.addEventListener("click", ()=>{
    var re = /[0-9A-Fa-f]{6}/g;
    var inputString = inp.value
    if(re.test(inputString)) {
        main.style.backgroundColor = inputString
    }
    else{
        alert('invalid');
    }

    
})





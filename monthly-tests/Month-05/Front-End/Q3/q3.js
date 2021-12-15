let add_ques_btn = document.getElementById("add_ques_btn")
let add_ques_box = document.getElementById("add_ques_box")
let save_btn = document.getElementById("save_btn")
let question_text = document.getElementById("question_text")
let answer_text = document.getElementById("answer_text")
let cross = document.getElementById("cross")
let a1 = document.getElementById("a1")
let answer_dis1 = document.getElementById("answer_dis1")
let adding_box = document.getElementById("adding_box")
let show1 = document.getElementById("show1")

add_ques_btn.addEventListener("click", ()=>{
    add_ques_box.classList.remove("d-none")
})

cross.addEventListener("click",()=>{
    add_ques_box.classList.add("d-none")
})

show1.addEventListener("click",()=>{
    answer_dis1.classList.remove("d-none")
})

save_btn.addEventListener("click",()=>{
    question1_box.classList.remove('d-none')
    var div = document.createElement('div');
    div.innerHTML = `<section id="question1_box" class="p-3  bg-light">
    <div>
        <h5 id="q1">${question_text.value}</h5>
    </div>
    <div>
        <p id="show1" class="text-primary">Show/Hide Answer</p>
    </div>
    <div id="answer_dis1" class="d-none">
        <p id="a1">${answer_text.value}</p>
    </div>
    <div class="d-flex justify-content-between">
        <button class="rounded-3 border-3 border-success">Edit</button>
        <button class="rounded-3 border-3 border-danger">Delete</button>
    </div>
</section>`

    adding_box.appendChild(div)
})
let count =0;
let countEl = document.getElementById("entered-value");
let saveEl = document.getElementById("save");
function increment(){
    count++;
    countEl.innerText=count;
}

function save(){
    let countStr = ` ${count} - `;
    saveEl.innerText += countStr;
    countEl.innerText = 0;
}

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const preview = document.querySelector("#preview");


function add(rgb){

    document.querySelector('#list').insertAdjacentHTML('afterbegin',`
        <div id = "card">
            <div id="color" style="${rgb}"></div>
            <h2>${rgb}</h2>
            <div id="close">X</div>
        </div>
    `)
}

function error(){
    document.querySelector('#message').innerHTML = `<h2 id="error">You're supposed use RGB hexdecimals :/</h2>`;
}

document.querySelector('#submit').addEventListener("click", sub =>{
    sub.preventDefault();
    let color = document.querySelector('#input').value;
    if (color.length > 7){
        error();
    }else{
        if (color.includes('#')){
            add(color);

        }
        if (color.includes('#') != true & color.length === 6){
            let c = '#' + color;
            add(c);
        }else{
            error();
        }
    }
}) 

document.querySelector('#input').addEventListener("submit", event =>{
    event.preventDefault();
    let color = document.querySelector('#input').value;
    if (color.length > 7){
        error();
    }else{
        if (color.includes('#')){
            add(color);

        }
        if (color.includes('#') != true & color.length === 6){
            let c = '#' + color;
            add(c);
        }else{
            error();
        }
    }
})
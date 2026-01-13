
const list = document.querySelector("#list");
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const preview = document.querySelector("#preview")


function add(rgb){
    document.querySelector('#list').insertAdjacentHTML('afterbegin',`
        <div id = "card">
            <div id = "color" style = "background-color:${rgb}"></div>
            <h2>${rgb}</h2>
        </div>
    `)
}

function error(){
    document.querySelector('#message').innerHTML = `eeeee`;
}

document.querySelector('#submit').addEventListener("click", sub =>{
    let color = document.querySelector('#input').value;
    if (color.length > 7){
        error();
    }else{
        if (color.includes('#')){

        }
        if (color.includes('#') != true & color.length === 6){

        }else{
            error();
        }
    }
    
})
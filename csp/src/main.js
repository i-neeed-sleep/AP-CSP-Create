const list = document.querySelector("#list");
const input = document.querySelector("#input");
const message = document.querySelector('#message');

let set =[{
    'name': 'Red',
    'code': '#ff0000'
},{
    'name': 'Green',
    'code': '#00ff00'
},{
    'name': 'Blue',
    'code': '#0000ff'
}] 

function start(){
    set.forEach(color =>{
        list.insertAdjacentHTML('afterbegin',`
            <div class = "card" id="${color.code}">
                <div id="color" style="background-color:${color.code};"></div>
                <h1>${color.name} - ${color.code}</h1>
                <button id = 'close'>Clean from Palette</button>
            </div>
        `)
    })
}
start();


function add(rgb, name){
    list.insertAdjacentHTML('afterbegin',`
        <div class = "card" id = '${rgb}'>
            <div id="color" style="background-color:${rgb};"></div>
            <h1>${name} - ${rgb}</h1>
            <button id = 'close'>Clean from Palette</button>
        </div>
    `)
}

function error(error){
    message.innerHTML = `<h2 id="error">${error}</h2>`;
}

function search(target){
    
}

document.querySelector('#search').addEventListener("submit", event =>{
    event.preventDefault();
    let search = document.querySelector('#search').value;
    if (search.includes('#')){

    }else{

    }
})

document.querySelector('#submit').addEventListener("click", event =>{
    event.preventDefault();
    let color = document.querySelector('#input').value;
    let name = document.querySelector('#inName').value;
    let exist = false;

    set.forEach(i =>{
        if(i.name === color){
            error("You already have this color in your palette");
            exist = true;
        }
    })

    if (exist === false){
        if (color.length > 7 || color.lenght < 6){
            error("You're supposed use RGB hexdecimals");
        }
        else{
            if (color.includes('#')){
                add(color, name);
                message.innerHTML = '';
                set.push({'name': name, 'code': color})
            }
            if (color.includes('#') != true & color.length === 6){
                let c = '#' + color;
                add(c, name);
                message.innerHTML = '';
                set.push({'name': name, 'code': c})
            }else{
                error("You're supposed use RGB hexdecimals");
            }
        }
    }
}) 

document.querySelectorAll('#close').forEach(i => addEventListener("click", close =>{
    close.preventDefault();
    const target = close.target.closest(".card").getAttribute('id');
    list.innerHTML = '';
    set = set.filter(i => i.code !== target);
    start();
}))
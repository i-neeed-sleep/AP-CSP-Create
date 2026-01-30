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
            <div class = "card" id='${color.code}' color='${color.name}'>
                <div id="color" style="background-color:${color.code};"></div>
                <h1>${color.name} - ${color.code}</h1>
                <button id = 'close'>Clean from Palette</button>
            </div>
        `)
    })
}
start();

function closed(){
    document.querySelectorAll('#close').forEach(button => button.addEventListener("click", event =>{
        event.preventDefault();
        const target = event.target.closest(".card");
        const tcolor = event.target.closest(".card").getAttribute('id');
        set = set.filter(i => i.code !== tcolor);
        target.remove();
    }))
}

closed();

function add(rgb, name){
    list.insertAdjacentHTML('afterbegin',`
        <div class = "card" id='${rgb}' color='${name}'>
            <div id="color" style="background-color:${rgb};"></div>
            <h1>${name} - ${rgb}</h1>
            <button id = 'close'>Clean from Palette</button>
        </div>
    `)
    set.push({'name': name, 'code': rgb});
    closed();
}

function error(error){
    message.innerHTML = `<h2 id="error">${error}</h2>`;
}




document.querySelector('.searched').addEventListener("submit", event =>{
    event.preventDefault();
    let target = document.querySelector('#search').value;
    document.querySelectorAll(".card").forEach(card => {
        if(card.getAttribute("color").toLowerCase().includes(target.toLowerCase())||card.getAttribute("id")===target){
            card.style.display = "flex";
        }else{
            card.style.display = "none";
        }
    })
})

document.querySelector('#submit').addEventListener("click", event =>{
    event.preventDefault();
    let color = document.querySelector('#input').value;
    let name = document.querySelector('#inName').value;
    let exist = false;

    if(color.includes('#') != true){
        color = '#' + color;
    }

    set.forEach(i =>{
        if(i.code == color){
            exist = true;
        }
    })

    if (exist === false){
        if (color.length === 7){
            add(color, name);
            message.innerHTML = '';
        }
        else{
            error("You're supposed use RGB hexdecimals");
        }
    }else{
        error('You already have this color in the palette');
    }
}) 
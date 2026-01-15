
const list = document.querySelector("#list");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");

const preset =[{
    name: 'Red',
    code: '#ff0000'
},{
    name: 'Green',
    code: '#00ff00'
},{
    name: 'Blue',
    code: '#0000ff'
}
] 

preset.forEach(color =>{
    document.querySelector('#list').insertAdjacentHTML('afterbegin',`
        <div id = "card">
            <div id="color" style="background-color:${color.code};"></div>
            <h1>${color.name} - ${color.code}</h1>
            <button id='close'>Clean from Palette</button>
        </div>
    `)
})

function add(rgb, name){
    document.querySelector('#list').insertAdjacentHTML('afterbegin',`
        <div id = "card">
            <div id="color" style="background-color:${rgb};"></div>
            <h1>${name} - ${rgb}</h1>
            <button id='close'>Clean from Palette</button>
        </div>
    `)
}

function error(){
    document.querySelector('#message').innerHTML = `<h2 id="error">You're supposed use RGB hexdecimals :/</h2>`;
}

document.querySelector('#submit').addEventListener("click", sub =>{
    sub.preventDefault();
    let color = document.querySelector('#input').value;
    let name = document.querySelector('#inName').value;
    if (color.length > 7 || color.lenght < 6){
        error();
    }else{
        if (color.includes('#')){
            add(color, name);
            document.querySelector('#message').innerHTML = '';
        }
        if (color.includes('#') != true & color.length === 6){
            let c = '#' + color;
            add(c, name);
            document.querySelector('#message').innerHTML = '';
        }else{
            error();
        }
    }
}) 

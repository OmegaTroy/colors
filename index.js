// selectores
const $ = Selector => document.querySelector(Selector);

let $bg = $('#bg');
let $colors = $('#colors');
let $fav = $('#favorito');
let $rgb = $('#rgb');
let $hex = $('#hex');
let $reset = $('#reset');

// array
const colores = {
    colore : ['red','blue','yellow','pink'],
    favoritos : ['#721fac','#fe001b','#2a2b2f','#0e1538','#48426D','#2bd2ff','#ff0461','#18d539','#1f212b', '#6610f2','#6f42c1','#e83e8c','#dc3545','#fd7e14','#ffc107','#28a745','#20c997','#17a2b8','#6c757d','#007bff','#232c33','#28a745','#17a2b8','#ffc107','#2b343b','#f8f9fa','#343a40','#363636','#2196f3'],
    hex: [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
}

const rgbRandom =(max) => {
    return Math.floor(Math.random() * (max/2));
}

const getRandom= (colors) => {
    return Math.floor(Math.random() * colors.length)
}


$colors.addEventListener('click',()=>{
    const randomNumber = getRandom(colores.colore)
    document.body.style.backgroundColor = colores.colore[randomNumber];
    $bg.textContent = colores.colore[randomNumber];

});

$fav.addEventListener('click',()=>{
    const randomNumber = getRandom(colores.favoritos)
    document.body.style.backgroundColor = colores.favoritos[randomNumber];
    $bg.textContent = colores.favoritos[randomNumber];
});

$hex.addEventListener('click',()=>{
    let hax = '#';
    for(let i = 0; i < 6; i++){
        const randomNumber = getRandom(colores.hex)
        hax += colores.hex[randomNumber];
    }
    document.body.style.backgroundColor = hax;
$bg.textContent = hax;
});

$reset.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#1f212b';
    $bg.textContent = '#1f212b';
})

$rgb.addEventListener('click',()=>{
    const red = rgbRandom(256);
    const green = rgbRandom(256);
    const blue = rgbRandom(256);
    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = rgb;
    $bg.textContent = rgb;
});


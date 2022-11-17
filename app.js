function moverPosicionRandom (elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetHeight) + 'px;'
} 

let btnSi = document.getElementById('btnSi');
let btnNo = document.getElementById('btnNo');
let divModoSecso = document.getElementsByClassName('modoSecso')[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)});
btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirias que sí. Te amo ❤')

    divModoSecso.style.display = 'block';
    const cancion = new Audio('./img/modo_hott.mp3');
    cancion.play();
});
function nigga() {
    document.getElementById('songg').play();
    const target = document.getElementById("cent");

    var s = document.getElementById('cent').style;
    document.getElementById('songg').volume = 0.05;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,10)})();
    

    target.addEventListener('click', () => target.style.opacity = '0');
    target.addEventListener('transitionend', () => target.remove());
    exp
}
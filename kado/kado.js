(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
}());
  

const cardGreeting = document.getElementById("cardGreeting")
const info = document.getElementById("info")
const body = document.querySelector("body")
cardGreeting.style.transform = "scale(0)"
info.style.transform = "scale(0)"
var myMusic = new audio("../src/music/HBD.mp3");
myMusic.play();

setTimeout(() => {
  cardGreeting.style.transform = "scale(1)"
  info.style.transform = "scale(1)"
  info.classList.remove('hidden')
  info.classList.add('btn-scroll')
  body.classList.remove("overflow-hidden")
}, 10000);

function audio(src) {
  this.music = document.createElement("audio");
  this.music.src = src;

  this.music.setAttribute("preload", "auto");
  this.music.setAttribute("controls", "none");
  this.music.style.display = "none";
  document.body.appendChild(this.music);

  this.play = function () {
    this.music.play();
  };
}
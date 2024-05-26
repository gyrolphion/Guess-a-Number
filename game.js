let rastgeleSayi = Math.ceil(Math.random() * 20);
let mesaj = document.querySelector(".msg");
let topScore = document.querySelector(".top-score");
let topScoreId = document.getElementById("top-score");
let skor = 10;
let enYuksekSkor = localStorage.getItem("storedValue") || 0;
document.querySelector(".top-score").textContent = enYuksekSkor;
console.log(rastgeleSayi);

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;
  if (!tahmin) {
    console.log((mesaj.textContent = "Lütfen Bir Sayı Giriniz:"));
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz...👏";
    document.querySelector(".check").disabled = true;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;
    function createFirework(x, y) {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.top = y + "px";
      firework.style.left = x + "px";
      firework.style.backgroundColor = getRandomColor();
      document.body.appendChild(firework);
      setTimeout(() => {
        firework.remove();
      }, 1000);
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    const fireworksCount = 100;
    for (let i = 0; i < fireworksCount; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createFirework(x, y);
    }

    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      topScore.textContent = enYuksekSkor;
     
      localStorage.setItem("storedValue", enYuksekSkor);
    }
  } else {
    if (skor > 1) {
      if (tahmin > rastgeleSayi) {
        mesaj.textContent = "Tahmininizi Azaltın👎";
      } else {
        mesaj.textContent = "Tahmininizi Arttırın ☝️";
      }

      skor--;
      document.querySelector(".score").textContent = skor;
    } else {
      mesaj.textContent = "Oyunu kaybettiniz.😒";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  rastgeleSayi = Math.ceil(Math.random() * 20);
  skor = 10;
  document.querySelector(".score").textContent = skor;
  document.querySelector(".number").textContent = "😊?";
  document.querySelector(".guess").value = "";
  mesaj.textContent = "Oyun Yeni Oyuncu İçin Başlıyor...";
  document.querySelector(".check").disabled=false;

};
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    document.querySelector(".check").click();
  }
});

document.querySelector(".check").addEventListener("click", () => {
  let tahminSayi = document.querySelector(".guess").value;
  if (!isNaN(tahminSayi) && tahminSayi >= 1 && tahminSayi <= 20) {
  } else {
    mesaj.textContent = "Geçersiz sayı girdiniz...😒";
    skor++;
  }
  
});

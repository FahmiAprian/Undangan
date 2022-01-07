//load pertama

// INI SLIDE
datas.forEach((data) => {
  const listCarousel = document.querySelector('.carousel-inner');
  listCarousel.innerHTML += `
            <div class="carousel-item">
              <img src="${data.link}" class="d-block w-100" alt="..." height="300px"/>
              <div class="d-md-block slide-background">
                <h5>${data.captionJudul}</h5>
                <p>
                  ${data.captionDesc}
                </p>
              </div>
            </div>
      `;
});

//TERIMA UNDANGAN

const terima = document.querySelector('#terima');

function infoNotOpen() {
  alert('buka dengan MobilePhone atau ukuran lebar layar kurang dari 450px');
}
function openInvitation() {
  const ukuran = window.screen.availWidth;
  if (ukuran < 450) {
    const modalOpening = document.querySelector('.opening');
    modalOpening.classList.remove('opening');
    modalOpening.classList.add('opened');
    const audio = document.getElementById('audioPertama');
    audio.play();
  } else {
    infoNotOpen();
  }
}
terima.addEventListener('click', openInvitation);

//INI TIME
var countDownDate = new Date('Dec 5, 2021 09:00:00').getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById('waktuMundur').innerHTML = `<div class="waktu">${days}<p>Hari</p> </div>
              <div class="waktu">${hours} <p>Jam</p> </div>
              <div class="waktu"> ${minutes} <p>Menit</p> </div> 
              <div class="waktu">${seconds} <p>Detik</p> </div> `;

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('waktuMundur').innerHTML = 'SEDANG BERLANGSUNG';
  }
}, 1000);

// stream

// execusi form

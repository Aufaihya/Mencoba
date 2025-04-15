AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function hamburg() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = 'block'; // Menampilkan dropdown
}

function cancel() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = 'none'; // Menyembunyikan dropdown
}

function thankYou() {
  location.href='https://s.tmimgcdn.com/scr/1600x1000/219400/free-thank-you-website-page-illustration-concept-vector_219479-original.jpg';
}

function boom() {
  alert('kamu ngeklik boom yah... meledak');
  document.body.style.display = 'none';
  location.assign('https://youtu.be/Rhz1bhamGzE?si=xeQc_Wh5jeVIyi9d');
}

function chat() {
  alert('yakin mau lanjut chat??...');
  // Coba intent Android
  window.location.href = "intent://send/+6281229562094?text=Halo%20Aufa#Intent;scheme=smsto;package=com.whatsapp;end";
  
  // Fallback ke web WhatsApp setelah 1 detik
  setTimeout(function() {
    window.location.href = "https://wa.me/6281229562094?text=Halo%20Aufa";
  }, 1000);
}

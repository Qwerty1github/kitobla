function loader() {
  document.querySelector("loader").classList.add('active');
}
function fadeOut() {
  setTimeout(loader, 4000);
}
window.onload = () =>{
  fadeOut();
}
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
  setTimeout(loader, 4700);
}






  function on() {
    document.getElementById('user').style.display = 'block';
  }

  function off() {
    document.getElementById('user').style.display = 'none';
  }









  var boq = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,

  });


  var swiper = new Swiper(".mustafo", {
    slidesPerView: 3,
    spaceBetween: 30,
  });



  var swiper = new Swiper(".mySwipercha", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiperrr", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
   
  });





  var x = window.matchMedia("(max-width: 600px)");

  function myFunction(x) {
if (x.matches) { // If media query matches
   var boq = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
  });  
    // ----------------------------------------------
  var swiper = new Swiper(".mustafo", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    freeMode: true,
  });
      // ----------------------------------------------
  var swiper = new Swiper(".mySwipercha", {
    slidesPerView: 1.2,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
         // ----------------------------------------------

  var swiper = new Swiper(".mySwiperrr", {
    slidesPerView: 1.3,
    spaceBetween: 20,

  });

}
// =============================================
// ============================================= 
else {
var swiper11 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
  });
      // ----------------------------------------------

  var swiper2 = new Swiper(".mySwiper02", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // ----------------------------------------------
  var swiper4 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });  
      // ----------------------------------------------

  var swiper5 = new Swiper(".mySwiper4", {
    slidesPerView: 3.2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


}
}
myFunction(x);

x.addEventListener("change", function() {
  myFunction(x);
});










             









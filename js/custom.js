(function ($) {
  "use strict";

  $(document).ready(function () {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });


  $('.img-gal, .popup-youtube').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
  });

  var client_logo = $('.client_logo_slider')
  if (client_logo.length) {
    client_logo.owlCarousel({
      items: 8,
      loop: true,
      autoplay:true,
      autoplayTimeout:2000,
      responsive: {
        0: {
          items: 3,
          margin: 15,
        },
        600: {
          items: 3,
          margin: 15,
        },
        991: {
          items: 5,
          margin: 15,
        },
        1200: {
          items: 6,
          margin: 15,
        }
      }
    });
  }

  // $(document).ready(function() {
  //   var front = document.getElementsByClassName("front");
  //   var back = document.getElementsByClassName("back");
  
  //   var highest = 0;
  //   var absoluteSide = "";
  
  //   for (var i = 0; i < front.length; i++) {
  //     if (front[i].offsetHeight > back[i].offsetHeight) {
  //       if (front[i].offsetHeight > highest) {
  //         highest = front[i].offsetHeight;
  //         absoluteSide = ".front";
  //       }
  //     } else if (back[i].offsetHeight > highest) {
  //       highest = back[i].offsetHeight;
  //       absoluteSide = ".back";
  //     }
  //   }
  //   $(".front").css("height", highest);
  //   $(".back").css("height", highest);
  //   $(absoluteSide).css("position", "absolute");
  // });

var eventimgs=document.querySelectorAll(".single_client_logo");
eventimgs.forEach((eimg)=>{
  eimg.onmouseenter=function(){
    eimg.style.transform='scale(1.1)';
  }
  eimg.onmouseleave=function(){
    eimg.style.transform='scale(1)';
  }
});

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

images.forEach((img) => {
  img.onmouseenter=function(){
    img.style.transform='scale(1.1)';
  }
  img.onmouseleave=function(){
    img.style.transform='scale(1)';
  }
  // img.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = img.getAttribute("data-modal-src");
  //   captionText.innerHTML = this.alt;
  // }
  images.forEach((img) => {
    img.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent animation interference
      modal.style.display = "block"; // Show the modal
      modalImg.src = img.getAttribute("data-modal-src"); // Get the modal image source from the data attribute
    });
  });
  modalImg.onclick=function(){
    modal.style.display="none"
  }
  //img.addEventListener("click", () => {
    //modal.style.display = "flex"; // Show the modal
    //modalImg.src = img.getAttribute("data-modal-src"); // Get the modal image source from the data attribute
  //});
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
});


  var review = $('.live_stareams_slide');
  if (review.length) {
    review.owlCarousel({
      items: 2,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<i class="fas fa-caret-left"></i>',
        '<i class="fas fa-caret-right"></i>'
      ],
      margin: 15,
      responsive: {
        0: {
          items: 1,
          margin: 15,
        },
        600: {
          items: 1,
          margin: 15,
        },
        991: {
          items: 1,
          margin: 15,
        },
        1200: {
          items: 2,
          margin: 15,
        }
      }
    });
  }

  function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("24 sep 2019 9:56:00 GMT+06:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);

    if (hours < "10") {
      hours = "0" + hours;
    }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");

  }

  setInterval(function () {
    makeTimer();
  }, 1000);

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


}(jQuery));


// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
          allowSlidePrev:false,
          allowSlideNext:false,
          autoplay:false,
        },
      }
  });



  // Tabs 


function showTab(evt, tabText){

  var i, tab, buttonTab;

  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }

  buttonTab = document.getElementsByClassName("buttonTab");
  for (i = 0; i < buttonTab.length; i++) {
    buttonTab[i].className = buttonTab[i].className.replace(" active", "");
  }

  document.getElementById(tabText).style.display = "block";
  evt.currentTarget.className += " active";
}


//////////////// Burger

function burgeriux() {
  var x = document.getElementById("navigacijosId");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
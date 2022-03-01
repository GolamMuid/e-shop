// navbar sticky starts

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//   Navbar sticky ends

// categories dropdown starts

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// categories dropdown endss

// first slider starts

var swiper = new Swiper(".indexFirstSliderSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".first-slide-next",
    prevEl: ".first-slide-prev",
  },
});

// first slider ends

// deal of the day slider starts

var swiper = new Swiper(".dotdSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// deal of the day slider ends

// new arrival product slider starts

var swiper = new Swiper(".napSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".nap-next",
    prevEl: ".nap-prev",
  },
});

// new arrival product slider starts

// Babycare slider starts

var swiper = new Swiper(".babycareSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".babycare-next",
    prevEl: ".babycare-prev",
  },
});

// Babycare slider ends

// FOod slider starts

var swiper = new Swiper(".foodSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".foodSwiper-next",
    prevEl: ".foodSwiper-prev",
  },
});

// Food slider ends

// Vegitable slider starts

var swiper = new Swiper(".vegetableSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vegetableSwiper-next",
    prevEl: ".vegetableSwiper-prev",
  },
});

// Vegitable slider ends

// Product detail image script starts

function clickme(smallImg) {
  var fullImg = document.getElementById("imagebox");
  fullImg.src = smallImg.src;
}

// Product detail image script ends

// relatable product slider starts

var swiper = new Swiper(".relatedProductSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".relatedProductSwiper-next",
    prevEl: ".relatedProductSwiper-prev",
  },
});

// relatable product slider ends

//change password

var oldState = false;
var newState = false;
var confirmState = false;

function toggle1() {
  if (oldState) {
    document.getElementById("old-pass").setAttribute("type", "password");
    oldState = false;
  } else {
    document.getElementById("old-pass").setAttribute("type", "text");
    oldState = true;
  }
  console.log(oldState);
}

function toggle2() {
  if (newState) {
    document.getElementById("new-pass").setAttribute("type", "password");
    newState = false;
  } else {
    document.getElementById("new-pass").setAttribute("type", "text");
    newState = true;
  }
  console.log(newState);
}

function toggle3() {
  if (confirmState) {
    document.getElementById("confirm-pass").setAttribute("type", "password");
    confirmState = false;
  } else {
    document.getElementById("confirm-pass").setAttribute("type", "text");
    confirmState = true;
  }
  console.log(confirmState);
}

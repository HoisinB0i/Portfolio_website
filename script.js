var mybutton = document.getElementById("middle");

function middleFunction() {
  //When user click on About me, scroll "About me" section
  document.body.scrollTop = 850;
  document.documentElement.scrollTop = 850;
}

var mybutton = document.getElementById("skill");

function skillFunction() {
  //When user click Projects, scroll to "My Projects" section
  document.body.scrollTop = 2000;
  document.documentElement.scrollTop = 2000;
}

var mybutton = document.getElementById("contactMe");

function contactFunction() {
  //When user click Contact Me, to scroll to the bottom
  window.scrollTo(0, document.body.scrollHeight);
}

// Specify variable of "Back to top" button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

//When the user click on the bottom, scroll the page back to the top
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

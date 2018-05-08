$(document).ready(function() {
  $(".nav-link").removeClass("active");
  var currentPage = window.location.pathname;

  if(currentPage.endsWith("shows.html")) {
    $("#shows-link").addClass("active")
  } else if (currentPage.endsWith("music.html")) {
    $("#music-link").addClass("active")
  } else if (currentPage.endsWith("contact.html")) {
    $("#contact-link").addClass("active")
  }
});

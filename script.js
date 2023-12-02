$(document).ready(function(){
  // Sidenav init
  $('.sidenav').sidenav();

  // Parallax init
  $('.parallax').parallax();

  // Slider init
  $('.slider').slider({
    indicators: true,
    height: 900
  });

  // Floating Action Button init
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false,
    direction: 'left'
  });
  
  // Carousel init
  $('.carousel').carousel({
    padding: 150,
    dist: -50
  });

  // Function for carousel autoplay
  setInterval(function(){
    $('.carousel').carousel('next');
  }, 3000);

  // Tooltip init
  $('.tooltipped').tooltip();

  // Collapsible init
  $('.collapsible').collapsible();
});
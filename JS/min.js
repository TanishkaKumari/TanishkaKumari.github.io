$(document).ready(function() {


    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;

    });
    

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled: true}
    });

    // owl carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        dots:true,
        responive:{
            0:{
                item: 1
            },
            560: {
                item: 2
            }
        }
    })

    // sticky navigation menu
    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

});


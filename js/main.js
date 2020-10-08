  $(function(){

    $('.main__slider').slick({
    arrows: false,
    autoplay:true
    });

    $('.header__menu-mob').on('click', function(){
      $('.header__menu ul').slideToggle();
    });


    $('.examples__slider').slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/left-arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/right-arrow.svg" alt=""></button>',
    });
 



      $('.wrapper .tab').on('click', function(event) {
          var id = $(this).attr('data-id');
              $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
              $('.wrapper .tabs').find('.tab').removeClass('active');
              $(this).addClass('active');
              $('#'+id).addClass('active-tab').fadeIn();
              return false;
          });
   

          $('.reviews__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  slidesToShow: 1
                }
              }
            ]
          });
          $('.center').slick('slickSetOption', 'slidesToScroll', 3, true);





          var swiper = new Swiper('.swiper-container', {
            // Default parameters
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            },
            // Responsive breakpoints
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              // when window width is >= 640px
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },

            }
          })


          $('.answer__left').slick({
            slidesToShow: 1,
            vertical: true,
            dots: false,
            verticalSwiping: true,
            prevArrow: '<button type="button" class="slick-button slick-prev"><img src="images/icons/vertical-arrow.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-button slick-next"><img src="images/icons/vertical-arrow.svg" alt=""></button>',
            
           });

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
            delay: 50, // values from 0 to 3000, with step 50ms
            duration: 2000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
          
         
  });



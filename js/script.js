
jQuery(function ($){
    $('.testimonals-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });


    // bottom-to-top
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });


  $(document).ready(function() {
    // banner-word-change
    const typedTextSpan = $(".typed-text");
    const cursorSpan = $(".cursor");
  
    const textArray = ["Designer", "Programmer", "Photographer", "José Smith"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.hasClass("typing")) cursorSpan.addClass("typing");
        typedTextSpan.text(typedTextSpan.text() + textArray[textArrayIndex][charIndex]);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.removeClass("typing");
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.hasClass("typing")) cursorSpan.addClass("typing");
        typedTextSpan.text(textArray[textArrayIndex].substring(0, charIndex - 1));
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.removeClass("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // hambuger
    $(".hamburger,.overlay").click(function(){
      $(".hamburger").toggleClass("active");
      $(".navbar").toggleClass("show");
      $(".big-section").toggleClass("active")
      $(".big-section").toggleClass("position-relative")
    });
    $(".overlay").click(function(){
      $(".navbar").remoClass("show");
    });
  });
});  
jQuery(function ($) {
  $(document).ready(function() {
      var $grid = $('.grid').isotope({
          itemSelector: '.profolio-item',
          layoutMode: 'fitRows'
      });

      // filter functions
      var filterFns = {
          // show if name ends with -ium
          ium: function() {
              var name = $(this).find('.name').text();
              return name.match(/ium$/);
          }
      };

      // bind filter button click
      $('.filters-button-group').on('click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.button-group').each(function(i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
          });
      });



      // // Get Variables
      // var searchBox = document.getElementById('topSearch');
      // var icon = document.getElementById('btn-search');
      // var mobileSearch = document.getElementsByClassName('mobile-search')[0];
      // searchBox.style.display = 'none';

      // if (matchMedia) {
      //     const x = window.matchMedia('(max-width: 946px)');
      //     x.addListener(viewScreen);
      //     viewScreen(x)
      // }
      // // viewScreen   
      // function viewScreen(x){
      //     if (x.matches) {
      //         mobileSearch.style.display = 'block';
      //         icon.style.display = 'none';
      //     } else{
      //         mobileSearch.style.display = 'none';
      //         icon.addEventListener('click', ()=>{
      //             if (searchBox.style.display == 'none') {
      //                 searchBox.style.display = 'block';
      //             } else{
      //                 searchBox.style.display = 'none';
      //             }
      //         })
      //     }
      // }


    

  });
});
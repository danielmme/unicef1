(function(window, document, $){
  console.log('front');

    var $inputBtn = $('.form-actions input[type="submit"]').clone()

    // console.log($inputBtn);
    $($inputBtn).addClass('show');
    $('.form-type-textfield').append($inputBtn);

    // home gerais
    if($('.home-gerais').length){
      console.log('has home gerais');
      $('.home-gerais .slider-item-inner').each(function(){
        var title = $(this).attr('data-title');

        var number = title.match(/\d/gm).join().replace(',','')
        $(this).children('a').children('.programa').html(number);
        $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
      })

      $('.home-gerais .programas-gerais .view-content').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });

    }
    // home amazonia
    if($('.home-amazonia').length){
      console.log('has home amazonia');
      $('.home-amazonia .slider-item-inner').each(function(){
        var title = $(this).attr('data-title');

        var number = title.match(/\d/gm).join().replace(',','')
        $(this).children('a').children('.programa').html(number);
        $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
      })

      $('.home-gerais .programas_amazonia .view-content').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });

    }

    // home amazonia
    if($('.home-afro').length){
      console.log('has home afro');
      $('.home-afro .slider-item-inner').each(function(){
        var title = $(this).attr('data-title');

        var number = title.match(/\d/gm).join().replace(',','')
        $(this).children('a').children('.programa').html(number);
        $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
      })

      $('.home-afro .programas-afro .view-content').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });

    }




    // scroll animations
    AOS.init();
  })(window, document, jQuery);

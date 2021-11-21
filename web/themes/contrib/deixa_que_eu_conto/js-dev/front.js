(function (window, document, $) {
  console.log('front');

  var $inputBtn = $('.path-frontpage .form-actions input[type="submit"]').clone()

  // console.log($inputBtn);
  $($inputBtn).addClass('show');
  $('.form-type-textfield').append($inputBtn);

  // home gerais
  if ($('.home-gerais').length) {
    console.log('has home gerais');
    $('.home-gerais .slider-item-inner').each(function () {
      // var title = $(this).attr('data-title');

      // var number = title.match(/\d/gm).join('')
      // $(this).children('a').children('.programa').html(number);
      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
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
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

  }
  // home amazonia
  if ($('.home-amazonia').length) {
    console.log('has home amazonia');
    $('.home-amazonia .slider-item-inner').each(function () {
      // var title = $(this).attr('data-title');

      // var number = title.match(/\d/gm).join('')
      // $(this).children('a').children('.programa').html(number);
      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
    })

    $('.home-amazonia .programas-amazonia .view-content').slick({
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
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

  }

  // home afro
  if ($('.home-afro').length) {
    console.log('has home afro');
    $('.home-afro .slider-item-inner').each(function () {
      // var title = $(this).attr('data-title');

      // var number = title.match(/\d/gm).join('')
      // console.log(number);
      // $(this).children('a').children('.programa').html(number);
      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
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
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

  }

  // home para-cada-crianca
  if ($('.home-para-cada-crianca').length) {
    console.log('has home para-cada-crianca');
    $('.home-para-cada-crianca .slider-item-inner').each(function () {
      // var title = $(this).attr('data-title');

      // var number = title.match(/\d/gm).join('')
      // console.log(number);
      // $(this).children('a').children('.programa').html(number);
      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));
    })

    $('.home-para-cada-crianca .programas-para-cada-crianca .view-content').slick({
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
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

  }

  // scroll animations
  AOS.init();
})(window, document, jQuery);

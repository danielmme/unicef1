(function(){
  console.log('front');

    var $inputBtn = $('.form-actions input[type="submit"]').clone()

    // console.log($inputBtn);
    $($inputBtn).addClass('show');
    $('.form-type-textfield').append($inputBtn);

    AOS.init();
})();

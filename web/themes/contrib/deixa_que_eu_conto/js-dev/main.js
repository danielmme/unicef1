(function(window, document, $){
  console.log('main');
  // select
  var $selectFakeContainer = document.createElement('div');
  $($selectFakeContainer).addClass('select-fake-container');
  $('.form-item-tipo-de-atividades').append($selectFakeContainer);
  $('.form-item-tipo-de-atividades select option').each(function(){
    var $optionFake = document.createElement('div');
    var value = $(this).attr('value');
    var text = $(this).text();
    console.log(value);
    console.log(text);
    $($optionFake).addClass('option-fake')
    $($optionFake).attr('value',value);
    $($optionFake).text(text);
    $($selectFakeContainer).append($optionFake);
  })
  $('.option-fake').on('click',function(){
    var thisValue = $(this).attr('value')
    console.log(thisValue);
    $(this).addClass('checked')
    $('.form-item-tipo-de-atividades select option[value="'+thisValue+'"]').attr('selected',true)
  })
})(window, document, jQuery);

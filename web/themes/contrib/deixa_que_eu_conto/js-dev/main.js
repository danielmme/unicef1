(function(){
  console.log('frn');
  document.querySelector('.carousel-inner > div:first-child').classList.add('active');
  const carouselInner = document.querySelector('.carousel-inner').cloneNode(true);

  document.getElementById('carouselExampleControls').insertBefore(carouselInner, document.getElementById('carouselExampleControls').firstChild);

  const calendarElement = document.getElementById('carouselExampleControls').cloneNode(true);
  const frontSupList = document.querySelector('.front-sup-list');

  const frontCalendarContainer = document.createElement('div');

  frontCalendarContainer.classList.add('col-lg-4');
  frontCalendarContainer.classList.add('col-sm-6');
  frontCalendarContainer.classList.add('mb-4');
  frontCalendarContainer.classList.add('d-flex');
  frontCalendarContainer.classList.add('calendar-card');
  frontCalendarContainer.classList.add('cloned');


  frontCalendarContainer.appendChild(calendarElement);
  frontSupList.appendChild(frontCalendarContainer);

  // const calendarToRemove = document.querySelector('.front-cards-calendar .calendar-card') ;
  // calendarToRemove.parentNode.removeChild(calendarToRemove);
})();

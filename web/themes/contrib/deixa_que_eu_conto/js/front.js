/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js-dev/front.js":
/*!*************************!*\
  !*** ./js-dev/front.js ***!
  \*************************/
/***/ (() => {

eval("(function (window, document, $) {\n  console.log('front');\n  var $inputBtn = $('.path-frontpage .form-actions input[type=\"submit\"]').clone(); // console.log($inputBtn);\n\n  $($inputBtn).addClass('show');\n  $('.form-type-textfield').append($inputBtn); // home gerais\n\n  if ($('.home-gerais').length) {\n    console.log('has home gerais');\n    $('.home-gerais .slider-item-inner').each(function () {// var title = $(this).attr('data-title');\n      // var number = title.match(/\\d/gm).join('')\n      // $(this).children('a').children('.programa').html(number);\n      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));\n    });\n    $('.home-gerais .programas-gerais .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-amazonia').length) {\n    console.log('has home amazonia');\n    $('.home-amazonia .slider-item-inner').each(function () {// var title = $(this).attr('data-title');\n      // var number = title.match(/\\d/gm).join('')\n      // $(this).children('a').children('.programa').html(number);\n      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));\n    });\n    $('.home-amazonia .programas-amazonia .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-afro').length) {\n    console.log('has home afro');\n    $('.home-afro .slider-item-inner').each(function () {// var title = $(this).attr('data-title');\n      // var number = title.match(/\\d/gm).join('')\n      // console.log(number);\n      // $(this).children('a').children('.programa').html(number);\n      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));\n    });\n    $('.home-afro .programas-afro .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // scroll animations\n\n\n  AOS.init();\n})(window, document, jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EQ1AvLi9qcy1kZXYvZnJvbnQuanM/MjliMCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJkb2N1bWVudCIsIiQiLCJjb25zb2xlIiwibG9nIiwiJGlucHV0QnRuIiwiY2xvbmUiLCJhZGRDbGFzcyIsImFwcGVuZCIsImxlbmd0aCIsImVhY2giLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiQU9TIiwiaW5pdCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxVQUFTQSxNQUFULEVBQWlCQyxRQUFqQixFQUEyQkMsQ0FBM0IsRUFBNkI7QUFDNUJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFFRSxNQUFJQyxTQUFTLEdBQUdILENBQUMsQ0FBQyxvREFBRCxDQUFELENBQXdESSxLQUF4RCxFQUFoQixDQUgwQixDQUsxQjs7QUFDQUosRUFBQUEsQ0FBQyxDQUFDRyxTQUFELENBQUQsQ0FBYUUsUUFBYixDQUFzQixNQUF0QjtBQUNBTCxFQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQk0sTUFBMUIsQ0FBaUNILFNBQWpDLEVBUDBCLENBUzFCOztBQUNBLE1BQUdILENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JPLE1BQXJCLEVBQTRCO0FBQzFCTixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRixJQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ1EsSUFBckMsQ0FBMEMsWUFBVSxDQUNsRDtBQUVBO0FBQ0E7QUFDQTtBQUNELEtBTkQ7QUFRQVIsSUFBQUEsQ0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBa0RTLEtBQWxELENBQXdEO0FBQ3REQyxNQUFBQSxJQUFJLEVBQUUsS0FEZ0Q7QUFFdERDLE1BQUFBLE1BQU0sRUFBRSxJQUY4QztBQUd0REMsTUFBQUEsUUFBUSxFQUFFLElBSDRDO0FBSXREQyxNQUFBQSxLQUFLLEVBQUUsR0FKK0M7QUFLdERDLE1BQUFBLFlBQVksRUFBRSxDQUx3QztBQU10REMsTUFBQUEsY0FBYyxFQUFFLENBTnNDO0FBT3REQyxNQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNFQyxRQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxRQUFBQSxRQUFRLEVBQUU7QUFDUkosVUFBQUEsWUFBWSxFQUFFO0FBRE47QUFGWixPQURVLEVBT1Y7QUFDRUcsUUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsUUFBQUEsUUFBUSxFQUFFO0FBQ1JKLFVBQUFBLFlBQVksRUFBRTtBQUROO0FBRlosT0FQVTtBQVAwQyxLQUF4RDtBQXVCRCxHQTNDeUIsQ0E0QzFCOzs7QUFDQSxNQUFHZCxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk8sTUFBdkIsRUFBOEI7QUFDNUJOLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FGLElBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDUSxJQUF2QyxDQUE0QyxZQUFVLENBQ3BEO0FBRUE7QUFDQTtBQUNBO0FBQ0QsS0FORDtBQVFBUixJQUFBQSxDQUFDLENBQUMsa0RBQUQsQ0FBRCxDQUFzRFMsS0FBdEQsQ0FBNEQ7QUFDMURDLE1BQUFBLElBQUksRUFBRSxLQURvRDtBQUUxREMsTUFBQUEsTUFBTSxFQUFFLElBRmtEO0FBRzFEQyxNQUFBQSxRQUFRLEVBQUUsSUFIZ0Q7QUFJMURDLE1BQUFBLEtBQUssRUFBRSxHQUptRDtBQUsxREMsTUFBQUEsWUFBWSxFQUFFLENBTDRDO0FBTTFEQyxNQUFBQSxjQUFjLEVBQUUsQ0FOMEM7QUFPMURDLE1BQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VDLFFBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLFFBQUFBLFFBQVEsRUFBRTtBQUNSSixVQUFBQSxZQUFZLEVBQUU7QUFETjtBQUZaLE9BRFUsRUFPVjtBQUNFRyxRQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxRQUFBQSxRQUFRLEVBQUU7QUFDUkosVUFBQUEsWUFBWSxFQUFFO0FBRE47QUFGWixPQVBVO0FBUDhDLEtBQTVEO0FBdUJELEdBOUV5QixDQWdGMUI7OztBQUNBLE1BQUdkLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JPLE1BQW5CLEVBQTBCO0FBQ3hCTixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FGLElBQUFBLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DUSxJQUFuQyxDQUF3QyxZQUFVLENBQ2hEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQVBEO0FBU0FSLElBQUFBLENBQUMsQ0FBQywwQ0FBRCxDQUFELENBQThDUyxLQUE5QyxDQUFvRDtBQUNsREMsTUFBQUEsSUFBSSxFQUFFLEtBRDRDO0FBRWxEQyxNQUFBQSxNQUFNLEVBQUUsSUFGMEM7QUFHbERDLE1BQUFBLFFBQVEsRUFBRSxJQUh3QztBQUlsREMsTUFBQUEsS0FBSyxFQUFFLEdBSjJDO0FBS2xEQyxNQUFBQSxZQUFZLEVBQUUsQ0FMb0M7QUFNbERDLE1BQUFBLGNBQWMsRUFBRSxDQU5rQztBQU9sREMsTUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUMsUUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsUUFBQUEsUUFBUSxFQUFFO0FBQ1JKLFVBQUFBLFlBQVksRUFBRTtBQUROO0FBRlosT0FEVSxFQU9WO0FBQ0VHLFFBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLFFBQUFBLFFBQVEsRUFBRTtBQUNSSixVQUFBQSxZQUFZLEVBQUU7QUFETjtBQUZaLE9BUFU7QUFQc0MsS0FBcEQ7QUF1QkQsR0FuSHlCLENBcUgxQjs7O0FBQ0FLLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSjtBQUNELENBdkhILEVBdUhLdEIsTUF2SEwsRUF1SGFDLFFBdkhiLEVBdUh1QnNCLE1Bdkh2QiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkKXtcbiAgY29uc29sZS5sb2coJ2Zyb250Jyk7XG5cbiAgICB2YXIgJGlucHV0QnRuID0gJCgnLnBhdGgtZnJvbnRwYWdlIC5mb3JtLWFjdGlvbnMgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmNsb25lKClcblxuICAgIC8vIGNvbnNvbGUubG9nKCRpbnB1dEJ0bik7XG4gICAgJCgkaW5wdXRCdG4pLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgJCgnLmZvcm0tdHlwZS10ZXh0ZmllbGQnKS5hcHBlbmQoJGlucHV0QnRuKTtcblxuICAgIC8vIGhvbWUgZ2VyYWlzXG4gICAgaWYoJCgnLmhvbWUtZ2VyYWlzJykubGVuZ3RoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMgaG9tZSBnZXJhaXMnKTtcbiAgICAgICQoJy5ob21lLWdlcmFpcyAuc2xpZGVyLWl0ZW0taW5uZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignZGF0YS10aXRsZScpO1xuXG4gICAgICAgIC8vIHZhciBudW1iZXIgPSB0aXRsZS5tYXRjaCgvXFxkL2dtKS5qb2luKCcnKVxuICAgICAgICAvLyAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy5wcm9ncmFtYScpLmh0bWwobnVtYmVyKTtcbiAgICAgICAgLy8gJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcudGl0bGUnKS5odG1sKHRpdGxlLnJlcGxhY2UoJ1Byb2dyYW1hICcsJycpLnJlcGxhY2UobnVtYmVyLCcnKS5yZXBsYWNlKCcg4oCTICcsJycpKTtcbiAgICAgIH0pXG5cbiAgICAgICQoJy5ob21lLWdlcmFpcyAucHJvZ3JhbWFzLWdlcmFpcyAudmlldy1jb250ZW50Jykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIC8vIGhvbWUgYW1hem9uaWFcbiAgICBpZigkKCcuaG9tZS1hbWF6b25pYScpLmxlbmd0aCl7XG4gICAgICBjb25zb2xlLmxvZygnaGFzIGhvbWUgYW1hem9uaWEnKTtcbiAgICAgICQoJy5ob21lLWFtYXpvbmlhIC5zbGlkZXItaXRlbS1pbm5lcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRpdGxlJyk7XG5cbiAgICAgICAgLy8gdmFyIG51bWJlciA9IHRpdGxlLm1hdGNoKC9cXGQvZ20pLmpvaW4oJycpXG4gICAgICAgIC8vICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnByb2dyYW1hJykuaHRtbChudW1iZXIpO1xuICAgICAgICAvLyAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy50aXRsZScpLmh0bWwodGl0bGUucmVwbGFjZSgnUHJvZ3JhbWEgJywnJykucmVwbGFjZShudW1iZXIsJycpLnJlcGxhY2UoJyDigJMgJywnJykpO1xuICAgICAgfSlcblxuICAgICAgJCgnLmhvbWUtYW1hem9uaWEgLnByb2dyYW1hcy1hbWF6b25pYSAudmlldy1jb250ZW50Jykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gaG9tZSBhbWF6b25pYVxuICAgIGlmKCQoJy5ob21lLWFmcm8nKS5sZW5ndGgpe1xuICAgICAgY29uc29sZS5sb2coJ2hhcyBob21lIGFmcm8nKTtcbiAgICAgICQoJy5ob21lLWFmcm8gLnNsaWRlci1pdGVtLWlubmVyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAvLyB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGl0bGUnKTtcblxuICAgICAgICAvLyB2YXIgbnVtYmVyID0gdGl0bGUubWF0Y2goL1xcZC9nbSkuam9pbignJylcbiAgICAgICAgLy8gY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICAgICAgLy8gJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcucHJvZ3JhbWEnKS5odG1sKG51bWJlcik7XG4gICAgICAgIC8vICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnRpdGxlJykuaHRtbCh0aXRsZS5yZXBsYWNlKCdQcm9ncmFtYSAnLCcnKS5yZXBsYWNlKG51bWJlciwnJykucmVwbGFjZSgnIOKAkyAnLCcnKSk7XG4gICAgICB9KVxuXG4gICAgICAkKCcuaG9tZS1hZnJvIC5wcm9ncmFtYXMtYWZybyAudmlldy1jb250ZW50Jykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gc2Nyb2xsIGFuaW1hdGlvbnNcbiAgICBBT1MuaW5pdCgpO1xuICB9KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkpO1xuIl0sImZpbGUiOiIuL2pzLWRldi9mcm9udC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js-dev/front.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js-dev/front.js"]();
/******/ 	
/******/ })()
;
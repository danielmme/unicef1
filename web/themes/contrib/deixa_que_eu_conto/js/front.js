/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js-dev/front.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js-dev/front.js":
/*!*************************!*\
  !*** ./js-dev/front.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (window, document, $) {\n  console.log('front');\n  var $inputBtn = $('.form-actions input[type=\"submit\"]').clone(); // console.log($inputBtn);\n\n  $($inputBtn).addClass('show');\n  $('.form-type-textfield').append($inputBtn); // home gerais\n\n  if ($('.home-gerais').length) {\n    console.log('has home gerais');\n    $('.home-gerais .slider-item-inner').each(function () {\n      var title = $(this).attr('data-title');\n      var number = title.match(/\\d/gm).join().replace(',', '');\n      $(this).children('a').children('.programa').html(number);\n      $(this).children('a').children('.title').html(title.replace('Programa ', '').replace(number, '').replace(' – ', ''));\n    });\n    $('.home-gerais .programas-gerais .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-amazonia').length) {\n    console.log('has home amazonia');\n    $('.home-amazonia .slider-item-inner').each(function () {\n      var title = $(this).attr('data-title');\n      var number = title.match(/\\d/gm).join().replace(',', '');\n      $(this).children('a').children('.programa').html(number);\n      $(this).children('a').children('.title').html(title.replace('Programa ', '').replace(number, '').replace(' – ', ''));\n    });\n    $('.home-gerais .programas_amazonia .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-afro').length) {\n    console.log('has home afro');\n    $('.home-afro .slider-item-inner').each(function () {\n      var title = $(this).attr('data-title');\n      var number = title.match(/\\d/gm).join().replace(',', '');\n      $(this).children('a').children('.programa').html(number);\n      $(this).children('a').children('.title').html(title.replace('Programa ', '').replace(number, '').replace(' – ', ''));\n    });\n    $('.home-afro .programas-afro .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // scroll animations\n\n\n  AOS.init();\n})(window, document, jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy1kZXYvZnJvbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1kZXYvZnJvbnQuanM/MjliMCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCl7XG4gIGNvbnNvbGUubG9nKCdmcm9udCcpO1xuXG4gICAgdmFyICRpbnB1dEJ0biA9ICQoJy5mb3JtLWFjdGlvbnMgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmNsb25lKClcblxuICAgIC8vIGNvbnNvbGUubG9nKCRpbnB1dEJ0bik7XG4gICAgJCgkaW5wdXRCdG4pLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgJCgnLmZvcm0tdHlwZS10ZXh0ZmllbGQnKS5hcHBlbmQoJGlucHV0QnRuKTtcblxuICAgIC8vIGhvbWUgZ2VyYWlzXG4gICAgaWYoJCgnLmhvbWUtZ2VyYWlzJykubGVuZ3RoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMgaG9tZSBnZXJhaXMnKTtcbiAgICAgICQoJy5ob21lLWdlcmFpcyAuc2xpZGVyLWl0ZW0taW5uZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignZGF0YS10aXRsZScpO1xuXG4gICAgICAgIHZhciBudW1iZXIgPSB0aXRsZS5tYXRjaCgvXFxkL2dtKS5qb2luKCkucmVwbGFjZSgnLCcsJycpXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnByb2dyYW1hJykuaHRtbChudW1iZXIpO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy50aXRsZScpLmh0bWwodGl0bGUucmVwbGFjZSgnUHJvZ3JhbWEgJywnJykucmVwbGFjZShudW1iZXIsJycpLnJlcGxhY2UoJyDigJMgJywnJykpO1xuICAgICAgfSlcblxuICAgICAgJCgnLmhvbWUtZ2VyYWlzIC5wcm9ncmFtYXMtZ2VyYWlzIC52aWV3LWNvbnRlbnQnKS5zbGljayh7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICB9XG4gICAgLy8gaG9tZSBhbWF6b25pYVxuICAgIGlmKCQoJy5ob21lLWFtYXpvbmlhJykubGVuZ3RoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMgaG9tZSBhbWF6b25pYScpO1xuICAgICAgJCgnLmhvbWUtYW1hem9uaWEgLnNsaWRlci1pdGVtLWlubmVyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGl0bGUnKTtcblxuICAgICAgICB2YXIgbnVtYmVyID0gdGl0bGUubWF0Y2goL1xcZC9nbSkuam9pbigpLnJlcGxhY2UoJywnLCcnKVxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy5wcm9ncmFtYScpLmh0bWwobnVtYmVyKTtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcudGl0bGUnKS5odG1sKHRpdGxlLnJlcGxhY2UoJ1Byb2dyYW1hICcsJycpLnJlcGxhY2UobnVtYmVyLCcnKS5yZXBsYWNlKCcg4oCTICcsJycpKTtcbiAgICAgIH0pXG5cbiAgICAgICQoJy5ob21lLWdlcmFpcyAucHJvZ3JhbWFzX2FtYXpvbmlhIC52aWV3LWNvbnRlbnQnKS5zbGljayh7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBob21lIGFtYXpvbmlhXG4gICAgaWYoJCgnLmhvbWUtYWZybycpLmxlbmd0aCl7XG4gICAgICBjb25zb2xlLmxvZygnaGFzIGhvbWUgYWZybycpO1xuICAgICAgJCgnLmhvbWUtYWZybyAuc2xpZGVyLWl0ZW0taW5uZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignZGF0YS10aXRsZScpO1xuXG4gICAgICAgIHZhciBudW1iZXIgPSB0aXRsZS5tYXRjaCgvXFxkL2dtKS5qb2luKCkucmVwbGFjZSgnLCcsJycpXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnByb2dyYW1hJykuaHRtbChudW1iZXIpO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy50aXRsZScpLmh0bWwodGl0bGUucmVwbGFjZSgnUHJvZ3JhbWEgJywnJykucmVwbGFjZShudW1iZXIsJycpLnJlcGxhY2UoJyDigJMgJywnJykpO1xuICAgICAgfSlcblxuICAgICAgJCgnLmhvbWUtYWZybyAucHJvZ3JhbWFzLWFmcm8gLnZpZXctY29udGVudCcpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgIH1cblxuXG5cblxuICAgIC8vIHNjcm9sbCBhbmltYXRpb25zXG4gICAgQU9TLmluaXQoKTtcbiAgfSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBZEE7QUF1QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWRBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFkQTtBQXVCQTtBQUNBO0FBQ0E7QUFJQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js-dev/front.js\n");

/***/ })

/******/ });
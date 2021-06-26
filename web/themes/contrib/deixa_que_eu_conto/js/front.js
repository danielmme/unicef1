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

eval("(function (window, document, $) {\n  console.log('front');\n  var $inputBtn = $('.path-frontpage .form-actions input[type=\"submit\"]').clone(); // console.log($inputBtn);\n\n  $($inputBtn).addClass('show');\n  $('.form-type-textfield').append($inputBtn); // home gerais\n\n  if ($('.home-gerais').length) {\n    console.log('has home gerais');\n    $('.home-gerais .slider-item-inner').each(function () {// var title = $(this).attr('data-title');\n      // var number = title.match(/\\d/gm).join('')\n      // $(this).children('a').children('.programa').html(number);\n      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));\n    });\n    $('.home-gerais .programas-gerais .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 2\n        }\n      }, {\n        breakpoint: 600,\n        settings: {\n          slidesToShow: 1\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-amazonia').length) {\n    console.log('has home amazonia');\n    $('.home-amazonia .slider-item-inner').each(function () {// var title = $(this).attr('data-title');\n      // var number = title.match(/\\d/gm).join('')\n      // $(this).children('a').children('.programa').html(number);\n      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));\n    });\n    $('.home-amazonia .programas-amazonia .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 2\n        }\n      }, {\n        breakpoint: 600,\n        settings: {\n          slidesToShow: 1\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-afro').length) {\n    console.log('has home afro');\n    $('.home-afro .slider-item-inner').each(function () {// var title = $(this).attr('data-title');\n      // var number = title.match(/\\d/gm).join('')\n      // console.log(number);\n      // $(this).children('a').children('.programa').html(number);\n      // $(this).children('a').children('.title').html(title.replace('Programa ','').replace(number,'').replace(' – ',''));\n    });\n    $('.home-afro .programas-afro .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 2\n        }\n      }, {\n        breakpoint: 600,\n        settings: {\n          slidesToShow: 1\n        }\n      }]\n    });\n  } // scroll animations\n\n\n  AOS.init();\n})(window, document, jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy1kZXYvZnJvbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1kZXYvZnJvbnQuanM/MjliMCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCl7XG4gIGNvbnNvbGUubG9nKCdmcm9udCcpO1xuXG4gICAgdmFyICRpbnB1dEJ0biA9ICQoJy5wYXRoLWZyb250cGFnZSAuZm9ybS1hY3Rpb25zIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbG9uZSgpXG5cbiAgICAvLyBjb25zb2xlLmxvZygkaW5wdXRCdG4pO1xuICAgICQoJGlucHV0QnRuKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICQoJy5mb3JtLXR5cGUtdGV4dGZpZWxkJykuYXBwZW5kKCRpbnB1dEJ0bik7XG5cbiAgICAvLyBob21lIGdlcmFpc1xuICAgIGlmKCQoJy5ob21lLWdlcmFpcycpLmxlbmd0aCl7XG4gICAgICBjb25zb2xlLmxvZygnaGFzIGhvbWUgZ2VyYWlzJyk7XG4gICAgICAkKCcuaG9tZS1nZXJhaXMgLnNsaWRlci1pdGVtLWlubmVyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAvLyB2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGl0bGUnKTtcblxuICAgICAgICAvLyB2YXIgbnVtYmVyID0gdGl0bGUubWF0Y2goL1xcZC9nbSkuam9pbignJylcbiAgICAgICAgLy8gJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcucHJvZ3JhbWEnKS5odG1sKG51bWJlcik7XG4gICAgICAgIC8vICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnRpdGxlJykuaHRtbCh0aXRsZS5yZXBsYWNlKCdQcm9ncmFtYSAnLCcnKS5yZXBsYWNlKG51bWJlciwnJykucmVwbGFjZSgnIOKAkyAnLCcnKSk7XG4gICAgICB9KVxuXG4gICAgICAkKCcuaG9tZS1nZXJhaXMgLnByb2dyYW1hcy1nZXJhaXMgLnZpZXctY29udGVudCcpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgIH1cbiAgICAvLyBob21lIGFtYXpvbmlhXG4gICAgaWYoJCgnLmhvbWUtYW1hem9uaWEnKS5sZW5ndGgpe1xuICAgICAgY29uc29sZS5sb2coJ2hhcyBob21lIGFtYXpvbmlhJyk7XG4gICAgICAkKCcuaG9tZS1hbWF6b25pYSAuc2xpZGVyLWl0ZW0taW5uZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignZGF0YS10aXRsZScpO1xuXG4gICAgICAgIC8vIHZhciBudW1iZXIgPSB0aXRsZS5tYXRjaCgvXFxkL2dtKS5qb2luKCcnKVxuICAgICAgICAvLyAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy5wcm9ncmFtYScpLmh0bWwobnVtYmVyKTtcbiAgICAgICAgLy8gJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcudGl0bGUnKS5odG1sKHRpdGxlLnJlcGxhY2UoJ1Byb2dyYW1hICcsJycpLnJlcGxhY2UobnVtYmVyLCcnKS5yZXBsYWNlKCcg4oCTICcsJycpKTtcbiAgICAgIH0pXG5cbiAgICAgICQoJy5ob21lLWFtYXpvbmlhIC5wcm9ncmFtYXMtYW1hem9uaWEgLnZpZXctY29udGVudCcpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGhvbWUgYW1hem9uaWFcbiAgICBpZigkKCcuaG9tZS1hZnJvJykubGVuZ3RoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMgaG9tZSBhZnJvJyk7XG4gICAgICAkKCcuaG9tZS1hZnJvIC5zbGlkZXItaXRlbS1pbm5lcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRpdGxlJyk7XG5cbiAgICAgICAgLy8gdmFyIG51bWJlciA9IHRpdGxlLm1hdGNoKC9cXGQvZ20pLmpvaW4oJycpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG51bWJlcik7XG4gICAgICAgIC8vICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnByb2dyYW1hJykuaHRtbChudW1iZXIpO1xuICAgICAgICAvLyAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy50aXRsZScpLmh0bWwodGl0bGUucmVwbGFjZSgnUHJvZ3JhbWEgJywnJykucmVwbGFjZShudW1iZXIsJycpLnJlcGxhY2UoJyDigJMgJywnJykpO1xuICAgICAgfSlcblxuICAgICAgJCgnLmhvbWUtYWZybyAucHJvZ3JhbWFzLWFmcm8gLnZpZXctY29udGVudCcpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIHNjcm9sbCBhbmltYXRpb25zXG4gICAgQU9TLmluaXQoKTtcbiAgfSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWRBO0FBdUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBZEE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWRBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js-dev/front.js\n");

/***/ })

/******/ });
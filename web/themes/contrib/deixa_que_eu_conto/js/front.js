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

eval("(function () {\n  console.log('front');\n  var $inputBtn = $('.form-actions input[type=\"submit\"]').clone(); // console.log($inputBtn);\n\n  $($inputBtn).addClass('show');\n  $('.form-type-textfield').append($inputBtn); // home gerais\n\n  if ($('.home-gerais').length) {\n    console.log('has home gerais');\n    $('.home-gerais .slider-item-inner').each(function () {\n      var title = $(this).attr('data-title');\n      var number = title.match(/\\d/gm).join().replace(',', '');\n      $(this).children('a').children('.programa').html(number);\n      $(this).children('a').children('.title').html(title.replace('Programa ', '').replace(number, '').replace(' – ', ''));\n    });\n    $('.home-gerais .programas-gerais .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-amazonia').length) {\n    console.log('has home amazonia');\n    $('.home-amazonia .slider-item-inner').each(function () {\n      var title = $(this).attr('data-title');\n      var number = title.match(/\\d/gm).join().replace(',', '');\n      $(this).children('a').children('.programa').html(number);\n      $(this).children('a').children('.title').html(title.replace('Programa ', '').replace(number, '').replace(' – ', ''));\n    });\n    $('.home-gerais .programas_amazonia .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // home amazonia\n\n\n  if ($('.home-afro').length) {\n    console.log('has home afro');\n    $('.home-afro .slider-item-inner').each(function () {\n      var title = $(this).attr('data-title');\n      var number = title.match(/\\d/gm).join().replace(',', '');\n      $(this).children('a').children('.programa').html(number);\n      $(this).children('a').children('.title').html(title.replace('Programa ', '').replace(number, '').replace(' – ', ''));\n    });\n    $('.home-afro .programas-afro .view-content').slick({\n      dots: false,\n      arrows: true,\n      infinite: true,\n      speed: 300,\n      slidesToShow: 3,\n      slidesToScroll: 1,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 3\n        }\n      }, {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 2\n        }\n      }]\n    });\n  } // scroll animations\n\n\n  AOS.init();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy1kZXYvZnJvbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1kZXYvZnJvbnQuanM/MjliMCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ2Zyb250Jyk7XG5cbiAgICB2YXIgJGlucHV0QnRuID0gJCgnLmZvcm0tYWN0aW9ucyBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuY2xvbmUoKVxuXG4gICAgLy8gY29uc29sZS5sb2coJGlucHV0QnRuKTtcbiAgICAkKCRpbnB1dEJ0bikuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAkKCcuZm9ybS10eXBlLXRleHRmaWVsZCcpLmFwcGVuZCgkaW5wdXRCdG4pO1xuXG4gICAgLy8gaG9tZSBnZXJhaXNcbiAgICBpZigkKCcuaG9tZS1nZXJhaXMnKS5sZW5ndGgpe1xuICAgICAgY29uc29sZS5sb2coJ2hhcyBob21lIGdlcmFpcycpO1xuICAgICAgJCgnLmhvbWUtZ2VyYWlzIC5zbGlkZXItaXRlbS1pbm5lcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRpdGxlJyk7XG5cbiAgICAgICAgdmFyIG51bWJlciA9IHRpdGxlLm1hdGNoKC9cXGQvZ20pLmpvaW4oKS5yZXBsYWNlKCcsJywnJylcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcucHJvZ3JhbWEnKS5odG1sKG51bWJlcik7XG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnRpdGxlJykuaHRtbCh0aXRsZS5yZXBsYWNlKCdQcm9ncmFtYSAnLCcnKS5yZXBsYWNlKG51bWJlciwnJykucmVwbGFjZSgnIOKAkyAnLCcnKSk7XG4gICAgICB9KVxuXG4gICAgICAkKCcuaG9tZS1nZXJhaXMgLnByb2dyYW1hcy1nZXJhaXMgLnZpZXctY29udGVudCcpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgIH1cbiAgICAvLyBob21lIGFtYXpvbmlhXG4gICAgaWYoJCgnLmhvbWUtYW1hem9uaWEnKS5sZW5ndGgpe1xuICAgICAgY29uc29sZS5sb2coJ2hhcyBob21lIGFtYXpvbmlhJyk7XG4gICAgICAkKCcuaG9tZS1hbWF6b25pYSAuc2xpZGVyLWl0ZW0taW5uZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignZGF0YS10aXRsZScpO1xuXG4gICAgICAgIHZhciBudW1iZXIgPSB0aXRsZS5tYXRjaCgvXFxkL2dtKS5qb2luKCkucmVwbGFjZSgnLCcsJycpXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnByb2dyYW1hJykuaHRtbChudW1iZXIpO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykuY2hpbGRyZW4oJy50aXRsZScpLmh0bWwodGl0bGUucmVwbGFjZSgnUHJvZ3JhbWEgJywnJykucmVwbGFjZShudW1iZXIsJycpLnJlcGxhY2UoJyDigJMgJywnJykpO1xuICAgICAgfSlcblxuICAgICAgJCgnLmhvbWUtZ2VyYWlzIC5wcm9ncmFtYXNfYW1hem9uaWEgLnZpZXctY29udGVudCcpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGhvbWUgYW1hem9uaWFcbiAgICBpZigkKCcuaG9tZS1hZnJvJykubGVuZ3RoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoYXMgaG9tZSBhZnJvJyk7XG4gICAgICAkKCcuaG9tZS1hZnJvIC5zbGlkZXItaXRlbS1pbm5lcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRpdGxlJyk7XG5cbiAgICAgICAgdmFyIG51bWJlciA9IHRpdGxlLm1hdGNoKC9cXGQvZ20pLmpvaW4oKS5yZXBsYWNlKCcsJywnJylcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLmNoaWxkcmVuKCcucHJvZ3JhbWEnKS5odG1sKG51bWJlcik7XG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2EnKS5jaGlsZHJlbignLnRpdGxlJykuaHRtbCh0aXRsZS5yZXBsYWNlKCdQcm9ncmFtYSAnLCcnKS5yZXBsYWNlKG51bWJlciwnJykucmVwbGFjZSgnIOKAkyAnLCcnKSk7XG4gICAgICB9KVxuXG4gICAgICAkKCcuaG9tZS1hZnJvIC5wcm9ncmFtYXMtYWZybyAudmlldy1jb250ZW50Jykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gc2Nyb2xsIGFuaW1hdGlvbnNcbiAgICBBT1MuaW5pdCgpO1xufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBZEE7QUF1QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWRBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFkQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js-dev/front.js\n");

/***/ })

/******/ });
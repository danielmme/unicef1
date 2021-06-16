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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js-dev/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js-dev/main.js":
/*!************************!*\
  !*** ./js-dev/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (window, document, $) {// console.log('main');\n  // // select\n  // var $selectFakeContainer = document.createElement('div');\n  // $($selectFakeContainer).addClass('select-fake-container');\n  // $('.form-item-tipo-de-atividades').append($selectFakeContainer);\n  // $('.form-item-tipo-de-atividades select option').each(function(){\n  //   var $optionFake = document.createElement('div');\n  //   var value = $(this).attr('value');\n  //   var text = $(this).text();\n  //   console.log(value);\n  //   console.log(text);\n  //   $($optionFake).addClass('option-fake')\n  //   $($optionFake).attr('value',value);\n  //   $($optionFake).text(text);\n  //   $($selectFakeContainer).append($optionFake);\n  // })\n  // $('.option-fake').on('click',function(){\n  //   var thisValue = $(this).attr('value')\n  //   console.log(thisValue);\n  //   $(this).addClass('checked')\n  //   $('.form-item-tipo-de-atividades select option[value=\"'+thisValue+'\"]').attr('selected',true)\n  // })\n})(window, document, jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy1kZXYvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzLWRldi9tYWluLmpzP2IxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQpe1xuICAvLyBjb25zb2xlLmxvZygnbWFpbicpO1xuICAvLyAvLyBzZWxlY3RcbiAgLy8gdmFyICRzZWxlY3RGYWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICQoJHNlbGVjdEZha2VDb250YWluZXIpLmFkZENsYXNzKCdzZWxlY3QtZmFrZS1jb250YWluZXInKTtcbiAgLy8gJCgnLmZvcm0taXRlbS10aXBvLWRlLWF0aXZpZGFkZXMnKS5hcHBlbmQoJHNlbGVjdEZha2VDb250YWluZXIpO1xuICAvLyAkKCcuZm9ybS1pdGVtLXRpcG8tZGUtYXRpdmlkYWRlcyBzZWxlY3Qgb3B0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAvLyAgIHZhciAkb3B0aW9uRmFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIHZhciB2YWx1ZSA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcbiAgLy8gICB2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgLy8gICAkKCRvcHRpb25GYWtlKS5hZGRDbGFzcygnb3B0aW9uLWZha2UnKVxuICAvLyAgICQoJG9wdGlvbkZha2UpLmF0dHIoJ3ZhbHVlJyx2YWx1ZSk7XG4gIC8vICAgJCgkb3B0aW9uRmFrZSkudGV4dCh0ZXh0KTtcbiAgLy8gICAkKCRzZWxlY3RGYWtlQ29udGFpbmVyKS5hcHBlbmQoJG9wdGlvbkZha2UpO1xuICAvLyB9KVxuICAvLyAkKCcub3B0aW9uLWZha2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gIC8vICAgdmFyIHRoaXNWYWx1ZSA9ICQodGhpcykuYXR0cigndmFsdWUnKVxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXNWYWx1ZSk7XG4gIC8vICAgJCh0aGlzKS5hZGRDbGFzcygnY2hlY2tlZCcpXG4gIC8vICAgJCgnLmZvcm0taXRlbS10aXBvLWRlLWF0aXZpZGFkZXMgc2VsZWN0IG9wdGlvblt2YWx1ZT1cIicrdGhpc1ZhbHVlKydcIl0nKS5hdHRyKCdzZWxlY3RlZCcsdHJ1ZSlcbiAgLy8gfSlcbn0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js-dev/main.js\n");

/***/ })

/******/ });
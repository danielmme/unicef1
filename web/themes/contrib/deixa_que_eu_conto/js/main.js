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

eval("(function () {\n  console.log('main'); // select\n\n  var $selectFakeContainer = document.createElement('div');\n  $($selectFakeContainer).addClass('select-fake-container');\n  $('.form-item-tipo-de-atividades').append($selectFakeContainer);\n  $('.form-item-tipo-de-atividades select option').each(function () {\n    var $optionFake = document.createElement('div');\n    var value = $(this).attr('value');\n    var text = $(this).text();\n    console.log(value);\n    console.log(text);\n    $($optionFake).addClass('option-fake');\n    $($optionFake).attr('value', value);\n    $($optionFake).text(text);\n    $($selectFakeContainer).append($optionFake);\n  });\n  $('.option-fake').on('click', function () {\n    var thisValue = $(this).attr('value');\n    console.log(thisValue);\n    $(this).addClass('checked');\n    $('.form-item-tipo-de-atividades select option[value=\"' + thisValue + '\"]').attr('selected', true);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy1kZXYvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzLWRldi9tYWluLmpzP2IxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nKCdtYWluJyk7XG4gIC8vIHNlbGVjdFxuICB2YXIgJHNlbGVjdEZha2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgJCgkc2VsZWN0RmFrZUNvbnRhaW5lcikuYWRkQ2xhc3MoJ3NlbGVjdC1mYWtlLWNvbnRhaW5lcicpO1xuICAkKCcuZm9ybS1pdGVtLXRpcG8tZGUtYXRpdmlkYWRlcycpLmFwcGVuZCgkc2VsZWN0RmFrZUNvbnRhaW5lcik7XG4gICQoJy5mb3JtLWl0ZW0tdGlwby1kZS1hdGl2aWRhZGVzIHNlbGVjdCBvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgdmFyICRvcHRpb25GYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xuICAgIHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICQoJG9wdGlvbkZha2UpLmFkZENsYXNzKCdvcHRpb24tZmFrZScpXG4gICAgJCgkb3B0aW9uRmFrZSkuYXR0cigndmFsdWUnLHZhbHVlKTtcbiAgICAkKCRvcHRpb25GYWtlKS50ZXh0KHRleHQpO1xuICAgICQoJHNlbGVjdEZha2VDb250YWluZXIpLmFwcGVuZCgkb3B0aW9uRmFrZSk7XG4gIH0pXG4gICQoJy5vcHRpb24tZmFrZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICB2YXIgdGhpc1ZhbHVlID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpXG4gICAgY29uc29sZS5sb2codGhpc1ZhbHVlKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGVja2VkJylcbiAgICAkKCcuZm9ybS1pdGVtLXRpcG8tZGUtYXRpdmlkYWRlcyBzZWxlY3Qgb3B0aW9uW3ZhbHVlPVwiJyt0aGlzVmFsdWUrJ1wiXScpLmF0dHIoJ3NlbGVjdGVkJyx0cnVlKVxuICB9KVxufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js-dev/main.js\n");

/***/ })

/******/ });
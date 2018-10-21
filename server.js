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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/Galleries/home/apeture-lights.jpeg":
/*!**********************************************************!*\
  !*** ./assets/images/Galleries/home/apeture-lights.jpeg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/apeture-lights.jpeg";

/***/ }),

/***/ "./assets/images/Galleries/home/apeture-reflection.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/Galleries/home/apeture-reflection.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/apeture-reflection.jpg";

/***/ }),

/***/ "./assets/images/Galleries/home/at-work.jpeg":
/*!***************************************************!*\
  !*** ./assets/images/Galleries/home/at-work.jpeg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/at-work.jpeg";

/***/ }),

/***/ "./assets/images/Galleries/home/landscape-shoot.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/Galleries/home/landscape-shoot.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/landscape-shoot.jpeg";

/***/ }),

/***/ "./assets/images/Galleries/home/lens-close-up.jpg":
/*!********************************************************!*\
  !*** ./assets/images/Galleries/home/lens-close-up.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/lens-close-up.jpg";

/***/ }),

/***/ "./assets/images/Galleries/home/lens-on-angle.jpg":
/*!********************************************************!*\
  !*** ./assets/images/Galleries/home/lens-on-angle.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/lens-on-angle.jpg";

/***/ }),

/***/ "./assets/images/Galleries/home/lens-on-ground.jpeg":
/*!**********************************************************!*\
  !*** ./assets/images/Galleries/home/lens-on-ground.jpeg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/lens-on-ground.jpeg";

/***/ }),

/***/ "./assets/images/Galleries/home/stary-lens.jpg":
/*!*****************************************************!*\
  !*** ./assets/images/Galleries/home/stary-lens.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/Galleries/home/stary-lens.jpg";

/***/ }),

/***/ "./assets/images/galleries/action/at-the-track.jpeg":
/*!**********************************************************!*\
  !*** ./assets/images/galleries/action/at-the-track.jpeg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/at-the-track.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/beach-backflip.jpeg":
/*!************************************************************!*\
  !*** ./assets/images/galleries/action/beach-backflip.jpeg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/beach-backflip.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/big-wave-surfing.jpeg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/action/big-wave-surfing.jpeg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/big-wave-surfing.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/daylight.jpg":
/*!*****************************************************!*\
  !*** ./assets/images/galleries/action/daylight.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/daylight.jpg";

/***/ }),

/***/ "./assets/images/galleries/action/high-jump.jpeg":
/*!*******************************************************!*\
  !*** ./assets/images/galleries/action/high-jump.jpeg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/high-jump.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/kick-flip.jpeg":
/*!*******************************************************!*\
  !*** ./assets/images/galleries/action/kick-flip.jpeg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/kick-flip.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/leap-of-faith.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/action/leap-of-faith.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/leap-of-faith.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/motorcross.jpeg":
/*!********************************************************!*\
  !*** ./assets/images/galleries/action/motorcross.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/motorcross.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/puddle-jumping.jpeg":
/*!************************************************************!*\
  !*** ./assets/images/galleries/action/puddle-jumping.jpeg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/puddle-jumping.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/schrodingers-kickflip.jpeg":
/*!*******************************************************************!*\
  !*** ./assets/images/galleries/action/schrodingers-kickflip.jpeg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/schrodingers-kickflip.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/skate-park.jpeg":
/*!********************************************************!*\
  !*** ./assets/images/galleries/action/skate-park.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/skate-park.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/skiing.jpeg":
/*!****************************************************!*\
  !*** ./assets/images/galleries/action/skiing.jpeg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/skiing.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/soccer-match.jpeg":
/*!**********************************************************!*\
  !*** ./assets/images/galleries/action/soccer-match.jpeg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/soccer-match.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/surf-splash.jpeg":
/*!*********************************************************!*\
  !*** ./assets/images/galleries/action/surf-splash.jpeg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/surf-splash.jpeg";

/***/ }),

/***/ "./assets/images/galleries/action/ultimate-save.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/action/ultimate-save.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/action/ultimate-save.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/4th-birthday.jpeg":
/*!**********************************************************!*\
  !*** ./assets/images/galleries/events/4th-birthday.jpeg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/4th-birthday.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/baby-sleeping-baby-baby-girl.jpg":
/*!*************************************************************************!*\
  !*** ./assets/images/galleries/events/baby-sleeping-baby-baby-girl.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/baby-sleeping-baby-baby-girl.jpg";

/***/ }),

/***/ "./assets/images/galleries/events/birth-announcement.jpeg":
/*!****************************************************************!*\
  !*** ./assets/images/galleries/events/birth-announcement.jpeg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/birth-announcement.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/birthday-girl.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/events/birthday-girl.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/birthday-girl.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/bride-and-groom.jpeg":
/*!*************************************************************!*\
  !*** ./assets/images/galleries/events/bride-and-groom.jpeg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/bride-and-groom.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/bride-clouds.jpg":
/*!*********************************************************!*\
  !*** ./assets/images/galleries/events/bride-clouds.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/bride-clouds.jpg";

/***/ }),

/***/ "./assets/images/galleries/events/bride.jpeg":
/*!***************************************************!*\
  !*** ./assets/images/galleries/events/bride.jpeg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/bride.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/first-birthday.jpeg":
/*!************************************************************!*\
  !*** ./assets/images/galleries/events/first-birthday.jpeg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/first-birthday.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/graduate-celebrating.jpeg":
/*!******************************************************************!*\
  !*** ./assets/images/galleries/events/graduate-celebrating.jpeg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/graduate-celebrating.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/graduating-class.jpeg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/events/graduating-class.jpeg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/graduating-class.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/party-day.jpg":
/*!******************************************************!*\
  !*** ./assets/images/galleries/events/party-day.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/party-day.jpg";

/***/ }),

/***/ "./assets/images/galleries/events/party-friends.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/events/party-friends.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/party-friends.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/pregnancy-announcement.jpeg":
/*!********************************************************************!*\
  !*** ./assets/images/galleries/events/pregnancy-announcement.jpeg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/pregnancy-announcement.jpeg";

/***/ }),

/***/ "./assets/images/galleries/events/wedding-day.jpeg":
/*!*********************************************************!*\
  !*** ./assets/images/galleries/events/wedding-day.jpeg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/events/wedding-day.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/arches-national-park.jpg":
/*!********************************************************************!*\
  !*** ./assets/images/galleries/landscape/arches-national-park.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/arches-national-park.jpg";

/***/ }),

/***/ "./assets/images/galleries/landscape/boathouse-cottage.jpg":
/*!*****************************************************************!*\
  !*** ./assets/images/galleries/landscape/boathouse-cottage.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/boathouse-cottage.jpg";

/***/ }),

/***/ "./assets/images/galleries/landscape/brooklyn-bridge.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/landscape/brooklyn-bridge.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/brooklyn-bridge.jpg";

/***/ }),

/***/ "./assets/images/galleries/landscape/calm-clouds.jpg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/landscape/calm-clouds.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/calm-clouds.jpg";

/***/ }),

/***/ "./assets/images/galleries/landscape/devils-bridge.jpeg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/landscape/devils-bridge.jpeg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/devils-bridge.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/dusk-in-africa.jpeg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/landscape/dusk-in-africa.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/dusk-in-africa.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/flatiron-building.jpeg":
/*!******************************************************************!*\
  !*** ./assets/images/galleries/landscape/flatiron-building.jpeg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/flatiron-building.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/lake-peir.jpeg":
/*!**********************************************************!*\
  !*** ./assets/images/galleries/landscape/lake-peir.jpeg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/lake-peir.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/marsh-peir.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/landscape/marsh-peir.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/marsh-peir.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/mountain-lake.jpeg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/landscape/mountain-lake.jpeg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/mountain-lake.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/night-dolphins.jpeg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/landscape/night-dolphins.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/night-dolphins.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/nyc-skyline.jpeg":
/*!************************************************************!*\
  !*** ./assets/images/galleries/landscape/nyc-skyline.jpeg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/nyc-skyline.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/nyc-skyline2.jpeg":
/*!*************************************************************!*\
  !*** ./assets/images/galleries/landscape/nyc-skyline2.jpeg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/nyc-skyline2.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/purple-flowers.jpeg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/landscape/purple-flowers.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/purple-flowers.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/river-reflection.jpeg":
/*!*****************************************************************!*\
  !*** ./assets/images/galleries/landscape/river-reflection.jpeg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/river-reflection.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/sunset-pier.jpeg":
/*!************************************************************!*\
  !*** ./assets/images/galleries/landscape/sunset-pier.jpeg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/sunset-pier.jpeg";

/***/ }),

/***/ "./assets/images/galleries/landscape/sunset-poppies.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/landscape/sunset-poppies.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/landscape/sunset-poppies.jpg";

/***/ }),

/***/ "./assets/images/galleries/photographer/above-the-clouds.jpeg":
/*!********************************************************************!*\
  !*** ./assets/images/galleries/photographer/above-the-clouds.jpeg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/photographer/above-the-clouds.jpeg";

/***/ }),

/***/ "./assets/images/galleries/photographer/at-dusk.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/photographer/at-dusk.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/photographer/at-dusk.jpeg";

/***/ }),

/***/ "./assets/images/galleries/photographer/beach-shoot.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/photographer/beach-shoot.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/photographer/beach-shoot.jpg";

/***/ }),

/***/ "./assets/images/galleries/photographer/field-shoot.jpeg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/photographer/field-shoot.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/photographer/field-shoot.jpeg";

/***/ }),

/***/ "./assets/images/galleries/photographer/in-and-out-of-focus.jpeg":
/*!***********************************************************************!*\
  !*** ./assets/images/galleries/photographer/in-and-out-of-focus.jpeg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/photographer/in-and-out-of-focus.jpeg";

/***/ }),

/***/ "./assets/images/galleries/photographer/smoke-cloud.jpeg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/photographer/smoke-cloud.jpeg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/photographer/smoke-cloud.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/beautiful-blur.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/galleries/portrait/beautiful-blur.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/beautiful-blur.jpg";

/***/ }),

/***/ "./assets/images/galleries/portrait/beautiful-casual.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/galleries/portrait/beautiful-casual.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/beautiful-casual.jpg";

/***/ }),

/***/ "./assets/images/galleries/portrait/black-and-white-close-up-woman.jpeg":
/*!******************************************************************************!*\
  !*** ./assets/images/galleries/portrait/black-and-white-close-up-woman.jpeg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/black-and-white-close-up-woman.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/black-and-white-guy.jpeg":
/*!*******************************************************************!*\
  !*** ./assets/images/galleries/portrait/black-and-white-guy.jpeg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/black-and-white-guy.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/blonde-close-up-bokeh.jpeg":
/*!*********************************************************************!*\
  !*** ./assets/images/galleries/portrait/blonde-close-up-bokeh.jpeg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/blonde-close-up-bokeh.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/blonde-close-up.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/galleries/portrait/blonde-close-up.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/blonde-close-up.jpg";

/***/ }),

/***/ "./assets/images/galleries/portrait/carnival-night.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/galleries/portrait/carnival-night.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/carnival-night.jpg";

/***/ }),

/***/ "./assets/images/galleries/portrait/close-up-guy.jpeg":
/*!************************************************************!*\
  !*** ./assets/images/galleries/portrait/close-up-guy.jpeg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/close-up-guy.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/close-up-woman-bokeh.jpeg":
/*!********************************************************************!*\
  !*** ./assets/images/galleries/portrait/close-up-woman-bokeh.jpeg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/close-up-woman-bokeh.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/girl-rabbit-friendship.jpeg":
/*!**********************************************************************!*\
  !*** ./assets/images/galleries/portrait/girl-rabbit-friendship.jpeg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/girl-rabbit-friendship.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/happy-girl.jpg":
/*!*********************************************************!*\
  !*** ./assets/images/galleries/portrait/happy-girl.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/happy-girl.jpg";

/***/ }),

/***/ "./assets/images/galleries/portrait/hiding-woman.jpg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/portrait/hiding-woman.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/hiding-woman.jpg";

/***/ }),

/***/ "./assets/images/galleries/portrait/red-haired-child.jpeg":
/*!****************************************************************!*\
  !*** ./assets/images/galleries/portrait/red-haired-child.jpeg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/red-haired-child.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/suit-guy.jpeg":
/*!********************************************************!*\
  !*** ./assets/images/galleries/portrait/suit-guy.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/suit-guy.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/suit1.jpeg":
/*!*****************************************************!*\
  !*** ./assets/images/galleries/portrait/suit1.jpeg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/suit1.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/woman-dress.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/portrait/woman-dress.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/woman-dress.jpeg";

/***/ }),

/***/ "./assets/images/galleries/portrait/young-monks.jpeg":
/*!***********************************************************!*\
  !*** ./assets/images/galleries/portrait/young-monks.jpeg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/galleries/portrait/young-monks.jpeg";

/***/ }),

/***/ "./assets/logos/logo-loader1.svg":
/*!***************************************!*\
  !*** ./assets/logos/logo-loader1.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/logos/logo-loader1.svg";

/***/ }),

/***/ "./assets/logos/logo-loader2.svg":
/*!***************************************!*\
  !*** ./assets/logos/logo-loader2.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/logos/logo-loader2.svg";

/***/ }),

/***/ "./assets/logos/logo.png":
/*!*******************************!*\
  !*** ./assets/logos/logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/logos/logo.png";

/***/ }),

/***/ "./assets/logos/site-logo2.svg":
/*!*************************************!*\
  !*** ./assets/logos/site-logo2.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/logos/site-logo2.svg";

/***/ }),

/***/ "./oauth/clientData.js":
/*!*****************************!*\
  !*** ./oauth/clientData.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var client = {
	user: 'orson108@gmail.com',
	id: '557346718690-chd1ef1ce0tjjnh17muqd01djfi6om5o.apps.googleusercontent.com',
	secret: '6hSFj1udBltMXk0gJQNhNa8w',
	refreshToken: '1/rnVVZg4iY22ABCwkkuJjVY8N0AhdnjuKTtThj7pYQ9IjMbdaaoHoNMZqbnI5iiz8',
	acessToken: 'ya29.GlsBBnTQ_5lykG3vfjDVjdU0qQy7Cb7oB8eZ8_SlNp86unAkRkKZCsImJfCjwrzoBRc7PD0wG-0XrZQDKkPcGivcsB4ZwUtYXC7tmQdf6Ka0WsqAmXB8jEua0jik'
};

var userEmail = exports.userEmail = "astaton108@outlook.com";

exports.default = client;

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _expressStaticGzip = __webpack_require__(/*! express-static-gzip */ "express-static-gzip");

var _expressStaticGzip2 = _interopRequireDefault(_expressStaticGzip);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ../shared/store */ "./src/shared/store.js");

var _store2 = _interopRequireDefault(_store);

var _routes = __webpack_require__(/*! ../shared/routes */ "./src/shared/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _App = __webpack_require__(/*! ../shared/App */ "./src/shared/App.js");

var _App2 = _interopRequireDefault(_App);

var _clientData = __webpack_require__(/*! ../../oauth/clientData */ "./oauth/clientData.js");

var _clientData2 = _interopRequireDefault(_clientData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//React imports
//express import
var port = process.env.PORT || 8080;

//local imports


//React Component imports


//React-Redux imports


//middleware imports

var app = (0, _express2.default)();

app.use('/', (0, _expressStaticGzip2.default)("public/"));

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('*', function (req, res, next) {
	var dest = req.url == '/index.html' ? '/' : req.url;
	var markup = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: _store2.default },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: dest, context: {} },
			_react2.default.createElement(_App2.default, null)
		)
	));

	res.send("\n\t\t<html lang=\"en-us\">\n\t\t\t<head>\n\t\t\t\t<meta charset=\"utf-8\">\n\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\t\t<title>Bokeh Best Photography Inc.</title>\n\t\t\t\t<link rel=\"icon\" type=\"image/png\" href=" + __webpack_require__(/*! ../../assets/logos/logo.png */ "./assets/logos/logo.png") + ">\n\t\t\t\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n\t\t\t\t<script src=\"/bundle.js\" defer></script>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id=\"app\">" + markup + "</div>\n\t\t\t</body>\n\t\t</html>\n\t");
});

app.post('/contact', function (req, res) {
	var transporter = _nodemailer2.default.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			type: 'OAuth2',
			user: _clientData2.default.user,
			clientId: _clientData2.default.id,
			clientSecret: _clientData2.default.secret,
			refreshToken: _clientData2.default.refreshToken,
			accessToken: _clientData2.default.accessToken
		}
	});

	var mailOptions = {
		from: req.body.name + " <" + _clientData2.default.user + ">",
		to: 'astaton108@outlook.com',
		subject: 'Contact from Bokeh Best Photo website',
		html: "<!DOCTYPE >\n\t\t\t\t<html lang=\"us-en\">\n\t\t\t\t\t<head>\n\t\t\t\t\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n\t\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;\">\n\t\t\t\t\t\t<title>Cool Email bro</title>\n\t\t\t\t\t</head>\n\t\t\t\t\t<body>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h1>Email From " + req.body.name + " at " + req.body.email + "</h1>\n\t\t\t\t\t\t\t<p>messsage from " + req.body.name + " reads: </p>\n\t\t\t\t\t\t\t<p>" + req.body.message + "</p>\n\t\t\t\t\t\t\t<p>" + req.body.name + ", " + req.body.number + " " + req.body.email + "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</body>\n\t\t\t\t</html>"
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log('Error', err);
			res.redirect('/contact/fail');
		} else {
			console.log('Email sent');
			res.redirect('/contact/success');
		}
	});
});

app.listen(port, function () {
	return console.log('server is running on port ' + port);
});

/***/ }),

/***/ "./src/shared/About.js":
/*!*****************************!*\
  !*** ./src/shared/About.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Projector = __webpack_require__(/*! ./Projector */ "./src/shared/Projector.js");

var _Projector2 = _interopRequireDefault(_Projector);

var _about_actions = __webpack_require__(/*! ./actions/about_actions */ "./src/shared/actions/about_actions.js");

var aboutActions = _interopRequireWildcard(_about_actions);

var _projector_actions = __webpack_require__(/*! ./actions/projector_actions */ "./src/shared/actions/projector_actions.js");

var projectorActions = _interopRequireWildcard(_projector_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//React-Redux imports


//React Component imports


//Actions import


var About = function (_Component) {
	_inherits(About, _Component);

	function About(props) {
		_classCallCheck(this, About);

		var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(About, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.toggleAboutModifierOn();
			// this.props.actions.unload_slides();
			console.log('About props are', this.props);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleAboutModifierOff();
		}
	}, {
		key: 'toggleAboutModifierOn',
		value: function toggleAboutModifierOn() {
			$('#main').toggleClass('main--about');
			$('#main').toggleClass('main');
		}
	}, {
		key: 'toggleAboutModifierOff',
		value: function toggleAboutModifierOff() {
			$('#main').toggleClass('main');
			$('#main').toggleClass('main--about');
		}
	}, {
		key: 'render',
		value: function render() {
			var slides = this.props.about.slides;
			return _react2.default.createElement(
				'div',
				{ id: 'main', className: 'main' },
				_react2.default.createElement(
					'h1',
					{ className: 'about__page-header' },
					'Our Story'
				),
				_react2.default.createElement(
					'div',
					{ className: 'about__container' },
					_react2.default.createElement(
						'div',
						{ className: 'about__images' },
						_react2.default.createElement(_Projector2.default, { styleFor: "about", slides: slides })
					),
					_react2.default.createElement(
						'p',
						{ className: 'about__text' },
						_react2.default.createElement(
							'span',
							{ className: 'about__section-header' },
							'David Bokeh '
						),
						'is a sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Kidney beans ostrich trucks. In the straw rain barrels. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees.'
					),
					_react2.default.createElement(
						'p',
						{ className: 'about__text' },
						_react2.default.createElement(
							'span',
							{ className: 'about__section-header' },
							'Bokeh Best Photography '
						),
						'is well known for rakes plows. John Deere bees, parsley sweet corn at, porky pig shovels. veterinarian blue berries cattle jelly canning. Blue berries pigeons buzz and bean prairie dogs nails at est. Quack hammers eggplant is utters nails garden. . Augers oats hen cowpies. Apples duck.'
					),
					_react2.default.createElement(
						'p',
						{ className: 'about__text' },
						_react2.default.createElement(
							'span',
							{ className: 'about__section-header' },
							'Our Work '
						),
						'is straw, quail a ostriches donkey, hay hook cucumbers. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Shovels at rakes plows. Quack hammers eggplant is utters nails garden. Haybine carrots soybeans, owls duck raising or, cheep in plows. Outhouse at nails mower. Forage Harvester, bean and Silag.'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'about__list' },
						_react2.default.createElement(
							'span',
							{ className: 'about__section-header' },
							'Awards '
						),
						_react2.default.createElement(
							'li',
							null,
							'Cultivator brussel sprouts harrows, celery dread with kale augers harrows. Veterinarian at Seeder eggs with watermelon ostriches.'
						),
						_react2.default.createElement(
							'li',
							null,
							'Coo with rabbits ect. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Lamb pig rooster sheep. Utters are weathervane foal est. '
						),
						_react2.default.createElement(
							'li',
							null,
							'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Rooster celery pineapples fertilizer.'
						)
					)
				)
			);
		}
	}]);

	return About;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	var about = state.about,
	    projector = state.projector;

	return {
		about: about,
		projector: projector
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(Object.assign({}, aboutActions, projectorActions), dispatch)
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(About);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Header = __webpack_require__(/*! ./Header */ "./src/shared/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ./Footer */ "./src/shared/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _routes = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//React Component imports


//Routes import


var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'page-wrapper', className: 'page-wrapper' },
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(
					_reactRouterDom.Switch,
					null,
					_routes2.default.map(function (_ref) {
						var path = _ref.path,
						    exact = _ref.exact,
						    C = _ref.component,
						    rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

						return _react2.default.createElement(_reactRouterDom.Route, {
							key: path,
							path: path,
							exact: exact,
							render: function render(props) {
								return _react2.default.createElement(C, _extends({}, props, rest));
							}
						});
					})
				),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ "./src/shared/Contact.js":
/*!*******************************!*\
  !*** ./src/shared/Contact.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ContactForm = __webpack_require__(/*! ./ContactForm */ "./src/shared/ContactForm.js");

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _Loader = __webpack_require__(/*! ./Loader */ "./src/shared/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _contact_actions = __webpack_require__(/*! ./actions/contact_actions */ "./src/shared/actions/contact_actions.js");

var actionCreators = _interopRequireWildcard(_contact_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React Components


//Redux imports


//React-Redux imports


//React Components imports


//Actions imports


var Contact = function (_Component) {
	_inherits(Contact, _Component);

	function Contact(props) {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
	}

	_createClass(Contact, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.confirmMessageBox();
			//timeout needed for redirect to style main properly.
			setTimeout(function () {
				_this2.toggleContactModifierOn();
			}, 50);
			this.toggleLoaderStyles();
			this.redirectAfterSendMessage();
			console.log('Contact props is: ', this.props);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleContactModifierOff();
			this.toggleLoaderStyles();
			console.log("unmounting Contact");
			this.props.redirect_check(false);
		}
	}, {
		key: 'redirectAfterSendMessage',
		value: function redirectAfterSendMessage() {
			var _this3 = this;

			if (this.props.match.params.status) {
				console.log('Hey this worked redirecting');
				setTimeout(function () {
					_this3.props.redirect_check(true);
				}, 3500);
			} else {
				console.log('Hey this may not have worked setting redirect to false');
				setTimeout(function () {
					_this3.props.redirect_check(false);
				}, 3500);
			}
		}
	}, {
		key: 'confirmMessageBox',
		value: function confirmMessageBox() {
			var _this4 = this;

			//checks status of sent messages and displays a notice accordingly
			console.log("start confirmMessageBox");
			var status = this.props.match.params.status;
			if (status) {
				if (status === 'success') {
					this.props.store_message(['Message Sent!!', 'I\'ll get back to you soon.']);
					console.log("props after success ", this.props.contact.message);
				} else {
					this.props.store_message(['Message Error!!', 'Please try again later.']);
					setTimeout(function () {
						console.log("props after fail ", _this4.props.contact);
					}, 1000);
				}
				setTimeout(function () {
					$('#confirm__container').toggleClass('confirm__container--drop-in');
					$('#confirm__container').toggleClass('confirm__container');
				}, 750);
				setTimeout(function () {
					$('#confirm__container').toggleClass('confirm__container');
					$('#confirm__container').toggleClass('confirm__container--drop-in');
				}, 6000);
			}
		}
	}, {
		key: 'toggleContactModifierOn',
		value: function toggleContactModifierOn() {
			if ($('#main').hasClass('main') === true) {
				$('#main').toggleClass('main--contact');
				$('#main').toggleClass('main');
			}
		}
	}, {
		key: 'toggleContactModifierOff',
		value: function toggleContactModifierOff() {
			if ($('#main').hasClass('main--contact') === true) {
				$('#main').toggleClass('main');
				$('#main').toggleClass('main--contact');
			}
		}
	}, {
		key: 'toggleLoaderStyles',
		value: function toggleLoaderStyles() {
			$('#loader__container').toggleClass('confirm-loader__container');
			$('#logo-loader1').toggleClass('confirm-loader__logo');
			$('#logo-loader2').toggleClass('confirm-loader__logo');
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.contact.redirect === true) {
				return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/contact' });
			}
			return _react2.default.createElement(
				'div',
				{ className: 'main', id: 'main' },
				this.props.match.params.status ? _react2.default.createElement(
					'div',
					{ id: 'confirm__container', className: 'confirm__container' },
					_react2.default.createElement(
						'div',
						{ className: 'confirm__inner' },
						_react2.default.createElement(
							'h2',
							{ className: 'confirm__header' },
							this.props.contact.message[0]
						),
						_react2.default.createElement(_Loader2.default, null),
						_react2.default.createElement(
							'h3',
							{ className: 'confirm__text' },
							this.props.contact.message[1]
						)
					)
				) : null,
				_react2.default.createElement(
					'div',
					{ className: 'contact__info-outter-container' },
					_react2.default.createElement(
						'div',
						{ className: 'contact__info-inner-container' },
						_react2.default.createElement(
							'h1',
							{ className: 'contact__header' },
							'Get In Touch With Us'
						),
						_react2.default.createElement(
							'div',
							{ className: 'contact__text-container' },
							_react2.default.createElement(
								'p',
								null,
								'If you\'re thinking about hiring a photographer for a shoot, we would love to discuss it with you.  We can provide professional insight and help to make your dream shoot a reality.  Consulations are completely free.'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'contact__address-container' },
							_react2.default.createElement(
								'address',
								{ className: 'contact__address-text' },
								_react2.default.createElement(
									'p',
									null,
									_react2.default.createElement('span', { className: 'contact__address-icons fas fa-map-marker-alt' }),
									' \xA0',
									_react2.default.createElement(
										'span',
										{ className: 'contact__srt' },
										' Address '
									),
									'123 Wooster St - New York, NY 10012'
								),
								_react2.default.createElement(
									'p',
									null,
									_react2.default.createElement('span', { className: 'contact__address-icons far fa-envelope' }),
									' \xA0',
									_react2.default.createElement(
										'span',
										{ className: 'contact__srt' },
										' Email '
									),
									'DBokeh@BokehBest.com'
								),
								_react2.default.createElement(
									'p',
									null,
									_react2.default.createElement('span', { className: 'contact__address-icons fas fa-phone' }),
									' \xA0',
									_react2.default.createElement(
										'span',
										{ className: 'contact__srt' },
										' Phone '
									),
									'(212) 555-5555'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'contact__message-container' },
					_react2.default.createElement(_ContactForm2.default, null)
				)
			);
		}
	}]);

	return Contact;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return { contact: state.contact };
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Contact);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/ContactForm.js":
/*!***********************************!*\
  !*** ./src/shared/ContactForm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactForm = function ContactForm() {
	return _react2.default.createElement(
		'div',
		{ className: 'messenger__container' },
		_react2.default.createElement(
			'form',
			{ className: 'messenger__form', method: 'post', action: '' },
			_react2.default.createElement('input', { name: 'name', type: 'text', className: 'messenger__input-name', id: 'inputName', placeholder: 'Name (required)', required: true }),
			_react2.default.createElement('input', { name: 'number', type: 'text', className: 'messenger__input-number', id: 'inputNumber', placeholder: 'Number' }),
			_react2.default.createElement('input', { name: 'email', type: 'text', className: 'messenger__input-email', id: 'inputEmail', placeholder: 'Email (required)', required: true }),
			_react2.default.createElement('textarea', { name: 'message', className: 'messenger__input-message', id: 'inputMessage', placeholder: 'Message  (required)', required: true }),
			_react2.default.createElement('input', { type: 'submit', id: 'messenger__send', className: 'messenger__button', value: 'Send Message' })
		)
	);
};

exports.default = ContactForm;

/***/ }),

/***/ "./src/shared/Filmstrip.js":
/*!*********************************!*\
  !*** ./src/shared/Filmstrip.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _projector_actions = __webpack_require__(/*! ./actions/projector_actions */ "./src/shared/actions/projector_actions.js");

var actionCreators = _interopRequireWildcard(_projector_actions);

var _Loader = __webpack_require__(/*! ./Loader */ "./src/shared/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//React-Redux imports


//Actions import


//React Component imports


var Filmstrip = function (_Component) {
	_inherits(Filmstrip, _Component);

	function Filmstrip(props) {
		_classCallCheck(this, Filmstrip);

		return _possibleConstructorReturn(this, (Filmstrip.__proto__ || Object.getPrototypeOf(Filmstrip)).call(this, props));
	}

	_createClass(Filmstrip, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log("Filmstrip mounted props are ", this.props);
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded(name) {
			$('#filmstripImageLoader__' + name).css("display", "none");
		}
	}, {
		key: 'handleImageErrored',
		value: function handleImageErrored(name) {
			// console.log("image error");
			$('#filmstripImageLoader__' + name).css("display", "block");
		}
	}, {
		key: 'mapSlidesToFilmstrip',
		value: function mapSlidesToFilmstrip(slides) {
			var _this2 = this;

			var mappedSlides = slides.map(function (_ref, index) {
				var name = _ref.name,
				    image = _ref.image;

				return _react2.default.createElement(
					'div',
					{ key: 'filmstrip__cell-' + name, className: 'filmstrip__cell',
						onClick: function onClick() {
							_this2.filmstripCellClickHandler(index);
						} },
					_react2.default.createElement(
						'div',
						{ className: 'filmstrip__image-wrapper' },
						_react2.default.createElement('img', { className: 'filmstrip__image',
							src: image,
							alt: name,
							onLoad: _this2.handleImageLoaded.bind(_this2, name),
							onError: _this2.handleImageErrored.bind(_this2, name)
						})
					),
					_react2.default.createElement('div', { className: 'filmstrip__image-overlay', id: 'filmstrip__image-overlay' }),
					_react2.default.createElement(_Loader2.default, { loaderId: 'filmstripImageLoader__' + name })
				);
			});
			return mappedSlides;
		}
	}, {
		key: 'filmstripCellClickHandler',
		value: function filmstripCellClickHandler(slideNo) {
			var _this3 = this;

			console.log('slideNo is: ', slideNo);
			this.props.store_current_slide_no(slideNo);
			setTimeout(function () {
				console.log("before call to updateSlideShow props are: ", _this3.props);
				_this3.props.updateSlideShow();
			});
			// this.props.store_current_slide_info(slideInfo);
		}
	}, {
		key: 'filmstripContainerShifter',
		value: function filmstripContainerShifter(shiftBy) {
			var travelDistance = document.getElementById('filmstrip__container').offsetWidth - document.getElementById('projector').offsetWidth;
			var proposedPosition = parseInt($('#filmstrip__container').css('left')) + shiftBy;
			if (travelDistance <= 0 || proposedPosition > 0 || travelDistance + proposedPosition < 0) {
				return;
			}
			var filmstripPosition = parseInt($('#filmstrip__container').css('left'));
			var leftArrowPosition = parseInt($('#filmstrip__control-left').css('left'));
			var rightArrowPosition = parseInt($('#filmstrip__control-right').css('left'));
			$('#filmstrip__container').css('left', filmstripPosition + shiftBy);
			$('#filmstrip__control-left').css('left', leftArrowPosition + shiftBy * -1);
			$('#filmstrip__control-right').css('left', rightArrowPosition + shiftBy * -1);
		}
	}, {
		key: 'filmstripLeft',
		value: function filmstripLeft() {
			this.filmstripContainerShifter(200);
		}
	}, {
		key: 'filmstripRight',
		value: function filmstripRight() {
			this.filmstripContainerShifter(-200);
		}
	}, {
		key: 'highlightFilmstripControls',
		value: function highlightFilmstripControls() {
			// if($("#filmstrip__control-left").hasClass(filmstrip__control-left)){
			$("#filmstrip__control-left").addClass("filmstrip__control-left--highlight");
			$("#filmstrip__control-left").removeClass("filmstrip__control-left");
			$("#filmstrip__control-right").addClass("filmstrip__control-right--highlight");
			$("#filmstrip__control-right").removeClass("filmstrip__control-right");
			// }
			setTimeout(function () {
				$("#filmstrip__control-left").addClass("filmstrip__control-left");
				$("#filmstrip__control-left").removeClass("filmstrip__control-left--highlight");
				$("#filmstrip__control-right").addClass("filmstrip__control-right");
				$("#filmstrip__control-right").removeClass("filmstrip__control-right--highlight");
			}, 500);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var slides = this.props.slides;
			return _react2.default.createElement(
				'div',
				{ id: 'filmstrip__container', className: 'filmstrip__container',
					onMouseEnter: function onMouseEnter() {
						return _this4.highlightFilmstripControls();
					}
				},
				slides ? this.mapSlidesToFilmstrip(slides) : null,
				_react2.default.createElement(
					'span',
					{ id: 'filmstrip__control-left',
						className: 'filmstrip__control-left',
						title: 'Shift filmstrip to the right',
						onClick: function onClick() {
							return _this4.filmstripLeft();
						} },
					_react2.default.createElement(
						'b',
						{ className: 'filmstrip__control-srt' },
						'filmstrip left arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-angle-left' })
				),
				_react2.default.createElement(
					'span',
					{ id: 'filmstrip__control-right',
						className: 'filmstrip__control-right',
						title: 'Shift filmstrip to the left',
						onClick: function onClick() {
							return _this4.filmstripRight();
						} },
					_react2.default.createElement(
						'b',
						{ className: 'filmstrip__control-srt' },
						'filmstrip right arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-angle-right' })
				),
				_react2.default.createElement('div', { className: 'filmstrip__selector-cell', id: 'filmstrip__selector-cell' })
			);
		}
	}]);

	return Filmstrip;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return { projector: state.projector };
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Filmstrip);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/Footer.js":
/*!******************************!*\
  !*** ./src/shared/Footer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


var Footer = function (_Component) {
	_inherits(Footer, _Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	}

	_createClass(Footer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log("Footer props are", this.props);
			this.addListeners(this.props.footer.socialMediaLinks);
		}

		//check to see if these can be added directly inline during the initial mapping of the Social Medial Links in the JSX

	}, {
		key: 'addListeners',
		value: function addListeners(socialMediaLinksInfo) {
			var _this2 = this;

			socialMediaLinksInfo.forEach(function (_ref) {
				var font_color = _ref.font_color,
				    name = _ref.name,
				    bg_color1 = _ref.bg_color1,
				    bg_color2 = _ref.bg_color2;

				$('#' + name + '-hover-box').hover(function () {
					return _this2.hoverOn('#' + name + '-social', font_color, bg_color1, bg_color2);
				}, function () {
					return _this2.hoverOff('#' + name + '-social');
				});
			});
		}
	}, {
		key: 'hoverOn',
		value: function hoverOn(id, font_color, bg_color1, bg_color2) {
			$(id).css('color', font_color);
			$(id).css('background', 'linear-gradient(45deg, ' + bg_color1 + ', ' + bg_color2 + ')');
			$(id).toggleClass('footer__social-link--hover');
			$(id).toggleClass('footer__social-link');
		}
	}, {
		key: 'hoverOff',
		value: function hoverOff(id) {
			$(id).css('color', 'white');
			$(id).css('background', 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))');
			$(id).toggleClass('footer__social-link');
			$(id).toggleClass('footer__social-link--hover');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'footer',
				{ className: 'footer' },
				_react2.default.createElement(
					'div',
					{ className: 'footer__body' },
					_react2.default.createElement(
						'div',
						{ className: 'footer__artist' },
						_react2.default.createElement(
							'h4',
							{ className: 'footer__header' },
							'Artist'
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer__artist-content-container' },
							_react2.default.createElement(
								'p',
								{ className: 'footer__text-artist' },
								'David Bokeh founder of Bokeh Best Photography, Is an award winning photographer with over 8 years of experience. Learn more about David and Bokeh Best Photography',
								_react2.default.createElement(
									_reactRouterDom.NavLink,
									{ id: 'footer__artist-link', className: 'footer__artist-link', to: '/about' },
									_react2.default.createElement(
										'i',
										null,
										' here. '
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'footer__address' },
						_react2.default.createElement(
							'h4',
							{ className: 'footer__header' },
							'Bokeh Best Photography'
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer__address-content-container' },
							_react2.default.createElement(
								'address',
								{ className: 'footer__address' },
								_react2.default.createElement(
									'p',
									{ className: 'footer__text-address' },
									'123 Wooster St'
								),
								_react2.default.createElement(
									'p',
									{ className: 'footer__text-address' },
									' New York, NY 10012'
								),
								_react2.default.createElement(
									'a',
									{ href: 'tel:1-212-555-5555' },
									_react2.default.createElement(
										'p',
										{ className: 'footer__text-address' },
										'(212) 555-5555'
									)
								),
								_react2.default.createElement('p', { className: 'footer__text-address' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'footer__social' },
						_react2.default.createElement(
							'h4',
							{ className: 'footer__header' },
							'Social Media'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'footer__social-content-container' },
							this.props.footer.socialMediaLinks.map(function (_ref2) {
								var name = _ref2.name,
								    link = _ref2.link,
								    icon = _ref2.icon;
								return _react2.default.createElement(
									'li',
									{ key: name + '-social', id: name + '-hover-box', className: 'footer__social-hover-box' },
									_react2.default.createElement(
										'a',
										{ href: link, target: '_blank' },
										_react2.default.createElement(
											'span',
											null,
											_react2.default.createElement(
												'b',
												{ className: 'footer__social-srt' },
												name
											),
											_react2.default.createElement('i', { className: icon + ' footer__social-link', id: name + '-social', 'aria-hidden': 'true', title: name })
										)
									)
								);
							})
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'footer__base' },
					_react2.default.createElement(
						'p',
						{ className: 'footer__base-text' },
						'\xA9 Bokeh Best Photography - New York, NY'
					)
				)
			);
		}
	}]);

	return Footer;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		footer: state.footer
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps)(Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/Gallery.js":
/*!*******************************!*\
  !*** ./src/shared/Gallery.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _gallery_actions = __webpack_require__(/*! ./actions/gallery_actions */ "./src/shared/actions/gallery_actions.js");

var galleryActions = _interopRequireWildcard(_gallery_actions);

var _projector_actions = __webpack_require__(/*! ./actions/projector_actions */ "./src/shared/actions/projector_actions.js");

var projectorActions = _interopRequireWildcard(_projector_actions);

var _GallerySelector = __webpack_require__(/*! ./GallerySelector */ "./src/shared/GallerySelector.js");

var _GallerySelector2 = _interopRequireDefault(_GallerySelector);

var _Projector = __webpack_require__(/*! ./Projector */ "./src/shared/Projector.js");

var _Projector2 = _interopRequireDefault(_Projector);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//React-Redux imports


//Actions import


//React Component imports


var Gallery = function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery(props) {
		_classCallCheck(this, Gallery);

		return _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));
	}

	_createClass(Gallery, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log("on mount Gallery props are", this.props);
			console.log();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// console.log("on update Gallery props are", this.props);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.closeGallery();
		}
	}, {
		key: 'closeGallery',
		value: function closeGallery() {
			if ($("#main").hasClass("main--gallery")) {
				$("#main").toggleClass("main");
				$("#main").toggleClass("main--gallery");
				$("#gallerySelector__container").toggleClass("gallerySelector__container");
				$("#gallerySelector__container").toggleClass("gallerySelector__container--open");
				$("#gallery__images").toggleClass("gallery__images-closed");
				$("#gallery__images").toggleClass("gallery__images");
			}
			if ($("#projector__control-down").hasClass("projector__control-down--filmstrip-shift")) {
				$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
			}
			if ($("#projector__control-down").hasClass("projector__control-down--shift")) {
				$("#projector__control-down").toggleClass("projector__control-down--shift");
			}
			if (!$("#projector__control-down").hasClass("projector__control-down")) {
				$("#projector__control-down").toggleClass("projector__control-down");
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var slides = this.props.gallery.slides;
			return _react2.default.createElement(
				'div',
				{ className: 'main', id: 'main' },
				_react2.default.createElement(_GallerySelector2.default, { choose_gallery: this.props.actions.choose_gallery, unload_slides: this.props.actions.unload_slides }),
				_react2.default.createElement(
					'span',
					{ className: 'gallery__close', title: 'Close Gallery', onClick: function onClick() {
							return _this2.closeGallery();
						} },
					_react2.default.createElement(
						'b',
						{ className: 'gallery__close-srt' },
						'Close Gallery'
					),
					'X'
				),
				_react2.default.createElement(
					'div',
					{ className: 'gallery__images-closed', id: 'gallery__images' },
					_react2.default.createElement(_Projector2.default, { styleFor: "gallery", slides: slides })
				)
			);
		}
	}]);

	return Gallery;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	var gallery = state.gallery,
	    projector = state.projector;

	return {
		gallery: gallery,
		projector: projector
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(Object.assign({}, galleryActions, projectorActions), dispatch)
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Gallery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/GallerySelector.js":
/*!***************************************!*\
  !*** ./src/shared/GallerySelector.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "redux");

var _gallerySelector_actions = __webpack_require__(/*! ./actions/gallerySelector_actions */ "./src/shared/actions/gallerySelector_actions.js");

var actionCreators = _interopRequireWildcard(_gallerySelector_actions);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//Actions imports


//React-Redux imports


//jQuery import


var GallerySelector = function (_Component) {
	_inherits(GallerySelector, _Component);

	function GallerySelector(props) {
		_classCallCheck(this, GallerySelector);

		return _possibleConstructorReturn(this, (GallerySelector.__proto__ || Object.getPrototypeOf(GallerySelector)).call(this, props));
	}

	_createClass(GallerySelector, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.gallerySelectorLoad();
			this.addListeners();
			console.log('GallerySelector props are: ', this.props);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.props.gallerySelector.timer);
			this.gallerySelectorReset();
		}

		//save timer to state to clear on unmount so that the timer is cleared even if page is unmounted mid load

	}, {
		key: 'gallerySelectorLoad',
		value: function gallerySelectorLoad() {
			var gallerySelectorIds = [{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1" }, { containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2" }, { containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3" }, { containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4" }];
			var counter = 0;
			var timer = setInterval(function () {
				(0, _jquery2.default)(gallerySelectorIds[counter].containerId).toggleClass('gallerySelector__section-container--slide-in');
				(0, _jquery2.default)(gallerySelectorIds[counter].containerId).toggleClass('gallerySelector__section-container');
				counter++;
				if (counter >= gallerySelectorIds.length) {
					clearInterval(timer);
				}
			}, 500);
			this.props.store_timer(timer);
		}
	}, {
		key: 'gallerySelectorReset',
		value: function gallerySelectorReset() {
			var gallerySelectorIds = [{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1" }, { containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2" }, { containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3" }, { containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4" }];
			gallerySelectorIds.forEach(function (_ref) {
				var containerId = _ref.containerId;

				if ((0, _jquery2.default)(containerId).hasClass('gallerySelector__section-container--slide-in')) {
					(0, _jquery2.default)(containerId).toggleClass('gallerySelector__section-container');
					(0, _jquery2.default)(containerId).toggleClass('gallerySelector__section-container--slide-in');
				}
			});
		}

		//put listeners directly on to the html tags

	}, {
		key: 'addListeners',
		value: function addListeners() {
			var _this2 = this;

			var gallerySelectorIds = [{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1", galleryName: "action" }, { containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2", galleryName: "events" }, { containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3", galleryName: "landscape" }, { containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4", galleryName: "portrait" }];
			gallerySelectorIds.forEach(function (_ref2) {
				var containerId = _ref2.containerId,
				    gallerySelectorId = _ref2.gallerySelectorId,
				    galleryName = _ref2.galleryName;

				(0, _jquery2.default)(containerId).hover(function () {
					return _this2.hoverIn(gallerySelectorId);
				}, function () {
					return _this2.hoverOut(gallerySelectorId);
				});
				(0, _jquery2.default)(containerId).click(function () {
					return _this2.goToGallery(galleryName);
				});
			});
		}
	}, {
		key: 'goToGallery',
		value: function goToGallery(gallery) {
			var _this3 = this;

			console.log("clicked goToGallery on " + gallery);
			this.props.unload_slides();
			this.props.choose_gallery(gallery);
			setTimeout(function () {
				_this3.openGallery();
			}, 50);
		}
	}, {
		key: 'openGallery',
		value: function openGallery() {
			console.log("Attempting to open the gallery");
			if ((0, _jquery2.default)("#main").hasClass("main")) {
				(0, _jquery2.default)("#main").toggleClass("main--gallery");
				(0, _jquery2.default)("#main").toggleClass("main");
				(0, _jquery2.default)("#gallerySelector__container").toggleClass("gallerySelector__container--open");
				(0, _jquery2.default)("#gallerySelector__container").toggleClass("gallerySelector__container");
				(0, _jquery2.default)("#gallery__images").toggleClass("gallery__images");
				(0, _jquery2.default)("#gallery__images").toggleClass("gallery__images-closed");
			}
			setTimeout(function () {
				(0, _jquery2.default)('html,body').animate({
					scrollTop: (0, _jquery2.default)("#main").offset().top
				});
			}, 1500);
		}

		// closeGallery() {
		// 	if($("#main").hasClass("main--gallery")){
		// 		$("#main").toggleClass("main");
		// 		$("#main").toggleClass("main--gallery");
		// 		$("#gallerySelector__container").toggleClass("gallerySelector__container");
		// 		$("#gallerySelector__container").toggleClass("gallerySelector__container--open");
		// 	}
		// }


	}, {
		key: 'hoverIn',
		value: function hoverIn(id) {
			(0, _jquery2.default)(id).toggleClass('gallerySelector__section--hover');
			(0, _jquery2.default)(id).toggleClass('gallerySelector__section--slide-in');
		}
	}, {
		key: 'hoverOut',
		value: function hoverOut(id) {
			(0, _jquery2.default)(id).toggleClass('gallerySelector__section--slide-in');
			(0, _jquery2.default)(id).toggleClass('gallerySelector__section--hover');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'gallerySelector__container', id: 'gallerySelector__container' },
				_react2.default.createElement(
					'div',
					{ className: 'gallerySelector__section-container', id: 'gallerySelector__1-container', title: 'View The Action Gallery' },
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__1' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Action'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'gallerySelector__section-container', id: 'gallerySelector__2-container', title: 'View The Events Gallery' },
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__2' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Events'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'gallerySelector__section-container', id: 'gallerySelector__3-container', title: 'View The Landscape Gallery' },
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__3' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Landscape'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'gallerySelector__section-container', id: 'gallerySelector__4-container', title: 'View The Portrait Gallery' },
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__4' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Portait'
					)
				)
			);
		}
	}]);

	return GallerySelector;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		gallerySelector: state.gallerySelector
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(GallerySelector);

/***/ }),

/***/ "./src/shared/Header.js":
/*!******************************!*\
  !*** ./src/shared/Header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _header_actions = __webpack_require__(/*! ./actions/header_actions */ "./src/shared/actions/header_actions.js");

var actionCreators = _interopRequireWildcard(_header_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//React-Redux imports


//Actions imports


var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			mobileMenu: false
		};
		_this.handleMenuClick = _this.handleMenuClick.bind(_this);
		_this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
		return _this;
	}

	_createClass(Header, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('header props are ', this.props);
		}
	}, {
		key: 'handleMouseLeave',
		value: function handleMouseLeave() {
			if (this.props.header.mobileMenu === true) {
				this.toggleMobileMenuOut();
				this.props.mobile_header_status(false);
			}
		}
	}, {
		key: 'handleMenuClick',
		value: function handleMenuClick() {
			console.log('mobileMenu clicked');
			if (this.props.header.mobileMenu === true) {
				this.toggleMobileMenuOut();
				this.props.mobile_header_status(false);
			} else if (this.props.header.mobileMenu === false) {
				this.toggleMobileMenuIn();
				this.props.mobile_header_status(true);
			}
		}
	}, {
		key: 'toggleMobileMenuIn',
		value: function toggleMobileMenuIn() {
			$('#header__mobile-nav').toggleClass('header__mobile-nav--slide-in');
			$('#header__mobile-nav').toggleClass('header__mobile-nav');
		}
	}, {
		key: 'toggleMobileMenuOut',
		value: function toggleMobileMenuOut() {
			$('#header__mobile-nav').toggleClass('header__mobile-nav');
			$('#header__mobile-nav').toggleClass('header__mobile-nav--slide-in');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'header',
				{ className: 'header', onMouseLeave: function onMouseLeave() {
						return _this2.handleMouseLeave();
					} },
				_react2.default.createElement(
					'div',
					{ className: 'header__brand-container' },
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ className: 'header__brand-link', id: 'header__brand-link', exact: true, to: '/', title: 'Bokeh Photography Inc.' },
						_react2.default.createElement('img', { className: 'header__brand-logo', src: __webpack_require__(/*! ../../assets/logos/site-logo2.svg */ "./assets/logos/site-logo2.svg"), alt: 'Bokeh Photography Inc. logo' }),
						_react2.default.createElement(
							'p',
							{ className: 'header__brand-name' },
							'Bokeh Photography'
						)
					),
					_react2.default.createElement('i', { className: 'header__mobile-menu-icon fas fa-bars', onClick: function onClick() {
							return _this2.handleMenuClick();
						} })
				),
				_react2.default.createElement(
					'nav',
					{ className: 'header__nav' },
					_react2.default.createElement(
						'ul',
						{ className: 'header__link-list' },
						this.props.header.linkInfo.map(function (_ref) {
							var key = _ref.key,
							    path = _ref.path,
							    name = _ref.name;
							return _react2.default.createElement(
								'li',
								{ key: key },
								' ',
								_react2.default.createElement(
									_reactRouterDom.NavLink,
									{ className: 'header__links', exact: true, to: path },
									name
								)
							);
						})
					)
				),
				_react2.default.createElement(
					'nav',
					{ id: 'header__mobile-nav', className: 'header__mobile-nav' },
					_react2.default.createElement(
						'ul',
						{ className: 'header__mobile-link-list' },
						this.props.header.linkInfo.map(function (_ref2) {
							var key = _ref2.key,
							    path = _ref2.path,
							    name = _ref2.name;
							return _react2.default.createElement(
								'li',
								{ key: 'mobile-' + key },
								' ',
								_react2.default.createElement(
									_reactRouterDom.NavLink,
									{ className: 'header__mobile-links', exact: true, to: path },
									name
								)
							);
						})
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return { header: state.header };
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps, null, { pure: false })(Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/Home.js":
/*!****************************!*\
  !*** ./src/shared/Home.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _circletype = __webpack_require__(/*! circletype */ "circletype");

var _circletype2 = _interopRequireDefault(_circletype);

var _home_actions = __webpack_require__(/*! ./actions/home_actions */ "./src/shared/actions/home_actions.js");

var actionCreators = _interopRequireWildcard(_home_actions);

var _homeSlides = __webpack_require__(/*! ./data/homeSlides */ "./src/shared/data/homeSlides.js");

var _homeSlides2 = _interopRequireDefault(_homeSlides);

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//React-Redux imports


//CircleType import


//Actions imports


//Data imports


//jQuery import


var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.updateWindowWidth = _this.updateWindowWidth.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.slideShow();
			this.toggleHomeModifierOn();
			this.updateWindowWidth();
			window.addEventListener('resize', this.updateWindowWidth);
			new _circletype2.default(document.getElementById('home__welcome-text')).radius(600);
			setTimeout(function () {
				console.log('Home props are: ', _this2.props);
			}, 1500);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log("Unmounted Component");
			this.toggleHomeModifierOff();
			window.removeEventListener('resize', this.updateWindowWidth);
			this.stopSlideShow();
			(0, _jquery2.default)("#page-wrapper").css('background-image', "");
		}
	}, {
		key: 'toggleHomeModifierOn',
		value: function toggleHomeModifierOn() {
			(0, _jquery2.default)('#main').toggleClass('main--home');
			(0, _jquery2.default)('#main').toggleClass('main');
		}
	}, {
		key: 'toggleHomeModifierOff',
		value: function toggleHomeModifierOff() {
			(0, _jquery2.default)('#main').toggleClass('main');
			(0, _jquery2.default)('#main').toggleClass('main--home');
		}
	}, {
		key: 'updateWindowWidth',
		value: function updateWindowWidth() {
			this.props.store_window_width(window.innerWidth);
		}
	}, {
		key: 'slideShow',
		value: function slideShow() {
			var _this3 = this;

			var intervalTimer = this.props.home.intervalTimer;

			(0, _jquery2.default)("#page-wrapper").css('background-image', 'url(' + _homeSlides2.default[0].imgSrc + ')');
			//add flash-in class
			(0, _jquery2.default)("#home__filter-box").toggleClass("home__filter-box--flash-in");
			// $("#page-wrapper").toggleClass("page-wrapper--flash-in");
			//remove home__filter-box class
			(0, _jquery2.default)("#home__filter-box").toggleClass("home__filter-box");
			// $("#page-wrapper").toggleClass("page-wrapper");
			var count = 1;
			console.log('slideshow starting');
			var timer = setInterval(function () {
				if (count == _homeSlides2.default.length) {
					count = 0;
				}
				var image = _homeSlides2.default[count].imgSrc;
				if (_this3.props.home.pauseSlideShow == false) {
					count++;
					//add home__filter-box class
					(0, _jquery2.default)("#home__filter-box").toggleClass("home__filter-box");
					// $("#page-wrapper").toggleClass("page-wrapper");
					//remove flash-in class
					(0, _jquery2.default)("#home__filter-box").toggleClass("home__filter-box--flash-in");
					// $("#page-wrapper").toggleClass("page-wrapper--flash-in");
					//add flash-in class again so that the effect starts over
					setTimeout(function () {
						(0, _jquery2.default)("#home__filter-box").toggleClass("home__filter-box--flash-in");
					}, 5);
					// setTimeout(() => { $("#page-wrapper").toggleClass("page-wrapper--flash-in"); }, 5);
					//remove home__filter-box class
					setTimeout(function () {
						(0, _jquery2.default)("#home__filter-box").toggleClass("home__filter-box");
					}, 5);
					// setTimeout(() => { $("#page-wrapper").toggleClass("page-wrapper"); }, 5);
					(0, _jquery2.default)("#page-wrapper").css('background-image', 'url(' + image + ')');
					console.log('count++ pause is: ', _this3.props.home.pauseSlideShow);
				}
				// count = this.checkToProceedToNextSlide(count);
				_this3.checkToProceedToNextSlide();
			}, 8500);
			this.props.store_timer(timer);
			console.log('stored intervalTimer is ' + intervalTimer);
		}
	}, {
		key: 'checkToProceedToNextSlide',
		value: function checkToProceedToNextSlide() {
			var _props$home = this.props.home,
			    windowWidth = _props$home.windowWidth,
			    pauseSlideShow = _props$home.pauseSlideShow;

			if (windowWidth < 576) {
				this.props.pause_slide_show(true);
				console.log('pauseSlideShowCheck window too small stopped slideshow ', this.props.home);
			}
			if (windowWidth >= 576) {
				this.props.pause_slide_show(false);
				console.log('pauseSlideShowCheck window big enough started slideshow ', this.props.home);
			}
			return;
		}

		// checkToProceedToNextSlide(count) {
		// 	let { windowWidth, pauseSlideShow } = this.props.home;
		// 	if(windowWidth < 576){
		// 		console.log('checkToProceedToNextSlide window too small stopped slideshow ', this.props.home);
		// 		return count
		// 	}
		// 	if(windowWidth >= 576){
		// 		console.log('checkToProceedToNextSlide window big enough started slideshow ', this.props.home);
		// 		return count+=1
		// 	}
		// }


	}, {
		key: 'stopSlideShow',
		value: function stopSlideShow() {
			console.log('clearing intervalTimer ' + this.props.home.intervalTimer);
			clearInterval(this.props.home.intervalTimer);
			this.props.pause_slide_show(true);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'main', className: 'main' },
				_react2.default.createElement('div', { id: 'home__filter-box', className: 'home__filter-box' }),
				_react2.default.createElement(
					'div',
					{ className: 'home__welcome' },
					_react2.default.createElement(
						'h1',
						{ id: 'home__welcome-text', className: 'home__welcome-text' },
						'Bokeh Best Photography'
					),
					_react2.default.createElement(
						'h1',
						{ id: 'home__welcome-text-mobile', className: 'home__welcome-text' },
						'Bokeh Best Photography'
					)
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		home: state.home
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(stateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/shared/Loader.js":
/*!******************************!*\
  !*** ./src/shared/Loader.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
	return _react2.default.createElement(
		"div",
		{ id: props.loaderId, className: "loader__container" },
		_react2.default.createElement("img", { id: "logo-loader1", className: "loader__logo", src: __webpack_require__(/*! ../../assets/logos/logo-loader1.svg */ "./assets/logos/logo-loader1.svg") }),
		_react2.default.createElement("img", { id: "logo-loader2", className: "loader__logo", src: __webpack_require__(/*! ../../assets/logos/logo-loader2.svg */ "./assets/logos/logo-loader2.svg") })
	);
};

exports.default = Loader;

/***/ }),

/***/ "./src/shared/Projector.js":
/*!*********************************!*\
  !*** ./src/shared/Projector.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Slide = __webpack_require__(/*! ./Slide */ "./src/shared/Slide.js");

var _Slide2 = _interopRequireDefault(_Slide);

var _Filmstrip = __webpack_require__(/*! ./Filmstrip */ "./src/shared/Filmstrip.js");

var _Filmstrip2 = _interopRequireDefault(_Filmstrip);

var _Loader = __webpack_require__(/*! ./Loader */ "./src/shared/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _projector_actions = __webpack_require__(/*! ./actions/projector_actions */ "./src/shared/actions/projector_actions.js");

var actionCreators = _interopRequireWildcard(_projector_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Redux imports


//React-Redux imports


//React Component imports


//Actions import


var Projector = function (_Component) {
	_inherits(Projector, _Component);

	function Projector(props) {
		_classCallCheck(this, Projector);

		return _possibleConstructorReturn(this, (Projector.__proto__ || Object.getPrototypeOf(Projector)).call(this, props));
	}

	_createClass(Projector, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.downArrowVisibility();
			this.props.unload_slides();
			this.props.pause_slide_show(false);
			setTimeout(function () {
				_this2.loadProjector();
			}, 50);
			setTimeout(function () {
				_this2.autoRunProjector();
			}, 100);

			console.log("Projector props are ", this.props);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// console.log("on update Projector props are", this.props);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.props.projector.intervalTimer);
			this.props.show_filmstrip(false);
			if (!$("#projector__control-down").hasClass("projector__control-down")) {
				$("#projector__control-down").toggleClass("projector__control-down--shift");
				$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
				$("#filmstrip_container").toggleClass("filmstrip_container--slide-in");
				$("#filmstrip_container").toggleClass("filmstrip_container");
			}
		}
	}, {
		key: 'nextSlide',
		value: function nextSlide() {
			var _this3 = this;

			var _props$projector = this.props.projector,
			    currentSlideNo = _props$projector.currentSlideNo,
			    slides = _props$projector.slides;

			this.props.increment_slide(currentSlideNo, slides.length);
			//delayed so that redux has time to update store from increment_slide()
			setTimeout(function () {
				_this3.updateSlideShow();
			}, 50);
		}
	}, {
		key: 'previousSlide',
		value: function previousSlide() {
			var _this4 = this;

			var _props$projector2 = this.props.projector,
			    currentSlideNo = _props$projector2.currentSlideNo,
			    slides = _props$projector2.slides;

			this.props.decrement_slide(currentSlideNo, slides.length);
			//delayed so that redux has time to update store from decrement_slide()
			setTimeout(function () {
				_this4.updateSlideShow();
			}, 50);
		}
	}, {
		key: 'updateSlideShow',
		value: function updateSlideShow() {
			var _props$projector3 = this.props.projector,
			    slides = _props$projector3.slides,
			    currentSlideNo = _props$projector3.currentSlideNo;

			console.log("in updateSlideShow props are: ", this.props);
			this.filmstripOverlayShifter();
			this.props.store_current_slide_info(slides[currentSlideNo]);
		}
	}, {
		key: 'loadProjector',
		value: function loadProjector() {
			var _this5 = this;

			this.props.load_new_slides(this.props.slides);
			setTimeout(function () {
				_this5.updateSlideShow();
			}, 50);
		}
	}, {
		key: 'autoRunProjector',
		value: function autoRunProjector() {
			var _this6 = this;

			var intervalTimer = setInterval(function () {
				if (_this6.props.projector.slides === undefined) {
					_this6.loadProjector();
				}
				if (_this6.props.projector.pauseSlideShow == false) {
					_this6.nextSlide();
				}
			}, 6500);
			this.props.store_timer(intervalTimer);
		}
	}, {
		key: 'pauseButtonHandler',
		value: function pauseButtonHandler() {
			var pauseSlideShow = this.props.projector.pauseSlideShow;
			if (pauseSlideShow == false) {
				this.props.pause_slide_show(true);
			} else {
				this.props.pause_slide_show(false);
			}
		}
	}, {
		key: 'downArrowVisibility',
		value: function downArrowVisibility() {
			//if container housing the projector is too small don't give the option to bring up the photo strip
			var projectorBoxWidth = document.getElementById('projector').offsetWidth;
			if (projectorBoxWidth < 750) {
				$("#projector__control-down").css('display', 'none');
			}
		}
	}, {
		key: 'projectorDownHandler',
		value: function projectorDownHandler() {
			var calculatedWidth = this.props.projector.slides.length * 200 + "px";
			this.props.show_filmstrip(!this.props.projector.showFilmstrip);
			setTimeout(function () {
				$('#filmstrip__container').css('width', calculatedWidth);
			}, 25);
			$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
			$("#projector__control-down").toggleClass("projector__control-down--shift");
			$("#filmstrip__container").toggleClass("filmstrip__container--slide-in");
			$("#filmstrip__container").toggleClass("filmstrip__container");
		}
	}, {
		key: 'shiftProjectorControls',
		value: function shiftProjectorControls() {
			//make sure modified class is not on before toggling
			if ($("#projector__control-left").hasClass("projector__control-left")) {
				$("#projector__control-left").toggleClass("projector__control-left--shift");
				$("#projector__control-left").toggleClass("projector__control-left");
				$("#projector__control-right").toggleClass("projector__control-right--shift");
				$("#projector__control-right").toggleClass("projector__control-right");
				$("#projector__control-pause").toggleClass("projector__control-pause--shift");
				$("#projector__control-pause").toggleClass("projector__control-pause");
				//If control-down is in use by the filmstrip leave it alone
				if (!$("#projector__control-down").hasClass("projector__control-down--filmstrip-shift")) {
					$("#projector__control-down").toggleClass("projector__control-down--shift");
					$("#projector__control-down").toggleClass("projector__control-down");
				}
			}
		}
	}, {
		key: 'unshiftProjectorControls',
		value: function unshiftProjectorControls() {
			//make sure modified class is on before toggling it off
			if ($("#projector__control-left").hasClass("projector__control-left--shift")) {
				$("#projector__control-left").toggleClass("projector__control-left");
				$("#projector__control-left").toggleClass("projector__control-left--shift");
				$("#projector__control-right").toggleClass("projector__control-right");
				$("#projector__control-right").toggleClass("projector__control-right--shift");
				$("#projector__control-pause").toggleClass("projector__control-pause");
				$("#projector__control-pause").toggleClass("projector__control-pause--shift");
				//If control-down is in use by the filmstrip leave it alone
				if (!$("#projector__control-down").hasClass("projector__control-down--filmstrip-shift")) {
					$("#projector__control-down").toggleClass("projector__control-down");
					$("#projector__control-down").toggleClass("projector__control-down--shift");
				}
			}
		}
	}, {
		key: 'filmstripOverlayShifter',
		value: function filmstripOverlayShifter() {
			var currentSlideNo = this.props.projector.currentSlideNo;
			$("#filmstrip__selector-cell").css('left', currentSlideNo * 200);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			var _props$projector4 = this.props.projector,
			    currentSlideInfo = _props$projector4.currentSlideInfo,
			    showFilmstrip = _props$projector4.showFilmstrip,
			    slides = _props$projector4.slides;

			return _react2.default.createElement(
				'div',
				{ id: 'projector',
					className: 'projector',
					onMouseEnter: function onMouseEnter() {
						return _this7.shiftProjectorControls();
					},
					onMouseLeave: function onMouseLeave() {
						return _this7.unshiftProjectorControls();
					}
				},
				currentSlideInfo ? _react2.default.createElement(_Slide2.default, { photoInfo: currentSlideInfo,
					styleFor: this.props.styleFor
				}) : _react2.default.createElement(_Loader2.default, null),
				slides ? _react2.default.createElement(_Filmstrip2.default, { slides: slides,
					updateSlideShow: function updateSlideShow() {
						return _this7.updateSlideShow();
					}
				}) : null,
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-left', className: 'projector__control-left', title: 'See previous photo' },
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'left arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-left', onClick: function onClick() {
							return _this7.previousSlide();
						} })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-right', className: 'projector__control-right', title: 'See next photo' },
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'right arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-right', onClick: function onClick() {
							return _this7.nextSlide();
						} })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-down', className: 'projector__control-down', title: 'See all photos in current gallery' },
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'down arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-down', onClick: function onClick() {
							return _this7.projectorDownHandler();
						} })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-pause', className: 'projector__control-pause', title: 'Pause slide show' },
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'pause arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-pause-circle', onClick: function onClick() {
							return _this7.pauseButtonHandler();
						} })
				)
			);
		}
	}]);

	return Projector;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return { projector: state.projector };
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Projector);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/Slide.js":
/*!*****************************!*\
  !*** ./src/shared/Slide.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ./Loader */ "./src/shared/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//Rect Component imports


var Slide = function (_Component) {
	_inherits(Slide, _Component);

	function Slide(props) {
		_classCallCheck(this, Slide);

		return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props));
	}

	_createClass(Slide, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setStyles();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.removeStyles();
		}
	}, {
		key: 'setStyles',
		value: function setStyles() {
			var name = this.props.photoInfo.name;

			var styleFor = this.props.styleFor;
			//set styles for the frame
			$('#' + name + '-slide__frame').toggleClass('slide__frame--' + styleFor);
			$('#' + name + '-slide__frame').toggleClass('slide__frame');
			//set styles for the photo
			$('#' + name + '-slide__photo').toggleClass('slide__photo--' + styleFor);
			$('#' + name + '-slide__photo').toggleClass('slide__photo');
		}
	}, {
		key: 'removeStyles',
		value: function removeStyles() {
			var name = this.props.photoInfo.name;
			var styleFor = this.props.styleFor.styleFor;
			//set styles for the frame

			$('#' + name + '-slide__frame').toggleClass('slide__frame');
			$('#' + name + '-slide__frame').toggleClass('slide__frame--' + styleFor);
			//set styles for the photo
			$('#' + name + '-slide__photo').toggleClass('slide__photo');
			$('#' + name + '-slide__photo').toggleClass('slide__photo--' + styleFor);
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded() {
			$("#slide__loader").css("display", "none");
		}
	}, {
		key: 'handleImageErrored',
		value: function handleImageErrored() {
			$("#slide__loader").css("display", "block");
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$photoInfo = this.props.photoInfo,
			    name = _props$photoInfo.name,
			    image = _props$photoInfo.image;

			return _react2.default.createElement(
				'div',
				{ id: name + '-slide__frame', className: 'slide__frame' },
				_react2.default.createElement('img', { id: name + '-slide__photo', className: 'slide__photo',
					src: image,
					onLoad: this.handleImageLoaded.bind(this),
					onError: this.handleImageErrored.bind(this)
				}),
				_react2.default.createElement(_Loader2.default, { loaderId: "slide__loader" })
			);
		}
	}]);

	return Slide;
}(_react.Component);

exports.default = Slide;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shared/Test.js":
/*!****************************!*\
  !*** ./src/shared/Test.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ./Loader */ "./src/shared/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


//React Component imports


var Test = function (_Component) {
	_inherits(Test, _Component);

	function Test(props) {
		_classCallCheck(this, Test);

		return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
	}

	_createClass(Test, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'p',
					null,
					'My Loader isn\'t it great?'
				),
				_react2.default.createElement(_Loader2.default, null)
			);
		}
	}]);

	return Test;
}(_react.Component);

exports.default = Test;

/***/ }),

/***/ "./src/shared/actions/about_actions.js":
/*!*********************************************!*\
  !*** ./src/shared/actions/about_actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.add_photo = add_photo;
function add_photo(name, image, currentSlides) {
	return {
		type: 'ADD_PHOTO',
		currentSlides: currentSlides,
		photoInfo: {
			name: name,
			image: image
		}
	};
}

/***/ }),

/***/ "./src/shared/actions/contact_actions.js":
/*!***********************************************!*\
  !*** ./src/shared/actions/contact_actions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.store_message = store_message;
exports.redirect_check = redirect_check;
function store_message(message) {
	return {
		type: 'STORE_MESSAGE',
		message: message
	};
}

function redirect_check(redirect) {
	return {
		type: 'REDIRECT_CHECK',
		redirect: redirect
	};
}

/***/ }),

/***/ "./src/shared/actions/gallerySelector_actions.js":
/*!*******************************************************!*\
  !*** ./src/shared/actions/gallerySelector_actions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.store_timer = store_timer;
exports.clear_timer = clear_timer;
function store_timer(timer) {
	return {
		type: 'STORE_TIMER',
		timer: timer
	};
}

function clear_timer() {
	return {
		type: 'CLEAR_TIMER',
		timer: false
	};
}

/***/ }),

/***/ "./src/shared/actions/gallery_actions.js":
/*!***********************************************!*\
  !*** ./src/shared/actions/gallery_actions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.add_photo = add_photo;
exports.choose_gallery = choose_gallery;
function add_photo(name, image, currentSlides) {
	return {
		type: 'ADD_PHOTO',
		currentSlides: currentSlides,
		photoInfo: {
			name: name,
			image: image
		}
	};
}

function choose_gallery(gallery) {
	return {
		type: 'CHOOSE_GALLERY',
		gallery: gallery
	};
}

/***/ }),

/***/ "./src/shared/actions/header_actions.js":
/*!**********************************************!*\
  !*** ./src/shared/actions/header_actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mobile_header_status = mobile_header_status;
function mobile_header_status(mobileMenu) {
	return {
		type: 'MOBILE_HEADER_STATUS',
		mobileMenu: mobileMenu
	};
}

/***/ }),

/***/ "./src/shared/actions/home_actions.js":
/*!********************************************!*\
  !*** ./src/shared/actions/home_actions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.store_timer = store_timer;
exports.store_window_width = store_window_width;
exports.pause_slide_show = pause_slide_show;
function store_timer(intervalTimer) {
	return {
		type: 'STORE_TIMER',
		intervalTimer: intervalTimer
	};
}

function store_window_width(windowWidth) {
	return {
		type: 'STORE_WINDOW_WIDTH',
		windowWidth: windowWidth
	};
}

function pause_slide_show(pauseSlideShow) {
	return {
		type: 'PAUSE_SLIDE_SHOW',
		pauseSlideShow: pauseSlideShow
	};
}

/***/ }),

/***/ "./src/shared/actions/projector_actions.js":
/*!*************************************************!*\
  !*** ./src/shared/actions/projector_actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.store_current_slide_info = store_current_slide_info;
exports.store_current_slide_no = store_current_slide_no;
exports.increment_slide = increment_slide;
exports.decrement_slide = decrement_slide;
exports.pause_slide_show = pause_slide_show;
exports.store_timer = store_timer;
exports.load_new_slides = load_new_slides;
exports.unload_slides = unload_slides;
exports.show_filmstrip = show_filmstrip;
function store_current_slide_info(currentSlideInfo) {
	return {
		type: 'STORE_CURRENT_SLIDE_INFO',
		currentSlideInfo: currentSlideInfo
	};
}

function store_current_slide_no(currentSlideNo) {
	return {
		type: 'STORE_CURRENT_SLIDE_NO',
		currentSlideNo: currentSlideNo
	};
}

function increment_slide(currentSlideNo, totalNoSlides) {
	return {
		type: 'INCREMENT_SLIDE',
		currentSlideNo: currentSlideNo,
		totalNoSlides: totalNoSlides
	};
}

function decrement_slide(currentSlideNo, totalNoSlides) {
	return {
		type: 'DECREMENT_SLIDE',
		currentSlideNo: currentSlideNo,
		totalNoSlides: totalNoSlides
	};
}

function pause_slide_show(pauseSlideShow) {
	return {
		type: 'PAUSE_SLIDE_SHOW',
		pauseSlideShow: pauseSlideShow
	};
}

function store_timer(intervalTimer) {
	return {
		type: 'STORE_TIMER',
		intervalTimer: intervalTimer
	};
}

function load_new_slides(slides) {
	return {
		type: 'LOAD_NEW_SLIDES',
		slides: slides
	};
}

function unload_slides() {
	return {
		type: 'UNLOAD_SLIDES'
	};
}

function show_filmstrip(showFilmstrip) {
	return {
		type: 'SHOW_FILMSTRIP',
		showFilmstrip: showFilmstrip
	};
}

/***/ }),

/***/ "./src/shared/data/gallerySlides.js":
/*!******************************************!*\
  !*** ./src/shared/data/gallerySlides.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var gallerySlides = {
	action: [{
		name: "daylight",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/daylight.jpg */ "./assets/images/galleries/action/daylight.jpg")
	}, {
		name: "at-the-track",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/at-the-track.jpeg */ "./assets/images/galleries/action/at-the-track.jpeg")
	}, {
		name: "motorcross",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/motorcross.jpeg */ "./assets/images/galleries/action/motorcross.jpeg")
	}, {
		name: "ultimate-save",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/ultimate-save.jpeg */ "./assets/images/galleries/action/ultimate-save.jpeg")
	}, {
		name: "soccer-match",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/soccer-match.jpeg */ "./assets/images/galleries/action/soccer-match.jpeg")
	}, {
		name: "leap-of-faith",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/leap-of-faith.jpeg */ "./assets/images/galleries/action/leap-of-faith.jpeg")
	}, {
		name: "high-jump",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/high-jump.jpeg */ "./assets/images/galleries/action/high-jump.jpeg")
	}, {
		name: "kick-flip",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/kick-flip.jpeg */ "./assets/images/galleries/action/kick-flip.jpeg")
	}, {
		name: "big-wave-surfing",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/big-wave-surfing.jpeg */ "./assets/images/galleries/action/big-wave-surfing.jpeg")
	}, {
		name: "skate-park",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/skate-park.jpeg */ "./assets/images/galleries/action/skate-park.jpeg")
	}, {
		name: "skiing",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/skiing.jpeg */ "./assets/images/galleries/action/skiing.jpeg")
	}, {
		name: "puddle-jumping",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/puddle-jumping.jpeg */ "./assets/images/galleries/action/puddle-jumping.jpeg")
	}, {
		name: "beach-backflip",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/beach-backflip.jpeg */ "./assets/images/galleries/action/beach-backflip.jpeg")
	}, {
		name: "surf-splash",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/surf-splash.jpeg */ "./assets/images/galleries/action/surf-splash.jpeg")
	}, {
		name: "schrodingers-kickflip",
		image: __webpack_require__(/*! ../../../assets/images/galleries/action/schrodingers-kickflip.jpeg */ "./assets/images/galleries/action/schrodingers-kickflip.jpeg")
	}],
	events: [{
		name: "party-day",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/party-day.jpg */ "./assets/images/galleries/events/party-day.jpg")
	}, {
		name: "bride",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/bride.jpeg */ "./assets/images/galleries/events/bride.jpeg")
	}, {
		name: "bride-clouds",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/bride-clouds.jpg */ "./assets/images/galleries/events/bride-clouds.jpg")
	}, {
		name: "baby-sleeping-baby-baby-girl",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/baby-sleeping-baby-baby-girl.jpg */ "./assets/images/galleries/events/baby-sleeping-baby-baby-girl.jpg")
	}, {
		name: "birthday-girl",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/birthday-girl.jpeg */ "./assets/images/galleries/events/birthday-girl.jpeg")
	}, {
		name: "4th-birthday",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/4th-birthday.jpeg */ "./assets/images/galleries/events/4th-birthday.jpeg")
	}, {
		name: "pregnancy-announcement",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/pregnancy-announcement.jpeg */ "./assets/images/galleries/events/pregnancy-announcement.jpeg")
	}, {
		name: "graduating-class",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/graduating-class.jpeg */ "./assets/images/galleries/events/graduating-class.jpeg")
	}, {
		name: "birth-announcement",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/birth-announcement.jpeg */ "./assets/images/galleries/events/birth-announcement.jpeg")
	}, {
		name: "party-friends",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/party-friends.jpeg */ "./assets/images/galleries/events/party-friends.jpeg")
	}, {
		name: "wedding-day",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/wedding-day.jpeg */ "./assets/images/galleries/events/wedding-day.jpeg")
	}, {
		name: "first-birthday",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/first-birthday.jpeg */ "./assets/images/galleries/events/first-birthday.jpeg")
	}, {
		name: "graduate-celebrating",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/graduate-celebrating.jpeg */ "./assets/images/galleries/events/graduate-celebrating.jpeg")
	}, {
		name: "bride-and-groom",
		image: __webpack_require__(/*! ../../../assets/images/galleries/events/bride-and-groom.jpeg */ "./assets/images/galleries/events/bride-and-groom.jpeg")
	}],
	landscape: [{
		name: "arches-national-park",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/arches-national-park.jpg */ "./assets/images/galleries/landscape/arches-national-park.jpg")
	}, {
		name: "brooklyn-bridge",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/brooklyn-bridge.jpg */ "./assets/images/galleries/landscape/brooklyn-bridge.jpg")
	}, {
		name: "calm-clouds",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/calm-clouds.jpg */ "./assets/images/galleries/landscape/calm-clouds.jpg")
	}, {
		name: "boathouse-cottage",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/boathouse-cottage.jpg */ "./assets/images/galleries/landscape/boathouse-cottage.jpg")
	}, {
		name: "devils-bridge",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/devils-bridge.jpeg */ "./assets/images/galleries/landscape/devils-bridge.jpeg")
	}, {
		name: "lake-peir",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/lake-peir.jpeg */ "./assets/images/galleries/landscape/lake-peir.jpeg")
	}, {
		name: "sunset-poppies",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/sunset-poppies.jpg */ "./assets/images/galleries/landscape/sunset-poppies.jpg")
	}, {
		name: "sunset-pier",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/sunset-pier.jpeg */ "./assets/images/galleries/landscape/sunset-pier.jpeg")
	}, {
		name: "river-reflection",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/river-reflection.jpeg */ "./assets/images/galleries/landscape/river-reflection.jpeg")
	}, {
		name: "dusk-in-africa",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/dusk-in-africa.jpeg */ "./assets/images/galleries/landscape/dusk-in-africa.jpeg")
	}, {
		name: "marsh-peir",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/marsh-peir.jpeg */ "./assets/images/galleries/landscape/marsh-peir.jpeg")
	}, {
		name: "nyc-skyline",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/nyc-skyline.jpeg */ "./assets/images/galleries/landscape/nyc-skyline.jpeg")
	}, {
		name: "night-dolphins",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/night-dolphins.jpeg */ "./assets/images/galleries/landscape/night-dolphins.jpeg")
	}, {
		name: "flatiron-building",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/flatiron-building.jpeg */ "./assets/images/galleries/landscape/flatiron-building.jpeg")
	}, {
		name: "mountain-lake",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/mountain-lake.jpeg */ "./assets/images/galleries/landscape/mountain-lake.jpeg")
	}, {
		name: "nyc-skyline2",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/nyc-skyline2.jpeg */ "./assets/images/galleries/landscape/nyc-skyline2.jpeg")
	}, {
		name: "purple-flowers",
		image: __webpack_require__(/*! ../../../assets/images/galleries/landscape/purple-flowers.jpeg */ "./assets/images/galleries/landscape/purple-flowers.jpeg")
	}],
	portrait: [{
		name: "beautiful-blur",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/beautiful-blur.jpg */ "./assets/images/galleries/portrait/beautiful-blur.jpg")
	}, {
		name: "beautiful-casual",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/beautiful-casual.jpg */ "./assets/images/galleries/portrait/beautiful-casual.jpg")
	}, {
		name: "blonde-close-up",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/blonde-close-up.jpg */ "./assets/images/galleries/portrait/blonde-close-up.jpg")
	}, {
		name: "carnival-night",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/carnival-night.jpg */ "./assets/images/galleries/portrait/carnival-night.jpg")
	}, {
		name: "happy-girl",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/happy-girl.jpg */ "./assets/images/galleries/portrait/happy-girl.jpg")
	}, {
		name: "black-and-white-guy",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/black-and-white-guy.jpeg */ "./assets/images/galleries/portrait/black-and-white-guy.jpeg")
	}, {
		name: "young-monks",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/young-monks.jpeg */ "./assets/images/galleries/portrait/young-monks.jpeg")
	}, {
		name: "blonde-close-up-bokeh",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/blonde-close-up-bokeh.jpeg */ "./assets/images/galleries/portrait/blonde-close-up-bokeh.jpeg")
	}, {
		name: "close-up-guy",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/close-up-guy.jpeg */ "./assets/images/galleries/portrait/close-up-guy.jpeg")
	}, {
		name: "hiding-woman",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/hiding-woman.jpg */ "./assets/images/galleries/portrait/hiding-woman.jpg")
	}, {
		name: "black-and-white-close-up-woman",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/black-and-white-close-up-woman.jpeg */ "./assets/images/galleries/portrait/black-and-white-close-up-woman.jpeg")
	}, {
		name: "girl-rabbit-friendship",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/girl-rabbit-friendship.jpeg */ "./assets/images/galleries/portrait/girl-rabbit-friendship.jpeg")
	}, {
		name: "red-haired-child",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/red-haired-child.jpeg */ "./assets/images/galleries/portrait/red-haired-child.jpeg")
	}, {
		name: "suit-guy",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/suit-guy.jpeg */ "./assets/images/galleries/portrait/suit-guy.jpeg")
	}, {
		name: "woman-dress",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/woman-dress.jpeg */ "./assets/images/galleries/portrait/woman-dress.jpeg")
	}, {
		name: "close-up-woman-bokeh",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/close-up-woman-bokeh.jpeg */ "./assets/images/galleries/portrait/close-up-woman-bokeh.jpeg")
	}, {
		name: "suit1",
		image: __webpack_require__(/*! ../../../assets/images/galleries/portrait/suit1.jpeg */ "./assets/images/galleries/portrait/suit1.jpeg")
	}]
};

exports.default = gallerySlides;

/***/ }),

/***/ "./src/shared/data/homeSlides.js":
/*!***************************************!*\
  !*** ./src/shared/data/homeSlides.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var homeSlides = [{
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/lens-on-angle.jpg */ "./assets/images/Galleries/home/lens-on-angle.jpg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/stary-lens.jpg */ "./assets/images/Galleries/home/stary-lens.jpg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/apeture-reflection.jpg */ "./assets/images/Galleries/home/apeture-reflection.jpg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/lens-close-up.jpg */ "./assets/images/Galleries/home/lens-close-up.jpg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/lens-on-ground.jpeg */ "./assets/images/Galleries/home/lens-on-ground.jpeg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/landscape-shoot.jpeg */ "./assets/images/Galleries/home/landscape-shoot.jpeg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/apeture-lights.jpeg */ "./assets/images/Galleries/home/apeture-lights.jpeg")
}, {
	imgSrc: __webpack_require__(/*! ../../../assets/images/Galleries/home/at-work.jpeg */ "./assets/images/Galleries/home/at-work.jpeg")
}];

exports.default = homeSlides;

/***/ }),

/***/ "./src/shared/reducers/about_reducers.js":
/*!***********************************************!*\
  !*** ./src/shared/reducers/about_reducers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
	slides: [{
		name: 'above-the-clouds',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/above-the-clouds.jpeg */ "./assets/images/galleries/photographer/above-the-clouds.jpeg")
	}, {
		name: 'beach-shoot',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/beach-shoot.jpg */ "./assets/images/galleries/photographer/beach-shoot.jpg")
	}, {
		name: 'field-shoot',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/field-shoot.jpeg */ "./assets/images/galleries/photographer/field-shoot.jpeg")
	}, {
		name: 'in-and-out-of-focus',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/in-and-out-of-focus.jpeg */ "./assets/images/galleries/photographer/in-and-out-of-focus.jpeg")
	}, {
		name: 'smoke-cloud',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/smoke-cloud.jpeg */ "./assets/images/galleries/photographer/smoke-cloud.jpeg")
	}, {
		name: 'at-dusk',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/at-dusk.jpeg */ "./assets/images/galleries/photographer/at-dusk.jpeg")
	}],
	photoInfo: {
		name: 'above-the-clouds',
		image: __webpack_require__(/*! ../../../assets/images/galleries/photographer/above-the-clouds.jpeg */ "./assets/images/galleries/photographer/above-the-clouds.jpeg")
	}
};

function about_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_PHOTO':
			var photoInfo = action.photoInfo;
			var slides = [].concat(_toConsumableArray(actions.currentSlides));
			slides.push(photoInfo);
			return _extends({}, state, { slides: slides });
		default:
			return state;
	}
}

exports.default = about_reducers;

/***/ }),

/***/ "./src/shared/reducers/contact_reducers.js":
/*!*************************************************!*\
  !*** ./src/shared/reducers/contact_reducers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
	message: ['', ''],
	redirect: false
};

function contact_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'STORE_MESSAGE':
			var message = action.message;
			return _extends({}, state, { message: message });
		case 'REDIRECT_CHECK':
			var redirect = action.redirect;
			return _extends({}, state, { redirect: redirect });
		default:
			return state;
	}
}

exports.default = contact_reducers;

/***/ }),

/***/ "./src/shared/reducers/footer_reducers.js":
/*!************************************************!*\
  !*** ./src/shared/reducers/footer_reducers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
	socialMediaLinks: [{
		name: "FaceBook",
		link: "https://www.facebook.com/bokehbestphotography",
		icon: "fab fa-facebook-square",
		font_color: "#FFFFFF",
		bg_color1: "#3B5998",
		bg_color2: "#245acd"
	}, {
		name: "Flickr",
		link: "https://www.flickr.com/photos/david_bokeh/",
		icon: "fab fa-flickr",
		font_color: "#FFFFFF",
		bg_color1: "#FE0883",
		bg_color2: "#128fdc"
	}, {
		name: "Instagram",
		link: "https://www.instagram.com/bokehbestphotography/",
		icon: "fab fa-instagram",
		font_color: "#FFFFFF",
		bg_color1: "#f17530",
		bg_color2: "#7a38ab"
	}, {
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/davidbokeh/",
		icon: "fab fa-linkedin",
		font_color: "#FFFFFF",
		bg_color1: "#0077b5",
		bg_color2: "#56b9ee"
	}]
};

function footer_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'SET_FOOTER_LINKS':
			var links = action.links;
			return _extends({}, state, { links: links });
		default:
			return state;
	}
}

exports.default = footer_reducers;

/***/ }),

/***/ "./src/shared/reducers/gallerySelector_reducers.js":
/*!*********************************************************!*\
  !*** ./src/shared/reducers/gallerySelector_reducers.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {};

function gallerySelector_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'STORE_TIMER':
			var timer = action.timer;
			return _extends({}, state, { timer: timer });
		case 'CLEAR_TIMER':
			timer = action.timer;
			return _extends({}, state, { timer: timer });
		default:
			return state;
	}
}

exports.default = gallerySelector_reducers;

/***/ }),

/***/ "./src/shared/reducers/gallery_reducers.js":
/*!*************************************************!*\
  !*** ./src/shared/reducers/gallery_reducers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gallerySlides = __webpack_require__(/*! ../data/gallerySlides */ "./src/shared/data/gallerySlides.js");

var _gallerySlides2 = _interopRequireDefault(_gallerySlides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {};

function about_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_PHOTO':
			var photoInfo = action.photoInfo;
			var slides = [].concat(_toConsumableArray(actions.currentSlides));
			slides.push(photoInfo);
			return _extends({}, state, { slides: slides });
		case 'CHOOSE_GALLERY':
			var gallery = action.gallery;
			slides = [].concat(_toConsumableArray(_gallerySlides2.default[gallery]));
			return _extends({}, state, { slides: slides });
		default:
			return state;
	}
}

exports.default = about_reducers;

/***/ }),

/***/ "./src/shared/reducers/header_reducers.js":
/*!************************************************!*\
  !*** ./src/shared/reducers/header_reducers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
	linkInfo: [{
		key: 'navLink-home',
		path: '/',
		name: 'Home'
	}, {
		key: 'navLink-gallery',
		path: '/gallery',
		name: 'Photo Gallery'
	}, {
		key: 'navLink-about',
		path: '/about',
		name: 'About Bokeh'
	}, {
		key: 'navLink-contact',
		path: '/contact',
		name: 'Contact Us'
	}, {
		key: 'navLink-test',
		path: '/test',
		name: 'Test Page'
	}],
	mobileMenu: false
};

function header_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'MOBILE_HEADER_STATUS':
			var mobileMenu = action.mobileMenu;
			return _extends({}, state, { mobileMenu: mobileMenu });
		default:
			return state;
	}
}

exports.default = header_reducers;

/***/ }),

/***/ "./src/shared/reducers/home_reducers.js":
/*!**********************************************!*\
  !*** ./src/shared/reducers/home_reducers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
	pauseSlideShow: false
};

function home_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'STORE_TIMER':
			var intervalTimer = action.intervalTimer;
			return _extends({}, state, { intervalTimer: intervalTimer });
		case 'STORE_WINDOW_WIDTH':
			var windowWidth = action.windowWidth;
			return _extends({}, state, { windowWidth: windowWidth });
		case 'PAUSE_SLIDE_SHOW':
			var pauseSlideShow = action.pauseSlideShow;
			return _extends({}, state, { pauseSlideShow: pauseSlideShow });
		default:
			return state;
	}
}

exports.default = home_reducers;

/***/ }),

/***/ "./src/shared/reducers/projector_reducers.js":
/*!***************************************************!*\
  !*** ./src/shared/reducers/projector_reducers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
	currentSlideNo: 0,
	pauseSlideShow: false,
	showFilmstrip: false
};

function projector_reducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'STORE_CURRENT_SLIDE_INFO':
			var currentSlideInfo = action.currentSlideInfo;
			return _extends({}, state, { currentSlideInfo: currentSlideInfo });
		case 'STORE_CURRENT_SLIDE_NO':
			var currentSlideNo = action.currentSlideNo;
			return _extends({}, state, { currentSlideNo: currentSlideNo });
		case 'INCREMENT_SLIDE':
			currentSlideNo = action.currentSlideNo;
			var totalNoSlides = action.totalNoSlides;
			if (currentSlideNo == totalNoSlides - 1) {
				currentSlideNo = 0;
			} else {
				currentSlideNo += 1;
			}
			return _extends({}, state, { currentSlideNo: currentSlideNo });
		case 'DECREMENT_SLIDE':
			currentSlideNo = action.currentSlideNo;
			totalNoSlides = action.totalNoSlides;
			if (currentSlideNo == 0) {
				currentSlideNo = totalNoSlides - 1;
			} else {
				currentSlideNo -= 1;
			}
			return _extends({}, state, { currentSlideNo: currentSlideNo });
		case 'PAUSE_SLIDE_SHOW':
			var pauseSlideShow = action.pauseSlideShow;
			return _extends({}, state, { pauseSlideShow: pauseSlideShow });
		case 'STORE_TIMER':
			var intervalTimer = action.intervalTimer;
			return _extends({}, state, { intervalTimer: intervalTimer });
		case 'LOAD_NEW_SLIDES':
			var slides = action.slides;
			currentSlideInfo = slides[0];
			currentSlideNo = 0;
			return _extends({}, state, { slides: slides, currentSlideInfo: currentSlideInfo, currentSlideNo: currentSlideNo });
		case 'UNLOAD_SLIDES':
			var tempState = _extends({}, state);
			delete tempState['currentSlideInfo'];
			delete tempState['slides'];
			return _extends({}, tempState);
		case 'SHOW_FILMSTRIP':
			var showFilmstrip = action.showFilmstrip;
			return _extends({}, state, { showFilmstrip: showFilmstrip });
		default:
			return state;
	}
}

// currentSlideInfo: {
// 	name: 'above-the-clouds',
// 	image: require('../../../assets/images/galleries/photographer/above-the-clouds.jpeg')
// },

exports.default = projector_reducers;

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _About = __webpack_require__(/*! ./About */ "./src/shared/About.js");

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(/*! ./Contact */ "./src/shared/Contact.js");

var _Contact2 = _interopRequireDefault(_Contact);

var _Gallery = __webpack_require__(/*! ./Gallery */ "./src/shared/Gallery.js");

var _Gallery2 = _interopRequireDefault(_Gallery);

var _Home = __webpack_require__(/*! ./Home */ "./src/shared/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _Test = __webpack_require__(/*! ./Test */ "./src/shared/Test.js");

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
	path: '/',
	exact: true,
	component: _Home2.default
}, {
	path: '/index.html',
	exact: true,
	component: _Home2.default
}, {
	path: '/about',
	exact: false,
	component: _About2.default
}, {
	path: '/contact',
	exact: true,
	component: _Contact2.default
}, {
	path: '/contact/:status',
	exact: false,
	component: _Contact2.default
}, {
	path: '/gallery',
	exact: false,
	component: _Gallery2.default
}, {
	path: '/test',
	exact: false,
	component: _Test2.default
}]; //React Component imports
exports.default = routes;

/***/ }),

/***/ "./src/shared/store.js":
/*!*****************************!*\
  !*** ./src/shared/store.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _about_reducers = __webpack_require__(/*! ./reducers/about_reducers */ "./src/shared/reducers/about_reducers.js");

var _about_reducers2 = _interopRequireDefault(_about_reducers);

var _contact_reducers = __webpack_require__(/*! ./reducers/contact_reducers */ "./src/shared/reducers/contact_reducers.js");

var _contact_reducers2 = _interopRequireDefault(_contact_reducers);

var _footer_reducers = __webpack_require__(/*! ./reducers/footer_reducers */ "./src/shared/reducers/footer_reducers.js");

var _footer_reducers2 = _interopRequireDefault(_footer_reducers);

var _gallery_reducers = __webpack_require__(/*! ./reducers/gallery_reducers */ "./src/shared/reducers/gallery_reducers.js");

var _gallery_reducers2 = _interopRequireDefault(_gallery_reducers);

var _gallerySelector_reducers = __webpack_require__(/*! ./reducers/gallerySelector_reducers */ "./src/shared/reducers/gallerySelector_reducers.js");

var _gallerySelector_reducers2 = _interopRequireDefault(_gallerySelector_reducers);

var _header_reducers = __webpack_require__(/*! ./reducers/header_reducers */ "./src/shared/reducers/header_reducers.js");

var _header_reducers2 = _interopRequireDefault(_header_reducers);

var _home_reducers = __webpack_require__(/*! ./reducers/home_reducers */ "./src/shared/reducers/home_reducers.js");

var _home_reducers2 = _interopRequireDefault(_home_reducers);

var _projector_reducers = __webpack_require__(/*! ./reducers/projector_reducers */ "./src/shared/reducers/projector_reducers.js");

var _projector_reducers2 = _interopRequireDefault(_projector_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Add additional reducers in here to be combined into one reducer
var rootReducer = (0, _redux.combineReducers)({
	about: _about_reducers2.default,
	contact: _contact_reducers2.default,
	footer: _footer_reducers2.default,
	gallery: _gallery_reducers2.default,
	gallerySelector: _gallerySelector_reducers2.default,
	header: _header_reducers2.default,
	home: _home_reducers2.default,
	projector: _projector_reducers2.default
});

var store = (0, _redux.createStore)(rootReducer,
// if redex devtools extension is on the window object run the devtools function
false && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

exports.default = store;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "circletype":
/*!*****************************!*\
  !*** external "circletype" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("circletype");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-static-gzip":
/*!**************************************!*\
  !*** external "express-static-gzip" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-static-gzip");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlQWJvdXRNb2RpZmllck9uIiwidG9nZ2xlQWJvdXRNb2RpZmllck9mZiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlcyIsImFib3V0IiwiQ29tcG9uZW50Iiwic3RhdGVUb1Byb3BzIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbmRleCIsImltYWdlIiwiZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlciIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsInNsaWRlTm8iLCJzdG9yZV9jdXJyZW50X3NsaWRlX25vIiwidXBkYXRlU2xpZGVTaG93Iiwic2hpZnRCeSIsInRyYXZlbERpc3RhbmNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldFdpZHRoIiwicHJvcG9zZWRQb3NpdGlvbiIsInBhcnNlSW50IiwiZmlsbXN0cmlwUG9zaXRpb24iLCJsZWZ0QXJyb3dQb3NpdGlvbiIsInJpZ2h0QXJyb3dQb3NpdGlvbiIsImZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlnaGxpZ2h0RmlsbXN0cmlwQ29udHJvbHMiLCJtYXBTbGlkZXNUb0ZpbG1zdHJpcCIsImZpbG1zdHJpcExlZnQiLCJmaWxtc3RyaXBSaWdodCIsIkZvb3RlciIsImFkZExpc3RlbmVycyIsImZvb3RlciIsInNvY2lhbE1lZGlhTGlua3MiLCJzb2NpYWxNZWRpYUxpbmtzSW5mbyIsImZvckVhY2giLCJmb250X2NvbG9yIiwiYmdfY29sb3IxIiwiYmdfY29sb3IyIiwiaG92ZXIiLCJob3Zlck9uIiwiaG92ZXJPZmYiLCJsaW5rIiwiaWNvbiIsImdhbGxlcnlBY3Rpb25zIiwiR2FsbGVyeSIsImNsb3NlR2FsbGVyeSIsImdhbGxlcnkiLCJjaG9vc2VfZ2FsbGVyeSIsInVubG9hZF9zbGlkZXMiLCJHYWxsZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5U2VsZWN0b3JMb2FkIiwiY2xlYXJJbnRlcnZhbCIsImdhbGxlcnlTZWxlY3RvciIsInRpbWVyIiwiZ2FsbGVyeVNlbGVjdG9yUmVzZXQiLCJnYWxsZXJ5U2VsZWN0b3JJZHMiLCJjb250YWluZXJJZCIsImdhbGxlcnlTZWxlY3RvcklkIiwiY291bnRlciIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3RvcmVfdGltZXIiLCJnYWxsZXJ5TmFtZSIsImhvdmVySW4iLCJob3Zlck91dCIsImNsaWNrIiwiZ29Ub0dhbGxlcnkiLCJvcGVuR2FsbGVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhlYWRlciIsInRvZ2dsZU1vYmlsZU1lbnVPdXQiLCJtb2JpbGVfaGVhZGVyX3N0YXR1cyIsInRvZ2dsZU1vYmlsZU1lbnVJbiIsImxpbmtJbmZvIiwia2V5IiwicHVyZSIsIkhvbWUiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsInNsaWRlU2hvdyIsInRvZ2dsZUhvbWVNb2RpZmllck9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNpcmNsZVR5cGUiLCJyYWRpdXMiLCJ0b2dnbGVIb21lTW9kaWZpZXJPZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFNsaWRlU2hvdyIsInN0b3JlX3dpbmRvd193aWR0aCIsImlubmVyV2lkdGgiLCJpbnRlcnZhbFRpbWVyIiwiaG9tZSIsImhvbWVTbGlkZXMiLCJpbWdTcmMiLCJjb3VudCIsInBhdXNlU2xpZGVTaG93IiwiY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSIsIndpbmRvd1dpZHRoIiwicGF1c2Vfc2xpZGVfc2hvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvYWRlciIsImxvYWRlcklkIiwiUHJvamVjdG9yIiwiZG93bkFycm93VmlzaWJpbGl0eSIsImxvYWRQcm9qZWN0b3IiLCJhdXRvUnVuUHJvamVjdG9yIiwic2hvd19maWxtc3RyaXAiLCJjdXJyZW50U2xpZGVObyIsImluY3JlbWVudF9zbGlkZSIsImRlY3JlbWVudF9zbGlkZSIsImZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyIiwic3RvcmVfY3VycmVudF9zbGlkZV9pbmZvIiwibG9hZF9uZXdfc2xpZGVzIiwidW5kZWZpbmVkIiwibmV4dFNsaWRlIiwicHJvamVjdG9yQm94V2lkdGgiLCJjYWxjdWxhdGVkV2lkdGgiLCJzaG93RmlsbXN0cmlwIiwiY3VycmVudFNsaWRlSW5mbyIsInNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJ1bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJzdHlsZUZvciIsInByZXZpb3VzU2xpZGUiLCJwcm9qZWN0b3JEb3duSGFuZGxlciIsInBhdXNlQnV0dG9uSGFuZGxlciIsIlNsaWRlIiwic2V0U3R5bGVzIiwicmVtb3ZlU3R5bGVzIiwicGhvdG9JbmZvIiwiVGVzdCIsImFkZF9waG90byIsImN1cnJlbnRTbGlkZXMiLCJjbGVhcl90aW1lciIsInRvdGFsTm9TbGlkZXMiLCJnYWxsZXJ5U2xpZGVzIiwiYWN0aW9uIiwiZXZlbnRzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJpbml0aWFsU3RhdGUiLCJhYm91dF9yZWR1Y2VycyIsInB1c2giLCJjb250YWN0X3JlZHVjZXJzIiwiZm9vdGVyX3JlZHVjZXJzIiwibGlua3MiLCJnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMiLCJoZWFkZXJfcmVkdWNlcnMiLCJob21lX3JlZHVjZXJzIiwicHJvamVjdG9yX3JlZHVjZXJzIiwidGVtcFN0YXRlIiwicm9vdFJlZHVjZXIiLCJnYWxsZXJ5X3JlZHVjZXJzIiwiX19pc0Jyb3dzZXJfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Rjs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7Ozs7Ozs7QUNB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Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiOyIsImNvbnN0IGNsaWVudCA9IHtcclxuXHR1c2VyOiAnb3Jzb24xMDhAZ21haWwuY29tJyxcclxuXHRpZDogJzU1NzM0NjcxODY5MC1jaGQxZWYxY2UwdGpqbmgxN211cWQwMWRqZmk2b201by5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcblx0c2VjcmV0OiAnNmhTRmoxdWRCbHRNWGswZ0pRTmhOYTh3JyxcclxuXHRyZWZyZXNoVG9rZW46ICcxL3JuVlZaZzRpWTIyQUJDd2trdUpqVlk4TjBBaGRuanVLVHRUaGo3cFlROUlqTWJkYWFvSG9OTVpxYm5JNWlpejgnLFxyXG5cdGFjZXNzVG9rZW46ICd5YTI5Lkdsc0JCblRRXzVseWtHM3ZmakRWamRVMHFReTdDYjdvQjhlWjhfU2xOcDg2dW5Ba1JrS1pDc0ltSmZDandyem9CUmM3UEQwd0ctMFhyWlFES2tQY0dpdmNzQjRad1V0WVhDN3RtUWRmNkthMFdzcUFtWEI4akV1YTBqaWsnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckVtYWlsID0gXCJhc3RhdG9uMTA4QG91dGxvb2suY29tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCIvL2V4cHJlc3MgaW1wb3J0XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG4vL21pZGRsZXdhcmUgaW1wb3J0c1xyXG5pbXBvcnQgZXhwcmVzc1N0YXRpY0d6aXAgZnJvbSBcImV4cHJlc3Mtc3RhdGljLWd6aXBcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9zaGFyZWQvcm91dGVzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCc7XHJcblxyXG4vL2xvY2FsIGltcG9ydHNcclxuaW1wb3J0IGNsaWVudCwgeyB1c2VyRW1haWwgfSBmcm9tICcuLi8uLi9vYXV0aC9jbGllbnREYXRhJztcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZSgnLycsIGV4cHJlc3NTdGF0aWNHemlwKFwicHVibGljL1wiKSk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdGxldCBkZXN0ID0gcmVxLnVybCA9PSAnL2luZGV4Lmh0bWwnID8gJy8nIDogcmVxLnVybDtcclxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cclxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17ZGVzdH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdDxBcHAgLz4gXHJcblx0XHRcdDwvU3RhdGljUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpXHJcblxyXG5cdHJlcy5zZW5kKGBcclxuXHRcdDxodG1sIGxhbmc9XCJlbi11c1wiPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cclxuXHRcdFx0XHQ8dGl0bGU+Qm9rZWggQmVzdCBQaG90b2dyYXBoeSBJbmMuPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JHtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby5wbmcnKX0+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMi4wL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWhXVmpmbHdGeEw2c056bnRpaDI3YmZ4a3IyN1BtYmJLL2lTdkorYTQrMG93WHE3OXYrbHNGa1c1NGJPR2JpRFFcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxyXG5cdFx0XHRcdDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJhcHBcIj4ke21hcmt1cH08L2Rpdj5cclxuXHRcdFx0PC9ib2R5PlxyXG5cdFx0PC9odG1sPlxyXG5cdGApXHJcbn0pXHJcblxyXG5hcHAucG9zdCgnL2NvbnRhY3QnLCAocmVxLCByZXMpID0+IHtcclxuXHRsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcblx0XHRzZXJ2aWNlOiAnZ21haWwnLFxyXG5cdFx0aG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuXHRcdGF1dGg6IHtcclxuXHRcdFx0dHlwZTogJ09BdXRoMicsXHJcblx0XHRcdHVzZXI6IGNsaWVudC51c2VyLFxyXG5cdFx0XHRjbGllbnRJZDogY2xpZW50LmlkLFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IGNsaWVudC5zZWNyZXQsXHJcblx0XHRcdHJlZnJlc2hUb2tlbjogY2xpZW50LnJlZnJlc2hUb2tlbixcclxuXHRcdFx0YWNjZXNzVG9rZW46IGNsaWVudC5hY2Nlc3NUb2tlblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgbWFpbE9wdGlvbnMgPSB7XHJcblx0XHRmcm9tOiBgJHtyZXEuYm9keS5uYW1lfSA8JHtjbGllbnQudXNlcn0+YCxcclxuXHRcdHRvOiAnYXN0YXRvbjEwOEBvdXRsb29rLmNvbScsXHJcblx0XHRzdWJqZWN0OiAnQ29udGFjdCBmcm9tIEJva2VoIEJlc3QgUGhvdG8gd2Vic2l0ZScsXHJcblx0XHRodG1sOiAgYDwhRE9DVFlQRSA+XHJcblx0XHRcdFx0PGh0bWwgbGFuZz1cInVzLWVuXCI+XHJcblx0XHRcdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHRcdFx0PG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIj5cclxuXHRcdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aDsgaW5pdGlhbC1zY2FsZT0xLjA7IG1heGltdW0tc2NhbGU9MS4wOyB1c2VyLXNjYWxhYmxlPW5vO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGl0bGU+Q29vbCBFbWFpbCBicm88L3RpdGxlPlxyXG5cdFx0XHRcdFx0PC9oZWFkPlxyXG5cdFx0XHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkVtYWlsIEZyb20gJHtyZXEuYm9keS5uYW1lfSBhdCAke3JlcS5ib2R5LmVtYWlsfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHA+bWVzc3NhZ2UgZnJvbSAke3JlcS5ib2R5Lm5hbWV9IHJlYWRzOiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5tZXNzYWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm5hbWV9LCAke3JlcS5ib2R5Lm51bWJlcn0gJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9ib2R5PlxyXG5cdFx0XHRcdDwvaHRtbD5gXHJcblx0fVxyXG5cclxuXHR0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVyciwgaW5mbykgPT4ge1xyXG5cdFx0aWYoZXJyKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9mYWlsJyk7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFbWFpbCBzZW50Jyk7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3Qvc3VjY2VzcycpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICcrcG9ydCkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWJvdXRBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9hYm91dF9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9uKClcclxuXHRcdC8vIHRoaXMucHJvcHMuYWN0aW9ucy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQWJvdXQgcHJvcHMgYXJlJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9mZigpXHJcblx0fVxyXG5cclxuXHR0b2dnbGVBYm91dE1vZGlmaWVyT24oKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWFib3V0Jyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5hYm91dC5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJhYm91dF9fcGFnZS1oZWFkZXJcIj5PdXIgU3Rvcnk8L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiYWJvdXRcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+RGF2aWQgQm9rZWggPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBhIHNhZ2UgbW93ZXIgZ29hdCwgcmFjY29vbnMgcmh1YmFyYiBvdXRob3VzZSBhLCBhcHBsZXMgYmVycmllcyBjb3JuLiBLaWRuZXkgYmVhbnMgb3N0cmljaCB0cnVja3MuIEluIHRoZSBzdHJhdyByYWluIGJhcnJlbHMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyB3ZWxsIGtub3duIGZvciByYWtlcyBwbG93cy4gSm9obiBEZWVyZSBiZWVzLCBwYXJzbGV5IHN3ZWV0IGNvcm4gYXQsIHBvcmt5IHBpZyBzaG92ZWxzLiB2ZXRlcmluYXJpYW4gYmx1ZSBiZXJyaWVzIGNhdHRsZSBqZWxseSBjYW5uaW5nLiBCbHVlIGJlcnJpZXMgcGlnZW9ucyBidXp6IGFuZCBiZWFuIHByYWlyaWUgZG9ncyBuYWlscyBhdCBlc3QuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gLiBBdWdlcnMgb2F0cyBoZW4gY293cGllcy4gQXBwbGVzIGR1Y2suXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5PdXIgV29yayA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIHN0cmF3LCBxdWFpbCBhIG9zdHJpY2hlcyBkb25rZXksIGhheSBob29rIGN1Y3VtYmVycy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuIFNob3ZlbHMgYXQgcmFrZXMgcGxvd3MuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gSGF5YmluZSBjYXJyb3RzIHNveWJlYW5zLCBvd2xzIGR1Y2sgcmFpc2luZyBvciwgY2hlZXAgaW4gcGxvd3MuIE91dGhvdXNlIGF0IG5haWxzIG1vd2VyLiBGb3JhZ2UgSGFydmVzdGVyLCBiZWFuIGFuZCBTaWxhZy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJhYm91dF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Bd2FyZHMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8bGk+Q3VsdGl2YXRvciBicnVzc2VsIHNwcm91dHMgaGFycm93cywgY2VsZXJ5IGRyZWFkIHdpdGgga2FsZSBhdWdlcnMgaGFycm93cy4gVmV0ZXJpbmFyaWFuIGF0IFNlZWRlciBlZ2dzIHdpdGggd2F0ZXJtZWxvbiBvc3RyaWNoZXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPkNvbyB3aXRoIHJhYmJpdHMgZWN0LiBHcmFwZXMgbmVzdCBwaXRjaCBmb3JrIGFuIHBsb3dzIG1hcGxlIHN5cnVwIHllYXJsaW5ncywgcXVpbHQgc3F1ZWFrIGRvZ2dpZXMuIExhbWIgcGlnIHJvb3N0ZXIgc2hlZXAuIFV0dGVycyBhcmUgd2VhdGhlcnZhbmUgZm9hbCBlc3QuIDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Hb2JibGUgZmVlZCwgamVsbHkgcGVwcGVycyBhdCBwbG93IGJhc2lsIHN3YXRoZXIsIGNhdCB3ZWF0aGVydmFuZSBncmFpbiB0cnVja3MsIGhvb3QgcG9ueSByb2JpbnMgcGVhY29ja3MgYW4ga2FsZS4gUm9vc3RlciBjZWxlcnkgcGluZWFwcGxlcyBmZXJ0aWxpemVyLjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGFib3V0LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0YWJvdXQsIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgYWJvdXRBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBYm91dCk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0Um91dGUsXHJcblx0UmVkaXJlY3QsXHJcblx0U3dpdGNoXHJcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbi8vUm91dGVzIGltcG9ydFxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInBhZ2Utd3JhcHBlclwiIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0XHQ8U3dpdGNoPlxyXG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDLCAuLi5yZXN0IH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRleGFjdD17ZXhhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QyB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX0gXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N3aXRjaD5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vUmVhY3QgQ29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnRzIGltcG9ydHNcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb250YWN0X2FjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdHRoaXMuY29uZmlybU1lc3NhZ2VCb3goKTtcclxuXHRcdC8vdGltZW91dCBuZWVkZWQgZm9yIHJlZGlyZWN0IHRvIHN0eWxlIG1haW4gcHJvcGVybHkuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdHRoaXMucmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQ29udGFjdCBwcm9wcyBpczogJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5tb3VudGluZyBDb250YWN0XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIHdvcmtlZCByZWRpcmVjdGluZycpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayh0cnVlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyBtYXkgbm90IGhhdmUgd29ya2VkIHNldHRpbmcgcmVkaXJlY3QgdG8gZmFsc2UnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbmZpcm1NZXNzYWdlQm94KCkge1xyXG5cdFx0Ly9jaGVja3Mgc3RhdHVzIG9mIHNlbnQgbWVzc2FnZXMgYW5kIGRpc3BsYXlzIGEgbm90aWNlIGFjY29yZGluZ2x5XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0IGNvbmZpcm1NZXNzYWdlQm94XCIpXHJcblx0XHRsZXQgc3RhdHVzID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzKXtcclxuXHRcdFx0aWYoc3RhdHVzID09PSAnc3VjY2Vzcycpe1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgU2VudCEhJywgJ0lcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nXSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBzdWNjZXNzIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgRXJyb3IhIScsICdQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiddKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgZmFpbCBcIiwgdGhpcy5wcm9wcy5jb250YWN0KTsgfSwgMTAwMCk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHR9LCA2MDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPbigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4nKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4tLWNvbnRhY3QnKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUxvYWRlclN0eWxlcygpIHtcclxuXHRcdCQoJyNsb2FkZXJfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIxJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmNvbnRhY3QucmVkaXJlY3QgPT09IHRydWUpe1xyXG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPScvY29udGFjdCcgLz5cclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4nIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMgP1xyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNvbmZpcm1fX2NvbnRhaW5lclwiIGNsYXNzTmFtZT0nY29uZmlybV9fY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbmZpcm1fX2lubmVyJz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nY29uZmlybV9faGVhZGVyJz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMF19PC9oMj5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdjb25maXJtX190ZXh0Jz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMV19PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLW91dHRlci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1pbm5lci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFjdF9faGVhZGVyJz5HZXQgSW4gVG91Y2ggV2l0aCBVczwvaDE+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5JZiB5b3UncmUgdGhpbmtpbmcgYWJvdXQgaGlyaW5nIGEgcGhvdG9ncmFwaGVyIGZvciBhIHNob290LCB3ZSB3b3VsZCBsb3ZlIHRvIGRpc2N1c3MgaXQgd2l0aCB5b3UuICBXZSBjYW4gcHJvdmlkZSBwcm9mZXNzaW9uYWwgaW5zaWdodCBhbmQgaGVscCB0byBtYWtlIHlvdXIgZHJlYW0gc2hvb3QgYSByZWFsaXR5LiAgQ29uc3VsYXRpb25zIGFyZSBjb21wbGV0ZWx5IGZyZWUuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX2FkZHJlc3MtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBBZGRyZXNzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTIzIFdvb3N0ZXIgU3QgLSBOZXcgWW9yaywgTlkgMTAwMTJcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhciBmYS1lbnZlbG9wZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBFbWFpbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdERCb2tlaEBCb2tlaEJlc3QuY29tXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtcGhvbmVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gUGhvbmUgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoMjEyKSA1NTUtNTU1NVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19tZXNzYWdlLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBjb250YWN0OiBzdGF0ZS5jb250YWN0IH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQ29udGFjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19jb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J21lc3Nlbmdlcl9fZm9ybScgbWV0aG9kPSdwb3N0JyBhY3Rpb249Jyc+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J25hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1uYW1lJyBpZD0naW5wdXROYW1lJyBwbGFjZWhvbGRlcj0nTmFtZSAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdudW1iZXInIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1udW1iZXInIGlkPSdpbnB1dE51bWJlcicgcGxhY2Vob2xkZXI9J051bWJlcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1lbWFpbCcgaWQ9J2lucHV0RW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbWVzc2FnZScgaWQ9J2lucHV0TWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UgIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgaWQ9J21lc3Nlbmdlcl9fc2VuZCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2J1dHRvbicgdmFsdWU9J1NlbmQgTWVzc2FnZScgPjwvaW5wdXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpbG1zdHJpcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJGaWxtc3RyaXAgbW91bnRlZCBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQobmFtZSkge1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQobmFtZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbWFnZSBlcnJvclwiKTtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdG1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykge1xyXG5cdFx0bGV0IG1hcHBlZFNsaWRlcyA9IHNsaWRlcy5tYXAoICh7IG5hbWUsIGltYWdlIH0sIGluZGV4KSA9PiB7IFxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYga2V5PXtgZmlsbXN0cmlwX19jZWxsLSR7bmFtZX1gfSBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NlbGxcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHsgdGhpcy5maWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKGluZGV4KX0gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0YWx0PXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCIgaWQ9XCJmaWxtc3RyaXBfX2ltYWdlLW92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e2BmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWB9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFwcGVkU2xpZGVzXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKHNsaWRlTm8pIHtcclxuXHRcdGNvbnNvbGUubG9nKCdzbGlkZU5vIGlzOiAnLCBzbGlkZU5vKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9ubyhzbGlkZU5vKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYmVmb3JlIGNhbGwgdG8gdXBkYXRlU2xpZGVTaG93IHByb3BzIGFyZTogXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVNsaWRlU2hvdygpIFxyXG5cdFx0fSk7XHJcblx0XHQvLyB0aGlzLnByb3BzLnN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyhzbGlkZUluZm8pO1xyXG5cdH1cclxuXHJcblx0ZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcihzaGlmdEJ5KSB7XHJcblx0XHRsZXQgdHJhdmVsRGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250YWluZXInKS5vZmZzZXRXaWR0aCAtZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHByb3Bvc2VkUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkgKyBzaGlmdEJ5O1xyXG5cdFx0aWYodHJhdmVsRGlzdGFuY2UgPD0gMCB8fCBwcm9wb3NlZFBvc2l0aW9uID4gMCB8fCB0cmF2ZWxEaXN0YW5jZSArIHByb3Bvc2VkUG9zaXRpb24gPCAwKXtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgZmlsbXN0cmlwUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgbGVmdEFycm93UG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgcmlnaHRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcpKTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGZpbG1zdHJpcFBvc2l0aW9uICsgc2hpZnRCeSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCBsZWZ0QXJyb3dQb3NpdGlvbiArIChzaGlmdEJ5Ki0xKSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgcmlnaHRBcnJvd1Bvc2l0aW9uICsgKHNoaWZ0QnkqLTEpKTtcclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBMZWZ0KCkge1xyXG5cdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyKDIwMCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZmlsbXN0cmlwUmlnaHQoKSB7XHJcblx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoLTIwMCk7XHJcblx0fVxyXG5cclxuXHRoaWdobGlnaHRGaWxtc3RyaXBDb250cm9scygpIHtcclxuXHRcdC8vIGlmKCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoZmlsbXN0cmlwX19jb250cm9sLWxlZnQpKXtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0LS1oaWdobGlnaHRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQtLWhpZ2hsaWdodFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHQvLyB9XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0LS1oaWdobGlnaHRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpLmFkZENsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0fSwgNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udGFpbmVyXCJcclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLmhpZ2hsaWdodEZpbG1zdHJpcENvbnRyb2xzKCl9IFxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBzbGlkZXMgPyB0aGlzLm1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykgOiBudWxsIH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTaGlmdCBmaWxtc3RyaXAgdG8gdGhlIHJpZ2h0XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbG1zdHJpcExlZnQoKX0+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIGxlZnQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2hpZnQgZmlsbXN0cmlwIHRvIHRoZSBsZWZ0XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbG1zdHJpcFJpZ2h0KCl9PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXNydFwiPmZpbG1zdHJpcCByaWdodCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCIgaWQ9XCJmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IHByb2plY3Rvcjogc3RhdGUucHJvamVjdG9yIH0gfTtcclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShGaWxtc3RyaXApOyAiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJGb290ZXIgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnModGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcyk7XHJcblx0fVxyXG5cclxuXHQvL2NoZWNrIHRvIHNlZSBpZiB0aGVzZSBjYW4gYmUgYWRkZWQgZGlyZWN0bHkgaW5saW5lIGR1cmluZyB0aGUgaW5pdGlhbCBtYXBwaW5nIG9mIHRoZSBTb2NpYWwgTWVkaWFsIExpbmtzIGluIHRoZSBKU1hcclxuXHRhZGRMaXN0ZW5lcnMoc29jaWFsTWVkaWFMaW5rc0luZm8pIHtcclxuXHRcdHNvY2lhbE1lZGlhTGlua3NJbmZvLmZvckVhY2goICh7IGZvbnRfY29sb3IsIG5hbWUsIGJnX2NvbG9yMSwgYmdfY29sb3IyIH0pID0+IHtcclxuXHRcdFx0JChgIyR7bmFtZX0taG92ZXItYm94YCkuaG92ZXIoKCkgPT4gdGhpcy5ob3Zlck9uKGAjJHtuYW1lfS1zb2NpYWxgLCBmb250X2NvbG9yLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiksICgpID0+IHRoaXMuaG92ZXJPZmYoYCMke25hbWV9LXNvY2lhbGApKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPbihpZCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCBmb250X2NvbG9yKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsIGBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICR7YmdfY29sb3IxfSwgJHtiZ19jb2xvcjJ9KWApO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPZmYoaWQpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCAnd2hpdGUnKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwKSknKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluay0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19ib2R5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPkFydGlzdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHREYXZpZCBCb2tlaCBmb3VuZGVyIG9mIEJva2VoIEJlc3QgUGhvdG9ncmFwaHksIElzIGFuIGF3YXJkIHdpbm5pbmcgcGhvdG9ncmFwaGVyIHdpdGggb3ZlciA4IHllYXJzIG9mIGV4cGVyaWVuY2UuIExlYXJuIG1vcmUgYWJvdXQgRGF2aWQgYW5kIEJva2VoIEJlc3QgUGhvdG9ncmFwaHkgXHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBpZD1cImZvb3Rlcl9fYXJ0aXN0LWxpbmtcIiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgdG89XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGk+IGhlcmUuIDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3MtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+MTIzIFdvb3N0ZXIgU3Q8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPiBOZXcgWW9yaywgTlkgMTAwMTI8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjEtMjEyLTU1NS01NTU1XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+KDIxMikgNTU1LTU1NTU8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPlNvY2lhbCBNZWRpYTwvaDQ+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmZvb3Rlci5zb2NpYWxNZWRpYUxpbmtzLm1hcCgoeyBuYW1lLCBsaW5rICwgaWNvbn0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2Ake25hbWV9LXNvY2lhbGB9IGlkPXtgJHtuYW1lfS1ob3Zlci1ib3hgfSBjbGFzc05hbWU9J2Zvb3Rlcl9fc29jaWFsLWhvdmVyLWJveCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLXNydFwiPntuYW1lfTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YCR7aWNvbn0gZm9vdGVyX19zb2NpYWwtbGlua2B9IGlkPXtgJHtuYW1lfS1zb2NpYWxgfSBhcmlhLWhpZGRlbj1cInRydWVcIiB0aXRsZT17bmFtZX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX2Jhc2UtdGV4dFwiPiZjb3B5OyBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IC0gTmV3IFlvcmssIE5ZPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9vdGVyOiBzdGF0ZS5mb290ZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzKShGb290ZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBnYWxsZXJ5QWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvZ2FsbGVyeV9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgR2FsbGVyeVNlbGVjdG9yIGZyb20gJy4vR2FsbGVyeVNlbGVjdG9yJztcclxuaW1wb3J0IFByb2plY3RvciBmcm9tICcuL1Byb2plY3Rvcic7XHJcblxyXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwib24gbW91bnQgR2FsbGVyeSBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0XHRjb25zb2xlLmxvZygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbiB1cGRhdGUgR2FsbGVyeSBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcblx0fVxyXG5cclxuXHJcblx0Y2xvc2VHYWxsZXJ5KCkge1xyXG5cdFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKSl7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlcy1jbG9zZWRcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdH1cclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5nYWxsZXJ5LnNsaWRlcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCIgaWQ9XCJtYWluXCI+XHJcblx0XHRcdFx0PEdhbGxlcnlTZWxlY3RvciBjaG9vc2VfZ2FsbGVyeT17IHRoaXMucHJvcHMuYWN0aW9ucy5jaG9vc2VfZ2FsbGVyeSB9IHVubG9hZF9zbGlkZXM9eyB0aGlzLnByb3BzLmFjdGlvbnMudW5sb2FkX3NsaWRlcyB9Lz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWxsZXJ5X19jbG9zZVwiIHRpdGxlPVwiQ2xvc2UgR2FsbGVyeVwiIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmNsb3NlR2FsbGVyeSgpIH0+XHJcblx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fY2xvc2Utc3J0XCI+Q2xvc2UgR2FsbGVyeTwvYj5cclxuXHRcdFx0XHRYXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiIGlkPVwiZ2FsbGVyeV9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImdhbGxlcnlcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBnYWxsZXJ5LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0Z2FsbGVyeSwgXHJcblx0XHRwcm9qZWN0b3IgXHJcblx0fTsgXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gXHRcdGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhPYmplY3QuYXNzaWduKHt9LCBnYWxsZXJ5QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShHYWxsZXJ5KTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuZ2FsbGVyeVNlbGVjdG9yTG9hZCgpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdHYWxsZXJ5U2VsZWN0b3IgcHJvcHMgYXJlOiAnLHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMuZ2FsbGVyeVNlbGVjdG9yLnRpbWVyKTtcclxuXHRcdHRoaXMuZ2FsbGVyeVNlbGVjdG9yUmVzZXQoKTtcclxuXHR9XHJcblxyXG5cdC8vc2F2ZSB0aW1lciB0byBzdGF0ZSB0byBjbGVhciBvbiB1bm1vdW50IHNvIHRoYXQgdGhlIHRpbWVyIGlzIGNsZWFyZWQgZXZlbiBpZiBwYWdlIGlzIHVubW91bnRlZCBtaWQgbG9hZFxyXG5cdGdhbGxlcnlTZWxlY3RvckxvYWQoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCJ9XHJcblx0XHRdO1xyXG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0JChnYWxsZXJ5U2VsZWN0b3JJZHNbY291bnRlcl0uY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpO1xyXG5cdFx0XHQkKGdhbGxlcnlTZWxlY3Rvcklkc1tjb3VudGVyXS5jb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXInKTtcclxuXHRcdFx0Y291bnRlcisrXHJcblx0XHRcdGlmKGNvdW50ZXIgPj0gZ2FsbGVyeVNlbGVjdG9ySWRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCA1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcih0aW1lcik7XHJcblx0fVxyXG5cclxuXHRnYWxsZXJ5U2VsZWN0b3JSZXNldCgpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3JJZHMuZm9yRWFjaCggKHsgY29udGFpbmVySWQgfSkgPT4ge1xyXG5cdFx0XHRpZigkKGNvbnRhaW5lcklkKS5oYXNDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKSkge1xyXG5cdFx0XHRcdCQoY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyJyk7XHJcblx0XHRcdFx0JChjb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcblx0Ly9wdXQgbGlzdGVuZXJzIGRpcmVjdGx5IG9uIHRvIHRoZSBodG1sIHRhZ3NcclxuXHRhZGRMaXN0ZW5lcnMoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCIsIGdhbGxlcnlOYW1lOiBcImFjdGlvblwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIiwgZ2FsbGVyeU5hbWU6IFwiZXZlbnRzXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wiLCBnYWxsZXJ5TmFtZTogXCJsYW5kc2NhcGVcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCIsIGdhbGxlcnlOYW1lOiBcInBvcnRyYWl0XCJ9XHJcblx0XHRdO1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9ySWRzLmZvckVhY2goICh7IGNvbnRhaW5lcklkLCBnYWxsZXJ5U2VsZWN0b3JJZCwgZ2FsbGVyeU5hbWUgfSkgPT4ge1xyXG5cdFx0XHQkKGNvbnRhaW5lcklkKS5ob3ZlcigoKSA9PiB0aGlzLmhvdmVySW4oZ2FsbGVyeVNlbGVjdG9ySWQpLCAoKSA9PiB0aGlzLmhvdmVyT3V0KGdhbGxlcnlTZWxlY3RvcklkKSk7XHJcblx0XHRcdCQoY29udGFpbmVySWQpLmNsaWNrKCgpID0+IHRoaXMuZ29Ub0dhbGxlcnkoZ2FsbGVyeU5hbWUpKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0Z29Ub0dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2VkIGdvVG9HYWxsZXJ5IG9uIFwiKyBnYWxsZXJ5KTtcclxuXHRcdHRoaXMucHJvcHMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0dGhpcy5wcm9wcy5jaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy5vcGVuR2FsbGVyeSgpOyB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHRvcGVuR2FsbGVyeSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBvcGVuIHRoZSBnYWxsZXJ5XCIpO1xyXG5cdFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpblwiKSl7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlc1wiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIpO1xyXG5cdFx0fVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6ICQoXCIjbWFpblwiKS5vZmZzZXQoKS50b3BcclxuXHRcdFx0fSk7XHJcblx0XHR9LDE1MDApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBjbG9zZUdhbGxlcnkoKSB7XHJcblx0Ly8gXHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpKXtcclxuXHQvLyBcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHQvLyBcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHQvLyBcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdC8vIFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cclxuXHJcblx0aG92ZXJJbihpZCkge1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLXNsaWRlLWluJyk7XHJcblx0fVxyXG5cclxuXHJcblx0aG92ZXJPdXQoaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLXNsaWRlLWluJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1ob3ZlcicpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgQWN0aW9uIEdhbGxlcnlcIj5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMVwiPlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgPHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+QWN0aW9uPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIEV2ZW50cyBHYWxsZXJ5XCI+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzJcIj5cclxuXHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICBcdDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkV2ZW50czwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBMYW5kc2NhcGUgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5MYW5kc2NhcGU8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgUG9ydHJhaXQgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX180XCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5Qb3J0YWl0PC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcjogc3RhdGUuZ2FsbGVyeVNlbGVjdG9yXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoR2FsbGVyeVNlbGVjdG9yKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMnO1xyXG5cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRtb2JpbGVNZW51OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuaGFuZGxlTWVudUNsaWNrID0gdGhpcy5oYW5kbGVNZW51Q2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnaGVhZGVyIHByb3BzIGFyZSAnLCB0aGlzLnByb3BzKTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gdHJ1ZSl7XHJcblx0XHRcdHRoaXMudG9nZ2xlTW9iaWxlTWVudU91dCgpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZU1lbnVDbGljaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdtb2JpbGVNZW51IGNsaWNrZWQnKTtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gZmFsc2Upe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVJbigpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlTW9iaWxlTWVudUluKCkge1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlTW9iaWxlTWVudU91dCgpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2Jyk7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdi0tc2xpZGUtaW4nKTtcclxuXHR9XHJcbiBcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgb25Nb3VzZUxlYXZlPXsoKT0+IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSgpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBpZD1cImhlYWRlcl9fYnJhbmQtbGlua1wiIGV4YWN0IHRvPVwiL1wiIHRpdGxlPVwiQm9rZWggUGhvdG9ncmFwaHkgSW5jLlwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbG9nb1wiIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiKX0gYWx0PVwiQm9rZWggUGhvdG9ncmFwaHkgSW5jLiBsb2dvXCIgLz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1uYW1lXCI+Qm9rZWggUGhvdG9ncmFwaHk8L3A+XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1tZW51LWljb24gZmFzIGZhLWJhcnNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU1lbnVDbGljaygpfT48L2k+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGluay1saXN0XCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmhlYWRlci5saW5rSW5mby5tYXAoKHsga2V5LCBwYXRoLCBuYW1lIH0pID0+IDxsaSBrZXk9e2tleX0+IDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0PG5hdiBpZD1cImhlYWRlcl9fbW9iaWxlLW5hdlwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLW5hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLWxpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtgbW9iaWxlLSR7a2V5fWB9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rc1wiIGV4YWN0IHRvPXtwYXRofT57bmFtZX08L05hdkxpbms+PC9saT4pfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IGhlYWRlcjogc3RhdGUuaGVhZGVyIH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcywgbnVsbCwge3B1cmU6ZmFsc2V9KShIZWFkZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0NpcmNsZVR5cGUgaW1wb3J0XHJcbmltcG9ydCBDaXJjbGVUeXBlIGZyb20gJ2NpcmNsZXR5cGUnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hvbWVfYWN0aW9ucyc7XHJcblxyXG4vL0RhdGEgaW1wb3J0c1xyXG5pbXBvcnQgaG9tZVNsaWRlcyBmcm9tICcuL2RhdGEvaG9tZVNsaWRlcyc7XHJcblxyXG4vL2pRdWVyeSBpbXBvcnRcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy51cGRhdGVXaW5kb3dXaWR0aCA9IHRoaXMudXBkYXRlV2luZG93V2lkdGguYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zbGlkZVNob3coKTtcclxuXHRcdHRoaXMudG9nZ2xlSG9tZU1vZGlmaWVyT24oKTtcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGgoKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdG5ldyBDaXJjbGVUeXBlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lX193ZWxjb21lLXRleHQnKSkucmFkaXVzKDYwMCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKCdIb21lIHByb3BzIGFyZTogJyx0aGlzLnByb3BzKTsgfSwgMTUwMCApO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVubW91bnRlZCBDb21wb25lbnRcIik7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9mZigpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93V2lkdGgpO1xyXG5cdFx0dGhpcy5zdG9wU2xpZGVTaG93KCk7XHJcblx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9uKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0taG9tZScpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlSG9tZU1vZGlmaWVyT2ZmKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0taG9tZScpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2luZG93V2lkdGgoKSB7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0fVxyXG5cclxuXHJcblx0c2xpZGVTaG93KCkge1xyXG5cdFx0bGV0IHsgaW50ZXJ2YWxUaW1lciB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybCgke2hvbWVTbGlkZXNbMF0uaW1nU3JjfSlgKTtcclxuXHRcdC8vYWRkIGZsYXNoLWluIGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTtcclxuXHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3hcIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdGxldCBjb3VudCA9IDFcclxuXHRcdGNvbnNvbGUubG9nKCdzbGlkZXNob3cgc3RhcnRpbmcnKTtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYoY291bnQgPT0gaG9tZVNsaWRlcy5sZW5ndGgpe1xyXG5cdFx0XHRcdGNvdW50ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaW1hZ2UgPSBob21lU2xpZGVzW2NvdW50XS5pbWdTcmM7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMuaG9tZS5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdFx0Y291bnQrK1xyXG5cdFx0XHRcdC8vYWRkIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGZsYXNoLWluIGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHRcdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXItLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vYWRkIGZsYXNoLWluIGNsYXNzIGFnYWluIHNvIHRoYXQgdGhlIGVmZmVjdCBzdGFydHMgb3ZlclxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly9yZW1vdmUgaG9tZV9fZmlsdGVyLWJveCBjbGFzc1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpOyB9LCA1KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7IH0sIDUpO1xyXG5cdFx0XHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtpbWFnZX0pYCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NvdW50KysgcGF1c2UgaXM6ICcsIHRoaXMucHJvcHMuaG9tZS5wYXVzZVNsaWRlU2hvdyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY291bnQgPSB0aGlzLmNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoY291bnQpO1xyXG5cdFx0XHR0aGlzLmNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoKTtcclxuXHRcdH0sIDg1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcih0aW1lcik7XHJcblx0XHRjb25zb2xlLmxvZygnc3RvcmVkIGludGVydmFsVGltZXIgaXMgJytpbnRlcnZhbFRpbWVyKTtcclxuXHR9XHJcblxyXG5cclxuXHRjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCkge1xyXG5cdFx0bGV0IHsgd2luZG93V2lkdGgsIHBhdXNlU2xpZGVTaG93IH0gPSB0aGlzLnByb3BzLmhvbWU7XHJcblx0XHRpZih3aW5kb3dXaWR0aCA8IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlU2xpZGVTaG93Q2hlY2sgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYod2luZG93V2lkdGggPj0gNTc2KXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlU2xpZGVTaG93Q2hlY2sgd2luZG93IGJpZyBlbm91Z2ggc3RhcnRlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblxyXG5cdC8vIGNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoY291bnQpIHtcclxuXHQvLyBcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdC8vIFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygnY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSB3aW5kb3cgdG9vIHNtYWxsIHN0b3BwZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudFxyXG5cdC8vIFx0fVxyXG5cdC8vIFx0aWYod2luZG93V2lkdGggPj0gNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IGJpZyBlbm91Z2ggc3RhcnRlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHQvLyBcdFx0cmV0dXJuIGNvdW50Kz0xXHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cclxuXHJcblx0c3RvcFNsaWRlU2hvdygpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdjbGVhcmluZyBpbnRlcnZhbFRpbWVyICcrdGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLmhvbWUuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiID5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiaG9tZV9fZmlsdGVyLWJveFwiIGNsYXNzTmFtZT1cImhvbWVfX2ZpbHRlci1ib3hcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWVcIj5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dFwiIGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWUtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRCb2tlaCBCZXN0IFBob3RvZ3JhcGh5XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGgxIGlkPVwiaG9tZV9fd2VsY29tZS10ZXh0LW1vYmlsZVwiIGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWUtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRCb2tlaCBCZXN0IFBob3RvZ3JhcGh5XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aG9tZTogc3RhdGUuaG9tZVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGlkPXtwcm9wcy5sb2FkZXJJZH0gY2xhc3NOYW1lPVwibG9hZGVyX19jb250YWluZXJcIj5cclxuXHRcdFx0PGltZyBpZD1cImxvZ28tbG9hZGVyMVwiIGNsYXNzTmFtZT1cImxvYWRlcl9fbG9nb1wiIHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmcnKX0+PC9pbWc+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjJcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcclxuaW1wb3J0IEZpbG1zdHJpcCBmcm9tICcuL0ZpbG1zdHJpcCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgUHJvamVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmRvd25BcnJvd1Zpc2liaWxpdHkoKTtcclxuXHRcdHRoaXMucHJvcHMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkUHJvamVjdG9yKCk7XHJcblx0XHR9LDUwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dGhpcy5hdXRvUnVuUHJvamVjdG9yKCk7XHJcblx0XHR9LDEwMCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwiUHJvamVjdG9yIHByb3BzIGFyZSBcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbiB1cGRhdGUgUHJvamVjdG9yIHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5wcm9qZWN0b3IuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHR0aGlzLnByb3BzLnNob3dfZmlsbXN0cmlwKGZhbHNlKTtcclxuXHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0bmV4dFNsaWRlKCkge1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlTm8sIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLnByb3BzLmluY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgc2xpZGVzLmxlbmd0aCk7XHJcblx0XHQvL2RlbGF5ZWQgc28gdGhhdCByZWR1eCBoYXMgdGltZSB0byB1cGRhdGUgc3RvcmUgZnJvbSBpbmNyZW1lbnRfc2xpZGUoKVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRwcmV2aW91c1NsaWRlKCkge1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlTm8sIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLnByb3BzLmRlY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgc2xpZGVzLmxlbmd0aCk7XHJcblx0XHQvL2RlbGF5ZWQgc28gdGhhdCByZWR1eCBoYXMgdGltZSB0byB1cGRhdGUgc3RvcmUgZnJvbSBkZWNyZW1lbnRfc2xpZGUoKVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHR1cGRhdGVTbGlkZVNob3coKSB7XHJcblx0XHRsZXQgeyBzbGlkZXMsIGN1cnJlbnRTbGlkZU5vIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW4gdXBkYXRlU2xpZGVTaG93IHByb3BzIGFyZTogXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5maWxtc3RyaXBPdmVybGF5U2hpZnRlcigpO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV9jdXJyZW50X3NsaWRlX2luZm8oc2xpZGVzW2N1cnJlbnRTbGlkZU5vXSk7XHJcblx0fVxyXG5cclxuXHJcblx0bG9hZFByb2plY3RvcigpIHtcclxuXHRcdHRoaXMucHJvcHMubG9hZF9uZXdfc2xpZGVzKHRoaXMucHJvcHMuc2xpZGVzKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdHRoaXMudXBkYXRlU2xpZGVTaG93KCk7IFxyXG5cdFx0fSwgNTApO1xyXG5cdH1cclxuXHJcblxyXG5cdGF1dG9SdW5Qcm9qZWN0b3IoKSB7XHJcblx0XHRsZXQgaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzID09PSB1bmRlZmluZWQpe1xyXG5cdFx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHRoaXMucHJvcHMucHJvamVjdG9yLnBhdXNlU2xpZGVTaG93ID09IGZhbHNlKXtcclxuXHRcdFx0XHR0aGlzLm5leHRTbGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LDY1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcihpbnRlcnZhbFRpbWVyKTtcclxuXHR9XHJcblxyXG5cclxuXHRwYXVzZUJ1dHRvbkhhbmRsZXIoKSB7XHJcblx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSB0aGlzLnByb3BzLnByb2plY3Rvci5wYXVzZVNsaWRlU2hvdztcclxuXHRcdGlmKHBhdXNlU2xpZGVTaG93ID09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0ZG93bkFycm93VmlzaWJpbGl0eSgpIHtcclxuXHRcdC8vaWYgY29udGFpbmVyIGhvdXNpbmcgdGhlIHByb2plY3RvciBpcyB0b28gc21hbGwgZG9uJ3QgZ2l2ZSB0aGUgb3B0aW9uIHRvIGJyaW5nIHVwIHRoZSBwaG90byBzdHJpcFxyXG5cdFx0bGV0IHByb2plY3RvckJveFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0aWYocHJvamVjdG9yQm94V2lkdGggPCA3NTApe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0cHJvamVjdG9yRG93bkhhbmRsZXIoKSB7XHJcblx0XHRsZXQgY2FsY3VsYXRlZFdpZHRoID0gdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzLmxlbmd0aCoyMDArXCJweFwiO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcCghdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2hvd0ZpbG1zdHJpcCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7ICQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnd2lkdGgnLCBjYWxjdWxhdGVkV2lkdGgpIH0sIDI1KTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXJcIik7XHJcblx0fVxyXG5cclxuXHJcblx0c2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG5vdCBvbiBiZWZvcmUgdG9nZ2xpbmdcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKTtcclxuXHRcdFx0XHQvL0lmIGNvbnRyb2wtZG93biBpcyBpbiB1c2UgYnkgdGhlIGZpbG1zdHJpcCBsZWF2ZSBpdCBhbG9uZVxyXG5cdFx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dW5zaGlmdFByb2plY3RvckNvbnRyb2xzKCkge1xyXG5cdFx0Ly9tYWtlIHN1cmUgbW9kaWZpZWQgY2xhc3MgaXMgb24gYmVmb3JlIHRvZ2dsaW5nIGl0IG9mZlxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyKCkge1xyXG5cdFx0bGV0IGN1cnJlbnRTbGlkZU5vID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IuY3VycmVudFNsaWRlTm87XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiKS5jc3MoJ2xlZnQnLCBjdXJyZW50U2xpZGVObyoyMDApO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlSW5mbywgc2hvd0ZpbG1zdHJpcCwgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInByb2plY3RvclwiIFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3RvclwiIFxyXG5cdFx0XHRcdG9uTW91c2VFbnRlcj17ICgpID0+IHRoaXMuc2hpZnRQcm9qZWN0b3JDb250cm9scygpfSBcclxuXHRcdFx0XHRvbk1vdXNlTGVhdmU9eyAoKSA9PiB0aGlzLnVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e2N1cnJlbnRTbGlkZUluZm8gPyBcclxuXHRcdFx0XHRcdDxTbGlkZSBwaG90b0luZm89e2N1cnJlbnRTbGlkZUluZm99IFxyXG5cdFx0XHRcdFx0XHRzdHlsZUZvcj17dGhpcy5wcm9wcy5zdHlsZUZvcn0gXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR7c2xpZGVzID9cclxuXHRcdFx0XHRcdDxGaWxtc3RyaXAgc2xpZGVzPXtzbGlkZXN9IFxyXG5cdFx0XHRcdFx0XHR1cGRhdGVTbGlkZVNob3c9eyAoKSA9PiB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIgdGl0bGU9XCJTZWUgcHJldmlvdXMgcGhvdG9cIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5sZWZ0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByZXZpb3VzU2xpZGUoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIiB0aXRsZT1cIlNlZSBuZXh0IHBob3RvXCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+cmlnaHQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm5leHRTbGlkZSgpfSA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLWRvd25cIiB0aXRsZT1cIlNlZSBhbGwgcGhvdG9zIGluIGN1cnJlbnQgZ2FsbGVyeVwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPmRvd24gYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtZG93blwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvamVjdG9yRG93bkhhbmRsZXIoKX0+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiIHRpdGxlPVwiUGF1c2Ugc2xpZGUgc2hvd1wiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnBhdXNlIGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBhdXNlLWNpcmNsZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucGF1c2VCdXR0b25IYW5kbGVyKCl9PjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBwcm9qZWN0b3I6IHN0YXRlLnByb2plY3Rvcn0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoUHJvamVjdG9yKTsgIiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5cclxuY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnNldFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnJlbW92ZVN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0c2V0U3R5bGVzKCkge1xyXG5cdFx0bGV0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcy5waG90b0luZm87XHJcblx0XHRsZXQgc3R5bGVGb3IgPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lYCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG9gKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHsgc3R5bGVGb3IgfSA9IHRoaXMucHJvcHMuc3R5bGVGb3I7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBmcmFtZVxyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZS0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIHBob3RvXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvLS0ke3N0eWxlRm9yfWApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHsgbmFtZSwgaW1hZ2UgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPXtgJHtuYW1lfS1zbGlkZV9fZnJhbWVgfSBjbGFzc05hbWU9XCJzbGlkZV9fZnJhbWVcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPXtgJHtuYW1lfS1zbGlkZV9fcGhvdG9gfSBjbGFzc05hbWU9XCJzbGlkZV9fcGhvdG9cIiBcclxuXHRcdFx0XHRcdHNyYz17aW1hZ2V9ICBcclxuXHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMpfSBcclxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvaW1nPlxyXG5cdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e1wic2xpZGVfX2xvYWRlclwifS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8cD5NeSBMb2FkZXIgaXNuJ3QgaXQgZ3JlYXQ/PC9wPlxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX21lc3NhZ2UobWVzc2FnZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfTUVTU0FHRScsXHJcblx0XHRtZXNzYWdlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RfY2hlY2socmVkaXJlY3QpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1JFRElSRUNUX0NIRUNLJyxcclxuXHRcdHJlZGlyZWN0XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKHRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHR0aW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX3RpbWVyKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0xFQVJfVElNRVInLFxyXG5cdFx0dGltZXI6IGZhbHNlXHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZF9waG90byhuYW1lLCBpbWFnZSwgY3VycmVudFNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQUREX1BIT1RPJyxcclxuXHRcdGN1cnJlbnRTbGlkZXMsXHJcblx0XHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aW1hZ2VcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSE9PU0VfR0FMTEVSWScsXHJcblx0XHRnYWxsZXJ5XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1vYmlsZV9oZWFkZXJfc3RhdHVzKG1vYmlsZU1lbnUpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ01PQklMRV9IRUFERVJfU1RBVFVTJyxcclxuXHRcdG1vYmlsZU1lbnVcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3dXaWR0aCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfV0lORE9XX1dJRFRIJyxcclxuXHRcdHdpbmRvd1dpZHRoXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9jdXJyZW50X3NsaWRlX2luZm8oY3VycmVudFNsaWRlSW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJyxcclxuXHRcdGN1cnJlbnRTbGlkZUluZm9cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9jdXJyZW50X3NsaWRlX25vKGN1cnJlbnRTbGlkZU5vKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9DVVJSRU5UX1NMSURFX05PJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCB0b3RhbE5vU2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdJTkNSRU1FTlRfU0xJREUnLFxyXG5cdFx0Y3VycmVudFNsaWRlTm8sXHJcblx0XHR0b3RhbE5vU2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCB0b3RhbE5vU2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdERUNSRU1FTlRfU0xJREUnLFxyXG5cdFx0Y3VycmVudFNsaWRlTm8sXHJcblx0XHR0b3RhbE5vU2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkX25ld19zbGlkZXMoc2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0FEX05FV19TTElERVMnLFxyXG5cdFx0c2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5sb2FkX3NsaWRlcygpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1VOTE9BRF9TTElERVMnLFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dfZmlsbXN0cmlwKHNob3dGaWxtc3RyaXApIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NIT1dfRklMTVNUUklQJyxcclxuXHRcdHNob3dGaWxtc3RyaXBcclxuXHR9XHJcbn0iLCJjb25zdCBnYWxsZXJ5U2xpZGVzID0ge1xyXG5cdGFjdGlvbjogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRheWxpZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImF0LXRoZS10cmFja1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdG9yY3Jvc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwidWx0aW1hdGUtc2F2ZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzb2NjZXItbWF0Y2hcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zb2NjZXItbWF0Y2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJsZWFwLW9mLWZhaXRoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbGVhcC1vZi1mYWl0aC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhpZ2gtanVtcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImtpY2stZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2tpY2stZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpZy13YXZlLXN1cmZpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iaWctd2F2ZS1zdXJmaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2thdGUtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NrYXRlLXBhcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJza2lpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdWRkbGUtanVtcGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3B1ZGRsZS1qdW1waW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhY2gtYmFja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iZWFjaC1iYWNrZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1cmYtc3BsYXNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzY2hyb2RpbmdlcnMta2lja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGV2ZW50czogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWNsb3Vkcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoZGF5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aGRheS1naXJsLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiNHRoLWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHJlZ25hbmN5LWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0aW5nLWNsYXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoLWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoLWFubm91bmNlbWVudC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWZyaWVuZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwid2VkZGluZy1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImZpcnN0LWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0ZS1jZWxlYnJhdGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRlLWNlbGVicmF0aW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGUtYW5kLWdyb29tXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtYW5kLWdyb29tLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRsYW5kc2NhcGU6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhcmNoZXMtbmF0aW9uYWwtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2FyY2hlcy1uYXRpb25hbC1wYXJrLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicm9va2x5bi1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9icm9va2x5bi1icmlkZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhbG0tY2xvdWRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvY2FsbS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJvYXRob3VzZS1jb3R0YWdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRldmlscy1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kZXZpbHMtYnJpZGdlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGFrZS1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBvcHBpZXNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBpZXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcGllci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJpdmVyLXJlZmxlY3Rpb25cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZHVzay1pbi1hZnJpY2FcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1hcnNoLXBlaXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm5pZ2h0LWRvbHBoaW5zXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbmlnaHQtZG9scGhpbnMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmbGF0aXJvbi1idWlsZGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2ZsYXRpcm9uLWJ1aWxkaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibW91bnRhaW4tbGFrZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21vdW50YWluLWxha2UuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJueWMtc2t5bGluZTJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZTIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdXJwbGUtZmxvd2Vyc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3B1cnBsZS1mbG93ZXJzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwb3J0cmFpdDogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1ibHVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtYmx1ci5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhdXRpZnVsLWNhc3VhbFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWNhc3VhbC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxvbmRlLWNsb3NlLXVwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhcm5pdmFsLW5pZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGFwcHktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInlvdW5nLW1vbmtzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC95b3VuZy1tb25rcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cC1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2xvc2UtdXAtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWRpbmctd29tYW5cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJnaXJsLXJhYmJpdC1mcmllbmRzaGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicmVkLWhhaXJlZC1jaGlsZFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvcmVkLWhhaXJlZC1jaGlsZC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0LWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndvbWFuLWRyZXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC93b21hbi1kcmVzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLXdvbWFuLWJva2VoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC13b21hbi1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQxXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnlTbGlkZXM7IiwiXHJcblxyXG5jb25zdCBob21lU2xpZGVzID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGcnKSxcclxuXHRcdH0sXHRcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL3N0YXJ5LWxlbnMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1saWdodHMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpZGVzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzbGlkZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYmVhY2gtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZmllbGQtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2ZpZWxkLXNob290LmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2luLWFuZC1vdXQtb2YtZm9jdXMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2luLWFuZC1vdXQtb2YtZm9jdXMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc21va2UtY2xvdWQnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL3Ntb2tlLWNsb3VkLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2F0LWR1c2snLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2F0LWR1c2suanBlZycpXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1lc3NhZ2U6IFsnJywnJ10sXHJcblx0cmVkaXJlY3Q6IGZhbHNlXHJcblx0fTtcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX01FU1NBR0UnOlxyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGFjdGlvbi5tZXNzYWdlO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbWVzc2FnZSB9XHJcblx0XHRjYXNlICdSRURJUkVDVF9DSEVDSyc6XHJcblx0XHRcdGxldCByZWRpcmVjdCA9IGFjdGlvbi5yZWRpcmVjdDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlZGlyZWN0IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNvY2lhbE1lZGlhTGlua3MgOiBbXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdG5hbWU6IFwiRmFjZUJvb2tcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjM0I1OTk4XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzI0NWFjZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkZsaWNrclwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvZGF2aWRfYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1mbGlja3JcIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiNGRTA4ODNcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjMTI4ZmRjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiSW5zdGFncmFtXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Jva2VoYmVzdHBob3RvZ3JhcGh5L1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjZjE3NTMwXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzdhMzhhYlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkxpbmtlZEluXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWRib2tlaC9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWxpbmtlZGluXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjMDA3N2I1XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzU2YjllZVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3Rlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAoJ1NFVF9GT09URVJfTElOS1MnKTpcclxuXHRcdFx0bGV0IGxpbmtzID0gYWN0aW9uLmxpbmtzO1xyXG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCBsaW5rc307XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXJfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfVElNRVInOlxyXG5cdFx0XHRsZXQgdGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aW1lciB9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfVElNRVInOlxyXG5cdFx0XHR0aW1lciA9IGFjdGlvbi50aW1lcjtcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgdGltZXJ9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnM7IiwiaW1wb3J0IGdhbGxlcnlTbGlkZXMgZnJvbSAnLi4vZGF0YS9nYWxsZXJ5U2xpZGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGNhc2UgJ0NIT09TRV9HQUxMRVJZJzpcclxuXHRcdFx0bGV0IGdhbGxlcnkgPSBhY3Rpb24uZ2FsbGVyeTtcclxuXHRcdFx0c2xpZGVzID0gWyAuLi5nYWxsZXJ5U2xpZGVzW2dhbGxlcnldIF1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsaW5rSW5mbzogW1xyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWhvbWUnLCBcclxuXHRcdFx0cGF0aDogJy8nLCBcclxuXHRcdFx0bmFtZTogJ0hvbWUnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWdhbGxlcnknLCBcclxuXHRcdFx0cGF0aDogJy9nYWxsZXJ5JywgXHJcblx0XHRcdG5hbWU6ICdQaG90byBHYWxsZXJ5J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1hYm91dCcsIFxyXG5cdFx0XHRwYXRoOiAnL2Fib3V0JywgXHJcblx0XHRcdG5hbWU6ICdBYm91dCBCb2tlaCdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstY29udGFjdCcsIFxyXG5cdFx0XHRwYXRoOiAnL2NvbnRhY3QnLCBcclxuXHRcdFx0bmFtZTogJ0NvbnRhY3QgVXMnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLXRlc3QnLCBcclxuXHRcdFx0cGF0aDogJy90ZXN0JywgXHJcblx0XHRcdG5hbWU6ICdUZXN0IFBhZ2UnXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bW9iaWxlTWVudTogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnTU9CSUxFX0hFQURFUl9TVEFUVVMnOlxyXG5cdFx0XHRsZXQgbW9iaWxlTWVudSA9IGFjdGlvbi5tb2JpbGVNZW51XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBtb2JpbGVNZW51IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob21lX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ1NUT1JFX1dJTkRPV19XSURUSCc6XHJcblx0XHRcdGxldCB3aW5kb3dXaWR0aCA9IGFjdGlvbi53aW5kb3dXaWR0aDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHdpbmRvd1dpZHRoIH07XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93O1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF1c2VTbGlkZVNob3cgfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGN1cnJlbnRTbGlkZU5vOiAwLFxyXG5cdHBhdXNlU2xpZGVTaG93OiBmYWxzZSxcclxuXHRzaG93RmlsbXN0cmlwOiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdG9yX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX0lORk8nOlxyXG5cdFx0XHRsZXQgY3VycmVudFNsaWRlSW5mbyA9IGFjdGlvbi5jdXJyZW50U2xpZGVJbmZvO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlSW5mbyB9XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX05PJzpcclxuXHRcdFx0bGV0IGN1cnJlbnRTbGlkZU5vID0gYWN0aW9uLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm99XHJcblx0XHRjYXNlICdJTkNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0bGV0IHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gdG90YWxOb1NsaWRlcyAtIDEpe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdERUNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0dG90YWxOb1NsaWRlcyA9IGFjdGlvbi50b3RhbE5vU2xpZGVzO1xyXG5cdFx0XHRpZihjdXJyZW50U2xpZGVObyA9PSAwKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IHRvdGFsTm9TbGlkZXMgLSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vIC09IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vIH1cclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3dcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH1cclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ0xPQURfTkVXX1NMSURFUyc6XHJcblx0XHRcdGxldCBzbGlkZXMgPSBhY3Rpb24uc2xpZGVzO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVJbmZvID0gc2xpZGVzWzBdO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IDAgXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMsIGN1cnJlbnRTbGlkZUluZm8sICBjdXJyZW50U2xpZGVOb307XHJcblx0XHRjYXNlICdVTkxPQURfU0xJREVTJzpcclxuXHRcdFx0bGV0IHRlbXBTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnY3VycmVudFNsaWRlSW5mbyddO1xyXG5cdFx0XHRkZWxldGUgdGVtcFN0YXRlWydzbGlkZXMnXTtcclxuXHRcdFx0cmV0dXJuIHsgLi4udGVtcFN0YXRlIH07XHJcblx0XHRjYXNlICdTSE9XX0ZJTE1TVFJJUCc6XHJcblx0XHRcdGxldCBzaG93RmlsbXN0cmlwID0gYWN0aW9uLnNob3dGaWxtc3RyaXA7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzaG93RmlsbXN0cmlwIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcblx0Ly8gY3VycmVudFNsaWRlSW5mbzoge1xyXG5cdC8vIFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdC8vIFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdC8vIH0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0b3JfcmVkdWNlcnM7IiwiLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2luZGV4Lmh0bWwnLFxyXG5cdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRjb21wb25lbnQ6IEhvbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBBYm91dFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0JyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2NvbnRhY3QvOnN0YXR1cycsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IENvbnRhY3RcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZ2FsbGVyeScsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IEdhbGxlcnlcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvdGVzdCcsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IFRlc3RcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYWJvdXRfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBjb250YWN0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udGFjdF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBmb290ZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzJztcclxuaW1wb3J0IGhlYWRlcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBob21lX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycyc7XHJcbmltcG9ydCBwcm9qZWN0b3JfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9wcm9qZWN0b3JfcmVkdWNlcnMnO1xyXG5cclxuXHJcbi8vQWRkIGFkZGl0aW9uYWwgcmVkdWNlcnMgaW4gaGVyZSB0byBiZSBjb21iaW5lZCBpbnRvIG9uZSByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRhYm91dDogYWJvdXRfcmVkdWNlcnMsXHJcblx0Y29udGFjdDogY29udGFjdF9yZWR1Y2VycyxcclxuXHRmb290ZXI6IGZvb3Rlcl9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5OiBnYWxsZXJ5X3JlZHVjZXJzLFxyXG5cdGdhbGxlcnlTZWxlY3RvcjogZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzLFxyXG5cdGhlYWRlcjogaGVhZGVyX3JlZHVjZXJzLFxyXG5cdGhvbWU6IGhvbWVfcmVkdWNlcnMsXHJcblx0cHJvamVjdG9yOiBwcm9qZWN0b3JfcmVkdWNlcnMsXHJcbn0pXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG5cdHJvb3RSZWR1Y2VyLFxyXG5cdC8vIGlmIHJlZGV4IGRldnRvb2xzIGV4dGVuc2lvbiBpcyBvbiB0aGUgd2luZG93IG9iamVjdCBydW4gdGhlIGRldnRvb2xzIGZ1bmN0aW9uXHJcblx0X19pc0Jyb3dzZXJfXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaXJjbGV0eXBlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
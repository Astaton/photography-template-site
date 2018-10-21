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

var _Loader = __webpack_require__(/*! ./Loader */ "./src/shared/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React imports


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

			var mappedSlides = slides.map(function (_ref) {
				var name = _ref.name,
				    image = _ref.image;

				return _react2.default.createElement(
					'div',
					{ key: 'filmstrip__cell-' + name, className: 'filmstrip__cell' },
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
		key: 'filmstripContainerShifter',
		value: function filmstripContainerShifter(shiftBy) {
			var travelDistance = document.getElementById('filmstrip__container').offsetWidth - document.getElementById('projector').offsetWidth;
			var proposedPosition = parseInt($('#filmstrip__container').css('left')) + shiftBy;
			console.log("travelDistance is: " + travelDistance + " proposedPosition is: " + proposedPosition + " travelDistance + proposedPosition is: " + (travelDistance + proposedPosition));
			if (travelDistance <= 0 || proposedPosition > 0 || travelDistance + proposedPosition < 0) {
				console.log("returning out of bounds");
				return;
			}
			console.log("Attempting to shift the filmstrip");
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
			console.log("shifted filmstrip left");
			this.filmstripContainerShifter(200);
		}
	}, {
		key: 'filmstripRight',
		value: function filmstripRight() {
			console.log("shifted filmstrip right");
			this.filmstripContainerShifter(-200);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var slides = this.props.slides;
			return _react2.default.createElement(
				'div',
				{ id: 'filmstrip__container', className: 'filmstrip__container' },
				slides ? this.mapSlidesToFilmstrip(slides) : null,
				_react2.default.createElement(
					'span',
					{ id: 'filmstrip__control-left', className: 'filmstrip__control-left' },
					_react2.default.createElement(
						'b',
						{ className: 'filmstrip__control-srt' },
						'filmstrip left'
					),
					_react2.default.createElement('i', { className: 'fas fa-angle-left', onClick: function onClick() {
							return _this3.filmstripLeft();
						} })
				),
				_react2.default.createElement(
					'span',
					{ id: 'filmstrip__control-right', className: 'filmstrip__control-right' },
					_react2.default.createElement(
						'b',
						{ className: 'filmstrip__control-srt' },
						'filmstrip right'
					),
					_react2.default.createElement('i', { className: 'fas fa-angle-right', onClick: function onClick() {
							return _this3.filmstripRight();
						} })
				),
				_react2.default.createElement('div', { className: 'filmstrip__selector-cell', id: 'filmstrip__selector-cell' })
			);
		}
	}]);

	return Filmstrip;
}(_react.Component);

exports.default = Filmstrip;
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
		key: 'filmStripHandler',
		value: function filmStripHandler() {
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
				{ id: 'projector', className: 'projector', onMouseEnter: function onMouseEnter() {
						return _this7.shiftProjectorControls();
					}, onMouseLeave: function onMouseLeave() {
						return _this7.unshiftProjectorControls();
					} },
				currentSlideInfo ? _react2.default.createElement(_Slide2.default, { photoInfo: currentSlideInfo,
					styleFor: this.props.styleFor
				}) : _react2.default.createElement(_Loader2.default, null),
				slides ? _react2.default.createElement(_Filmstrip2.default, { slides: slides }) : null,
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-left', className: 'projector__control-left' },
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
					{ id: 'projector__control-right', className: 'projector__control-right' },
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
					{ id: 'projector__control-down', className: 'projector__control-down' },
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'down arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-down', onClick: function onClick() {
							return _this7.filmStripHandler();
						} })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-pause', className: 'projector__control-pause' },
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
		case 'INCREMENT_SLIDE':
			var currentSlideNo = action.currentSlideNo;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlQWJvdXRNb2RpZmllck9uIiwidG9nZ2xlQWJvdXRNb2RpZmllck9mZiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlcyIsImFib3V0IiwiQ29tcG9uZW50Iiwic3RhdGVUb1Byb3BzIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbWFnZSIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsInNoaWZ0QnkiLCJ0cmF2ZWxEaXN0YW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRXaWR0aCIsInByb3Bvc2VkUG9zaXRpb24iLCJwYXJzZUludCIsImZpbG1zdHJpcFBvc2l0aW9uIiwibGVmdEFycm93UG9zaXRpb24iLCJyaWdodEFycm93UG9zaXRpb24iLCJmaWxtc3RyaXBDb250YWluZXJTaGlmdGVyIiwibWFwU2xpZGVzVG9GaWxtc3RyaXAiLCJmaWxtc3RyaXBMZWZ0IiwiZmlsbXN0cmlwUmlnaHQiLCJGb290ZXIiLCJhZGRMaXN0ZW5lcnMiLCJmb290ZXIiLCJzb2NpYWxNZWRpYUxpbmtzIiwic29jaWFsTWVkaWFMaW5rc0luZm8iLCJmb3JFYWNoIiwiZm9udF9jb2xvciIsImJnX2NvbG9yMSIsImJnX2NvbG9yMiIsImhvdmVyIiwiaG92ZXJPbiIsImhvdmVyT2ZmIiwibGluayIsImljb24iLCJnYWxsZXJ5QWN0aW9ucyIsIkdhbGxlcnkiLCJjbG9zZUdhbGxlcnkiLCJnYWxsZXJ5IiwiY2hvb3NlX2dhbGxlcnkiLCJ1bmxvYWRfc2xpZGVzIiwiR2FsbGVyeVNlbGVjdG9yIiwiZ2FsbGVyeVNlbGVjdG9yTG9hZCIsImNsZWFySW50ZXJ2YWwiLCJnYWxsZXJ5U2VsZWN0b3IiLCJ0aW1lciIsImdhbGxlcnlTZWxlY3RvclJlc2V0IiwiZ2FsbGVyeVNlbGVjdG9ySWRzIiwiY29udGFpbmVySWQiLCJnYWxsZXJ5U2VsZWN0b3JJZCIsImNvdW50ZXIiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInN0b3JlX3RpbWVyIiwiZ2FsbGVyeU5hbWUiLCJob3ZlckluIiwiaG92ZXJPdXQiLCJjbGljayIsImdvVG9HYWxsZXJ5Iiwib3BlbkdhbGxlcnkiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhlYWRlciIsInRvZ2dsZU1vYmlsZU1lbnVPdXQiLCJtb2JpbGVfaGVhZGVyX3N0YXR1cyIsInRvZ2dsZU1vYmlsZU1lbnVJbiIsImxpbmtJbmZvIiwia2V5IiwicHVyZSIsIkhvbWUiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsInNsaWRlU2hvdyIsInRvZ2dsZUhvbWVNb2RpZmllck9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNpcmNsZVR5cGUiLCJyYWRpdXMiLCJ0b2dnbGVIb21lTW9kaWZpZXJPZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFNsaWRlU2hvdyIsInN0b3JlX3dpbmRvd193aWR0aCIsImlubmVyV2lkdGgiLCJpbnRlcnZhbFRpbWVyIiwiaG9tZSIsImhvbWVTbGlkZXMiLCJpbWdTcmMiLCJjb3VudCIsInBhdXNlU2xpZGVTaG93IiwiY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSIsIndpbmRvd1dpZHRoIiwicGF1c2Vfc2xpZGVfc2hvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvYWRlciIsImxvYWRlcklkIiwiUHJvamVjdG9yIiwiZG93bkFycm93VmlzaWJpbGl0eSIsImxvYWRQcm9qZWN0b3IiLCJhdXRvUnVuUHJvamVjdG9yIiwic2hvd19maWxtc3RyaXAiLCJjdXJyZW50U2xpZGVObyIsImluY3JlbWVudF9zbGlkZSIsInVwZGF0ZVNsaWRlU2hvdyIsImRlY3JlbWVudF9zbGlkZSIsImZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyIiwic3RvcmVfY3VycmVudF9zbGlkZV9pbmZvIiwibG9hZF9uZXdfc2xpZGVzIiwidW5kZWZpbmVkIiwibmV4dFNsaWRlIiwicHJvamVjdG9yQm94V2lkdGgiLCJjYWxjdWxhdGVkV2lkdGgiLCJzaG93RmlsbXN0cmlwIiwiY3VycmVudFNsaWRlSW5mbyIsInNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJ1bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJzdHlsZUZvciIsInByZXZpb3VzU2xpZGUiLCJmaWxtU3RyaXBIYW5kbGVyIiwicGF1c2VCdXR0b25IYW5kbGVyIiwiU2xpZGUiLCJzZXRTdHlsZXMiLCJyZW1vdmVTdHlsZXMiLCJwaG90b0luZm8iLCJUZXN0IiwiYWRkX3Bob3RvIiwiY3VycmVudFNsaWRlcyIsImNsZWFyX3RpbWVyIiwidG90YWxOb1NsaWRlcyIsImdhbGxlcnlTbGlkZXMiLCJhY3Rpb24iLCJldmVudHMiLCJsYW5kc2NhcGUiLCJwb3J0cmFpdCIsImluaXRpYWxTdGF0ZSIsImFib3V0X3JlZHVjZXJzIiwicHVzaCIsImNvbnRhY3RfcmVkdWNlcnMiLCJmb290ZXJfcmVkdWNlcnMiLCJsaW5rcyIsImdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyIsImhlYWRlcl9yZWR1Y2VycyIsImhvbWVfcmVkdWNlcnMiLCJwcm9qZWN0b3JfcmVkdWNlcnMiLCJ0ZW1wU3RhdGUiLCJyb290UmVkdWNlciIsImdhbGxlcnlfcmVkdWNlcnMiLCJfX2lzQnJvd3Nlcl9fIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHFFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLDhFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLG9GOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLDRFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLDRFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHlGOzs7Ozs7Ozs7OztBQ0FBLDhFOzs7Ozs7Ozs7OztBQ0FBLGdGOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLGlGOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBD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O0FBT25DeEQsT0FBTXlELHVCQVA2QjtBQVFuQzVLLFlBQVc2SztBQVJ3QixDQUFoQixDQUFwQjs7QUFXQSxJQUFNek4sUUFBUSx3QkFDYjJOLFdBRGE7QUFFYjtBQUNBRSxLQUFhQSxJQUFJeEUsT0FBT3lFLDRCQUF4QixJQUF3RHpFLE9BQU95RSw0QkFBUCxFQUgzQyxDQUFkOztrQkFNZTlOLEs7Ozs7Ozs7Ozs7O0FDN0JmLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1saWdodHMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLXJlZmxlY3Rpb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sYW5kc2NhcGUtc2hvb3QuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLWNsb3NlLXVwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWdyb3VuZC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL3N0YXJ5LWxlbnMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iZWFjaC1iYWNrZmxpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmlnLXdhdmUtc3VyZmluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vaGlnaC1qdW1wLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9raWNrLWZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL21vdG9yY3Jvc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3B1ZGRsZS1qdW1waW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NrYXRlLXBhcmsuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NraWluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zdXJmLXNwbGFzaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vdWx0aW1hdGUtc2F2ZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoLWFubm91bmNlbWVudC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtYW5kLWdyb29tLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1jbG91ZHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2ZpcnN0LWJpcnRoZGF5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0ZS1jZWxlYnJhdGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZGF5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWZyaWVuZHMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3dlZGRpbmctZGF5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9hcmNoZXMtbmF0aW9uYWwtcGFyay5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9icm9va2x5bi1icmlkZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvY2FsbS1jbG91ZHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZHVzay1pbi1hZnJpY2EuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2ZsYXRpcm9uLWJ1aWxkaW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21hcnNoLXBlaXIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21vdW50YWluLWxha2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcml2ZXItcmVmbGVjdGlvbi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBpZXIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2F0LWR1c2suanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2ZpZWxkLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9pbi1hbmQtb3V0LW9mLWZvY3VzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtYmx1ci5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1jYXN1YWwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWd1eS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAtYm9rZWguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2Fybml2YWwtbmlnaHQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvZ2lybC1yYWJiaXQtZnJpZW5kc2hpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oYXBweS1naXJsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvcmVkLWhhaXJlZC1jaGlsZC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0LWd1eS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC93b21hbi1kcmVzcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC95b3VuZy1tb25rcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnXCI7IiwiY29uc3QgY2xpZW50ID0ge1xyXG5cdHVzZXI6ICdvcnNvbjEwOEBnbWFpbC5jb20nLFxyXG5cdGlkOiAnNTU3MzQ2NzE4NjkwLWNoZDFlZjFjZTB0ampuaDE3bXVxZDAxZGpmaTZvbTVvLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcclxuXHRzZWNyZXQ6ICc2aFNGajF1ZEJsdE1YazBnSlFOaE5hOHcnLFxyXG5cdHJlZnJlc2hUb2tlbjogJzEvcm5WVlpnNGlZMjJBQkN3a2t1SmpWWThOMEFoZG5qdUtUdFRoajdwWVE5SWpNYmRhYW9Ib05NWnFibkk1aWl6OCcsXHJcblx0YWNlc3NUb2tlbjogJ3lhMjkuR2xzQkJuVFFfNWx5a0czdmZqRFZqZFUwcVF5N0NiN29COGVaOF9TbE5wODZ1bkFrUmtLWkNzSW1KZkNqd3J6b0JSYzdQRDB3Ry0wWHJaUURLa1BjR2l2Y3NCNFp3VXRZWEM3dG1RZGY2S2EwV3NxQW1YQjhqRXVhMGppaydcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyRW1haWwgPSBcImFzdGF0b24xMDhAb3V0bG9vay5jb21cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsIi8vZXhwcmVzcyBpbXBvcnRcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbi8vbWlkZGxld2FyZSBpbXBvcnRzXHJcbmltcG9ydCBleHByZXNzU3RhdGljR3ppcCBmcm9tIFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XHJcblxyXG4vL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3NoYXJlZC9zdG9yZSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3NoYXJlZC9yb3V0ZXNcIjtcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9zaGFyZWQvQXBwJztcclxuXHJcbi8vbG9jYWwgaW1wb3J0c1xyXG5pbXBvcnQgY2xpZW50LCB7IHVzZXJFbWFpbCB9IGZyb20gJy4uLy4uL29hdXRoL2NsaWVudERhdGEnO1xyXG5cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MFxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKCcvJywgZXhwcmVzc1N0YXRpY0d6aXAoXCJwdWJsaWMvXCIpKTtcclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XHJcblxyXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0bGV0IGRlc3QgPSByZXEudXJsID09ICcvaW5kZXguaHRtbCcgPyAnLycgOiByZXEudXJsO1xyXG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0gPlxyXG5cdFx0XHQ8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtkZXN0fSBjb250ZXh0PXt7fX0+XHJcblx0XHRcdFx0PEFwcCAvPiBcclxuXHRcdFx0PC9TdGF0aWNSb3V0ZXI+XHJcblx0XHQ8L1Byb3ZpZGVyPlxyXG5cdClcclxuXHJcblx0cmVzLnNlbmQoYFxyXG5cdFx0PGh0bWwgbGFuZz1cImVuLXVzXCI+XHJcblx0XHRcdDxoZWFkPlxyXG5cdFx0XHRcdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxyXG5cdFx0XHRcdDx0aXRsZT5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5IEluYy48L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj0ke3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLnBuZycpfT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4yLjAvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtaFdWamZsd0Z4TDZzTnpudGloMjdiZnhrcjI3UG1iYksvaVN2SithNCswb3dYcTc5ditsc0ZrVzU0Yk9HYmlEUVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcblx0XHRcdFx0PHNjcmlwdCBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XHJcblx0XHRcdDwvaGVhZD5cclxuXHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0PGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxyXG5cdFx0XHQ8L2JvZHk+XHJcblx0XHQ8L2h0bWw+XHJcblx0YClcclxufSlcclxuXHJcbmFwcC5wb3N0KCcvY29udGFjdCcsIChyZXEsIHJlcykgPT4ge1xyXG5cdGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuXHRcdHNlcnZpY2U6ICdnbWFpbCcsXHJcblx0XHRob3N0OiAnc210cC5nbWFpbC5jb20nLFxyXG5cdFx0YXV0aDoge1xyXG5cdFx0XHR0eXBlOiAnT0F1dGgyJyxcclxuXHRcdFx0dXNlcjogY2xpZW50LnVzZXIsXHJcblx0XHRcdGNsaWVudElkOiBjbGllbnQuaWQsXHJcblx0XHRcdGNsaWVudFNlY3JldDogY2xpZW50LnNlY3JldCxcclxuXHRcdFx0cmVmcmVzaFRva2VuOiBjbGllbnQucmVmcmVzaFRva2VuLFxyXG5cdFx0XHRhY2Nlc3NUb2tlbjogY2xpZW50LmFjY2Vzc1Rva2VuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGxldCBtYWlsT3B0aW9ucyA9IHtcclxuXHRcdGZyb206IGAke3JlcS5ib2R5Lm5hbWV9IDwke2NsaWVudC51c2VyfT5gLFxyXG5cdFx0dG86ICdhc3RhdG9uMTA4QG91dGxvb2suY29tJyxcclxuXHRcdHN1YmplY3Q6ICdDb250YWN0IGZyb20gQm9rZWggQmVzdCBQaG90byB3ZWJzaXRlJyxcclxuXHRcdGh0bWw6ICBgPCFET0NUWVBFID5cclxuXHRcdFx0XHQ8aHRtbCBsYW5nPVwidXMtZW5cIj5cclxuXHRcdFx0XHRcdDxoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiPlxyXG5cdFx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoOyBpbml0aWFsLXNjYWxlPTEuMDsgbWF4aW11bS1zY2FsZT0xLjA7IHVzZXItc2NhbGFibGU9bm87XCI+XHJcblx0XHRcdFx0XHRcdDx0aXRsZT5Db29sIEVtYWlsIGJybzwvdGl0bGU+XHJcblx0XHRcdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdFx0XHQ8Ym9keT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDE+RW1haWwgRnJvbSAke3JlcS5ib2R5Lm5hbWV9IGF0ICR7cmVxLmJvZHkuZW1haWx9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5tZXNzc2FnZSBmcm9tICR7cmVxLmJvZHkubmFtZX0gcmVhZHM6IDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm1lc3NhZ2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPiR7cmVxLmJvZHkubmFtZX0sICR7cmVxLmJvZHkubnVtYmVyfSAke3JlcS5ib2R5LmVtYWlsfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2JvZHk+XHJcblx0XHRcdFx0PC9odG1sPmBcclxuXHR9XHJcblxyXG5cdHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyLCBpbmZvKSA9PiB7XHJcblx0XHRpZihlcnIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xyXG5cdFx0XHRyZXMucmVkaXJlY3QoJy9jb250YWN0L2ZhaWwnKTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0VtYWlsIHNlbnQnKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9zdWNjZXNzJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coJ3NlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgJytwb3J0KSk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBQcm9qZWN0b3IgZnJvbSAnLi9Qcm9qZWN0b3InO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBhYm91dEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2Fib3V0X2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBwcm9qZWN0b3JBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy50b2dnbGVBYm91dE1vZGlmaWVyT24oKVxyXG5cdFx0Ly8gdGhpcy5wcm9wcy5hY3Rpb25zLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdBYm91dCBwcm9wcyBhcmUnLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy50b2dnbGVBYm91dE1vZGlmaWVyT2ZmKClcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFib3V0TW9kaWZpZXJPbigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWFib3V0Jyk7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVBYm91dE1vZGlmaWVyT2ZmKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tYWJvdXQnKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCBzbGlkZXMgPSB0aGlzLnByb3BzLmFib3V0LnNsaWRlcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImFib3V0X19wYWdlLWhlYWRlclwiPk91ciBTdG9yeTwvaDE+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dF9fY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19pbWFnZXNcIj5cclxuXHRcdFx0XHRcdFx0PFByb2plY3RvciBzdHlsZUZvcj17XCJhYm91dFwifSBzbGlkZXM9e3NsaWRlc30vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5EYXZpZCBCb2tlaCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIGEgc2FnZSBtb3dlciBnb2F0LCByYWNjb29ucyByaHViYXJiIG91dGhvdXNlIGEsIGFwcGxlcyBiZXJyaWVzIGNvcm4uIEtpZG5leSBiZWFucyBvc3RyaWNoIHRydWNrcy4gSW4gdGhlIHN0cmF3IHJhaW4gYmFycmVscy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+Qm9rZWggQmVzdCBQaG90b2dyYXBoeSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIHdlbGwga25vd24gZm9yIHJha2VzIHBsb3dzLiBKb2huIERlZXJlIGJlZXMsIHBhcnNsZXkgc3dlZXQgY29ybiBhdCwgcG9ya3kgcGlnIHNob3ZlbHMuIHZldGVyaW5hcmlhbiBibHVlIGJlcnJpZXMgY2F0dGxlIGplbGx5IGNhbm5pbmcuIEJsdWUgYmVycmllcyBwaWdlb25zIGJ1enogYW5kIGJlYW4gcHJhaXJpZSBkb2dzIG5haWxzIGF0IGVzdC4gUXVhY2sgaGFtbWVycyBlZ2dwbGFudCBpcyB1dHRlcnMgbmFpbHMgZ2FyZGVuLiAuIEF1Z2VycyBvYXRzIGhlbiBjb3dwaWVzLiBBcHBsZXMgZHVjay5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPk91ciBXb3JrIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgc3RyYXcsIHF1YWlsIGEgb3N0cmljaGVzIGRvbmtleSwgaGF5IGhvb2sgY3VjdW1iZXJzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy4gU2hvdmVscyBhdCByYWtlcyBwbG93cy4gUXVhY2sgaGFtbWVycyBlZ2dwbGFudCBpcyB1dHRlcnMgbmFpbHMgZ2FyZGVuLiBIYXliaW5lIGNhcnJvdHMgc295YmVhbnMsIG93bHMgZHVjayByYWlzaW5nIG9yLCBjaGVlcCBpbiBwbG93cy4gT3V0aG91c2UgYXQgbmFpbHMgbW93ZXIuIEZvcmFnZSBIYXJ2ZXN0ZXIsIGJlYW4gYW5kIFNpbGFnLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImFib3V0X19saXN0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkF3YXJkcyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxsaT5DdWx0aXZhdG9yIGJydXNzZWwgc3Byb3V0cyBoYXJyb3dzLCBjZWxlcnkgZHJlYWQgd2l0aCBrYWxlIGF1Z2VycyBoYXJyb3dzLiBWZXRlcmluYXJpYW4gYXQgU2VlZGVyIGVnZ3Mgd2l0aCB3YXRlcm1lbG9uIG9zdHJpY2hlcy48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+Q29vIHdpdGggcmFiYml0cyBlY3QuIEdyYXBlcyBuZXN0IHBpdGNoIGZvcmsgYW4gcGxvd3MgbWFwbGUgc3lydXAgeWVhcmxpbmdzLCBxdWlsdCBzcXVlYWsgZG9nZ2llcy4gTGFtYiBwaWcgcm9vc3RlciBzaGVlcC4gVXR0ZXJzIGFyZSB3ZWF0aGVydmFuZSBmb2FsIGVzdC4gPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPkdvYmJsZSBmZWVkLCBqZWxseSBwZXBwZXJzIGF0IHBsb3cgYmFzaWwgc3dhdGhlciwgY2F0IHdlYXRoZXJ2YW5lIGdyYWluIHRydWNrcywgaG9vdCBwb255IHJvYmlucyBwZWFjb2NrcyBhbiBrYWxlLiBSb29zdGVyIGNlbGVyeSBwaW5lYXBwbGVzIGZlcnRpbGl6ZXIuPC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdGNvbnN0IHsgYWJvdXQsIHByb2plY3RvciB9ID0gc3RhdGU7XHJcblx0cmV0dXJuIHsgXHJcblx0XHRhYm91dCwgXHJcblx0XHRwcm9qZWN0b3IgXHJcblx0fTsgXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gXHRcdGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhPYmplY3QuYXNzaWduKHt9LCBhYm91dEFjdGlvbnMsIHByb2plY3RvckFjdGlvbnMpLCBkaXNwYXRjaClcclxuXHR9OyBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEFib3V0KTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuXHRSb3V0ZSxcclxuXHRSZWRpcmVjdCxcclxuXHRTd2l0Y2hcclxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5cclxuLy9Sb3V0ZXMgaW1wb3J0XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwicGFnZS13cmFwcGVyXCIgY2xhc3NOYW1lPSdwYWdlLXdyYXBwZXInPlxyXG5cdFx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0XHRcdDxTd2l0Y2g+XHJcblx0XHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIGV4YWN0LCBjb21wb25lbnQ6IEMsIC4uLnJlc3QgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwYXRofVxyXG5cdFx0XHRcdFx0XHRcdFx0cGF0aD17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdGV4YWN0PXtleGFjdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDIHsuLi5wcm9wc30gey4uLnJlc3R9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpfSBcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvU3dpdGNoPlxyXG5cdFx0XHRcdDxGb290ZXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy9SZWFjdCBDb21wb25lbnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudHMgaW1wb3J0c1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi9Db250YWN0Rm9ybSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucyc7XHJcblxyXG5cclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpe1xyXG5cdFx0dGhpcy5jb25maXJtTWVzc2FnZUJveCgpO1xyXG5cdFx0Ly90aW1lb3V0IG5lZWRlZCBmb3IgcmVkaXJlY3QgdG8gc3R5bGUgbWFpbiBwcm9wZXJseS5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dGhpcy50b2dnbGVDb250YWN0TW9kaWZpZXJPbigpO1xyXG5cdFx0fSw1MCk7XHJcblx0XHR0aGlzLnRvZ2dsZUxvYWRlclN0eWxlcygpO1xyXG5cdFx0dGhpcy5yZWRpcmVjdEFmdGVyU2VuZE1lc3NhZ2UoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdDb250YWN0IHByb3BzIGlzOiAnLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT2ZmKCk7XHJcblx0XHR0aGlzLnRvZ2dsZUxvYWRlclN0eWxlcygpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ1bm1vdW50aW5nIENvbnRhY3RcIik7XHJcblx0XHR0aGlzLnByb3BzLnJlZGlyZWN0X2NoZWNrKGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZWRpcmVjdEFmdGVyU2VuZE1lc3NhZ2UoKSB7XHJcblx0XHRpZih0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnSGV5IHRoaXMgd29ya2VkIHJlZGlyZWN0aW5nJyk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnJlZGlyZWN0X2NoZWNrKHRydWUpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIG1heSBub3QgaGF2ZSB3b3JrZWQgc2V0dGluZyByZWRpcmVjdCB0byBmYWxzZScpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0XHRcdH0sMzUwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Y29uZmlybU1lc3NhZ2VCb3goKSB7XHJcblx0XHQvL2NoZWNrcyBzdGF0dXMgb2Ygc2VudCBtZXNzYWdlcyBhbmQgZGlzcGxheXMgYSBub3RpY2UgYWNjb3JkaW5nbHlcclxuXHRcdGNvbnNvbGUubG9nKFwic3RhcnQgY29uZmlybU1lc3NhZ2VCb3hcIilcclxuXHRcdGxldCBzdGF0dXMgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXM7XHJcblx0XHRpZihzdGF0dXMpe1xyXG5cdFx0XHRpZihzdGF0dXMgPT09ICdzdWNjZXNzJyl7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5zdG9yZV9tZXNzYWdlKFsnTWVzc2FnZSBTZW50ISEnLCAnSVxcJ2xsIGdldCBiYWNrIHRvIHlvdSBzb29uLiddKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInByb3BzIGFmdGVyIHN1Y2Nlc3MgXCIsIHRoaXMucHJvcHMuY29udGFjdC5tZXNzYWdlKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5zdG9yZV9tZXNzYWdlKFsnTWVzc2FnZSBFcnJvciEhJywgJ1BsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJ10pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgY29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBmYWlsIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QpOyB9LCAxMDAwKTsgXHJcblx0XHRcdH1cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyLS1kcm9wLWluJyk7XHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0fSwgNzUwKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4geyBcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lcicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyLS1kcm9wLWluJyk7XHJcblx0XHRcdH0sIDYwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9uKCkge1xyXG5cdFx0aWYoJCgnI21haW4nKS5oYXNDbGFzcygnbWFpbicpID09PSB0cnVlKXtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dG9nZ2xlQ29udGFjdE1vZGlmaWVyT2ZmKCkge1xyXG5cdFx0aWYoJCgnI21haW4nKS5oYXNDbGFzcygnbWFpbi0tY29udGFjdCcpID09PSB0cnVlKXtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1jb250YWN0Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dG9nZ2xlTG9hZGVyU3R5bGVzKCkge1xyXG5cdFx0JCgnI2xvYWRlcl9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19jb250YWluZXInKTtcclxuXHRcdCQoJyNsb2dvLWxvYWRlcjEnKS50b2dnbGVDbGFzcygnY29uZmlybS1sb2FkZXJfX2xvZ28nKTtcclxuXHRcdCQoJyNsb2dvLWxvYWRlcjInKS50b2dnbGVDbGFzcygnY29uZmlybS1sb2FkZXJfX2xvZ28nKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGlmKHRoaXMucHJvcHMuY29udGFjdC5yZWRpcmVjdCA9PT0gdHJ1ZSl7XHJcblx0XHRcdHJldHVybiA8UmVkaXJlY3QgdG89Jy9jb250YWN0JyAvPlxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbicgaWQ9XCJtYWluXCI+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXR1cyA/XHJcblx0XHRcdFx0XHQ8ZGl2IGlkPVwiY29uZmlybV9fY29udGFpbmVyXCIgY2xhc3NOYW1lPSdjb25maXJtX19jb250YWluZXInPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29uZmlybV9faW5uZXInPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdjb25maXJtX19oZWFkZXInPnt0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZVswXX08L2gyPlxyXG5cdFx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2NvbmZpcm1fX3RleHQnPnt0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZVsxXX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDpcclxuXHRcdFx0XHRcdG51bGwgIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2luZm8tb3V0dGVyLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdjb250YWN0X19oZWFkZXInPkdldCBJbiBUb3VjaCBXaXRoIFVzPC9oMT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X190ZXh0LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwPklmIHlvdSdyZSB0aGlua2luZyBhYm91dCBoaXJpbmcgYSBwaG90b2dyYXBoZXIgZm9yIGEgc2hvb3QsIHdlIHdvdWxkIGxvdmUgdG8gZGlzY3VzcyBpdCB3aXRoIHlvdS4gIFdlIGNhbiBwcm92aWRlIHByb2Zlc3Npb25hbCBpbnNpZ2h0IGFuZCBoZWxwIHRvIG1ha2UgeW91ciBkcmVhbSBzaG9vdCBhIHJlYWxpdHkuICBDb25zdWxhdGlvbnMgYXJlIGNvbXBsZXRlbHkgZnJlZS48L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFjdF9fYWRkcmVzcy1jb250YWluZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxhZGRyZXNzIGNsYXNzTmFtZT1cImNvbnRhY3RfX2FkZHJlc3MtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX2FkZHJlc3MtaWNvbnMgZmFzIGZhLW1hcC1tYXJrZXItYWx0XCI+PC9zcGFuPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fc3J0XCI+IEFkZHJlc3MgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQxMjMgV29vc3RlciBTdCAtIE5ldyBZb3JrLCBOWSAxMDAxMlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX2FkZHJlc3MtaWNvbnMgZmFyIGZhLWVudmVsb3BlXCI+PC9zcGFuPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fc3J0XCI+IEVtYWlsIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0REJva2VoQEJva2VoQmVzdC5jb21cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1waG9uZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBQaG9uZSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCgyMTIpIDU1NS01NTU1XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9hZGRyZXNzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX21lc3NhZ2UtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IGNvbnRhY3Q6IHN0YXRlLmNvbnRhY3QgfSB9XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7IHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShDb250YWN0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKT0+e1xyXG5cdHJldHVybihcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2NvbnRhaW5lcic+XHJcblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19mb3JtJyBtZXRob2Q9J3Bvc3QnIGFjdGlvbj0nJz5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nbmFtZScgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2lucHV0LW5hbWUnIGlkPSdpbnB1dE5hbWUnIHBsYWNlaG9sZGVyPSdOYW1lIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvaW5wdXQ+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J251bWJlcicgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2lucHV0LW51bWJlcicgaWQ9J2lucHV0TnVtYmVyJyBwbGFjZWhvbGRlcj0nTnVtYmVyJz48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdlbWFpbCcgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2lucHV0LWVtYWlsJyBpZD0naW5wdXRFbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvaW5wdXQ+XHJcblx0XHRcdFx0PHRleHRhcmVhIG5hbWU9J21lc3NhZ2UnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1tZXNzYWdlJyBpZD0naW5wdXRNZXNzYWdlJyBwbGFjZWhvbGRlcj0nTWVzc2FnZSAgKHJlcXVpcmVkKScgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0nc3VibWl0JyBpZD0nbWVzc2VuZ2VyX19zZW5kJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9fYnV0dG9uJyB2YWx1ZT0nU2VuZCBNZXNzYWdlJyA+PC9pbnB1dD5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5cclxuY2xhc3MgRmlsbXN0cmlwIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZpbG1zdHJpcCBtb3VudGVkIHByb3BzIGFyZSBcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUxvYWRlZChuYW1lKSB7XHJcblx0XHQkKGAjZmlsbXN0cmlwSW1hZ2VMb2FkZXJfXyR7bmFtZX1gKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlRXJyb3JlZChuYW1lKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImltYWdlIGVycm9yXCIpO1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdH1cclxuXHJcblx0bWFwU2xpZGVzVG9GaWxtc3RyaXAoc2xpZGVzKSB7XHJcblx0XHRsZXQgbWFwcGVkU2xpZGVzID0gc2xpZGVzLm1hcCggKHsgbmFtZSwgaW1hZ2UgfSkgPT4geyBcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGtleT17YGZpbG1zdHJpcF9fY2VsbC0ke25hbWV9YH0gY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jZWxsXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9faW1hZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9faW1hZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2V9IFxyXG5cdFx0XHRcdFx0XHRcdGFsdD17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlSW1hZ2VMb2FkZWQuYmluZCh0aGlzLCBuYW1lKX1cclxuXHRcdFx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDwvaW1nPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9faW1hZ2Utb3ZlcmxheVwiIGlkPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8TG9hZGVyIGxvYWRlcklkPXtgZmlsbXN0cmlwSW1hZ2VMb2FkZXJfXyR7bmFtZX1gfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG1hcHBlZFNsaWRlc1xyXG5cdH1cclxuXHJcblx0ZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcihzaGlmdEJ5KSB7XHJcblx0XHRsZXQgdHJhdmVsRGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250YWluZXInKS5vZmZzZXRXaWR0aCAtZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHByb3Bvc2VkUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkgKyBzaGlmdEJ5O1xyXG5cdFx0Y29uc29sZS5sb2coXCJ0cmF2ZWxEaXN0YW5jZSBpczogXCIrdHJhdmVsRGlzdGFuY2UrXCIgcHJvcG9zZWRQb3NpdGlvbiBpczogXCIrcHJvcG9zZWRQb3NpdGlvbitcIiB0cmF2ZWxEaXN0YW5jZSArIHByb3Bvc2VkUG9zaXRpb24gaXM6IFwiKyh0cmF2ZWxEaXN0YW5jZSArIHByb3Bvc2VkUG9zaXRpb24pKTtcclxuXHRcdGlmKHRyYXZlbERpc3RhbmNlIDw9IDAgfHwgcHJvcG9zZWRQb3NpdGlvbiA+IDAgfHwgdHJhdmVsRGlzdGFuY2UgKyBwcm9wb3NlZFBvc2l0aW9uIDwgMCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIG91dCBvZiBib3VuZHNcIik7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIHNoaWZ0IHRoZSBmaWxtc3RyaXBcIik7XHJcblx0XHRsZXQgZmlsbXN0cmlwUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgbGVmdEFycm93UG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgcmlnaHRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcpKTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGZpbG1zdHJpcFBvc2l0aW9uICsgc2hpZnRCeSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCBsZWZ0QXJyb3dQb3NpdGlvbiArIChzaGlmdEJ5Ki0xKSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgcmlnaHRBcnJvd1Bvc2l0aW9uICsgKHNoaWZ0QnkqLTEpKTtcclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBMZWZ0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzaGlmdGVkIGZpbG1zdHJpcCBsZWZ0XCIpO1xyXG5cdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyKDIwMCk7XHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBSaWdodCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwic2hpZnRlZCBmaWxtc3RyaXAgcmlnaHRcIik7XHJcblx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoLTIwMCk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwiZmlsbXN0cmlwX19jb250YWluZXJcIiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdHsgc2xpZGVzID8gdGhpcy5tYXBTbGlkZXNUb0ZpbG1zdHJpcChzbGlkZXMpIDogbnVsbCB9XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIGxlZnQ8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsbXN0cmlwTGVmdCgpfSA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXNydFwiPmZpbG1zdHJpcCByaWdodDwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsbXN0cmlwUmlnaHQoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIiBpZD1cImZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbG1zdHJpcDsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJGb290ZXIgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnModGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcyk7XHJcblx0fVxyXG5cclxuXHQvL2NoZWNrIHRvIHNlZSBpZiB0aGVzZSBjYW4gYmUgYWRkZWQgZGlyZWN0bHkgaW5saW5lIGR1cmluZyB0aGUgaW5pdGlhbCBtYXBwaW5nIG9mIHRoZSBTb2NpYWwgTWVkaWFsIExpbmtzIGluIHRoZSBKU1hcclxuXHRhZGRMaXN0ZW5lcnMoc29jaWFsTWVkaWFMaW5rc0luZm8pIHtcclxuXHRcdHNvY2lhbE1lZGlhTGlua3NJbmZvLmZvckVhY2goICh7IGZvbnRfY29sb3IsIG5hbWUsIGJnX2NvbG9yMSwgYmdfY29sb3IyIH0pID0+IHtcclxuXHRcdFx0JChgIyR7bmFtZX0taG92ZXItYm94YCkuaG92ZXIoKCkgPT4gdGhpcy5ob3Zlck9uKGAjJHtuYW1lfS1zb2NpYWxgLCBmb250X2NvbG9yLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiksICgpID0+IHRoaXMuaG92ZXJPZmYoYCMke25hbWV9LXNvY2lhbGApKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPbihpZCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCBmb250X2NvbG9yKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsIGBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICR7YmdfY29sb3IxfSwgJHtiZ19jb2xvcjJ9KWApO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPZmYoaWQpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCAnd2hpdGUnKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwKSknKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluay0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19ib2R5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPkFydGlzdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHREYXZpZCBCb2tlaCBmb3VuZGVyIG9mIEJva2VoIEJlc3QgUGhvdG9ncmFwaHksIElzIGFuIGF3YXJkIHdpbm5pbmcgcGhvdG9ncmFwaGVyIHdpdGggb3ZlciA4IHllYXJzIG9mIGV4cGVyaWVuY2UuIExlYXJuIG1vcmUgYWJvdXQgRGF2aWQgYW5kIEJva2VoIEJlc3QgUGhvdG9ncmFwaHkgXHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBpZD1cImZvb3Rlcl9fYXJ0aXN0LWxpbmtcIiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgdG89XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGk+IGhlcmUuIDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3MtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+MTIzIFdvb3N0ZXIgU3Q8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPiBOZXcgWW9yaywgTlkgMTAwMTI8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjEtMjEyLTU1NS01NTU1XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+KDIxMikgNTU1LTU1NTU8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPlNvY2lhbCBNZWRpYTwvaDQ+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmZvb3Rlci5zb2NpYWxNZWRpYUxpbmtzLm1hcCgoeyBuYW1lLCBsaW5rICwgaWNvbn0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2Ake25hbWV9LXNvY2lhbGB9IGlkPXtgJHtuYW1lfS1ob3Zlci1ib3hgfSBjbGFzc05hbWU9J2Zvb3Rlcl9fc29jaWFsLWhvdmVyLWJveCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLXNydFwiPntuYW1lfTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YCR7aWNvbn0gZm9vdGVyX19zb2NpYWwtbGlua2B9IGlkPXtgJHtuYW1lfS1zb2NpYWxgfSBhcmlhLWhpZGRlbj1cInRydWVcIiB0aXRsZT17bmFtZX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX2Jhc2UtdGV4dFwiPiZjb3B5OyBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IC0gTmV3IFlvcmssIE5ZPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9vdGVyOiBzdGF0ZS5mb290ZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzKShGb290ZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBnYWxsZXJ5QWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvZ2FsbGVyeV9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgR2FsbGVyeVNlbGVjdG9yIGZyb20gJy4vR2FsbGVyeVNlbGVjdG9yJztcclxuaW1wb3J0IFByb2plY3RvciBmcm9tICcuL1Byb2plY3Rvcic7XHJcblxyXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwib24gbW91bnQgR2FsbGVyeSBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0XHRjb25zb2xlLmxvZygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbiB1cGRhdGUgR2FsbGVyeSBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcblx0fVxyXG5cclxuXHJcblx0Y2xvc2VHYWxsZXJ5KCkge1xyXG5cdFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKSl7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlcy1jbG9zZWRcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdH1cclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5nYWxsZXJ5LnNsaWRlcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCIgaWQ9XCJtYWluXCI+XHJcblx0XHRcdFx0PEdhbGxlcnlTZWxlY3RvciBjaG9vc2VfZ2FsbGVyeT17IHRoaXMucHJvcHMuYWN0aW9ucy5jaG9vc2VfZ2FsbGVyeSB9IHVubG9hZF9zbGlkZXM9eyB0aGlzLnByb3BzLmFjdGlvbnMudW5sb2FkX3NsaWRlcyB9Lz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWxsZXJ5X19jbG9zZVwiIHRpdGxlPVwiQ2xvc2UgR2FsbGVyeVwiIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmNsb3NlR2FsbGVyeSgpIH0+XHJcblx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fY2xvc2Utc3J0XCI+Q2xvc2UgR2FsbGVyeTwvYj5cclxuXHRcdFx0XHRYXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiIGlkPVwiZ2FsbGVyeV9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImdhbGxlcnlcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBnYWxsZXJ5LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0Z2FsbGVyeSwgXHJcblx0XHRwcm9qZWN0b3IgXHJcblx0fTsgXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gXHRcdGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhPYmplY3QuYXNzaWduKHt9LCBnYWxsZXJ5QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShHYWxsZXJ5KTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuZ2FsbGVyeVNlbGVjdG9yTG9hZCgpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdHYWxsZXJ5U2VsZWN0b3IgcHJvcHMgYXJlOiAnLHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMuZ2FsbGVyeVNlbGVjdG9yLnRpbWVyKTtcclxuXHRcdHRoaXMuZ2FsbGVyeVNlbGVjdG9yUmVzZXQoKTtcclxuXHR9XHJcblxyXG5cdC8vc2F2ZSB0aW1lciB0byBzdGF0ZSB0byBjbGVhciBvbiB1bm1vdW50IHNvIHRoYXQgdGhlIHRpbWVyIGlzIGNsZWFyZWQgZXZlbiBpZiBwYWdlIGlzIHVubW91bnRlZCBtaWQgbG9hZFxyXG5cdGdhbGxlcnlTZWxlY3RvckxvYWQoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCJ9XHJcblx0XHRdO1xyXG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0JChnYWxsZXJ5U2VsZWN0b3JJZHNbY291bnRlcl0uY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpO1xyXG5cdFx0XHQkKGdhbGxlcnlTZWxlY3Rvcklkc1tjb3VudGVyXS5jb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXInKTtcclxuXHRcdFx0Y291bnRlcisrXHJcblx0XHRcdGlmKGNvdW50ZXIgPj0gZ2FsbGVyeVNlbGVjdG9ySWRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCA1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcih0aW1lcik7XHJcblx0fVxyXG5cclxuXHRnYWxsZXJ5U2VsZWN0b3JSZXNldCgpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3JJZHMuZm9yRWFjaCggKHsgY29udGFpbmVySWQgfSkgPT4ge1xyXG5cdFx0XHRpZigkKGNvbnRhaW5lcklkKS5oYXNDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKSkge1xyXG5cdFx0XHRcdCQoY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyJyk7XHJcblx0XHRcdFx0JChjb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcblx0Ly9wdXQgbGlzdGVuZXJzIGRpcmVjdGx5IG9uIHRvIHRoZSBodG1sIHRhZ3NcclxuXHRhZGRMaXN0ZW5lcnMoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCIsIGdhbGxlcnlOYW1lOiBcImFjdGlvblwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIiwgZ2FsbGVyeU5hbWU6IFwiZXZlbnRzXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wiLCBnYWxsZXJ5TmFtZTogXCJsYW5kc2NhcGVcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCIsIGdhbGxlcnlOYW1lOiBcInBvcnRyYWl0XCJ9XHJcblx0XHRdO1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9ySWRzLmZvckVhY2goICh7IGNvbnRhaW5lcklkLCBnYWxsZXJ5U2VsZWN0b3JJZCwgZ2FsbGVyeU5hbWUgfSkgPT4ge1xyXG5cdFx0XHQkKGNvbnRhaW5lcklkKS5ob3ZlcigoKSA9PiB0aGlzLmhvdmVySW4oZ2FsbGVyeVNlbGVjdG9ySWQpLCAoKSA9PiB0aGlzLmhvdmVyT3V0KGdhbGxlcnlTZWxlY3RvcklkKSk7XHJcblx0XHRcdCQoY29udGFpbmVySWQpLmNsaWNrKCgpID0+IHRoaXMuZ29Ub0dhbGxlcnkoZ2FsbGVyeU5hbWUpKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0Z29Ub0dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2VkIGdvVG9HYWxsZXJ5IG9uIFwiKyBnYWxsZXJ5KTtcclxuXHRcdHRoaXMucHJvcHMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0dGhpcy5wcm9wcy5jaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy5vcGVuR2FsbGVyeSgpOyB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHRvcGVuR2FsbGVyeSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBvcGVuIHRoZSBnYWxsZXJ5XCIpO1xyXG5cdFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpblwiKSl7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlc1wiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gY2xvc2VHYWxsZXJ5KCkge1xyXG5cdC8vIFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKSl7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0Ly8gXHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHQvLyBcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdGhvdmVySW4oaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdH1cclxuXHJcblxyXG5cdGhvdmVyT3V0KGlkKSB7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIEFjdGlvbiBHYWxsZXJ5XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzFcIj5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgIDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkFjdGlvbjwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBFdmVudHMgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18yXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5FdmVudHM8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgTGFuZHNjYXBlIEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fM1wiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+TGFuZHNjYXBlPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIFBvcnRyYWl0IEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNFwiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+UG9ydGFpdDwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3I6IHN0YXRlLmdhbGxlcnlTZWxlY3RvclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnlTZWxlY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hlYWRlcl9hY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bW9iaWxlTWVudTogZmFsc2UsXHJcblx0XHR9XHJcblx0XHR0aGlzLmhhbmRsZU1lbnVDbGljayA9IHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlYWRlciBwcm9wcyBhcmUgJywgdGhpcy5wcm9wcyk7XHJcblxyXG5cdH1cclxuXHJcblx0aGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNZW51Q2xpY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbW9iaWxlTWVudSBjbGlja2VkJyk7XHJcblx0XHRpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSB0cnVlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51T3V0KCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXMoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51SW4oKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVJbigpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2LS1zbGlkZS1pbicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYnKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVPdXQoKSB7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0fVxyXG4gXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uTW91c2VMZWF2ZT17KCk9PiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUoKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1saW5rXCIgaWQ9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBleGFjdCB0bz1cIi9cIiB0aXRsZT1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy5cIj5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxvZ29cIiBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIil9IGFsdD1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy4gbG9nb1wiIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbmFtZVwiPkJva2VoIFBob3RvZ3JhcGh5PC9wPlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbWVudS1pY29uIGZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVNZW51Q2xpY2soKX0+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtrZXl9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCIgZXhhY3QgdG89e3BhdGh9PntuYW1lfTwvTmF2TGluaz48L2xpPil9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDxuYXYgaWQ9XCJoZWFkZXJfX21vYmlsZS1uYXZcIiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGVyLmxpbmtJbmZvLm1hcCgoeyBrZXksIHBhdGgsIG5hbWUgfSkgPT4gPGxpIGtleT17YG1vYmlsZS0ke2tleX1gfT4gPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBoZWFkZXI6IHN0YXRlLmhlYWRlciB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMsIG51bGwsIHtwdXJlOmZhbHNlfSkoSGVhZGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9DaXJjbGVUeXBlIGltcG9ydFxyXG5pbXBvcnQgQ2lyY2xlVHlwZSBmcm9tICdjaXJjbGV0eXBlJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9ob21lX2FjdGlvbnMnO1xyXG5cclxuLy9EYXRhIGltcG9ydHNcclxuaW1wb3J0IGhvbWVTbGlkZXMgZnJvbSAnLi9kYXRhL2hvbWVTbGlkZXMnO1xyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGggPSB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuc2xpZGVTaG93KCk7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9uKCk7XHJcblx0XHR0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dXaWR0aCk7XHJcblx0XHRuZXcgQ2lyY2xlVHlwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZV9fd2VsY29tZS10ZXh0JykpLnJhZGl1cyg2MDApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZygnSG9tZSBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7IH0sIDE1MDAgKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVbm1vdW50ZWQgQ29tcG9uZW50XCIpO1xyXG5cdFx0dGhpcy50b2dnbGVIb21lTW9kaWZpZXJPZmYoKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdHRoaXMuc3RvcFNsaWRlU2hvdygpO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJcIik7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVIb21lTW9kaWZpZXJPbigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpbmRvd1dpZHRoKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV93aW5kb3dfd2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IGludGVydmFsVGltZXIgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtob21lU2xpZGVzWzBdLmltZ1NyY30pYCk7XHJcblx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7XHJcblx0XHQvL3JlbW92ZSBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7XHJcblx0XHRsZXQgY291bnQgPSAxXHJcblx0XHRjb25zb2xlLmxvZygnc2xpZGVzaG93IHN0YXJ0aW5nJyk7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKGNvdW50ID09IGhvbWVTbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRjb3VudCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGltYWdlID0gaG9tZVNsaWRlc1tjb3VudF0uaW1nU3JjO1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGNvdW50KytcclxuXHRcdFx0XHQvL2FkZCBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTtcclxuXHRcdFx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdFx0XHQvL3JlbW92ZSBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0XHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdFx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzcyBhZ2FpbiBzbyB0aGF0IHRoZSBlZmZlY3Qgc3RhcnRzIG92ZXJcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aW1hZ2V9KWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb3VudCsrIHBhdXNlIGlzOiAnLCB0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvdW50ID0gdGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KTtcclxuXHRcdFx0dGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCk7XHJcblx0XHR9LCA4NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3N0b3JlZCBpbnRlcnZhbFRpbWVyIGlzICcraW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyB0b28gc21hbGwgc3RvcHBlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cclxuXHQvLyBjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KSB7XHJcblx0Ly8gXHRsZXQgeyB3aW5kb3dXaWR0aCwgcGF1c2VTbGlkZVNob3cgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoIDwgNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdC8vIFx0XHRyZXR1cm4gY291bnRcclxuXHQvLyBcdH1cclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudCs9MVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdHN0b3BTbGlkZVNob3coKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2xlYXJpbmcgaW50ZXJ2YWxUaW1lciAnK3RoaXMucHJvcHMuaG9tZS5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIiA+XHJcblx0XHRcdFx0PGRpdiBpZD1cImhvbWVfX2ZpbHRlci1ib3hcIiBjbGFzc05hbWU9XCJob21lX19maWx0ZXItYm94XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lXCI+XHJcblx0XHRcdFx0XHQ8aDEgaWQ9XCJob21lX193ZWxjb21lLXRleHRcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dC1tb2JpbGVcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhvbWU6IHN0YXRlLmhvbWVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZD17cHJvcHMubG9hZGVySWR9IGNsYXNzTmFtZT1cImxvYWRlcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjFcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0XHQ8aW1nIGlkPVwibG9nby1sb2FkZXIyXCIgY2xhc3NOYW1lPVwibG9hZGVyX19sb2dvXCIgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZycpfT48L2ltZz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XHJcbmltcG9ydCBGaWxtc3RyaXAgZnJvbSAnLi9GaWxtc3RyaXAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFByb2plY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5kb3duQXJyb3dWaXNpYmlsaXR5KCk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0fSw1MCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuYXV0b1J1blByb2plY3RvcigpO1xyXG5cdFx0fSwxMDApO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3RvciBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIFByb2plY3RvciBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMucHJvamVjdG9yLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcChmYWxzZSk7XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfY29udGFpbmVyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdG5leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5pbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gaW5jcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKSB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5kZWNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gZGVjcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKSB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0dXBkYXRlU2xpZGVTaG93KCkge1xyXG5cdFx0bGV0IHsgc2xpZGVzLCBjdXJyZW50U2xpZGVObyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLmZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyKCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyhzbGlkZXNbY3VycmVudFNsaWRlTm9dKTtcclxuXHR9XHJcblxyXG5cclxuXHRsb2FkUHJvamVjdG9yKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5sb2FkX25ld19zbGlkZXModGhpcy5wcm9wcy5zbGlkZXMpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBcclxuXHRcdFx0dGhpcy51cGRhdGVTbGlkZVNob3coKTsgXHJcblx0XHR9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0YXV0b1J1blByb2plY3RvcigpIHtcclxuXHRcdGxldCBpbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoICgpPT4ge1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLnByb2plY3Rvci5zbGlkZXMgPT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdFx0dGhpcy5sb2FkUHJvamVjdG9yKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdHRoaXMubmV4dFNsaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sNjUwMCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHBhdXNlQnV0dG9uSGFuZGxlcigpIHtcclxuXHRcdGxldCBwYXVzZVNsaWRlU2hvdyA9IHRoaXMucHJvcHMucHJvamVjdG9yLnBhdXNlU2xpZGVTaG93O1xyXG5cdFx0aWYocGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRkb3duQXJyb3dWaXNpYmlsaXR5KCkge1xyXG5cdFx0Ly9pZiBjb250YWluZXIgaG91c2luZyB0aGUgcHJvamVjdG9yIGlzIHRvbyBzbWFsbCBkb24ndCBnaXZlIHRoZSBvcHRpb24gdG8gYnJpbmcgdXAgdGhlIHBob3RvIHN0cmlwXHJcblx0XHRsZXQgcHJvamVjdG9yQm94V2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdG9yJykub2Zmc2V0V2lkdGg7XHJcblx0XHRpZihwcm9qZWN0b3JCb3hXaWR0aCA8IDc1MCl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtU3RyaXBIYW5kbGVyKCkge1xyXG5cdFx0bGV0IGNhbGN1bGF0ZWRXaWR0aCA9IHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcy5sZW5ndGgqMjAwK1wicHhcIjtcclxuXHRcdHRoaXMucHJvcHMuc2hvd19maWxtc3RyaXAoIXRoaXMucHJvcHMucHJvamVjdG9yLnNob3dGaWxtc3RyaXApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyAkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ3dpZHRoJywgY2FsY3VsYXRlZFdpZHRoKSB9LCAyNSk7XHJcblx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9fY29udGFpbmVyXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKSB7XHJcblx0XHQvL21ha2Ugc3VyZSBtb2RpZmllZCBjbGFzcyBpcyBub3Qgb24gYmVmb3JlIHRvZ2dsaW5nXHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG9uIGJlZm9yZSB0b2dnbGluZyBpdCBvZmZcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS0tc2hpZnRcIik7XHJcblx0XHRcdC8vSWYgY29udHJvbC1kb3duIGlzIGluIHVzZSBieSB0aGUgZmlsbXN0cmlwIGxlYXZlIGl0IGFsb25lXHJcblx0XHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBPdmVybGF5U2hpZnRlcigpIHtcclxuXHRcdGxldCBjdXJyZW50U2xpZGVObyA9IHRoaXMucHJvcHMucHJvamVjdG9yLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIikuY3NzKCdsZWZ0JywgY3VycmVudFNsaWRlTm8qMjAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZUluZm8sIHNob3dGaWxtc3RyaXAsIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJwcm9qZWN0b3JcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JcIiBvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX0gb25Nb3VzZUxlYXZlPXsgKCkgPT4gdGhpcy51bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX0+XHJcblx0XHRcdFx0e2N1cnJlbnRTbGlkZUluZm8gPyBcclxuXHRcdFx0XHRcdDxTbGlkZSBwaG90b0luZm89e2N1cnJlbnRTbGlkZUluZm99IFxyXG5cdFx0XHRcdFx0XHRzdHlsZUZvcj17dGhpcy5wcm9wcy5zdHlsZUZvcn0gXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR7c2xpZGVzID9cclxuXHRcdFx0XHRcdDxGaWxtc3RyaXAgc2xpZGVzPXtzbGlkZXN9IC8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPmxlZnQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJldmlvdXNTbGlkZSgpfSA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnJpZ2h0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgb25DbGljaz17KCkgPT4gdGhpcy5uZXh0U2xpZGUoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+ZG93biBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy5maWxtU3RyaXBIYW5kbGVyKCl9PjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5wYXVzZSBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYXVzZS1jaXJjbGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhdXNlQnV0dG9uSGFuZGxlcigpfT48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgcHJvamVjdG9yOiBzdGF0ZS5wcm9qZWN0b3J9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKFByb2plY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5cclxuY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnNldFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnJlbW92ZVN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0c2V0U3R5bGVzKCkge1xyXG5cdFx0bGV0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcy5waG90b0luZm87XHJcblx0XHRsZXQgc3R5bGVGb3IgPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lYCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG9gKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHsgc3R5bGVGb3IgfSA9IHRoaXMucHJvcHMuc3R5bGVGb3I7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBmcmFtZVxyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZS0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIHBob3RvXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvLS0ke3N0eWxlRm9yfWApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHsgbmFtZSwgaW1hZ2UgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPXtgJHtuYW1lfS1zbGlkZV9fZnJhbWVgfSBjbGFzc05hbWU9XCJzbGlkZV9fZnJhbWVcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPXtgJHtuYW1lfS1zbGlkZV9fcGhvdG9gfSBjbGFzc05hbWU9XCJzbGlkZV9fcGhvdG9cIiBcclxuXHRcdFx0XHRcdHNyYz17aW1hZ2V9ICBcclxuXHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMpfSBcclxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvaW1nPlxyXG5cdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e1wic2xpZGVfX2xvYWRlclwifS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8cD5NeSBMb2FkZXIgaXNuJ3QgaXQgZ3JlYXQ/PC9wPlxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX21lc3NhZ2UobWVzc2FnZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfTUVTU0FHRScsXHJcblx0XHRtZXNzYWdlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RfY2hlY2socmVkaXJlY3QpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1JFRElSRUNUX0NIRUNLJyxcclxuXHRcdHJlZGlyZWN0XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKHRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHR0aW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX3RpbWVyKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0xFQVJfVElNRVInLFxyXG5cdFx0dGltZXI6IGZhbHNlXHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZF9waG90byhuYW1lLCBpbWFnZSwgY3VycmVudFNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQUREX1BIT1RPJyxcclxuXHRcdGN1cnJlbnRTbGlkZXMsXHJcblx0XHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aW1hZ2VcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSE9PU0VfR0FMTEVSWScsXHJcblx0XHRnYWxsZXJ5XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1vYmlsZV9oZWFkZXJfc3RhdHVzKG1vYmlsZU1lbnUpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ01PQklMRV9IRUFERVJfU1RBVFVTJyxcclxuXHRcdG1vYmlsZU1lbnVcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3dXaWR0aCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfV0lORE9XX1dJRFRIJyxcclxuXHRcdHdpbmRvd1dpZHRoXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9jdXJyZW50X3NsaWRlX2luZm8oY3VycmVudFNsaWRlSW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJyxcclxuXHRcdGN1cnJlbnRTbGlkZUluZm9cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHRvdGFsTm9TbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0lOQ1JFTUVOVF9TTElERScsXHJcblx0XHRjdXJyZW50U2xpZGVObyxcclxuXHRcdHRvdGFsTm9TbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHRvdGFsTm9TbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0RFQ1JFTUVOVF9TTElERScsXHJcblx0XHRjdXJyZW50U2xpZGVObyxcclxuXHRcdHRvdGFsTm9TbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXVzZV9zbGlkZV9zaG93KHBhdXNlU2xpZGVTaG93KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdQQVVTRV9TTElERV9TSE9XJyxcclxuXHRcdHBhdXNlU2xpZGVTaG93XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRfbmV3X3NsaWRlcyhzbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPQURfTkVXX1NMSURFUycsXHJcblx0XHRzbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWRfc2xpZGVzKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnVU5MT0FEX1NMSURFUycsXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd19maWxtc3RyaXAoc2hvd0ZpbG1zdHJpcCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU0hPV19GSUxNU1RSSVAnLFxyXG5cdFx0c2hvd0ZpbG1zdHJpcFxyXG5cdH1cclxufSIsImNvbnN0IGdhbGxlcnlTbGlkZXMgPSB7XHJcblx0YWN0aW9uOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZGF5bGlnaHRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9kYXlsaWdodC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYXQtdGhlLXRyYWNrXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibW90b3Jjcm9zc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL21vdG9yY3Jvc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ1bHRpbWF0ZS1zYXZlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vdWx0aW1hdGUtc2F2ZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNvY2Nlci1tYXRjaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImxlYXAtb2YtZmFpdGhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGlnaC1qdW1wXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vaGlnaC1qdW1wLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwia2ljay1mbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmlnLXdhdmUtc3VyZmluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJza2F0ZS1wYXJrXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNraWluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NraWluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInB1ZGRsZS1qdW1waW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vcHVkZGxlLWp1bXBpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWFjaC1iYWNrZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3VyZi1zcGxhc2hcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zdXJmLXNwbGFzaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNjaHJvZGluZ2Vycy1raWNrZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NjaHJvZGluZ2Vycy1raWNrZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0ZXZlbnRzOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicGFydHktZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZGF5LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGUtY2xvdWRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmlydGhkYXktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCI0dGgtYmlydGhkYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy80dGgtYmlydGhkYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwcmVnbmFuY3ktYW5ub3VuY2VtZW50XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcHJlZ25hbmN5LWFubm91bmNlbWVudC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImdyYWR1YXRpbmctY2xhc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0aW5nLWNsYXNzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmlydGgtYW5ub3VuY2VtZW50XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGgtYW5ub3VuY2VtZW50LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicGFydHktZnJpZW5kc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWZyaWVuZHMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ3ZWRkaW5nLWRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3dlZGRpbmctZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZmlyc3QtYmlydGhkYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImdyYWR1YXRlLWNlbGVicmF0aW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZS1hbmQtZ3Jvb21cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGxhbmRzY2FwZTogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImFyY2hlcy1uYXRpb25hbC1wYXJrXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyb29rbHluLWJyaWRnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2FsbS1jbG91ZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9jYWxtLWNsb3Vkcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYm9hdGhvdXNlLWNvdHRhZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZGV2aWxzLWJyaWRnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJsYWtlLXBlaXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdW5zZXQtcG9wcGllc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdW5zZXQtcGllclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicml2ZXItcmVmbGVjdGlvblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkdXNrLWluLWFmcmljYVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibWFyc2gtcGVpclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21hcnNoLXBlaXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJueWMtc2t5bGluZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibmlnaHQtZG9scGhpbnNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImZsYXRpcm9uLWJ1aWxkaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZmxhdGlyb24tYnVpbGRpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtb3VudGFpbi1sYWtlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbW91bnRhaW4tbGFrZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm55Yy1za3lsaW5lMlwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInB1cnBsZS1mbG93ZXJzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHBvcnRyYWl0OiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhdXRpZnVsLWJsdXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWF1dGlmdWwtY2FzdWFsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibG9uZGUtY2xvc2UtdXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2Fybml2YWwtbmlnaHRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoYXBweS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oYXBweS1naXJsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibGFjay1hbmQtd2hpdGUtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwieW91bmctbW9ua3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3lvdW5nLW1vbmtzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxvbmRlLWNsb3NlLXVwLWJva2VoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAtYm9rZWguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjbG9zZS11cC1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhpZGluZy13b21hblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW5cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hbi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImdpcmwtcmFiYml0LWZyaWVuZHNoaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJyZWQtaGFpcmVkLWNoaWxkXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3VpdC1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwid29tYW4tZHJlc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2xvc2UtdXAtd29tYW4tYm9rZWhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3VpdDFcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQxLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeVNsaWRlczsiLCJcclxuXHJcbmNvbnN0IGhvbWVTbGlkZXMgPSBbXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZycpLFxyXG5cdFx0fSxcdFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvc3RhcnktbGVucy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLXJlZmxlY3Rpb24uanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWdyb3VuZC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXQtd29yay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVTbGlkZXM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNsaWRlczogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYWJvdmUtdGhlLWNsb3VkcycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdiZWFjaC1zaG9vdCcsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYmVhY2gtc2hvb3QuanBnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdmaWVsZC1zaG9vdCcsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnaW4tYW5kLW91dC1vZi1mb2N1cycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdzbW9rZS1jbG91ZCcsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYXQtZHVzaycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYXQtZHVzay5qcGVnJylcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZycpXHJcblx0XHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBRERfUEhPVE8nOlxyXG5cdFx0XHRsZXQgcGhvdG9JbmZvID0gYWN0aW9uLnBob3RvSW5mbztcclxuXHRcdFx0bGV0IHNsaWRlcyA9IFsgLi4uYWN0aW9ucy5jdXJyZW50U2xpZGVzIF07XHJcblx0XHRcdHNsaWRlcy5wdXNoKHBob3RvSW5mbyk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWVzc2FnZTogWycnLCcnXSxcclxuXHRyZWRpcmVjdDogZmFsc2VcclxuXHR9O1xyXG5cclxuZnVuY3Rpb24gY29udGFjdF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfTUVTU0FHRSc6XHJcblx0XHRcdGxldCBtZXNzYWdlID0gYWN0aW9uLm1lc3NhZ2U7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBtZXNzYWdlIH1cclxuXHRcdGNhc2UgJ1JFRElSRUNUX0NIRUNLJzpcclxuXHRcdFx0bGV0IHJlZGlyZWN0ID0gYWN0aW9uLnJlZGlyZWN0O1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVkaXJlY3QgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c29jaWFsTWVkaWFMaW5rcyA6IFtcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0bmFtZTogXCJGYWNlQm9va1wiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Jva2VoYmVzdHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1mYWNlYm9vay1zcXVhcmVcIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiMzQjU5OThcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjMjQ1YWNkXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiRmxpY2tyXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5mbGlja3IuY29tL3Bob3Rvcy9kYXZpZF9ib2tlaC9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZsaWNrclwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiI0ZFMDg4M1wiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiMxMjhmZGNcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJJbnN0YWdyYW1cIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYm9rZWhiZXN0cGhvdG9ncmFwaHkvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1pbnN0YWdyYW1cIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiNmMTc1MzBcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjN2EzOGFiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiTGlua2VkSW5cIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYXZpZGJva2VoL1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtbGlua2VkaW5cIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiMwMDc3YjVcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjNTZiOWVlXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9vdGVyX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICgnU0VUX0ZPT1RFUl9MSU5LUycpOlxyXG5cdFx0XHRsZXQgbGlua3MgPSBhY3Rpb24ubGlua3M7XHJcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGxpbmtzfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3Rlcl9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCB0aW1lciA9IGFjdGlvbi50aW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHRpbWVyIH07XHJcblx0XHRjYXNlICdDTEVBUl9USU1FUic6XHJcblx0XHRcdHRpbWVyID0gYWN0aW9uLnRpbWVyO1xyXG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCB0aW1lcn1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VyczsiLCJpbXBvcnQgZ2FsbGVyeVNsaWRlcyBmcm9tICcuLi9kYXRhL2dhbGxlcnlTbGlkZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cclxuXHJcbmZ1bmN0aW9uIGFib3V0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBRERfUEhPVE8nOlxyXG5cdFx0XHRsZXQgcGhvdG9JbmZvID0gYWN0aW9uLnBob3RvSW5mbztcclxuXHRcdFx0bGV0IHNsaWRlcyA9IFsgLi4uYWN0aW9ucy5jdXJyZW50U2xpZGVzIF07XHJcblx0XHRcdHNsaWRlcy5wdXNoKHBob3RvSW5mbyk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0Y2FzZSAnQ0hPT1NFX0dBTExFUlknOlxyXG5cdFx0XHRsZXQgZ2FsbGVyeSA9IGFjdGlvbi5nYWxsZXJ5O1xyXG5cdFx0XHRzbGlkZXMgPSBbIC4uLmdhbGxlcnlTbGlkZXNbZ2FsbGVyeV0gXVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGxpbmtJbmZvOiBbXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstaG9tZScsIFxyXG5cdFx0XHRwYXRoOiAnLycsIFxyXG5cdFx0XHRuYW1lOiAnSG9tZSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstZ2FsbGVyeScsIFxyXG5cdFx0XHRwYXRoOiAnL2dhbGxlcnknLCBcclxuXHRcdFx0bmFtZTogJ1Bob3RvIEdhbGxlcnknXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWFib3V0JywgXHJcblx0XHRcdHBhdGg6ICcvYWJvdXQnLCBcclxuXHRcdFx0bmFtZTogJ0Fib3V0IEJva2VoJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1jb250YWN0JywgXHJcblx0XHRcdHBhdGg6ICcvY29udGFjdCcsIFxyXG5cdFx0XHRuYW1lOiAnQ29udGFjdCBVcydcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstdGVzdCcsIFxyXG5cdFx0XHRwYXRoOiAnL3Rlc3QnLCBcclxuXHRcdFx0bmFtZTogJ1Rlc3QgUGFnZSdcclxuXHRcdH0sXHJcblx0XSxcclxuXHRtb2JpbGVNZW51OiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdNT0JJTEVfSEVBREVSX1NUQVRVUyc6XHJcblx0XHRcdGxldCBtb2JpbGVNZW51ID0gYWN0aW9uLm1vYmlsZU1lbnVcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG1vYmlsZU1lbnUgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHBhdXNlU2xpZGVTaG93OiBmYWxzZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhvbWVfcmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfVElNRVInOlxyXG5cdFx0XHRsZXQgaW50ZXJ2YWxUaW1lciA9IGFjdGlvbi5pbnRlcnZhbFRpbWVyO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgaW50ZXJ2YWxUaW1lciB9O1xyXG5cdFx0Y2FzZSAnU1RPUkVfV0lORE9XX1dJRFRIJzpcclxuXHRcdFx0bGV0IHdpbmRvd1dpZHRoID0gYWN0aW9uLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgd2luZG93V2lkdGggfTtcclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3c7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZVNsaWRlU2hvdyB9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZV9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0Y3VycmVudFNsaWRlTm86IDAsXHJcblx0cGF1c2VTbGlkZVNob3c6IGZhbHNlLFxyXG5cdHNob3dGaWxtc3RyaXA6IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0b3JfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX0NVUlJFTlRfU0xJREVfSU5GTyc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVJbmZvID0gYWN0aW9uLmN1cnJlbnRTbGlkZUluZm87XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVJbmZvIH1cclxuXHRcdGNhc2UgJ0lOQ1JFTUVOVF9TTElERSc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0bGV0IHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gdG90YWxOb1NsaWRlcyAtIDEpe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdERUNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0dG90YWxOb1NsaWRlcyA9IGFjdGlvbi50b3RhbE5vU2xpZGVzO1xyXG5cdFx0XHRpZihjdXJyZW50U2xpZGVObyA9PSAwKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IHRvdGFsTm9TbGlkZXMgLSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vIC09IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vIH1cclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3dcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH1cclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ0xPQURfTkVXX1NMSURFUyc6XHJcblx0XHRcdGxldCBzbGlkZXMgPSBhY3Rpb24uc2xpZGVzO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVJbmZvID0gc2xpZGVzWzBdO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IDAgXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMsIGN1cnJlbnRTbGlkZUluZm8sICBjdXJyZW50U2xpZGVOb307XHJcblx0XHRjYXNlICdVTkxPQURfU0xJREVTJzpcclxuXHRcdFx0bGV0IHRlbXBTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnY3VycmVudFNsaWRlSW5mbyddO1xyXG5cdFx0XHRkZWxldGUgdGVtcFN0YXRlWydzbGlkZXMnXTtcclxuXHRcdFx0cmV0dXJuIHsgLi4udGVtcFN0YXRlIH07XHJcblx0XHRjYXNlICdTSE9XX0ZJTE1TVFJJUCc6XHJcblx0XHRcdGxldCBzaG93RmlsbXN0cmlwID0gYWN0aW9uLnNob3dGaWxtc3RyaXA7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzaG93RmlsbXN0cmlwIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcblx0Ly8gY3VycmVudFNsaWRlSW5mbzoge1xyXG5cdC8vIFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdC8vIFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdC8vIH0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0b3JfcmVkdWNlcnM7IiwiLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2luZGV4Lmh0bWwnLFxyXG5cdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRjb21wb25lbnQ6IEhvbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBBYm91dFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0JyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2NvbnRhY3QvOnN0YXR1cycsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IENvbnRhY3RcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZ2FsbGVyeScsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IEdhbGxlcnlcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvdGVzdCcsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IFRlc3RcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYWJvdXRfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBjb250YWN0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udGFjdF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBmb290ZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzJztcclxuaW1wb3J0IGhlYWRlcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBob21lX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycyc7XHJcbmltcG9ydCBwcm9qZWN0b3JfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9wcm9qZWN0b3JfcmVkdWNlcnMnO1xyXG5cclxuXHJcbi8vQWRkIGFkZGl0aW9uYWwgcmVkdWNlcnMgaW4gaGVyZSB0byBiZSBjb21iaW5lZCBpbnRvIG9uZSByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRhYm91dDogYWJvdXRfcmVkdWNlcnMsXHJcblx0Y29udGFjdDogY29udGFjdF9yZWR1Y2VycyxcclxuXHRmb290ZXI6IGZvb3Rlcl9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5OiBnYWxsZXJ5X3JlZHVjZXJzLFxyXG5cdGdhbGxlcnlTZWxlY3RvcjogZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzLFxyXG5cdGhlYWRlcjogaGVhZGVyX3JlZHVjZXJzLFxyXG5cdGhvbWU6IGhvbWVfcmVkdWNlcnMsXHJcblx0cHJvamVjdG9yOiBwcm9qZWN0b3JfcmVkdWNlcnMsXHJcbn0pXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG5cdHJvb3RSZWR1Y2VyLFxyXG5cdC8vIGlmIHJlZGV4IGRldnRvb2xzIGV4dGVuc2lvbiBpcyBvbiB0aGUgd2luZG93IG9iamVjdCBydW4gdGhlIGRldnRvb2xzIGZ1bmN0aW9uXHJcblx0X19pc0Jyb3dzZXJfXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaXJjbGV0eXBlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
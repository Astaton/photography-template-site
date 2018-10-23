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

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
	}

	_createClass(About, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.toggleAboutModifierOn();
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

			this.props.store_current_slide_no(slideNo);
			this.props.filmstripContainerJumpShifter(slideNo * -200);
			setTimeout(function () {
				_this3.props.updateSlideShow();
			});
		}
	}, {
		key: 'filmstripLeft',
		value: function filmstripLeft() {
			if (parseInt($('#filmstrip__container').css('left')) === 0 || parseInt($('#filmstrip__container').css('left')) % 200 === 0) {
				this.props.filmstripContainerShifter(200);
			}
		}
	}, {
		key: 'filmstripRight',
		value: function filmstripRight() {
			if (parseInt($('#filmstrip__container').css('left')) === 0 || parseInt($('#filmstrip__container').css('left')) % 200 === 0) {
				this.props.filmstripContainerShifter(-200);
			}
		}
	}, {
		key: 'highlightFilmstripControls',
		value: function highlightFilmstripControls() {
			$("#filmstrip__control-left").addClass("filmstrip__control-left--highlight");
			$("#filmstrip__control-left").removeClass("filmstrip__control-left");
			$("#filmstrip__control-right").addClass("filmstrip__control-right--highlight");
			$("#filmstrip__control-right").removeClass("filmstrip__control-right");
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

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
			var gallery = this.props.match.params.gallery;
			console.log("on mount Gallery props are", this.props);
			if (gallery) {
				this.goToGallery(gallery);
			}
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
		key: 'goToGallery',
		value: function goToGallery(gallery) {
			var _this2 = this;

			console.log("clicked goToGallery");
			this.props.actions.choose_gallery(gallery);
			this.props.actions.unload_slides();
			setTimeout(function () {
				_this2.openGallery();
			}, 50);
		}
	}, {
		key: 'openGallery',
		value: function openGallery() {
			console.log("Attempting to open the gallery");
			if ($("#main").hasClass("main")) {
				$("#main").toggleClass("main--gallery");
				$("#main").toggleClass("main");
				$("#gallerySelector__container").toggleClass("gallerySelector__container--open");
				$("#gallerySelector__container").toggleClass("gallerySelector__container");
				$("#gallery__images").toggleClass("gallery__images");
				$("#gallery__images").toggleClass("gallery__images-closed");
			}
			setTimeout(function () {
				$('html,body').animate({
					scrollTop: $("#main").offset().top
				});
			}, 1500);
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
			console.log("attempting push to history");
			// withRouter( ({ history }) => { history.push('/gallery') } );
		}

		//choose_gallery={ this.props.actions.choose_gallery }

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var Close = (0, _reactRouterDom.withRouter)(function (_ref) {
				var history = _ref.history;
				return _react2.default.createElement(
					'span',
					{ className: 'gallery__close',
						title: 'Close Gallery',
						onClick: function onClick() {
							_this3.closeGallery();
							history.push('/gallery');
						}
					},
					_react2.default.createElement(
						'b',
						{ className: 'gallery__close-srt' },
						'Close Gallery'
					),
					'X'
				);
			});
			var slides = this.props.gallery.slides;
			return _react2.default.createElement(
				'div',
				{ className: 'main', id: 'main' },
				_react2.default.createElement(_GallerySelector2.default, { goToGallery: this.goToGallery }),
				_react2.default.createElement(Close, null),
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

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

			var gallerySelectorIds = [{ containerId: "#gallerySelector__1-container", gallerySelectorId: "#gallerySelector__1" }, { containerId: "#gallerySelector__2-container", gallerySelectorId: "#gallerySelector__2" }, { containerId: "#gallerySelector__3-container", gallerySelectorId: "#gallerySelector__3" }, { containerId: "#gallerySelector__4-container", gallerySelectorId: "#gallerySelector__4" }];
			gallerySelectorIds.forEach(function (_ref2) {
				var containerId = _ref2.containerId,
				    gallerySelectorId = _ref2.gallerySelectorId,
				    galleryName = _ref2.galleryName;

				(0, _jquery2.default)(containerId).hover(function () {
					return _this2.hoverIn(gallerySelectorId);
				}, function () {
					return _this2.hoverOut(gallerySelectorId);
				});
				// $(containerId).click(() => this.props.goToGallery());
			});
		}
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
					_reactRouterDom.NavLink,
					{ to: '/gallery/action',
						id: 'gallerySelector__1-container',
						className: 'gallerySelector__section-container',
						title: 'View The Action Gallery'
					},
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__1' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Action'
					)
				),
				_react2.default.createElement(
					_reactRouterDom.NavLink,
					{ to: '/gallery/events',
						id: 'gallerySelector__2-container',
						className: 'gallerySelector__section-container',
						title: 'View The Events Gallery'
					},
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__2' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Events'
					)
				),
				_react2.default.createElement(
					_reactRouterDom.NavLink,
					{ to: '/gallery/landscape',
						id: 'gallerySelector__3-container',
						className: 'gallerySelector__section-container',
						title: 'View The Landscape Gallery'
					},
					_react2.default.createElement('div', { className: 'gallerySelector__section', id: 'gallerySelector__3' }),
					_react2.default.createElement(
						'p',
						{ className: 'gallerySelector__text' },
						'Landscape'
					)
				),
				_react2.default.createElement(
					_reactRouterDom.NavLink,
					{ to: '/gallery/portrait',
						id: 'gallerySelector__4-container',
						className: 'gallerySelector__section-container',
						title: 'View The Portrait Gallery'
					},
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

		var _this = _possibleConstructorReturn(this, (Projector.__proto__ || Object.getPrototypeOf(Projector)).call(this, props));

		_this.filmstripContainerShifter = _this.filmstripContainerShifter.bind(_this);
		_this.filmstripContainerJumpShifter = _this.filmstripContainerJumpShifter.bind(_this);
		return _this;
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

			var halfSecCounter = 0;
			var intervalTimer = setInterval(function () {
				if (_this6.props.projector.slides === undefined) {
					_this6.loadProjector();
				}
				halfSecCounter += 500;
				if (_this6.props.projector.pauseSlideShow == false && halfSecCounter >= 6500) {
					_this6.nextSlide();
					halfSecCounter = 0;
				}
			}, 500);
			this.props.store_timer(intervalTimer);
		}
	}, {
		key: 'pauseButtonHandler',
		value: function pauseButtonHandler() {
			var pauseSlideShow = this.props.projector.pauseSlideShow;
			if (pauseSlideShow == false) {
				this.props.pause_slide_show(true);
				$("#projector__control-pause-icon").addClass("projector__control-pause-icon--hidden");
				$("#projector__control-pause-icon").removeClass("projector__control-pause-icon");
				$("#projector__control-play-icon").addClass("projector__control-play-icon");
				$("#projector__control-play-icon").removeClass("projector__control-play-icon--hidden");
			} else {
				this.props.pause_slide_show(false);
				$("#projector__control-pause-icon").addClass("projector__control-pause-icon");
				$("#projector__control-pause-icon").removeClass("projector__control-pause-icon--hidden");
				$("#projector__control-play-icon").addClass("projector__control-play-icon--hidden");
				$("#projector__control-play-icon").removeClass("projector__control-play-icon");
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
			var _this7 = this;

			var calculatedWidth = this.props.projector.slides.length * 200 + "px";
			this.props.show_filmstrip(!this.props.projector.showFilmstrip);
			setTimeout(function () {
				$('#filmstrip__container').css('width', calculatedWidth);
				_this7.filmstripContainerJumpShifter();
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
		key: 'filmstripContainerJumpShifter',
		value: function filmstripContainerJumpShifter(shiftTo) {
			console.log("shiftTo is: " + shiftTo);
			if (shiftTo === undefined) {
				shiftTo = this.props.projector.currentSlideNo * -200;
				console.log("undefined shiftTo, setting shiftTo", shiftTo);
			}
			var projectorDisplayWidth = document.getElementById('projector').offsetWidth;
			var projectorBoxCenter = projectorDisplayWidth / 2 - projectorDisplayWidth / 2 % 200;
			var filmstripWidth = document.getElementById('filmstrip__container').offsetWidth;
			var rightArrowWidth = document.getElementById('filmstrip__control-right').offsetWidth;
			var travelDistance = filmstripWidth * -1 + projectorDisplayWidth;
			var leftArrowOffset = 8;
			var rightArrowOffset = projectorDisplayWidth - (rightArrowWidth + 8);
			var filmstripOffset = 0;
			var centerCell = shiftTo + projectorBoxCenter;
			if (travelDistance >= 0) {
				console.log("travelDistance");
				return;
			}
			if (centerCell >= 0) {
				console.log("centerCell");
				$('#filmstrip__container').css('left', filmstripOffset);
				$('#filmstrip__control-left').css('left', leftArrowOffset);
				$('#filmstrip__control-right').css('left', rightArrowOffset);
				return;
			}
			if (centerCell <= travelDistance) {
				$('#filmstrip__container').css('left', travelDistance);
				$('#filmstrip__control-left').css('left', travelDistance * -1 + leftArrowOffset);
				$('#filmstrip__control-right').css('left', travelDistance * -1 + rightArrowOffset);
				return;
			}
			$('#filmstrip__container').css('left', centerCell);
			$('#filmstrip__control-left').css('left', centerCell * -1 + leftArrowOffset);
			$('#filmstrip__control-right').css('left', centerCell * -1 + rightArrowOffset);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this8 = this;

			var _props$projector4 = this.props.projector,
			    currentSlideInfo = _props$projector4.currentSlideInfo,
			    showFilmstrip = _props$projector4.showFilmstrip,
			    slides = _props$projector4.slides;

			return _react2.default.createElement(
				'div',
				{ id: 'projector',
					className: 'projector',
					onMouseEnter: function onMouseEnter() {
						return _this8.shiftProjectorControls();
					},
					onMouseLeave: function onMouseLeave() {
						return _this8.unshiftProjectorControls();
					}
				},
				currentSlideInfo ? _react2.default.createElement(_Slide2.default, { photoInfo: currentSlideInfo,
					styleFor: this.props.styleFor
				}) : _react2.default.createElement(_Loader2.default, null),
				slides ? _react2.default.createElement(_Filmstrip2.default, { slides: slides,
					updateSlideShow: function updateSlideShow() {
						return _this8.updateSlideShow();
					},
					filmstripContainerShifter: this.filmstripContainerShifter,
					filmstripContainerJumpShifter: this.filmstripContainerJumpShifter
				}) : null,
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-left',
						className: 'projector__control-left',
						title: 'See previous photo',
						onClick: function onClick() {
							return _this8.previousSlide();
						}
					},
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'left arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-left' })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-right',
						className: 'projector__control-right',
						title: 'See next photo',
						onClick: function onClick() {
							return _this8.nextSlide();
						}
					},
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'right arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-right' })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-down',
						className: 'projector__control-down',
						title: 'See all photos in current gallery',
						onClick: function onClick() {
							return _this8.projectorDownHandler();
						}
					},
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'down arrow'
					),
					_react2.default.createElement('i', { className: 'fas fa-chevron-circle-down' })
				),
				_react2.default.createElement(
					'span',
					{ id: 'projector__control-pause',
						className: 'projector__control-pause',
						title: 'Pause/Play slide show',
						onClick: function onClick() {
							return _this8.pauseButtonHandler();
						}
					},
					_react2.default.createElement(
						'b',
						{ className: 'projector__control-srt' },
						'pause arrow'
					),
					_react2.default.createElement(
						'div',
						{ className: 'projector__controls-pause-play-icon-wrapper' },
						_react2.default.createElement('i', { id: 'projector__control-pause-icon', className: 'fas fa-pause-circle projector__control-pause-icon' }),
						_react2.default.createElement('i', { id: 'projector__control-play-icon', className: 'fas fa-play-circle projector__control-play-icon--hidden' })
					)
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
	exact: true,
	component: _Gallery2.default
}, {
	path: '/gallery/:gallery',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInRvZ2dsZUFib3V0TW9kaWZpZXJPbiIsInRvZ2dsZUFib3V0TW9kaWZpZXJPZmYiLCIkIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZXMiLCJhYm91dCIsIkNvbXBvbmVudCIsInN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbmRleCIsImltYWdlIiwiZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlciIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsInNsaWRlTm8iLCJzdG9yZV9jdXJyZW50X3NsaWRlX25vIiwiZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIiLCJ1cGRhdGVTbGlkZVNob3ciLCJwYXJzZUludCIsImZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlnaGxpZ2h0RmlsbXN0cmlwQ29udHJvbHMiLCJtYXBTbGlkZXNUb0ZpbG1zdHJpcCIsImZpbG1zdHJpcExlZnQiLCJmaWxtc3RyaXBSaWdodCIsIkZvb3RlciIsImFkZExpc3RlbmVycyIsImZvb3RlciIsInNvY2lhbE1lZGlhTGlua3MiLCJzb2NpYWxNZWRpYUxpbmtzSW5mbyIsImZvckVhY2giLCJmb250X2NvbG9yIiwiYmdfY29sb3IxIiwiYmdfY29sb3IyIiwiaG92ZXIiLCJob3Zlck9uIiwiaG92ZXJPZmYiLCJsaW5rIiwiaWNvbiIsImdhbGxlcnlBY3Rpb25zIiwiR2FsbGVyeSIsImdhbGxlcnkiLCJnb1RvR2FsbGVyeSIsImNsb3NlR2FsbGVyeSIsImNob29zZV9nYWxsZXJ5IiwidW5sb2FkX3NsaWRlcyIsIm9wZW5HYWxsZXJ5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIkNsb3NlIiwiaGlzdG9yeSIsInB1c2giLCJHYWxsZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5U2VsZWN0b3JMb2FkIiwiY2xlYXJJbnRlcnZhbCIsImdhbGxlcnlTZWxlY3RvciIsInRpbWVyIiwiZ2FsbGVyeVNlbGVjdG9yUmVzZXQiLCJnYWxsZXJ5U2VsZWN0b3JJZHMiLCJjb250YWluZXJJZCIsImdhbGxlcnlTZWxlY3RvcklkIiwiY291bnRlciIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3RvcmVfdGltZXIiLCJnYWxsZXJ5TmFtZSIsImhvdmVySW4iLCJob3Zlck91dCIsIkhlYWRlciIsIm1vYmlsZU1lbnUiLCJoYW5kbGVNZW51Q2xpY2siLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGVhZGVyIiwidG9nZ2xlTW9iaWxlTWVudU91dCIsIm1vYmlsZV9oZWFkZXJfc3RhdHVzIiwidG9nZ2xlTW9iaWxlTWVudUluIiwibGlua0luZm8iLCJrZXkiLCJwdXJlIiwiSG9tZSIsInVwZGF0ZVdpbmRvd1dpZHRoIiwic2xpZGVTaG93IiwidG9nZ2xlSG9tZU1vZGlmaWVyT24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiQ2lyY2xlVHlwZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyYWRpdXMiLCJ0b2dnbGVIb21lTW9kaWZpZXJPZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFNsaWRlU2hvdyIsInN0b3JlX3dpbmRvd193aWR0aCIsImlubmVyV2lkdGgiLCJpbnRlcnZhbFRpbWVyIiwiaG9tZSIsImhvbWVTbGlkZXMiLCJpbWdTcmMiLCJjb3VudCIsInBhdXNlU2xpZGVTaG93IiwiY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSIsIndpbmRvd1dpZHRoIiwicGF1c2Vfc2xpZGVfc2hvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvYWRlciIsImxvYWRlcklkIiwiUHJvamVjdG9yIiwiZG93bkFycm93VmlzaWJpbGl0eSIsImxvYWRQcm9qZWN0b3IiLCJhdXRvUnVuUHJvamVjdG9yIiwic2hvd19maWxtc3RyaXAiLCJjdXJyZW50U2xpZGVObyIsImluY3JlbWVudF9zbGlkZSIsImRlY3JlbWVudF9zbGlkZSIsImZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyIiwic3RvcmVfY3VycmVudF9zbGlkZV9pbmZvIiwibG9hZF9uZXdfc2xpZGVzIiwiaGFsZlNlY0NvdW50ZXIiLCJ1bmRlZmluZWQiLCJuZXh0U2xpZGUiLCJwcm9qZWN0b3JCb3hXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2FsY3VsYXRlZFdpZHRoIiwic2hvd0ZpbG1zdHJpcCIsInNoaWZ0QnkiLCJ0cmF2ZWxEaXN0YW5jZSIsInByb3Bvc2VkUG9zaXRpb24iLCJmaWxtc3RyaXBQb3NpdGlvbiIsImxlZnRBcnJvd1Bvc2l0aW9uIiwicmlnaHRBcnJvd1Bvc2l0aW9uIiwic2hpZnRUbyIsInByb2plY3RvckRpc3BsYXlXaWR0aCIsInByb2plY3RvckJveENlbnRlciIsImZpbG1zdHJpcFdpZHRoIiwicmlnaHRBcnJvd1dpZHRoIiwibGVmdEFycm93T2Zmc2V0IiwicmlnaHRBcnJvd09mZnNldCIsImZpbG1zdHJpcE9mZnNldCIsImNlbnRlckNlbGwiLCJjdXJyZW50U2xpZGVJbmZvIiwic2hpZnRQcm9qZWN0b3JDb250cm9scyIsInVuc2hpZnRQcm9qZWN0b3JDb250cm9scyIsInN0eWxlRm9yIiwicHJldmlvdXNTbGlkZSIsInByb2plY3RvckRvd25IYW5kbGVyIiwicGF1c2VCdXR0b25IYW5kbGVyIiwiU2xpZGUiLCJzZXRTdHlsZXMiLCJyZW1vdmVTdHlsZXMiLCJwaG90b0luZm8iLCJUZXN0IiwiYWRkX3Bob3RvIiwiY3VycmVudFNsaWRlcyIsImNsZWFyX3RpbWVyIiwidG90YWxOb1NsaWRlcyIsImdhbGxlcnlTbGlkZXMiLCJhY3Rpb24iLCJldmVudHMiLCJsYW5kc2NhcGUiLCJwb3J0cmFpdCIsImluaXRpYWxTdGF0ZSIsImFib3V0X3JlZHVjZXJzIiwiY29udGFjdF9yZWR1Y2VycyIsImZvb3Rlcl9yZWR1Y2VycyIsImxpbmtzIiwiZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIiwiaGVhZGVyX3JlZHVjZXJzIiwiaG9tZV9yZWR1Y2VycyIsInByb2plY3Rvcl9yZWR1Y2VycyIsInRlbXBTdGF0ZSIsInJvb3RSZWR1Y2VyIiwiZ2FsbGVyeV9yZWR1Y2VycyIsIl9faXNCcm93c2VyX18iLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEscUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0Y7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FD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Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiOyIsImNvbnN0IGNsaWVudCA9IHtcclxuXHR1c2VyOiAnb3Jzb24xMDhAZ21haWwuY29tJyxcclxuXHRpZDogJzU1NzM0NjcxODY5MC1jaGQxZWYxY2UwdGpqbmgxN211cWQwMWRqZmk2b201by5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcblx0c2VjcmV0OiAnNmhTRmoxdWRCbHRNWGswZ0pRTmhOYTh3JyxcclxuXHRyZWZyZXNoVG9rZW46ICcxL3JuVlZaZzRpWTIyQUJDd2trdUpqVlk4TjBBaGRuanVLVHRUaGo3cFlROUlqTWJkYWFvSG9OTVpxYm5JNWlpejgnLFxyXG5cdGFjZXNzVG9rZW46ICd5YTI5Lkdsc0JCblRRXzVseWtHM3ZmakRWamRVMHFReTdDYjdvQjhlWjhfU2xOcDg2dW5Ba1JrS1pDc0ltSmZDandyem9CUmM3UEQwd0ctMFhyWlFES2tQY0dpdmNzQjRad1V0WVhDN3RtUWRmNkthMFdzcUFtWEI4akV1YTBqaWsnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckVtYWlsID0gXCJhc3RhdG9uMTA4QG91dGxvb2suY29tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCIvL2V4cHJlc3MgaW1wb3J0XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG4vL21pZGRsZXdhcmUgaW1wb3J0c1xyXG5pbXBvcnQgZXhwcmVzc1N0YXRpY0d6aXAgZnJvbSBcImV4cHJlc3Mtc3RhdGljLWd6aXBcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9zaGFyZWQvcm91dGVzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCc7XHJcblxyXG4vL2xvY2FsIGltcG9ydHNcclxuaW1wb3J0IGNsaWVudCwgeyB1c2VyRW1haWwgfSBmcm9tICcuLi8uLi9vYXV0aC9jbGllbnREYXRhJztcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZSgnLycsIGV4cHJlc3NTdGF0aWNHemlwKFwicHVibGljL1wiKSk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdGxldCBkZXN0ID0gcmVxLnVybCA9PSAnL2luZGV4Lmh0bWwnID8gJy8nIDogcmVxLnVybDtcclxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cclxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17ZGVzdH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdDxBcHAgLz4gXHJcblx0XHRcdDwvU3RhdGljUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpXHJcblxyXG5cdHJlcy5zZW5kKGBcclxuXHRcdDxodG1sIGxhbmc9XCJlbi11c1wiPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cclxuXHRcdFx0XHQ8dGl0bGU+Qm9rZWggQmVzdCBQaG90b2dyYXBoeSBJbmMuPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JHtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby5wbmcnKX0+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMi4wL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWhXVmpmbHdGeEw2c056bnRpaDI3YmZ4a3IyN1BtYmJLL2lTdkorYTQrMG93WHE3OXYrbHNGa1c1NGJPR2JpRFFcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxyXG5cdFx0XHRcdDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJhcHBcIj4ke21hcmt1cH08L2Rpdj5cclxuXHRcdFx0PC9ib2R5PlxyXG5cdFx0PC9odG1sPlxyXG5cdGApXHJcbn0pXHJcblxyXG5hcHAucG9zdCgnL2NvbnRhY3QnLCAocmVxLCByZXMpID0+IHtcclxuXHRsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcblx0XHRzZXJ2aWNlOiAnZ21haWwnLFxyXG5cdFx0aG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuXHRcdGF1dGg6IHtcclxuXHRcdFx0dHlwZTogJ09BdXRoMicsXHJcblx0XHRcdHVzZXI6IGNsaWVudC51c2VyLFxyXG5cdFx0XHRjbGllbnRJZDogY2xpZW50LmlkLFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IGNsaWVudC5zZWNyZXQsXHJcblx0XHRcdHJlZnJlc2hUb2tlbjogY2xpZW50LnJlZnJlc2hUb2tlbixcclxuXHRcdFx0YWNjZXNzVG9rZW46IGNsaWVudC5hY2Nlc3NUb2tlblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgbWFpbE9wdGlvbnMgPSB7XHJcblx0XHRmcm9tOiBgJHtyZXEuYm9keS5uYW1lfSA8JHtjbGllbnQudXNlcn0+YCxcclxuXHRcdHRvOiAnYXN0YXRvbjEwOEBvdXRsb29rLmNvbScsXHJcblx0XHRzdWJqZWN0OiAnQ29udGFjdCBmcm9tIEJva2VoIEJlc3QgUGhvdG8gd2Vic2l0ZScsXHJcblx0XHRodG1sOiAgYDwhRE9DVFlQRSA+XHJcblx0XHRcdFx0PGh0bWwgbGFuZz1cInVzLWVuXCI+XHJcblx0XHRcdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHRcdFx0PG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIj5cclxuXHRcdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aDsgaW5pdGlhbC1zY2FsZT0xLjA7IG1heGltdW0tc2NhbGU9MS4wOyB1c2VyLXNjYWxhYmxlPW5vO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGl0bGU+Q29vbCBFbWFpbCBicm88L3RpdGxlPlxyXG5cdFx0XHRcdFx0PC9oZWFkPlxyXG5cdFx0XHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkVtYWlsIEZyb20gJHtyZXEuYm9keS5uYW1lfSBhdCAke3JlcS5ib2R5LmVtYWlsfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHA+bWVzc3NhZ2UgZnJvbSAke3JlcS5ib2R5Lm5hbWV9IHJlYWRzOiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5tZXNzYWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm5hbWV9LCAke3JlcS5ib2R5Lm51bWJlcn0gJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9ib2R5PlxyXG5cdFx0XHRcdDwvaHRtbD5gXHJcblx0fVxyXG5cclxuXHR0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVyciwgaW5mbykgPT4ge1xyXG5cdFx0aWYoZXJyKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9mYWlsJyk7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFbWFpbCBzZW50Jyk7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3Qvc3VjY2VzcycpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICcrcG9ydCkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWJvdXRBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9hYm91dF9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUFib3V0TW9kaWZpZXJPbigpXHJcblx0XHRjb25zb2xlLmxvZygnQWJvdXQgcHJvcHMgYXJlJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9mZigpXHJcblx0fVxyXG5cclxuXHR0b2dnbGVBYm91dE1vZGlmaWVyT24oKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWFib3V0Jyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5hYm91dC5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJhYm91dF9fcGFnZS1oZWFkZXJcIj5PdXIgU3Rvcnk8L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiYWJvdXRcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+RGF2aWQgQm9rZWggPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBhIHNhZ2UgbW93ZXIgZ29hdCwgcmFjY29vbnMgcmh1YmFyYiBvdXRob3VzZSBhLCBhcHBsZXMgYmVycmllcyBjb3JuLiBLaWRuZXkgYmVhbnMgb3N0cmljaCB0cnVja3MuIEluIHRoZSBzdHJhdyByYWluIGJhcnJlbHMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyB3ZWxsIGtub3duIGZvciByYWtlcyBwbG93cy4gSm9obiBEZWVyZSBiZWVzLCBwYXJzbGV5IHN3ZWV0IGNvcm4gYXQsIHBvcmt5IHBpZyBzaG92ZWxzLiB2ZXRlcmluYXJpYW4gYmx1ZSBiZXJyaWVzIGNhdHRsZSBqZWxseSBjYW5uaW5nLiBCbHVlIGJlcnJpZXMgcGlnZW9ucyBidXp6IGFuZCBiZWFuIHByYWlyaWUgZG9ncyBuYWlscyBhdCBlc3QuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gLiBBdWdlcnMgb2F0cyBoZW4gY293cGllcy4gQXBwbGVzIGR1Y2suXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5PdXIgV29yayA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIHN0cmF3LCBxdWFpbCBhIG9zdHJpY2hlcyBkb25rZXksIGhheSBob29rIGN1Y3VtYmVycy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuIFNob3ZlbHMgYXQgcmFrZXMgcGxvd3MuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gSGF5YmluZSBjYXJyb3RzIHNveWJlYW5zLCBvd2xzIGR1Y2sgcmFpc2luZyBvciwgY2hlZXAgaW4gcGxvd3MuIE91dGhvdXNlIGF0IG5haWxzIG1vd2VyLiBGb3JhZ2UgSGFydmVzdGVyLCBiZWFuIGFuZCBTaWxhZy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJhYm91dF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Bd2FyZHMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8bGk+Q3VsdGl2YXRvciBicnVzc2VsIHNwcm91dHMgaGFycm93cywgY2VsZXJ5IGRyZWFkIHdpdGgga2FsZSBhdWdlcnMgaGFycm93cy4gVmV0ZXJpbmFyaWFuIGF0IFNlZWRlciBlZ2dzIHdpdGggd2F0ZXJtZWxvbiBvc3RyaWNoZXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPkNvbyB3aXRoIHJhYmJpdHMgZWN0LiBHcmFwZXMgbmVzdCBwaXRjaCBmb3JrIGFuIHBsb3dzIG1hcGxlIHN5cnVwIHllYXJsaW5ncywgcXVpbHQgc3F1ZWFrIGRvZ2dpZXMuIExhbWIgcGlnIHJvb3N0ZXIgc2hlZXAuIFV0dGVycyBhcmUgd2VhdGhlcnZhbmUgZm9hbCBlc3QuIDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Hb2JibGUgZmVlZCwgamVsbHkgcGVwcGVycyBhdCBwbG93IGJhc2lsIHN3YXRoZXIsIGNhdCB3ZWF0aGVydmFuZSBncmFpbiB0cnVja3MsIGhvb3QgcG9ueSByb2JpbnMgcGVhY29ja3MgYW4ga2FsZS4gUm9vc3RlciBjZWxlcnkgcGluZWFwcGxlcyBmZXJ0aWxpemVyLjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGFib3V0LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0YWJvdXQsIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgYWJvdXRBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBYm91dCk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0Um91dGUsXHJcblx0UmVkaXJlY3QsXHJcblx0U3dpdGNoXHJcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbi8vUm91dGVzIGltcG9ydFxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInBhZ2Utd3JhcHBlclwiIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0XHQ8U3dpdGNoPlxyXG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDLCAuLi5yZXN0IH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRleGFjdD17ZXhhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QyB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX0gXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N3aXRjaD5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vUmVhY3QgQ29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnRzIGltcG9ydHNcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb250YWN0X2FjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdHRoaXMuY29uZmlybU1lc3NhZ2VCb3goKTtcclxuXHRcdC8vdGltZW91dCBuZWVkZWQgZm9yIHJlZGlyZWN0IHRvIHN0eWxlIG1haW4gcHJvcGVybHkuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdHRoaXMucmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQ29udGFjdCBwcm9wcyBpczogJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5tb3VudGluZyBDb250YWN0XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIHdvcmtlZCByZWRpcmVjdGluZycpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayh0cnVlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyBtYXkgbm90IGhhdmUgd29ya2VkIHNldHRpbmcgcmVkaXJlY3QgdG8gZmFsc2UnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbmZpcm1NZXNzYWdlQm94KCkge1xyXG5cdFx0Ly9jaGVja3Mgc3RhdHVzIG9mIHNlbnQgbWVzc2FnZXMgYW5kIGRpc3BsYXlzIGEgbm90aWNlIGFjY29yZGluZ2x5XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0IGNvbmZpcm1NZXNzYWdlQm94XCIpXHJcblx0XHRsZXQgc3RhdHVzID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzKXtcclxuXHRcdFx0aWYoc3RhdHVzID09PSAnc3VjY2Vzcycpe1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgU2VudCEhJywgJ0lcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nXSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBzdWNjZXNzIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgRXJyb3IhIScsICdQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiddKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgZmFpbCBcIiwgdGhpcy5wcm9wcy5jb250YWN0KTsgfSwgMTAwMCk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHR9LCA2MDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPbigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4nKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4tLWNvbnRhY3QnKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUxvYWRlclN0eWxlcygpIHtcclxuXHRcdCQoJyNsb2FkZXJfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIxJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmNvbnRhY3QucmVkaXJlY3QgPT09IHRydWUpe1xyXG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPScvY29udGFjdCcgLz5cclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4nIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMgP1xyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNvbmZpcm1fX2NvbnRhaW5lclwiIGNsYXNzTmFtZT0nY29uZmlybV9fY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbmZpcm1fX2lubmVyJz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nY29uZmlybV9faGVhZGVyJz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMF19PC9oMj5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdjb25maXJtX190ZXh0Jz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMV19PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLW91dHRlci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1pbm5lci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFjdF9faGVhZGVyJz5HZXQgSW4gVG91Y2ggV2l0aCBVczwvaDE+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5JZiB5b3UncmUgdGhpbmtpbmcgYWJvdXQgaGlyaW5nIGEgcGhvdG9ncmFwaGVyIGZvciBhIHNob290LCB3ZSB3b3VsZCBsb3ZlIHRvIGRpc2N1c3MgaXQgd2l0aCB5b3UuICBXZSBjYW4gcHJvdmlkZSBwcm9mZXNzaW9uYWwgaW5zaWdodCBhbmQgaGVscCB0byBtYWtlIHlvdXIgZHJlYW0gc2hvb3QgYSByZWFsaXR5LiAgQ29uc3VsYXRpb25zIGFyZSBjb21wbGV0ZWx5IGZyZWUuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX2FkZHJlc3MtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBBZGRyZXNzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTIzIFdvb3N0ZXIgU3QgLSBOZXcgWW9yaywgTlkgMTAwMTJcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhciBmYS1lbnZlbG9wZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBFbWFpbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdERCb2tlaEBCb2tlaEJlc3QuY29tXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtcGhvbmVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gUGhvbmUgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoMjEyKSA1NTUtNTU1NVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19tZXNzYWdlLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBjb250YWN0OiBzdGF0ZS5jb250YWN0IH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQ29udGFjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19jb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J21lc3Nlbmdlcl9fZm9ybScgbWV0aG9kPSdwb3N0JyBhY3Rpb249Jyc+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J25hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1uYW1lJyBpZD0naW5wdXROYW1lJyBwbGFjZWhvbGRlcj0nTmFtZSAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdudW1iZXInIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1udW1iZXInIGlkPSdpbnB1dE51bWJlcicgcGxhY2Vob2xkZXI9J051bWJlcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1lbWFpbCcgaWQ9J2lucHV0RW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbWVzc2FnZScgaWQ9J2lucHV0TWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UgIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgaWQ9J21lc3Nlbmdlcl9fc2VuZCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2J1dHRvbicgdmFsdWU9J1NlbmQgTWVzc2FnZScgPjwvaW5wdXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpbG1zdHJpcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJGaWxtc3RyaXAgbW91bnRlZCBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQobmFtZSkge1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQobmFtZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbWFnZSBlcnJvclwiKTtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdG1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykge1xyXG5cdFx0bGV0IG1hcHBlZFNsaWRlcyA9IHNsaWRlcy5tYXAoICh7IG5hbWUsIGltYWdlIH0sIGluZGV4KSA9PiB7IFxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYga2V5PXtgZmlsbXN0cmlwX19jZWxsLSR7bmFtZX1gfSBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NlbGxcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHsgdGhpcy5maWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKGluZGV4KX0gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0YWx0PXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCIgaWQ9XCJmaWxtc3RyaXBfX2ltYWdlLW92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e2BmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWB9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFwcGVkU2xpZGVzXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKHNsaWRlTm8pIHtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9ubyhzbGlkZU5vKTtcclxuXHRcdHRoaXMucHJvcHMuZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIoc2xpZGVObyotMjAwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlU2xpZGVTaG93KCkgXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBMZWZ0KCkge1xyXG5cdFx0aWYocGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpID09PSAwIHx8IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSUyMDAgPT09IDApe1xyXG5cdFx0XHR0aGlzLnByb3BzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoMjAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBSaWdodCgpIHtcclxuXHRcdGlmKHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSA9PT0gMCB8fCBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSklMjAwID09PSAwKXtcclxuXHRcdFx0dGhpcy5wcm9wcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyKC0yMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGhpZ2hsaWdodEZpbG1zdHJpcENvbnRyb2xzKCkge1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0LS1oaWdobGlnaHRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpLnJlbW92ZUNsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0LS1oaWdobGlnaHRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpLmFkZENsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0fSwgNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udGFpbmVyXCJcclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLmhpZ2hsaWdodEZpbG1zdHJpcENvbnRyb2xzKCl9IFxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBzbGlkZXMgPyB0aGlzLm1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykgOiBudWxsIH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTaGlmdCBmaWxtc3RyaXAgdG8gdGhlIHJpZ2h0XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbG1zdHJpcExlZnQoKX0+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIGxlZnQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2hpZnQgZmlsbXN0cmlwIHRvIHRoZSBsZWZ0XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbG1zdHJpcFJpZ2h0KCl9PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXNydFwiPmZpbG1zdHJpcCByaWdodCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCIgaWQ9XCJmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IHByb2plY3Rvcjogc3RhdGUucHJvamVjdG9yIH0gfTtcclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShGaWxtc3RyaXApOyAiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJGb290ZXIgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnModGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcyk7XHJcblx0fVxyXG5cclxuXHQvL2NoZWNrIHRvIHNlZSBpZiB0aGVzZSBjYW4gYmUgYWRkZWQgZGlyZWN0bHkgaW5saW5lIGR1cmluZyB0aGUgaW5pdGlhbCBtYXBwaW5nIG9mIHRoZSBTb2NpYWwgTWVkaWFsIExpbmtzIGluIHRoZSBKU1hcclxuXHRhZGRMaXN0ZW5lcnMoc29jaWFsTWVkaWFMaW5rc0luZm8pIHtcclxuXHRcdHNvY2lhbE1lZGlhTGlua3NJbmZvLmZvckVhY2goICh7IGZvbnRfY29sb3IsIG5hbWUsIGJnX2NvbG9yMSwgYmdfY29sb3IyIH0pID0+IHtcclxuXHRcdFx0JChgIyR7bmFtZX0taG92ZXItYm94YCkuaG92ZXIoKCkgPT4gdGhpcy5ob3Zlck9uKGAjJHtuYW1lfS1zb2NpYWxgLCBmb250X2NvbG9yLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiksICgpID0+IHRoaXMuaG92ZXJPZmYoYCMke25hbWV9LXNvY2lhbGApKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPbihpZCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCBmb250X2NvbG9yKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsIGBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICR7YmdfY29sb3IxfSwgJHtiZ19jb2xvcjJ9KWApO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPZmYoaWQpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCAnd2hpdGUnKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwKSknKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluay0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19ib2R5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPkFydGlzdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHREYXZpZCBCb2tlaCBmb3VuZGVyIG9mIEJva2VoIEJlc3QgUGhvdG9ncmFwaHksIElzIGFuIGF3YXJkIHdpbm5pbmcgcGhvdG9ncmFwaGVyIHdpdGggb3ZlciA4IHllYXJzIG9mIGV4cGVyaWVuY2UuIExlYXJuIG1vcmUgYWJvdXQgRGF2aWQgYW5kIEJva2VoIEJlc3QgUGhvdG9ncmFwaHkgXHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBpZD1cImZvb3Rlcl9fYXJ0aXN0LWxpbmtcIiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgdG89XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGk+IGhlcmUuIDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3MtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+MTIzIFdvb3N0ZXIgU3Q8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPiBOZXcgWW9yaywgTlkgMTAwMTI8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjEtMjEyLTU1NS01NTU1XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+KDIxMikgNTU1LTU1NTU8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPlNvY2lhbCBNZWRpYTwvaDQ+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmZvb3Rlci5zb2NpYWxNZWRpYUxpbmtzLm1hcCgoeyBuYW1lLCBsaW5rICwgaWNvbn0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2Ake25hbWV9LXNvY2lhbGB9IGlkPXtgJHtuYW1lfS1ob3Zlci1ib3hgfSBjbGFzc05hbWU9J2Zvb3Rlcl9fc29jaWFsLWhvdmVyLWJveCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLXNydFwiPntuYW1lfTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YCR7aWNvbn0gZm9vdGVyX19zb2NpYWwtbGlua2B9IGlkPXtgJHtuYW1lfS1zb2NpYWxgfSBhcmlhLWhpZGRlbj1cInRydWVcIiB0aXRsZT17bmFtZX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX2Jhc2UtdGV4dFwiPiZjb3B5OyBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IC0gTmV3IFlvcmssIE5ZPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9vdGVyOiBzdGF0ZS5mb290ZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzKShGb290ZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGdhbGxlcnlBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5X2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBwcm9qZWN0b3JBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBHYWxsZXJ5U2VsZWN0b3IgZnJvbSAnLi9HYWxsZXJ5U2VsZWN0b3InO1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0bGV0IGdhbGxlcnkgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5nYWxsZXJ5O1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbiBtb3VudCBHYWxsZXJ5IHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdGlmKGdhbGxlcnkpe1xyXG5cdFx0XHR0aGlzLmdvVG9HYWxsZXJ5KGdhbGxlcnkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbiB1cGRhdGUgR2FsbGVyeSBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcblx0fVxyXG5cclxuXHJcblx0Z29Ub0dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2VkIGdvVG9HYWxsZXJ5XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5hY3Rpb25zLmNob29zZV9nYWxsZXJ5KGdhbGxlcnkpO1xyXG5cdFx0dGhpcy5wcm9wcy5hY3Rpb25zLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdHRoaXMub3BlbkdhbGxlcnkoKTsgXHJcblx0XHR9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0b3BlbkdhbGxlcnkoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gb3BlbiB0aGUgZ2FsbGVyeVwiKTtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW5cIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdH1cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiAkKFwiI21haW5cIikub2Zmc2V0KCkudG9wXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwxNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRjbG9zZUdhbGxlcnkoKSB7XHJcblx0XHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpKXtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHR9XHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHR9XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJhdHRlbXB0aW5nIHB1c2ggdG8gaGlzdG9yeVwiKTtcclxuXHRcdC8vIHdpdGhSb3V0ZXIoICh7IGhpc3RvcnkgfSkgPT4geyBoaXN0b3J5LnB1c2goJy9nYWxsZXJ5JykgfSApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vY2hvb3NlX2dhbGxlcnk9eyB0aGlzLnByb3BzLmFjdGlvbnMuY2hvb3NlX2dhbGxlcnkgfVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgQ2xvc2UgPSB3aXRoUm91dGVyKCAoeyBoaXN0b3J5IH0pID0+IChcclxuXHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlXCIgXHJcblx0XHRcdHRpdGxlPVwiQ2xvc2UgR2FsbGVyeVwiIFxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmNsb3NlR2FsbGVyeSgpOyBcclxuXHRcdFx0XHRoaXN0b3J5LnB1c2goJy9nYWxsZXJ5Jyk7XHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlLXNydFwiPkNsb3NlIEdhbGxlcnk8L2I+XHJcblx0XHRcdFhcclxuXHRcdDwvc3Bhbj5cclxuXHRcdCkpO1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuZ2FsbGVyeS5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdDxHYWxsZXJ5U2VsZWN0b3IgZ29Ub0dhbGxlcnk9eyB0aGlzLmdvVG9HYWxsZXJ5IH0vPlxyXG5cdFx0XHRcdDxDbG9zZSAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiIGlkPVwiZ2FsbGVyeV9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImdhbGxlcnlcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBnYWxsZXJ5LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0Z2FsbGVyeSwgXHJcblx0XHRwcm9qZWN0b3IgXHJcblx0fTsgXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gXHRcdGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhPYmplY3QuYXNzaWduKHt9LCBnYWxsZXJ5QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShHYWxsZXJ5KTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5U2VsZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG4vL2pRdWVyeSBpbXBvcnRcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5nYWxsZXJ5U2VsZWN0b3JMb2FkKCk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0dhbGxlcnlTZWxlY3RvciBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5nYWxsZXJ5U2VsZWN0b3IudGltZXIpO1xyXG5cdFx0dGhpcy5nYWxsZXJ5U2VsZWN0b3JSZXNldCgpO1xyXG5cdH1cclxuXHJcblx0Ly9zYXZlIHRpbWVyIHRvIHN0YXRlIHRvIGNsZWFyIG9uIHVubW91bnQgc28gdGhhdCB0aGUgdGltZXIgaXMgY2xlYXJlZCBldmVuIGlmIHBhZ2UgaXMgdW5tb3VudGVkIG1pZCBsb2FkXHJcblx0Z2FsbGVyeVNlbGVjdG9yTG9hZCgpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRsZXQgY291bnRlciA9IDA7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHQkKGdhbGxlcnlTZWxlY3Rvcklkc1tjb3VudGVyXS5jb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJyk7XHJcblx0XHRcdCQoZ2FsbGVyeVNlbGVjdG9ySWRzW2NvdW50ZXJdLmNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRjb3VudGVyKytcclxuXHRcdFx0aWYoY291bnRlciA+PSBnYWxsZXJ5U2VsZWN0b3JJZHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdH1cclxuXHRcdH0sIDUwMCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3RpbWVyKHRpbWVyKTtcclxuXHR9XHJcblxyXG5cdGdhbGxlcnlTZWxlY3RvclJlc2V0KCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcklkcy5mb3JFYWNoKCAoeyBjb250YWluZXJJZCB9KSA9PiB7XHJcblx0XHRcdGlmKCQoY29udGFpbmVySWQpLmhhc0NsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpKSB7XHJcblx0XHRcdFx0JChjb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXInKTtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHQvL3B1dCBsaXN0ZW5lcnMgZGlyZWN0bHkgb24gdG8gdGhlIGh0bWwgdGFnc1xyXG5cdGFkZExpc3RlbmVycygpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3JJZHMuZm9yRWFjaCggKHsgY29udGFpbmVySWQsIGdhbGxlcnlTZWxlY3RvcklkLCBnYWxsZXJ5TmFtZSB9KSA9PiB7XHJcblx0XHRcdCQoY29udGFpbmVySWQpLmhvdmVyKCgpID0+IHRoaXMuaG92ZXJJbihnYWxsZXJ5U2VsZWN0b3JJZCksICgpID0+IHRoaXMuaG92ZXJPdXQoZ2FsbGVyeVNlbGVjdG9ySWQpKTtcclxuXHRcdFx0Ly8gJChjb250YWluZXJJZCkuY2xpY2soKCkgPT4gdGhpcy5wcm9wcy5nb1RvR2FsbGVyeSgpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHJcblx0aG92ZXJJbihpZCkge1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLXNsaWRlLWluJyk7XHJcblx0fVxyXG5cclxuXHJcblx0aG92ZXJPdXQoaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLXNsaWRlLWluJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1ob3ZlcicpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxOYXZMaW5rIHRvPVwiL2dhbGxlcnkvYWN0aW9uXCJcclxuXHRcdFx0XHRcdGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlZpZXcgVGhlIEFjdGlvbiBHYWxsZXJ5XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzFcIj5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgIDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkFjdGlvbjwvcD5cclxuXHRcdFx0ICAgIDwvTmF2TGluaz5cclxuXHRcdFx0ICAgIDxOYXZMaW5rIHRvPVwiL2dhbGxlcnkvZXZlbnRzXCJcclxuXHRcdFx0ICAgIFx0aWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCJcclxuXHRcdFx0ICAgIFx0Y2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiXHJcblx0XHRcdCAgICBcdHRpdGxlPVwiVmlldyBUaGUgRXZlbnRzIEdhbGxlcnlcIlxyXG5cdFx0XHQgICAgPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18yXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5FdmVudHM8L3A+XHJcblx0XHRcdCAgICA8L05hdkxpbms+XHJcblx0XHRcdCAgICA8TmF2TGluayB0bz1cIi9nYWxsZXJ5L2xhbmRzY2FwZVwiXHJcblx0XHRcdCAgICBcdGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiXHJcblx0XHRcdCAgICBcdGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIlxyXG5cdFx0XHQgICAgXHR0aXRsZT1cIlZpZXcgVGhlIExhbmRzY2FwZSBHYWxsZXJ5XCJcclxuXHRcdFx0ICAgID5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fM1wiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+TGFuZHNjYXBlPC9wPlxyXG5cdFx0XHQgICAgPC9OYXZMaW5rPlxyXG5cdFx0XHQgICAgPE5hdkxpbmsgdG89XCIvZ2FsbGVyeS9wb3J0cmFpdFwiXHJcblx0XHRcdCAgICBcdGlkPVwiZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiXHJcblx0XHRcdCAgICBcdGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIlxyXG5cdFx0XHQgICAgXHR0aXRsZT1cIlZpZXcgVGhlIFBvcnRyYWl0IEdhbGxlcnlcIlxyXG5cdFx0XHQgICAgPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX180XCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5Qb3J0YWl0PC9wPlxyXG5cdFx0XHQgICAgPC9OYXZMaW5rPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3I6IHN0YXRlLmdhbGxlcnlTZWxlY3RvclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnlTZWxlY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hlYWRlcl9hY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bW9iaWxlTWVudTogZmFsc2UsXHJcblx0XHR9XHJcblx0XHR0aGlzLmhhbmRsZU1lbnVDbGljayA9IHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlYWRlciBwcm9wcyBhcmUgJywgdGhpcy5wcm9wcyk7XHJcblxyXG5cdH1cclxuXHJcblx0aGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNZW51Q2xpY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbW9iaWxlTWVudSBjbGlja2VkJyk7XHJcblx0XHRpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSB0cnVlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51T3V0KCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXMoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51SW4oKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVJbigpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2LS1zbGlkZS1pbicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYnKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVPdXQoKSB7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0fVxyXG4gXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uTW91c2VMZWF2ZT17KCk9PiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUoKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1saW5rXCIgaWQ9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBleGFjdCB0bz1cIi9cIiB0aXRsZT1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy5cIj5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxvZ29cIiBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIil9IGFsdD1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy4gbG9nb1wiIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbmFtZVwiPkJva2VoIFBob3RvZ3JhcGh5PC9wPlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbWVudS1pY29uIGZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVNZW51Q2xpY2soKX0+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtrZXl9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCIgZXhhY3QgdG89e3BhdGh9PntuYW1lfTwvTmF2TGluaz48L2xpPil9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDxuYXYgaWQ9XCJoZWFkZXJfX21vYmlsZS1uYXZcIiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGVyLmxpbmtJbmZvLm1hcCgoeyBrZXksIHBhdGgsIG5hbWUgfSkgPT4gPGxpIGtleT17YG1vYmlsZS0ke2tleX1gfT4gPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBoZWFkZXI6IHN0YXRlLmhlYWRlciB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMsIG51bGwsIHtwdXJlOmZhbHNlfSkoSGVhZGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9DaXJjbGVUeXBlIGltcG9ydFxyXG5pbXBvcnQgQ2lyY2xlVHlwZSBmcm9tICdjaXJjbGV0eXBlJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9ob21lX2FjdGlvbnMnO1xyXG5cclxuLy9EYXRhIGltcG9ydHNcclxuaW1wb3J0IGhvbWVTbGlkZXMgZnJvbSAnLi9kYXRhL2hvbWVTbGlkZXMnO1xyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGggPSB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuc2xpZGVTaG93KCk7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9uKCk7XHJcblx0XHR0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dXaWR0aCk7XHJcblx0XHRuZXcgQ2lyY2xlVHlwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZV9fd2VsY29tZS10ZXh0JykpLnJhZGl1cyg2MDApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZygnSG9tZSBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7IH0sIDE1MDAgKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVbm1vdW50ZWQgQ29tcG9uZW50XCIpO1xyXG5cdFx0dGhpcy50b2dnbGVIb21lTW9kaWZpZXJPZmYoKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdHRoaXMuc3RvcFNsaWRlU2hvdygpO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJcIik7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVIb21lTW9kaWZpZXJPbigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpbmRvd1dpZHRoKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV93aW5kb3dfd2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IGludGVydmFsVGltZXIgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtob21lU2xpZGVzWzBdLmltZ1NyY30pYCk7XHJcblx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7XHJcblx0XHQvL3JlbW92ZSBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7XHJcblx0XHRsZXQgY291bnQgPSAxXHJcblx0XHRjb25zb2xlLmxvZygnc2xpZGVzaG93IHN0YXJ0aW5nJyk7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKGNvdW50ID09IGhvbWVTbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRjb3VudCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGltYWdlID0gaG9tZVNsaWRlc1tjb3VudF0uaW1nU3JjO1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGNvdW50KytcclxuXHRcdFx0XHQvL2FkZCBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTtcclxuXHRcdFx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdFx0XHQvL3JlbW92ZSBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0XHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdFx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzcyBhZ2FpbiBzbyB0aGF0IHRoZSBlZmZlY3Qgc3RhcnRzIG92ZXJcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aW1hZ2V9KWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb3VudCsrIHBhdXNlIGlzOiAnLCB0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvdW50ID0gdGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KTtcclxuXHRcdFx0dGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCk7XHJcblx0XHR9LCA4NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3N0b3JlZCBpbnRlcnZhbFRpbWVyIGlzICcraW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyB0b28gc21hbGwgc3RvcHBlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cclxuXHQvLyBjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KSB7XHJcblx0Ly8gXHRsZXQgeyB3aW5kb3dXaWR0aCwgcGF1c2VTbGlkZVNob3cgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoIDwgNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdC8vIFx0XHRyZXR1cm4gY291bnRcclxuXHQvLyBcdH1cclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudCs9MVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdHN0b3BTbGlkZVNob3coKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2xlYXJpbmcgaW50ZXJ2YWxUaW1lciAnK3RoaXMucHJvcHMuaG9tZS5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIiA+XHJcblx0XHRcdFx0PGRpdiBpZD1cImhvbWVfX2ZpbHRlci1ib3hcIiBjbGFzc05hbWU9XCJob21lX19maWx0ZXItYm94XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lXCI+XHJcblx0XHRcdFx0XHQ8aDEgaWQ9XCJob21lX193ZWxjb21lLXRleHRcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dC1tb2JpbGVcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhvbWU6IHN0YXRlLmhvbWVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZD17cHJvcHMubG9hZGVySWR9IGNsYXNzTmFtZT1cImxvYWRlcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjFcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0XHQ8aW1nIGlkPVwibG9nby1sb2FkZXIyXCIgY2xhc3NOYW1lPVwibG9hZGVyX19sb2dvXCIgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZycpfT48L2ltZz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XHJcbmltcG9ydCBGaWxtc3RyaXAgZnJvbSAnLi9GaWxtc3RyaXAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFByb2plY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyID0gdGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyID0gdGhpcy5maWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlci5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5kb3duQXJyb3dWaXNpYmlsaXR5KCk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0fSw1MCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuYXV0b1J1blByb2plY3RvcigpO1xyXG5cdFx0fSwxMDApO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3RvciBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLnByb2plY3Rvci5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdHRoaXMucHJvcHMuc2hvd19maWxtc3RyaXAoZmFsc2UpO1xyXG5cdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfY29udGFpbmVyLS1zbGlkZS1pblwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX2NvbnRhaW5lclwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRuZXh0U2xpZGUoKSB7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVObywgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMucHJvcHMuaW5jcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMubGVuZ3RoKTtcclxuXHRcdC8vZGVsYXllZCBzbyB0aGF0IHJlZHV4IGhhcyB0aW1lIHRvIHVwZGF0ZSBzdG9yZSBmcm9tIGluY3JlbWVudF9zbGlkZSgpXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMudXBkYXRlU2xpZGVTaG93KCkgfSwgNTApO1xyXG5cdH1cclxuXHJcblxyXG5cdHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVObywgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMucHJvcHMuZGVjcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMubGVuZ3RoKTtcclxuXHRcdC8vZGVsYXllZCBzbyB0aGF0IHJlZHV4IGhhcyB0aW1lIHRvIHVwZGF0ZSBzdG9yZSBmcm9tIGRlY3JlbWVudF9zbGlkZSgpXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMudXBkYXRlU2xpZGVTaG93KCkgfSwgNTApO1xyXG5cdH1cclxuXHJcblxyXG5cdHVwZGF0ZVNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IHNsaWRlcywgY3VycmVudFNsaWRlTm8gfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiB1cGRhdGVTbGlkZVNob3cgcHJvcHMgYXJlOiBcIiwgdGhpcy5wcm9wcyk7XHJcblx0XHR0aGlzLmZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyKCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyhzbGlkZXNbY3VycmVudFNsaWRlTm9dKTtcclxuXHR9XHJcblxyXG5cclxuXHRsb2FkUHJvamVjdG9yKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5sb2FkX25ld19zbGlkZXModGhpcy5wcm9wcy5zbGlkZXMpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBcclxuXHRcdFx0dGhpcy51cGRhdGVTbGlkZVNob3coKTsgXHJcblx0XHR9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0YXV0b1J1blByb2plY3RvcigpIHtcclxuXHRcdGxldCBoYWxmU2VjQ291bnRlciA9IDA7XHJcblx0XHRsZXQgaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzID09PSB1bmRlZmluZWQpe1xyXG5cdFx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGhhbGZTZWNDb3VudGVyICs9IDUwMDtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3cgPT0gZmFsc2UgJiYgaGFsZlNlY0NvdW50ZXIgPj0gNjUwMCl7XHJcblx0XHRcdFx0dGhpcy5uZXh0U2xpZGUoKTtcclxuXHRcdFx0XHRoYWxmU2VjQ291bnRlciA9IDA7XHJcblx0XHRcdH1cclxuXHRcdH0sNTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0cGF1c2VCdXR0b25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3c7XHJcblx0XHRpZihwYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiKS5hZGRDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uLS1oaWRkZW5cIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIikucmVtb3ZlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIpLmFkZENsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIpLnJlbW92ZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvbi0taGlkZGVuXCIpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIikuYWRkQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiKS5yZW1vdmVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uLS1oaWRkZW5cIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiKS5hZGRDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb24tLWhpZGRlblwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIpLnJlbW92ZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRkb3duQXJyb3dWaXNpYmlsaXR5KCkge1xyXG5cdFx0Ly9pZiBjb250YWluZXIgaG91c2luZyB0aGUgcHJvamVjdG9yIGlzIHRvbyBzbWFsbCBkb24ndCBnaXZlIHRoZSBvcHRpb24gdG8gYnJpbmcgdXAgdGhlIHBob3RvIHN0cmlwXHJcblx0XHRsZXQgcHJvamVjdG9yQm94V2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdG9yJykub2Zmc2V0V2lkdGg7XHJcblx0XHRpZihwcm9qZWN0b3JCb3hXaWR0aCA8IDc1MCl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRwcm9qZWN0b3JEb3duSGFuZGxlcigpIHtcclxuXHRcdGxldCBjYWxjdWxhdGVkV2lkdGggPSB0aGlzLnByb3BzLnByb2plY3Rvci5zbGlkZXMubGVuZ3RoKjIwMCtcInB4XCI7XHJcblx0XHR0aGlzLnByb3BzLnNob3dfZmlsbXN0cmlwKCF0aGlzLnByb3BzLnByb2plY3Rvci5zaG93RmlsbXN0cmlwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnd2lkdGgnLCBjYWxjdWxhdGVkV2lkdGgpO1xyXG5cdFx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyKCk7IFxyXG5cdFx0fSwgMjUpO1xyXG5cdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9fY29udGFpbmVyLS1zbGlkZS1pblwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiKTtcclxuXHR9XHJcblxyXG5cclxuXHRzaGlmdFByb2plY3RvckNvbnRyb2xzKCkge1xyXG5cdFx0Ly9tYWtlIHN1cmUgbW9kaWZpZWQgY2xhc3MgaXMgbm90IG9uIGJlZm9yZSB0b2dnbGluZ1xyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpO1xyXG5cdFx0XHRcdC8vSWYgY29udHJvbC1kb3duIGlzIGluIHVzZSBieSB0aGUgZmlsbXN0cmlwIGxlYXZlIGl0IGFsb25lXHJcblx0XHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR1bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKSB7XHJcblx0XHQvL21ha2Ugc3VyZSBtb2RpZmllZCBjbGFzcyBpcyBvbiBiZWZvcmUgdG9nZ2xpbmcgaXQgb2ZmXHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnQtLXNoaWZ0XCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtLXNoaWZ0XCIpO1xyXG5cdFx0XHQvL0lmIGNvbnRyb2wtZG93biBpcyBpbiB1c2UgYnkgdGhlIGZpbG1zdHJpcCBsZWF2ZSBpdCBhbG9uZVxyXG5cdFx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0ZmlsbXN0cmlwT3ZlcmxheVNoaWZ0ZXIoKSB7XHJcblx0XHRsZXQgY3VycmVudFNsaWRlTm8gPSB0aGlzLnByb3BzLnByb2plY3Rvci5jdXJyZW50U2xpZGVObztcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCIpLmNzcygnbGVmdCcsIGN1cnJlbnRTbGlkZU5vKjIwMCk7XHJcblx0fVxyXG5cclxuXHJcblx0ZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcihzaGlmdEJ5KSB7XHJcblx0XHRsZXQgdHJhdmVsRGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250YWluZXInKS5vZmZzZXRXaWR0aCAtZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHByb3Bvc2VkUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkgKyBzaGlmdEJ5O1xyXG5cdFx0aWYodHJhdmVsRGlzdGFuY2UgPD0gMCB8fCBwcm9wb3NlZFBvc2l0aW9uID4gMCB8fCB0cmF2ZWxEaXN0YW5jZSArIHByb3Bvc2VkUG9zaXRpb24gPCAwKXtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgZmlsbXN0cmlwUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgbGVmdEFycm93UG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgcmlnaHRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcpKTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGZpbG1zdHJpcFBvc2l0aW9uICsgc2hpZnRCeSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCBsZWZ0QXJyb3dQb3NpdGlvbiArIChzaGlmdEJ5Ki0xKSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgcmlnaHRBcnJvd1Bvc2l0aW9uICsgKHNoaWZ0QnkqLTEpKTtcclxuXHR9XHJcblx0XHJcblxyXG5cdGZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyKHNoaWZ0VG8pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwic2hpZnRUbyBpczogXCIrc2hpZnRUbyk7XHJcblx0XHRpZihzaGlmdFRvID09PSB1bmRlZmluZWQpe1xyXG5cdFx0XHRzaGlmdFRvID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IuY3VycmVudFNsaWRlTm8gKiAtMjAwO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInVuZGVmaW5lZCBzaGlmdFRvLCBzZXR0aW5nIHNoaWZ0VG9cIiwgc2hpZnRUbyk7XHJcblx0XHR9XHJcblx0XHRsZXQgcHJvamVjdG9yRGlzcGxheVdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHByb2plY3RvckJveENlbnRlciA9IHByb2plY3RvckRpc3BsYXlXaWR0aC8yIC0gKHByb2plY3RvckRpc3BsYXlXaWR0aC8yKSUyMDA7XHJcblx0XHRsZXQgZmlsbXN0cmlwV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250YWluZXInKS5vZmZzZXRXaWR0aDtcclxuXHRcdGxldCByaWdodEFycm93V2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0Jykub2Zmc2V0V2lkdGg7XHJcblx0XHRsZXQgdHJhdmVsRGlzdGFuY2UgPSAoZmlsbXN0cmlwV2lkdGgqLTEpICArIHByb2plY3RvckRpc3BsYXlXaWR0aDtcclxuXHRcdGxldCBsZWZ0QXJyb3dPZmZzZXQgPSA4O1xyXG5cdFx0bGV0IHJpZ2h0QXJyb3dPZmZzZXQgPSBwcm9qZWN0b3JEaXNwbGF5V2lkdGggLSAocmlnaHRBcnJvd1dpZHRoICsgOCk7XHJcblx0XHRsZXQgZmlsbXN0cmlwT2Zmc2V0ID0gMDtcclxuXHRcdGxldCBjZW50ZXJDZWxsID0gc2hpZnRUbyArIHByb2plY3RvckJveENlbnRlcjtcclxuXHRcdGlmKHRyYXZlbERpc3RhbmNlID49IDApe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInRyYXZlbERpc3RhbmNlXCIpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH0gXHJcblx0XHRpZihjZW50ZXJDZWxsID49IDApe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNlbnRlckNlbGxcIik7XHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGZpbG1zdHJpcE9mZnNldCk7XHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdCcpLmNzcygnbGVmdCcsIGxlZnRBcnJvd09mZnNldCk7XHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5jc3MoJ2xlZnQnLCAgcmlnaHRBcnJvd09mZnNldCk7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0aWYoY2VudGVyQ2VsbCA8PSB0cmF2ZWxEaXN0YW5jZSl7XHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIHRyYXZlbERpc3RhbmNlKTtcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JywgKHRyYXZlbERpc3RhbmNlKi0xKSArIGxlZnRBcnJvd09mZnNldCk7XHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5jc3MoJ2xlZnQnLCAodHJhdmVsRGlzdGFuY2UqLTEpICsgcmlnaHRBcnJvd09mZnNldCk7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JywgY2VudGVyQ2VsbCk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCAoY2VudGVyQ2VsbCotMSkgKyBsZWZ0QXJyb3dPZmZzZXQpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcsIChjZW50ZXJDZWxsKi0xKSArIHJpZ2h0QXJyb3dPZmZzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlSW5mbywgc2hvd0ZpbG1zdHJpcCwgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInByb2plY3RvclwiIFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3RvclwiIFxyXG5cdFx0XHRcdG9uTW91c2VFbnRlcj17ICgpID0+IHRoaXMuc2hpZnRQcm9qZWN0b3JDb250cm9scygpfSBcclxuXHRcdFx0XHRvbk1vdXNlTGVhdmU9eyAoKSA9PiB0aGlzLnVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e2N1cnJlbnRTbGlkZUluZm8gPyBcclxuXHRcdFx0XHRcdDxTbGlkZSBwaG90b0luZm89e2N1cnJlbnRTbGlkZUluZm99IFxyXG5cdFx0XHRcdFx0XHRzdHlsZUZvcj17dGhpcy5wcm9wcy5zdHlsZUZvcn0gXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR7c2xpZGVzID9cclxuXHRcdFx0XHRcdDxGaWxtc3RyaXAgc2xpZGVzPXtzbGlkZXN9IFxyXG5cdFx0XHRcdFx0XHR1cGRhdGVTbGlkZVNob3c9eyAoKSA9PiB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH1cclxuXHRcdFx0XHRcdFx0ZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcj17IHRoaXMuZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlciB9XHJcblx0XHRcdFx0XHRcdGZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyPXsgdGhpcy5maWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlciB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0bnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTZWUgcHJldmlvdXMgcGhvdG9cIlxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wcmV2aW91c1NsaWRlKCl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+bGVmdCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTZWUgbmV4dCBwaG90b1wiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLm5leHRTbGlkZSgpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnJpZ2h0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLWRvd25cIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2VlIGFsbCBwaG90b3MgaW4gY3VycmVudCBnYWxsZXJ5XCJcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucHJvamVjdG9yRG93bkhhbmRsZXIoKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+ZG93biBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duXCIgPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJQYXVzZS9QbGF5IHNsaWRlIHNob3dcIiBcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucGF1c2VCdXR0b25IYW5kbGVyKCl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnBhdXNlIGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2xzLXBhdXNlLXBsYXktaWNvbi13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpIGlkPVwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIiBjbGFzc05hbWU9XCJmYXMgZmEtcGF1c2UtY2lyY2xlIHByb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8aSBpZD1cInByb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIiBjbGFzc05hbWU9XCJmYXMgZmEtcGxheS1jaXJjbGUgcHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvbi0taGlkZGVuXCI+PC9pPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgcHJvamVjdG9yOiBzdGF0ZS5wcm9qZWN0b3J9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKFByb2plY3Rvcik7ICIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zZXRTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5yZW1vdmVTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdHNldFN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHN0eWxlRm9yID0gdGhpcy5wcm9wcy5zdHlsZUZvcjtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIGZyYW1lXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lLS0ke3N0eWxlRm9yfWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgcGhvdG9cclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG8tLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTdHlsZXMoKSB7XHJcblx0XHRsZXQgeyBuYW1lIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdGxldCB7IHN0eWxlRm9yIH0gPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWVgKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90b2ApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlTG9hZGVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VFcnJvcmVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCB7IG5hbWUsIGltYWdlIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD17YCR7bmFtZX0tc2xpZGVfX2ZyYW1lYH0gY2xhc3NOYW1lPVwic2xpZGVfX2ZyYW1lXCI+XHJcblx0XHRcdFx0PGltZyBpZD17YCR7bmFtZX0tc2xpZGVfX3Bob3RvYH0gY2xhc3NOYW1lPVwic2xpZGVfX3Bob3RvXCIgXHJcblx0XHRcdFx0XHRzcmM9e2ltYWdlfSAgXHJcblx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlSW1hZ2VMb2FkZWQuYmluZCh0aGlzKX0gXHJcblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2ltZz5cclxuXHRcdFx0XHQ8TG9hZGVyIGxvYWRlcklkPXtcInNsaWRlX19sb2FkZXJcIn0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PHA+TXkgTG9hZGVyIGlzbid0IGl0IGdyZWF0PzwvcD5cclxuXHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiLCJleHBvcnQgZnVuY3Rpb24gYWRkX3Bob3RvKG5hbWUsIGltYWdlLCBjdXJyZW50U2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdBRERfUEhPVE8nLFxyXG5cdFx0Y3VycmVudFNsaWRlcyxcclxuXHRcdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9tZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX01FU1NBR0UnLFxyXG5cdFx0bWVzc2FnZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0X2NoZWNrKHJlZGlyZWN0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdSRURJUkVDVF9DSEVDSycsXHJcblx0XHRyZWRpcmVjdFxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcih0aW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0dGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcl90aW1lcigpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NMRUFSX1RJTUVSJyxcclxuXHRcdHRpbWVyOiBmYWxzZVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlX2dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hPT1NFX0dBTExFUlknLFxyXG5cdFx0Z2FsbGVyeVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb2JpbGVfaGVhZGVyX3N0YXR1cyhtb2JpbGVNZW51KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdNT0JJTEVfSEVBREVSX1NUQVRVUycsXHJcblx0XHRtb2JpbGVNZW51XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV93aW5kb3dfd2lkdGgod2luZG93V2lkdGgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1dJTkRPV19XSURUSCcsXHJcblx0XHR3aW5kb3dXaWR0aFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKGN1cnJlbnRTbGlkZUluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX0NVUlJFTlRfU0xJREVfSU5GTycsXHJcblx0XHRjdXJyZW50U2xpZGVJbmZvXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9ubyhjdXJyZW50U2xpZGVObykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9OTycsXHJcblx0XHRjdXJyZW50U2xpZGVOb1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgdG90YWxOb1NsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnSU5DUkVNRU5UX1NMSURFJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vLFxyXG5cdFx0dG90YWxOb1NsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgdG90YWxOb1NsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnREVDUkVNRU5UX1NMSURFJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vLFxyXG5cdFx0dG90YWxOb1NsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcihpbnRlcnZhbFRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHRpbnRlcnZhbFRpbWVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZF9uZXdfc2xpZGVzKHNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9BRF9ORVdfU0xJREVTJyxcclxuXHRcdHNsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZF9zbGlkZXMoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdVTkxPQURfU0xJREVTJyxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93X2ZpbG1zdHJpcChzaG93RmlsbXN0cmlwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTSE9XX0ZJTE1TVFJJUCcsXHJcblx0XHRzaG93RmlsbXN0cmlwXHJcblx0fVxyXG59IiwiY29uc3QgZ2FsbGVyeVNsaWRlcyA9IHtcclxuXHRhY3Rpb246IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkYXlsaWdodFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhdC10aGUtdHJhY2tcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9hdC10aGUtdHJhY2suanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtb3RvcmNyb3NzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInVsdGltYXRlLXNhdmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi91bHRpbWF0ZS1zYXZlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic29jY2VyLW1hdGNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGVhcC1vZi1mYWl0aFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWdoLWp1bXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJraWNrLWZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9raWNrLWZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaWctd2F2ZS1zdXJmaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmlnLXdhdmUtc3VyZmluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNrYXRlLXBhcmtcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2tpaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2tpaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHVkZGxlLWp1bXBpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYWNoLWJhY2tmbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdXJmLXNwbGFzaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2Nocm9kaW5nZXJzLWtpY2tmbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRldmVudHM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwYXJ0eS1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZS1jbG91ZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaXJ0aGRheS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIjR0aC1iaXJ0aGRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInByZWduYW5jeS1hbm5vdW5jZW1lbnRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ3JhZHVhdGluZy1jbGFzc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaXJ0aC1hbm5vdW5jZW1lbnRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwYXJ0eS1mcmllbmRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZnJpZW5kcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndlZGRpbmctZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmaXJzdC1iaXJ0aGRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2ZpcnN0LWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ3JhZHVhdGUtY2VsZWJyYXRpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0ZS1jZWxlYnJhdGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWFuZC1ncm9vbVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bGFuZHNjYXBlOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYXJjaGVzLW5hdGlvbmFsLXBhcmtcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9hcmNoZXMtbmF0aW9uYWwtcGFyay5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJvb2tseW4tYnJpZGdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjYWxtLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJib2F0aG91c2UtY290dGFnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2JvYXRob3VzZS1jb3R0YWdlLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkZXZpbHMtYnJpZGdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImxha2UtcGVpclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2xha2UtcGVpci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1bnNldC1wb3BwaWVzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBvcHBpZXMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1bnNldC1waWVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBpZXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJyaXZlci1yZWZsZWN0aW9uXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcml2ZXItcmVmbGVjdGlvbi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImR1c2staW4tYWZyaWNhXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZHVzay1pbi1hZnJpY2EuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtYXJzaC1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm55Yy1za3lsaW5lXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJuaWdodC1kb2xwaGluc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZmxhdGlyb24tYnVpbGRpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdW50YWluLWxha2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmUyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHVycGxlLWZsb3dlcnNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cG9ydHJhaXQ6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWF1dGlmdWwtYmx1clwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1jYXN1YWxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1jYXN1YWwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjYXJuaXZhbC1uaWdodFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2Fybml2YWwtbmlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhhcHB5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hhcHB5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsYWNrLWFuZC13aGl0ZS1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ5b3VuZy1tb25rc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibG9uZGUtY2xvc2UtdXAtYm9rZWhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGlkaW5nLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oaWRpbmctd29tYW4uanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ2lybC1yYWJiaXQtZnJpZW5kc2hpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvZ2lybC1yYWJiaXQtZnJpZW5kc2hpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJlZC1oYWlyZWQtY2hpbGRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdWl0LWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ3b21hbi1kcmVzc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjbG9zZS11cC13b21hbi1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdWl0MVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2xpZGVzOyIsIlxyXG5cclxuY29uc3QgaG9tZVNsaWRlcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tYW5nbGUuanBnJyksXHJcblx0XHR9LFx0XHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtcmVmbGVjdGlvbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLWNsb3NlLXVwLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sYW5kc2NhcGUtc2hvb3QuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWRlczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c2xpZGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2JlYWNoLXNob290JyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2ZpZWxkLXNob290JyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdpbi1hbmQtb3V0LW9mLWZvY3VzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9pbi1hbmQtb3V0LW9mLWZvY3VzLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3Ntb2tlLWNsb3VkJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdhdC1kdXNrJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lOiAnYWJvdmUtdGhlLWNsb3VkcycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHRcdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9QSE9UTyc6XHJcblx0XHRcdGxldCBwaG90b0luZm8gPSBhY3Rpb24ucGhvdG9JbmZvO1xyXG5cdFx0XHRsZXQgc2xpZGVzID0gWyAuLi5hY3Rpb25zLmN1cnJlbnRTbGlkZXMgXTtcclxuXHRcdFx0c2xpZGVzLnB1c2gocGhvdG9JbmZvKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtZXNzYWdlOiBbJycsJyddLFxyXG5cdHJlZGlyZWN0OiBmYWxzZVxyXG5cdH07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9NRVNTQUdFJzpcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBhY3Rpb24ubWVzc2FnZTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG1lc3NhZ2UgfVxyXG5cdFx0Y2FzZSAnUkVESVJFQ1RfQ0hFQ0snOlxyXG5cdFx0XHRsZXQgcmVkaXJlY3QgPSBhY3Rpb24ucmVkaXJlY3Q7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWRpcmVjdCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzb2NpYWxNZWRpYUxpbmtzIDogW1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRuYW1lOiBcIkZhY2VCb29rXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYm9rZWhiZXN0cGhvdG9ncmFwaHlcIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiIzNCNTk5OFwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiMyNDVhY2RcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJGbGlja3JcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZsaWNrci5jb20vcGhvdG9zL2RhdmlkX2Jva2VoL1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmxpY2tyXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjRkUwODgzXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzEyOGZkY1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkluc3RhZ3JhbVwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeS9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiI2YxNzUzMFwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiM3YTM4YWJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJMaW5rZWRJblwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhdmlkYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1saW5rZWRpblwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiIzAwNzdiNVwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiM1NmI5ZWVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb290ZXJfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgKCdTRVRfRk9PVEVSX0xJTktTJyk6XHJcblx0XHRcdGxldCBsaW5rcyA9IGFjdGlvbi5saW5rcztcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgbGlua3N9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IHRpbWVyID0gYWN0aW9uLnRpbWVyO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGltZXIgfTtcclxuXHRcdGNhc2UgJ0NMRUFSX1RJTUVSJzpcclxuXHRcdFx0dGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHRpbWVyfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzOyIsImltcG9ydCBnYWxsZXJ5U2xpZGVzIGZyb20gJy4uL2RhdGEvZ2FsbGVyeVNsaWRlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuZnVuY3Rpb24gYWJvdXRfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9QSE9UTyc6XHJcblx0XHRcdGxldCBwaG90b0luZm8gPSBhY3Rpb24ucGhvdG9JbmZvO1xyXG5cdFx0XHRsZXQgc2xpZGVzID0gWyAuLi5hY3Rpb25zLmN1cnJlbnRTbGlkZXMgXTtcclxuXHRcdFx0c2xpZGVzLnB1c2gocGhvdG9JbmZvKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRjYXNlICdDSE9PU0VfR0FMTEVSWSc6XHJcblx0XHRcdGxldCBnYWxsZXJ5ID0gYWN0aW9uLmdhbGxlcnk7XHJcblx0XHRcdHNsaWRlcyA9IFsgLi4uZ2FsbGVyeVNsaWRlc1tnYWxsZXJ5XSBdXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bGlua0luZm86IFtcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1ob21lJywgXHJcblx0XHRcdHBhdGg6ICcvJywgXHJcblx0XHRcdG5hbWU6ICdIb21lJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1nYWxsZXJ5JywgXHJcblx0XHRcdHBhdGg6ICcvZ2FsbGVyeScsIFxyXG5cdFx0XHRuYW1lOiAnUGhvdG8gR2FsbGVyeSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstYWJvdXQnLCBcclxuXHRcdFx0cGF0aDogJy9hYm91dCcsIFxyXG5cdFx0XHRuYW1lOiAnQWJvdXQgQm9rZWgnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWNvbnRhY3QnLCBcclxuXHRcdFx0cGF0aDogJy9jb250YWN0JywgXHJcblx0XHRcdG5hbWU6ICdDb250YWN0IFVzJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay10ZXN0JywgXHJcblx0XHRcdHBhdGg6ICcvdGVzdCcsIFxyXG5cdFx0XHRuYW1lOiAnVGVzdCBQYWdlJ1xyXG5cdFx0fSxcclxuXHRdLFxyXG5cdG1vYmlsZU1lbnU6IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBoZWFkZXJfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ01PQklMRV9IRUFERVJfU1RBVFVTJzpcclxuXHRcdFx0bGV0IG1vYmlsZU1lbnUgPSBhY3Rpb24ubW9iaWxlTWVudVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbW9iaWxlTWVudSB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcl9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0cGF1c2VTbGlkZVNob3c6IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9tZV9yZWR1Y2VycyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdTVE9SRV9XSU5ET1dfV0lEVEgnOlxyXG5cdFx0XHRsZXQgd2luZG93V2lkdGggPSBhY3Rpb24ud2luZG93V2lkdGg7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB3aW5kb3dXaWR0aCB9O1xyXG5cdFx0Y2FzZSAnUEFVU0VfU0xJREVfU0hPVyc6XHJcblx0XHRcdGxldCBwYXVzZVNsaWRlU2hvdyA9IGFjdGlvbi5wYXVzZVNsaWRlU2hvdztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRjdXJyZW50U2xpZGVObzogMCxcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcblx0c2hvd0ZpbG1zdHJpcDogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3Rvcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJzpcclxuXHRcdFx0bGV0IGN1cnJlbnRTbGlkZUluZm8gPSBhY3Rpb24uY3VycmVudFNsaWRlSW5mbztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZUluZm8gfVxyXG5cdFx0Y2FzZSAnU1RPUkVfQ1VSUkVOVF9TTElERV9OTyc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vfVxyXG5cdFx0Y2FzZSAnSU5DUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdGxldCB0b3RhbE5vU2xpZGVzID0gYWN0aW9uLnRvdGFsTm9TbGlkZXM7XHJcblx0XHRcdGlmKGN1cnJlbnRTbGlkZU5vID09IHRvdGFsTm9TbGlkZXMgLSAxKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm8gfVxyXG5cdFx0Y2FzZSAnREVDUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gMCl7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gPSB0b3RhbE5vU2xpZGVzIC0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyAtPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZVNsaWRlU2hvdyB9XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdMT0FEX05FV19TTElERVMnOlxyXG5cdFx0XHRsZXQgc2xpZGVzID0gYWN0aW9uLnNsaWRlcztcclxuXHRcdFx0Y3VycmVudFNsaWRlSW5mbyA9IHNsaWRlc1swXTtcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSAwIFxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzLCBjdXJyZW50U2xpZGVJbmZvLCAgY3VycmVudFNsaWRlTm99O1xyXG5cdFx0Y2FzZSAnVU5MT0FEX1NMSURFUyc6XHJcblx0XHRcdGxldCB0ZW1wU3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0XHRcdGRlbGV0ZSB0ZW1wU3RhdGVbJ2N1cnJlbnRTbGlkZUluZm8nXTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnc2xpZGVzJ107XHJcblx0XHRcdHJldHVybiB7IC4uLnRlbXBTdGF0ZSB9O1xyXG5cdFx0Y2FzZSAnU0hPV19GSUxNU1RSSVAnOlxyXG5cdFx0XHRsZXQgc2hvd0ZpbG1zdHJpcCA9IGFjdGlvbi5zaG93RmlsbXN0cmlwO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2hvd0ZpbG1zdHJpcCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5cdC8vIGN1cnJlbnRTbGlkZUluZm86IHtcclxuXHQvLyBcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHQvLyBcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHQvLyB9LFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdG9yX3JlZHVjZXJzOyIsIi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiAnLycsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogSG9tZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9pbmRleC5odG1sJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Fib3V0JyxcclxuXHRcdGV4YWN0OiBmYWxzZSxcclxuXHRcdGNvbXBvbmVudDogQWJvdXRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvY29udGFjdCcsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogQ29udGFjdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0LzpzdGF0dXMnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2dhbGxlcnknLFxyXG5cdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRjb21wb25lbnQ6IEdhbGxlcnlcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZ2FsbGVyeS86Z2FsbGVyeScsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IEdhbGxlcnlcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvdGVzdCcsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IFRlc3RcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYWJvdXRfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBjb250YWN0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udGFjdF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBmb290ZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzJztcclxuaW1wb3J0IGhlYWRlcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBob21lX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycyc7XHJcbmltcG9ydCBwcm9qZWN0b3JfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9wcm9qZWN0b3JfcmVkdWNlcnMnO1xyXG5cclxuXHJcbi8vQWRkIGFkZGl0aW9uYWwgcmVkdWNlcnMgaW4gaGVyZSB0byBiZSBjb21iaW5lZCBpbnRvIG9uZSByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRhYm91dDogYWJvdXRfcmVkdWNlcnMsXHJcblx0Y29udGFjdDogY29udGFjdF9yZWR1Y2VycyxcclxuXHRmb290ZXI6IGZvb3Rlcl9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5OiBnYWxsZXJ5X3JlZHVjZXJzLFxyXG5cdGdhbGxlcnlTZWxlY3RvcjogZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzLFxyXG5cdGhlYWRlcjogaGVhZGVyX3JlZHVjZXJzLFxyXG5cdGhvbWU6IGhvbWVfcmVkdWNlcnMsXHJcblx0cHJvamVjdG9yOiBwcm9qZWN0b3JfcmVkdWNlcnMsXHJcbn0pXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG5cdHJvb3RSZWR1Y2VyLFxyXG5cdC8vIGlmIHJlZGV4IGRldnRvb2xzIGV4dGVuc2lvbiBpcyBvbiB0aGUgd2luZG93IG9iamVjdCBydW4gdGhlIGRldnRvb2xzIGZ1bmN0aW9uXHJcblx0X19pc0Jyb3dzZXJfXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaXJjbGV0eXBlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
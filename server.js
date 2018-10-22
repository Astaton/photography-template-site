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
				// this.props.gallery.slides[0];
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
			// console.log(document.getElementById('filmstrip__container').offsetWidth);
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
exports.store_filmstrip_default_positions = store_filmstrip_default_positions;
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

function store_filmstrip_default_positions(filmstripDefaultPositions) {
	return {
		type: 'STORE_FILMSTRIP_DEFAULT_POSITIONS',
		filmstripDefaultPositions: filmstripDefaultPositions
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
		case 'STORE_FILMSTRIP_DEFAULT_POSITIONS':
			var filmstripDefaultPositions = action.filmstripDefaultPositions;
			return _extends({}, state, { filmstripDefaultPositions: filmstripDefaultPositions });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInRvZ2dsZUFib3V0TW9kaWZpZXJPbiIsInRvZ2dsZUFib3V0TW9kaWZpZXJPZmYiLCIkIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZXMiLCJhYm91dCIsIkNvbXBvbmVudCIsInN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbmRleCIsImltYWdlIiwiZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlciIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsInNsaWRlTm8iLCJzdG9yZV9jdXJyZW50X3NsaWRlX25vIiwiZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIiLCJ1cGRhdGVTbGlkZVNob3ciLCJwYXJzZUludCIsImZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlnaGxpZ2h0RmlsbXN0cmlwQ29udHJvbHMiLCJtYXBTbGlkZXNUb0ZpbG1zdHJpcCIsImZpbG1zdHJpcExlZnQiLCJmaWxtc3RyaXBSaWdodCIsIkZvb3RlciIsImFkZExpc3RlbmVycyIsImZvb3RlciIsInNvY2lhbE1lZGlhTGlua3MiLCJzb2NpYWxNZWRpYUxpbmtzSW5mbyIsImZvckVhY2giLCJmb250X2NvbG9yIiwiYmdfY29sb3IxIiwiYmdfY29sb3IyIiwiaG92ZXIiLCJob3Zlck9uIiwiaG92ZXJPZmYiLCJsaW5rIiwiaWNvbiIsImdhbGxlcnlBY3Rpb25zIiwiR2FsbGVyeSIsImNsb3NlR2FsbGVyeSIsImdhbGxlcnkiLCJjaG9vc2VfZ2FsbGVyeSIsInVubG9hZF9zbGlkZXMiLCJHYWxsZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5U2VsZWN0b3JMb2FkIiwiY2xlYXJJbnRlcnZhbCIsImdhbGxlcnlTZWxlY3RvciIsInRpbWVyIiwiZ2FsbGVyeVNlbGVjdG9yUmVzZXQiLCJnYWxsZXJ5U2VsZWN0b3JJZHMiLCJjb250YWluZXJJZCIsImdhbGxlcnlTZWxlY3RvcklkIiwiY291bnRlciIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3RvcmVfdGltZXIiLCJnYWxsZXJ5TmFtZSIsImhvdmVySW4iLCJob3Zlck91dCIsImNsaWNrIiwiZ29Ub0dhbGxlcnkiLCJvcGVuR2FsbGVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhlYWRlciIsInRvZ2dsZU1vYmlsZU1lbnVPdXQiLCJtb2JpbGVfaGVhZGVyX3N0YXR1cyIsInRvZ2dsZU1vYmlsZU1lbnVJbiIsImxpbmtJbmZvIiwia2V5IiwicHVyZSIsIkhvbWUiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsInNsaWRlU2hvdyIsInRvZ2dsZUhvbWVNb2RpZmllck9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNpcmNsZVR5cGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmFkaXVzIiwidG9nZ2xlSG9tZU1vZGlmaWVyT2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3BTbGlkZVNob3ciLCJzdG9yZV93aW5kb3dfd2lkdGgiLCJpbm5lcldpZHRoIiwiaW50ZXJ2YWxUaW1lciIsImhvbWUiLCJob21lU2xpZGVzIiwiaW1nU3JjIiwiY291bnQiLCJwYXVzZVNsaWRlU2hvdyIsImNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUiLCJ3aW5kb3dXaWR0aCIsInBhdXNlX3NsaWRlX3Nob3ciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJMb2FkZXIiLCJsb2FkZXJJZCIsIlByb2plY3RvciIsImRvd25BcnJvd1Zpc2liaWxpdHkiLCJsb2FkUHJvamVjdG9yIiwiYXV0b1J1blByb2plY3RvciIsInNob3dfZmlsbXN0cmlwIiwiY3VycmVudFNsaWRlTm8iLCJpbmNyZW1lbnRfc2xpZGUiLCJkZWNyZW1lbnRfc2xpZGUiLCJmaWxtc3RyaXBPdmVybGF5U2hpZnRlciIsInN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyIsImxvYWRfbmV3X3NsaWRlcyIsImhhbGZTZWNDb3VudGVyIiwidW5kZWZpbmVkIiwibmV4dFNsaWRlIiwicHJvamVjdG9yQm94V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNhbGN1bGF0ZWRXaWR0aCIsInNob3dGaWxtc3RyaXAiLCJzaGlmdEJ5IiwidHJhdmVsRGlzdGFuY2UiLCJwcm9wb3NlZFBvc2l0aW9uIiwiZmlsbXN0cmlwUG9zaXRpb24iLCJsZWZ0QXJyb3dQb3NpdGlvbiIsInJpZ2h0QXJyb3dQb3NpdGlvbiIsInNoaWZ0VG8iLCJwcm9qZWN0b3JEaXNwbGF5V2lkdGgiLCJwcm9qZWN0b3JCb3hDZW50ZXIiLCJmaWxtc3RyaXBXaWR0aCIsInJpZ2h0QXJyb3dXaWR0aCIsImxlZnRBcnJvd09mZnNldCIsInJpZ2h0QXJyb3dPZmZzZXQiLCJmaWxtc3RyaXBPZmZzZXQiLCJjZW50ZXJDZWxsIiwiY3VycmVudFNsaWRlSW5mbyIsInNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJ1bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJzdHlsZUZvciIsInByZXZpb3VzU2xpZGUiLCJwcm9qZWN0b3JEb3duSGFuZGxlciIsInBhdXNlQnV0dG9uSGFuZGxlciIsIlNsaWRlIiwic2V0U3R5bGVzIiwicmVtb3ZlU3R5bGVzIiwicGhvdG9JbmZvIiwiVGVzdCIsImFkZF9waG90byIsImN1cnJlbnRTbGlkZXMiLCJjbGVhcl90aW1lciIsInN0b3JlX2ZpbG1zdHJpcF9kZWZhdWx0X3Bvc2l0aW9ucyIsInRvdGFsTm9TbGlkZXMiLCJmaWxtc3RyaXBEZWZhdWx0UG9zaXRpb25zIiwiZ2FsbGVyeVNsaWRlcyIsImFjdGlvbiIsImV2ZW50cyIsImxhbmRzY2FwZSIsInBvcnRyYWl0IiwiaW5pdGlhbFN0YXRlIiwiYWJvdXRfcmVkdWNlcnMiLCJwdXNoIiwiY29udGFjdF9yZWR1Y2VycyIsImZvb3Rlcl9yZWR1Y2VycyIsImxpbmtzIiwiZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIiwiaGVhZGVyX3JlZHVjZXJzIiwiaG9tZV9yZWR1Y2VycyIsInByb2plY3Rvcl9yZWR1Y2VycyIsInRlbXBTdGF0ZSIsInJvb3RSZWR1Y2VyIiwiZ2FsbGVyeV9yZWR1Y2VycyIsIl9faXNCcm93c2VyX18iLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEscUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0Y7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEseUY7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsaUY7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsU0FBUztBQUNkQyxPQUFNLG9CQURRO0FBRWRDLEtBQUksMEVBRlU7QUFHZEMsU0FBUSwwQkFITTtBQUlkQyxlQUFjLG9FQUpBO0FBS2RDLGFBQVk7QUFMRSxDQUFmOztBQVFPLElBQU1DLGdDQUFZLHdCQUFsQjs7a0JBRVFOLE07Ozs7Ozs7Ozs7Ozs7O0FDVGY7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOztBQUNBOztBQUdBOztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFkQTtBQVJBO0FBd0JBLElBQU1PLE9BQU9DLFFBQVFDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFqQzs7QUFIQTs7O0FBSkE7OztBQUpBOzs7QUFWQTs7QUFzQkEsSUFBTUMsTUFBTSx3QkFBWjs7QUFFQUEsSUFBSUMsR0FBSixDQUFRLEdBQVIsRUFBYSxpQ0FBa0IsU0FBbEIsQ0FBYjs7QUFFQUQsSUFBSUMsR0FBSixDQUFRQyxxQkFBV0MsVUFBWCxDQUFzQixFQUFDQyxVQUFVLEtBQVgsRUFBdEIsQ0FBUjs7QUFFQUosSUFBSUssR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUNoQyxLQUFJQyxPQUFPSCxJQUFJSSxHQUFKLElBQVcsYUFBWCxHQUEyQixHQUEzQixHQUFpQ0osSUFBSUksR0FBaEQ7QUFDQSxLQUFNQyxTQUFTLDRCQUNkO0FBQUMsc0JBQUQ7QUFBQSxJQUFVLE9BQU9DLGVBQWpCO0FBQ0M7QUFBQywrQkFBRDtBQUFBLEtBQWMsVUFBVUgsSUFBeEIsRUFBOEIsU0FBUyxFQUF2QztBQUNDLGlDQUFDLGFBQUQ7QUFERDtBQURELEVBRGMsQ0FBZjs7QUFRQUYsS0FBSU0sSUFBSiw0UUFNNENDLG1CQUFPQSxDQUFDLDREQUFSLENBTjVDLHdVQVdtQkgsTUFYbkI7QUFlQSxDQXpCRDs7QUEyQkFYLElBQUllLElBQUosQ0FBUyxVQUFULEVBQXFCLFVBQUNULEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2xDLEtBQUlTLGNBQWNDLHFCQUFXQyxlQUFYLENBQTJCO0FBQzVDQyxXQUFTLE9BRG1DO0FBRTVDQyxRQUFNLGdCQUZzQztBQUc1Q0MsUUFBTTtBQUNMQyxTQUFNLFFBREQ7QUFFTGhDLFNBQU1ELHFCQUFPQyxJQUZSO0FBR0xpQyxhQUFVbEMscUJBQU9FLEVBSFo7QUFJTGlDLGlCQUFjbkMscUJBQU9HLE1BSmhCO0FBS0xDLGlCQUFjSixxQkFBT0ksWUFMaEI7QUFNTGdDLGdCQUFhcEMscUJBQU9vQztBQU5mO0FBSHNDLEVBQTNCLENBQWxCOztBQWFBLEtBQUlDLGNBQWM7QUFDakJDLFFBQVNyQixJQUFJc0IsSUFBSixDQUFTQyxJQUFsQixVQUEyQnhDLHFCQUFPQyxJQUFsQyxNQURpQjtBQUVqQndDLE1BQUksd0JBRmE7QUFHakJDLFdBQVMsdUNBSFE7QUFJakJDLDhaQVNzQjFCLElBQUlzQixJQUFKLENBQVNDLElBVC9CLFlBUzBDdkIsSUFBSXNCLElBQUosQ0FBU0ssS0FUbkQsOENBVXdCM0IsSUFBSXNCLElBQUosQ0FBU0MsSUFWakMsdUNBV1V2QixJQUFJc0IsSUFBSixDQUFTTSxPQVhuQiwrQkFZVTVCLElBQUlzQixJQUFKLENBQVNDLElBWm5CLFVBWTRCdkIsSUFBSXNCLElBQUosQ0FBU08sTUFackMsU0FZK0M3QixJQUFJc0IsSUFBSixDQUFTSyxLQVp4RDtBQUppQixFQUFsQjs7QUFzQkFqQixhQUFZb0IsUUFBWixDQUFxQlYsV0FBckIsRUFBa0MsVUFBQ1csR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDaEQsTUFBR0QsR0FBSCxFQUFPO0FBQ05FLFdBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSCxHQUFyQjtBQUNBOUIsT0FBSWtDLFFBQUosQ0FBYSxlQUFiO0FBQ0EsR0FIRCxNQUdNO0FBQ0xGLFdBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FqQyxPQUFJa0MsUUFBSixDQUFhLGtCQUFiO0FBQ0E7QUFDRCxFQVJEO0FBVUEsQ0E5Q0Q7O0FBZ0RBekMsSUFBSTBDLE1BQUosQ0FBVzlDLElBQVgsRUFBaUI7QUFBQSxRQUFNMkMsUUFBUUMsR0FBUixDQUFZLCtCQUE2QjVDLElBQXpDLENBQU47QUFBQSxDQUFqQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTs7OztBQUdBOztBQUdBOztBQUdBOzs7O0FBR0E7O0lBQVkrQyxZOztBQUNaOztJQUFZQyxnQjs7Ozs7Ozs7OzsrZUFkWjs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztJQUlNQyxLOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHVHQUNYQSxLQURXO0FBRWpCOzs7O3NDQUVtQjtBQUNuQixRQUFLQyxxQkFBTDtBQUNBO0FBQ0FSLFdBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQixLQUFLTSxLQUFwQztBQUNBOzs7eUNBRXNCO0FBQ3RCLFFBQUtFLHNCQUFMO0FBQ0E7OzswQ0FFdUI7QUFDdkJDLEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLGFBQXZCO0FBQ0FELEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLE1BQXZCO0FBQ0E7OzsyQ0FFd0I7QUFDeEJELEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLE1BQXZCO0FBQ0FELEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLGFBQXZCO0FBQ0E7OzsyQkFFUTtBQUNSLE9BQUlDLFNBQVMsS0FBS0wsS0FBTCxDQUFXTSxLQUFYLENBQWlCRCxNQUE5QjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxNQUFSLEVBQWUsV0FBVSxNQUF6QjtBQUNDO0FBQUE7QUFBQSxPQUFJLFdBQVUsb0JBQWQ7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUEsT0FBSyxXQUFVLGtCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0Msb0NBQUMsbUJBQUQsSUFBVyxVQUFVLE9BQXJCLEVBQThCLFFBQVFBLE1BQXRDO0FBREQsTUFERDtBQUlDO0FBQUE7QUFBQSxRQUFHLFdBQVUsYUFBYjtBQUNDO0FBQUE7QUFBQSxTQUFNLFdBQVUsdUJBQWhCO0FBQUE7QUFBQSxPQUREO0FBQUE7QUFBQSxNQUpEO0FBUUM7QUFBQTtBQUFBLFFBQUcsV0FBVSxhQUFiO0FBQ0M7QUFBQTtBQUFBLFNBQU0sV0FBVSx1QkFBaEI7QUFBQTtBQUFBLE9BREQ7QUFBQTtBQUFBLE1BUkQ7QUFZQztBQUFBO0FBQUEsUUFBRyxXQUFVLGFBQWI7QUFDQztBQUFBO0FBQUEsU0FBTSxXQUFVLHVCQUFoQjtBQUFBO0FBQUEsT0FERDtBQUFBO0FBQUEsTUFaRDtBQWdCQztBQUFBO0FBQUEsUUFBSSxXQUFVLGFBQWQ7QUFDQztBQUFBO0FBQUEsU0FBTSxXQUFVLHVCQUFoQjtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FIRDtBQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQWhCRDtBQUZELElBREQ7QUE0QkE7Ozs7RUF2RGtCRSxnQjs7QUEwRHBCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQUEsS0FDckJGLEtBRHFCLEdBQ0FHLEtBREEsQ0FDckJILEtBRHFCO0FBQUEsS0FDZEksU0FEYyxHQUNBRCxLQURBLENBQ2RDLFNBRGM7O0FBRTdCLFFBQU87QUFDTkosY0FETTtBQUVOSTtBQUZNLEVBQVA7QUFJQSxDQU5EOztBQVFBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsV0FBWTtBQUNuQyxRQUFPO0FBQ0xDLFdBQVMsK0JBQW1CQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmpCLFlBQWxCLEVBQWdDQyxnQkFBaEMsQ0FBbkIsRUFBc0VpQixRQUF0RTtBQURKLEVBQVA7QUFHQSxDQUpEOztrQkFPZSx5QkFBUVAsWUFBUixFQUFzQkcsZUFBdEIsRUFBdUNaLEtBQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZmOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7K2VBYkE7OztBQVFBOzs7QUFJQTs7O0lBR01pQixHOzs7Ozs7Ozs7OzsyQkFHSTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxjQUFSLEVBQXVCLFdBQVUsY0FBakM7QUFDQyxrQ0FBQyxnQkFBRCxPQUREO0FBRUU7QUFBQywyQkFBRDtBQUFBO0FBQ0VDLHNCQUFPQyxHQUFQLENBQVc7QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxVQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxVQUEyQkMsQ0FBM0IsUUFBZ0JDLFNBQWhCO0FBQUEsVUFBaUNDLElBQWpDOztBQUFBLGFBQ1gsOEJBQUMscUJBQUQ7QUFDQyxZQUFLSixJQUROO0FBRUMsYUFBTUEsSUFGUDtBQUdDLGNBQU9DLEtBSFI7QUFJQyxlQUFRLGdCQUFDcEIsS0FBRDtBQUFBLGVBQ1AsOEJBQUMsQ0FBRCxlQUFPQSxLQUFQLEVBQWtCdUIsSUFBbEIsRUFETztBQUFBO0FBSlQsUUFEVztBQUFBLE1BQVg7QUFERixLQUZGO0FBY0Msa0NBQUMsZ0JBQUQ7QUFkRCxJQUREO0FBa0JBOzs7O0VBdEJnQmhCLGdCOztrQkF5QkhTLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNmOzs7O0FBQ0E7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7QUFDQTs7OztBQUdBOztJQUFZUSxjOzs7Ozs7Ozs7OytlQWZaOzs7QUFJQTs7O0FBR0E7OztBQUdBOzs7QUFJQTs7O0lBS01DLE87OztBQUNMLGtCQUFZekIsS0FBWixFQUFrQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWpCOzs7O3NDQUVrQjtBQUFBOztBQUNsQixRQUFLMEIsaUJBQUw7QUFDQTtBQUNBQyxjQUFZLFlBQU07QUFDakIsV0FBS0MsdUJBQUw7QUFDQSxJQUZELEVBRUUsRUFGRjtBQUdBLFFBQUtDLGtCQUFMO0FBQ0EsUUFBS0Msd0JBQUw7QUFDQXJDLFdBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQyxLQUFLTSxLQUF2QztBQUNBOzs7eUNBR3NCO0FBQ3RCLFFBQUsrQix3QkFBTDtBQUNBLFFBQUtGLGtCQUFMO0FBQ0FwQyxXQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQSxRQUFLTSxLQUFMLENBQVdnQyxjQUFYLENBQTBCLEtBQTFCO0FBQ0E7Ozs2Q0FHMEI7QUFBQTs7QUFDMUIsT0FBRyxLQUFLaEMsS0FBTCxDQUFXaUMsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLE1BQTNCLEVBQWtDO0FBQ2pDMUMsWUFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0FpQyxlQUFZLFlBQU07QUFDakIsWUFBSzNCLEtBQUwsQ0FBV2dDLGNBQVgsQ0FBMEIsSUFBMUI7QUFDQSxLQUZELEVBRUUsSUFGRjtBQUdBLElBTEQsTUFLTztBQUNOdkMsWUFBUUMsR0FBUixDQUFZLHdEQUFaO0FBQ0FpQyxlQUFZLFlBQU07QUFDakIsWUFBSzNCLEtBQUwsQ0FBV2dDLGNBQVgsQ0FBMEIsS0FBMUI7QUFDQSxLQUZELEVBRUUsSUFGRjtBQUdBO0FBQ0Q7OztzQ0FHbUI7QUFBQTs7QUFDbkI7QUFDQXZDLFdBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBLE9BQUl5QyxTQUFTLEtBQUtuQyxLQUFMLENBQVdpQyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsTUFBckM7QUFDQSxPQUFHQSxNQUFILEVBQVU7QUFDVCxRQUFHQSxXQUFXLFNBQWQsRUFBd0I7QUFDdkIsVUFBS25DLEtBQUwsQ0FBV29DLGFBQVgsQ0FBeUIsQ0FBQyxnQkFBRCxFQUFtQiw2QkFBbkIsQ0FBekI7QUFDQTNDLGFBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQyxLQUFLTSxLQUFMLENBQVdxQyxPQUFYLENBQW1CakQsT0FBdkQ7QUFDQSxLQUhELE1BR0s7QUFDSixVQUFLWSxLQUFMLENBQVdvQyxhQUFYLENBQXlCLENBQUMsaUJBQUQsRUFBb0IseUJBQXBCLENBQXpCO0FBQ0FULGdCQUFZLFlBQU07QUFBRWxDLGNBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxPQUFLTSxLQUFMLENBQVdxQyxPQUE1QztBQUF1RCxNQUEzRSxFQUE2RSxJQUE3RTtBQUNBO0FBQ0RWLGVBQVksWUFBTTtBQUNqQnhCLE9BQUUscUJBQUYsRUFBeUJDLFdBQXpCLENBQXFDLDZCQUFyQztBQUNBRCxPQUFFLHFCQUFGLEVBQXlCQyxXQUF6QixDQUFxQyxvQkFBckM7QUFDQSxLQUhELEVBR0csR0FISDtBQUlBdUIsZUFBWSxZQUFNO0FBQ2pCeEIsT0FBRSxxQkFBRixFQUF5QkMsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ0FELE9BQUUscUJBQUYsRUFBeUJDLFdBQXpCLENBQXFDLDZCQUFyQztBQUNBLEtBSEQsRUFHRyxJQUhIO0FBSUE7QUFDRDs7OzRDQUd5QjtBQUN6QixPQUFHRCxFQUFFLE9BQUYsRUFBV21DLFFBQVgsQ0FBb0IsTUFBcEIsTUFBZ0MsSUFBbkMsRUFBd0M7QUFDdkNuQyxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixlQUF2QjtBQUNBRCxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixNQUF2QjtBQUNBO0FBQ0Q7Ozs2Q0FHMEI7QUFDMUIsT0FBR0QsRUFBRSxPQUFGLEVBQVdtQyxRQUFYLENBQW9CLGVBQXBCLE1BQXlDLElBQTVDLEVBQWlEO0FBQ2hEbkMsTUFBRSxPQUFGLEVBQVdDLFdBQVgsQ0FBdUIsTUFBdkI7QUFDQUQsTUFBRSxPQUFGLEVBQVdDLFdBQVgsQ0FBdUIsZUFBdkI7QUFDQTtBQUNEOzs7dUNBR29CO0FBQ3BCRCxLQUFFLG9CQUFGLEVBQXdCQyxXQUF4QixDQUFvQywyQkFBcEM7QUFDQUQsS0FBRSxlQUFGLEVBQW1CQyxXQUFuQixDQUErQixzQkFBL0I7QUFDQUQsS0FBRSxlQUFGLEVBQW1CQyxXQUFuQixDQUErQixzQkFBL0I7QUFDQTs7OzJCQUdPO0FBQ1AsT0FBRyxLQUFLSixLQUFMLENBQVdxQyxPQUFYLENBQW1CMUMsUUFBbkIsS0FBZ0MsSUFBbkMsRUFBd0M7QUFDdkMsV0FBTyw4QkFBQyx3QkFBRCxJQUFVLElBQUcsVUFBYixHQUFQO0FBQ0E7QUFDRCxVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsTUFBZixFQUFzQixJQUFHLE1BQXpCO0FBQ0UsU0FBS0ssS0FBTCxDQUFXaUMsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLE1BQXhCLEdBQ0E7QUFBQTtBQUFBLE9BQUssSUFBRyxvQkFBUixFQUE2QixXQUFVLG9CQUF2QztBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFDQTtBQUFBO0FBQUEsU0FBSSxXQUFVLGlCQUFkO0FBQWlDLFlBQUtuQyxLQUFMLENBQVdxQyxPQUFYLENBQW1CakQsT0FBbkIsQ0FBMkIsQ0FBM0I7QUFBakMsT0FEQTtBQUVBLG9DQUFDLGdCQUFELE9BRkE7QUFHQTtBQUFBO0FBQUEsU0FBSSxXQUFVLGVBQWQ7QUFBK0IsWUFBS1ksS0FBTCxDQUFXcUMsT0FBWCxDQUFtQmpELE9BQW5CLENBQTJCLENBQTNCO0FBQS9CO0FBSEE7QUFERCxLQURBLEdBU0EsSUFWRjtBQVlDO0FBQUE7QUFBQSxPQUFLLFdBQVUsZ0NBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLCtCQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQUksV0FBVSxpQkFBZDtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFLLFdBQVUseUJBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsT0FGRDtBQUtDO0FBQUE7QUFBQSxTQUFLLFdBQVUsNEJBQWY7QUFDQztBQUFBO0FBQUEsVUFBUyxXQUFVLHVCQUFuQjtBQUNDO0FBQUE7QUFBQTtBQUNDLGlEQUFNLFdBQVUsOENBQWhCLEdBREQ7QUFBQTtBQUVDO0FBQUE7QUFBQSxZQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBLFVBRkQ7QUFBQTtBQUFBLFNBREQ7QUFNQztBQUFBO0FBQUE7QUFDQyxpREFBTSxXQUFVLHdDQUFoQixHQUREO0FBQUE7QUFFQztBQUFBO0FBQUEsWUFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQSxVQUZEO0FBQUE7QUFBQSxTQU5EO0FBV0M7QUFBQTtBQUFBO0FBQ0MsaURBQU0sV0FBVSxxQ0FBaEIsR0FERDtBQUFBO0FBRUM7QUFBQTtBQUFBLFlBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQUEsVUFGRDtBQUFBO0FBQUE7QUFYRDtBQUREO0FBTEQ7QUFERCxLQVpEO0FBdUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsNEJBQWY7QUFDQyxtQ0FBQyxxQkFBRDtBQUREO0FBdkNELElBREQ7QUE2Q0E7Ozs7RUF4SW9CbUIsZ0I7O0FBNEl0QixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUFFLFFBQU8sRUFBRTZCLFNBQVM1QixNQUFNNEIsT0FBakIsRUFBUDtBQUFtQyxDQUFuRTs7QUFFQSxJQUFNMUIsa0JBQWtCLFNBQWxCQSxlQUFrQixXQUFZO0FBQUUsUUFBTywrQkFBbUJhLGNBQW5CLEVBQW1DVCxRQUFuQyxDQUFQO0FBQXFELENBQTNGOztrQkFFZSx5QkFBUVAsWUFBUixFQUFzQkcsZUFBdEIsRUFBdUNjLE9BQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS2Y7Ozs7OztBQUVBLElBQU1jLGNBQWMsU0FBZEEsV0FBYyxHQUFJO0FBQ3ZCLFFBQ0M7QUFBQTtBQUFBLElBQUssV0FBVSxzQkFBZjtBQUNDO0FBQUE7QUFBQSxLQUFNLFdBQVUsaUJBQWhCLEVBQWtDLFFBQU8sTUFBekMsRUFBZ0QsUUFBTyxFQUF2RDtBQUNDLDRDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLFdBQVUsdUJBQXpDLEVBQWlFLElBQUcsV0FBcEUsRUFBZ0YsYUFBWSxpQkFBNUYsRUFBOEcsY0FBOUcsR0FERDtBQUVDLDRDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLE1BQTFCLEVBQWlDLFdBQVUseUJBQTNDLEVBQXFFLElBQUcsYUFBeEUsRUFBc0YsYUFBWSxRQUFsRyxHQUZEO0FBR0MsNENBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssTUFBekIsRUFBZ0MsV0FBVSx3QkFBMUMsRUFBbUUsSUFBRyxZQUF0RSxFQUFtRixhQUFZLGtCQUEvRixFQUFrSCxjQUFsSCxHQUhEO0FBSUMsK0NBQVUsTUFBSyxTQUFmLEVBQXlCLFdBQVUsMEJBQW5DLEVBQThELElBQUcsY0FBakUsRUFBZ0YsYUFBWSxxQkFBNUYsRUFBa0gsY0FBbEgsR0FKRDtBQUtDLDRDQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLGlCQUF4QixFQUEwQyxXQUFVLG1CQUFwRCxFQUF3RSxPQUFNLGNBQTlFO0FBTEQ7QUFERCxFQUREO0FBV0EsQ0FaRDs7a0JBY2VBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7QUFHQTs7QUFHQTs7QUFHQTs7SUFBWWYsYzs7QUFHWjs7Ozs7Ozs7Ozs7OytlQWJBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0lBSU1nQixTOzs7QUFDTCxvQkFBWXhDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwrR0FDWEEsS0FEVztBQUVqQjs7OztzQ0FFbUI7QUFDbkJQLFdBQVFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxLQUFLTSxLQUFqRDtBQUNBOzs7b0NBRWlCakIsSSxFQUFNO0FBQ3ZCb0IsaUNBQTRCcEIsSUFBNUIsRUFBb0MwRCxHQUFwQyxDQUF3QyxTQUF4QyxFQUFtRCxNQUFuRDtBQUNBOzs7cUNBRWtCMUQsSSxFQUFNO0FBQ3hCO0FBQ0FvQixpQ0FBNEJwQixJQUE1QixFQUFvQzBELEdBQXBDLENBQXdDLFNBQXhDLEVBQW1ELE9BQW5EO0FBQ0E7Ozt1Q0FFb0JwQyxNLEVBQVE7QUFBQTs7QUFDNUIsT0FBSXFDLGVBQWVyQyxPQUFPYSxHQUFQLENBQVksZ0JBQWtCeUIsS0FBbEIsRUFBNEI7QUFBQSxRQUF6QjVELElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLFFBQW5CNkQsS0FBbUIsUUFBbkJBLEtBQW1COztBQUMxRCxXQUNDO0FBQUE7QUFBQSxPQUFLLDBCQUF3QjdELElBQTdCLEVBQXFDLFdBQVUsaUJBQS9DO0FBQ0MsZUFBVSxtQkFBTTtBQUFFLGNBQUs4RCx5QkFBTCxDQUErQkYsS0FBL0I7QUFBc0MsT0FEekQ7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0MsNkNBQUssV0FBVSxrQkFBZjtBQUNDLFlBQUtDLEtBRE47QUFFQyxZQUFLN0QsSUFGTjtBQUdDLGVBQVEsT0FBSytELGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixNQUE1QixFQUFrQ2hFLElBQWxDLENBSFQ7QUFJQyxnQkFBUyxPQUFLaUUsa0JBQUwsQ0FBd0JELElBQXhCLENBQTZCLE1BQTdCLEVBQW1DaEUsSUFBbkM7QUFKVjtBQURELE1BRkQ7QUFXQyw0Q0FBSyxXQUFVLDBCQUFmLEVBQTBDLElBQUcsMEJBQTdDLEdBWEQ7QUFZQyxtQ0FBQyxnQkFBRCxJQUFRLHFDQUFtQ0EsSUFBM0M7QUFaRCxLQUREO0FBZ0JBLElBakJrQixDQUFuQjtBQWtCQSxVQUFPMkQsWUFBUDtBQUNBOzs7NENBRXlCTyxPLEVBQVM7QUFBQTs7QUFDbEMsUUFBS2pELEtBQUwsQ0FBV2tELHNCQUFYLENBQWtDRCxPQUFsQztBQUNBLFFBQUtqRCxLQUFMLENBQVdtRCw2QkFBWCxDQUF5Q0YsVUFBUSxDQUFDLEdBQWxEO0FBQ0F0QixjQUFZLFlBQU07QUFDakIsV0FBSzNCLEtBQUwsQ0FBV29ELGVBQVg7QUFDQSxJQUZEO0FBR0E7OztrQ0FHZTtBQUNmLE9BQUdDLFNBQVNsRCxFQUFFLHVCQUFGLEVBQTJCc0MsR0FBM0IsQ0FBK0IsTUFBL0IsQ0FBVCxNQUFxRCxDQUFyRCxJQUEwRFksU0FBU2xELEVBQUUsdUJBQUYsRUFBMkJzQyxHQUEzQixDQUErQixNQUEvQixDQUFULElBQWlELEdBQWpELEtBQXlELENBQXRILEVBQXdIO0FBQ3ZILFNBQUt6QyxLQUFMLENBQVdzRCx5QkFBWCxDQUFxQyxHQUFyQztBQUNBO0FBQ0Q7OzttQ0FHZ0I7QUFDaEIsT0FBR0QsU0FBU2xELEVBQUUsdUJBQUYsRUFBMkJzQyxHQUEzQixDQUErQixNQUEvQixDQUFULE1BQXFELENBQXJELElBQTBEWSxTQUFTbEQsRUFBRSx1QkFBRixFQUEyQnNDLEdBQTNCLENBQStCLE1BQS9CLENBQVQsSUFBaUQsR0FBakQsS0FBeUQsQ0FBdEgsRUFBd0g7QUFDdkgsU0FBS3pDLEtBQUwsQ0FBV3NELHlCQUFYLENBQXFDLENBQUMsR0FBdEM7QUFDQTtBQUNEOzs7K0NBRzRCO0FBQzVCbkQsS0FBRSwwQkFBRixFQUE4Qm9ELFFBQTlCLENBQXVDLG9DQUF2QztBQUNBcEQsS0FBRSwwQkFBRixFQUE4QnFELFdBQTlCLENBQTBDLHlCQUExQztBQUNBckQsS0FBRSwyQkFBRixFQUErQm9ELFFBQS9CLENBQXdDLHFDQUF4QztBQUNBcEQsS0FBRSwyQkFBRixFQUErQnFELFdBQS9CLENBQTJDLDBCQUEzQztBQUNBN0IsY0FBWSxZQUFNO0FBQ2pCeEIsTUFBRSwwQkFBRixFQUE4Qm9ELFFBQTlCLENBQXVDLHlCQUF2QztBQUNBcEQsTUFBRSwwQkFBRixFQUE4QnFELFdBQTlCLENBQTBDLG9DQUExQztBQUNBckQsTUFBRSwyQkFBRixFQUErQm9ELFFBQS9CLENBQXdDLDBCQUF4QztBQUNBcEQsTUFBRSwyQkFBRixFQUErQnFELFdBQS9CLENBQTJDLHFDQUEzQztBQUNBLElBTEQsRUFLRyxHQUxIO0FBTUE7OzsyQkFHUTtBQUFBOztBQUNSLE9BQUluRCxTQUFTLEtBQUtMLEtBQUwsQ0FBV0ssTUFBeEI7QUFDQSxVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsc0JBQVIsRUFBK0IsV0FBVSxzQkFBekM7QUFDQyxtQkFBZTtBQUFBLGFBQU0sT0FBS29ELDBCQUFMLEVBQU47QUFBQTtBQURoQjtBQUdHcEQsYUFBUyxLQUFLcUQsb0JBQUwsQ0FBMEJyRCxNQUExQixDQUFULEdBQTZDLElBSGhEO0FBSUM7QUFBQTtBQUFBLE9BQU0sSUFBRyx5QkFBVDtBQUNDLGlCQUFVLHlCQURYO0FBRUMsYUFBTSw4QkFGUDtBQUdDLGVBQVM7QUFBQSxjQUFNLE9BQUtzRCxhQUFMLEVBQU47QUFBQSxPQUhWO0FBSUM7QUFBQTtBQUFBLFFBQUcsV0FBVSx3QkFBYjtBQUFBO0FBQUEsTUFKRDtBQUtDLDBDQUFHLFdBQVUsbUJBQWI7QUFMRCxLQUpEO0FBV0M7QUFBQTtBQUFBLE9BQU0sSUFBRywwQkFBVDtBQUNDLGlCQUFVLDBCQURYO0FBRUMsYUFBTSw2QkFGUDtBQUdDLGVBQVM7QUFBQSxjQUFNLE9BQUtDLGNBQUwsRUFBTjtBQUFBLE9BSFY7QUFJQztBQUFBO0FBQUEsUUFBRyxXQUFVLHdCQUFiO0FBQUE7QUFBQSxNQUpEO0FBS0MsMENBQUcsV0FBVSxvQkFBYjtBQUxELEtBWEQ7QUFrQkMsMkNBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLDBCQUE3QztBQWxCRCxJQUREO0FBdUJBOzs7O0VBdEdzQnJELGdCOztBQXlHeEIsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFBRSxRQUFPLEVBQUVFLFdBQVdELE1BQU1DLFNBQW5CLEVBQVA7QUFBdUMsQ0FBdkU7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixXQUFZO0FBQUUsUUFBTywrQkFBbUJhLGNBQW5CLEVBQW1DVCxRQUFuQyxDQUFQO0FBQXFELENBQTNGOztrQkFFZSx5QkFBUVAsWUFBUixFQUFzQkcsZUFBdEIsRUFBdUM2QixTQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SGY7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7K2VBTEE7OztBQUlBOzs7SUFHTXFCLE07OztBQUNMLGlCQUFZN0QsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNaQSxLQURZO0FBRWxCOzs7O3NDQUVtQjtBQUNuQjtBQUNBLFFBQUs4RCxZQUFMLENBQWtCLEtBQUs5RCxLQUFMLENBQVcrRCxNQUFYLENBQWtCQyxnQkFBcEM7QUFDQTs7QUFFRDs7OzsrQkFDYUMsb0IsRUFBc0I7QUFBQTs7QUFDbENBLHdCQUFxQkMsT0FBckIsQ0FBOEIsZ0JBQWdEO0FBQUEsUUFBN0NDLFVBQTZDLFFBQTdDQSxVQUE2QztBQUFBLFFBQWpDcEYsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsUUFBM0JxRixTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxRQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUM3RWxFLFlBQU1wQixJQUFOLGlCQUF3QnVGLEtBQXhCLENBQThCO0FBQUEsWUFBTSxPQUFLQyxPQUFMLE9BQWlCeEYsSUFBakIsY0FBZ0NvRixVQUFoQyxFQUE0Q0MsU0FBNUMsRUFBdURDLFNBQXZELENBQU47QUFBQSxLQUE5QixFQUF1RztBQUFBLFlBQU0sT0FBS0csUUFBTCxPQUFrQnpGLElBQWxCLGFBQU47QUFBQSxLQUF2RztBQUNBLElBRkQ7QUFHQTs7OzBCQUVPdEMsRSxFQUFJMEgsVSxFQUFZQyxTLEVBQVdDLFMsRUFBVztBQUM3Q2xFLEtBQUUxRCxFQUFGLEVBQU1nRyxHQUFOLENBQVUsT0FBVixFQUFtQjBCLFVBQW5CO0FBQ0FoRSxLQUFFMUQsRUFBRixFQUFNZ0csR0FBTixDQUFVLFlBQVYsOEJBQWtEMkIsU0FBbEQsVUFBZ0VDLFNBQWhFO0FBQ0FsRSxLQUFFMUQsRUFBRixFQUFNMkQsV0FBTixDQUFrQiw0QkFBbEI7QUFDQUQsS0FBRTFELEVBQUYsRUFBTTJELFdBQU4sQ0FBa0IscUJBQWxCO0FBQ0E7OzsyQkFFUTNELEUsRUFBSTtBQUNaMEQsS0FBRTFELEVBQUYsRUFBTWdHLEdBQU4sQ0FBVSxPQUFWLEVBQW1CLE9BQW5CO0FBQ0F0QyxLQUFFMUQsRUFBRixFQUFNZ0csR0FBTixDQUFVLFlBQVYsRUFBd0IsK0NBQXhCO0FBQ0F0QyxLQUFFMUQsRUFBRixFQUFNMkQsV0FBTixDQUFrQixxQkFBbEI7QUFDQUQsS0FBRTFELEVBQUYsRUFBTTJELFdBQU4sQ0FBa0IsNEJBQWxCO0FBQ0E7OzsyQkFFTztBQUNQLFVBQ0M7QUFBQTtBQUFBLE1BQVEsV0FBVSxRQUFsQjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsY0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFDQztBQUFBO0FBQUEsU0FBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVSxrQ0FBZjtBQUNDO0FBQUE7QUFBQSxVQUFHLFdBQVUscUJBQWI7QUFBQTtBQUVDO0FBQUMsZ0NBQUQ7QUFBQSxXQUFTLElBQUcscUJBQVosRUFBa0MsV0FBVSxxQkFBNUMsRUFBa0UsSUFBRyxRQUFyRTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUZEO0FBREQ7QUFGRCxNQUREO0FBWUM7QUFBQTtBQUFBLFFBQUssV0FBVSxpQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSyxXQUFVLG1DQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQVMsV0FBVSxpQkFBbkI7QUFDQztBQUFBO0FBQUEsV0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQSxTQUREO0FBRUM7QUFBQTtBQUFBLFdBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUEsU0FGRDtBQUdDO0FBQUE7QUFBQSxXQUFHLE1BQUssb0JBQVI7QUFDQztBQUFBO0FBQUEsWUFBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQURELFNBSEQ7QUFNQyw2Q0FBRyxXQUFVLHNCQUFiO0FBTkQ7QUFERDtBQUZELE1BWkQ7QUF5QkM7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSSxXQUFVLGtDQUFkO0FBQ0UsWUFBS0osS0FBTCxDQUFXK0QsTUFBWCxDQUFrQkMsZ0JBQWxCLENBQW1DOUMsR0FBbkMsQ0FBdUM7QUFBQSxZQUFHbkMsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBUzBGLElBQVQsU0FBU0EsSUFBVDtBQUFBLFlBQWdCQyxJQUFoQixTQUFnQkEsSUFBaEI7QUFBQSxlQUN2QztBQUFBO0FBQUEsV0FBSSxLQUFRM0YsSUFBUixZQUFKLEVBQTJCLElBQU9BLElBQVAsZUFBM0IsRUFBb0QsV0FBVSwwQkFBOUQ7QUFDQztBQUFBO0FBQUEsWUFBRyxNQUFNMEYsSUFBVCxFQUFlLFFBQU8sUUFBdEI7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsY0FBRyxXQUFVLG9CQUFiO0FBQW1DMUY7QUFBbkMsWUFERDtBQUVDLGdEQUFHLFdBQWMyRixJQUFkLHlCQUFILEVBQTZDLElBQU8zRixJQUFQLFlBQTdDLEVBQW1FLGVBQVksTUFBL0UsRUFBc0YsT0FBT0EsSUFBN0Y7QUFGRDtBQUREO0FBREQsU0FEdUM7QUFBQSxRQUF2QztBQURGO0FBRkQ7QUF6QkQsS0FERDtBQTBDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLG1CQUFiO0FBQUE7QUFBQTtBQUREO0FBMUNELElBREQ7QUFnREE7Ozs7RUFoRm1Cd0IsZ0I7O0FBbUZyQixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUM3QixRQUFPO0FBQ051RCxVQUFRdEQsTUFBTXNEO0FBRFIsRUFBUDtBQUdBLENBSkQ7O2tCQU1lLHlCQUFRdkQsWUFBUixFQUFzQnFELE1BQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GZjs7OztBQUdBOztBQUdBOztBQUdBOztJQUFZYyxjOztBQUNaOztJQUFZN0UsZ0I7O0FBR1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQWZBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFJQTs7O0lBSU04RSxPOzs7QUFDTCxrQkFBWTVFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWkEsS0FEWTtBQUVsQjs7OztzQ0FFbUI7QUFDbkJQLFdBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQyxLQUFLTSxLQUEvQztBQUNBUCxXQUFRQyxHQUFSO0FBQ0E7Ozt1Q0FFb0I7QUFDcEI7QUFDQTs7O3lDQUVzQjtBQUN0QixRQUFLbUYsWUFBTDtBQUNBOzs7aUNBR2M7QUFDZCxPQUFHMUUsRUFBRSxPQUFGLEVBQVdtQyxRQUFYLENBQW9CLGVBQXBCLENBQUgsRUFBd0M7QUFDdkNuQyxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixNQUF2QjtBQUNBRCxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixlQUF2QjtBQUNBRCxNQUFFLDZCQUFGLEVBQWlDQyxXQUFqQyxDQUE2Qyw0QkFBN0M7QUFDQUQsTUFBRSw2QkFBRixFQUFpQ0MsV0FBakMsQ0FBNkMsa0NBQTdDO0FBQ0FELE1BQUUsa0JBQUYsRUFBc0JDLFdBQXRCLENBQWtDLHdCQUFsQztBQUNBRCxNQUFFLGtCQUFGLEVBQXNCQyxXQUF0QixDQUFrQyxpQkFBbEM7QUFDQTtBQUNELE9BQUdELEVBQUUsMEJBQUYsRUFBOEJtQyxRQUE5QixDQUF1QywwQ0FBdkMsQ0FBSCxFQUFzRjtBQUNyRm5DLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLDBDQUExQztBQUNBO0FBQ0QsT0FBR0QsRUFBRSwwQkFBRixFQUE4Qm1DLFFBQTlCLENBQXVDLGdDQUF2QyxDQUFILEVBQTRFO0FBQzNFbkMsTUFBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0E7QUFDRCxPQUFHLENBQUNELEVBQUUsMEJBQUYsRUFBOEJtQyxRQUE5QixDQUF1Qyx5QkFBdkMsQ0FBSixFQUFzRTtBQUNyRW5DLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLHlCQUExQztBQUNBO0FBQ0Q7OzsyQkFJTztBQUFBOztBQUNQLE9BQUlDLFNBQVMsS0FBS0wsS0FBTCxDQUFXOEUsT0FBWCxDQUFtQnpFLE1BQWhDO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWYsRUFBc0IsSUFBRyxNQUF6QjtBQUNDLGtDQUFDLHlCQUFELElBQWlCLGdCQUFpQixLQUFLTCxLQUFMLENBQVdZLE9BQVgsQ0FBbUJtRSxjQUFyRCxFQUFzRSxlQUFnQixLQUFLL0UsS0FBTCxDQUFXWSxPQUFYLENBQW1Cb0UsYUFBekcsR0FERDtBQUVDO0FBQUE7QUFBQSxPQUFNLFdBQVUsZ0JBQWhCLEVBQWlDLE9BQU0sZUFBdkMsRUFBdUQsU0FBVTtBQUFBLGNBQU0sT0FBS0gsWUFBTCxFQUFOO0FBQUEsT0FBakU7QUFDQTtBQUFBO0FBQUEsUUFBRyxXQUFVLG9CQUFiO0FBQUE7QUFBQSxNQURBO0FBQUE7QUFBQSxLQUZEO0FBTUM7QUFBQTtBQUFBLE9BQUssV0FBVSx3QkFBZixFQUF3QyxJQUFHLGlCQUEzQztBQUNDLG1DQUFDLG1CQUFELElBQVcsVUFBVSxTQUFyQixFQUFnQyxRQUFReEUsTUFBeEM7QUFERDtBQU5ELElBREQ7QUFZQTs7OztFQXZEb0JFLGdCOztBQTBEdEIsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFBQSxLQUNyQnNFLE9BRHFCLEdBQ0VyRSxLQURGLENBQ3JCcUUsT0FEcUI7QUFBQSxLQUNacEUsU0FEWSxHQUNFRCxLQURGLENBQ1pDLFNBRFk7O0FBRTdCLFFBQU87QUFDTm9FLGtCQURNO0FBRU5wRTtBQUZNLEVBQVA7QUFJQSxDQU5EOztBQVFBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsV0FBWTtBQUNuQyxRQUFPO0FBQ0xDLFdBQVMsK0JBQW1CQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQjZELGNBQWxCLEVBQWtDN0UsZ0JBQWxDLENBQW5CLEVBQXdFaUIsUUFBeEU7QUFESixFQUFQO0FBR0EsQ0FKRDs7a0JBTWUseUJBQVFQLFlBQVIsRUFBc0JHLGVBQXRCLEVBQXVDaUUsT0FBdkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZmOzs7O0FBR0E7O0FBR0E7O0lBQVlwRCxjOztBQUdaOztBQUlBOzs7Ozs7Ozs7Ozs7K2VBZEE7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUlBOzs7SUFHTXlELGU7OztBQUNMLDBCQUFZakYsS0FBWixFQUFrQjtBQUFBOztBQUFBLDJIQUNYQSxLQURXO0FBRWpCOzs7O3NDQUVtQjtBQUNuQixRQUFLa0YsbUJBQUw7QUFDQSxRQUFLcEIsWUFBTDtBQUNBckUsV0FBUUMsR0FBUixDQUFZLDZCQUFaLEVBQTBDLEtBQUtNLEtBQS9DO0FBQ0E7Ozt5Q0FFc0I7QUFDdEJtRixpQkFBYyxLQUFLbkYsS0FBTCxDQUFXb0YsZUFBWCxDQUEyQkMsS0FBekM7QUFDQSxRQUFLQyxvQkFBTDtBQUNBOztBQUVEOzs7O3dDQUNzQjtBQUNyQixPQUFJQyxxQkFBcUIsQ0FDekIsRUFBRUMsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUR5QixFQUV6QixFQUFFRCxhQUFhLCtCQUFmLEVBQWdEQyxtQkFBbUIscUJBQW5FLEVBRnlCLEVBR3pCLEVBQUVELGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFIeUIsRUFJekIsRUFBRUQsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUp5QixDQUF6QjtBQU1BLE9BQUlDLFVBQVUsQ0FBZDtBQUNBLE9BQUlMLFFBQVFNLFlBQWEsWUFBTTtBQUM5QiwwQkFBRUosbUJBQW1CRyxPQUFuQixFQUE0QkYsV0FBOUIsRUFBMkNwRixXQUEzQyxDQUF1RCw4Q0FBdkQ7QUFDQSwwQkFBRW1GLG1CQUFtQkcsT0FBbkIsRUFBNEJGLFdBQTlCLEVBQTJDcEYsV0FBM0MsQ0FBdUQsb0NBQXZEO0FBQ0FzRjtBQUNBLFFBQUdBLFdBQVdILG1CQUFtQkssTUFBakMsRUFBeUM7QUFDeENULG1CQUFjRSxLQUFkO0FBQ0E7QUFDRCxJQVBXLEVBT1QsR0FQUyxDQUFaO0FBUUEsUUFBS3JGLEtBQUwsQ0FBVzZGLFdBQVgsQ0FBdUJSLEtBQXZCO0FBQ0E7Ozt5Q0FFc0I7QUFDdEIsT0FBSUUscUJBQXFCLENBQ3pCLEVBQUVDLGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFEeUIsRUFFekIsRUFBRUQsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUZ5QixFQUd6QixFQUFFRCxhQUFhLCtCQUFmLEVBQWdEQyxtQkFBbUIscUJBQW5FLEVBSHlCLEVBSXpCLEVBQUVELGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFKeUIsQ0FBekI7QUFNQUYsc0JBQW1CckIsT0FBbkIsQ0FBNEIsZ0JBQXFCO0FBQUEsUUFBbEJzQixXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ2hELFFBQUcsc0JBQUVBLFdBQUYsRUFBZWxELFFBQWYsQ0FBd0IsOENBQXhCLENBQUgsRUFBNEU7QUFDM0UsMkJBQUVrRCxXQUFGLEVBQWVwRixXQUFmLENBQTJCLG9DQUEzQjtBQUNBLDJCQUFFb0YsV0FBRixFQUFlcEYsV0FBZixDQUEyQiw4Q0FBM0I7QUFDQTtBQUNELElBTEQ7QUFNQTs7QUFHRDs7OztpQ0FDZTtBQUFBOztBQUNkLE9BQUltRixxQkFBcUIsQ0FDekIsRUFBRUMsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUEwRkssYUFBYSxRQUF2RyxFQUR5QixFQUV6QixFQUFFTixhQUFhLCtCQUFmLEVBQWdEQyxtQkFBbUIscUJBQW5FLEVBQTBGSyxhQUFhLFFBQXZHLEVBRnlCLEVBR3pCLEVBQUVOLGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFBMEZLLGFBQWEsV0FBdkcsRUFIeUIsRUFJekIsRUFBRU4sYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUEwRkssYUFBYSxVQUF2RyxFQUp5QixDQUF6QjtBQU1BUCxzQkFBbUJyQixPQUFuQixDQUE0QixpQkFBcUQ7QUFBQSxRQUFsRHNCLFdBQWtELFNBQWxEQSxXQUFrRDtBQUFBLFFBQXJDQyxpQkFBcUMsU0FBckNBLGlCQUFxQztBQUFBLFFBQWxCSyxXQUFrQixTQUFsQkEsV0FBa0I7O0FBQ2hGLDBCQUFFTixXQUFGLEVBQWVsQixLQUFmLENBQXFCO0FBQUEsWUFBTSxPQUFLeUIsT0FBTCxDQUFhTixpQkFBYixDQUFOO0FBQUEsS0FBckIsRUFBNEQ7QUFBQSxZQUFNLE9BQUtPLFFBQUwsQ0FBY1AsaUJBQWQsQ0FBTjtBQUFBLEtBQTVEO0FBQ0EsMEJBQUVELFdBQUYsRUFBZVMsS0FBZixDQUFxQjtBQUFBLFlBQU0sT0FBS0MsV0FBTCxDQUFpQkosV0FBakIsQ0FBTjtBQUFBLEtBQXJCO0FBQ0EsSUFIRDtBQUlBOzs7OEJBR1doQixPLEVBQVM7QUFBQTs7QUFDcEJyRixXQUFRQyxHQUFSLENBQVksNEJBQTJCb0YsT0FBdkM7QUFDQSxRQUFLOUUsS0FBTCxDQUFXZ0YsYUFBWDtBQUNBLFFBQUtoRixLQUFMLENBQVcrRSxjQUFYLENBQTBCRCxPQUExQjtBQUNBbkQsY0FBWSxZQUFNO0FBQ2pCLFdBQUt3RSxXQUFMO0FBQ0E7QUFDQSxJQUhELEVBR0csRUFISDtBQUlBOzs7Z0NBRWE7QUFDYjFHLFdBQVFDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLE9BQUcsc0JBQUUsT0FBRixFQUFXNEMsUUFBWCxDQUFvQixNQUFwQixDQUFILEVBQStCO0FBQzlCLDBCQUFFLE9BQUYsRUFBV2xDLFdBQVgsQ0FBdUIsZUFBdkI7QUFDQSwwQkFBRSxPQUFGLEVBQVdBLFdBQVgsQ0FBdUIsTUFBdkI7QUFDQSwwQkFBRSw2QkFBRixFQUFpQ0EsV0FBakMsQ0FBNkMsa0NBQTdDO0FBQ0EsMEJBQUUsNkJBQUYsRUFBaUNBLFdBQWpDLENBQTZDLDRCQUE3QztBQUNBLDBCQUFFLGtCQUFGLEVBQXNCQSxXQUF0QixDQUFrQyxpQkFBbEM7QUFDQSwwQkFBRSxrQkFBRixFQUFzQkEsV0FBdEIsQ0FBa0Msd0JBQWxDO0FBQ0E7QUFDRHVCLGNBQVksWUFBTTtBQUNqQiwwQkFBRSxXQUFGLEVBQWV5RSxPQUFmLENBQXVCO0FBQ3RCQyxnQkFBVyxzQkFBRSxPQUFGLEVBQVdDLE1BQVgsR0FBb0JDO0FBRFQsS0FBdkI7QUFHQSxJQUpELEVBSUUsSUFKRjtBQUtBOztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzBCQUdROUosRSxFQUFJO0FBQ1gseUJBQUVBLEVBQUYsRUFBTTJELFdBQU4sQ0FBa0IsaUNBQWxCO0FBQ0EseUJBQUUzRCxFQUFGLEVBQU0yRCxXQUFOLENBQWtCLG9DQUFsQjtBQUNBOzs7MkJBR1EzRCxFLEVBQUk7QUFDWix5QkFBRUEsRUFBRixFQUFNMkQsV0FBTixDQUFrQixvQ0FBbEI7QUFDQSx5QkFBRTNELEVBQUYsRUFBTTJELFdBQU4sQ0FBa0IsaUNBQWxCO0FBQ0E7OzsyQkFHTztBQUNQLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSw0QkFBZixFQUE0QyxJQUFHLDRCQUEvQztBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsb0NBQWYsRUFBb0QsSUFBRyw4QkFBdkQsRUFBc0YsT0FBTSx5QkFBNUY7QUFDSSw0Q0FBSyxXQUFVLDBCQUFmLEVBQTBDLElBQUcsb0JBQTdDLEdBREo7QUFHSTtBQUFBO0FBQUEsUUFBRyxXQUFVLHVCQUFiO0FBQUE7QUFBQTtBQUhKLEtBREQ7QUFNSTtBQUFBO0FBQUEsT0FBSyxXQUFVLG9DQUFmLEVBQW9ELElBQUcsOEJBQXZELEVBQXNGLE9BQU0seUJBQTVGO0FBQ0MsNENBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLG9CQUE3QyxHQUREO0FBR0M7QUFBQTtBQUFBLFFBQUcsV0FBVSx1QkFBYjtBQUFBO0FBQUE7QUFIRCxLQU5KO0FBV0k7QUFBQTtBQUFBLE9BQUssV0FBVSxvQ0FBZixFQUFvRCxJQUFHLDhCQUF2RCxFQUFzRixPQUFNLDRCQUE1RjtBQUNDLDRDQUFLLFdBQVUsMEJBQWYsRUFBMEMsSUFBRyxvQkFBN0MsR0FERDtBQUdDO0FBQUE7QUFBQSxRQUFHLFdBQVUsdUJBQWI7QUFBQTtBQUFBO0FBSEQsS0FYSjtBQWdCSTtBQUFBO0FBQUEsT0FBSyxXQUFVLG9DQUFmLEVBQW9ELElBQUcsOEJBQXZELEVBQXNGLE9BQU0sMkJBQTVGO0FBQ0MsNENBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLG9CQUE3QyxHQUREO0FBR0M7QUFBQTtBQUFBLFFBQUcsV0FBVSx1QkFBYjtBQUFBO0FBQUE7QUFIRDtBQWhCSixJQUREO0FBd0JBOzs7O0VBL0k0QkcsZ0I7O0FBa0o5QixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLFFBQU87QUFDTjJFLG1CQUFpQjNFLE1BQU0yRTtBQURqQixFQUFQO0FBR0EsQ0FKRDs7QUFNQSxJQUFNekUsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDSSxRQUFELEVBQWM7QUFDckMsUUFBTywrQkFBbUJTLGNBQW5CLEVBQW1DVCxRQUFuQyxDQUFQO0FBQ0EsQ0FGRDs7a0JBSWUseUJBQVFQLFlBQVIsRUFBc0JHLGVBQXRCLEVBQXVDc0UsZUFBdkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS2Y7Ozs7QUFDQTs7QUFHQTs7QUFHQTs7QUFHQTs7SUFBWXpELGM7Ozs7Ozs7Ozs7K2VBWFo7OztBQUlBOzs7QUFHQTs7O0FBR0E7OztJQUlNZ0YsTTs7O0FBQ0wsaUJBQVl4RyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFFBQUtTLEtBQUwsR0FBYTtBQUNaZ0csZUFBWTtBQURBLEdBQWI7QUFHQSxRQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUIzRCxJQUFyQixPQUF2QjtBQUNBLFFBQUs0RCxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQjVELElBQXRCLE9BQXhCO0FBTmlCO0FBT2pCOzs7O3NDQUVtQjtBQUNuQnRELFdBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxLQUFLTSxLQUF0QztBQUVBOzs7cUNBRWtCO0FBQ2xCLE9BQUcsS0FBS0EsS0FBTCxDQUFXNEcsTUFBWCxDQUFrQkgsVUFBbEIsS0FBaUMsSUFBcEMsRUFBeUM7QUFDeEMsU0FBS0ksbUJBQUw7QUFDQSxTQUFLN0csS0FBTCxDQUFXOEcsb0JBQVgsQ0FBZ0MsS0FBaEM7QUFDQTtBQUNEOzs7b0NBRWlCO0FBQ2pCckgsV0FBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0EsT0FBRyxLQUFLTSxLQUFMLENBQVc0RyxNQUFYLENBQWtCSCxVQUFsQixLQUFpQyxJQUFwQyxFQUF5QztBQUN4QyxTQUFLSSxtQkFBTDtBQUNBLFNBQUs3RyxLQUFMLENBQVc4RyxvQkFBWCxDQUFnQyxLQUFoQztBQUNBLElBSEQsTUFHTyxJQUFHLEtBQUs5RyxLQUFMLENBQVc0RyxNQUFYLENBQWtCSCxVQUFsQixLQUFpQyxLQUFwQyxFQUEwQztBQUNoRCxTQUFLTSxrQkFBTDtBQUNBLFNBQUsvRyxLQUFMLENBQVc4RyxvQkFBWCxDQUFnQyxJQUFoQztBQUNBO0FBQ0Q7Ozt1Q0FFb0I7QUFDcEIzRyxLQUFFLHFCQUFGLEVBQXlCQyxXQUF6QixDQUFxQyw4QkFBckM7QUFDQUQsS0FBRSxxQkFBRixFQUF5QkMsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ0E7Ozt3Q0FFcUI7QUFDckJELEtBQUUscUJBQUYsRUFBeUJDLFdBQXpCLENBQXFDLG9CQUFyQztBQUNBRCxLQUFFLHFCQUFGLEVBQXlCQyxXQUF6QixDQUFxQyw4QkFBckM7QUFDQTs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBUSxXQUFVLFFBQWxCLEVBQTJCLGNBQWM7QUFBQSxhQUFLLE9BQUt1RyxnQkFBTCxFQUFMO0FBQUEsTUFBekM7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLHlCQUFmO0FBQ0M7QUFBQyw2QkFBRDtBQUFBLFFBQVMsV0FBVSxvQkFBbkIsRUFBd0MsSUFBRyxvQkFBM0MsRUFBZ0UsV0FBaEUsRUFBc0UsSUFBRyxHQUF6RSxFQUE2RSxPQUFNLHdCQUFuRjtBQUNDLDZDQUFLLFdBQVUsb0JBQWYsRUFBb0MsS0FBSzNJLG1CQUFPQSxDQUFDLHdFQUFSLENBQXpDLEVBQXVGLEtBQUksNkJBQTNGLEdBREQ7QUFFQztBQUFBO0FBQUEsU0FBRyxXQUFVLG9CQUFiO0FBQUE7QUFBQTtBQUZELE1BREQ7QUFLQywwQ0FBRyxXQUFVLHNDQUFiLEVBQW9ELFNBQVM7QUFBQSxjQUFNLE9BQUswSSxlQUFMLEVBQU47QUFBQSxPQUE3RDtBQUxELEtBREQ7QUFRQztBQUFBO0FBQUEsT0FBSyxXQUFVLGFBQWY7QUFDQztBQUFBO0FBQUEsUUFBSSxXQUFVLG1CQUFkO0FBQ0UsV0FBSzFHLEtBQUwsQ0FBVzRHLE1BQVgsQ0FBa0JJLFFBQWxCLENBQTJCOUYsR0FBM0IsQ0FBK0I7QUFBQSxXQUFHK0YsR0FBSCxRQUFHQSxHQUFIO0FBQUEsV0FBUTlGLElBQVIsUUFBUUEsSUFBUjtBQUFBLFdBQWNwQyxJQUFkLFFBQWNBLElBQWQ7QUFBQSxjQUF5QjtBQUFBO0FBQUEsVUFBSSxLQUFLa0ksR0FBVDtBQUFBO0FBQWU7QUFBQyxnQ0FBRDtBQUFBLFdBQVMsV0FBVSxlQUFuQixFQUFtQyxXQUFuQyxFQUF5QyxJQUFJOUYsSUFBN0M7QUFBb0RwQztBQUFwRDtBQUFmLFFBQXpCO0FBQUEsT0FBL0I7QUFERjtBQURELEtBUkQ7QUFhQztBQUFBO0FBQUEsT0FBSyxJQUFHLG9CQUFSLEVBQTZCLFdBQVUsb0JBQXZDO0FBQ0M7QUFBQTtBQUFBLFFBQUksV0FBVSwwQkFBZDtBQUNFLFdBQUtpQixLQUFMLENBQVc0RyxNQUFYLENBQWtCSSxRQUFsQixDQUEyQjlGLEdBQTNCLENBQStCO0FBQUEsV0FBRytGLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFdBQVE5RixJQUFSLFNBQVFBLElBQVI7QUFBQSxXQUFjcEMsSUFBZCxTQUFjQSxJQUFkO0FBQUEsY0FBeUI7QUFBQTtBQUFBLFVBQUksaUJBQWVrSSxHQUFuQjtBQUFBO0FBQTJCO0FBQUMsZ0NBQUQ7QUFBQSxXQUFTLFdBQVUsc0JBQW5CLEVBQTBDLFdBQTFDLEVBQWdELElBQUk5RixJQUFwRDtBQUEyRHBDO0FBQTNEO0FBQTNCLFFBQXpCO0FBQUEsT0FBL0I7QUFERjtBQUREO0FBYkQsSUFERDtBQXFCQTs7OztFQWpFbUJ3QixnQjs7QUFvRXJCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQUUsUUFBTyxFQUFFb0csUUFBUW5HLE1BQU1tRyxNQUFoQixFQUFQO0FBQWlDLENBQWpFOztBQUVBLElBQU1qRyxrQkFBa0IsU0FBbEJBLGVBQWtCLFdBQVk7QUFBRSxRQUFPLCtCQUFtQmEsY0FBbkIsRUFBbUNULFFBQW5DLENBQVA7QUFBcUQsQ0FBM0Y7O2tCQUVlLHlCQUFRUCxZQUFSLEVBQXNCRyxlQUF0QixFQUF1QyxJQUF2QyxFQUE2QyxFQUFDdUcsTUFBSyxLQUFOLEVBQTdDLEVBQTJEVixNQUEzRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7Ozs7QUFDQTs7QUFHQTs7QUFHQTs7QUFHQTs7OztBQUdBOztJQUFZaEYsYzs7QUFHWjs7OztBQUdBOzs7Ozs7Ozs7Ozs7K2VBcEJBOzs7QUFJQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7SUFHTTJGLEk7OztBQUNMLGVBQVluSCxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFFBQUtvSCxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QnJFLElBQXZCLE9BQXpCO0FBRmlCO0FBR2pCOzs7O3NDQUVtQjtBQUFBOztBQUNuQixRQUFLc0UsU0FBTDtBQUNBLFFBQUtDLG9CQUFMO0FBQ0EsUUFBS0YsaUJBQUw7QUFDQUcsVUFBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0osaUJBQXZDO0FBQ0EsT0FBSUssb0JBQUosQ0FBZUMsU0FBU0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBZixFQUE4REMsTUFBOUQsQ0FBcUUsR0FBckU7QUFDQWpHLGNBQVksWUFBTTtBQUFFbEMsWUFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQStCLE9BQUtNLEtBQXBDO0FBQTZDLElBQWpFLEVBQW1FLElBQW5FO0FBQ0E7Ozt5Q0FFc0I7QUFDdEJQLFdBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLFFBQUttSSxxQkFBTDtBQUNBTixVQUFPTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLVixpQkFBMUM7QUFDQSxRQUFLVyxhQUFMO0FBQ0EseUJBQUUsZUFBRixFQUFtQnRGLEdBQW5CLENBQXVCLGtCQUF2QixFQUEyQyxFQUEzQztBQUNBOzs7eUNBRXNCO0FBQ3RCLHlCQUFFLE9BQUYsRUFBV3JDLFdBQVgsQ0FBdUIsWUFBdkI7QUFDQSx5QkFBRSxPQUFGLEVBQVdBLFdBQVgsQ0FBdUIsTUFBdkI7QUFDQTs7OzBDQUV1QjtBQUN2Qix5QkFBRSxPQUFGLEVBQVdBLFdBQVgsQ0FBdUIsTUFBdkI7QUFDQSx5QkFBRSxPQUFGLEVBQVdBLFdBQVgsQ0FBdUIsWUFBdkI7QUFDQTs7O3NDQUVtQjtBQUNuQixRQUFLSixLQUFMLENBQVdnSSxrQkFBWCxDQUE4QlQsT0FBT1UsVUFBckM7QUFDQTs7OzhCQUdXO0FBQUE7O0FBQUEsT0FDTEMsYUFESyxHQUNhLEtBQUtsSSxLQUFMLENBQVdtSSxJQUR4QixDQUNMRCxhQURLOztBQUVYLHlCQUFFLGVBQUYsRUFBbUJ6RixHQUFuQixDQUF1QixrQkFBdkIsV0FBa0QyRixxQkFBVyxDQUFYLEVBQWNDLE1BQWhFO0FBQ0E7QUFDQSx5QkFBRSxtQkFBRixFQUF1QmpJLFdBQXZCLENBQW1DLDRCQUFuQztBQUNBO0FBQ0E7QUFDQSx5QkFBRSxtQkFBRixFQUF1QkEsV0FBdkIsQ0FBbUMsa0JBQW5DO0FBQ0E7QUFDQSxPQUFJa0ksUUFBUSxDQUFaO0FBQ0E3SSxXQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQSxPQUFJMkYsUUFBUU0sWUFBYSxZQUFLO0FBQzdCLFFBQUcyQyxTQUFTRixxQkFBV3hDLE1BQXZCLEVBQThCO0FBQzdCMEMsYUFBUSxDQUFSO0FBQ0E7QUFDRCxRQUFJMUYsUUFBUXdGLHFCQUFXRSxLQUFYLEVBQWtCRCxNQUE5QjtBQUNBLFFBQUcsT0FBS3JJLEtBQUwsQ0FBV21JLElBQVgsQ0FBZ0JJLGNBQWhCLElBQWtDLEtBQXJDLEVBQTJDO0FBQzFDRDtBQUNBO0FBQ0EsMkJBQUUsbUJBQUYsRUFBdUJsSSxXQUF2QixDQUFtQyxrQkFBbkM7QUFDQTtBQUNBO0FBQ0EsMkJBQUUsbUJBQUYsRUFBdUJBLFdBQXZCLENBQW1DLDRCQUFuQztBQUNBO0FBQ0E7QUFDQXVCLGdCQUFXLFlBQU07QUFBRSw0QkFBRSxtQkFBRixFQUF1QnZCLFdBQXZCLENBQW1DLDRCQUFuQztBQUFtRSxNQUF0RixFQUF3RixDQUF4RjtBQUNBO0FBQ0E7QUFDQXVCLGdCQUFXLFlBQU07QUFBRSw0QkFBRSxtQkFBRixFQUF1QnZCLFdBQXZCLENBQW1DLGtCQUFuQztBQUF5RCxNQUE1RSxFQUE4RSxDQUE5RTtBQUNBO0FBQ0EsMkJBQUUsZUFBRixFQUFtQnFDLEdBQW5CLENBQXVCLGtCQUF2QixXQUFrREcsS0FBbEQ7QUFDQW5ELGFBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQyxPQUFLTSxLQUFMLENBQVdtSSxJQUFYLENBQWdCSSxjQUFsRDtBQUNBO0FBQ0Q7QUFDQSxXQUFLQyx5QkFBTDtBQUNBLElBeEJXLEVBd0JULElBeEJTLENBQVo7QUF5QkEsUUFBS3hJLEtBQUwsQ0FBVzZGLFdBQVgsQ0FBdUJSLEtBQXZCO0FBQ0E1RixXQUFRQyxHQUFSLENBQVksNkJBQTJCd0ksYUFBdkM7QUFDQTs7OzhDQUcyQjtBQUFBLHFCQUNXLEtBQUtsSSxLQUFMLENBQVdtSSxJQUR0QjtBQUFBLE9BQ3JCTSxXQURxQixlQUNyQkEsV0FEcUI7QUFBQSxPQUNSRixjQURRLGVBQ1JBLGNBRFE7O0FBRTNCLE9BQUdFLGNBQWMsR0FBakIsRUFBcUI7QUFDcEIsU0FBS3pJLEtBQUwsQ0FBVzBJLGdCQUFYLENBQTRCLElBQTVCO0FBQ0FqSixZQUFRQyxHQUFSLENBQVkseURBQVosRUFBdUUsS0FBS00sS0FBTCxDQUFXbUksSUFBbEY7QUFDQTtBQUNELE9BQUdNLGVBQWUsR0FBbEIsRUFBc0I7QUFDckIsU0FBS3pJLEtBQUwsQ0FBVzBJLGdCQUFYLENBQTRCLEtBQTVCO0FBQ0FqSixZQUFRQyxHQUFSLENBQVksMERBQVosRUFBd0UsS0FBS00sS0FBTCxDQUFXbUksSUFBbkY7QUFDQTtBQUNEO0FBQ0E7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7a0NBR2dCO0FBQ2YxSSxXQUFRQyxHQUFSLENBQVksNEJBQTBCLEtBQUtNLEtBQUwsQ0FBV21JLElBQVgsQ0FBZ0JELGFBQXREO0FBQ0EvQyxpQkFBYyxLQUFLbkYsS0FBTCxDQUFXbUksSUFBWCxDQUFnQkQsYUFBOUI7QUFDQSxRQUFLbEksS0FBTCxDQUFXMEksZ0JBQVgsQ0FBNEIsSUFBNUI7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVIsRUFBZSxXQUFVLE1BQXpCO0FBQ0MsMkNBQUssSUFBRyxrQkFBUixFQUEyQixXQUFVLGtCQUFyQyxHQUREO0FBRUM7QUFBQTtBQUFBLE9BQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUksSUFBRyxvQkFBUCxFQUE0QixXQUFVLG9CQUF0QztBQUFBO0FBQUEsTUFERDtBQUlDO0FBQUE7QUFBQSxRQUFJLElBQUcsMkJBQVAsRUFBbUMsV0FBVSxvQkFBN0M7QUFBQTtBQUFBO0FBSkQ7QUFGRCxJQUREO0FBYUE7Ozs7RUE5SGlCbkksZ0I7O0FBa0luQixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLFFBQU87QUFDTjBILFFBQU0xSCxNQUFNMEg7QUFETixFQUFQO0FBR0EsQ0FKRDs7QUFNQSxJQUFNUSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDNUgsUUFBRCxFQUFjO0FBQ3hDLFFBQU8sK0JBQW1CUyxjQUFuQixFQUFtQ1QsUUFBbkMsQ0FBUDtBQUNBLENBRkQ7O2tCQUllLHlCQUFRUCxZQUFSLEVBQXNCbUksa0JBQXRCLEVBQTBDeEIsSUFBMUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtmOzs7Ozs7QUFFQSxJQUFNeUIsU0FBUyxTQUFUQSxNQUFTLENBQUM1SSxLQUFELEVBQVc7QUFDekIsUUFDQztBQUFBO0FBQUEsSUFBSyxJQUFJQSxNQUFNNkksUUFBZixFQUF5QixXQUFVLG1CQUFuQztBQUNDLHlDQUFLLElBQUcsY0FBUixFQUF1QixXQUFVLGNBQWpDLEVBQWdELEtBQUs3SyxtQkFBT0EsQ0FBQyw0RUFBUixDQUFyRCxHQUREO0FBRUMseUNBQUssSUFBRyxjQUFSLEVBQXVCLFdBQVUsY0FBakMsRUFBZ0QsS0FBS0EsbUJBQU9BLENBQUMsNEVBQVIsQ0FBckQ7QUFGRCxFQUREO0FBTUEsQ0FQRDs7a0JBU2U0SyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0lBQVlwSCxjOzs7Ozs7Ozs7OytlQWZaOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFLQTs7O0lBR01zSCxTOzs7QUFDTCxvQkFBWTlJLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWkEsS0FEWTs7QUFFbEIsUUFBS3NELHlCQUFMLEdBQWlDLE1BQUtBLHlCQUFMLENBQStCUCxJQUEvQixPQUFqQztBQUNBLFFBQUtJLDZCQUFMLEdBQXFDLE1BQUtBLDZCQUFMLENBQW1DSixJQUFuQyxPQUFyQztBQUhrQjtBQUlsQjs7OztzQ0FHbUI7QUFBQTs7QUFDbkIsUUFBS2dHLG1CQUFMO0FBQ0EsUUFBSy9JLEtBQUwsQ0FBV2dGLGFBQVg7QUFDQSxRQUFLaEYsS0FBTCxDQUFXMEksZ0JBQVgsQ0FBNEIsS0FBNUI7QUFDQS9HLGNBQVksWUFBTTtBQUNqQixXQUFLcUgsYUFBTDtBQUNBLElBRkQsRUFFRSxFQUZGO0FBR0FySCxjQUFZLFlBQU07QUFDakIsV0FBS3NILGdCQUFMO0FBQ0EsSUFGRCxFQUVFLEdBRkY7O0FBSUF4SixXQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0MsS0FBS00sS0FBekM7QUFDQTs7O3VDQUdvQjtBQUNwQjtBQUNBOzs7eUNBR3NCO0FBQ3RCbUYsaUJBQWMsS0FBS25GLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQndILGFBQW5DO0FBQ0EsUUFBS2xJLEtBQUwsQ0FBV2tKLGNBQVgsQ0FBMEIsS0FBMUI7QUFDQSxPQUFHLENBQUMvSSxFQUFFLDBCQUFGLEVBQThCbUMsUUFBOUIsQ0FBdUMseUJBQXZDLENBQUosRUFBc0U7QUFDckVuQyxNQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyxnQ0FBMUM7QUFDQUQsTUFBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsMENBQTFDO0FBQ0FELE1BQUUsc0JBQUYsRUFBMEJDLFdBQTFCLENBQXNDLCtCQUF0QztBQUNBRCxNQUFFLHNCQUFGLEVBQTBCQyxXQUExQixDQUFzQyxxQkFBdEM7QUFDQTtBQUNEOzs7OEJBR1c7QUFBQTs7QUFBQSwwQkFDc0IsS0FBS0osS0FBTCxDQUFXVSxTQURqQztBQUFBLE9BQ0x5SSxjQURLLG9CQUNMQSxjQURLO0FBQUEsT0FDVzlJLE1BRFgsb0JBQ1dBLE1BRFg7O0FBRVgsUUFBS0wsS0FBTCxDQUFXb0osZUFBWCxDQUEyQkQsY0FBM0IsRUFBMkM5SSxPQUFPdUYsTUFBbEQ7QUFDQTtBQUNBakUsY0FBWSxZQUFNO0FBQUUsV0FBS3lCLGVBQUw7QUFBd0IsSUFBNUMsRUFBOEMsRUFBOUM7QUFDQTs7O2tDQUdlO0FBQUE7O0FBQUEsMkJBQ2tCLEtBQUtwRCxLQUFMLENBQVdVLFNBRDdCO0FBQUEsT0FDVHlJLGNBRFMscUJBQ1RBLGNBRFM7QUFBQSxPQUNPOUksTUFEUCxxQkFDT0EsTUFEUDs7QUFFZixRQUFLTCxLQUFMLENBQVdxSixlQUFYLENBQTJCRixjQUEzQixFQUEyQzlJLE9BQU91RixNQUFsRDtBQUNBO0FBQ0FqRSxjQUFZLFlBQU07QUFBRSxXQUFLeUIsZUFBTDtBQUF3QixJQUE1QyxFQUE4QyxFQUE5QztBQUNBOzs7b0NBR2lCO0FBQUEsMkJBQ2dCLEtBQUtwRCxLQUFMLENBQVdVLFNBRDNCO0FBQUEsT0FDWEwsTUFEVyxxQkFDWEEsTUFEVztBQUFBLE9BQ0g4SSxjQURHLHFCQUNIQSxjQURHOztBQUVqQjFKLFdBQVFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4QyxLQUFLTSxLQUFuRDtBQUNBLFFBQUtzSix1QkFBTDtBQUNBLFFBQUt0SixLQUFMLENBQVd1Six3QkFBWCxDQUFvQ2xKLE9BQU84SSxjQUFQLENBQXBDO0FBQ0E7OztrQ0FHZTtBQUFBOztBQUNmLFFBQUtuSixLQUFMLENBQVd3SixlQUFYLENBQTJCLEtBQUt4SixLQUFMLENBQVdLLE1BQXRDO0FBQ0FzQixjQUFZLFlBQU07QUFDakIsV0FBS3lCLGVBQUw7QUFDQSxJQUZELEVBRUcsRUFGSDtBQUdBOzs7cUNBR2tCO0FBQUE7O0FBQ2xCLE9BQUlxRyxpQkFBaUIsQ0FBckI7QUFDQSxPQUFJdkIsZ0JBQWdCdkMsWUFBYSxZQUFLO0FBQ3JDLFFBQUcsT0FBSzNGLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQkwsTUFBckIsS0FBZ0NxSixTQUFuQyxFQUE2QztBQUM1QyxZQUFLVixhQUFMO0FBQ0E7QUFDRFMsc0JBQWtCLEdBQWxCO0FBQ0EsUUFBRyxPQUFLekosS0FBTCxDQUFXVSxTQUFYLENBQXFCNkgsY0FBckIsSUFBdUMsS0FBdkMsSUFBZ0RrQixrQkFBa0IsSUFBckUsRUFBMEU7QUFDekUsWUFBS0UsU0FBTDtBQUNBRixzQkFBaUIsQ0FBakI7QUFDQTtBQUNELElBVG1CLEVBU2xCLEdBVGtCLENBQXBCO0FBVUEsUUFBS3pKLEtBQUwsQ0FBVzZGLFdBQVgsQ0FBdUJxQyxhQUF2QjtBQUNBOzs7dUNBR29CO0FBQ3BCLE9BQUlLLGlCQUFpQixLQUFLdkksS0FBTCxDQUFXVSxTQUFYLENBQXFCNkgsY0FBMUM7QUFDQSxPQUFHQSxrQkFBa0IsS0FBckIsRUFBMkI7QUFDMUIsU0FBS3ZJLEtBQUwsQ0FBVzBJLGdCQUFYLENBQTRCLElBQTVCO0FBQ0F2SSxNQUFFLGdDQUFGLEVBQW9Db0QsUUFBcEMsQ0FBNkMsdUNBQTdDO0FBQ0FwRCxNQUFFLGdDQUFGLEVBQW9DcUQsV0FBcEMsQ0FBZ0QsK0JBQWhEO0FBQ0FyRCxNQUFFLCtCQUFGLEVBQW1Db0QsUUFBbkMsQ0FBNEMsOEJBQTVDO0FBQ0FwRCxNQUFFLCtCQUFGLEVBQW1DcUQsV0FBbkMsQ0FBK0Msc0NBQS9DO0FBQ0EsSUFORCxNQU1LO0FBQ0osU0FBS3hELEtBQUwsQ0FBVzBJLGdCQUFYLENBQTRCLEtBQTVCO0FBQ0F2SSxNQUFFLGdDQUFGLEVBQW9Db0QsUUFBcEMsQ0FBNkMsK0JBQTdDO0FBQ0FwRCxNQUFFLGdDQUFGLEVBQW9DcUQsV0FBcEMsQ0FBZ0QsdUNBQWhEO0FBQ0FyRCxNQUFFLCtCQUFGLEVBQW1Db0QsUUFBbkMsQ0FBNEMsc0NBQTVDO0FBQ0FwRCxNQUFFLCtCQUFGLEVBQW1DcUQsV0FBbkMsQ0FBK0MsOEJBQS9DO0FBQ0E7QUFDRDs7O3dDQUdxQjtBQUNyQjtBQUNBLE9BQUlvRyxvQkFBb0JsQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDa0MsV0FBN0Q7QUFDQSxPQUFHRCxvQkFBb0IsR0FBdkIsRUFBMkI7QUFDMUJ6SixNQUFFLDBCQUFGLEVBQThCc0MsR0FBOUIsQ0FBa0MsU0FBbEMsRUFBNkMsTUFBN0M7QUFDQTtBQUNEOzs7eUNBR3NCO0FBQUE7O0FBQ3RCLE9BQUlxSCxrQkFBa0IsS0FBSzlKLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQkwsTUFBckIsQ0FBNEJ1RixNQUE1QixHQUFtQyxHQUFuQyxHQUF1QyxJQUE3RDtBQUNBLFFBQUs1RixLQUFMLENBQVdrSixjQUFYLENBQTBCLENBQUMsS0FBS2xKLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQnFKLGFBQWhEO0FBQ0FwSSxjQUFZLFlBQU07QUFDakJ4QixNQUFFLHVCQUFGLEVBQTJCc0MsR0FBM0IsQ0FBK0IsT0FBL0IsRUFBd0NxSCxlQUF4QztBQUNBLFdBQUszRyw2QkFBTDtBQUNBLElBSEQsRUFHRyxFQUhIO0FBSUFoRCxLQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQywwQ0FBMUM7QUFDQUQsS0FBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0FELEtBQUUsdUJBQUYsRUFBMkJDLFdBQTNCLENBQXVDLGdDQUF2QztBQUNBRCxLQUFFLHVCQUFGLEVBQTJCQyxXQUEzQixDQUF1QyxzQkFBdkM7QUFDQTs7OzJDQUd3QjtBQUN4QjtBQUNBLE9BQUdELEVBQUUsMEJBQUYsRUFBOEJtQyxRQUE5QixDQUF1Qyx5QkFBdkMsQ0FBSCxFQUFxRTtBQUNwRW5DLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLGdDQUExQztBQUNBRCxNQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQUQsTUFBRSwyQkFBRixFQUErQkMsV0FBL0IsQ0FBMkMsaUNBQTNDO0FBQ0FELE1BQUUsMkJBQUYsRUFBK0JDLFdBQS9CLENBQTJDLDBCQUEzQztBQUNBRCxNQUFFLDJCQUFGLEVBQStCQyxXQUEvQixDQUEyQyxpQ0FBM0M7QUFDQUQsTUFBRSwyQkFBRixFQUErQkMsV0FBL0IsQ0FBMkMsMEJBQTNDO0FBQ0M7QUFDRCxRQUFHLENBQUNELEVBQUUsMEJBQUYsRUFBOEJtQyxRQUE5QixDQUF1QywwQ0FBdkMsQ0FBSixFQUF1RjtBQUN0Rm5DLE9BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLGdDQUExQztBQUNBRCxPQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQTtBQUNEO0FBQ0Q7Ozs2Q0FHMEI7QUFDMUI7QUFDQSxPQUFHRCxFQUFFLDBCQUFGLEVBQThCbUMsUUFBOUIsQ0FBdUMsZ0NBQXZDLENBQUgsRUFBNEU7QUFDM0VuQyxNQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQUQsTUFBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0FELE1BQUUsMkJBQUYsRUFBK0JDLFdBQS9CLENBQTJDLDBCQUEzQztBQUNBRCxNQUFFLDJCQUFGLEVBQStCQyxXQUEvQixDQUEyQyxpQ0FBM0M7QUFDQUQsTUFBRSwyQkFBRixFQUErQkMsV0FBL0IsQ0FBMkMsMEJBQTNDO0FBQ0FELE1BQUUsMkJBQUYsRUFBK0JDLFdBQS9CLENBQTJDLGlDQUEzQztBQUNBO0FBQ0EsUUFBRyxDQUFDRCxFQUFFLDBCQUFGLEVBQThCbUMsUUFBOUIsQ0FBdUMsMENBQXZDLENBQUosRUFBdUY7QUFDdEZuQyxPQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQUQsT0FBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0E7QUFDRDtBQUNEOzs7NENBR3lCO0FBQ3pCLE9BQUkrSSxpQkFBaUIsS0FBS25KLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQnlJLGNBQTFDO0FBQ0FoSixLQUFFLDJCQUFGLEVBQStCc0MsR0FBL0IsQ0FBbUMsTUFBbkMsRUFBMkMwRyxpQkFBZSxHQUExRDtBQUNBOzs7NENBR3lCYSxPLEVBQVM7QUFDbEMsT0FBSUMsaUJBQWlCdkMsU0FBU0MsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0RrQyxXQUFoRCxHQUE2RG5DLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNrQyxXQUF2SDtBQUNBO0FBQ0EsT0FBSUssbUJBQW1CN0csU0FBU2xELEVBQUUsdUJBQUYsRUFBMkJzQyxHQUEzQixDQUErQixNQUEvQixDQUFULElBQW1EdUgsT0FBMUU7QUFDQSxPQUFHQyxrQkFBa0IsQ0FBbEIsSUFBdUJDLG1CQUFtQixDQUExQyxJQUErQ0QsaUJBQWlCQyxnQkFBakIsR0FBb0MsQ0FBdEYsRUFBd0Y7QUFDdkY7QUFDQTtBQUNELE9BQUlDLG9CQUFvQjlHLFNBQVNsRCxFQUFFLHVCQUFGLEVBQTJCc0MsR0FBM0IsQ0FBK0IsTUFBL0IsQ0FBVCxDQUF4QjtBQUNBLE9BQUkySCxvQkFBb0IvRyxTQUFTbEQsRUFBRSwwQkFBRixFQUE4QnNDLEdBQTlCLENBQWtDLE1BQWxDLENBQVQsQ0FBeEI7QUFDQSxPQUFJNEgscUJBQXFCaEgsU0FBU2xELEVBQUUsMkJBQUYsRUFBK0JzQyxHQUEvQixDQUFtQyxNQUFuQyxDQUFULENBQXpCO0FBQ0F0QyxLQUFFLHVCQUFGLEVBQTJCc0MsR0FBM0IsQ0FBK0IsTUFBL0IsRUFBdUMwSCxvQkFBb0JILE9BQTNEO0FBQ0E3SixLQUFFLDBCQUFGLEVBQThCc0MsR0FBOUIsQ0FBa0MsTUFBbEMsRUFBMEMySCxvQkFBcUJKLFVBQVEsQ0FBQyxDQUF4RTtBQUNBN0osS0FBRSwyQkFBRixFQUErQnNDLEdBQS9CLENBQW1DLE1BQW5DLEVBQTJDNEgscUJBQXNCTCxVQUFRLENBQUMsQ0FBMUU7QUFDQTs7O2dEQUc2Qk0sTyxFQUFTO0FBQ3RDN0ssV0FBUUMsR0FBUixDQUFZLGlCQUFlNEssT0FBM0I7QUFDQSxPQUFHQSxZQUFZWixTQUFmLEVBQXlCO0FBQ3hCWSxjQUFVLEtBQUt0SyxLQUFMLENBQVdVLFNBQVgsQ0FBcUJ5SSxjQUFyQixHQUFzQyxDQUFDLEdBQWpEO0FBQ0ExSixZQUFRQyxHQUFSLENBQVksb0NBQVosRUFBa0Q0SyxPQUFsRDtBQUNBO0FBQ0QsT0FBSUMsd0JBQXdCN0MsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ2tDLFdBQWpFO0FBQ0EsT0FBSVcscUJBQXFCRCx3QkFBc0IsQ0FBdEIsR0FBMkJBLHdCQUFzQixDQUF2QixHQUEwQixHQUE3RTtBQUNBLE9BQUlFLGlCQUFpQi9DLFNBQVNDLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEa0MsV0FBckU7QUFDQSxPQUFJYSxrQkFBa0JoRCxTQUFTQyxjQUFULENBQXdCLDBCQUF4QixFQUFvRGtDLFdBQTFFO0FBQ0EsT0FBSUksaUJBQWtCUSxpQkFBZSxDQUFDLENBQWpCLEdBQXVCRixxQkFBNUM7QUFDQSxPQUFJSSxrQkFBa0IsQ0FBdEI7QUFDQSxPQUFJQyxtQkFBbUJMLHlCQUF5Qkcsa0JBQWtCLENBQTNDLENBQXZCO0FBQ0EsT0FBSUcsa0JBQWtCLENBQXRCO0FBQ0EsT0FBSUMsYUFBYVIsVUFBVUUsa0JBQTNCO0FBQ0EsT0FBR1Asa0JBQWtCLENBQXJCLEVBQXVCO0FBQ3RCeEssWUFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0E7QUFDQTtBQUNELE9BQUdvTCxjQUFjLENBQWpCLEVBQW1CO0FBQ2xCckwsWUFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQVMsTUFBRSx1QkFBRixFQUEyQnNDLEdBQTNCLENBQStCLE1BQS9CLEVBQXVDb0ksZUFBdkM7QUFDQTFLLE1BQUUsMEJBQUYsRUFBOEJzQyxHQUE5QixDQUFrQyxNQUFsQyxFQUEwQ2tJLGVBQTFDO0FBQ0F4SyxNQUFFLDJCQUFGLEVBQStCc0MsR0FBL0IsQ0FBbUMsTUFBbkMsRUFBNENtSSxnQkFBNUM7QUFDQTtBQUNBO0FBQ0QsT0FBR0UsY0FBY2IsY0FBakIsRUFBZ0M7QUFDL0I5SixNQUFFLHVCQUFGLEVBQTJCc0MsR0FBM0IsQ0FBK0IsTUFBL0IsRUFBdUN3SCxjQUF2QztBQUNBOUosTUFBRSwwQkFBRixFQUE4QnNDLEdBQTlCLENBQWtDLE1BQWxDLEVBQTJDd0gsaUJBQWUsQ0FBQyxDQUFqQixHQUFzQlUsZUFBaEU7QUFDQXhLLE1BQUUsMkJBQUYsRUFBK0JzQyxHQUEvQixDQUFtQyxNQUFuQyxFQUE0Q3dILGlCQUFlLENBQUMsQ0FBakIsR0FBc0JXLGdCQUFqRTtBQUNBO0FBQ0E7QUFDRHpLLEtBQUUsdUJBQUYsRUFBMkJzQyxHQUEzQixDQUErQixNQUEvQixFQUF1Q3FJLFVBQXZDO0FBQ0EzSyxLQUFFLDBCQUFGLEVBQThCc0MsR0FBOUIsQ0FBa0MsTUFBbEMsRUFBMkNxSSxhQUFXLENBQUMsQ0FBYixHQUFrQkgsZUFBNUQ7QUFDQXhLLEtBQUUsMkJBQUYsRUFBK0JzQyxHQUEvQixDQUFtQyxNQUFuQyxFQUE0Q3FJLGFBQVcsQ0FBQyxDQUFiLEdBQWtCRixnQkFBN0Q7QUFDQTs7OzJCQUdPO0FBQUE7O0FBQUEsMkJBQzJDLEtBQUs1SyxLQUFMLENBQVdVLFNBRHREO0FBQUEsT0FDRHFLLGdCQURDLHFCQUNEQSxnQkFEQztBQUFBLE9BQ2lCaEIsYUFEakIscUJBQ2lCQSxhQURqQjtBQUFBLE9BQ2dDMUosTUFEaEMscUJBQ2dDQSxNQURoQzs7QUFFUCxVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsV0FBUjtBQUNDLGdCQUFVLFdBRFg7QUFFQyxtQkFBZTtBQUFBLGFBQU0sT0FBSzJLLHNCQUFMLEVBQU47QUFBQSxNQUZoQjtBQUdDLG1CQUFlO0FBQUEsYUFBTSxPQUFLQyx3QkFBTCxFQUFOO0FBQUE7QUFIaEI7QUFLRUYsdUJBQ0EsOEJBQUMsZUFBRCxJQUFPLFdBQVdBLGdCQUFsQjtBQUNDLGVBQVUsS0FBSy9LLEtBQUwsQ0FBV2tMO0FBRHRCLE1BREEsR0FLQSw4QkFBQyxnQkFBRCxPQVZGO0FBWUU3SyxhQUNBLDhCQUFDLG1CQUFELElBQVcsUUFBUUEsTUFBbkI7QUFDQyxzQkFBa0I7QUFBQSxhQUFNLE9BQUsrQyxlQUFMLEVBQU47QUFBQSxNQURuQjtBQUVDLGdDQUE0QixLQUFLRSx5QkFGbEM7QUFHQyxvQ0FBZ0MsS0FBS0g7QUFIdEMsTUFEQSxHQU9BLElBbkJGO0FBcUJDO0FBQUE7QUFBQSxPQUFNLElBQUcseUJBQVQ7QUFDQyxpQkFBVSx5QkFEWDtBQUVDLGFBQU0sb0JBRlA7QUFHQyxlQUFTO0FBQUEsY0FBTSxPQUFLZ0ksYUFBTCxFQUFOO0FBQUE7QUFIVjtBQUtDO0FBQUE7QUFBQSxRQUFHLFdBQVUsd0JBQWI7QUFBQTtBQUFBLE1BTEQ7QUFNQywwQ0FBRyxXQUFVLDRCQUFiO0FBTkQsS0FyQkQ7QUE2QkM7QUFBQTtBQUFBLE9BQU0sSUFBRywwQkFBVDtBQUNDLGlCQUFVLDBCQURYO0FBRUMsYUFBTSxnQkFGUDtBQUdDLGVBQVM7QUFBQSxjQUFNLE9BQUt4QixTQUFMLEVBQU47QUFBQTtBQUhWO0FBS0M7QUFBQTtBQUFBLFFBQUcsV0FBVSx3QkFBYjtBQUFBO0FBQUEsTUFMRDtBQU1DLDBDQUFHLFdBQVUsNkJBQWI7QUFORCxLQTdCRDtBQXFDQztBQUFBO0FBQUEsT0FBTSxJQUFHLHlCQUFUO0FBQ0MsaUJBQVUseUJBRFg7QUFFQyxhQUFNLG1DQUZQO0FBR0MsZUFBUztBQUFBLGNBQU0sT0FBS3lCLG9CQUFMLEVBQU47QUFBQTtBQUhWO0FBS0M7QUFBQTtBQUFBLFFBQUcsV0FBVSx3QkFBYjtBQUFBO0FBQUEsTUFMRDtBQU1DLDBDQUFHLFdBQVUsNEJBQWI7QUFORCxLQXJDRDtBQTZDQztBQUFBO0FBQUEsT0FBTSxJQUFHLDBCQUFUO0FBQ0MsaUJBQVUsMEJBRFg7QUFFQyxhQUFNLHVCQUZQO0FBR0MsZUFBUztBQUFBLGNBQU0sT0FBS0Msa0JBQUwsRUFBTjtBQUFBO0FBSFY7QUFLQztBQUFBO0FBQUEsUUFBRyxXQUFVLHdCQUFiO0FBQUE7QUFBQSxNQUxEO0FBTUM7QUFBQTtBQUFBLFFBQUssV0FBVSw2Q0FBZjtBQUNDLDJDQUFHLElBQUcsK0JBQU4sRUFBc0MsV0FBVSxtREFBaEQsR0FERDtBQUVDLDJDQUFHLElBQUcsOEJBQU4sRUFBcUMsV0FBVSx5REFBL0M7QUFGRDtBQU5EO0FBN0NELElBREQ7QUEyREE7Ozs7RUE5UnNCOUssZ0I7O0FBaVN4QixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUFFLFFBQU8sRUFBRUUsV0FBV0QsTUFBTUMsU0FBbkIsRUFBUDtBQUFzQyxDQUF0RTs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLFdBQVk7QUFBRSxRQUFPLCtCQUFtQmEsY0FBbkIsRUFBbUNULFFBQW5DLENBQVA7QUFBcUQsQ0FBM0Y7O2tCQUVlLHlCQUFRUCxZQUFSLEVBQXNCRyxlQUF0QixFQUF1Q21JLFNBQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JUZjs7OztBQUdBOzs7Ozs7Ozs7OytlQUpBOzs7QUFHQTs7O0lBSU13QyxLOzs7QUFDTCxnQkFBWXRMLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx1R0FDWEEsS0FEVztBQUVqQjs7OztzQ0FFbUI7QUFDbkIsUUFBS3VMLFNBQUw7QUFDQTs7O3lDQUVzQjtBQUN0QixRQUFLQyxZQUFMO0FBQ0E7Ozs4QkFFVztBQUFBLE9BQ0x6TSxJQURLLEdBQ0ksS0FBS2lCLEtBQUwsQ0FBV3lMLFNBRGYsQ0FDTDFNLElBREs7O0FBRVgsT0FBSW1NLFdBQVcsS0FBS2xMLEtBQUwsQ0FBV2tMLFFBQTFCO0FBQ0E7QUFDQS9LLFdBQU1wQixJQUFOLG9CQUEyQnFCLFdBQTNCLG9CQUF3RDhLLFFBQXhEO0FBQ0EvSyxXQUFNcEIsSUFBTixvQkFBMkJxQixXQUEzQjtBQUNBO0FBQ0FELFdBQU1wQixJQUFOLG9CQUEyQnFCLFdBQTNCLG9CQUF3RDhLLFFBQXhEO0FBQ0EvSyxXQUFNcEIsSUFBTixvQkFBMkJxQixXQUEzQjtBQUNBOzs7aUNBRWM7QUFBQSxPQUNSckIsSUFEUSxHQUNDLEtBQUtpQixLQUFMLENBQVd5TCxTQURaLENBQ1IxTSxJQURRO0FBQUEsT0FFUm1NLFFBRlEsR0FFSyxLQUFLbEwsS0FBTCxDQUFXa0wsUUFGaEIsQ0FFUkEsUUFGUTtBQUdkOztBQUNBL0ssV0FBTXBCLElBQU4sb0JBQTJCcUIsV0FBM0I7QUFDQUQsV0FBTXBCLElBQU4sb0JBQTJCcUIsV0FBM0Isb0JBQXdEOEssUUFBeEQ7QUFDQTtBQUNBL0ssV0FBTXBCLElBQU4sb0JBQTJCcUIsV0FBM0I7QUFDQUQsV0FBTXBCLElBQU4sb0JBQTJCcUIsV0FBM0Isb0JBQXdEOEssUUFBeEQ7QUFDQTs7O3NDQUVtQjtBQUNuQi9LLEtBQUUsZ0JBQUYsRUFBb0JzQyxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxNQUFuQztBQUNBOzs7dUNBRW9CO0FBQ3BCdEMsS0FBRSxnQkFBRixFQUFvQnNDLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLE9BQW5DO0FBQ0E7OzsyQkFFUTtBQUFBLDBCQUNjLEtBQUt6QyxLQUFMLENBQVd5TCxTQUR6QjtBQUFBLE9BQ0YxTSxJQURFLG9CQUNGQSxJQURFO0FBQUEsT0FDSTZELEtBREosb0JBQ0lBLEtBREo7O0FBRVIsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFPN0QsSUFBUCxrQkFBTCxFQUFpQyxXQUFVLGNBQTNDO0FBQ0MsMkNBQUssSUFBT0EsSUFBUCxrQkFBTCxFQUFpQyxXQUFVLGNBQTNDO0FBQ0MsVUFBSzZELEtBRE47QUFFQyxhQUFRLEtBQUtFLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUZUO0FBR0MsY0FBUyxLQUFLQyxrQkFBTCxDQUF3QkQsSUFBeEIsQ0FBNkIsSUFBN0I7QUFIVixNQUREO0FBT0Msa0NBQUMsZ0JBQUQsSUFBUSxVQUFVLGVBQWxCO0FBUEQsSUFERDtBQVdBOzs7O0VBeERrQnhDLGdCOztrQkE0REwrSyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRWY7Ozs7QUFHQTs7Ozs7Ozs7OzsrZUFKQTs7O0FBR0E7OztJQUdNSSxJOzs7QUFDTCxlQUFZMUwsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFHQUNaQSxLQURZO0FBRWxCOzs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQyxrQ0FBQyxnQkFBRDtBQUZELElBREQ7QUFNQTs7OztFQVppQk8sZ0I7O2tCQWVKbUwsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNyQkNDLFMsR0FBQUEsUztBQUFULFNBQVNBLFNBQVQsQ0FBbUI1TSxJQUFuQixFQUF5QjZELEtBQXpCLEVBQWdDZ0osYUFBaEMsRUFBK0M7QUFDckQsUUFBTztBQUNOcE4sUUFBTSxXQURBO0FBRU5vTiw4QkFGTTtBQUdOSCxhQUFXO0FBQ1YxTSxhQURVO0FBRVY2RDtBQUZVO0FBSEwsRUFBUDtBQVFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDVGVSLGEsR0FBQUEsYTtRQU9BSixjLEdBQUFBLGM7QUFQVCxTQUFTSSxhQUFULENBQXVCaEQsT0FBdkIsRUFBZ0M7QUFDdEMsUUFBTztBQUNOWixRQUFNLGVBREE7QUFFTlk7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzRDLGNBQVQsQ0FBd0JyQyxRQUF4QixFQUFrQztBQUN4QyxRQUFPO0FBQ05uQixRQUFNLGdCQURBO0FBRU5tQjtBQUZNLEVBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztRQ1pla0csVyxHQUFBQSxXO1FBT0FnRyxXLEdBQUFBLFc7QUFQVCxTQUFTaEcsV0FBVCxDQUFxQlIsS0FBckIsRUFBNEI7QUFDbEMsUUFBTztBQUNON0csUUFBTSxhQURBO0FBRU42RztBQUZNLEVBQVA7QUFJQTs7QUFFTSxTQUFTd0csV0FBVCxHQUF1QjtBQUM3QixRQUFPO0FBQ05yTixRQUFNLGFBREE7QUFFTjZHLFNBQU87QUFGRCxFQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNaZXNHLFMsR0FBQUEsUztRQVdBNUcsYyxHQUFBQSxjO0FBWFQsU0FBUzRHLFNBQVQsQ0FBbUI1TSxJQUFuQixFQUF5QjZELEtBQXpCLEVBQWdDZ0osYUFBaEMsRUFBK0M7QUFDckQsUUFBTztBQUNOcE4sUUFBTSxXQURBO0FBRU5vTiw4QkFGTTtBQUdOSCxhQUFXO0FBQ1YxTSxhQURVO0FBRVY2RDtBQUZVO0FBSEwsRUFBUDtBQVFBOztBQUVNLFNBQVNtQyxjQUFULENBQXdCRCxPQUF4QixFQUFpQztBQUN2QyxRQUFPO0FBQ050RyxRQUFNLGdCQURBO0FBRU5zRztBQUZNLEVBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztRQ2hCZWdDLG9CLEdBQUFBLG9CO0FBQVQsU0FBU0Esb0JBQVQsQ0FBOEJMLFVBQTlCLEVBQTBDO0FBQ2hELFFBQU87QUFDTmpJLFFBQU0sc0JBREE7QUFFTmlJO0FBRk0sRUFBUDtBQUlBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDTGVaLFcsR0FBQUEsVztRQU9BbUMsa0IsR0FBQUEsa0I7UUFPQVUsZ0IsR0FBQUEsZ0I7QUFkVCxTQUFTN0MsV0FBVCxDQUFxQnFDLGFBQXJCLEVBQW9DO0FBQzFDLFFBQU87QUFDTjFKLFFBQU0sYUFEQTtBQUVOMEo7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU0Ysa0JBQVQsQ0FBNEJTLFdBQTVCLEVBQXlDO0FBQy9DLFFBQU87QUFDTmpLLFFBQU0sb0JBREE7QUFFTmlLO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVNDLGdCQUFULENBQTBCSCxjQUExQixFQUEwQztBQUNoRCxRQUFPO0FBQ04vSixRQUFNLGtCQURBO0FBRU4rSjtBQUZNLEVBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztRQ25CZWdCLHdCLEdBQUFBLHdCO1FBT0FyRyxzQixHQUFBQSxzQjtRQU9Ba0csZSxHQUFBQSxlO1FBUUFDLGUsR0FBQUEsZTtRQVFBWCxnQixHQUFBQSxnQjtRQU9BN0MsVyxHQUFBQSxXO1FBT0EyRCxlLEdBQUFBLGU7UUFPQXhFLGEsR0FBQUEsYTtRQU1Ba0UsYyxHQUFBQSxjO1FBT0E0QyxpQyxHQUFBQSxpQztBQWhFVCxTQUFTdkMsd0JBQVQsQ0FBa0N3QixnQkFBbEMsRUFBb0Q7QUFDMUQsUUFBTztBQUNOdk0sUUFBTSwwQkFEQTtBQUVOdU07QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzdILHNCQUFULENBQWdDaUcsY0FBaEMsRUFBZ0Q7QUFDdEQsUUFBTztBQUNOM0ssUUFBTSx3QkFEQTtBQUVOMks7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU0MsZUFBVCxDQUF5QkQsY0FBekIsRUFBeUM0QyxhQUF6QyxFQUF3RDtBQUM5RCxRQUFPO0FBQ052TixRQUFNLGlCQURBO0FBRU4ySyxnQ0FGTTtBQUdONEM7QUFITSxFQUFQO0FBS0E7O0FBRU0sU0FBUzFDLGVBQVQsQ0FBeUJGLGNBQXpCLEVBQXlDNEMsYUFBekMsRUFBd0Q7QUFDOUQsUUFBTztBQUNOdk4sUUFBTSxpQkFEQTtBQUVOMkssZ0NBRk07QUFHTjRDO0FBSE0sRUFBUDtBQUtBOztBQUVNLFNBQVNyRCxnQkFBVCxDQUEwQkgsY0FBMUIsRUFBMEM7QUFDaEQsUUFBTztBQUNOL0osUUFBTSxrQkFEQTtBQUVOK0o7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzFDLFdBQVQsQ0FBcUJxQyxhQUFyQixFQUFvQztBQUMxQyxRQUFPO0FBQ04xSixRQUFNLGFBREE7QUFFTjBKO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVNzQixlQUFULENBQXlCbkosTUFBekIsRUFBaUM7QUFDdkMsUUFBTztBQUNON0IsUUFBTSxpQkFEQTtBQUVONkI7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUzJFLGFBQVQsR0FBeUI7QUFDL0IsUUFBTztBQUNOeEcsUUFBTTtBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTMEssY0FBVCxDQUF3QmEsYUFBeEIsRUFBdUM7QUFDN0MsUUFBTztBQUNOdkwsUUFBTSxnQkFEQTtBQUVOdUw7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUytCLGlDQUFULENBQTJDRSx5QkFBM0MsRUFBc0U7QUFDNUUsUUFBTztBQUNOeE4sUUFBTSxtQ0FEQTtBQUVOd047QUFGTSxFQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUQsSUFBTUMsZ0JBQWdCO0FBQ3JCQyxTQUFRLENBQ1A7QUFDQ25OLFFBQU0sVUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLDJHQUFSO0FBRlIsRUFETyxFQUtQO0FBQ0NlLFFBQU0sY0FEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHFIQUFSO0FBRlIsRUFMTyxFQVNQO0FBQ0NlLFFBQU0sWUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLGlIQUFSO0FBRlIsRUFUTyxFQWFQO0FBQ0NlLFFBQU0sZUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUFiTyxFQWlCUDtBQUNDZSxRQUFNLGNBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxxSEFBUjtBQUZSLEVBakJPLEVBcUJQO0FBQ0NlLFFBQU0sZUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUFyQk8sRUF5QlA7QUFDQ2UsUUFBTSxXQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsK0dBQVI7QUFGUixFQXpCTyxFQTZCUDtBQUNDZSxRQUFNLFdBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQywrR0FBUjtBQUZSLEVBN0JPLEVBaUNQO0FBQ0NlLFFBQU0sa0JBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyw2SEFBUjtBQUZSLEVBakNPLEVBcUNQO0FBQ0NlLFFBQU0sWUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLGlIQUFSO0FBRlIsRUFyQ08sRUF5Q1A7QUFDQ2UsUUFBTSxRQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMseUdBQVI7QUFGUixFQXpDTyxFQTZDUDtBQUNDZSxRQUFNLGdCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMseUhBQVI7QUFGUixFQTdDTyxFQWlEUDtBQUNDZSxRQUFNLGdCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMseUhBQVI7QUFGUixFQWpETyxFQXFEUDtBQUNDZSxRQUFNLGFBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxtSEFBUjtBQUZSLEVBckRPLEVBeURQO0FBQ0NlLFFBQU0sdUJBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyx1SUFBUjtBQUZSLEVBekRPLENBRGE7QUErRHJCbU8sU0FBUSxDQUNQO0FBQ0NwTixRQUFNLFdBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyw2R0FBUjtBQUZSLEVBRE8sRUFLUDtBQUNDZSxRQUFNLE9BRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyx1R0FBUjtBQUZSLEVBTE8sRUFTUDtBQUNDZSxRQUFNLGNBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxtSEFBUjtBQUZSLEVBVE8sRUFhUDtBQUNDZSxRQUFNLDhCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsbUpBQVI7QUFGUixFQWJPLEVBaUJQO0FBQ0NlLFFBQU0sZUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUFqQk8sRUFxQlA7QUFDQ2UsUUFBTSxjQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMscUhBQVI7QUFGUixFQXJCTyxFQXlCUDtBQUNDZSxRQUFNLHdCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMseUlBQVI7QUFGUixFQXpCTyxFQTZCUDtBQUNDZSxRQUFNLGtCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsNkhBQVI7QUFGUixFQTdCTyxFQWlDUDtBQUNDZSxRQUFNLG9CQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsaUlBQVI7QUFGUixFQWpDTyxFQXFDUDtBQUNDZSxRQUFNLGVBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBckNPLEVBeUNQO0FBQ0NlLFFBQU0sYUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLG1IQUFSO0FBRlIsRUF6Q08sRUE2Q1A7QUFDQ2UsUUFBTSxnQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHlIQUFSO0FBRlIsRUE3Q08sRUFpRFA7QUFDQ2UsUUFBTSxzQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHFJQUFSO0FBRlIsRUFqRE8sRUFxRFA7QUFDQ2UsUUFBTSxpQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLDJIQUFSO0FBRlIsRUFyRE8sQ0EvRGE7QUF5SHJCb08sWUFBVyxDQUNWO0FBQ0NyTixRQUFNLHNCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMseUlBQVI7QUFGUixFQURVLEVBS1Y7QUFDQ2UsUUFBTSxpQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLCtIQUFSO0FBRlIsRUFMVSxFQVNWO0FBQ0NlLFFBQU0sYUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUFUVSxFQWFWO0FBQ0NlLFFBQU0sbUJBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxtSUFBUjtBQUZSLEVBYlUsRUFpQlY7QUFDQ2UsUUFBTSxlQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsNkhBQVI7QUFGUixFQWpCVSxFQXFCVjtBQUNDZSxRQUFNLFdBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxxSEFBUjtBQUZSLEVBckJVLEVBeUJWO0FBQ0NlLFFBQU0sZ0JBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyw2SEFBUjtBQUZSLEVBekJVLEVBNkJWO0FBQ0NlLFFBQU0sYUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHlIQUFSO0FBRlIsRUE3QlUsRUFpQ1Y7QUFDQ2UsUUFBTSxrQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLG1JQUFSO0FBRlIsRUFqQ1UsRUFxQ1Y7QUFDQ2UsUUFBTSxnQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLCtIQUFSO0FBRlIsRUFyQ1UsRUF5Q1Y7QUFDQ2UsUUFBTSxZQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsdUhBQVI7QUFGUixFQXpDVSxFQTZDVjtBQUNDZSxRQUFNLGFBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyx5SEFBUjtBQUZSLEVBN0NVLEVBaURWO0FBQ0NlLFFBQU0sZ0JBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQywrSEFBUjtBQUZSLEVBakRVLEVBcURWO0FBQ0NlLFFBQU0sbUJBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxxSUFBUjtBQUZSLEVBckRVLEVBeURWO0FBQ0NlLFFBQU0sZUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLDZIQUFSO0FBRlIsRUF6RFUsRUE2RFY7QUFDQ2UsUUFBTSxjQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsMkhBQVI7QUFGUixFQTdEVSxFQWlFVjtBQUNDZSxRQUFNLGdCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsK0hBQVI7QUFGUixFQWpFVSxDQXpIVTtBQStMckJxTyxXQUFVLENBQ1Q7QUFDQ3ROLFFBQU0sZ0JBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQywySEFBUjtBQUZSLEVBRFMsRUFLVDtBQUNDZSxRQUFNLGtCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsK0hBQVI7QUFGUixFQUxTLEVBU1Q7QUFDQ2UsUUFBTSxpQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLDZIQUFSO0FBRlIsRUFUUyxFQWFUO0FBQ0NlLFFBQU0sZ0JBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQywySEFBUjtBQUZSLEVBYlMsRUFpQlQ7QUFDQ2UsUUFBTSxZQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsbUhBQVI7QUFGUixFQWpCUyxFQXFCVDtBQUNDZSxRQUFNLHFCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsdUlBQVI7QUFGUixFQXJCUyxFQXlCVDtBQUNDZSxRQUFNLGFBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBekJTLEVBNkJUO0FBQ0NlLFFBQU0sdUJBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQywySUFBUjtBQUZSLEVBN0JTLEVBaUNUO0FBQ0NlLFFBQU0sY0FEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHlIQUFSO0FBRlIsRUFqQ1MsRUFxQ1Q7QUFDQ2UsUUFBTSxjQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsdUhBQVI7QUFGUixFQXJDUyxFQXlDVDtBQUNDZSxRQUFNLGdDQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsNkpBQVI7QUFGUixFQXpDUyxFQTZDVDtBQUNDZSxRQUFNLHdCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsNklBQVI7QUFGUixFQTdDUyxFQWlEVDtBQUNDZSxRQUFNLGtCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsaUlBQVI7QUFGUixFQWpEUyxFQXFEVDtBQUNDZSxRQUFNLFVBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyxpSEFBUjtBQUZSLEVBckRTLEVBeURUO0FBQ0NlLFFBQU0sYUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUF6RFMsRUE2RFQ7QUFDQ2UsUUFBTSxzQkFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLHlJQUFSO0FBRlIsRUE3RFMsRUFpRVQ7QUFDQ2UsUUFBTSxPQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsMkdBQVI7QUFGUixFQWpFUztBQS9MVyxDQUF0Qjs7a0JBdVFlaU8sYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JRZixJQUFNN0QsYUFBYSxDQUNqQjtBQUNDQyxTQUFRckssbUJBQU9BLENBQUMsaUhBQVI7QUFEVCxDQURpQixFQUlqQjtBQUNDcUssU0FBUXJLLG1CQUFPQSxDQUFDLDJHQUFSO0FBRFQsQ0FKaUIsRUFPakI7QUFDQ3FLLFNBQVFySyxtQkFBT0EsQ0FBQywySEFBUjtBQURULENBUGlCLEVBVWpCO0FBQ0NxSyxTQUFRckssbUJBQU9BLENBQUMsaUhBQVI7QUFEVCxDQVZpQixFQWFqQjtBQUNDcUssU0FBUXJLLG1CQUFPQSxDQUFDLHFIQUFSO0FBRFQsQ0FiaUIsRUFnQmpCO0FBQ0NxSyxTQUFRckssbUJBQU9BLENBQUMsdUhBQVI7QUFEVCxDQWhCaUIsRUFtQmpCO0FBQ0NxSyxTQUFRckssbUJBQU9BLENBQUMscUhBQVI7QUFEVCxDQW5CaUIsRUFzQmpCO0FBQ0NxSyxTQUFRckssbUJBQU9BLENBQUMsdUdBQVI7QUFEVCxDQXRCaUIsQ0FBbkI7O2tCQTJCZW9LLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmYsSUFBTWtFLGVBQWU7QUFDcEJqTSxTQUFRLENBQ1A7QUFDQ3RCLFFBQU0sa0JBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyx5SUFBUjtBQUZSLEVBRE8sRUFLUDtBQUNDZSxRQUFNLGFBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQyw2SEFBUjtBQUZSLEVBTE8sRUFTUDtBQUNDZSxRQUFNLGFBRFA7QUFFQzZELFNBQU81RSxtQkFBT0EsQ0FBQywrSEFBUjtBQUZSLEVBVE8sRUFhUDtBQUNDZSxRQUFNLHFCQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsK0lBQVI7QUFGUixFQWJPLEVBaUJQO0FBQ0NlLFFBQU0sYUFEUDtBQUVDNkQsU0FBTzVFLG1CQUFPQSxDQUFDLCtIQUFSO0FBRlIsRUFqQk8sRUFxQlA7QUFDQ2UsUUFBTSxTQURQO0FBRUM2RCxTQUFPNUUsbUJBQU9BLENBQUMsdUhBQVI7QUFGUixFQXJCTyxDQURZO0FBMkJwQnlOLFlBQVc7QUFDVDFNLFFBQU0sa0JBREc7QUFFVDZELFNBQU81RSxtQkFBT0EsQ0FBQyx5SUFBUjtBQUZFO0FBM0JTLENBQXJCOztBQWlDQSxTQUFTdU8sY0FBVCxHQUFvRDtBQUFBLEtBQTVCOUwsS0FBNEIsdUVBQXRCNkwsWUFBc0I7QUFBQSxLQUFSSixNQUFROztBQUNuRCxTQUFPQSxPQUFPMU4sSUFBZDtBQUNDLE9BQUssV0FBTDtBQUNDLE9BQUlpTixZQUFZUyxPQUFPVCxTQUF2QjtBQUNBLE9BQUlwTCxzQ0FBY08sUUFBUWdMLGFBQXRCLEVBQUo7QUFDQXZMLFVBQU9tTSxJQUFQLENBQVlmLFNBQVo7QUFDQSx1QkFBWWhMLEtBQVosSUFBbUJKLGNBQW5CO0FBQ0Q7QUFDQyxVQUFPSSxLQUFQO0FBUEY7QUFTQTs7a0JBRWM4TCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZixJQUFNRCxlQUFlO0FBQ3BCbE4sVUFBUyxDQUFDLEVBQUQsRUFBSSxFQUFKLENBRFc7QUFFcEJPLFdBQVU7QUFGVSxDQUFyQjs7QUFLQSxTQUFTOE0sZ0JBQVQsR0FBc0Q7QUFBQSxLQUE1QmhNLEtBQTRCLHVFQUF0QjZMLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDckQsU0FBT0EsT0FBTzFOLElBQWQ7QUFDQyxPQUFLLGVBQUw7QUFDQyxPQUFJWSxVQUFVOE0sT0FBTzlNLE9BQXJCO0FBQ0EsdUJBQVlxQixLQUFaLElBQW1CckIsZ0JBQW5CO0FBQ0QsT0FBSyxnQkFBTDtBQUNDLE9BQUlPLFdBQVd1TSxPQUFPdk0sUUFBdEI7QUFDQSx1QkFBWWMsS0FBWixJQUFtQmQsa0JBQW5CO0FBQ0Q7QUFDQyxVQUFPYyxLQUFQO0FBUkY7QUFVQTs7a0JBRWNnTSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmYsSUFBTUgsZUFBZTtBQUNwQnRJLG1CQUFtQixDQUNoQjtBQUNDakYsUUFBTSxVQURQO0FBRUMwRixRQUFNLCtDQUZQO0FBR0NDLFFBQU0sd0JBSFA7QUFJQ1AsY0FBWSxTQUpiO0FBS0NDLGFBQVcsU0FMWjtBQU1DQyxhQUFXO0FBTlosRUFEZ0IsRUFTaEI7QUFDQ3RGLFFBQU0sUUFEUDtBQUVDMEYsUUFBTSw0Q0FGUDtBQUdDQyxRQUFNLGVBSFA7QUFJQ1AsY0FBWSxTQUpiO0FBS0NDLGFBQVcsU0FMWjtBQU1DQyxhQUFXO0FBTlosRUFUZ0IsRUFpQmhCO0FBQ0N0RixRQUFNLFdBRFA7QUFFQzBGLFFBQU0saURBRlA7QUFHQ0MsUUFBTSxrQkFIUDtBQUlDUCxjQUFZLFNBSmI7QUFLQ0MsYUFBVyxTQUxaO0FBTUNDLGFBQVc7QUFOWixFQWpCZ0IsRUF5QmhCO0FBQ0N0RixRQUFNLFVBRFA7QUFFQzBGLFFBQU0seUNBRlA7QUFHQ0MsUUFBTSxpQkFIUDtBQUlDUCxjQUFZLFNBSmI7QUFLQ0MsYUFBVyxTQUxaO0FBTUNDLGFBQVc7QUFOWixFQXpCZ0I7QUFEQyxDQUFyQjs7QUFxQ0EsU0FBU3FJLGVBQVQsR0FBcUQ7QUFBQSxLQUE1QmpNLEtBQTRCLHVFQUF0QjZMLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDcEQsU0FBT0EsT0FBTzFOLElBQWQ7QUFDQyxPQUFNLGtCQUFOO0FBQ0MsT0FBSW1PLFFBQVFULE9BQU9TLEtBQW5CO0FBQ0EsdUJBQVdsTSxLQUFYLElBQWtCa00sWUFBbEI7QUFDRDtBQUNDLFVBQU9sTSxLQUFQO0FBTEY7QUFPQTs7a0JBRWNpTSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZixJQUFNSixlQUFlLEVBQXJCOztBQUVBLFNBQVNNLHdCQUFULEdBQWdFO0FBQUEsS0FBOUJuTSxLQUE4Qix1RUFBdEI2TCxZQUFzQjtBQUFBLEtBQVJKLE1BQVE7O0FBQy9ELFNBQU9BLE9BQU8xTixJQUFkO0FBQ0MsT0FBSyxhQUFMO0FBQ0MsT0FBSTZHLFFBQVE2RyxPQUFPN0csS0FBbkI7QUFDQSx1QkFBWTVFLEtBQVosSUFBbUI0RSxZQUFuQjtBQUNELE9BQUssYUFBTDtBQUNDQSxXQUFRNkcsT0FBTzdHLEtBQWY7QUFDQSx1QkFBVzVFLEtBQVgsSUFBa0I0RSxZQUFsQjtBQUNEO0FBQ0MsVUFBTzVFLEtBQVA7QUFSRjtBQVVBOztrQkFFY21NLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7Ozs7OztBQUVBLElBQU1OLGVBQWUsRUFBckI7O0FBRUEsU0FBU0MsY0FBVCxHQUFvRDtBQUFBLEtBQTVCOUwsS0FBNEIsdUVBQXRCNkwsWUFBc0I7QUFBQSxLQUFSSixNQUFROztBQUNuRCxTQUFPQSxPQUFPMU4sSUFBZDtBQUNDLE9BQUssV0FBTDtBQUNDLE9BQUlpTixZQUFZUyxPQUFPVCxTQUF2QjtBQUNBLE9BQUlwTCxzQ0FBY08sUUFBUWdMLGFBQXRCLEVBQUo7QUFDQXZMLFVBQU9tTSxJQUFQLENBQVlmLFNBQVo7QUFDQSx1QkFBWWhMLEtBQVosSUFBbUJKLGNBQW5CO0FBQ0QsT0FBSyxnQkFBTDtBQUNDLE9BQUl5RSxVQUFVb0gsT0FBT3BILE9BQXJCO0FBQ0F6RSx5Q0FBYzRMLHdCQUFjbkgsT0FBZCxDQUFkO0FBQ0EsdUJBQVlyRSxLQUFaLElBQW1CSixjQUFuQjtBQUNEO0FBQ0MsVUFBT0ksS0FBUDtBQVhGO0FBYUE7O2tCQUVjOEwsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmYsSUFBTUQsZUFBZTtBQUNwQnRGLFdBQVUsQ0FDVDtBQUNDQyxPQUFLLGNBRE47QUFFQzlGLFFBQU0sR0FGUDtBQUdDcEMsUUFBTTtBQUhQLEVBRFMsRUFNVDtBQUNDa0ksT0FBSyxpQkFETjtBQUVDOUYsUUFBTSxVQUZQO0FBR0NwQyxRQUFNO0FBSFAsRUFOUyxFQVdUO0FBQ0NrSSxPQUFLLGVBRE47QUFFQzlGLFFBQU0sUUFGUDtBQUdDcEMsUUFBTTtBQUhQLEVBWFMsRUFnQlQ7QUFDQ2tJLE9BQUssaUJBRE47QUFFQzlGLFFBQU0sVUFGUDtBQUdDcEMsUUFBTTtBQUhQLEVBaEJTLEVBcUJUO0FBQ0NrSSxPQUFLLGNBRE47QUFFQzlGLFFBQU0sT0FGUDtBQUdDcEMsUUFBTTtBQUhQLEVBckJTLENBRFU7QUE0QnBCMEgsYUFBWTtBQTVCUSxDQUFyQjs7QUErQkEsU0FBU29HLGVBQVQsR0FBcUQ7QUFBQSxLQUE1QnBNLEtBQTRCLHVFQUF0QjZMLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDcEQsU0FBT0EsT0FBTzFOLElBQWQ7QUFDQyxPQUFLLHNCQUFMO0FBQ0MsT0FBSWlJLGFBQWF5RixPQUFPekYsVUFBeEI7QUFDQSx1QkFBWWhHLEtBQVosSUFBbUJnRyxzQkFBbkI7QUFDRDtBQUNDLFVBQU9oRyxLQUFQO0FBTEY7QUFPQTs7a0JBRWNvTSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZixJQUFNUCxlQUFlO0FBQ3BCL0QsaUJBQWdCO0FBREksQ0FBckI7O0FBSUEsU0FBU3VFLGFBQVQsR0FBcUQ7QUFBQSxLQUE5QnJNLEtBQThCLHVFQUF0QjZMLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDcEQsU0FBT0EsT0FBTzFOLElBQWQ7QUFDQyxPQUFLLGFBQUw7QUFDQyxPQUFJMEosZ0JBQWdCZ0UsT0FBT2hFLGFBQTNCO0FBQ0EsdUJBQVl6SCxLQUFaLElBQW1CeUgsNEJBQW5CO0FBQ0QsT0FBSyxvQkFBTDtBQUNDLE9BQUlPLGNBQWN5RCxPQUFPekQsV0FBekI7QUFDQSx1QkFBWWhJLEtBQVosSUFBbUJnSSx3QkFBbkI7QUFDRCxPQUFLLGtCQUFMO0FBQ0MsT0FBSUYsaUJBQWlCMkQsT0FBTzNELGNBQTVCO0FBQ0EsdUJBQVk5SCxLQUFaLElBQW1COEgsOEJBQW5CO0FBQ0Q7QUFDQyxVQUFPOUgsS0FBUDtBQVhGO0FBYUE7O2tCQUVjcU0sYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmYsSUFBTVIsZUFBZTtBQUNwQm5ELGlCQUFnQixDQURJO0FBRXBCWixpQkFBZ0IsS0FGSTtBQUdwQndCLGdCQUFlO0FBSEssQ0FBckI7O0FBTUEsU0FBU2dELGtCQUFULEdBQXdEO0FBQUEsS0FBNUJ0TSxLQUE0Qix1RUFBdEI2TCxZQUFzQjtBQUFBLEtBQVJKLE1BQVE7O0FBQ3ZELFNBQU9BLE9BQU8xTixJQUFkO0FBQ0MsT0FBSywwQkFBTDtBQUNDLE9BQUl1TSxtQkFBbUJtQixPQUFPbkIsZ0JBQTlCO0FBQ0EsdUJBQVl0SyxLQUFaLElBQW1Cc0ssa0NBQW5CO0FBQ0QsT0FBSyx3QkFBTDtBQUNDLE9BQUk1QixpQkFBaUIrQyxPQUFPL0MsY0FBNUI7QUFDQSx1QkFBWTFJLEtBQVosSUFBbUIwSSw4QkFBbkI7QUFDRCxPQUFLLGlCQUFMO0FBQ0NBLG9CQUFpQitDLE9BQU8vQyxjQUF4QjtBQUNBLE9BQUk0QyxnQkFBZ0JHLE9BQU9ILGFBQTNCO0FBQ0EsT0FBRzVDLGtCQUFrQjRDLGdCQUFnQixDQUFyQyxFQUF1QztBQUN0QzVDLHFCQUFpQixDQUFqQjtBQUNBLElBRkQsTUFFTztBQUNOQSxzQkFBa0IsQ0FBbEI7QUFDQTtBQUNELHVCQUFZMUksS0FBWixJQUFtQjBJLDhCQUFuQjtBQUNELE9BQUssaUJBQUw7QUFDQ0Esb0JBQWlCK0MsT0FBTy9DLGNBQXhCO0FBQ0E0QyxtQkFBZ0JHLE9BQU9ILGFBQXZCO0FBQ0EsT0FBRzVDLGtCQUFrQixDQUFyQixFQUF1QjtBQUN0QkEscUJBQWlCNEMsZ0JBQWdCLENBQWpDO0FBQ0EsSUFGRCxNQUVPO0FBQ041QyxzQkFBa0IsQ0FBbEI7QUFDQTtBQUNELHVCQUFZMUksS0FBWixJQUFtQjBJLDhCQUFuQjtBQUNELE9BQUssa0JBQUw7QUFDQyxPQUFJWixpQkFBaUIyRCxPQUFPM0QsY0FBNUI7QUFDQSx1QkFBWTlILEtBQVosSUFBbUI4SCw4QkFBbkI7QUFDRCxPQUFLLGFBQUw7QUFDQyxPQUFJTCxnQkFBZ0JnRSxPQUFPaEUsYUFBM0I7QUFDQSx1QkFBWXpILEtBQVosSUFBbUJ5SCw0QkFBbkI7QUFDRCxPQUFLLGlCQUFMO0FBQ0MsT0FBSTdILFNBQVM2TCxPQUFPN0wsTUFBcEI7QUFDQTBLLHNCQUFtQjFLLE9BQU8sQ0FBUCxDQUFuQjtBQUNBOEksb0JBQWlCLENBQWpCO0FBQ0EsdUJBQVkxSSxLQUFaLElBQW1CSixjQUFuQixFQUEyQjBLLGtDQUEzQixFQUE4QzVCLDhCQUE5QztBQUNELE9BQUssZUFBTDtBQUNDLE9BQUk2RCx5QkFBaUJ2TSxLQUFqQixDQUFKO0FBQ0EsVUFBT3VNLFVBQVUsa0JBQVYsQ0FBUDtBQUNBLFVBQU9BLFVBQVUsUUFBVixDQUFQO0FBQ0EsdUJBQVlBLFNBQVo7QUFDRCxPQUFLLGdCQUFMO0FBQ0MsT0FBSWpELGdCQUFnQm1DLE9BQU9uQyxhQUEzQjtBQUNBLHVCQUFZdEosS0FBWixJQUFtQnNKLDRCQUFuQjtBQUNELE9BQUssbUNBQUw7QUFDQyxPQUFJaUMsNEJBQTRCRSxPQUFPRix5QkFBdkM7QUFDQSx1QkFBWXZMLEtBQVosSUFBbUJ1TCxvREFBbkI7QUFDRDtBQUNDLFVBQU92TCxLQUFQO0FBaERGO0FBa0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztrQkFFY3NNLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTTlMLFNBQVMsQ0FDZDtBQUNDRSxPQUFNLEdBRFA7QUFFQ0MsUUFBTyxJQUZSO0FBR0NFLFlBQVc2RjtBQUhaLENBRGMsRUFNZDtBQUNDaEcsT0FBTSxhQURQO0FBRUNDLFFBQU8sSUFGUjtBQUdDRSxZQUFXNkY7QUFIWixDQU5jLEVBV2Q7QUFDQ2hHLE9BQU0sUUFEUDtBQUVDQyxRQUFPLEtBRlI7QUFHQ0UsWUFBV3ZCO0FBSFosQ0FYYyxFQWdCZDtBQUNDb0IsT0FBTSxVQURQO0FBRUNDLFFBQU8sSUFGUjtBQUdDRSxZQUFXRztBQUhaLENBaEJjLEVBcUJkO0FBQ0NOLE9BQU0sa0JBRFA7QUFFQ0MsUUFBTyxLQUZSO0FBR0NFLFlBQVdHO0FBSFosQ0FyQmMsRUEwQmQ7QUFDQ04sT0FBTSxVQURQO0FBRUNDLFFBQU8sS0FGUjtBQUdDRSxZQUFXc0Q7QUFIWixDQTFCYyxFQStCZDtBQUNDekQsT0FBTSxPQURQO0FBRUNDLFFBQU8sS0FGUjtBQUdDRSxZQUFXb0s7QUFIWixDQS9CYyxDQUFmLEMsQ0FSQTtrQkE4Q2V6SyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2Y7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0E7QUFDQSxJQUFNZ00sY0FBYyw0QkFBZ0I7QUFDbkMzTSxRQUFPaU0sd0JBRDRCO0FBRW5DbEssVUFBU29LLDBCQUYwQjtBQUduQzFJLFNBQVEySSx5QkFIMkI7QUFJbkM1SCxVQUFTb0ksMEJBSjBCO0FBS25DOUgsa0JBQWlCd0gsa0NBTGtCO0FBTW5DaEcsU0FBUWlHLHlCQU4yQjtBQU9uQzFFLE9BQU0yRSx1QkFQNkI7QUFRbkNwTSxZQUFXcU07QUFSd0IsQ0FBaEIsQ0FBcEI7O0FBV0EsSUFBTWpQLFFBQVEsd0JBQ2JtUCxXQURhO0FBRWI7QUFDQUUsS0FBYUEsSUFBSTVGLE9BQU82Riw0QkFBeEIsSUFBd0Q3RixPQUFPNkYsNEJBQVAsRUFIM0MsQ0FBZDs7a0JBTWV0UCxLOzs7Ozs7Ozs7OztBQzdCZix3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiOyIsImNvbnN0IGNsaWVudCA9IHtcclxuXHR1c2VyOiAnb3Jzb24xMDhAZ21haWwuY29tJyxcclxuXHRpZDogJzU1NzM0NjcxODY5MC1jaGQxZWYxY2UwdGpqbmgxN211cWQwMWRqZmk2b201by5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcblx0c2VjcmV0OiAnNmhTRmoxdWRCbHRNWGswZ0pRTmhOYTh3JyxcclxuXHRyZWZyZXNoVG9rZW46ICcxL3JuVlZaZzRpWTIyQUJDd2trdUpqVlk4TjBBaGRuanVLVHRUaGo3cFlROUlqTWJkYWFvSG9OTVpxYm5JNWlpejgnLFxyXG5cdGFjZXNzVG9rZW46ICd5YTI5Lkdsc0JCblRRXzVseWtHM3ZmakRWamRVMHFReTdDYjdvQjhlWjhfU2xOcDg2dW5Ba1JrS1pDc0ltSmZDandyem9CUmM3UEQwd0ctMFhyWlFES2tQY0dpdmNzQjRad1V0WVhDN3RtUWRmNkthMFdzcUFtWEI4akV1YTBqaWsnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckVtYWlsID0gXCJhc3RhdG9uMTA4QG91dGxvb2suY29tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCIvL2V4cHJlc3MgaW1wb3J0XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG4vL21pZGRsZXdhcmUgaW1wb3J0c1xyXG5pbXBvcnQgZXhwcmVzc1N0YXRpY0d6aXAgZnJvbSBcImV4cHJlc3Mtc3RhdGljLWd6aXBcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9zaGFyZWQvcm91dGVzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCc7XHJcblxyXG4vL2xvY2FsIGltcG9ydHNcclxuaW1wb3J0IGNsaWVudCwgeyB1c2VyRW1haWwgfSBmcm9tICcuLi8uLi9vYXV0aC9jbGllbnREYXRhJztcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZSgnLycsIGV4cHJlc3NTdGF0aWNHemlwKFwicHVibGljL1wiKSk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdGxldCBkZXN0ID0gcmVxLnVybCA9PSAnL2luZGV4Lmh0bWwnID8gJy8nIDogcmVxLnVybDtcclxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cclxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17ZGVzdH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdDxBcHAgLz4gXHJcblx0XHRcdDwvU3RhdGljUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpXHJcblxyXG5cdHJlcy5zZW5kKGBcclxuXHRcdDxodG1sIGxhbmc9XCJlbi11c1wiPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cclxuXHRcdFx0XHQ8dGl0bGU+Qm9rZWggQmVzdCBQaG90b2dyYXBoeSBJbmMuPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JHtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby5wbmcnKX0+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMi4wL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWhXVmpmbHdGeEw2c056bnRpaDI3YmZ4a3IyN1BtYmJLL2lTdkorYTQrMG93WHE3OXYrbHNGa1c1NGJPR2JpRFFcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxyXG5cdFx0XHRcdDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJhcHBcIj4ke21hcmt1cH08L2Rpdj5cclxuXHRcdFx0PC9ib2R5PlxyXG5cdFx0PC9odG1sPlxyXG5cdGApXHJcbn0pXHJcblxyXG5hcHAucG9zdCgnL2NvbnRhY3QnLCAocmVxLCByZXMpID0+IHtcclxuXHRsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcblx0XHRzZXJ2aWNlOiAnZ21haWwnLFxyXG5cdFx0aG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuXHRcdGF1dGg6IHtcclxuXHRcdFx0dHlwZTogJ09BdXRoMicsXHJcblx0XHRcdHVzZXI6IGNsaWVudC51c2VyLFxyXG5cdFx0XHRjbGllbnRJZDogY2xpZW50LmlkLFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IGNsaWVudC5zZWNyZXQsXHJcblx0XHRcdHJlZnJlc2hUb2tlbjogY2xpZW50LnJlZnJlc2hUb2tlbixcclxuXHRcdFx0YWNjZXNzVG9rZW46IGNsaWVudC5hY2Nlc3NUb2tlblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgbWFpbE9wdGlvbnMgPSB7XHJcblx0XHRmcm9tOiBgJHtyZXEuYm9keS5uYW1lfSA8JHtjbGllbnQudXNlcn0+YCxcclxuXHRcdHRvOiAnYXN0YXRvbjEwOEBvdXRsb29rLmNvbScsXHJcblx0XHRzdWJqZWN0OiAnQ29udGFjdCBmcm9tIEJva2VoIEJlc3QgUGhvdG8gd2Vic2l0ZScsXHJcblx0XHRodG1sOiAgYDwhRE9DVFlQRSA+XHJcblx0XHRcdFx0PGh0bWwgbGFuZz1cInVzLWVuXCI+XHJcblx0XHRcdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHRcdFx0PG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIj5cclxuXHRcdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aDsgaW5pdGlhbC1zY2FsZT0xLjA7IG1heGltdW0tc2NhbGU9MS4wOyB1c2VyLXNjYWxhYmxlPW5vO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGl0bGU+Q29vbCBFbWFpbCBicm88L3RpdGxlPlxyXG5cdFx0XHRcdFx0PC9oZWFkPlxyXG5cdFx0XHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkVtYWlsIEZyb20gJHtyZXEuYm9keS5uYW1lfSBhdCAke3JlcS5ib2R5LmVtYWlsfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHA+bWVzc3NhZ2UgZnJvbSAke3JlcS5ib2R5Lm5hbWV9IHJlYWRzOiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5tZXNzYWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm5hbWV9LCAke3JlcS5ib2R5Lm51bWJlcn0gJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9ib2R5PlxyXG5cdFx0XHRcdDwvaHRtbD5gXHJcblx0fVxyXG5cclxuXHR0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVyciwgaW5mbykgPT4ge1xyXG5cdFx0aWYoZXJyKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9mYWlsJyk7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFbWFpbCBzZW50Jyk7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3Qvc3VjY2VzcycpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICcrcG9ydCkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWJvdXRBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9hYm91dF9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUFib3V0TW9kaWZpZXJPbigpXHJcblx0XHQvLyB0aGlzLnByb3BzLmFjdGlvbnMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0Fib3V0IHByb3BzIGFyZScsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUFib3V0TW9kaWZpZXJPZmYoKVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9uKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tYWJvdXQnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFib3V0TW9kaWZpZXJPZmYoKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuYWJvdXQuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiYWJvdXRfX3BhZ2UtaGVhZGVyXCI+T3VyIFN0b3J5PC9oMT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2ltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImFib3V0XCJ9IHNsaWRlcz17c2xpZGVzfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkRhdmlkIEJva2VoIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgYSBzYWdlIG1vd2VyIGdvYXQsIHJhY2Nvb25zIHJodWJhcmIgb3V0aG91c2UgYSwgYXBwbGVzIGJlcnJpZXMgY29ybi4gS2lkbmV5IGJlYW5zIG9zdHJpY2ggdHJ1Y2tzLiBJbiB0aGUgc3RyYXcgcmFpbiBiYXJyZWxzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgd2VsbCBrbm93biBmb3IgcmFrZXMgcGxvd3MuIEpvaG4gRGVlcmUgYmVlcywgcGFyc2xleSBzd2VldCBjb3JuIGF0LCBwb3JreSBwaWcgc2hvdmVscy4gdmV0ZXJpbmFyaWFuIGJsdWUgYmVycmllcyBjYXR0bGUgamVsbHkgY2FubmluZy4gQmx1ZSBiZXJyaWVzIHBpZ2VvbnMgYnV6eiBhbmQgYmVhbiBwcmFpcmllIGRvZ3MgbmFpbHMgYXQgZXN0LiBRdWFjayBoYW1tZXJzIGVnZ3BsYW50IGlzIHV0dGVycyBuYWlscyBnYXJkZW4uIC4gQXVnZXJzIG9hdHMgaGVuIGNvd3BpZXMuIEFwcGxlcyBkdWNrLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+T3VyIFdvcmsgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBzdHJhdywgcXVhaWwgYSBvc3RyaWNoZXMgZG9ua2V5LCBoYXkgaG9vayBjdWN1bWJlcnMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBTaG92ZWxzIGF0IHJha2VzIHBsb3dzLiBRdWFjayBoYW1tZXJzIGVnZ3BsYW50IGlzIHV0dGVycyBuYWlscyBnYXJkZW4uIEhheWJpbmUgY2Fycm90cyBzb3liZWFucywgb3dscyBkdWNrIHJhaXNpbmcgb3IsIGNoZWVwIGluIHBsb3dzLiBPdXRob3VzZSBhdCBuYWlscyBtb3dlci4gRm9yYWdlIEhhcnZlc3RlciwgYmVhbiBhbmQgU2lsYWcuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYWJvdXRfX2xpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+QXdhcmRzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGxpPkN1bHRpdmF0b3IgYnJ1c3NlbCBzcHJvdXRzIGhhcnJvd3MsIGNlbGVyeSBkcmVhZCB3aXRoIGthbGUgYXVnZXJzIGhhcnJvd3MuIFZldGVyaW5hcmlhbiBhdCBTZWVkZXIgZWdncyB3aXRoIHdhdGVybWVsb24gb3N0cmljaGVzLjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Db28gd2l0aCByYWJiaXRzIGVjdC4gR3JhcGVzIG5lc3QgcGl0Y2ggZm9yayBhbiBwbG93cyBtYXBsZSBzeXJ1cCB5ZWFybGluZ3MsIHF1aWx0IHNxdWVhayBkb2dnaWVzLiBMYW1iIHBpZyByb29zdGVyIHNoZWVwLiBVdHRlcnMgYXJlIHdlYXRoZXJ2YW5lIGZvYWwgZXN0LiA8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+R29iYmxlIGZlZWQsIGplbGx5IHBlcHBlcnMgYXQgcGxvdyBiYXNpbCBzd2F0aGVyLCBjYXQgd2VhdGhlcnZhbmUgZ3JhaW4gdHJ1Y2tzLCBob290IHBvbnkgcm9iaW5zIHBlYWNvY2tzIGFuIGthbGUuIFJvb3N0ZXIgY2VsZXJ5IHBpbmVhcHBsZXMgZmVydGlsaXplci48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBhYm91dCwgcHJvamVjdG9yIH0gPSBzdGF0ZTtcclxuXHRyZXR1cm4geyBcclxuXHRcdGFib3V0LCBcclxuXHRcdHByb2plY3RvciBcclxuXHR9OyBcclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcbiBcdFx0YWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKE9iamVjdC5hc3NpZ24oe30sIGFib3V0QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQWJvdXQpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdFJvdXRlLFxyXG5cdFJlZGlyZWN0LFxyXG5cdFN3aXRjaFxyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG4vL1JvdXRlcyBpbXBvcnRcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJwYWdlLXdyYXBwZXJcIiBjbGFzc05hbWU9J3BhZ2Utd3JhcHBlcic+XHJcblx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdFx0PFN3aXRjaD5cclxuXHRcdFx0XHRcdFx0e3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQywgLi4ucmVzdCB9KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRwYXRoPXtwYXRofVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXhhY3Q9e2V4YWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEMgey4uLnByb3BzfSB7Li4ucmVzdH0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdCl9IFxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9Td2l0Y2g+XHJcblx0XHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvL1JlYWN0IENvbXBvbmVudHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50cyBpbXBvcnRzXHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvY29udGFjdF9hY3Rpb25zJztcclxuXHJcblxyXG5cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XHJcblx0XHR0aGlzLmNvbmZpcm1NZXNzYWdlQm94KCk7XHJcblx0XHQvL3RpbWVvdXQgbmVlZGVkIGZvciByZWRpcmVjdCB0byBzdHlsZSBtYWluIHByb3Blcmx5LlxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9uKCk7XHJcblx0XHR9LDUwKTtcclxuXHRcdHRoaXMudG9nZ2xlTG9hZGVyU3R5bGVzKCk7XHJcblx0XHR0aGlzLnJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0NvbnRhY3QgcHJvcHMgaXM6ICcsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy50b2dnbGVDb250YWN0TW9kaWZpZXJPZmYoKTtcclxuXHRcdHRoaXMudG9nZ2xlTG9hZGVyU3R5bGVzKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcInVubW91bnRpbmcgQ29udGFjdFwiKTtcclxuXHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXR1cyl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyB3b3JrZWQgcmVkaXJlY3RpbmcnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2sodHJ1ZSk7XHJcblx0XHRcdH0sMzUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnSGV5IHRoaXMgbWF5IG5vdCBoYXZlIHdvcmtlZCBzZXR0aW5nIHJlZGlyZWN0IHRvIGZhbHNlJyk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnJlZGlyZWN0X2NoZWNrKGZhbHNlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjb25maXJtTWVzc2FnZUJveCgpIHtcclxuXHRcdC8vY2hlY2tzIHN0YXR1cyBvZiBzZW50IG1lc3NhZ2VzIGFuZCBkaXNwbGF5cyBhIG5vdGljZSBhY2NvcmRpbmdseVxyXG5cdFx0Y29uc29sZS5sb2coXCJzdGFydCBjb25maXJtTWVzc2FnZUJveFwiKVxyXG5cdFx0bGV0IHN0YXR1cyA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXR1cztcclxuXHRcdGlmKHN0YXR1cyl7XHJcblx0XHRcdGlmKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKXtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnN0b3JlX21lc3NhZ2UoWydNZXNzYWdlIFNlbnQhIScsICdJXFwnbGwgZ2V0IGJhY2sgdG8geW91IHNvb24uJ10pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgc3VjY2VzcyBcIiwgdGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2UpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnN0b3JlX21lc3NhZ2UoWydNZXNzYWdlIEVycm9yISEnLCAnUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZyhcInByb3BzIGFmdGVyIGZhaWwgXCIsIHRoaXMucHJvcHMuY29udGFjdCk7IH0sIDEwMDApOyBcclxuXHRcdFx0fVxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXItLWRyb3AtaW4nKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lcicpO1xyXG5cdFx0XHR9LCA3NTApO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXItLWRyb3AtaW4nKTtcclxuXHRcdFx0fSwgNjAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKSB7XHJcblx0XHRpZigkKCcjbWFpbicpLmhhc0NsYXNzKCdtYWluJykgPT09IHRydWUpe1xyXG5cdFx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1jb250YWN0Jyk7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPZmYoKSB7XHJcblx0XHRpZigkKCcjbWFpbicpLmhhc0NsYXNzKCdtYWluLS1jb250YWN0JykgPT09IHRydWUpe1xyXG5cdFx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVMb2FkZXJTdHlsZXMoKSB7XHJcblx0XHQkKCcjbG9hZGVyX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybS1sb2FkZXJfX2NvbnRhaW5lcicpO1xyXG5cdFx0JCgnI2xvZ28tbG9hZGVyMScpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fbG9nbycpO1xyXG5cdFx0JCgnI2xvZ28tbG9hZGVyMicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fbG9nbycpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5jb250YWN0LnJlZGlyZWN0ID09PSB0cnVlKXtcclxuXHRcdFx0cmV0dXJuIDxSZWRpcmVjdCB0bz0nL2NvbnRhY3QnIC8+XHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluJyBpZD1cIm1haW5cIj5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzID9cclxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJjb25maXJtX19jb250YWluZXJcIiBjbGFzc05hbWU9J2NvbmZpcm1fX2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb25maXJtX19pbm5lcic+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2NvbmZpcm1fX2hlYWRlcic+e3RoaXMucHJvcHMuY29udGFjdC5tZXNzYWdlWzBdfTwvaDI+XHJcblx0XHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nY29uZmlybV9fdGV4dCc+e3RoaXMucHJvcHMuY29udGFjdC5tZXNzYWdlWzFdfTwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0bnVsbCAgXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1vdXR0ZXItY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2luZm8taW5uZXItY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2NvbnRhY3RfX2hlYWRlcic+R2V0IEluIFRvdWNoIFdpdGggVXM8L2gxPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3RleHQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHA+SWYgeW91J3JlIHRoaW5raW5nIGFib3V0IGhpcmluZyBhIHBob3RvZ3JhcGhlciBmb3IgYSBzaG9vdCwgd2Ugd291bGQgbG92ZSB0byBkaXNjdXNzIGl0IHdpdGggeW91LiAgV2UgY2FuIHByb3ZpZGUgcHJvZmVzc2lvbmFsIGluc2lnaHQgYW5kIGhlbHAgdG8gbWFrZSB5b3VyIGRyZWFtIHNob290IGEgcmVhbGl0eS4gIENvbnN1bGF0aW9ucyBhcmUgY29tcGxldGVseSBmcmVlLjwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19hZGRyZXNzLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdFx0PGFkZHJlc3MgY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gQWRkcmVzcyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDEyMyBXb29zdGVyIFN0IC0gTmV3IFlvcmssIE5ZIDEwMDEyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXIgZmEtZW52ZWxvcGVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gRW1haWwgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREQm9rZWhAQm9rZWhCZXN0LmNvbVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX2FkZHJlc3MtaWNvbnMgZmFzIGZhLXBob25lXCI+PC9zcGFuPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fc3J0XCI+IFBob25lIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KDIxMikgNTU1LTU1NTVcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFjdF9fbWVzc2FnZS1jb250YWluZXInPlxyXG5cdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgY29udGFjdDogc3RhdGUuY29udGFjdCB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKENvbnRhY3QpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpPT57XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J21lc3Nlbmdlcl9fY29udGFpbmVyJz5cclxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2Zvcm0nIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScnPlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSduYW1lJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbmFtZScgaWQ9J2lucHV0TmFtZScgcGxhY2Vob2xkZXI9J05hbWUgKHJlcXVpcmVkKScgcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nbnVtYmVyJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbnVtYmVyJyBpZD0naW5wdXROdW1iZXInIHBsYWNlaG9sZGVyPSdOdW1iZXInPjwvaW5wdXQ+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J2VtYWlsJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtZW1haWwnIGlkPSdpbnB1dEVtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwgKHJlcXVpcmVkKScgcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHQ8dGV4dGFyZWEgbmFtZT0nbWVzc2FnZScgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2lucHV0LW1lc3NhZ2UnIGlkPSdpbnB1dE1lc3NhZ2UnIHBsYWNlaG9sZGVyPSdNZXNzYWdlICAocmVxdWlyZWQpJyByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSdzdWJtaXQnIGlkPSdtZXNzZW5nZXJfX3NlbmQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19idXR0b24nIHZhbHVlPSdTZW5kIE1lc3NhZ2UnID48L2lucHV0PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcblxyXG5jbGFzcyBGaWxtc3RyaXAgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiRmlsbXN0cmlwIG1vdW50ZWQgcHJvcHMgYXJlIFwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlTG9hZGVkKG5hbWUpIHtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VFcnJvcmVkKG5hbWUpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiaW1hZ2UgZXJyb3JcIik7XHJcblx0XHQkKGAjZmlsbXN0cmlwSW1hZ2VMb2FkZXJfXyR7bmFtZX1gKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0fVxyXG5cclxuXHRtYXBTbGlkZXNUb0ZpbG1zdHJpcChzbGlkZXMpIHtcclxuXHRcdGxldCBtYXBwZWRTbGlkZXMgPSBzbGlkZXMubWFwKCAoeyBuYW1lLCBpbWFnZSB9LCBpbmRleCkgPT4geyBcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGtleT17YGZpbG1zdHJpcF9fY2VsbC0ke25hbWV9YH0gY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jZWxsXCJcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7IHRoaXMuZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlcihpbmRleCl9IH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9faW1hZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9faW1hZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2V9IFxyXG5cdFx0XHRcdFx0XHRcdGFsdD17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlSW1hZ2VMb2FkZWQuYmluZCh0aGlzLCBuYW1lKX1cclxuXHRcdFx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDwvaW1nPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9faW1hZ2Utb3ZlcmxheVwiIGlkPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8TG9hZGVyIGxvYWRlcklkPXtgZmlsbXN0cmlwSW1hZ2VMb2FkZXJfXyR7bmFtZX1gfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG1hcHBlZFNsaWRlc1xyXG5cdH1cclxuXHJcblx0ZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlcihzbGlkZU5vKSB7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX2N1cnJlbnRfc2xpZGVfbm8oc2xpZGVObyk7XHJcblx0XHR0aGlzLnByb3BzLmZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyKHNsaWRlTm8qLTIwMCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVNsaWRlU2hvdygpIFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0ZmlsbXN0cmlwTGVmdCgpIHtcclxuXHRcdGlmKHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSA9PT0gMCB8fCBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSklMjAwID09PSAwKXtcclxuXHRcdFx0dGhpcy5wcm9wcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyKDIwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0ZmlsbXN0cmlwUmlnaHQoKSB7XHJcblx0XHRpZihwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkgPT09IDAgfHwgcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpJTIwMCA9PT0gMCl7XHJcblx0XHRcdHRoaXMucHJvcHMuZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcigtMjAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRoaWdobGlnaHRGaWxtc3RyaXBDb250cm9scygpIHtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQtLWhpZ2hsaWdodFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpLmFkZENsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQtLWhpZ2hsaWdodFwiKTtcclxuXHRcdH0sIDUwMCk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwiZmlsbXN0cmlwX19jb250YWluZXJcIiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiXHJcblx0XHRcdFx0b25Nb3VzZUVudGVyPXsgKCkgPT4gdGhpcy5oaWdobGlnaHRGaWxtc3RyaXBDb250cm9scygpfSBcclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgc2xpZGVzID8gdGhpcy5tYXBTbGlkZXNUb0ZpbG1zdHJpcChzbGlkZXMpIDogbnVsbCB9XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2hpZnQgZmlsbXN0cmlwIHRvIHRoZSByaWdodFwiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBMZWZ0KCl9PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXNydFwiPmZpbG1zdHJpcCBsZWZ0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlNoaWZ0IGZpbG1zdHJpcCB0byB0aGUgbGVmdFwiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBSaWdodCgpfT5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1zcnRcIj5maWxtc3RyaXAgcmlnaHQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiIGlkPVwiZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBwcm9qZWN0b3I6IHN0YXRlLnByb2plY3RvciB9IH07XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7IHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoRmlsbXN0cmlwKTsgIiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiRm9vdGVyIHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMucHJvcHMuZm9vdGVyLnNvY2lhbE1lZGlhTGlua3MpO1xyXG5cdH1cclxuXHJcblx0Ly9jaGVjayB0byBzZWUgaWYgdGhlc2UgY2FuIGJlIGFkZGVkIGRpcmVjdGx5IGlubGluZSBkdXJpbmcgdGhlIGluaXRpYWwgbWFwcGluZyBvZiB0aGUgU29jaWFsIE1lZGlhbCBMaW5rcyBpbiB0aGUgSlNYXHJcblx0YWRkTGlzdGVuZXJzKHNvY2lhbE1lZGlhTGlua3NJbmZvKSB7XHJcblx0XHRzb2NpYWxNZWRpYUxpbmtzSW5mby5mb3JFYWNoKCAoeyBmb250X2NvbG9yLCBuYW1lLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiB9KSA9PiB7XHJcblx0XHRcdCQoYCMke25hbWV9LWhvdmVyLWJveGApLmhvdmVyKCgpID0+IHRoaXMuaG92ZXJPbihgIyR7bmFtZX0tc29jaWFsYCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpLCAoKSA9PiB0aGlzLmhvdmVyT2ZmKGAjJHtuYW1lfS1zb2NpYWxgKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhvdmVyT24oaWQsIGZvbnRfY29sb3IsIGJnX2NvbG9yMSwgYmdfY29sb3IyKSB7XHJcblx0XHQkKGlkKS5jc3MoJ2NvbG9yJywgZm9udF9jb2xvcik7XHJcblx0XHQkKGlkKS5jc3MoJ2JhY2tncm91bmQnLCBgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAke2JnX2NvbG9yMX0sICR7YmdfY29sb3IyfSlgKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rLS1ob3ZlcicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmsnKTtcclxuXHR9XHJcblxyXG5cdGhvdmVyT2ZmKGlkKSB7XHJcblx0XHQkKGlkKS5jc3MoJ2NvbG9yJywgJ3doaXRlJyk7XHJcblx0XHQkKGlkKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCkpJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYm9keVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5BcnRpc3Q8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0LWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFydGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RGF2aWQgQm9rZWggZm91bmRlciBvZiBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5LCBJcyBhbiBhd2FyZCB3aW5uaW5nIHBob3RvZ3JhcGhlciB3aXRoIG92ZXIgOCB5ZWFycyBvZiBleHBlcmllbmNlLiBMZWFybiBtb3JlIGFib3V0IERhdmlkIGFuZCBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IFxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgaWQ9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtbGlua1wiIHRvPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpPiBoZXJlLiA8L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+Qm9rZWggQmVzdCBQaG90b2dyYXBoeTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFkZHJlc3MgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjEyMyBXb29zdGVyIFN0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4gTmV3IFlvcmssIE5ZIDEwMDEyPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cInRlbDoxLTIxMi01NTUtNTU1NVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPigyMTIpIDU1NS01NTU1PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj48L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9hZGRyZXNzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Tb2NpYWwgTWVkaWE8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWwtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcy5tYXAoKHsgbmFtZSwgbGluayAsIGljb259KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtgJHtuYW1lfS1zb2NpYWxgfSBpZD17YCR7bmFtZX0taG92ZXItYm94YH0gY2xhc3NOYW1lPSdmb290ZXJfX3NvY2lhbC1ob3Zlci1ib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1zcnRcIj57bmFtZX08L2I+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2Ake2ljb259IGZvb3Rlcl9fc29jaWFsLWxpbmtgfSBpZD17YCR7bmFtZX0tc29jaWFsYH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGl0bGU9e25hbWV9PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYmFzZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlLXRleHRcIj4mY29weTsgQm9rZWggQmVzdCBQaG90b2dyYXBoeSAtIE5ldyBZb3JrLCBOWTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb290ZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGZvb3Rlcjogc3RhdGUuZm9vdGVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcykoRm9vdGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgZ2FsbGVyeUFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHByb2plY3RvckFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEdhbGxlcnlTZWxlY3RvciBmcm9tICcuL0dhbGxlcnlTZWxlY3Rvcic7XHJcbmltcG9ydCBQcm9qZWN0b3IgZnJvbSAnLi9Qcm9qZWN0b3InO1xyXG5cclxuY2xhc3MgR2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uIG1vdW50IEdhbGxlcnkgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0Y29uc29sZS5sb2coKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIEdhbGxlcnkgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNsb3NlR2FsbGVyeSgpIHtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW4tLWdhbGxlcnlcIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlc1wiKTtcclxuXHRcdH1cclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHR9XHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdH1cclxuXHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuZ2FsbGVyeS5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdDxHYWxsZXJ5U2VsZWN0b3IgY2hvb3NlX2dhbGxlcnk9eyB0aGlzLnByb3BzLmFjdGlvbnMuY2hvb3NlX2dhbGxlcnkgfSB1bmxvYWRfc2xpZGVzPXsgdGhpcy5wcm9wcy5hY3Rpb25zLnVubG9hZF9zbGlkZXMgfS8+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FsbGVyeV9fY2xvc2VcIiB0aXRsZT1cIkNsb3NlIEdhbGxlcnlcIiBvbkNsaWNrPXsgKCkgPT4gdGhpcy5jbG9zZUdhbGxlcnkoKSB9PlxyXG5cdFx0XHRcdDxiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlLXNydFwiPkNsb3NlIEdhbGxlcnk8L2I+XHJcblx0XHRcdFx0WFxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlcy1jbG9zZWRcIiBpZD1cImdhbGxlcnlfX2ltYWdlc1wiPlxyXG5cdFx0XHRcdFx0PFByb2plY3RvciBzdHlsZUZvcj17XCJnYWxsZXJ5XCJ9IHNsaWRlcz17c2xpZGVzfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdGNvbnN0IHsgZ2FsbGVyeSwgcHJvamVjdG9yIH0gPSBzdGF0ZTtcclxuXHRyZXR1cm4geyBcclxuXHRcdGdhbGxlcnksIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgZ2FsbGVyeUFjdGlvbnMsIHByb2plY3RvckFjdGlvbnMpLCBkaXNwYXRjaClcclxuXHR9OyBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoR2FsbGVyeSk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2dhbGxlcnlTZWxlY3Rvcl9hY3Rpb25zJztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbi8valF1ZXJ5IGltcG9ydFxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmdhbGxlcnlTZWxlY3RvckxvYWQoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnR2FsbGVyeVNlbGVjdG9yIHByb3BzIGFyZTogJyx0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLmdhbGxlcnlTZWxlY3Rvci50aW1lcik7XHJcblx0XHR0aGlzLmdhbGxlcnlTZWxlY3RvclJlc2V0KCk7XHJcblx0fVxyXG5cclxuXHQvL3NhdmUgdGltZXIgdG8gc3RhdGUgdG8gY2xlYXIgb24gdW5tb3VudCBzbyB0aGF0IHRoZSB0aW1lciBpcyBjbGVhcmVkIGV2ZW4gaWYgcGFnZSBpcyB1bm1vdW50ZWQgbWlkIGxvYWRcclxuXHRnYWxsZXJ5U2VsZWN0b3JMb2FkKCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGxldCBjb3VudGVyID0gMDtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdCQoZ2FsbGVyeVNlbGVjdG9ySWRzW2NvdW50ZXJdLmNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKTtcclxuXHRcdFx0JChnYWxsZXJ5U2VsZWN0b3JJZHNbY291bnRlcl0uY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyJyk7XHJcblx0XHRcdGNvdW50ZXIrK1xyXG5cdFx0XHRpZihjb3VudGVyID49IGdhbGxlcnlTZWxlY3Rvcklkcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgNTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdH1cclxuXHJcblx0Z2FsbGVyeVNlbGVjdG9yUmVzZXQoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCJ9XHJcblx0XHRdO1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9ySWRzLmZvckVhY2goICh7IGNvbnRhaW5lcklkIH0pID0+IHtcclxuXHRcdFx0aWYoJChjb250YWluZXJJZCkuaGFzQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJykpIHtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdCQoY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblxyXG5cdC8vcHV0IGxpc3RlbmVycyBkaXJlY3RseSBvbiB0byB0aGUgaHRtbCB0YWdzXHJcblx0YWRkTGlzdGVuZXJzKCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwiLCBnYWxsZXJ5TmFtZTogXCJhY3Rpb25cIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCIsIGdhbGxlcnlOYW1lOiBcImV2ZW50c1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIiwgZ2FsbGVyeU5hbWU6IFwibGFuZHNjYXBlXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwiLCBnYWxsZXJ5TmFtZTogXCJwb3J0cmFpdFwifVxyXG5cdFx0XTtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcklkcy5mb3JFYWNoKCAoeyBjb250YWluZXJJZCwgZ2FsbGVyeVNlbGVjdG9ySWQsIGdhbGxlcnlOYW1lIH0pID0+IHtcclxuXHRcdFx0JChjb250YWluZXJJZCkuaG92ZXIoKCkgPT4gdGhpcy5ob3ZlckluKGdhbGxlcnlTZWxlY3RvcklkKSwgKCkgPT4gdGhpcy5ob3Zlck91dChnYWxsZXJ5U2VsZWN0b3JJZCkpO1xyXG5cdFx0XHQkKGNvbnRhaW5lcklkKS5jbGljaygoKSA9PiB0aGlzLmdvVG9HYWxsZXJ5KGdhbGxlcnlOYW1lKSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdGdvVG9HYWxsZXJ5KGdhbGxlcnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiY2xpY2tlZCBnb1RvR2FsbGVyeSBvbiBcIisgZ2FsbGVyeSk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMuY2hvb3NlX2dhbGxlcnkoZ2FsbGVyeSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLm9wZW5HYWxsZXJ5KCk7IFxyXG5cdFx0XHQvLyB0aGlzLnByb3BzLmdhbGxlcnkuc2xpZGVzWzBdO1xyXG5cdFx0fSwgNTApO1xyXG5cdH1cclxuXHJcblx0b3BlbkdhbGxlcnkoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gb3BlbiB0aGUgZ2FsbGVyeVwiKTtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW5cIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdH1cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiAkKFwiI21haW5cIikub2Zmc2V0KCkudG9wXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwxNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gY2xvc2VHYWxsZXJ5KCkge1xyXG5cdC8vIFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKSl7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0Ly8gXHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHQvLyBcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdGhvdmVySW4oaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdH1cclxuXHJcblxyXG5cdGhvdmVyT3V0KGlkKSB7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIEFjdGlvbiBHYWxsZXJ5XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzFcIj5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgIDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkFjdGlvbjwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBFdmVudHMgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18yXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5FdmVudHM8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgTGFuZHNjYXBlIEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fM1wiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+TGFuZHNjYXBlPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIFBvcnRyYWl0IEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNFwiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+UG9ydGFpdDwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3I6IHN0YXRlLmdhbGxlcnlTZWxlY3RvclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnlTZWxlY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hlYWRlcl9hY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bW9iaWxlTWVudTogZmFsc2UsXHJcblx0XHR9XHJcblx0XHR0aGlzLmhhbmRsZU1lbnVDbGljayA9IHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlYWRlciBwcm9wcyBhcmUgJywgdGhpcy5wcm9wcyk7XHJcblxyXG5cdH1cclxuXHJcblx0aGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNZW51Q2xpY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbW9iaWxlTWVudSBjbGlja2VkJyk7XHJcblx0XHRpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSB0cnVlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51T3V0KCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXMoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51SW4oKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVJbigpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2LS1zbGlkZS1pbicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYnKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVPdXQoKSB7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0fVxyXG4gXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uTW91c2VMZWF2ZT17KCk9PiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUoKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1saW5rXCIgaWQ9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBleGFjdCB0bz1cIi9cIiB0aXRsZT1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy5cIj5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxvZ29cIiBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIil9IGFsdD1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy4gbG9nb1wiIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbmFtZVwiPkJva2VoIFBob3RvZ3JhcGh5PC9wPlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbWVudS1pY29uIGZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVNZW51Q2xpY2soKX0+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtrZXl9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCIgZXhhY3QgdG89e3BhdGh9PntuYW1lfTwvTmF2TGluaz48L2xpPil9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDxuYXYgaWQ9XCJoZWFkZXJfX21vYmlsZS1uYXZcIiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGVyLmxpbmtJbmZvLm1hcCgoeyBrZXksIHBhdGgsIG5hbWUgfSkgPT4gPGxpIGtleT17YG1vYmlsZS0ke2tleX1gfT4gPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBoZWFkZXI6IHN0YXRlLmhlYWRlciB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMsIG51bGwsIHtwdXJlOmZhbHNlfSkoSGVhZGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9DaXJjbGVUeXBlIGltcG9ydFxyXG5pbXBvcnQgQ2lyY2xlVHlwZSBmcm9tICdjaXJjbGV0eXBlJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9ob21lX2FjdGlvbnMnO1xyXG5cclxuLy9EYXRhIGltcG9ydHNcclxuaW1wb3J0IGhvbWVTbGlkZXMgZnJvbSAnLi9kYXRhL2hvbWVTbGlkZXMnO1xyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGggPSB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuc2xpZGVTaG93KCk7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9uKCk7XHJcblx0XHR0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dXaWR0aCk7XHJcblx0XHRuZXcgQ2lyY2xlVHlwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZV9fd2VsY29tZS10ZXh0JykpLnJhZGl1cyg2MDApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZygnSG9tZSBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7IH0sIDE1MDAgKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVbm1vdW50ZWQgQ29tcG9uZW50XCIpO1xyXG5cdFx0dGhpcy50b2dnbGVIb21lTW9kaWZpZXJPZmYoKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdHRoaXMuc3RvcFNsaWRlU2hvdygpO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJcIik7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVIb21lTW9kaWZpZXJPbigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpbmRvd1dpZHRoKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV93aW5kb3dfd2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IGludGVydmFsVGltZXIgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtob21lU2xpZGVzWzBdLmltZ1NyY30pYCk7XHJcblx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7XHJcblx0XHQvL3JlbW92ZSBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7XHJcblx0XHRsZXQgY291bnQgPSAxXHJcblx0XHRjb25zb2xlLmxvZygnc2xpZGVzaG93IHN0YXJ0aW5nJyk7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKGNvdW50ID09IGhvbWVTbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRjb3VudCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGltYWdlID0gaG9tZVNsaWRlc1tjb3VudF0uaW1nU3JjO1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGNvdW50KytcclxuXHRcdFx0XHQvL2FkZCBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTtcclxuXHRcdFx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdFx0XHQvL3JlbW92ZSBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0XHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdFx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzcyBhZ2FpbiBzbyB0aGF0IHRoZSBlZmZlY3Qgc3RhcnRzIG92ZXJcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aW1hZ2V9KWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb3VudCsrIHBhdXNlIGlzOiAnLCB0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvdW50ID0gdGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KTtcclxuXHRcdFx0dGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCk7XHJcblx0XHR9LCA4NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3N0b3JlZCBpbnRlcnZhbFRpbWVyIGlzICcraW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyB0b28gc21hbGwgc3RvcHBlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cclxuXHQvLyBjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KSB7XHJcblx0Ly8gXHRsZXQgeyB3aW5kb3dXaWR0aCwgcGF1c2VTbGlkZVNob3cgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoIDwgNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdC8vIFx0XHRyZXR1cm4gY291bnRcclxuXHQvLyBcdH1cclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudCs9MVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdHN0b3BTbGlkZVNob3coKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2xlYXJpbmcgaW50ZXJ2YWxUaW1lciAnK3RoaXMucHJvcHMuaG9tZS5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIiA+XHJcblx0XHRcdFx0PGRpdiBpZD1cImhvbWVfX2ZpbHRlci1ib3hcIiBjbGFzc05hbWU9XCJob21lX19maWx0ZXItYm94XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lXCI+XHJcblx0XHRcdFx0XHQ8aDEgaWQ9XCJob21lX193ZWxjb21lLXRleHRcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dC1tb2JpbGVcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhvbWU6IHN0YXRlLmhvbWVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZD17cHJvcHMubG9hZGVySWR9IGNsYXNzTmFtZT1cImxvYWRlcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjFcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0XHQ8aW1nIGlkPVwibG9nby1sb2FkZXIyXCIgY2xhc3NOYW1lPVwibG9hZGVyX19sb2dvXCIgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZycpfT48L2ltZz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XHJcbmltcG9ydCBGaWxtc3RyaXAgZnJvbSAnLi9GaWxtc3RyaXAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFByb2plY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyID0gdGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyID0gdGhpcy5maWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlci5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5kb3duQXJyb3dWaXNpYmlsaXR5KCk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0fSw1MCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuYXV0b1J1blByb2plY3RvcigpO1xyXG5cdFx0fSwxMDApO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3RvciBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIFByb2plY3RvciBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMucHJvamVjdG9yLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcChmYWxzZSk7XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfY29udGFpbmVyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdG5leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5pbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gaW5jcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKSB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5kZWNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gZGVjcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKSB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0dXBkYXRlU2xpZGVTaG93KCkge1xyXG5cdFx0bGV0IHsgc2xpZGVzLCBjdXJyZW50U2xpZGVObyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIHVwZGF0ZVNsaWRlU2hvdyBwcm9wcyBhcmU6IFwiLCB0aGlzLnByb3BzKTtcclxuXHRcdHRoaXMuZmlsbXN0cmlwT3ZlcmxheVNoaWZ0ZXIoKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKHNsaWRlc1tjdXJyZW50U2xpZGVOb10pO1xyXG5cdH1cclxuXHJcblxyXG5cdGxvYWRQcm9qZWN0b3IoKSB7XHJcblx0XHR0aGlzLnByb3BzLmxvYWRfbmV3X3NsaWRlcyh0aGlzLnByb3BzLnNsaWRlcyk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLnVwZGF0ZVNsaWRlU2hvdygpOyBcclxuXHRcdH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRhdXRvUnVuUHJvamVjdG9yKCkge1xyXG5cdFx0bGV0IGhhbGZTZWNDb3VudGVyID0gMDtcclxuXHRcdGxldCBpbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoICgpPT4ge1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLnByb2plY3Rvci5zbGlkZXMgPT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdFx0dGhpcy5sb2FkUHJvamVjdG9yKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aGFsZlNlY0NvdW50ZXIgKz0gNTAwO1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLnByb2plY3Rvci5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSAmJiBoYWxmU2VjQ291bnRlciA+PSA2NTAwKXtcclxuXHRcdFx0XHR0aGlzLm5leHRTbGlkZSgpO1xyXG5cdFx0XHRcdGhhbGZTZWNDb3VudGVyID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fSw1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcihpbnRlcnZhbFRpbWVyKTtcclxuXHR9XHJcblxyXG5cclxuXHRwYXVzZUJ1dHRvbkhhbmRsZXIoKSB7XHJcblx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSB0aGlzLnByb3BzLnByb2plY3Rvci5wYXVzZVNsaWRlU2hvdztcclxuXHRcdGlmKHBhdXNlU2xpZGVTaG93ID09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIpLmFkZENsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb24tLWhpZGRlblwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiKS5yZW1vdmVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIikuYWRkQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIikucmVtb3ZlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uLS1oaWRkZW5cIik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiKS5hZGRDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIpLnJlbW92ZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb24tLWhpZGRlblwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIpLmFkZENsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvbi0taGlkZGVuXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIikucmVtb3ZlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGRvd25BcnJvd1Zpc2liaWxpdHkoKSB7XHJcblx0XHQvL2lmIGNvbnRhaW5lciBob3VzaW5nIHRoZSBwcm9qZWN0b3IgaXMgdG9vIHNtYWxsIGRvbid0IGdpdmUgdGhlIG9wdGlvbiB0byBicmluZyB1cCB0aGUgcGhvdG8gc3RyaXBcclxuXHRcdGxldCBwcm9qZWN0b3JCb3hXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGlmKHByb2plY3RvckJveFdpZHRoIDwgNzUwKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHByb2plY3RvckRvd25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IGNhbGN1bGF0ZWRXaWR0aCA9IHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcy5sZW5ndGgqMjAwK1wicHhcIjtcclxuXHRcdHRoaXMucHJvcHMuc2hvd19maWxtc3RyaXAoIXRoaXMucHJvcHMucHJvamVjdG9yLnNob3dGaWxtc3RyaXApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCd3aWR0aCcsIGNhbGN1bGF0ZWRXaWR0aCk7XHJcblx0XHRcdHRoaXMuZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIoKTsgXHJcblx0XHR9LCAyNSk7XHJcblx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9fY29udGFpbmVyXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKSB7XHJcblx0XHQvL21ha2Ugc3VyZSBtb2RpZmllZCBjbGFzcyBpcyBub3Qgb24gYmVmb3JlIHRvZ2dsaW5nXHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG9uIGJlZm9yZSB0b2dnbGluZyBpdCBvZmZcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS0tc2hpZnRcIik7XHJcblx0XHRcdC8vSWYgY29udHJvbC1kb3duIGlzIGluIHVzZSBieSB0aGUgZmlsbXN0cmlwIGxlYXZlIGl0IGFsb25lXHJcblx0XHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBPdmVybGF5U2hpZnRlcigpIHtcclxuXHRcdGxldCBjdXJyZW50U2xpZGVObyA9IHRoaXMucHJvcHMucHJvamVjdG9yLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIikuY3NzKCdsZWZ0JywgY3VycmVudFNsaWRlTm8qMjAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBDb250YWluZXJTaGlmdGVyKHNoaWZ0QnkpIHtcclxuXHRcdGxldCB0cmF2ZWxEaXN0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxtc3RyaXBfX2NvbnRhaW5lcicpLm9mZnNldFdpZHRoIC1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdG9yJykub2Zmc2V0V2lkdGg7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250YWluZXInKS5vZmZzZXRXaWR0aCk7XHJcblx0XHRsZXQgcHJvcG9zZWRQb3NpdGlvbiA9IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSArIHNoaWZ0Qnk7XHJcblx0XHRpZih0cmF2ZWxEaXN0YW5jZSA8PSAwIHx8IHByb3Bvc2VkUG9zaXRpb24gPiAwIHx8IHRyYXZlbERpc3RhbmNlICsgcHJvcG9zZWRQb3NpdGlvbiA8IDApe1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdGxldCBmaWxtc3RyaXBQb3NpdGlvbiA9IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKTtcclxuXHRcdGxldCBsZWZ0QXJyb3dQb3NpdGlvbiA9IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdCcpLmNzcygnbGVmdCcpKTtcclxuXHRcdGxldCByaWdodEFycm93UG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JykpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JywgZmlsbXN0cmlwUG9zaXRpb24gKyBzaGlmdEJ5KTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdCcpLmNzcygnbGVmdCcsIGxlZnRBcnJvd1Bvc2l0aW9uICsgKHNoaWZ0QnkqLTEpKTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5jc3MoJ2xlZnQnLCByaWdodEFycm93UG9zaXRpb24gKyAoc2hpZnRCeSotMSkpO1xyXG5cdH1cclxuXHRcclxuXHJcblx0ZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIoc2hpZnRUbykge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzaGlmdFRvIGlzOiBcIitzaGlmdFRvKTtcclxuXHRcdGlmKHNoaWZ0VG8gPT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHNoaWZ0VG8gPSB0aGlzLnByb3BzLnByb2plY3Rvci5jdXJyZW50U2xpZGVObyAqIC0yMDA7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwidW5kZWZpbmVkIHNoaWZ0VG8sIHNldHRpbmcgc2hpZnRUb1wiLCBzaGlmdFRvKTtcclxuXHRcdH1cclxuXHRcdGxldCBwcm9qZWN0b3JEaXNwbGF5V2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdG9yJykub2Zmc2V0V2lkdGg7XHJcblx0XHRsZXQgcHJvamVjdG9yQm94Q2VudGVyID0gcHJvamVjdG9yRGlzcGxheVdpZHRoLzIgLSAocHJvamVjdG9yRGlzcGxheVdpZHRoLzIpJTIwMDtcclxuXHRcdGxldCBmaWxtc3RyaXBXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxtc3RyaXBfX2NvbnRhaW5lcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHJpZ2h0QXJyb3dXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5vZmZzZXRXaWR0aDtcclxuXHRcdGxldCB0cmF2ZWxEaXN0YW5jZSA9IChmaWxtc3RyaXBXaWR0aCotMSkgICsgcHJvamVjdG9yRGlzcGxheVdpZHRoO1xyXG5cdFx0bGV0IGxlZnRBcnJvd09mZnNldCA9IDg7XHJcblx0XHRsZXQgcmlnaHRBcnJvd09mZnNldCA9IHByb2plY3RvckRpc3BsYXlXaWR0aCAtIChyaWdodEFycm93V2lkdGggKyA4KTtcclxuXHRcdGxldCBmaWxtc3RyaXBPZmZzZXQgPSAwO1xyXG5cdFx0bGV0IGNlbnRlckNlbGwgPSBzaGlmdFRvICsgcHJvamVjdG9yQm94Q2VudGVyO1xyXG5cdFx0aWYodHJhdmVsRGlzdGFuY2UgPj0gMCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwidHJhdmVsRGlzdGFuY2VcIik7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fSBcclxuXHRcdGlmKGNlbnRlckNlbGwgPj0gMCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiY2VudGVyQ2VsbFwiKTtcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JywgZmlsbXN0cmlwT2Zmc2V0KTtcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JywgbGVmdEFycm93T2Zmc2V0KTtcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcsICByaWdodEFycm93T2Zmc2V0KTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRpZihjZW50ZXJDZWxsIDw9IHRyYXZlbERpc3RhbmNlKXtcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JywgdHJhdmVsRGlzdGFuY2UpO1xyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCAodHJhdmVsRGlzdGFuY2UqLTEpICsgbGVmdEFycm93T2Zmc2V0KTtcclxuXHRcdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcsICh0cmF2ZWxEaXN0YW5jZSotMSkgKyByaWdodEFycm93T2Zmc2V0KTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnLCBjZW50ZXJDZWxsKTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdCcpLmNzcygnbGVmdCcsIChjZW50ZXJDZWxsKi0xKSArIGxlZnRBcnJvd09mZnNldCk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgKGNlbnRlckNlbGwqLTEpICsgcmlnaHRBcnJvd09mZnNldCk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVJbmZvLCBzaG93RmlsbXN0cmlwLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwicHJvamVjdG9yXCIgXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdG9yXCIgXHJcblx0XHRcdFx0b25Nb3VzZUVudGVyPXsgKCkgPT4gdGhpcy5zaGlmdFByb2plY3RvckNvbnRyb2xzKCl9IFxyXG5cdFx0XHRcdG9uTW91c2VMZWF2ZT17ICgpID0+IHRoaXMudW5zaGlmdFByb2plY3RvckNvbnRyb2xzKCl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7Y3VycmVudFNsaWRlSW5mbyA/IFxyXG5cdFx0XHRcdFx0PFNsaWRlIHBob3RvSW5mbz17Y3VycmVudFNsaWRlSW5mb30gXHJcblx0XHRcdFx0XHRcdHN0eWxlRm9yPXt0aGlzLnByb3BzLnN0eWxlRm9yfSBcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHtzbGlkZXMgP1xyXG5cdFx0XHRcdFx0PEZpbG1zdHJpcCBzbGlkZXM9e3NsaWRlc30gXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVNsaWRlU2hvdz17ICgpID0+IHRoaXMudXBkYXRlU2xpZGVTaG93KCkgfVxyXG5cdFx0XHRcdFx0XHRmaWxtc3RyaXBDb250YWluZXJTaGlmdGVyPXsgdGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyIH1cclxuXHRcdFx0XHRcdFx0ZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXI9eyB0aGlzLmZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlNlZSBwcmV2aW91cyBwaG90b1wiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnByZXZpb3VzU2xpZGUoKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5sZWZ0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlNlZSBuZXh0IHBob3RvXCJcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMubmV4dFNsaWRlKCl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+cmlnaHQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTZWUgYWxsIHBob3RvcyBpbiBjdXJyZW50IGdhbGxlcnlcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wcm9qZWN0b3JEb3duSGFuZGxlcigpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5kb3duIGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWRvd25cIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlBhdXNlL1BsYXkgc2xpZGUgc2hvd1wiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5wYXVzZUJ1dHRvbkhhbmRsZXIoKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+cGF1c2UgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbHMtcGF1c2UtcGxheS1pY29uLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGkgaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiIGNsYXNzTmFtZT1cImZhcyBmYS1wYXVzZS1jaXJjbGUgcHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIj48L2k+XHJcblx0XHRcdFx0XHRcdDxpIGlkPVwicHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5LWNpcmNsZSBwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uLS1oaWRkZW5cIj48L2k+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBwcm9qZWN0b3I6IHN0YXRlLnByb2plY3Rvcn0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoUHJvamVjdG9yKTsgIiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5cclxuY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnNldFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnJlbW92ZVN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0c2V0U3R5bGVzKCkge1xyXG5cdFx0bGV0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcy5waG90b0luZm87XHJcblx0XHRsZXQgc3R5bGVGb3IgPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lYCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG9gKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHsgc3R5bGVGb3IgfSA9IHRoaXMucHJvcHMuc3R5bGVGb3I7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBmcmFtZVxyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZS0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIHBob3RvXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvLS0ke3N0eWxlRm9yfWApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHsgbmFtZSwgaW1hZ2UgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPXtgJHtuYW1lfS1zbGlkZV9fZnJhbWVgfSBjbGFzc05hbWU9XCJzbGlkZV9fZnJhbWVcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPXtgJHtuYW1lfS1zbGlkZV9fcGhvdG9gfSBjbGFzc05hbWU9XCJzbGlkZV9fcGhvdG9cIiBcclxuXHRcdFx0XHRcdHNyYz17aW1hZ2V9ICBcclxuXHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMpfSBcclxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvaW1nPlxyXG5cdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e1wic2xpZGVfX2xvYWRlclwifS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8cD5NeSBMb2FkZXIgaXNuJ3QgaXQgZ3JlYXQ/PC9wPlxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX21lc3NhZ2UobWVzc2FnZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfTUVTU0FHRScsXHJcblx0XHRtZXNzYWdlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RfY2hlY2socmVkaXJlY3QpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1JFRElSRUNUX0NIRUNLJyxcclxuXHRcdHJlZGlyZWN0XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKHRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHR0aW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX3RpbWVyKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0xFQVJfVElNRVInLFxyXG5cdFx0dGltZXI6IGZhbHNlXHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZF9waG90byhuYW1lLCBpbWFnZSwgY3VycmVudFNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQUREX1BIT1RPJyxcclxuXHRcdGN1cnJlbnRTbGlkZXMsXHJcblx0XHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aW1hZ2VcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSE9PU0VfR0FMTEVSWScsXHJcblx0XHRnYWxsZXJ5XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1vYmlsZV9oZWFkZXJfc3RhdHVzKG1vYmlsZU1lbnUpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ01PQklMRV9IRUFERVJfU1RBVFVTJyxcclxuXHRcdG1vYmlsZU1lbnVcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3dXaWR0aCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfV0lORE9XX1dJRFRIJyxcclxuXHRcdHdpbmRvd1dpZHRoXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9jdXJyZW50X3NsaWRlX2luZm8oY3VycmVudFNsaWRlSW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJyxcclxuXHRcdGN1cnJlbnRTbGlkZUluZm9cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9jdXJyZW50X3NsaWRlX25vKGN1cnJlbnRTbGlkZU5vKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9DVVJSRU5UX1NMSURFX05PJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCB0b3RhbE5vU2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdJTkNSRU1FTlRfU0xJREUnLFxyXG5cdFx0Y3VycmVudFNsaWRlTm8sXHJcblx0XHR0b3RhbE5vU2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCB0b3RhbE5vU2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdERUNSRU1FTlRfU0xJREUnLFxyXG5cdFx0Y3VycmVudFNsaWRlTm8sXHJcblx0XHR0b3RhbE5vU2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkX25ld19zbGlkZXMoc2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0FEX05FV19TTElERVMnLFxyXG5cdFx0c2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5sb2FkX3NsaWRlcygpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1VOTE9BRF9TTElERVMnLFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dfZmlsbXN0cmlwKHNob3dGaWxtc3RyaXApIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NIT1dfRklMTVNUUklQJyxcclxuXHRcdHNob3dGaWxtc3RyaXBcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9maWxtc3RyaXBfZGVmYXVsdF9wb3NpdGlvbnMoZmlsbXN0cmlwRGVmYXVsdFBvc2l0aW9ucykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfRklMTVNUUklQX0RFRkFVTFRfUE9TSVRJT05TJyxcclxuXHRcdGZpbG1zdHJpcERlZmF1bHRQb3NpdGlvbnNcclxuXHR9XHJcbn0iLCJjb25zdCBnYWxsZXJ5U2xpZGVzID0ge1xyXG5cdGFjdGlvbjogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRheWxpZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImF0LXRoZS10cmFja1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdG9yY3Jvc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwidWx0aW1hdGUtc2F2ZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzb2NjZXItbWF0Y2hcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zb2NjZXItbWF0Y2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJsZWFwLW9mLWZhaXRoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbGVhcC1vZi1mYWl0aC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhpZ2gtanVtcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImtpY2stZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2tpY2stZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpZy13YXZlLXN1cmZpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iaWctd2F2ZS1zdXJmaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2thdGUtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NrYXRlLXBhcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJza2lpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdWRkbGUtanVtcGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3B1ZGRsZS1qdW1waW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhY2gtYmFja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iZWFjaC1iYWNrZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1cmYtc3BsYXNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzY2hyb2RpbmdlcnMta2lja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGV2ZW50czogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWNsb3Vkcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoZGF5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aGRheS1naXJsLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiNHRoLWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHJlZ25hbmN5LWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0aW5nLWNsYXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoLWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoLWFubm91bmNlbWVudC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWZyaWVuZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwid2VkZGluZy1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImZpcnN0LWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0ZS1jZWxlYnJhdGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRlLWNlbGVicmF0aW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGUtYW5kLWdyb29tXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtYW5kLWdyb29tLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRsYW5kc2NhcGU6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhcmNoZXMtbmF0aW9uYWwtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2FyY2hlcy1uYXRpb25hbC1wYXJrLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicm9va2x5bi1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9icm9va2x5bi1icmlkZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhbG0tY2xvdWRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvY2FsbS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJvYXRob3VzZS1jb3R0YWdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRldmlscy1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kZXZpbHMtYnJpZGdlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGFrZS1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBvcHBpZXNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBpZXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcGllci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJpdmVyLXJlZmxlY3Rpb25cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZHVzay1pbi1hZnJpY2FcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1hcnNoLXBlaXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm5pZ2h0LWRvbHBoaW5zXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbmlnaHQtZG9scGhpbnMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmbGF0aXJvbi1idWlsZGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2ZsYXRpcm9uLWJ1aWxkaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibW91bnRhaW4tbGFrZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21vdW50YWluLWxha2UuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJueWMtc2t5bGluZTJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZTIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdXJwbGUtZmxvd2Vyc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3B1cnBsZS1mbG93ZXJzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwb3J0cmFpdDogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1ibHVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtYmx1ci5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhdXRpZnVsLWNhc3VhbFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWNhc3VhbC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxvbmRlLWNsb3NlLXVwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhcm5pdmFsLW5pZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGFwcHktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInlvdW5nLW1vbmtzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC95b3VuZy1tb25rcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cC1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2xvc2UtdXAtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWRpbmctd29tYW5cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJnaXJsLXJhYmJpdC1mcmllbmRzaGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicmVkLWhhaXJlZC1jaGlsZFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvcmVkLWhhaXJlZC1jaGlsZC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0LWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndvbWFuLWRyZXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC93b21hbi1kcmVzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLXdvbWFuLWJva2VoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC13b21hbi1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQxXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnlTbGlkZXM7IiwiXHJcblxyXG5jb25zdCBob21lU2xpZGVzID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGcnKSxcclxuXHRcdH0sXHRcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL3N0YXJ5LWxlbnMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1saWdodHMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpZGVzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzbGlkZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYmVhY2gtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZmllbGQtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2ZpZWxkLXNob290LmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2luLWFuZC1vdXQtb2YtZm9jdXMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2luLWFuZC1vdXQtb2YtZm9jdXMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc21va2UtY2xvdWQnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL3Ntb2tlLWNsb3VkLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2F0LWR1c2snLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2F0LWR1c2suanBlZycpXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1lc3NhZ2U6IFsnJywnJ10sXHJcblx0cmVkaXJlY3Q6IGZhbHNlXHJcblx0fTtcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX01FU1NBR0UnOlxyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGFjdGlvbi5tZXNzYWdlO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbWVzc2FnZSB9XHJcblx0XHRjYXNlICdSRURJUkVDVF9DSEVDSyc6XHJcblx0XHRcdGxldCByZWRpcmVjdCA9IGFjdGlvbi5yZWRpcmVjdDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlZGlyZWN0IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNvY2lhbE1lZGlhTGlua3MgOiBbXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdG5hbWU6IFwiRmFjZUJvb2tcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjM0I1OTk4XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzI0NWFjZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkZsaWNrclwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvZGF2aWRfYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1mbGlja3JcIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiNGRTA4ODNcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjMTI4ZmRjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiSW5zdGFncmFtXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Jva2VoYmVzdHBob3RvZ3JhcGh5L1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjZjE3NTMwXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzdhMzhhYlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkxpbmtlZEluXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWRib2tlaC9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWxpbmtlZGluXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjMDA3N2I1XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzU2YjllZVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3Rlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAoJ1NFVF9GT09URVJfTElOS1MnKTpcclxuXHRcdFx0bGV0IGxpbmtzID0gYWN0aW9uLmxpbmtzO1xyXG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCBsaW5rc307XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXJfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfVElNRVInOlxyXG5cdFx0XHRsZXQgdGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aW1lciB9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfVElNRVInOlxyXG5cdFx0XHR0aW1lciA9IGFjdGlvbi50aW1lcjtcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgdGltZXJ9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnM7IiwiaW1wb3J0IGdhbGxlcnlTbGlkZXMgZnJvbSAnLi4vZGF0YS9nYWxsZXJ5U2xpZGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGNhc2UgJ0NIT09TRV9HQUxMRVJZJzpcclxuXHRcdFx0bGV0IGdhbGxlcnkgPSBhY3Rpb24uZ2FsbGVyeTtcclxuXHRcdFx0c2xpZGVzID0gWyAuLi5nYWxsZXJ5U2xpZGVzW2dhbGxlcnldIF1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsaW5rSW5mbzogW1xyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWhvbWUnLCBcclxuXHRcdFx0cGF0aDogJy8nLCBcclxuXHRcdFx0bmFtZTogJ0hvbWUnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWdhbGxlcnknLCBcclxuXHRcdFx0cGF0aDogJy9nYWxsZXJ5JywgXHJcblx0XHRcdG5hbWU6ICdQaG90byBHYWxsZXJ5J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1hYm91dCcsIFxyXG5cdFx0XHRwYXRoOiAnL2Fib3V0JywgXHJcblx0XHRcdG5hbWU6ICdBYm91dCBCb2tlaCdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstY29udGFjdCcsIFxyXG5cdFx0XHRwYXRoOiAnL2NvbnRhY3QnLCBcclxuXHRcdFx0bmFtZTogJ0NvbnRhY3QgVXMnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLXRlc3QnLCBcclxuXHRcdFx0cGF0aDogJy90ZXN0JywgXHJcblx0XHRcdG5hbWU6ICdUZXN0IFBhZ2UnXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bW9iaWxlTWVudTogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnTU9CSUxFX0hFQURFUl9TVEFUVVMnOlxyXG5cdFx0XHRsZXQgbW9iaWxlTWVudSA9IGFjdGlvbi5tb2JpbGVNZW51XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBtb2JpbGVNZW51IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob21lX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ1NUT1JFX1dJTkRPV19XSURUSCc6XHJcblx0XHRcdGxldCB3aW5kb3dXaWR0aCA9IGFjdGlvbi53aW5kb3dXaWR0aDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHdpbmRvd1dpZHRoIH07XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93O1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF1c2VTbGlkZVNob3cgfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGN1cnJlbnRTbGlkZU5vOiAwLFxyXG5cdHBhdXNlU2xpZGVTaG93OiBmYWxzZSxcclxuXHRzaG93RmlsbXN0cmlwOiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdG9yX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX0lORk8nOlxyXG5cdFx0XHRsZXQgY3VycmVudFNsaWRlSW5mbyA9IGFjdGlvbi5jdXJyZW50U2xpZGVJbmZvO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlSW5mbyB9XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX05PJzpcclxuXHRcdFx0bGV0IGN1cnJlbnRTbGlkZU5vID0gYWN0aW9uLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm99XHJcblx0XHRjYXNlICdJTkNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0bGV0IHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gdG90YWxOb1NsaWRlcyAtIDEpe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdERUNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0dG90YWxOb1NsaWRlcyA9IGFjdGlvbi50b3RhbE5vU2xpZGVzO1xyXG5cdFx0XHRpZihjdXJyZW50U2xpZGVObyA9PSAwKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IHRvdGFsTm9TbGlkZXMgLSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vIC09IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vIH1cclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3dcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH1cclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ0xPQURfTkVXX1NMSURFUyc6XHJcblx0XHRcdGxldCBzbGlkZXMgPSBhY3Rpb24uc2xpZGVzO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVJbmZvID0gc2xpZGVzWzBdO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IDAgXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMsIGN1cnJlbnRTbGlkZUluZm8sICBjdXJyZW50U2xpZGVOb307XHJcblx0XHRjYXNlICdVTkxPQURfU0xJREVTJzpcclxuXHRcdFx0bGV0IHRlbXBTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnY3VycmVudFNsaWRlSW5mbyddO1xyXG5cdFx0XHRkZWxldGUgdGVtcFN0YXRlWydzbGlkZXMnXTtcclxuXHRcdFx0cmV0dXJuIHsgLi4udGVtcFN0YXRlIH07XHJcblx0XHRjYXNlICdTSE9XX0ZJTE1TVFJJUCc6XHJcblx0XHRcdGxldCBzaG93RmlsbXN0cmlwID0gYWN0aW9uLnNob3dGaWxtc3RyaXA7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzaG93RmlsbXN0cmlwIH1cclxuXHRcdGNhc2UgJ1NUT1JFX0ZJTE1TVFJJUF9ERUZBVUxUX1BPU0lUSU9OUyc6XHJcblx0XHRcdGxldCBmaWxtc3RyaXBEZWZhdWx0UG9zaXRpb25zID0gYWN0aW9uLmZpbG1zdHJpcERlZmF1bHRQb3NpdGlvbnM7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBmaWxtc3RyaXBEZWZhdWx0UG9zaXRpb25zfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcblx0Ly8gY3VycmVudFNsaWRlSW5mbzoge1xyXG5cdC8vIFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdC8vIFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdC8vIH0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0b3JfcmVkdWNlcnM7IiwiLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2luZGV4Lmh0bWwnLFxyXG5cdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRjb21wb25lbnQ6IEhvbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBBYm91dFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0JyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2NvbnRhY3QvOnN0YXR1cycsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IENvbnRhY3RcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZ2FsbGVyeScsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IEdhbGxlcnlcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvdGVzdCcsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IFRlc3RcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYWJvdXRfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBjb250YWN0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udGFjdF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBmb290ZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzJztcclxuaW1wb3J0IGhlYWRlcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBob21lX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycyc7XHJcbmltcG9ydCBwcm9qZWN0b3JfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9wcm9qZWN0b3JfcmVkdWNlcnMnO1xyXG5cclxuXHJcbi8vQWRkIGFkZGl0aW9uYWwgcmVkdWNlcnMgaW4gaGVyZSB0byBiZSBjb21iaW5lZCBpbnRvIG9uZSByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRhYm91dDogYWJvdXRfcmVkdWNlcnMsXHJcblx0Y29udGFjdDogY29udGFjdF9yZWR1Y2VycyxcclxuXHRmb290ZXI6IGZvb3Rlcl9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5OiBnYWxsZXJ5X3JlZHVjZXJzLFxyXG5cdGdhbGxlcnlTZWxlY3RvcjogZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzLFxyXG5cdGhlYWRlcjogaGVhZGVyX3JlZHVjZXJzLFxyXG5cdGhvbWU6IGhvbWVfcmVkdWNlcnMsXHJcblx0cHJvamVjdG9yOiBwcm9qZWN0b3JfcmVkdWNlcnMsXHJcbn0pXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG5cdHJvb3RSZWR1Y2VyLFxyXG5cdC8vIGlmIHJlZGV4IGRldnRvb2xzIGV4dGVuc2lvbiBpcyBvbiB0aGUgd2luZG93IG9iamVjdCBydW4gdGhlIGRldnRvb2xzIGZ1bmN0aW9uXHJcblx0X19pc0Jyb3dzZXJfXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaXJjbGV0eXBlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
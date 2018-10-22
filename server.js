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
			this.filmstripContainerJumpShifter(slideNo * -200);
			setTimeout(function () {
				_this3.props.updateSlideShow();
			});
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
			// let travelDistance = (document.getElementById('filmstrip__container').offsetWidth - document.getElementById('projector').offsetWidth) *-1 ;
			// //box should be a multiple of 100 filmstrip cells are 200px across. If the center is not multiple of 200 and minus 100 to shift to the next cell space.
			// let projectorBoxCenter = document.getElementById('projector').offsetWidth / 2;
			// projectorBoxCenter -= (projectorBoxCenter%200);
			// travelDistance += projectorBoxCenter; 
			// let goTo = 0;
			// if(shiftTo + projectorBoxCenter <= 0){
			// 	return
			// }
			// if(shiftTo <= travelDistance){
			// 	return goTo = travelDistance;
			// }
			// goTo = shiftTo + projectorBoxCenter;
			// console.log("travelDistance is: "+travelDistance+" projectorBoxCenter is: "+projectorBoxCenter+" goTo is: "+goTo);
			// let filmstripPosition = parseInt($('#filmstrip__container').css('left'));
			// let leftArrowPosition = parseInt($('#filmstrip__control-left').css('left'));
			// let rightArrowPosition = parseInt($('#filmstrip__control-right').css('left'));
			// console.log("filmstripPosition: "+filmstripPosition+", leftArrowPosition: "+leftArrowPosition+", rightArrowPosition: "+rightArrowPosition);
			// $('#filmstrip__container').css('left', filmstripPosition + goTo);
			// $('#filmstrip__control-left').css('left', leftArrowPosition + goTo);
			// $('#filmstrip__control-right').css('left', rightArrowPosition + goTo);
		}
	}, {
		key: 'filmstripLeft',
		value: function filmstripLeft() {
			if (parseInt($('#filmstrip__container').css('left')) === 0 || parseInt($('#filmstrip__container').css('left')) % 200 === 0) {
				this.filmstripContainerShifter(200);
				console.log(parseInt($('#filmstrip__container').css('left')));
			}
		}
	}, {
		key: 'filmstripRight',
		value: function filmstripRight() {
			if (parseInt($('#filmstrip__container').css('left')) === 0 || parseInt($('#filmstrip__container').css('left')) % 200 === 0) {
				this.filmstripContainerShifter(-200);
				console.log(parseInt($('#filmstrip__container').css('left')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInRvZ2dsZUFib3V0TW9kaWZpZXJPbiIsInRvZ2dsZUFib3V0TW9kaWZpZXJPZmYiLCIkIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZXMiLCJhYm91dCIsIkNvbXBvbmVudCIsInN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbmRleCIsImltYWdlIiwiZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlciIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsInNsaWRlTm8iLCJzdG9yZV9jdXJyZW50X3NsaWRlX25vIiwiZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIiLCJ1cGRhdGVTbGlkZVNob3ciLCJzaGlmdEJ5IiwidHJhdmVsRGlzdGFuY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0V2lkdGgiLCJwcm9wb3NlZFBvc2l0aW9uIiwicGFyc2VJbnQiLCJmaWxtc3RyaXBQb3NpdGlvbiIsImxlZnRBcnJvd1Bvc2l0aW9uIiwicmlnaHRBcnJvd1Bvc2l0aW9uIiwic2hpZnRUbyIsImZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlnaGxpZ2h0RmlsbXN0cmlwQ29udHJvbHMiLCJtYXBTbGlkZXNUb0ZpbG1zdHJpcCIsImZpbG1zdHJpcExlZnQiLCJmaWxtc3RyaXBSaWdodCIsIkZvb3RlciIsImFkZExpc3RlbmVycyIsImZvb3RlciIsInNvY2lhbE1lZGlhTGlua3MiLCJzb2NpYWxNZWRpYUxpbmtzSW5mbyIsImZvckVhY2giLCJmb250X2NvbG9yIiwiYmdfY29sb3IxIiwiYmdfY29sb3IyIiwiaG92ZXIiLCJob3Zlck9uIiwiaG92ZXJPZmYiLCJsaW5rIiwiaWNvbiIsImdhbGxlcnlBY3Rpb25zIiwiR2FsbGVyeSIsImNsb3NlR2FsbGVyeSIsImdhbGxlcnkiLCJjaG9vc2VfZ2FsbGVyeSIsInVubG9hZF9zbGlkZXMiLCJHYWxsZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5U2VsZWN0b3JMb2FkIiwiY2xlYXJJbnRlcnZhbCIsImdhbGxlcnlTZWxlY3RvciIsInRpbWVyIiwiZ2FsbGVyeVNlbGVjdG9yUmVzZXQiLCJnYWxsZXJ5U2VsZWN0b3JJZHMiLCJjb250YWluZXJJZCIsImdhbGxlcnlTZWxlY3RvcklkIiwiY291bnRlciIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3RvcmVfdGltZXIiLCJnYWxsZXJ5TmFtZSIsImhvdmVySW4iLCJob3Zlck91dCIsImNsaWNrIiwiZ29Ub0dhbGxlcnkiLCJvcGVuR2FsbGVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhlYWRlciIsInRvZ2dsZU1vYmlsZU1lbnVPdXQiLCJtb2JpbGVfaGVhZGVyX3N0YXR1cyIsInRvZ2dsZU1vYmlsZU1lbnVJbiIsImxpbmtJbmZvIiwia2V5IiwicHVyZSIsIkhvbWUiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsInNsaWRlU2hvdyIsInRvZ2dsZUhvbWVNb2RpZmllck9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNpcmNsZVR5cGUiLCJyYWRpdXMiLCJ0b2dnbGVIb21lTW9kaWZpZXJPZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFNsaWRlU2hvdyIsInN0b3JlX3dpbmRvd193aWR0aCIsImlubmVyV2lkdGgiLCJpbnRlcnZhbFRpbWVyIiwiaG9tZSIsImhvbWVTbGlkZXMiLCJpbWdTcmMiLCJjb3VudCIsInBhdXNlU2xpZGVTaG93IiwiY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSIsIndpbmRvd1dpZHRoIiwicGF1c2Vfc2xpZGVfc2hvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvYWRlciIsImxvYWRlcklkIiwiUHJvamVjdG9yIiwiZG93bkFycm93VmlzaWJpbGl0eSIsImxvYWRQcm9qZWN0b3IiLCJhdXRvUnVuUHJvamVjdG9yIiwic2hvd19maWxtc3RyaXAiLCJjdXJyZW50U2xpZGVObyIsImluY3JlbWVudF9zbGlkZSIsImRlY3JlbWVudF9zbGlkZSIsImZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyIiwic3RvcmVfY3VycmVudF9zbGlkZV9pbmZvIiwibG9hZF9uZXdfc2xpZGVzIiwiaGFsZlNlY0NvdW50ZXIiLCJ1bmRlZmluZWQiLCJuZXh0U2xpZGUiLCJwcm9qZWN0b3JCb3hXaWR0aCIsImNhbGN1bGF0ZWRXaWR0aCIsInNob3dGaWxtc3RyaXAiLCJjdXJyZW50U2xpZGVJbmZvIiwic2hpZnRQcm9qZWN0b3JDb250cm9scyIsInVuc2hpZnRQcm9qZWN0b3JDb250cm9scyIsInN0eWxlRm9yIiwicHJldmlvdXNTbGlkZSIsInByb2plY3RvckRvd25IYW5kbGVyIiwicGF1c2VCdXR0b25IYW5kbGVyIiwiU2xpZGUiLCJzZXRTdHlsZXMiLCJyZW1vdmVTdHlsZXMiLCJwaG90b0luZm8iLCJUZXN0IiwiYWRkX3Bob3RvIiwiY3VycmVudFNsaWRlcyIsImNsZWFyX3RpbWVyIiwic3RvcmVfZmlsbXN0cmlwX2RlZmF1bHRfcG9zaXRpb25zIiwidG90YWxOb1NsaWRlcyIsImZpbG1zdHJpcERlZmF1bHRQb3NpdGlvbnMiLCJnYWxsZXJ5U2xpZGVzIiwiYWN0aW9uIiwiZXZlbnRzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJpbml0aWFsU3RhdGUiLCJhYm91dF9yZWR1Y2VycyIsInB1c2giLCJjb250YWN0X3JlZHVjZXJzIiwiZm9vdGVyX3JlZHVjZXJzIiwibGlua3MiLCJnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMiLCJoZWFkZXJfcmVkdWNlcnMiLCJob21lX3JlZHVjZXJzIiwicHJvamVjdG9yX3JlZHVjZXJzIiwidGVtcFN0YXRlIiwicm9vdFJlZHVjZXIiLCJnYWxsZXJ5X3JlZHVjZXJzIiwiX19pc0Jyb3dzZXJfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Rjs7Ozs7Ozs7Ozs7QUNBQSw4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LHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1saWdodHMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLXJlZmxlY3Rpb24uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sYW5kc2NhcGUtc2hvb3QuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLWNsb3NlLXVwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWdyb3VuZC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL3N0YXJ5LWxlbnMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iZWFjaC1iYWNrZmxpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmlnLXdhdmUtc3VyZmluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vaGlnaC1qdW1wLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9raWNrLWZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL21vdG9yY3Jvc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3B1ZGRsZS1qdW1waW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NrYXRlLXBhcmsuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NraWluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zdXJmLXNwbGFzaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vdWx0aW1hdGUtc2F2ZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoLWFubm91bmNlbWVudC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtYW5kLWdyb29tLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1jbG91ZHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2ZpcnN0LWJpcnRoZGF5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0ZS1jZWxlYnJhdGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZGF5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWZyaWVuZHMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3dlZGRpbmctZGF5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9hcmNoZXMtbmF0aW9uYWwtcGFyay5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9icm9va2x5bi1icmlkZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvY2FsbS1jbG91ZHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZHVzay1pbi1hZnJpY2EuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2ZsYXRpcm9uLWJ1aWxkaW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21hcnNoLXBlaXIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21vdW50YWluLWxha2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcml2ZXItcmVmbGVjdGlvbi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBpZXIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2F0LWR1c2suanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2ZpZWxkLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9pbi1hbmQtb3V0LW9mLWZvY3VzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtYmx1ci5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1jYXN1YWwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWd1eS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAtYm9rZWguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2Fybml2YWwtbmlnaHQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvZ2lybC1yYWJiaXQtZnJpZW5kc2hpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oYXBweS1naXJsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvcmVkLWhhaXJlZC1jaGlsZC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0LWd1eS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC93b21hbi1kcmVzcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC95b3VuZy1tb25rcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnXCI7IiwiY29uc3QgY2xpZW50ID0ge1xyXG5cdHVzZXI6ICdvcnNvbjEwOEBnbWFpbC5jb20nLFxyXG5cdGlkOiAnNTU3MzQ2NzE4NjkwLWNoZDFlZjFjZTB0ampuaDE3bXVxZDAxZGpmaTZvbTVvLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcclxuXHRzZWNyZXQ6ICc2aFNGajF1ZEJsdE1YazBnSlFOaE5hOHcnLFxyXG5cdHJlZnJlc2hUb2tlbjogJzEvcm5WVlpnNGlZMjJBQkN3a2t1SmpWWThOMEFoZG5qdUtUdFRoajdwWVE5SWpNYmRhYW9Ib05NWnFibkk1aWl6OCcsXHJcblx0YWNlc3NUb2tlbjogJ3lhMjkuR2xzQkJuVFFfNWx5a0czdmZqRFZqZFUwcVF5N0NiN29COGVaOF9TbE5wODZ1bkFrUmtLWkNzSW1KZkNqd3J6b0JSYzdQRDB3Ry0wWHJaUURLa1BjR2l2Y3NCNFp3VXRZWEM3dG1RZGY2S2EwV3NxQW1YQjhqRXVhMGppaydcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyRW1haWwgPSBcImFzdGF0b24xMDhAb3V0bG9vay5jb21cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsIi8vZXhwcmVzcyBpbXBvcnRcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbi8vbWlkZGxld2FyZSBpbXBvcnRzXHJcbmltcG9ydCBleHByZXNzU3RhdGljR3ppcCBmcm9tIFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XHJcblxyXG4vL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3NoYXJlZC9zdG9yZSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3NoYXJlZC9yb3V0ZXNcIjtcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9zaGFyZWQvQXBwJztcclxuXHJcbi8vbG9jYWwgaW1wb3J0c1xyXG5pbXBvcnQgY2xpZW50LCB7IHVzZXJFbWFpbCB9IGZyb20gJy4uLy4uL29hdXRoL2NsaWVudERhdGEnO1xyXG5cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MFxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKCcvJywgZXhwcmVzc1N0YXRpY0d6aXAoXCJwdWJsaWMvXCIpKTtcclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XHJcblxyXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0bGV0IGRlc3QgPSByZXEudXJsID09ICcvaW5kZXguaHRtbCcgPyAnLycgOiByZXEudXJsO1xyXG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0gPlxyXG5cdFx0XHQ8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtkZXN0fSBjb250ZXh0PXt7fX0+XHJcblx0XHRcdFx0PEFwcCAvPiBcclxuXHRcdFx0PC9TdGF0aWNSb3V0ZXI+XHJcblx0XHQ8L1Byb3ZpZGVyPlxyXG5cdClcclxuXHJcblx0cmVzLnNlbmQoYFxyXG5cdFx0PGh0bWwgbGFuZz1cImVuLXVzXCI+XHJcblx0XHRcdDxoZWFkPlxyXG5cdFx0XHRcdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxyXG5cdFx0XHRcdDx0aXRsZT5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5IEluYy48L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj0ke3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLnBuZycpfT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4yLjAvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtaFdWamZsd0Z4TDZzTnpudGloMjdiZnhrcjI3UG1iYksvaVN2SithNCswb3dYcTc5ditsc0ZrVzU0Yk9HYmlEUVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+XHJcblx0XHRcdFx0PHNjcmlwdCBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XHJcblx0XHRcdDwvaGVhZD5cclxuXHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0PGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxyXG5cdFx0XHQ8L2JvZHk+XHJcblx0XHQ8L2h0bWw+XHJcblx0YClcclxufSlcclxuXHJcbmFwcC5wb3N0KCcvY29udGFjdCcsIChyZXEsIHJlcykgPT4ge1xyXG5cdGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuXHRcdHNlcnZpY2U6ICdnbWFpbCcsXHJcblx0XHRob3N0OiAnc210cC5nbWFpbC5jb20nLFxyXG5cdFx0YXV0aDoge1xyXG5cdFx0XHR0eXBlOiAnT0F1dGgyJyxcclxuXHRcdFx0dXNlcjogY2xpZW50LnVzZXIsXHJcblx0XHRcdGNsaWVudElkOiBjbGllbnQuaWQsXHJcblx0XHRcdGNsaWVudFNlY3JldDogY2xpZW50LnNlY3JldCxcclxuXHRcdFx0cmVmcmVzaFRva2VuOiBjbGllbnQucmVmcmVzaFRva2VuLFxyXG5cdFx0XHRhY2Nlc3NUb2tlbjogY2xpZW50LmFjY2Vzc1Rva2VuXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGxldCBtYWlsT3B0aW9ucyA9IHtcclxuXHRcdGZyb206IGAke3JlcS5ib2R5Lm5hbWV9IDwke2NsaWVudC51c2VyfT5gLFxyXG5cdFx0dG86ICdhc3RhdG9uMTA4QG91dGxvb2suY29tJyxcclxuXHRcdHN1YmplY3Q6ICdDb250YWN0IGZyb20gQm9rZWggQmVzdCBQaG90byB3ZWJzaXRlJyxcclxuXHRcdGh0bWw6ICBgPCFET0NUWVBFID5cclxuXHRcdFx0XHQ8aHRtbCBsYW5nPVwidXMtZW5cIj5cclxuXHRcdFx0XHRcdDxoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiPlxyXG5cdFx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoOyBpbml0aWFsLXNjYWxlPTEuMDsgbWF4aW11bS1zY2FsZT0xLjA7IHVzZXItc2NhbGFibGU9bm87XCI+XHJcblx0XHRcdFx0XHRcdDx0aXRsZT5Db29sIEVtYWlsIGJybzwvdGl0bGU+XHJcblx0XHRcdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdFx0XHQ8Ym9keT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDE+RW1haWwgRnJvbSAke3JlcS5ib2R5Lm5hbWV9IGF0ICR7cmVxLmJvZHkuZW1haWx9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5tZXNzc2FnZSBmcm9tICR7cmVxLmJvZHkubmFtZX0gcmVhZHM6IDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm1lc3NhZ2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPiR7cmVxLmJvZHkubmFtZX0sICR7cmVxLmJvZHkubnVtYmVyfSAke3JlcS5ib2R5LmVtYWlsfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2JvZHk+XHJcblx0XHRcdFx0PC9odG1sPmBcclxuXHR9XHJcblxyXG5cdHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyLCBpbmZvKSA9PiB7XHJcblx0XHRpZihlcnIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xyXG5cdFx0XHRyZXMucmVkaXJlY3QoJy9jb250YWN0L2ZhaWwnKTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0VtYWlsIHNlbnQnKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9zdWNjZXNzJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coJ3NlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgJytwb3J0KSk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBQcm9qZWN0b3IgZnJvbSAnLi9Qcm9qZWN0b3InO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBhYm91dEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2Fib3V0X2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBwcm9qZWN0b3JBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9uKClcclxuXHRcdC8vIHRoaXMucHJvcHMuYWN0aW9ucy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQWJvdXQgcHJvcHMgYXJlJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9mZigpXHJcblx0fVxyXG5cclxuXHR0b2dnbGVBYm91dE1vZGlmaWVyT24oKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWFib3V0Jyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5hYm91dC5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJhYm91dF9fcGFnZS1oZWFkZXJcIj5PdXIgU3Rvcnk8L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiYWJvdXRcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+RGF2aWQgQm9rZWggPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBhIHNhZ2UgbW93ZXIgZ29hdCwgcmFjY29vbnMgcmh1YmFyYiBvdXRob3VzZSBhLCBhcHBsZXMgYmVycmllcyBjb3JuLiBLaWRuZXkgYmVhbnMgb3N0cmljaCB0cnVja3MuIEluIHRoZSBzdHJhdyByYWluIGJhcnJlbHMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyB3ZWxsIGtub3duIGZvciByYWtlcyBwbG93cy4gSm9obiBEZWVyZSBiZWVzLCBwYXJzbGV5IHN3ZWV0IGNvcm4gYXQsIHBvcmt5IHBpZyBzaG92ZWxzLiB2ZXRlcmluYXJpYW4gYmx1ZSBiZXJyaWVzIGNhdHRsZSBqZWxseSBjYW5uaW5nLiBCbHVlIGJlcnJpZXMgcGlnZW9ucyBidXp6IGFuZCBiZWFuIHByYWlyaWUgZG9ncyBuYWlscyBhdCBlc3QuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gLiBBdWdlcnMgb2F0cyBoZW4gY293cGllcy4gQXBwbGVzIGR1Y2suXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5PdXIgV29yayA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIHN0cmF3LCBxdWFpbCBhIG9zdHJpY2hlcyBkb25rZXksIGhheSBob29rIGN1Y3VtYmVycy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuIFNob3ZlbHMgYXQgcmFrZXMgcGxvd3MuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gSGF5YmluZSBjYXJyb3RzIHNveWJlYW5zLCBvd2xzIGR1Y2sgcmFpc2luZyBvciwgY2hlZXAgaW4gcGxvd3MuIE91dGhvdXNlIGF0IG5haWxzIG1vd2VyLiBGb3JhZ2UgSGFydmVzdGVyLCBiZWFuIGFuZCBTaWxhZy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJhYm91dF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Bd2FyZHMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8bGk+Q3VsdGl2YXRvciBicnVzc2VsIHNwcm91dHMgaGFycm93cywgY2VsZXJ5IGRyZWFkIHdpdGgga2FsZSBhdWdlcnMgaGFycm93cy4gVmV0ZXJpbmFyaWFuIGF0IFNlZWRlciBlZ2dzIHdpdGggd2F0ZXJtZWxvbiBvc3RyaWNoZXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPkNvbyB3aXRoIHJhYmJpdHMgZWN0LiBHcmFwZXMgbmVzdCBwaXRjaCBmb3JrIGFuIHBsb3dzIG1hcGxlIHN5cnVwIHllYXJsaW5ncywgcXVpbHQgc3F1ZWFrIGRvZ2dpZXMuIExhbWIgcGlnIHJvb3N0ZXIgc2hlZXAuIFV0dGVycyBhcmUgd2VhdGhlcnZhbmUgZm9hbCBlc3QuIDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Hb2JibGUgZmVlZCwgamVsbHkgcGVwcGVycyBhdCBwbG93IGJhc2lsIHN3YXRoZXIsIGNhdCB3ZWF0aGVydmFuZSBncmFpbiB0cnVja3MsIGhvb3QgcG9ueSByb2JpbnMgcGVhY29ja3MgYW4ga2FsZS4gUm9vc3RlciBjZWxlcnkgcGluZWFwcGxlcyBmZXJ0aWxpemVyLjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGFib3V0LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0YWJvdXQsIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgYWJvdXRBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBYm91dCk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0Um91dGUsXHJcblx0UmVkaXJlY3QsXHJcblx0U3dpdGNoXHJcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbi8vUm91dGVzIGltcG9ydFxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInBhZ2Utd3JhcHBlclwiIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0XHQ8U3dpdGNoPlxyXG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDLCAuLi5yZXN0IH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRleGFjdD17ZXhhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QyB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX0gXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N3aXRjaD5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vUmVhY3QgQ29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnRzIGltcG9ydHNcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb250YWN0X2FjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdHRoaXMuY29uZmlybU1lc3NhZ2VCb3goKTtcclxuXHRcdC8vdGltZW91dCBuZWVkZWQgZm9yIHJlZGlyZWN0IHRvIHN0eWxlIG1haW4gcHJvcGVybHkuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdHRoaXMucmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQ29udGFjdCBwcm9wcyBpczogJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5tb3VudGluZyBDb250YWN0XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIHdvcmtlZCByZWRpcmVjdGluZycpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayh0cnVlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyBtYXkgbm90IGhhdmUgd29ya2VkIHNldHRpbmcgcmVkaXJlY3QgdG8gZmFsc2UnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbmZpcm1NZXNzYWdlQm94KCkge1xyXG5cdFx0Ly9jaGVja3Mgc3RhdHVzIG9mIHNlbnQgbWVzc2FnZXMgYW5kIGRpc3BsYXlzIGEgbm90aWNlIGFjY29yZGluZ2x5XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0IGNvbmZpcm1NZXNzYWdlQm94XCIpXHJcblx0XHRsZXQgc3RhdHVzID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzKXtcclxuXHRcdFx0aWYoc3RhdHVzID09PSAnc3VjY2Vzcycpe1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgU2VudCEhJywgJ0lcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nXSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBzdWNjZXNzIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgRXJyb3IhIScsICdQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiddKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgZmFpbCBcIiwgdGhpcy5wcm9wcy5jb250YWN0KTsgfSwgMTAwMCk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHR9LCA2MDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPbigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4nKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4tLWNvbnRhY3QnKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUxvYWRlclN0eWxlcygpIHtcclxuXHRcdCQoJyNsb2FkZXJfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIxJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmNvbnRhY3QucmVkaXJlY3QgPT09IHRydWUpe1xyXG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPScvY29udGFjdCcgLz5cclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4nIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMgP1xyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNvbmZpcm1fX2NvbnRhaW5lclwiIGNsYXNzTmFtZT0nY29uZmlybV9fY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbmZpcm1fX2lubmVyJz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nY29uZmlybV9faGVhZGVyJz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMF19PC9oMj5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdjb25maXJtX190ZXh0Jz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMV19PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLW91dHRlci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1pbm5lci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFjdF9faGVhZGVyJz5HZXQgSW4gVG91Y2ggV2l0aCBVczwvaDE+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5JZiB5b3UncmUgdGhpbmtpbmcgYWJvdXQgaGlyaW5nIGEgcGhvdG9ncmFwaGVyIGZvciBhIHNob290LCB3ZSB3b3VsZCBsb3ZlIHRvIGRpc2N1c3MgaXQgd2l0aCB5b3UuICBXZSBjYW4gcHJvdmlkZSBwcm9mZXNzaW9uYWwgaW5zaWdodCBhbmQgaGVscCB0byBtYWtlIHlvdXIgZHJlYW0gc2hvb3QgYSByZWFsaXR5LiAgQ29uc3VsYXRpb25zIGFyZSBjb21wbGV0ZWx5IGZyZWUuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX2FkZHJlc3MtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBBZGRyZXNzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTIzIFdvb3N0ZXIgU3QgLSBOZXcgWW9yaywgTlkgMTAwMTJcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhciBmYS1lbnZlbG9wZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBFbWFpbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdERCb2tlaEBCb2tlaEJlc3QuY29tXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtcGhvbmVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gUGhvbmUgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoMjEyKSA1NTUtNTU1NVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19tZXNzYWdlLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBjb250YWN0OiBzdGF0ZS5jb250YWN0IH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQ29udGFjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19jb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J21lc3Nlbmdlcl9fZm9ybScgbWV0aG9kPSdwb3N0JyBhY3Rpb249Jyc+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J25hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1uYW1lJyBpZD0naW5wdXROYW1lJyBwbGFjZWhvbGRlcj0nTmFtZSAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdudW1iZXInIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1udW1iZXInIGlkPSdpbnB1dE51bWJlcicgcGxhY2Vob2xkZXI9J051bWJlcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1lbWFpbCcgaWQ9J2lucHV0RW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbWVzc2FnZScgaWQ9J2lucHV0TWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UgIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgaWQ9J21lc3Nlbmdlcl9fc2VuZCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2J1dHRvbicgdmFsdWU9J1NlbmQgTWVzc2FnZScgPjwvaW5wdXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpbG1zdHJpcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJGaWxtc3RyaXAgbW91bnRlZCBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQobmFtZSkge1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQobmFtZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbWFnZSBlcnJvclwiKTtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdG1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykge1xyXG5cdFx0bGV0IG1hcHBlZFNsaWRlcyA9IHNsaWRlcy5tYXAoICh7IG5hbWUsIGltYWdlIH0sIGluZGV4KSA9PiB7IFxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYga2V5PXtgZmlsbXN0cmlwX19jZWxsLSR7bmFtZX1gfSBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NlbGxcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHsgdGhpcy5maWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKGluZGV4KX0gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0YWx0PXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCIgaWQ9XCJmaWxtc3RyaXBfX2ltYWdlLW92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e2BmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWB9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFwcGVkU2xpZGVzXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKHNsaWRlTm8pIHtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9ubyhzbGlkZU5vKTtcclxuXHRcdHRoaXMuZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIoc2xpZGVObyotMjAwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlU2xpZGVTaG93KCkgXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoc2hpZnRCeSkge1xyXG5cdFx0bGV0IHRyYXZlbERpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbG1zdHJpcF9fY29udGFpbmVyJykub2Zmc2V0V2lkdGggLWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxtc3RyaXBfX2NvbnRhaW5lcicpLm9mZnNldFdpZHRoKTtcclxuXHRcdGxldCBwcm9wb3NlZFBvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpICsgc2hpZnRCeTtcclxuXHRcdGlmKHRyYXZlbERpc3RhbmNlIDw9IDAgfHwgcHJvcG9zZWRQb3NpdGlvbiA+IDAgfHwgdHJhdmVsRGlzdGFuY2UgKyBwcm9wb3NlZFBvc2l0aW9uIDwgMCl7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0bGV0IGZpbG1zdHJpcFBvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpO1xyXG5cdFx0bGV0IGxlZnRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JykpO1xyXG5cdFx0bGV0IHJpZ2h0QXJyb3dQb3NpdGlvbiA9IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnLCBmaWxtc3RyaXBQb3NpdGlvbiArIHNoaWZ0QnkpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JywgbGVmdEFycm93UG9zaXRpb24gKyAoc2hpZnRCeSotMSkpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcsIHJpZ2h0QXJyb3dQb3NpdGlvbiArIChzaGlmdEJ5Ki0xKSk7XHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlcihzaGlmdFRvKSB7XHJcblx0XHQvLyBsZXQgdHJhdmVsRGlzdGFuY2UgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbG1zdHJpcF9fY29udGFpbmVyJykub2Zmc2V0V2lkdGggLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdG9yJykub2Zmc2V0V2lkdGgpICotMSA7XHJcblx0XHQvLyAvL2JveCBzaG91bGQgYmUgYSBtdWx0aXBsZSBvZiAxMDAgZmlsbXN0cmlwIGNlbGxzIGFyZSAyMDBweCBhY3Jvc3MuIElmIHRoZSBjZW50ZXIgaXMgbm90IG11bHRpcGxlIG9mIDIwMCBhbmQgbWludXMgMTAwIHRvIHNoaWZ0IHRvIHRoZSBuZXh0IGNlbGwgc3BhY2UuXHJcblx0XHQvLyBsZXQgcHJvamVjdG9yQm94Q2VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoIC8gMjtcclxuXHRcdC8vIHByb2plY3RvckJveENlbnRlciAtPSAocHJvamVjdG9yQm94Q2VudGVyJTIwMCk7XHJcblx0XHQvLyB0cmF2ZWxEaXN0YW5jZSArPSBwcm9qZWN0b3JCb3hDZW50ZXI7IFxyXG5cdFx0Ly8gbGV0IGdvVG8gPSAwO1xyXG5cdFx0Ly8gaWYoc2hpZnRUbyArIHByb2plY3RvckJveENlbnRlciA8PSAwKXtcclxuXHRcdC8vIFx0cmV0dXJuXHJcblx0XHQvLyB9XHJcblx0XHQvLyBpZihzaGlmdFRvIDw9IHRyYXZlbERpc3RhbmNlKXtcclxuXHRcdC8vIFx0cmV0dXJuIGdvVG8gPSB0cmF2ZWxEaXN0YW5jZTtcclxuXHRcdC8vIH1cclxuXHRcdC8vIGdvVG8gPSBzaGlmdFRvICsgcHJvamVjdG9yQm94Q2VudGVyO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ0cmF2ZWxEaXN0YW5jZSBpczogXCIrdHJhdmVsRGlzdGFuY2UrXCIgcHJvamVjdG9yQm94Q2VudGVyIGlzOiBcIitwcm9qZWN0b3JCb3hDZW50ZXIrXCIgZ29UbyBpczogXCIrZ29Ubyk7XHJcblx0XHQvLyBsZXQgZmlsbXN0cmlwUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHQvLyBsZXQgbGVmdEFycm93UG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHQvLyBsZXQgcmlnaHRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcpKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiZmlsbXN0cmlwUG9zaXRpb246IFwiK2ZpbG1zdHJpcFBvc2l0aW9uK1wiLCBsZWZ0QXJyb3dQb3NpdGlvbjogXCIrbGVmdEFycm93UG9zaXRpb24rXCIsIHJpZ2h0QXJyb3dQb3NpdGlvbjogXCIrcmlnaHRBcnJvd1Bvc2l0aW9uKTtcclxuXHRcdC8vICQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGZpbG1zdHJpcFBvc2l0aW9uICsgZ29Ubyk7XHJcblx0XHQvLyAkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCBsZWZ0QXJyb3dQb3NpdGlvbiArIGdvVG8pO1xyXG5cdFx0Ly8gJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcsIHJpZ2h0QXJyb3dQb3NpdGlvbiArIGdvVG8pO1xyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1zdHJpcExlZnQoKSB7XHJcblx0XHRpZihwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkgPT09IDAgfHwgcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpJTIwMCA9PT0gMCl7XHJcblx0XHRcdHRoaXMuZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcigyMDApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1zdHJpcFJpZ2h0KCkge1xyXG5cdFx0aWYocGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpID09PSAwIHx8IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSUyMDAgPT09IDApe1xyXG5cdFx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoLTIwMCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0aGlnaGxpZ2h0RmlsbXN0cmlwQ29udHJvbHMoKSB7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpLmFkZENsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLWxlZnQtLWhpZ2hsaWdodFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpLmFkZENsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0LS1oaWdobGlnaHRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpLnJlbW92ZUNsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLWxlZnQtLWhpZ2hsaWdodFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0LS1oaWdobGlnaHRcIik7XHJcblx0XHR9LCA1MDApO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCBzbGlkZXMgPSB0aGlzLnByb3BzLnNsaWRlcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cImZpbG1zdHJpcF9fY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250YWluZXJcIlxyXG5cdFx0XHRcdG9uTW91c2VFbnRlcj17ICgpID0+IHRoaXMuaGlnaGxpZ2h0RmlsbXN0cmlwQ29udHJvbHMoKX0gXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IHNsaWRlcyA/IHRoaXMubWFwU2xpZGVzVG9GaWxtc3RyaXAoc2xpZGVzKSA6IG51bGwgfVxyXG5cdFx0XHRcdDxzcGFuIGlkPVwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlNoaWZ0IGZpbG1zdHJpcCB0byB0aGUgcmlnaHRcIiBcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsbXN0cmlwTGVmdCgpfT5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1zcnRcIj5maWxtc3RyaXAgbGVmdCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTaGlmdCBmaWxtc3RyaXAgdG8gdGhlIGxlZnRcIiBcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsbXN0cmlwUmlnaHQoKX0+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIHJpZ2h0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIiBpZD1cImZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgcHJvamVjdG9yOiBzdGF0ZS5wcm9qZWN0b3IgfSB9O1xyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEZpbG1zdHJpcCk7ICIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIkZvb3RlciBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVycyh0aGlzLnByb3BzLmZvb3Rlci5zb2NpYWxNZWRpYUxpbmtzKTtcclxuXHR9XHJcblxyXG5cdC8vY2hlY2sgdG8gc2VlIGlmIHRoZXNlIGNhbiBiZSBhZGRlZCBkaXJlY3RseSBpbmxpbmUgZHVyaW5nIHRoZSBpbml0aWFsIG1hcHBpbmcgb2YgdGhlIFNvY2lhbCBNZWRpYWwgTGlua3MgaW4gdGhlIEpTWFxyXG5cdGFkZExpc3RlbmVycyhzb2NpYWxNZWRpYUxpbmtzSW5mbykge1xyXG5cdFx0c29jaWFsTWVkaWFMaW5rc0luZm8uZm9yRWFjaCggKHsgZm9udF9jb2xvciwgbmFtZSwgYmdfY29sb3IxLCBiZ19jb2xvcjIgfSkgPT4ge1xyXG5cdFx0XHQkKGAjJHtuYW1lfS1ob3Zlci1ib3hgKS5ob3ZlcigoKSA9PiB0aGlzLmhvdmVyT24oYCMke25hbWV9LXNvY2lhbGAsIGZvbnRfY29sb3IsIGJnX2NvbG9yMSwgYmdfY29sb3IyKSwgKCkgPT4gdGhpcy5ob3Zlck9mZihgIyR7bmFtZX0tc29jaWFsYCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRob3Zlck9uKGlkLCBmb250X2NvbG9yLCBiZ19jb2xvcjEsIGJnX2NvbG9yMikge1xyXG5cdFx0JChpZCkuY3NzKCdjb2xvcicsIGZvbnRfY29sb3IpO1xyXG5cdFx0JChpZCkuY3NzKCdiYWNrZ3JvdW5kJywgYGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHtiZ19jb2xvcjF9LCAke2JnX2NvbG9yMn0pYCk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluay0taG92ZXInKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rJyk7XHJcblx0fVxyXG5cclxuXHRob3Zlck9mZihpZCkge1xyXG5cdFx0JChpZCkuY3NzKCdjb2xvcicsICd3aGl0ZScpO1xyXG5cdFx0JChpZCkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApKScpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmsnKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rLS1ob3ZlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2JvZHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3RcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+QXJ0aXN0PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hcnRpc3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdERhdmlkIEJva2VoIGZvdW5kZXIgb2YgQm9rZWggQmVzdCBQaG90b2dyYXBoeSwgSXMgYW4gYXdhcmQgd2lubmluZyBwaG90b2dyYXBoZXIgd2l0aCBvdmVyIDggeWVhcnMgb2YgZXhwZXJpZW5jZS4gTGVhcm4gbW9yZSBhYm91dCBEYXZpZCBhbmQgQm9rZWggQmVzdCBQaG90b2dyYXBoeSBcclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGlkPVwiZm9vdGVyX19hcnRpc3QtbGlua1wiIGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0LWxpbmtcIiB0bz1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aT4gaGVyZS4gPC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHk8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzcy1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhZGRyZXNzIGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4xMjMgV29vc3RlciBTdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+IE5ldyBZb3JrLCBOWSAxMDAxMjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6MS0yMTItNTU1LTU1NTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4oMjEyKSA1NTUtNTU1NTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWxcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+U29jaWFsIE1lZGlhPC9oND5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyLnNvY2lhbE1lZGlhTGlua3MubWFwKCh7IG5hbWUsIGxpbmsgLCBpY29ufSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YCR7bmFtZX0tc29jaWFsYH0gaWQ9e2Ake25hbWV9LWhvdmVyLWJveGB9IGNsYXNzTmFtZT0nZm9vdGVyX19zb2NpYWwtaG92ZXItYm94Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWwtc3J0XCI+e25hbWV9PC9iPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgJHtpY29ufSBmb290ZXJfX3NvY2lhbC1saW5rYH0gaWQ9e2Ake25hbWV9LXNvY2lhbGB9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRpdGxlPXtuYW1lfT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2Jhc2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fYmFzZS10ZXh0XCI+JmNvcHk7IEJva2VoIEJlc3QgUGhvdG9ncmFwaHkgLSBOZXcgWW9yaywgTlk8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRmb290ZXI6IHN0YXRlLmZvb3RlclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMpKEZvb3Rlcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGdhbGxlcnlBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5X2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBwcm9qZWN0b3JBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBHYWxsZXJ5U2VsZWN0b3IgZnJvbSAnLi9HYWxsZXJ5U2VsZWN0b3InO1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbiBtb3VudCBHYWxsZXJ5IHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdGNvbnNvbGUubG9nKCk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9uIHVwZGF0ZSBHYWxsZXJ5IHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5jbG9zZUdhbGxlcnkoKTtcclxuXHR9XHJcblxyXG5cclxuXHRjbG9zZUdhbGxlcnkoKSB7XHJcblx0XHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpKXtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHR9XHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHR9XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBzbGlkZXMgPSB0aGlzLnByb3BzLmdhbGxlcnkuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBpZD1cIm1haW5cIj5cclxuXHRcdFx0XHQ8R2FsbGVyeVNlbGVjdG9yIGNob29zZV9nYWxsZXJ5PXsgdGhpcy5wcm9wcy5hY3Rpb25zLmNob29zZV9nYWxsZXJ5IH0gdW5sb2FkX3NsaWRlcz17IHRoaXMucHJvcHMuYWN0aW9ucy51bmxvYWRfc2xpZGVzIH0vPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZSBHYWxsZXJ5XCIgb25DbGljaz17ICgpID0+IHRoaXMuY2xvc2VHYWxsZXJ5KCkgfT5cclxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJnYWxsZXJ5X19jbG9zZS1zcnRcIj5DbG9zZSBHYWxsZXJ5PC9iPlxyXG5cdFx0XHRcdFhcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIgaWQ9XCJnYWxsZXJ5X19pbWFnZXNcIj5cclxuXHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiZ2FsbGVyeVwifSBzbGlkZXM9e3NsaWRlc30vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGdhbGxlcnksIHByb2plY3RvciB9ID0gc3RhdGU7XHJcblx0cmV0dXJuIHsgXHJcblx0XHRnYWxsZXJ5LCBcclxuXHRcdHByb2plY3RvciBcclxuXHR9OyBcclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcbiBcdFx0YWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKE9iamVjdC5hc3NpZ24oe30sIGdhbGxlcnlBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5U2VsZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG4vL2pRdWVyeSBpbXBvcnRcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5nYWxsZXJ5U2VsZWN0b3JMb2FkKCk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0dhbGxlcnlTZWxlY3RvciBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5nYWxsZXJ5U2VsZWN0b3IudGltZXIpO1xyXG5cdFx0dGhpcy5nYWxsZXJ5U2VsZWN0b3JSZXNldCgpO1xyXG5cdH1cclxuXHJcblx0Ly9zYXZlIHRpbWVyIHRvIHN0YXRlIHRvIGNsZWFyIG9uIHVubW91bnQgc28gdGhhdCB0aGUgdGltZXIgaXMgY2xlYXJlZCBldmVuIGlmIHBhZ2UgaXMgdW5tb3VudGVkIG1pZCBsb2FkXHJcblx0Z2FsbGVyeVNlbGVjdG9yTG9hZCgpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRsZXQgY291bnRlciA9IDA7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHQkKGdhbGxlcnlTZWxlY3Rvcklkc1tjb3VudGVyXS5jb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJyk7XHJcblx0XHRcdCQoZ2FsbGVyeVNlbGVjdG9ySWRzW2NvdW50ZXJdLmNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRjb3VudGVyKytcclxuXHRcdFx0aWYoY291bnRlciA+PSBnYWxsZXJ5U2VsZWN0b3JJZHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdH1cclxuXHRcdH0sIDUwMCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3RpbWVyKHRpbWVyKTtcclxuXHR9XHJcblxyXG5cdGdhbGxlcnlTZWxlY3RvclJlc2V0KCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcklkcy5mb3JFYWNoKCAoeyBjb250YWluZXJJZCB9KSA9PiB7XHJcblx0XHRcdGlmKCQoY29udGFpbmVySWQpLmhhc0NsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpKSB7XHJcblx0XHRcdFx0JChjb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXInKTtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHQvL3B1dCBsaXN0ZW5lcnMgZGlyZWN0bHkgb24gdG8gdGhlIGh0bWwgdGFnc1xyXG5cdGFkZExpc3RlbmVycygpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIiwgZ2FsbGVyeU5hbWU6IFwiYWN0aW9uXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwiLCBnYWxsZXJ5TmFtZTogXCJldmVudHNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCIsIGdhbGxlcnlOYW1lOiBcImxhbmRzY2FwZVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIiwgZ2FsbGVyeU5hbWU6IFwicG9ydHJhaXRcIn1cclxuXHRcdF07XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3JJZHMuZm9yRWFjaCggKHsgY29udGFpbmVySWQsIGdhbGxlcnlTZWxlY3RvcklkLCBnYWxsZXJ5TmFtZSB9KSA9PiB7XHJcblx0XHRcdCQoY29udGFpbmVySWQpLmhvdmVyKCgpID0+IHRoaXMuaG92ZXJJbihnYWxsZXJ5U2VsZWN0b3JJZCksICgpID0+IHRoaXMuaG92ZXJPdXQoZ2FsbGVyeVNlbGVjdG9ySWQpKTtcclxuXHRcdFx0JChjb250YWluZXJJZCkuY2xpY2soKCkgPT4gdGhpcy5nb1RvR2FsbGVyeShnYWxsZXJ5TmFtZSkpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRnb1RvR2FsbGVyeShnYWxsZXJ5KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImNsaWNrZWQgZ29Ub0dhbGxlcnkgb24gXCIrIGdhbGxlcnkpO1xyXG5cdFx0dGhpcy5wcm9wcy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHR0aGlzLnByb3BzLmNob29zZV9nYWxsZXJ5KGdhbGxlcnkpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBcclxuXHRcdFx0dGhpcy5vcGVuR2FsbGVyeSgpOyBcclxuXHRcdFx0Ly8gdGhpcy5wcm9wcy5nYWxsZXJ5LnNsaWRlc1swXTtcclxuXHRcdH0sIDUwKTtcclxuXHR9XHJcblxyXG5cdG9wZW5HYWxsZXJ5KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIG9wZW4gdGhlIGdhbGxlcnlcIik7XHJcblx0XHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluXCIpKXtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlcy1jbG9zZWRcIik7XHJcblx0XHR9XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogJChcIiNtYWluXCIpLm9mZnNldCgpLnRvcFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sMTUwMCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGNsb3NlR2FsbGVyeSgpIHtcclxuXHQvLyBcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW4tLWdhbGxlcnlcIikpe1xyXG5cdC8vIFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdC8vIFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdC8vIFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIik7XHJcblx0Ly8gXHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cclxuXHRob3ZlckluKGlkKSB7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1ob3ZlcicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0tc2xpZGUtaW4nKTtcclxuXHR9XHJcblxyXG5cclxuXHRob3Zlck91dChpZCkge1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0tc2xpZGUtaW4nKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLWhvdmVyJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBBY3Rpb24gR2FsbGVyeVwiPlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18xXCI+XHJcblx0XHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICA8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5BY3Rpb248L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgRXZlbnRzIEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMlwiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+RXZlbnRzPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIExhbmRzY2FwZSBHYWxsZXJ5XCI+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzNcIj5cclxuXHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICBcdDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkxhbmRzY2FwZTwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBQb3J0cmFpdCBHYWxsZXJ5XCI+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzRcIj5cclxuXHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICBcdDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPlBvcnRhaXQ8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9yOiBzdGF0ZS5nYWxsZXJ5U2VsZWN0b3JcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShHYWxsZXJ5U2VsZWN0b3IpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9oZWFkZXJfYWN0aW9ucyc7XHJcblxyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdG1vYmlsZU1lbnU6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5oYW5kbGVNZW51Q2xpY2sgPSB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdoZWFkZXIgcHJvcHMgYXJlICcsIHRoaXMucHJvcHMpO1xyXG5cclxuXHR9XHJcblxyXG5cdGhhbmRsZU1vdXNlTGVhdmUoKSB7XHJcblx0XHRpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSB0cnVlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51T3V0KCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXMoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aGFuZGxlTWVudUNsaWNrKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ21vYmlsZU1lbnUgY2xpY2tlZCcpO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gdHJ1ZSl7XHJcblx0XHRcdHRoaXMudG9nZ2xlTW9iaWxlTWVudU91dCgpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKGZhbHNlKTtcclxuXHRcdH0gZWxzZSBpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMudG9nZ2xlTW9iaWxlTWVudUluKCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXModHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b2dnbGVNb2JpbGVNZW51SW4oKSB7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdi0tc2xpZGUtaW4nKTtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2Jyk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVNb2JpbGVNZW51T3V0KCkge1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYnKTtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2LS1zbGlkZS1pbicpO1xyXG5cdH1cclxuIFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIiBvbk1vdXNlTGVhdmU9eygpPT4gdGhpcy5oYW5kbGVNb3VzZUxlYXZlKCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbGlua1wiIGlkPVwiaGVhZGVyX19icmFuZC1saW5rXCIgZXhhY3QgdG89XCIvXCIgdGl0bGU9XCJCb2tlaCBQaG90b2dyYXBoeSBJbmMuXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1sb2dvXCIgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnXCIpfSBhbHQ9XCJCb2tlaCBQaG90b2dyYXBoeSBJbmMuIGxvZ29cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLW5hbWVcIj5Cb2tlaCBQaG90b2dyYXBoeTwvcD5cclxuXHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLW1lbnUtaWNvbiBmYXMgZmEtYmFyc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTWVudUNsaWNrKCl9PjwvaT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2XCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGVyLmxpbmtJbmZvLm1hcCgoeyBrZXksIHBhdGgsIG5hbWUgfSkgPT4gPGxpIGtleT17a2V5fT4gPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rc1wiIGV4YWN0IHRvPXtwYXRofT57bmFtZX08L05hdkxpbms+PC9saT4pfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0XHQ8bmF2IGlkPVwiaGVhZGVyX19tb2JpbGUtbmF2XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbmF2XCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbGluay1saXN0XCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmhlYWRlci5saW5rSW5mby5tYXAoKHsga2V5LCBwYXRoLCBuYW1lIH0pID0+IDxsaSBrZXk9e2Btb2JpbGUtJHtrZXl9YH0+IDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLWxpbmtzXCIgZXhhY3QgdG89e3BhdGh9PntuYW1lfTwvTmF2TGluaz48L2xpPil9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgaGVhZGVyOiBzdGF0ZS5oZWFkZXIgfSB9XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7IHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzLCBudWxsLCB7cHVyZTpmYWxzZX0pKEhlYWRlcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vQ2lyY2xlVHlwZSBpbXBvcnRcclxuaW1wb3J0IENpcmNsZVR5cGUgZnJvbSAnY2lyY2xldHlwZSc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvaG9tZV9hY3Rpb25zJztcclxuXHJcbi8vRGF0YSBpbXBvcnRzXHJcbmltcG9ydCBob21lU2xpZGVzIGZyb20gJy4vZGF0YS9ob21lU2xpZGVzJztcclxuXHJcbi8valF1ZXJ5IGltcG9ydFxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoID0gdGhpcy51cGRhdGVXaW5kb3dXaWR0aC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnNsaWRlU2hvdygpO1xyXG5cdFx0dGhpcy50b2dnbGVIb21lTW9kaWZpZXJPbigpO1xyXG5cdFx0dGhpcy51cGRhdGVXaW5kb3dXaWR0aCgpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93V2lkdGgpO1xyXG5cdFx0bmV3IENpcmNsZVR5cGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVfX3dlbGNvbWUtdGV4dCcpKS5yYWRpdXMoNjAwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgY29uc29sZS5sb2coJ0hvbWUgcHJvcHMgYXJlOiAnLHRoaXMucHJvcHMpOyB9LCAxNTAwICk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVW5tb3VudGVkIENvbXBvbmVudFwiKTtcclxuXHRcdHRoaXMudG9nZ2xlSG9tZU1vZGlmaWVyT2ZmKCk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dXaWR0aCk7XHJcblx0XHR0aGlzLnN0b3BTbGlkZVNob3coKTtcclxuXHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIFwiXCIpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlSG9tZU1vZGlmaWVyT24oKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1ob21lJyk7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVIb21lTW9kaWZpZXJPZmYoKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1ob21lJyk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXaW5kb3dXaWR0aCgpIHtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfd2luZG93X3dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHR9XHJcblxyXG5cclxuXHRzbGlkZVNob3coKSB7XHJcblx0XHRsZXQgeyBpbnRlcnZhbFRpbWVyIH0gPSB0aGlzLnByb3BzLmhvbWU7XHJcblx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aG9tZVNsaWRlc1swXS5pbWdTcmN9KWApO1xyXG5cdFx0Ly9hZGQgZmxhc2gtaW4gY2xhc3NcclxuXHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpO1xyXG5cdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXItLWZsYXNoLWluXCIpO1xyXG5cdFx0Ly9yZW1vdmUgaG9tZV9fZmlsdGVyLWJveCBjbGFzc1xyXG5cdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTtcclxuXHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpO1xyXG5cdFx0bGV0IGNvdW50ID0gMVxyXG5cdFx0Y29uc29sZS5sb2coJ3NsaWRlc2hvdyBzdGFydGluZycpO1xyXG5cdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoICgpPT4ge1xyXG5cdFx0XHRpZihjb3VudCA9PSBob21lU2xpZGVzLmxlbmd0aCl7XHJcblx0XHRcdFx0Y291bnQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBpbWFnZSA9IGhvbWVTbGlkZXNbY291bnRdLmltZ1NyYztcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5ob21lLnBhdXNlU2xpZGVTaG93ID09IGZhbHNlKXtcclxuXHRcdFx0XHRjb3VudCsrXHJcblx0XHRcdFx0Ly9hZGQgaG9tZV9fZmlsdGVyLWJveCBjbGFzc1xyXG5cdFx0XHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3hcIik7XHJcblx0XHRcdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7XHJcblx0XHRcdFx0Ly9yZW1vdmUgZmxhc2gtaW4gY2xhc3NcclxuXHRcdFx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTtcclxuXHRcdFx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7XHJcblx0XHRcdFx0Ly9hZGQgZmxhc2gtaW4gY2xhc3MgYWdhaW4gc28gdGhhdCB0aGUgZWZmZWN0IHN0YXJ0cyBvdmVyXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7ICQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXItLWZsYXNoLWluXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQvL3JlbW92ZSBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7ICQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3hcIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTsgfSwgNSk7XHJcblx0XHRcdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybCgke2ltYWdlfSlgKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnY291bnQrKyBwYXVzZSBpczogJywgdGhpcy5wcm9wcy5ob21lLnBhdXNlU2xpZGVTaG93KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBjb3VudCA9IHRoaXMuY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZShjb3VudCk7XHJcblx0XHRcdHRoaXMuY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSgpO1xyXG5cdFx0fSwgODUwMCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3RpbWVyKHRpbWVyKTtcclxuXHRcdGNvbnNvbGUubG9nKCdzdG9yZWQgaW50ZXJ2YWxUaW1lciBpcyAnK2ludGVydmFsVGltZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoKSB7XHJcblx0XHRsZXQgeyB3aW5kb3dXaWR0aCwgcGF1c2VTbGlkZVNob3cgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHRcdGlmKHdpbmRvd1dpZHRoIDwgNTc2KXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncGF1c2VTbGlkZVNob3dDaGVjayB3aW5kb3cgdG9vIHNtYWxsIHN0b3BwZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0XHR9XHJcblx0XHRpZih3aW5kb3dXaWR0aCA+PSA1NzYpe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncGF1c2VTbGlkZVNob3dDaGVjayB3aW5kb3cgYmlnIGVub3VnaCBzdGFydGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZShjb3VudCkge1xyXG5cdC8vIFx0bGV0IHsgd2luZG93V2lkdGgsIHBhdXNlU2xpZGVTaG93IH0gPSB0aGlzLnByb3BzLmhvbWU7XHJcblx0Ly8gXHRpZih3aW5kb3dXaWR0aCA8IDU3Nil7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIHdpbmRvdyB0b28gc21hbGwgc3RvcHBlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHQvLyBcdFx0cmV0dXJuIGNvdW50XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHRpZih3aW5kb3dXaWR0aCA+PSA1NzYpe1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygnY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSB3aW5kb3cgYmlnIGVub3VnaCBzdGFydGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdC8vIFx0XHRyZXR1cm4gY291bnQrPTFcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cclxuXHRzdG9wU2xpZGVTaG93KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2NsZWFyaW5nIGludGVydmFsVGltZXIgJyt0aGlzLnByb3BzLmhvbWUuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMuaG9tZS5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJtYWluXCIgPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJob21lX19maWx0ZXItYm94XCIgY2xhc3NOYW1lPVwiaG9tZV9fZmlsdGVyLWJveFwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9fd2VsY29tZVwiPlxyXG5cdFx0XHRcdFx0PGgxIGlkPVwiaG9tZV9fd2VsY29tZS10ZXh0XCIgY2xhc3NOYW1lPVwiaG9tZV9fd2VsY29tZS10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdEJva2VoIEJlc3QgUGhvdG9ncmFwaHlcclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8aDEgaWQ9XCJob21lX193ZWxjb21lLXRleHQtbW9iaWxlXCIgY2xhc3NOYW1lPVwiaG9tZV9fd2VsY29tZS10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdEJva2VoIEJlc3QgUGhvdG9ncmFwaHlcclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRob21lOiBzdGF0ZS5ob21lXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRlciA9IChwcm9wcykgPT4ge1xyXG5cdHJldHVybihcclxuXHRcdDxkaXYgaWQ9e3Byb3BzLmxvYWRlcklkfSBjbGFzc05hbWU9XCJsb2FkZXJfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHQ8aW1nIGlkPVwibG9nby1sb2FkZXIxXCIgY2xhc3NOYW1lPVwibG9hZGVyX19sb2dvXCIgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZycpfT48L2ltZz5cclxuXHRcdFx0PGltZyBpZD1cImxvZ28tbG9hZGVyMlwiIGNsYXNzTmFtZT1cImxvYWRlcl9fbG9nb1wiIHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMi5zdmcnKX0+PC9pbWc+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xyXG5pbXBvcnQgRmlsbXN0cmlwIGZyb20gJy4vRmlsbXN0cmlwJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBQcm9qZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuZG93bkFycm93VmlzaWJpbGl0eSgpO1xyXG5cdFx0dGhpcy5wcm9wcy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRQcm9qZWN0b3IoKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmF1dG9SdW5Qcm9qZWN0b3IoKTtcclxuXHRcdH0sMTAwKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJQcm9qZWN0b3IgcHJvcHMgYXJlIFwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9uIHVwZGF0ZSBQcm9qZWN0b3IgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLnByb2plY3Rvci5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdHRoaXMucHJvcHMuc2hvd19maWxtc3RyaXAoZmFsc2UpO1xyXG5cdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfY29udGFpbmVyLS1zbGlkZS1pblwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX2NvbnRhaW5lclwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRuZXh0U2xpZGUoKSB7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVObywgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMucHJvcHMuaW5jcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMubGVuZ3RoKTtcclxuXHRcdC8vZGVsYXllZCBzbyB0aGF0IHJlZHV4IGhhcyB0aW1lIHRvIHVwZGF0ZSBzdG9yZSBmcm9tIGluY3JlbWVudF9zbGlkZSgpXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMudXBkYXRlU2xpZGVTaG93KCkgfSwgNTApO1xyXG5cdH1cclxuXHJcblxyXG5cdHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVObywgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMucHJvcHMuZGVjcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMubGVuZ3RoKTtcclxuXHRcdC8vZGVsYXllZCBzbyB0aGF0IHJlZHV4IGhhcyB0aW1lIHRvIHVwZGF0ZSBzdG9yZSBmcm9tIGRlY3JlbWVudF9zbGlkZSgpXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMudXBkYXRlU2xpZGVTaG93KCkgfSwgNTApO1xyXG5cdH1cclxuXHJcblxyXG5cdHVwZGF0ZVNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IHNsaWRlcywgY3VycmVudFNsaWRlTm8gfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiB1cGRhdGVTbGlkZVNob3cgcHJvcHMgYXJlOiBcIiwgdGhpcy5wcm9wcyk7XHJcblx0XHR0aGlzLmZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyKCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyhzbGlkZXNbY3VycmVudFNsaWRlTm9dKTtcclxuXHR9XHJcblxyXG5cclxuXHRsb2FkUHJvamVjdG9yKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5sb2FkX25ld19zbGlkZXModGhpcy5wcm9wcy5zbGlkZXMpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBcclxuXHRcdFx0dGhpcy51cGRhdGVTbGlkZVNob3coKTsgXHJcblx0XHR9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0YXV0b1J1blByb2plY3RvcigpIHtcclxuXHRcdGxldCBoYWxmU2VjQ291bnRlciA9IDA7XHJcblx0XHRsZXQgaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzID09PSB1bmRlZmluZWQpe1xyXG5cdFx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGhhbGZTZWNDb3VudGVyICs9IDUwMDtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3cgPT0gZmFsc2UgJiYgaGFsZlNlY0NvdW50ZXIgPj0gNjUwMCl7XHJcblx0XHRcdFx0dGhpcy5uZXh0U2xpZGUoKTtcclxuXHRcdFx0XHRoYWxmU2VjQ291bnRlciA9IDA7XHJcblx0XHRcdH1cclxuXHRcdH0sNTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0cGF1c2VCdXR0b25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3c7XHJcblx0XHRpZihwYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGRvd25BcnJvd1Zpc2liaWxpdHkoKSB7XHJcblx0XHQvL2lmIGNvbnRhaW5lciBob3VzaW5nIHRoZSBwcm9qZWN0b3IgaXMgdG9vIHNtYWxsIGRvbid0IGdpdmUgdGhlIG9wdGlvbiB0byBicmluZyB1cCB0aGUgcGhvdG8gc3RyaXBcclxuXHRcdGxldCBwcm9qZWN0b3JCb3hXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGlmKHByb2plY3RvckJveFdpZHRoIDwgNzUwKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHByb2plY3RvckRvd25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IGNhbGN1bGF0ZWRXaWR0aCA9IHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcy5sZW5ndGgqMjAwK1wicHhcIjtcclxuXHRcdHRoaXMucHJvcHMuc2hvd19maWxtc3RyaXAoIXRoaXMucHJvcHMucHJvamVjdG9yLnNob3dGaWxtc3RyaXApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyAkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ3dpZHRoJywgY2FsY3VsYXRlZFdpZHRoKSB9LCAyNSk7XHJcblx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9fY29udGFpbmVyXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKSB7XHJcblx0XHQvL21ha2Ugc3VyZSBtb2RpZmllZCBjbGFzcyBpcyBub3Qgb24gYmVmb3JlIHRvZ2dsaW5nXHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG9uIGJlZm9yZSB0b2dnbGluZyBpdCBvZmZcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS0tc2hpZnRcIik7XHJcblx0XHRcdC8vSWYgY29udHJvbC1kb3duIGlzIGluIHVzZSBieSB0aGUgZmlsbXN0cmlwIGxlYXZlIGl0IGFsb25lXHJcblx0XHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBPdmVybGF5U2hpZnRlcigpIHtcclxuXHRcdGxldCBjdXJyZW50U2xpZGVObyA9IHRoaXMucHJvcHMucHJvamVjdG9yLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIikuY3NzKCdsZWZ0JywgY3VycmVudFNsaWRlTm8qMjAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZUluZm8sIHNob3dGaWxtc3RyaXAsIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJwcm9qZWN0b3JcIiBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JcIiBcclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX0gXHJcblx0XHRcdFx0b25Nb3VzZUxlYXZlPXsgKCkgPT4gdGhpcy51bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHtjdXJyZW50U2xpZGVJbmZvID8gXHJcblx0XHRcdFx0XHQ8U2xpZGUgcGhvdG9JbmZvPXtjdXJyZW50U2xpZGVJbmZvfSBcclxuXHRcdFx0XHRcdFx0c3R5bGVGb3I9e3RoaXMucHJvcHMuc3R5bGVGb3J9IFxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0e3NsaWRlcyA/XHJcblx0XHRcdFx0XHQ8RmlsbXN0cmlwIHNsaWRlcz17c2xpZGVzfSBcclxuXHRcdFx0XHRcdFx0dXBkYXRlU2xpZGVTaG93PXsgKCkgPT4gdGhpcy51cGRhdGVTbGlkZVNob3coKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiIHRpdGxlPVwiU2VlIHByZXZpb3VzIHBob3RvXCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+bGVmdCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcmV2aW91c1NsaWRlKCl9ID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIgdGl0bGU9XCJTZWUgbmV4dCBwaG90b1wiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnJpZ2h0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgb25DbGljaz17KCkgPT4gdGhpcy5uZXh0U2xpZGUoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIgdGl0bGU9XCJTZWUgYWxsIHBob3RvcyBpbiBjdXJyZW50IGdhbGxlcnlcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5kb3duIGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWRvd25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb2plY3RvckRvd25IYW5kbGVyKCl9PjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiB0aXRsZT1cIlBhdXNlIHNsaWRlIHNob3dcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5wYXVzZSBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYXVzZS1jaXJjbGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhdXNlQnV0dG9uSGFuZGxlcigpfT48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgcHJvamVjdG9yOiBzdGF0ZS5wcm9qZWN0b3J9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKFByb2plY3Rvcik7ICIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zZXRTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5yZW1vdmVTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdHNldFN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHN0eWxlRm9yID0gdGhpcy5wcm9wcy5zdHlsZUZvcjtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIGZyYW1lXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lLS0ke3N0eWxlRm9yfWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgcGhvdG9cclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG8tLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTdHlsZXMoKSB7XHJcblx0XHRsZXQgeyBuYW1lIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdGxldCB7IHN0eWxlRm9yIH0gPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWVgKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90b2ApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlTG9hZGVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VFcnJvcmVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCB7IG5hbWUsIGltYWdlIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD17YCR7bmFtZX0tc2xpZGVfX2ZyYW1lYH0gY2xhc3NOYW1lPVwic2xpZGVfX2ZyYW1lXCI+XHJcblx0XHRcdFx0PGltZyBpZD17YCR7bmFtZX0tc2xpZGVfX3Bob3RvYH0gY2xhc3NOYW1lPVwic2xpZGVfX3Bob3RvXCIgXHJcblx0XHRcdFx0XHRzcmM9e2ltYWdlfSAgXHJcblx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlSW1hZ2VMb2FkZWQuYmluZCh0aGlzKX0gXHJcblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2ltZz5cclxuXHRcdFx0XHQ8TG9hZGVyIGxvYWRlcklkPXtcInNsaWRlX19sb2FkZXJcIn0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PHA+TXkgTG9hZGVyIGlzbid0IGl0IGdyZWF0PzwvcD5cclxuXHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiLCJleHBvcnQgZnVuY3Rpb24gYWRkX3Bob3RvKG5hbWUsIGltYWdlLCBjdXJyZW50U2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdBRERfUEhPVE8nLFxyXG5cdFx0Y3VycmVudFNsaWRlcyxcclxuXHRcdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9tZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX01FU1NBR0UnLFxyXG5cdFx0bWVzc2FnZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0X2NoZWNrKHJlZGlyZWN0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdSRURJUkVDVF9DSEVDSycsXHJcblx0XHRyZWRpcmVjdFxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcih0aW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0dGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcl90aW1lcigpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NMRUFSX1RJTUVSJyxcclxuXHRcdHRpbWVyOiBmYWxzZVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlX2dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hPT1NFX0dBTExFUlknLFxyXG5cdFx0Z2FsbGVyeVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb2JpbGVfaGVhZGVyX3N0YXR1cyhtb2JpbGVNZW51KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdNT0JJTEVfSEVBREVSX1NUQVRVUycsXHJcblx0XHRtb2JpbGVNZW51XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV93aW5kb3dfd2lkdGgod2luZG93V2lkdGgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1dJTkRPV19XSURUSCcsXHJcblx0XHR3aW5kb3dXaWR0aFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKGN1cnJlbnRTbGlkZUluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX0NVUlJFTlRfU0xJREVfSU5GTycsXHJcblx0XHRjdXJyZW50U2xpZGVJbmZvXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9ubyhjdXJyZW50U2xpZGVObykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9OTycsXHJcblx0XHRjdXJyZW50U2xpZGVOb1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgdG90YWxOb1NsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnSU5DUkVNRU5UX1NMSURFJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vLFxyXG5cdFx0dG90YWxOb1NsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgdG90YWxOb1NsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnREVDUkVNRU5UX1NMSURFJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vLFxyXG5cdFx0dG90YWxOb1NsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcihpbnRlcnZhbFRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHRpbnRlcnZhbFRpbWVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZF9uZXdfc2xpZGVzKHNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9BRF9ORVdfU0xJREVTJyxcclxuXHRcdHNsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZF9zbGlkZXMoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdVTkxPQURfU0xJREVTJyxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93X2ZpbG1zdHJpcChzaG93RmlsbXN0cmlwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTSE9XX0ZJTE1TVFJJUCcsXHJcblx0XHRzaG93RmlsbXN0cmlwXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfZmlsbXN0cmlwX2RlZmF1bHRfcG9zaXRpb25zKGZpbG1zdHJpcERlZmF1bHRQb3NpdGlvbnMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX0ZJTE1TVFJJUF9ERUZBVUxUX1BPU0lUSU9OUycsXHJcblx0XHRmaWxtc3RyaXBEZWZhdWx0UG9zaXRpb25zXHJcblx0fVxyXG59IiwiY29uc3QgZ2FsbGVyeVNsaWRlcyA9IHtcclxuXHRhY3Rpb246IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkYXlsaWdodFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhdC10aGUtdHJhY2tcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9hdC10aGUtdHJhY2suanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtb3RvcmNyb3NzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInVsdGltYXRlLXNhdmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi91bHRpbWF0ZS1zYXZlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic29jY2VyLW1hdGNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGVhcC1vZi1mYWl0aFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWdoLWp1bXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJraWNrLWZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9raWNrLWZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaWctd2F2ZS1zdXJmaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmlnLXdhdmUtc3VyZmluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNrYXRlLXBhcmtcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2tpaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2tpaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHVkZGxlLWp1bXBpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYWNoLWJhY2tmbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdXJmLXNwbGFzaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2Nocm9kaW5nZXJzLWtpY2tmbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRldmVudHM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwYXJ0eS1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZS1jbG91ZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaXJ0aGRheS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIjR0aC1iaXJ0aGRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInByZWduYW5jeS1hbm5vdW5jZW1lbnRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ3JhZHVhdGluZy1jbGFzc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaXJ0aC1hbm5vdW5jZW1lbnRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwYXJ0eS1mcmllbmRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZnJpZW5kcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndlZGRpbmctZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmaXJzdC1iaXJ0aGRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2ZpcnN0LWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ3JhZHVhdGUtY2VsZWJyYXRpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0ZS1jZWxlYnJhdGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWFuZC1ncm9vbVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bGFuZHNjYXBlOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYXJjaGVzLW5hdGlvbmFsLXBhcmtcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9hcmNoZXMtbmF0aW9uYWwtcGFyay5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJvb2tseW4tYnJpZGdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjYWxtLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJib2F0aG91c2UtY290dGFnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2JvYXRob3VzZS1jb3R0YWdlLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkZXZpbHMtYnJpZGdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImxha2UtcGVpclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2xha2UtcGVpci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1bnNldC1wb3BwaWVzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBvcHBpZXMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1bnNldC1waWVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBpZXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJyaXZlci1yZWZsZWN0aW9uXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcml2ZXItcmVmbGVjdGlvbi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImR1c2staW4tYWZyaWNhXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZHVzay1pbi1hZnJpY2EuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtYXJzaC1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm55Yy1za3lsaW5lXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJuaWdodC1kb2xwaGluc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZmxhdGlyb24tYnVpbGRpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdW50YWluLWxha2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmUyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHVycGxlLWZsb3dlcnNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cG9ydHJhaXQ6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWF1dGlmdWwtYmx1clwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1jYXN1YWxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1jYXN1YWwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjYXJuaXZhbC1uaWdodFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2Fybml2YWwtbmlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhhcHB5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hhcHB5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsYWNrLWFuZC13aGl0ZS1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ5b3VuZy1tb25rc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibG9uZGUtY2xvc2UtdXAtYm9rZWhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGlkaW5nLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oaWRpbmctd29tYW4uanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ2lybC1yYWJiaXQtZnJpZW5kc2hpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvZ2lybC1yYWJiaXQtZnJpZW5kc2hpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJlZC1oYWlyZWQtY2hpbGRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdWl0LWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ3b21hbi1kcmVzc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjbG9zZS11cC13b21hbi1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdWl0MVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2xpZGVzOyIsIlxyXG5cclxuY29uc3QgaG9tZVNsaWRlcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tYW5nbGUuanBnJyksXHJcblx0XHR9LFx0XHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtcmVmbGVjdGlvbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLWNsb3NlLXVwLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sYW5kc2NhcGUtc2hvb3QuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWRlczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c2xpZGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2JlYWNoLXNob290JyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2ZpZWxkLXNob290JyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdpbi1hbmQtb3V0LW9mLWZvY3VzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9pbi1hbmQtb3V0LW9mLWZvY3VzLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3Ntb2tlLWNsb3VkJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdhdC1kdXNrJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lOiAnYWJvdmUtdGhlLWNsb3VkcycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHRcdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9QSE9UTyc6XHJcblx0XHRcdGxldCBwaG90b0luZm8gPSBhY3Rpb24ucGhvdG9JbmZvO1xyXG5cdFx0XHRsZXQgc2xpZGVzID0gWyAuLi5hY3Rpb25zLmN1cnJlbnRTbGlkZXMgXTtcclxuXHRcdFx0c2xpZGVzLnB1c2gocGhvdG9JbmZvKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtZXNzYWdlOiBbJycsJyddLFxyXG5cdHJlZGlyZWN0OiBmYWxzZVxyXG5cdH07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9NRVNTQUdFJzpcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBhY3Rpb24ubWVzc2FnZTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG1lc3NhZ2UgfVxyXG5cdFx0Y2FzZSAnUkVESVJFQ1RfQ0hFQ0snOlxyXG5cdFx0XHRsZXQgcmVkaXJlY3QgPSBhY3Rpb24ucmVkaXJlY3Q7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWRpcmVjdCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzb2NpYWxNZWRpYUxpbmtzIDogW1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRuYW1lOiBcIkZhY2VCb29rXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYm9rZWhiZXN0cGhvdG9ncmFwaHlcIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiIzNCNTk5OFwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiMyNDVhY2RcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJGbGlja3JcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZsaWNrci5jb20vcGhvdG9zL2RhdmlkX2Jva2VoL1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmxpY2tyXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjRkUwODgzXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzEyOGZkY1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkluc3RhZ3JhbVwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeS9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiI2YxNzUzMFwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiM3YTM4YWJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJMaW5rZWRJblwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhdmlkYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1saW5rZWRpblwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiIzAwNzdiNVwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiM1NmI5ZWVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb290ZXJfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgKCdTRVRfRk9PVEVSX0xJTktTJyk6XHJcblx0XHRcdGxldCBsaW5rcyA9IGFjdGlvbi5saW5rcztcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgbGlua3N9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IHRpbWVyID0gYWN0aW9uLnRpbWVyO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGltZXIgfTtcclxuXHRcdGNhc2UgJ0NMRUFSX1RJTUVSJzpcclxuXHRcdFx0dGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHRpbWVyfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzOyIsImltcG9ydCBnYWxsZXJ5U2xpZGVzIGZyb20gJy4uL2RhdGEvZ2FsbGVyeVNsaWRlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuZnVuY3Rpb24gYWJvdXRfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9QSE9UTyc6XHJcblx0XHRcdGxldCBwaG90b0luZm8gPSBhY3Rpb24ucGhvdG9JbmZvO1xyXG5cdFx0XHRsZXQgc2xpZGVzID0gWyAuLi5hY3Rpb25zLmN1cnJlbnRTbGlkZXMgXTtcclxuXHRcdFx0c2xpZGVzLnB1c2gocGhvdG9JbmZvKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRjYXNlICdDSE9PU0VfR0FMTEVSWSc6XHJcblx0XHRcdGxldCBnYWxsZXJ5ID0gYWN0aW9uLmdhbGxlcnk7XHJcblx0XHRcdHNsaWRlcyA9IFsgLi4uZ2FsbGVyeVNsaWRlc1tnYWxsZXJ5XSBdXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bGlua0luZm86IFtcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1ob21lJywgXHJcblx0XHRcdHBhdGg6ICcvJywgXHJcblx0XHRcdG5hbWU6ICdIb21lJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1nYWxsZXJ5JywgXHJcblx0XHRcdHBhdGg6ICcvZ2FsbGVyeScsIFxyXG5cdFx0XHRuYW1lOiAnUGhvdG8gR2FsbGVyeSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstYWJvdXQnLCBcclxuXHRcdFx0cGF0aDogJy9hYm91dCcsIFxyXG5cdFx0XHRuYW1lOiAnQWJvdXQgQm9rZWgnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWNvbnRhY3QnLCBcclxuXHRcdFx0cGF0aDogJy9jb250YWN0JywgXHJcblx0XHRcdG5hbWU6ICdDb250YWN0IFVzJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay10ZXN0JywgXHJcblx0XHRcdHBhdGg6ICcvdGVzdCcsIFxyXG5cdFx0XHRuYW1lOiAnVGVzdCBQYWdlJ1xyXG5cdFx0fSxcclxuXHRdLFxyXG5cdG1vYmlsZU1lbnU6IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBoZWFkZXJfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ01PQklMRV9IRUFERVJfU1RBVFVTJzpcclxuXHRcdFx0bGV0IG1vYmlsZU1lbnUgPSBhY3Rpb24ubW9iaWxlTWVudVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbW9iaWxlTWVudSB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcl9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0cGF1c2VTbGlkZVNob3c6IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9tZV9yZWR1Y2VycyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdTVE9SRV9XSU5ET1dfV0lEVEgnOlxyXG5cdFx0XHRsZXQgd2luZG93V2lkdGggPSBhY3Rpb24ud2luZG93V2lkdGg7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB3aW5kb3dXaWR0aCB9O1xyXG5cdFx0Y2FzZSAnUEFVU0VfU0xJREVfU0hPVyc6XHJcblx0XHRcdGxldCBwYXVzZVNsaWRlU2hvdyA9IGFjdGlvbi5wYXVzZVNsaWRlU2hvdztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRjdXJyZW50U2xpZGVObzogMCxcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcblx0c2hvd0ZpbG1zdHJpcDogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3Rvcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJzpcclxuXHRcdFx0bGV0IGN1cnJlbnRTbGlkZUluZm8gPSBhY3Rpb24uY3VycmVudFNsaWRlSW5mbztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZUluZm8gfVxyXG5cdFx0Y2FzZSAnU1RPUkVfQ1VSUkVOVF9TTElERV9OTyc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vfVxyXG5cdFx0Y2FzZSAnSU5DUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdGxldCB0b3RhbE5vU2xpZGVzID0gYWN0aW9uLnRvdGFsTm9TbGlkZXM7XHJcblx0XHRcdGlmKGN1cnJlbnRTbGlkZU5vID09IHRvdGFsTm9TbGlkZXMgLSAxKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm8gfVxyXG5cdFx0Y2FzZSAnREVDUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gMCl7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gPSB0b3RhbE5vU2xpZGVzIC0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyAtPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZVNsaWRlU2hvdyB9XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdMT0FEX05FV19TTElERVMnOlxyXG5cdFx0XHRsZXQgc2xpZGVzID0gYWN0aW9uLnNsaWRlcztcclxuXHRcdFx0Y3VycmVudFNsaWRlSW5mbyA9IHNsaWRlc1swXTtcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSAwIFxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzLCBjdXJyZW50U2xpZGVJbmZvLCAgY3VycmVudFNsaWRlTm99O1xyXG5cdFx0Y2FzZSAnVU5MT0FEX1NMSURFUyc6XHJcblx0XHRcdGxldCB0ZW1wU3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0XHRcdGRlbGV0ZSB0ZW1wU3RhdGVbJ2N1cnJlbnRTbGlkZUluZm8nXTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnc2xpZGVzJ107XHJcblx0XHRcdHJldHVybiB7IC4uLnRlbXBTdGF0ZSB9O1xyXG5cdFx0Y2FzZSAnU0hPV19GSUxNU1RSSVAnOlxyXG5cdFx0XHRsZXQgc2hvd0ZpbG1zdHJpcCA9IGFjdGlvbi5zaG93RmlsbXN0cmlwO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2hvd0ZpbG1zdHJpcCB9XHJcblx0XHRjYXNlICdTVE9SRV9GSUxNU1RSSVBfREVGQVVMVF9QT1NJVElPTlMnOlxyXG5cdFx0XHRsZXQgZmlsbXN0cmlwRGVmYXVsdFBvc2l0aW9ucyA9IGFjdGlvbi5maWxtc3RyaXBEZWZhdWx0UG9zaXRpb25zO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgZmlsbXN0cmlwRGVmYXVsdFBvc2l0aW9uc307XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5cdC8vIGN1cnJlbnRTbGlkZUluZm86IHtcclxuXHQvLyBcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHQvLyBcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHQvLyB9LFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdG9yX3JlZHVjZXJzOyIsIi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiAnLycsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogSG9tZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9pbmRleC5odG1sJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Fib3V0JyxcclxuXHRcdGV4YWN0OiBmYWxzZSxcclxuXHRcdGNvbXBvbmVudDogQWJvdXRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvY29udGFjdCcsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogQ29udGFjdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0LzpzdGF0dXMnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2dhbGxlcnknLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBHYWxsZXJ5XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL3Rlc3QnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBUZXN0XHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGFib3V0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvYWJvdXRfcmVkdWNlcnMnO1xyXG5pbXBvcnQgY29udGFjdF9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZm9vdGVyX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZm9vdGVyX3JlZHVjZXJzJztcclxuaW1wb3J0IGdhbGxlcnlfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzJztcclxuaW1wb3J0IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlTZWxlY3Rvcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBoZWFkZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9oZWFkZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgaG9tZV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hvbWVfcmVkdWNlcnMnO1xyXG5pbXBvcnQgcHJvamVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvcHJvamVjdG9yX3JlZHVjZXJzJztcclxuXHJcblxyXG4vL0FkZCBhZGRpdGlvbmFsIHJlZHVjZXJzIGluIGhlcmUgdG8gYmUgY29tYmluZWQgaW50byBvbmUgcmVkdWNlclxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0YWJvdXQ6IGFib3V0X3JlZHVjZXJzLFxyXG5cdGNvbnRhY3Q6IGNvbnRhY3RfcmVkdWNlcnMsXHJcblx0Zm9vdGVyOiBmb290ZXJfcmVkdWNlcnMsXHJcblx0Z2FsbGVyeTogZ2FsbGVyeV9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5U2VsZWN0b3I6IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyxcclxuXHRoZWFkZXI6IGhlYWRlcl9yZWR1Y2VycyxcclxuXHRob21lOiBob21lX3JlZHVjZXJzLFxyXG5cdHByb2plY3RvcjogcHJvamVjdG9yX3JlZHVjZXJzLFxyXG59KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuXHRyb290UmVkdWNlcixcclxuXHQvLyBpZiByZWRleCBkZXZ0b29scyBleHRlbnNpb24gaXMgb24gdGhlIHdpbmRvdyBvYmplY3QgcnVuIHRoZSBkZXZ0b29scyBmdW5jdGlvblxyXG5cdF9faXNCcm93c2VyX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2lyY2xldHlwZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc3RhdGljLWd6aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
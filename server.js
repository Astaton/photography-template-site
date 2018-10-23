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

var _NotFound = __webpack_require__(/*! ./NotFound */ "./src/shared/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

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
					}),
					_react2.default.createElement(_reactRouterDom.Redirect, { path: '/home', to: '/' }),
					_react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
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
			// console.log("Filmstrip mounted props are ", this.props);
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
					_react2.default.createElement(_Projector2.default, { styleFor: "gallery", slides: slides,
						history: this.props.history,
						location: this.props.location
					})
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
			// console.log('GallerySelector props are: ',this.props);
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
			// console.log('header props are ', this.props);

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

/***/ "./src/shared/NotFound.js":
/*!********************************!*\
  !*** ./src/shared/NotFound.js ***!
  \********************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
	_inherits(NotFound, _Component);

	function NotFound(props) {
		_classCallCheck(this, NotFound);

		return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
	}

	_createClass(NotFound, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'main', className: 'main' },
				_react2.default.createElement(
					'div',
					{ className: 'NotFound__container' },
					_react2.default.createElement(
						'h1',
						{ className: 'NotFound__main-header' },
						'Error 404'
					),
					_react2.default.createElement(
						'h2',
						{ className: 'NotFound__sub-header' },
						'Sorry we can\'t find the page that you are looking for.'
					),
					_react2.default.createElement(
						'p',
						{ className: 'NotFound__text' },
						'If you need help finding something or if you have questions you contact us',
						_react2.default.createElement(
							_reactRouterDom.NavLink,
							{ to: '/contact' },
							'here.'
						)
					),
					_react2.default.createElement(
						'blockquote',
						{ id: 'NotFound__quote', className: 'NotFound__quote' },
						'\u201CPhotography for me is not looking, it\u2019s feeling. If you can\u2019t feel what you\u2019re looking at, then you\u2019re never going to get others to feel anything when they look at your pictures.\u201D',
						_react2.default.createElement(
							'cite',
							{ id: 'NotFound__quote-citation', className: 'NotFound__quote-citation' },
							' \u2014 Don McCullin'
						)
					)
				)
			);
		}
	}]);

	return NotFound;
}(_react.Component);

exports.default = NotFound;

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

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _queryString2 = _interopRequireDefault(_queryString);

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


//queryString import


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

			// if(this.props.location.search){
			// 	let values = queryString.parse(this.props.location.search);
			// 	let path = this.props.location.pathname;
			// 	// console.log(values.img);
			// 	this.props.history.push(`${path}?img=${values.img}`);
			// }
			var path = this.props.location.pathname;
			var _props$projector = this.props.projector,
			    currentSlideNo = _props$projector.currentSlideNo,
			    slides = _props$projector.slides;

			this.props.history.push(path + '?img=' + slides[currentSlideNo].name);
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

			if (this.props.slides) {
				this.props.load_new_slides(this.props.slides);
				setTimeout(function () {
					_this5.updateSlideShow();
				}, 50);
			}
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
				if (_this6.props.projector.slides && _this6.props.projector.pauseSlideShow == false && halfSecCounter >= 6500) {
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

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Byb2plY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvYWJvdXRfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvY29udGFjdF9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYWN0aW9ucy9nYWxsZXJ5U2VsZWN0b3JfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeV9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYWN0aW9ucy9oZWFkZXJfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaG9tZV9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2RhdGEvZ2FsbGVyeVNsaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2RhdGEvaG9tZVNsaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2Fib3V0X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvY29udGFjdF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2Zvb3Rlcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2dhbGxlcnlTZWxlY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2dhbGxlcnlfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9oZWFkZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9ob21lX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvcHJvamVjdG9yX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaXJjbGV0eXBlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc3RhdGljLWd6aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6WyJjbGllbnQiLCJ1c2VyIiwiaWQiLCJzZWNyZXQiLCJyZWZyZXNoVG9rZW4iLCJhY2Vzc1Rva2VuIiwidXNlckVtYWlsIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiYXBwIiwidXNlIiwiYm9keVBhcnNlciIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldCIsInJlcSIsInJlcyIsIm5leHQiLCJkZXN0IiwidXJsIiwibWFya3VwIiwic3RvcmUiLCJzZW5kIiwicmVxdWlyZSIsInBvc3QiLCJ0cmFuc3BvcnRlciIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiaG9zdCIsImF1dGgiLCJ0eXBlIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJhY2Nlc3NUb2tlbiIsIm1haWxPcHRpb25zIiwiZnJvbSIsImJvZHkiLCJuYW1lIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsImVtYWlsIiwibWVzc2FnZSIsIm51bWJlciIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsImxpc3RlbiIsImFib3V0QWN0aW9ucyIsInByb2plY3RvckFjdGlvbnMiLCJBYm91dCIsInByb3BzIiwidG9nZ2xlQWJvdXRNb2RpZmllck9uIiwidG9nZ2xlQWJvdXRNb2RpZmllck9mZiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlcyIsImFib3V0IiwiQ29tcG9uZW50Iiwic3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9qZWN0b3IiLCJkaXNwYXRjaFRvUHJvcHMiLCJhY3Rpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGlzcGF0Y2giLCJBcHAiLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiZXhhY3QiLCJDIiwiY29tcG9uZW50IiwicmVzdCIsIk5vdEZvdW5kIiwiYWN0aW9uQ3JlYXRvcnMiLCJDb250YWN0IiwiY29uZmlybU1lc3NhZ2VCb3giLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ29udGFjdE1vZGlmaWVyT24iLCJ0b2dnbGVMb2FkZXJTdHlsZXMiLCJyZWRpcmVjdEFmdGVyU2VuZE1lc3NhZ2UiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPZmYiLCJyZWRpcmVjdF9jaGVjayIsIm1hdGNoIiwicGFyYW1zIiwic3RhdHVzIiwic3RvcmVfbWVzc2FnZSIsImNvbnRhY3QiLCJoYXNDbGFzcyIsIkNvbnRhY3RGb3JtIiwiRmlsbXN0cmlwIiwiY3NzIiwibWFwcGVkU2xpZGVzIiwiaW5kZXgiLCJpbWFnZSIsImZpbG1zdHJpcENlbGxDbGlja0hhbmRsZXIiLCJoYW5kbGVJbWFnZUxvYWRlZCIsImJpbmQiLCJoYW5kbGVJbWFnZUVycm9yZWQiLCJzbGlkZU5vIiwic3RvcmVfY3VycmVudF9zbGlkZV9ubyIsImZpbG1zdHJpcENvbnRhaW5lckp1bXBTaGlmdGVyIiwidXBkYXRlU2xpZGVTaG93IiwicGFyc2VJbnQiLCJmaWxtc3RyaXBDb250YWluZXJTaGlmdGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhpZ2hsaWdodEZpbG1zdHJpcENvbnRyb2xzIiwibWFwU2xpZGVzVG9GaWxtc3RyaXAiLCJmaWxtc3RyaXBMZWZ0IiwiZmlsbXN0cmlwUmlnaHQiLCJGb290ZXIiLCJhZGRMaXN0ZW5lcnMiLCJmb290ZXIiLCJzb2NpYWxNZWRpYUxpbmtzIiwic29jaWFsTWVkaWFMaW5rc0luZm8iLCJmb3JFYWNoIiwiZm9udF9jb2xvciIsImJnX2NvbG9yMSIsImJnX2NvbG9yMiIsImhvdmVyIiwiaG92ZXJPbiIsImhvdmVyT2ZmIiwibGluayIsImljb24iLCJnYWxsZXJ5QWN0aW9ucyIsIkdhbGxlcnkiLCJnYWxsZXJ5IiwiZ29Ub0dhbGxlcnkiLCJjbG9zZUdhbGxlcnkiLCJjaG9vc2VfZ2FsbGVyeSIsInVubG9hZF9zbGlkZXMiLCJvcGVuR2FsbGVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJDbG9zZSIsImhpc3RvcnkiLCJwdXNoIiwibG9jYXRpb24iLCJHYWxsZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5U2VsZWN0b3JMb2FkIiwiY2xlYXJJbnRlcnZhbCIsImdhbGxlcnlTZWxlY3RvciIsInRpbWVyIiwiZ2FsbGVyeVNlbGVjdG9yUmVzZXQiLCJnYWxsZXJ5U2VsZWN0b3JJZHMiLCJjb250YWluZXJJZCIsImdhbGxlcnlTZWxlY3RvcklkIiwiY291bnRlciIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3RvcmVfdGltZXIiLCJnYWxsZXJ5TmFtZSIsImhvdmVySW4iLCJob3Zlck91dCIsIkhlYWRlciIsIm1vYmlsZU1lbnUiLCJoYW5kbGVNZW51Q2xpY2siLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGVhZGVyIiwidG9nZ2xlTW9iaWxlTWVudU91dCIsIm1vYmlsZV9oZWFkZXJfc3RhdHVzIiwidG9nZ2xlTW9iaWxlTWVudUluIiwibGlua0luZm8iLCJrZXkiLCJwdXJlIiwiSG9tZSIsInVwZGF0ZVdpbmRvd1dpZHRoIiwic2xpZGVTaG93IiwidG9nZ2xlSG9tZU1vZGlmaWVyT24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiQ2lyY2xlVHlwZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyYWRpdXMiLCJ0b2dnbGVIb21lTW9kaWZpZXJPZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFNsaWRlU2hvdyIsInN0b3JlX3dpbmRvd193aWR0aCIsImlubmVyV2lkdGgiLCJpbnRlcnZhbFRpbWVyIiwiaG9tZSIsImhvbWVTbGlkZXMiLCJpbWdTcmMiLCJjb3VudCIsInBhdXNlU2xpZGVTaG93IiwiY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSIsIndpbmRvd1dpZHRoIiwicGF1c2Vfc2xpZGVfc2hvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvYWRlciIsImxvYWRlcklkIiwiUHJvamVjdG9yIiwiZG93bkFycm93VmlzaWJpbGl0eSIsImxvYWRQcm9qZWN0b3IiLCJhdXRvUnVuUHJvamVjdG9yIiwic2hvd19maWxtc3RyaXAiLCJwYXRobmFtZSIsImN1cnJlbnRTbGlkZU5vIiwiaW5jcmVtZW50X3NsaWRlIiwiZGVjcmVtZW50X3NsaWRlIiwiZmlsbXN0cmlwT3ZlcmxheVNoaWZ0ZXIiLCJzdG9yZV9jdXJyZW50X3NsaWRlX2luZm8iLCJsb2FkX25ld19zbGlkZXMiLCJoYWxmU2VjQ291bnRlciIsInVuZGVmaW5lZCIsIm5leHRTbGlkZSIsInByb2plY3RvckJveFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJjYWxjdWxhdGVkV2lkdGgiLCJzaG93RmlsbXN0cmlwIiwic2hpZnRCeSIsInRyYXZlbERpc3RhbmNlIiwicHJvcG9zZWRQb3NpdGlvbiIsImZpbG1zdHJpcFBvc2l0aW9uIiwibGVmdEFycm93UG9zaXRpb24iLCJyaWdodEFycm93UG9zaXRpb24iLCJzaGlmdFRvIiwicHJvamVjdG9yRGlzcGxheVdpZHRoIiwicHJvamVjdG9yQm94Q2VudGVyIiwiZmlsbXN0cmlwV2lkdGgiLCJyaWdodEFycm93V2lkdGgiLCJsZWZ0QXJyb3dPZmZzZXQiLCJyaWdodEFycm93T2Zmc2V0IiwiZmlsbXN0cmlwT2Zmc2V0IiwiY2VudGVyQ2VsbCIsImN1cnJlbnRTbGlkZUluZm8iLCJzaGlmdFByb2plY3RvckNvbnRyb2xzIiwidW5zaGlmdFByb2plY3RvckNvbnRyb2xzIiwic3R5bGVGb3IiLCJwcmV2aW91c1NsaWRlIiwicHJvamVjdG9yRG93bkhhbmRsZXIiLCJwYXVzZUJ1dHRvbkhhbmRsZXIiLCJTbGlkZSIsInNldFN0eWxlcyIsInJlbW92ZVN0eWxlcyIsInBob3RvSW5mbyIsIlRlc3QiLCJhZGRfcGhvdG8iLCJjdXJyZW50U2xpZGVzIiwiY2xlYXJfdGltZXIiLCJ0b3RhbE5vU2xpZGVzIiwiZ2FsbGVyeVNsaWRlcyIsImFjdGlvbiIsImV2ZW50cyIsImxhbmRzY2FwZSIsInBvcnRyYWl0IiwiaW5pdGlhbFN0YXRlIiwiYWJvdXRfcmVkdWNlcnMiLCJjb250YWN0X3JlZHVjZXJzIiwiZm9vdGVyX3JlZHVjZXJzIiwibGlua3MiLCJnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMiLCJoZWFkZXJfcmVkdWNlcnMiLCJob21lX3JlZHVjZXJzIiwicHJvamVjdG9yX3JlZHVjZXJzIiwidGVtcFN0YXRlIiwicm9vdFJlZHVjZXIiLCJnYWxsZXJ5X3JlZHVjZXJzIiwiX19pc0Jyb3dzZXJfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Rjs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxTQUFTO0FBQ2RDLE9BQU0sb0JBRFE7QUFFZEMsS0FBSSwwRUFGVTtBQUdkQyxTQUFRLDBCQUhNO0FBSWRDLGVBQWMsb0VBSkE7QUFLZEMsYUFBWTtBQUxFLENBQWY7O0FBUU8sSUFBTUMsZ0NBQVksd0JBQWxCOztrQkFFUU4sTTs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQWRBO0FBUkE7QUF3QkEsSUFBTU8sT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDOztBQUhBOzs7QUFKQTs7O0FBSkE7OztBQVZBOztBQXNCQSxJQUFNQyxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxH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Ozs7Ozs7QUM3QmYsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtcmVmbGVjdGlvbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXQtd29yay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtY2xvc2UtdXAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tYW5nbGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvc3RhcnktbGVucy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9hdC10aGUtdHJhY2suanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iaWctd2F2ZS1zdXJmaW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9kYXlsaWdodC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2tpY2stZmxpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbGVhcC1vZi1mYWl0aC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vcHVkZGxlLWp1bXBpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NjaHJvZGluZ2Vycy1raWNrZmxpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2tpaW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zb2NjZXItbWF0Y2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi91bHRpbWF0ZS1zYXZlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy80dGgtYmlydGhkYXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGgtYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aGRheS1naXJsLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWNsb3Vkcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRlLWNlbGVicmF0aW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0aW5nLWNsYXNzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZnJpZW5kcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcHJlZ25hbmN5LWFubm91bmNlbWVudC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2FyY2hlcy1uYXRpb25hbC1wYXJrLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2JvYXRob3VzZS1jb3R0YWdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9jYWxtLWNsb3Vkcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kZXZpbHMtYnJpZGdlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZmxhdGlyb24tYnVpbGRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2xha2UtcGVpci5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbW91bnRhaW4tbGFrZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbmlnaHQtZG9scGhpbnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZTIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3B1cnBsZS1mbG93ZXJzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcGllci5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBvcHBpZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYXQtZHVzay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYmVhY2gtc2hvb3QuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2luLWFuZC1vdXQtb2YtZm9jdXMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL3Ntb2tlLWNsb3VkLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWNhc3VhbC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hbi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC1ib2tlaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLWd1eS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC13b21hbi1ib2tlaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hhcHB5LWdpcmwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oaWRpbmctd29tYW4uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQxLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3lvdW5nLW1vbmtzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIjsiLCJjb25zdCBjbGllbnQgPSB7XHJcblx0dXNlcjogJ29yc29uMTA4QGdtYWlsLmNvbScsXHJcblx0aWQ6ICc1NTczNDY3MTg2OTAtY2hkMWVmMWNlMHRqam5oMTdtdXFkMDFkamZpNm9tNW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG5cdHNlY3JldDogJzZoU0ZqMXVkQmx0TVhrMGdKUU5oTmE4dycsXHJcblx0cmVmcmVzaFRva2VuOiAnMS9yblZWWmc0aVkyMkFCQ3dra3VKalZZOE4wQWhkbmp1S1R0VGhqN3BZUTlJak1iZGFhb0hvTk1acWJuSTVpaXo4JyxcclxuXHRhY2Vzc1Rva2VuOiAneWEyOS5HbHNCQm5UUV81bHlrRzN2ZmpEVmpkVTBxUXk3Q2I3b0I4ZVo4X1NsTnA4NnVuQWtSa0taQ3NJbUpmQ2p3cnpvQlJjN1BEMHdHLTBYclpRREtrUGNHaXZjc0I0WndVdFlYQzd0bVFkZjZLYTBXc3FBbVhCOGpFdWEwamlrJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJFbWFpbCA9IFwiYXN0YXRvbjEwOEBvdXRsb29rLmNvbVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7IiwiLy9leHByZXNzIGltcG9ydFxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuLy9taWRkbGV3YXJlIGltcG9ydHNcclxuaW1wb3J0IGV4cHJlc3NTdGF0aWNHemlwIGZyb20gXCJleHByZXNzLXN0YXRpYy1nemlwXCI7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc2hhcmVkL3N0b3JlJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vc2hhcmVkL3JvdXRlc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9BcHAnO1xyXG5cclxuLy9sb2NhbCBpbXBvcnRzXHJcbmltcG9ydCBjbGllbnQsIHsgdXNlckVtYWlsIH0gZnJvbSAnLi4vLi4vb2F1dGgvY2xpZW50RGF0YSc7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoJy8nLCBleHByZXNzU3RhdGljR3ppcChcInB1YmxpYy9cIikpO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcclxuXHJcbmFwcC5nZXQoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuXHRsZXQgZGVzdCA9IHJlcS51cmwgPT0gJy9pbmRleC5odG1sJyA/ICcvJyA6IHJlcS51cmw7XHJcblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfSA+XHJcblx0XHRcdDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e2Rlc3R9IGNvbnRleHQ9e3t9fT5cclxuXHRcdFx0XHQ8QXBwIC8+IFxyXG5cdFx0XHQ8L1N0YXRpY1JvdXRlcj5cclxuXHRcdDwvUHJvdmlkZXI+XHJcblx0KVxyXG5cclxuXHRyZXMuc2VuZChgXHJcblx0XHQ8aHRtbCBsYW5nPVwiZW4tdXNcIj5cclxuXHRcdFx0PGhlYWQ+XHJcblx0XHRcdFx0PG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XHJcblx0XHRcdFx0PHRpdGxlPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgSW5jLjwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPSR7cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2xvZ29zL2xvZ28ucG5nJyl9PlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjIuMC9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1oV1ZqZmx3RnhMNnNOem50aWgyN2JmeGtyMjdQbWJiSy9pU3ZKK2E0KzBvd1hxNzl2K2xzRmtXNTRiT0diaURRXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cclxuXHRcdFx0XHQ8c2NyaXB0IHNyYz1cIi9idW5kbGUuanNcIiBkZWZlcj48L3NjcmlwdD5cclxuXHRcdFx0PC9oZWFkPlxyXG5cdFx0XHQ8Ym9keT5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiYXBwXCI+JHttYXJrdXB9PC9kaXY+XHJcblx0XHRcdDwvYm9keT5cclxuXHRcdDwvaHRtbD5cclxuXHRgKVxyXG59KVxyXG5cclxuYXBwLnBvc3QoJy9jb250YWN0JywgKHJlcSwgcmVzKSA9PiB7XHJcblx0bGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG5cdFx0c2VydmljZTogJ2dtYWlsJyxcclxuXHRcdGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXHJcblx0XHRhdXRoOiB7XHJcblx0XHRcdHR5cGU6ICdPQXV0aDInLFxyXG5cdFx0XHR1c2VyOiBjbGllbnQudXNlcixcclxuXHRcdFx0Y2xpZW50SWQ6IGNsaWVudC5pZCxcclxuXHRcdFx0Y2xpZW50U2VjcmV0OiBjbGllbnQuc2VjcmV0LFxyXG5cdFx0XHRyZWZyZXNoVG9rZW46IGNsaWVudC5yZWZyZXNoVG9rZW4sXHJcblx0XHRcdGFjY2Vzc1Rva2VuOiBjbGllbnQuYWNjZXNzVG9rZW5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bGV0IG1haWxPcHRpb25zID0ge1xyXG5cdFx0ZnJvbTogYCR7cmVxLmJvZHkubmFtZX0gPCR7Y2xpZW50LnVzZXJ9PmAsXHJcblx0XHR0bzogJ2FzdGF0b24xMDhAb3V0bG9vay5jb20nLFxyXG5cdFx0c3ViamVjdDogJ0NvbnRhY3QgZnJvbSBCb2tlaCBCZXN0IFBob3RvIHdlYnNpdGUnLFxyXG5cdFx0aHRtbDogIGA8IURPQ1RZUEUgPlxyXG5cdFx0XHRcdDxodG1sIGxhbmc9XCJ1cy1lblwiPlxyXG5cdFx0XHRcdFx0PGhlYWQ+XHJcblx0XHRcdFx0XHRcdDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCI+XHJcblx0XHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGg7IGluaXRpYWwtc2NhbGU9MS4wOyBtYXhpbXVtLXNjYWxlPTEuMDsgdXNlci1zY2FsYWJsZT1ubztcIj5cclxuXHRcdFx0XHRcdFx0PHRpdGxlPkNvb2wgRW1haWwgYnJvPC90aXRsZT5cclxuXHRcdFx0XHRcdDwvaGVhZD5cclxuXHRcdFx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMT5FbWFpbCBGcm9tICR7cmVxLmJvZHkubmFtZX0gYXQgJHtyZXEuYm9keS5lbWFpbH08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwPm1lc3NzYWdlIGZyb20gJHtyZXEuYm9keS5uYW1lfSByZWFkczogPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPiR7cmVxLmJvZHkubWVzc2FnZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5uYW1lfSwgJHtyZXEuYm9keS5udW1iZXJ9ICR7cmVxLmJvZHkuZW1haWx9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYm9keT5cclxuXHRcdFx0XHQ8L2h0bWw+YFxyXG5cdH1cclxuXHJcblx0dHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIChlcnIsIGluZm8pID0+IHtcclxuXHRcdGlmKGVycil7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycik7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3QvZmFpbCcpO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRjb25zb2xlLmxvZygnRW1haWwgc2VudCcpO1xyXG5cdFx0XHRyZXMucmVkaXJlY3QoJy9jb250YWN0L3N1Y2Nlc3MnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAnK3BvcnQpKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IFByb2plY3RvciBmcm9tICcuL1Byb2plY3Rvcic7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFib3V0QWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvYWJvdXRfYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHByb2plY3RvckFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy50b2dnbGVBYm91dE1vZGlmaWVyT24oKVxyXG5cdFx0Y29uc29sZS5sb2coJ0Fib3V0IHByb3BzIGFyZScsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUFib3V0TW9kaWZpZXJPZmYoKVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9uKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tYWJvdXQnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFib3V0TW9kaWZpZXJPZmYoKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuYWJvdXQuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiYWJvdXRfX3BhZ2UtaGVhZGVyXCI+T3VyIFN0b3J5PC9oMT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2ltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImFib3V0XCJ9IHNsaWRlcz17c2xpZGVzfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkRhdmlkIEJva2VoIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgYSBzYWdlIG1vd2VyIGdvYXQsIHJhY2Nvb25zIHJodWJhcmIgb3V0aG91c2UgYSwgYXBwbGVzIGJlcnJpZXMgY29ybi4gS2lkbmV5IGJlYW5zIG9zdHJpY2ggdHJ1Y2tzLiBJbiB0aGUgc3RyYXcgcmFpbiBiYXJyZWxzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgd2VsbCBrbm93biBmb3IgcmFrZXMgcGxvd3MuIEpvaG4gRGVlcmUgYmVlcywgcGFyc2xleSBzd2VldCBjb3JuIGF0LCBwb3JreSBwaWcgc2hvdmVscy4gdmV0ZXJpbmFyaWFuIGJsdWUgYmVycmllcyBjYXR0bGUgamVsbHkgY2FubmluZy4gQmx1ZSBiZXJyaWVzIHBpZ2VvbnMgYnV6eiBhbmQgYmVhbiBwcmFpcmllIGRvZ3MgbmFpbHMgYXQgZXN0LiBRdWFjayBoYW1tZXJzIGVnZ3BsYW50IGlzIHV0dGVycyBuYWlscyBnYXJkZW4uIC4gQXVnZXJzIG9hdHMgaGVuIGNvd3BpZXMuIEFwcGxlcyBkdWNrLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+T3VyIFdvcmsgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBzdHJhdywgcXVhaWwgYSBvc3RyaWNoZXMgZG9ua2V5LCBoYXkgaG9vayBjdWN1bWJlcnMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBTaG92ZWxzIGF0IHJha2VzIHBsb3dzLiBRdWFjayBoYW1tZXJzIGVnZ3BsYW50IGlzIHV0dGVycyBuYWlscyBnYXJkZW4uIEhheWJpbmUgY2Fycm90cyBzb3liZWFucywgb3dscyBkdWNrIHJhaXNpbmcgb3IsIGNoZWVwIGluIHBsb3dzLiBPdXRob3VzZSBhdCBuYWlscyBtb3dlci4gRm9yYWdlIEhhcnZlc3RlciwgYmVhbiBhbmQgU2lsYWcuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYWJvdXRfX2xpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+QXdhcmRzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGxpPkN1bHRpdmF0b3IgYnJ1c3NlbCBzcHJvdXRzIGhhcnJvd3MsIGNlbGVyeSBkcmVhZCB3aXRoIGthbGUgYXVnZXJzIGhhcnJvd3MuIFZldGVyaW5hcmlhbiBhdCBTZWVkZXIgZWdncyB3aXRoIHdhdGVybWVsb24gb3N0cmljaGVzLjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Db28gd2l0aCByYWJiaXRzIGVjdC4gR3JhcGVzIG5lc3QgcGl0Y2ggZm9yayBhbiBwbG93cyBtYXBsZSBzeXJ1cCB5ZWFybGluZ3MsIHF1aWx0IHNxdWVhayBkb2dnaWVzLiBMYW1iIHBpZyByb29zdGVyIHNoZWVwLiBVdHRlcnMgYXJlIHdlYXRoZXJ2YW5lIGZvYWwgZXN0LiA8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+R29iYmxlIGZlZWQsIGplbGx5IHBlcHBlcnMgYXQgcGxvdyBiYXNpbCBzd2F0aGVyLCBjYXQgd2VhdGhlcnZhbmUgZ3JhaW4gdHJ1Y2tzLCBob290IHBvbnkgcm9iaW5zIHBlYWNvY2tzIGFuIGthbGUuIFJvb3N0ZXIgY2VsZXJ5IHBpbmVhcHBsZXMgZmVydGlsaXplci48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBhYm91dCwgcHJvamVjdG9yIH0gPSBzdGF0ZTtcclxuXHRyZXR1cm4geyBcclxuXHRcdGFib3V0LCBcclxuXHRcdHByb2plY3RvciBcclxuXHR9OyBcclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcbiBcdFx0YWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKE9iamVjdC5hc3NpZ24oe30sIGFib3V0QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQWJvdXQpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdFJvdXRlLFxyXG5cdFJlZGlyZWN0LFxyXG5cdFN3aXRjaFxyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kJztcclxuXHJcbi8vUm91dGVzIGltcG9ydFxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwicGFnZS13cmFwcGVyXCIgY2xhc3NOYW1lPSdwYWdlLXdyYXBwZXInPlxyXG5cdFx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0XHRcdDxTd2l0Y2g+XHJcblx0XHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIGV4YWN0LCBjb21wb25lbnQ6IEMsIC4uLnJlc3QgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwYXRofVxyXG5cdFx0XHRcdFx0XHRcdFx0cGF0aD17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdGV4YWN0PXtleGFjdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDIHsuLi5wcm9wc30gey4uLnJlc3R9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpfSBcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PFJlZGlyZWN0IHBhdGg9Jy9ob21lJyB0bz0nLycgLz5cclxuXHRcdFx0XHRcdFx0PFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XHJcblx0XHRcdFx0XHQ8L1N3aXRjaD5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vUmVhY3QgQ29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnRzIGltcG9ydHNcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb250YWN0X2FjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdHRoaXMuY29uZmlybU1lc3NhZ2VCb3goKTtcclxuXHRcdC8vdGltZW91dCBuZWVkZWQgZm9yIHJlZGlyZWN0IHRvIHN0eWxlIG1haW4gcHJvcGVybHkuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdHRoaXMucmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQ29udGFjdCBwcm9wcyBpczogJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5tb3VudGluZyBDb250YWN0XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIHdvcmtlZCByZWRpcmVjdGluZycpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayh0cnVlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyBtYXkgbm90IGhhdmUgd29ya2VkIHNldHRpbmcgcmVkaXJlY3QgdG8gZmFsc2UnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbmZpcm1NZXNzYWdlQm94KCkge1xyXG5cdFx0Ly9jaGVja3Mgc3RhdHVzIG9mIHNlbnQgbWVzc2FnZXMgYW5kIGRpc3BsYXlzIGEgbm90aWNlIGFjY29yZGluZ2x5XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0IGNvbmZpcm1NZXNzYWdlQm94XCIpXHJcblx0XHRsZXQgc3RhdHVzID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzKXtcclxuXHRcdFx0aWYoc3RhdHVzID09PSAnc3VjY2Vzcycpe1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgU2VudCEhJywgJ0lcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nXSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBzdWNjZXNzIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgRXJyb3IhIScsICdQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiddKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgZmFpbCBcIiwgdGhpcy5wcm9wcy5jb250YWN0KTsgfSwgMTAwMCk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHR9LCA2MDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPbigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4nKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4tLWNvbnRhY3QnKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUxvYWRlclN0eWxlcygpIHtcclxuXHRcdCQoJyNsb2FkZXJfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIxJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmNvbnRhY3QucmVkaXJlY3QgPT09IHRydWUpe1xyXG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPScvY29udGFjdCcgLz5cclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4nIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMgP1xyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNvbmZpcm1fX2NvbnRhaW5lclwiIGNsYXNzTmFtZT0nY29uZmlybV9fY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbmZpcm1fX2lubmVyJz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nY29uZmlybV9faGVhZGVyJz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMF19PC9oMj5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdjb25maXJtX190ZXh0Jz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMV19PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLW91dHRlci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1pbm5lci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFjdF9faGVhZGVyJz5HZXQgSW4gVG91Y2ggV2l0aCBVczwvaDE+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5JZiB5b3UncmUgdGhpbmtpbmcgYWJvdXQgaGlyaW5nIGEgcGhvdG9ncmFwaGVyIGZvciBhIHNob290LCB3ZSB3b3VsZCBsb3ZlIHRvIGRpc2N1c3MgaXQgd2l0aCB5b3UuICBXZSBjYW4gcHJvdmlkZSBwcm9mZXNzaW9uYWwgaW5zaWdodCBhbmQgaGVscCB0byBtYWtlIHlvdXIgZHJlYW0gc2hvb3QgYSByZWFsaXR5LiAgQ29uc3VsYXRpb25zIGFyZSBjb21wbGV0ZWx5IGZyZWUuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX2FkZHJlc3MtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBBZGRyZXNzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTIzIFdvb3N0ZXIgU3QgLSBOZXcgWW9yaywgTlkgMTAwMTJcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhciBmYS1lbnZlbG9wZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBFbWFpbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdERCb2tlaEBCb2tlaEJlc3QuY29tXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtcGhvbmVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gUGhvbmUgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoMjEyKSA1NTUtNTU1NVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19tZXNzYWdlLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBjb250YWN0OiBzdGF0ZS5jb250YWN0IH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQ29udGFjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19jb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J21lc3Nlbmdlcl9fZm9ybScgbWV0aG9kPSdwb3N0JyBhY3Rpb249Jyc+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J25hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1uYW1lJyBpZD0naW5wdXROYW1lJyBwbGFjZWhvbGRlcj0nTmFtZSAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdudW1iZXInIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1udW1iZXInIGlkPSdpbnB1dE51bWJlcicgcGxhY2Vob2xkZXI9J051bWJlcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1lbWFpbCcgaWQ9J2lucHV0RW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbWVzc2FnZScgaWQ9J2lucHV0TWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UgIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgaWQ9J21lc3Nlbmdlcl9fc2VuZCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2J1dHRvbicgdmFsdWU9J1NlbmQgTWVzc2FnZScgPjwvaW5wdXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpbG1zdHJpcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJGaWxtc3RyaXAgbW91bnRlZCBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQobmFtZSkge1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQobmFtZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbWFnZSBlcnJvclwiKTtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdG1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykge1xyXG5cdFx0bGV0IG1hcHBlZFNsaWRlcyA9IHNsaWRlcy5tYXAoICh7IG5hbWUsIGltYWdlIH0sIGluZGV4KSA9PiB7IFxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYga2V5PXtgZmlsbXN0cmlwX19jZWxsLSR7bmFtZX1gfSBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NlbGxcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHsgdGhpcy5maWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKGluZGV4KX0gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0YWx0PXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCIgaWQ9XCJmaWxtc3RyaXBfX2ltYWdlLW92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e2BmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWB9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFwcGVkU2xpZGVzXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKHNsaWRlTm8pIHtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9ubyhzbGlkZU5vKTtcclxuXHRcdHRoaXMucHJvcHMuZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIoc2xpZGVObyotMjAwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlU2xpZGVTaG93KCkgXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBMZWZ0KCkge1xyXG5cdFx0aWYocGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpID09PSAwIHx8IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSUyMDAgPT09IDApe1xyXG5cdFx0XHR0aGlzLnByb3BzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoMjAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBSaWdodCgpIHtcclxuXHRcdGlmKHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcpKSA9PT0gMCB8fCBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSklMjAwID09PSAwKXtcclxuXHRcdFx0dGhpcy5wcm9wcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyKC0yMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGhpZ2hsaWdodEZpbG1zdHJpcENvbnRyb2xzKCkge1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0LS1oaWdobGlnaHRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIpLnJlbW92ZUNsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5hZGRDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIikuYWRkQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0LS1oaWdobGlnaHRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpLmFkZENsYXNzKFwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiKS5yZW1vdmVDbGFzcyhcImZpbG1zdHJpcF9fY29udHJvbC1yaWdodC0taGlnaGxpZ2h0XCIpO1xyXG5cdFx0fSwgNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udGFpbmVyXCJcclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLmhpZ2hsaWdodEZpbG1zdHJpcENvbnRyb2xzKCl9IFxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBzbGlkZXMgPyB0aGlzLm1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykgOiBudWxsIH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJTaGlmdCBmaWxtc3RyaXAgdG8gdGhlIHJpZ2h0XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbG1zdHJpcExlZnQoKX0+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIGxlZnQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtbGVmdFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2hpZnQgZmlsbXN0cmlwIHRvIHRoZSBsZWZ0XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmZpbG1zdHJpcFJpZ2h0KCl9PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXNydFwiPmZpbG1zdHJpcCByaWdodCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCIgaWQ9XCJmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IHByb2plY3Rvcjogc3RhdGUucHJvamVjdG9yIH0gfTtcclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShGaWxtc3RyaXApOyAiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJGb290ZXIgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnModGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcyk7XHJcblx0fVxyXG5cclxuXHQvL2NoZWNrIHRvIHNlZSBpZiB0aGVzZSBjYW4gYmUgYWRkZWQgZGlyZWN0bHkgaW5saW5lIGR1cmluZyB0aGUgaW5pdGlhbCBtYXBwaW5nIG9mIHRoZSBTb2NpYWwgTWVkaWFsIExpbmtzIGluIHRoZSBKU1hcclxuXHRhZGRMaXN0ZW5lcnMoc29jaWFsTWVkaWFMaW5rc0luZm8pIHtcclxuXHRcdHNvY2lhbE1lZGlhTGlua3NJbmZvLmZvckVhY2goICh7IGZvbnRfY29sb3IsIG5hbWUsIGJnX2NvbG9yMSwgYmdfY29sb3IyIH0pID0+IHtcclxuXHRcdFx0JChgIyR7bmFtZX0taG92ZXItYm94YCkuaG92ZXIoKCkgPT4gdGhpcy5ob3Zlck9uKGAjJHtuYW1lfS1zb2NpYWxgLCBmb250X2NvbG9yLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiksICgpID0+IHRoaXMuaG92ZXJPZmYoYCMke25hbWV9LXNvY2lhbGApKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPbihpZCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCBmb250X2NvbG9yKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsIGBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICR7YmdfY29sb3IxfSwgJHtiZ19jb2xvcjJ9KWApO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdH1cclxuXHJcblx0aG92ZXJPZmYoaWQpIHtcclxuXHRcdCQoaWQpLmNzcygnY29sb3InLCAnd2hpdGUnKTtcclxuXHRcdCQoaWQpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwKSknKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluay0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19ib2R5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPkFydGlzdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYXJ0aXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHREYXZpZCBCb2tlaCBmb3VuZGVyIG9mIEJva2VoIEJlc3QgUGhvdG9ncmFwaHksIElzIGFuIGF3YXJkIHdpbm5pbmcgcGhvdG9ncmFwaGVyIHdpdGggb3ZlciA4IHllYXJzIG9mIGV4cGVyaWVuY2UuIExlYXJuIG1vcmUgYWJvdXQgRGF2aWQgYW5kIEJva2VoIEJlc3QgUGhvdG9ncmFwaHkgXHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBpZD1cImZvb3Rlcl9fYXJ0aXN0LWxpbmtcIiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgdG89XCIvYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGk+IGhlcmUuIDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3MtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+MTIzIFdvb3N0ZXIgU3Q8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPiBOZXcgWW9yaywgTlkgMTAwMTI8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjEtMjEyLTU1NS01NTU1XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+KDIxMikgNTU1LTU1NTU8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPlNvY2lhbCBNZWRpYTwvaDQ+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmZvb3Rlci5zb2NpYWxNZWRpYUxpbmtzLm1hcCgoeyBuYW1lLCBsaW5rICwgaWNvbn0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2Ake25hbWV9LXNvY2lhbGB9IGlkPXtgJHtuYW1lfS1ob3Zlci1ib3hgfSBjbGFzc05hbWU9J2Zvb3Rlcl9fc29jaWFsLWhvdmVyLWJveCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLXNydFwiPntuYW1lfTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YCR7aWNvbn0gZm9vdGVyX19zb2NpYWwtbGlua2B9IGlkPXtgJHtuYW1lfS1zb2NpYWxgfSBhcmlhLWhpZGRlbj1cInRydWVcIiB0aXRsZT17bmFtZX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX2Jhc2UtdGV4dFwiPiZjb3B5OyBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IC0gTmV3IFlvcmssIE5ZPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9vdGVyOiBzdGF0ZS5mb290ZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzKShGb290ZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGdhbGxlcnlBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5X2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBwcm9qZWN0b3JBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBHYWxsZXJ5U2VsZWN0b3IgZnJvbSAnLi9HYWxsZXJ5U2VsZWN0b3InO1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0bGV0IGdhbGxlcnkgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5nYWxsZXJ5O1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbiBtb3VudCBHYWxsZXJ5IHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdGlmKGdhbGxlcnkpe1xyXG5cdFx0XHR0aGlzLmdvVG9HYWxsZXJ5KGdhbGxlcnkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbiB1cGRhdGUgR2FsbGVyeSBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcblx0fVxyXG5cclxuXHJcblx0Z29Ub0dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2VkIGdvVG9HYWxsZXJ5XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5hY3Rpb25zLmNob29zZV9nYWxsZXJ5KGdhbGxlcnkpO1xyXG5cdFx0dGhpcy5wcm9wcy5hY3Rpb25zLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdHRoaXMub3BlbkdhbGxlcnkoKTsgXHJcblx0XHR9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0b3BlbkdhbGxlcnkoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gb3BlbiB0aGUgZ2FsbGVyeVwiKTtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW5cIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdH1cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiAkKFwiI21haW5cIikub2Zmc2V0KCkudG9wXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwxNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRjbG9zZUdhbGxlcnkoKSB7XHJcblx0XHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpKXtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHR9XHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHR9XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJhdHRlbXB0aW5nIHB1c2ggdG8gaGlzdG9yeVwiKTtcclxuXHRcdC8vIHdpdGhSb3V0ZXIoICh7IGhpc3RvcnkgfSkgPT4geyBoaXN0b3J5LnB1c2goJy9nYWxsZXJ5JykgfSApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vY2hvb3NlX2dhbGxlcnk9eyB0aGlzLnByb3BzLmFjdGlvbnMuY2hvb3NlX2dhbGxlcnkgfVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgQ2xvc2UgPSB3aXRoUm91dGVyKCAoeyBoaXN0b3J5IH0pID0+IChcclxuXHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlXCIgXHJcblx0XHRcdHRpdGxlPVwiQ2xvc2UgR2FsbGVyeVwiIFxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmNsb3NlR2FsbGVyeSgpOyBcclxuXHRcdFx0XHRoaXN0b3J5LnB1c2goJy9nYWxsZXJ5Jyk7XHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlLXNydFwiPkNsb3NlIEdhbGxlcnk8L2I+XHJcblx0XHRcdFhcclxuXHRcdDwvc3Bhbj5cclxuXHRcdCkpO1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuZ2FsbGVyeS5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdDxHYWxsZXJ5U2VsZWN0b3IgZ29Ub0dhbGxlcnk9eyB0aGlzLmdvVG9HYWxsZXJ5IH0vPlxyXG5cdFx0XHRcdDxDbG9zZSAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiIGlkPVwiZ2FsbGVyeV9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImdhbGxlcnlcIn0gc2xpZGVzPXtzbGlkZXN9XHJcblx0XHRcdFx0XHRcdGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cclxuXHRcdFx0XHRcdFx0bG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGdhbGxlcnksIHByb2plY3RvciB9ID0gc3RhdGU7XHJcblx0cmV0dXJuIHsgXHJcblx0XHRnYWxsZXJ5LCBcclxuXHRcdHByb2plY3RvciBcclxuXHR9OyBcclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcbiBcdFx0YWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKE9iamVjdC5hc3NpZ24oe30sIGdhbGxlcnlBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2dhbGxlcnlTZWxlY3Rvcl9hY3Rpb25zJztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbi8valF1ZXJ5IGltcG9ydFxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmdhbGxlcnlTZWxlY3RvckxvYWQoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnR2FsbGVyeVNlbGVjdG9yIHByb3BzIGFyZTogJyx0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLmdhbGxlcnlTZWxlY3Rvci50aW1lcik7XHJcblx0XHR0aGlzLmdhbGxlcnlTZWxlY3RvclJlc2V0KCk7XHJcblx0fVxyXG5cclxuXHQvL3NhdmUgdGltZXIgdG8gc3RhdGUgdG8gY2xlYXIgb24gdW5tb3VudCBzbyB0aGF0IHRoZSB0aW1lciBpcyBjbGVhcmVkIGV2ZW4gaWYgcGFnZSBpcyB1bm1vdW50ZWQgbWlkIGxvYWRcclxuXHRnYWxsZXJ5U2VsZWN0b3JMb2FkKCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGxldCBjb3VudGVyID0gMDtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdCQoZ2FsbGVyeVNlbGVjdG9ySWRzW2NvdW50ZXJdLmNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKTtcclxuXHRcdFx0JChnYWxsZXJ5U2VsZWN0b3JJZHNbY291bnRlcl0uY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyJyk7XHJcblx0XHRcdGNvdW50ZXIrK1xyXG5cdFx0XHRpZihjb3VudGVyID49IGdhbGxlcnlTZWxlY3Rvcklkcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgNTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdH1cclxuXHJcblx0Z2FsbGVyeVNlbGVjdG9yUmVzZXQoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCJ9XHJcblx0XHRdO1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9ySWRzLmZvckVhY2goICh7IGNvbnRhaW5lcklkIH0pID0+IHtcclxuXHRcdFx0aWYoJChjb250YWluZXJJZCkuaGFzQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJykpIHtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdCQoY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblxyXG5cdC8vcHV0IGxpc3RlbmVycyBkaXJlY3RseSBvbiB0byB0aGUgaHRtbCB0YWdzXHJcblx0YWRkTGlzdGVuZXJzKCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcklkcy5mb3JFYWNoKCAoeyBjb250YWluZXJJZCwgZ2FsbGVyeVNlbGVjdG9ySWQsIGdhbGxlcnlOYW1lIH0pID0+IHtcclxuXHRcdFx0JChjb250YWluZXJJZCkuaG92ZXIoKCkgPT4gdGhpcy5ob3ZlckluKGdhbGxlcnlTZWxlY3RvcklkKSwgKCkgPT4gdGhpcy5ob3Zlck91dChnYWxsZXJ5U2VsZWN0b3JJZCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRob3ZlckluKGlkKSB7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1ob3ZlcicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0tc2xpZGUtaW4nKTtcclxuXHR9XHJcblxyXG5cclxuXHRob3Zlck91dChpZCkge1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0tc2xpZGUtaW4nKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLWhvdmVyJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PE5hdkxpbmsgdG89XCIvZ2FsbGVyeS9hY3Rpb25cIlxyXG5cdFx0XHRcdFx0aWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiVmlldyBUaGUgQWN0aW9uIEdhbGxlcnlcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMVwiPlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgPHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+QWN0aW9uPC9wPlxyXG5cdFx0XHQgICAgPC9OYXZMaW5rPlxyXG5cdFx0XHQgICAgPE5hdkxpbmsgdG89XCIvZ2FsbGVyeS9ldmVudHNcIlxyXG5cdFx0XHQgICAgXHRpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIlxyXG5cdFx0XHQgICAgXHRjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCJcclxuXHRcdFx0ICAgIFx0dGl0bGU9XCJWaWV3IFRoZSBFdmVudHMgR2FsbGVyeVwiXHJcblx0XHRcdCAgICA+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzJcIj5cclxuXHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICBcdDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkV2ZW50czwvcD5cclxuXHRcdFx0ICAgIDwvTmF2TGluaz5cclxuXHRcdFx0ICAgIDxOYXZMaW5rIHRvPVwiL2dhbGxlcnkvbGFuZHNjYXBlXCJcclxuXHRcdFx0ICAgIFx0aWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCJcclxuXHRcdFx0ICAgIFx0Y2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiXHJcblx0XHRcdCAgICBcdHRpdGxlPVwiVmlldyBUaGUgTGFuZHNjYXBlIEdhbGxlcnlcIlxyXG5cdFx0XHQgICAgPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5MYW5kc2NhcGU8L3A+XHJcblx0XHRcdCAgICA8L05hdkxpbms+XHJcblx0XHRcdCAgICA8TmF2TGluayB0bz1cIi9nYWxsZXJ5L3BvcnRyYWl0XCJcclxuXHRcdFx0ICAgIFx0aWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCJcclxuXHRcdFx0ICAgIFx0Y2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiXHJcblx0XHRcdCAgICBcdHRpdGxlPVwiVmlldyBUaGUgUG9ydHJhaXQgR2FsbGVyeVwiXHJcblx0XHRcdCAgICA+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzRcIj5cclxuXHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICBcdDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPlBvcnRhaXQ8L3A+XHJcblx0XHRcdCAgICA8L05hdkxpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcjogc3RhdGUuZ2FsbGVyeVNlbGVjdG9yXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoR2FsbGVyeVNlbGVjdG9yKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMnO1xyXG5cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRtb2JpbGVNZW51OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuaGFuZGxlTWVudUNsaWNrID0gdGhpcy5oYW5kbGVNZW51Q2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnaGVhZGVyIHByb3BzIGFyZSAnLCB0aGlzLnByb3BzKTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gdHJ1ZSl7XHJcblx0XHRcdHRoaXMudG9nZ2xlTW9iaWxlTWVudU91dCgpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZU1lbnVDbGljaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdtb2JpbGVNZW51IGNsaWNrZWQnKTtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gZmFsc2Upe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVJbigpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlTW9iaWxlTWVudUluKCkge1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlTW9iaWxlTWVudU91dCgpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2Jyk7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdi0tc2xpZGUtaW4nKTtcclxuXHR9XHJcbiBcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgb25Nb3VzZUxlYXZlPXsoKT0+IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSgpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBpZD1cImhlYWRlcl9fYnJhbmQtbGlua1wiIGV4YWN0IHRvPVwiL1wiIHRpdGxlPVwiQm9rZWggUGhvdG9ncmFwaHkgSW5jLlwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbG9nb1wiIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiKX0gYWx0PVwiQm9rZWggUGhvdG9ncmFwaHkgSW5jLiBsb2dvXCIgLz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1uYW1lXCI+Qm9rZWggUGhvdG9ncmFwaHk8L3A+XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1tZW51LWljb24gZmFzIGZhLWJhcnNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU1lbnVDbGljaygpfT48L2k+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGluay1saXN0XCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmhlYWRlci5saW5rSW5mby5tYXAoKHsga2V5LCBwYXRoLCBuYW1lIH0pID0+IDxsaSBrZXk9e2tleX0+IDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0PG5hdiBpZD1cImhlYWRlcl9fbW9iaWxlLW5hdlwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLW5hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLWxpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtgbW9iaWxlLSR7a2V5fWB9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rc1wiIGV4YWN0IHRvPXtwYXRofT57bmFtZX08L05hdkxpbms+PC9saT4pfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IGhlYWRlcjogc3RhdGUuaGVhZGVyIH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcywgbnVsbCwge3B1cmU6ZmFsc2V9KShIZWFkZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0NpcmNsZVR5cGUgaW1wb3J0XHJcbmltcG9ydCBDaXJjbGVUeXBlIGZyb20gJ2NpcmNsZXR5cGUnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hvbWVfYWN0aW9ucyc7XHJcblxyXG4vL0RhdGEgaW1wb3J0c1xyXG5pbXBvcnQgaG9tZVNsaWRlcyBmcm9tICcuL2RhdGEvaG9tZVNsaWRlcyc7XHJcblxyXG4vL2pRdWVyeSBpbXBvcnRcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy51cGRhdGVXaW5kb3dXaWR0aCA9IHRoaXMudXBkYXRlV2luZG93V2lkdGguYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zbGlkZVNob3coKTtcclxuXHRcdHRoaXMudG9nZ2xlSG9tZU1vZGlmaWVyT24oKTtcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGgoKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdG5ldyBDaXJjbGVUeXBlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lX193ZWxjb21lLXRleHQnKSkucmFkaXVzKDYwMCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKCdIb21lIHByb3BzIGFyZTogJyx0aGlzLnByb3BzKTsgfSwgMTUwMCApO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVubW91bnRlZCBDb21wb25lbnRcIik7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9mZigpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93V2lkdGgpO1xyXG5cdFx0dGhpcy5zdG9wU2xpZGVTaG93KCk7XHJcblx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9uKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0taG9tZScpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlSG9tZU1vZGlmaWVyT2ZmKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0taG9tZScpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2luZG93V2lkdGgoKSB7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0fVxyXG5cclxuXHJcblx0c2xpZGVTaG93KCkge1xyXG5cdFx0bGV0IHsgaW50ZXJ2YWxUaW1lciB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybCgke2hvbWVTbGlkZXNbMF0uaW1nU3JjfSlgKTtcclxuXHRcdC8vYWRkIGZsYXNoLWluIGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTtcclxuXHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3hcIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdGxldCBjb3VudCA9IDFcclxuXHRcdGNvbnNvbGUubG9nKCdzbGlkZXNob3cgc3RhcnRpbmcnKTtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYoY291bnQgPT0gaG9tZVNsaWRlcy5sZW5ndGgpe1xyXG5cdFx0XHRcdGNvdW50ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaW1hZ2UgPSBob21lU2xpZGVzW2NvdW50XS5pbWdTcmM7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMuaG9tZS5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdFx0Y291bnQrK1xyXG5cdFx0XHRcdC8vYWRkIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGZsYXNoLWluIGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHRcdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXItLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vYWRkIGZsYXNoLWluIGNsYXNzIGFnYWluIHNvIHRoYXQgdGhlIGVmZmVjdCBzdGFydHMgb3ZlclxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly9yZW1vdmUgaG9tZV9fZmlsdGVyLWJveCBjbGFzc1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpOyB9LCA1KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7IH0sIDUpO1xyXG5cdFx0XHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtpbWFnZX0pYCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NvdW50KysgcGF1c2UgaXM6ICcsIHRoaXMucHJvcHMuaG9tZS5wYXVzZVNsaWRlU2hvdyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY291bnQgPSB0aGlzLmNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoY291bnQpO1xyXG5cdFx0XHR0aGlzLmNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoKTtcclxuXHRcdH0sIDg1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcih0aW1lcik7XHJcblx0XHRjb25zb2xlLmxvZygnc3RvcmVkIGludGVydmFsVGltZXIgaXMgJytpbnRlcnZhbFRpbWVyKTtcclxuXHR9XHJcblxyXG5cclxuXHRjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCkge1xyXG5cdFx0bGV0IHsgd2luZG93V2lkdGgsIHBhdXNlU2xpZGVTaG93IH0gPSB0aGlzLnByb3BzLmhvbWU7XHJcblx0XHRpZih3aW5kb3dXaWR0aCA8IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlU2xpZGVTaG93Q2hlY2sgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYod2luZG93V2lkdGggPj0gNTc2KXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlU2xpZGVTaG93Q2hlY2sgd2luZG93IGJpZyBlbm91Z2ggc3RhcnRlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblxyXG5cdC8vIGNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoY291bnQpIHtcclxuXHQvLyBcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdC8vIFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygnY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSB3aW5kb3cgdG9vIHNtYWxsIHN0b3BwZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudFxyXG5cdC8vIFx0fVxyXG5cdC8vIFx0aWYod2luZG93V2lkdGggPj0gNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IGJpZyBlbm91Z2ggc3RhcnRlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHQvLyBcdFx0cmV0dXJuIGNvdW50Kz0xXHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cclxuXHJcblx0c3RvcFNsaWRlU2hvdygpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdjbGVhcmluZyBpbnRlcnZhbFRpbWVyICcrdGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLmhvbWUuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiID5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiaG9tZV9fZmlsdGVyLWJveFwiIGNsYXNzTmFtZT1cImhvbWVfX2ZpbHRlci1ib3hcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWVcIj5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dFwiIGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWUtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRCb2tlaCBCZXN0IFBob3RvZ3JhcGh5XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGgxIGlkPVwiaG9tZV9fd2VsY29tZS10ZXh0LW1vYmlsZVwiIGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWUtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRCb2tlaCBCZXN0IFBob3RvZ3JhcGh5XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aG9tZTogc3RhdGUuaG9tZVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGlkPXtwcm9wcy5sb2FkZXJJZH0gY2xhc3NOYW1lPVwibG9hZGVyX19jb250YWluZXJcIj5cclxuXHRcdFx0PGltZyBpZD1cImxvZ28tbG9hZGVyMVwiIGNsYXNzTmFtZT1cImxvYWRlcl9fbG9nb1wiIHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmcnKX0+PC9pbWc+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjJcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJOb3RGb3VuZF9fY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiTm90Rm91bmRfX21haW4taGVhZGVyXCI+RXJyb3IgNDA0PC9oMT5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJOb3RGb3VuZF9fc3ViLWhlYWRlclwiPlNvcnJ5IHdlIGNhbid0IGZpbmQgdGhlIHBhZ2UgdGhhdCB5b3UgYXJlIGxvb2tpbmcgZm9yLjwvaDI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJOb3RGb3VuZF9fdGV4dFwiPiBcclxuXHRcdFx0XHRcdFx0SWYgeW91IG5lZWQgaGVscCBmaW5kaW5nIHNvbWV0aGluZyBvciBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMgeW91IGNvbnRhY3QgdXMgXHJcblx0XHRcdFx0XHRcdDxOYXZMaW5rIHRvPVwiL2NvbnRhY3RcIj5oZXJlLjwvTmF2TGluaz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxibG9ja3F1b3RlIGlkPVwiTm90Rm91bmRfX3F1b3RlXCIgY2xhc3NOYW1lPVwiTm90Rm91bmRfX3F1b3RlXCI+4oCcUGhvdG9ncmFwaHkgZm9yIG1lIGlzIG5vdCBsb29raW5nLCBpdOKAmXMgZmVlbGluZy4gSWYgeW91IGNhbuKAmXQgZmVlbCB3aGF0IHlvdeKAmXJlIGxvb2tpbmcgYXQsIHRoZW4geW914oCZcmUgbmV2ZXIgZ29pbmcgdG8gZ2V0IG90aGVycyB0byBmZWVsIGFueXRoaW5nIHdoZW4gdGhleSBsb29rIGF0IHlvdXIgcGljdHVyZXMu4oCdXHJcblx0XHRcdFx0XHRcdDxjaXRlIGlkPVwiTm90Rm91bmRfX3F1b3RlLWNpdGF0aW9uXCIgY2xhc3NOYW1lPVwiTm90Rm91bmRfX3F1b3RlLWNpdGF0aW9uXCI+IOKAlCBEb24gTWNDdWxsaW48L2NpdGU+XHJcblx0XHRcdFx0XHQ8L2Jsb2NrcXVvdGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL3F1ZXJ5U3RyaW5nIGltcG9ydFxyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xyXG5pbXBvcnQgRmlsbXN0cmlwIGZyb20gJy4vRmlsbXN0cmlwJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBQcm9qZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlciA9IHRoaXMuZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlciA9IHRoaXMuZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuZG93bkFycm93VmlzaWJpbGl0eSgpO1xyXG5cdFx0dGhpcy5wcm9wcy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRQcm9qZWN0b3IoKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmF1dG9SdW5Qcm9qZWN0b3IoKTtcclxuXHRcdH0sMTAwKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJQcm9qZWN0b3IgcHJvcHMgYXJlIFwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5wcm9qZWN0b3IuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHR0aGlzLnByb3BzLnNob3dfZmlsbXN0cmlwKGZhbHNlKTtcclxuXHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0bmV4dFNsaWRlKCkge1xyXG5cdFx0Ly8gaWYodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpe1xyXG5cdFx0Ly8gXHRsZXQgdmFsdWVzID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cdFx0Ly8gXHRsZXQgcGF0aCA9IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKHZhbHVlcy5pbWcpO1xyXG5cdFx0Ly8gXHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgJHtwYXRofT9pbWc9JHt2YWx1ZXMuaW1nfWApO1xyXG5cdFx0Ly8gfVxyXG5cdFx0bGV0IHBhdGggPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlTm8sIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgJHtwYXRofT9pbWc9JHtzbGlkZXNbY3VycmVudFNsaWRlTm9dLm5hbWV9YCk7XHJcblx0XHR0aGlzLnByb3BzLmluY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgc2xpZGVzLmxlbmd0aCk7XHJcblx0XHQvL2RlbGF5ZWQgc28gdGhhdCByZWR1eCBoYXMgdGltZSB0byB1cGRhdGUgc3RvcmUgZnJvbSBpbmNyZW1lbnRfc2xpZGUoKVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRwcmV2aW91c1NsaWRlKCkge1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlTm8sIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLnByb3BzLmRlY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgc2xpZGVzLmxlbmd0aCk7XHJcblx0XHQvL2RlbGF5ZWQgc28gdGhhdCByZWR1eCBoYXMgdGltZSB0byB1cGRhdGUgc3RvcmUgZnJvbSBkZWNyZW1lbnRfc2xpZGUoKVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHR1cGRhdGVTbGlkZVNob3coKSB7XHJcblx0XHRsZXQgeyBzbGlkZXMsIGN1cnJlbnRTbGlkZU5vIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW4gdXBkYXRlU2xpZGVTaG93IHByb3BzIGFyZTogXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0dGhpcy5maWxtc3RyaXBPdmVybGF5U2hpZnRlcigpO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV9jdXJyZW50X3NsaWRlX2luZm8oc2xpZGVzW2N1cnJlbnRTbGlkZU5vXSk7XHJcblx0fVxyXG5cclxuXHJcblx0bG9hZFByb2plY3RvcigpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMuc2xpZGVzKXtcclxuXHRcdFx0dGhpcy5wcm9wcy5sb2FkX25ld19zbGlkZXModGhpcy5wcm9wcy5zbGlkZXMpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMudXBkYXRlU2xpZGVTaG93KCk7IFxyXG5cdFx0XHR9LCA1MCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0YXV0b1J1blByb2plY3RvcigpIHtcclxuXHRcdGxldCBoYWxmU2VjQ291bnRlciA9IDA7XHJcblx0XHRsZXQgaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzID09PSB1bmRlZmluZWQpe1xyXG5cdFx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGhhbGZTZWNDb3VudGVyICs9IDUwMDtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzICYmIHRoaXMucHJvcHMucHJvamVjdG9yLnBhdXNlU2xpZGVTaG93ID09IGZhbHNlICYmIGhhbGZTZWNDb3VudGVyID49IDY1MDApe1xyXG5cdFx0XHRcdHRoaXMubmV4dFNsaWRlKCk7XHJcblx0XHRcdFx0aGFsZlNlY0NvdW50ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9LDUwMCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHBhdXNlQnV0dG9uSGFuZGxlcigpIHtcclxuXHRcdGxldCBwYXVzZVNsaWRlU2hvdyA9IHRoaXMucHJvcHMucHJvamVjdG9yLnBhdXNlU2xpZGVTaG93O1xyXG5cdFx0aWYocGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIikuYWRkQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvbi0taGlkZGVuXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIpLnJlbW92ZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiKS5hZGRDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiKS5yZW1vdmVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb24tLWhpZGRlblwiKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIpLmFkZENsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlLWljb25cIikucmVtb3ZlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvbi0taGlkZGVuXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIikuYWRkQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uLS1oaWRkZW5cIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBsYXktaWNvblwiKS5yZW1vdmVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb25cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0ZG93bkFycm93VmlzaWJpbGl0eSgpIHtcclxuXHRcdC8vaWYgY29udGFpbmVyIGhvdXNpbmcgdGhlIHByb2plY3RvciBpcyB0b28gc21hbGwgZG9uJ3QgZ2l2ZSB0aGUgb3B0aW9uIHRvIGJyaW5nIHVwIHRoZSBwaG90byBzdHJpcFxyXG5cdFx0bGV0IHByb2plY3RvckJveFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0aWYocHJvamVjdG9yQm94V2lkdGggPCA3NTApe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0cHJvamVjdG9yRG93bkhhbmRsZXIoKSB7XHJcblx0XHRsZXQgY2FsY3VsYXRlZFdpZHRoID0gdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzLmxlbmd0aCoyMDArXCJweFwiO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcCghdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2hvd0ZpbG1zdHJpcCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ3dpZHRoJywgY2FsY3VsYXRlZFdpZHRoKTtcclxuXHRcdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlcigpOyBcclxuXHRcdH0sIDI1KTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXJcIik7XHJcblx0fVxyXG5cclxuXHJcblx0c2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG5vdCBvbiBiZWZvcmUgdG9nZ2xpbmdcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKTtcclxuXHRcdFx0XHQvL0lmIGNvbnRyb2wtZG93biBpcyBpbiB1c2UgYnkgdGhlIGZpbG1zdHJpcCBsZWF2ZSBpdCBhbG9uZVxyXG5cdFx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dW5zaGlmdFByb2plY3RvckNvbnRyb2xzKCkge1xyXG5cdFx0Ly9tYWtlIHN1cmUgbW9kaWZpZWQgY2xhc3MgaXMgb24gYmVmb3JlIHRvZ2dsaW5nIGl0IG9mZlxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyKCkge1xyXG5cdFx0bGV0IGN1cnJlbnRTbGlkZU5vID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IuY3VycmVudFNsaWRlTm87XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiKS5jc3MoJ2xlZnQnLCBjdXJyZW50U2xpZGVObyoyMDApO1xyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoc2hpZnRCeSkge1xyXG5cdFx0bGV0IHRyYXZlbERpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbG1zdHJpcF9fY29udGFpbmVyJykub2Zmc2V0V2lkdGggLWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGxldCBwcm9wb3NlZFBvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpICsgc2hpZnRCeTtcclxuXHRcdGlmKHRyYXZlbERpc3RhbmNlIDw9IDAgfHwgcHJvcG9zZWRQb3NpdGlvbiA+IDAgfHwgdHJhdmVsRGlzdGFuY2UgKyBwcm9wb3NlZFBvc2l0aW9uIDwgMCl7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0bGV0IGZpbG1zdHJpcFBvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udGFpbmVyJykuY3NzKCdsZWZ0JykpO1xyXG5cdFx0bGV0IGxlZnRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JykpO1xyXG5cdFx0bGV0IHJpZ2h0QXJyb3dQb3NpdGlvbiA9IHBhcnNlSW50KCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnLCBmaWxtc3RyaXBQb3NpdGlvbiArIHNoaWZ0QnkpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JywgbGVmdEFycm93UG9zaXRpb24gKyAoc2hpZnRCeSotMSkpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcsIHJpZ2h0QXJyb3dQb3NpdGlvbiArIChzaGlmdEJ5Ki0xKSk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRmaWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlcihzaGlmdFRvKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNoaWZ0VG8gaXM6IFwiK3NoaWZ0VG8pO1xyXG5cdFx0aWYoc2hpZnRUbyA9PT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0c2hpZnRUbyA9IHRoaXMucHJvcHMucHJvamVjdG9yLmN1cnJlbnRTbGlkZU5vICogLTIwMDtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ1bmRlZmluZWQgc2hpZnRUbywgc2V0dGluZyBzaGlmdFRvXCIsIHNoaWZ0VG8pO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHByb2plY3RvckRpc3BsYXlXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGxldCBwcm9qZWN0b3JCb3hDZW50ZXIgPSBwcm9qZWN0b3JEaXNwbGF5V2lkdGgvMiAtIChwcm9qZWN0b3JEaXNwbGF5V2lkdGgvMiklMjAwO1xyXG5cdFx0bGV0IGZpbG1zdHJpcFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbG1zdHJpcF9fY29udGFpbmVyJykub2Zmc2V0V2lkdGg7XHJcblx0XHRsZXQgcmlnaHRBcnJvd1dpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHRyYXZlbERpc3RhbmNlID0gKGZpbG1zdHJpcFdpZHRoKi0xKSAgKyBwcm9qZWN0b3JEaXNwbGF5V2lkdGg7XHJcblx0XHRsZXQgbGVmdEFycm93T2Zmc2V0ID0gODtcclxuXHRcdGxldCByaWdodEFycm93T2Zmc2V0ID0gcHJvamVjdG9yRGlzcGxheVdpZHRoIC0gKHJpZ2h0QXJyb3dXaWR0aCArIDgpO1xyXG5cdFx0bGV0IGZpbG1zdHJpcE9mZnNldCA9IDA7XHJcblx0XHRsZXQgY2VudGVyQ2VsbCA9IHNoaWZ0VG8gKyBwcm9qZWN0b3JCb3hDZW50ZXI7XHJcblx0XHRpZih0cmF2ZWxEaXN0YW5jZSA+PSAwKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ0cmF2ZWxEaXN0YW5jZVwiKTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9IFxyXG5cdFx0aWYoY2VudGVyQ2VsbCA+PSAwKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJjZW50ZXJDZWxsXCIpO1xyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnLCBmaWxtc3RyaXBPZmZzZXQpO1xyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCBsZWZ0QXJyb3dPZmZzZXQpO1xyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgIHJpZ2h0QXJyb3dPZmZzZXQpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdGlmKGNlbnRlckNlbGwgPD0gdHJhdmVsRGlzdGFuY2Upe1xyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnLCB0cmF2ZWxEaXN0YW5jZSk7XHJcblx0XHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdCcpLmNzcygnbGVmdCcsICh0cmF2ZWxEaXN0YW5jZSotMSkgKyBsZWZ0QXJyb3dPZmZzZXQpO1xyXG5cdFx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgKHRyYXZlbERpc3RhbmNlKi0xKSArIHJpZ2h0QXJyb3dPZmZzZXQpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGNlbnRlckNlbGwpO1xyXG5cdFx0JCgnI2ZpbG1zdHJpcF9fY29udHJvbC1sZWZ0JykuY3NzKCdsZWZ0JywgKGNlbnRlckNlbGwqLTEpICsgbGVmdEFycm93T2Zmc2V0KTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRyb2wtcmlnaHQnKS5jc3MoJ2xlZnQnLCAoY2VudGVyQ2VsbCotMSkgKyByaWdodEFycm93T2Zmc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZUluZm8sIHNob3dGaWxtc3RyaXAsIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJwcm9qZWN0b3JcIiBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JcIiBcclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX0gXHJcblx0XHRcdFx0b25Nb3VzZUxlYXZlPXsgKCkgPT4gdGhpcy51bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHtjdXJyZW50U2xpZGVJbmZvID8gXHJcblx0XHRcdFx0XHQ8U2xpZGUgcGhvdG9JbmZvPXtjdXJyZW50U2xpZGVJbmZvfSBcclxuXHRcdFx0XHRcdFx0c3R5bGVGb3I9e3RoaXMucHJvcHMuc3R5bGVGb3J9IFxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0e3NsaWRlcyA/XHJcblx0XHRcdFx0XHQ8RmlsbXN0cmlwIHNsaWRlcz17c2xpZGVzfSBcclxuXHRcdFx0XHRcdFx0dXBkYXRlU2xpZGVTaG93PXsgKCkgPT4gdGhpcy51cGRhdGVTbGlkZVNob3coKSB9XHJcblx0XHRcdFx0XHRcdGZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXI9eyB0aGlzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIgfVxyXG5cdFx0XHRcdFx0XHRmaWxtc3RyaXBDb250YWluZXJKdW1wU2hpZnRlcj17IHRoaXMuZmlsbXN0cmlwQ29udGFpbmVySnVtcFNoaWZ0ZXIgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdG51bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2VlIHByZXZpb3VzIHBob3RvXCJcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMucHJldmlvdXNTbGlkZSgpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPmxlZnQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2VlIG5leHQgcGhvdG9cIlxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5uZXh0U2xpZGUoKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5yaWdodCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWRvd25cIiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlNlZSBhbGwgcGhvdG9zIGluIGN1cnJlbnQgZ2FsbGVyeVwiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnByb2plY3RvckRvd25IYW5kbGVyKCl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPmRvd24gYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtZG93blwiID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiUGF1c2UvUGxheSBzbGlkZSBzaG93XCIgXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLnBhdXNlQnV0dG9uSGFuZGxlcigpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5wYXVzZSBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9scy1wYXVzZS1wbGF5LWljb24td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aSBpZD1cInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS1pY29uXCIgY2xhc3NOYW1lPVwiZmFzIGZhLXBhdXNlLWNpcmNsZSBwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtaWNvblwiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGkgaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGxheS1pY29uXCIgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXktY2lyY2xlIHByb2plY3Rvcl9fY29udHJvbC1wbGF5LWljb24tLWhpZGRlblwiPjwvaT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IHByb2plY3Rvcjogc3RhdGUucHJvamVjdG9yfSB9XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7IHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0b3IpOyAiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcblxyXG5jbGFzcyBTbGlkZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuc2V0U3R5bGVzKCk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMucmVtb3ZlU3R5bGVzKCk7XHJcblx0fVxyXG5cclxuXHRzZXRTdHlsZXMoKSB7XHJcblx0XHRsZXQgeyBuYW1lIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdGxldCBzdHlsZUZvciA9IHRoaXMucHJvcHMuc3R5bGVGb3I7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBmcmFtZVxyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZS0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWVgKTtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIHBob3RvXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvLS0ke3N0eWxlRm9yfWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90b2ApO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlU3R5bGVzKCkge1xyXG5cdFx0bGV0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcy5waG90b0luZm87XHJcblx0XHRsZXQgeyBzdHlsZUZvciB9ID0gdGhpcy5wcm9wcy5zdHlsZUZvcjtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIGZyYW1lXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lYCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lLS0ke3N0eWxlRm9yfWApO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgcGhvdG9cclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG9gKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG8tLSR7c3R5bGVGb3J9YCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUxvYWRlZCgpIHtcclxuXHRcdCQoXCIjc2xpZGVfX2xvYWRlclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlRXJyb3JlZCgpIHtcclxuXHRcdCQoXCIjc2xpZGVfX2xvYWRlclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgeyBuYW1lLCBpbWFnZSB9ID0gdGhpcy5wcm9wcy5waG90b0luZm87XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9e2Ake25hbWV9LXNsaWRlX19mcmFtZWB9IGNsYXNzTmFtZT1cInNsaWRlX19mcmFtZVwiPlxyXG5cdFx0XHRcdDxpbWcgaWQ9e2Ake25hbWV9LXNsaWRlX19waG90b2B9IGNsYXNzTmFtZT1cInNsaWRlX19waG90b1wiIFxyXG5cdFx0XHRcdFx0c3JjPXtpbWFnZX0gIFxyXG5cdFx0XHRcdFx0b25Mb2FkPXt0aGlzLmhhbmRsZUltYWdlTG9hZGVkLmJpbmQodGhpcyl9IFxyXG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5oYW5kbGVJbWFnZUVycm9yZWQuYmluZCh0aGlzKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0PExvYWRlciBsb2FkZXJJZD17XCJzbGlkZV9fbG9hZGVyXCJ9Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGU7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0XHRcdDxwPk15IExvYWRlciBpc24ndCBpdCBncmVhdD88L3A+XHJcblx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3Q7IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZF9waG90byhuYW1lLCBpbWFnZSwgY3VycmVudFNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQUREX1BIT1RPJyxcclxuXHRcdGN1cnJlbnRTbGlkZXMsXHJcblx0XHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aW1hZ2VcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfbWVzc2FnZShtZXNzYWdlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9NRVNTQUdFJyxcclxuXHRcdG1lc3NhZ2VcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdF9jaGVjayhyZWRpcmVjdCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUkVESVJFQ1RfQ0hFQ0snLFxyXG5cdFx0cmVkaXJlY3RcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIodGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdHRpbWVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJfdGltZXIoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDTEVBUl9USU1FUicsXHJcblx0XHR0aW1lcjogZmFsc2VcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYWRkX3Bob3RvKG5hbWUsIGltYWdlLCBjdXJyZW50U2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdBRERfUEhPVE8nLFxyXG5cdFx0Y3VycmVudFNsaWRlcyxcclxuXHRcdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZV9nYWxsZXJ5KGdhbGxlcnkpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NIT09TRV9HQUxMRVJZJyxcclxuXHRcdGdhbGxlcnlcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbW9iaWxlX2hlYWRlcl9zdGF0dXMobW9iaWxlTWVudSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTU9CSUxFX0hFQURFUl9TVEFUVVMnLFxyXG5cdFx0bW9iaWxlTWVudVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcihpbnRlcnZhbFRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHRpbnRlcnZhbFRpbWVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfd2luZG93X3dpZHRoKHdpbmRvd1dpZHRoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9XSU5ET1dfV0lEVEgnLFxyXG5cdFx0d2luZG93V2lkdGhcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXVzZV9zbGlkZV9zaG93KHBhdXNlU2xpZGVTaG93KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdQQVVTRV9TTElERV9TSE9XJyxcclxuXHRcdHBhdXNlU2xpZGVTaG93XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyhjdXJyZW50U2xpZGVJbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9DVVJSRU5UX1NMSURFX0lORk8nLFxyXG5cdFx0Y3VycmVudFNsaWRlSW5mb1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX2N1cnJlbnRfc2xpZGVfbm8oY3VycmVudFNsaWRlTm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX0NVUlJFTlRfU0xJREVfTk8nLFxyXG5cdFx0Y3VycmVudFNsaWRlTm9cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHRvdGFsTm9TbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0lOQ1JFTUVOVF9TTElERScsXHJcblx0XHRjdXJyZW50U2xpZGVObyxcclxuXHRcdHRvdGFsTm9TbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHRvdGFsTm9TbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0RFQ1JFTUVOVF9TTElERScsXHJcblx0XHRjdXJyZW50U2xpZGVObyxcclxuXHRcdHRvdGFsTm9TbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXVzZV9zbGlkZV9zaG93KHBhdXNlU2xpZGVTaG93KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdQQVVTRV9TTElERV9TSE9XJyxcclxuXHRcdHBhdXNlU2xpZGVTaG93XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRfbmV3X3NsaWRlcyhzbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPQURfTkVXX1NMSURFUycsXHJcblx0XHRzbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWRfc2xpZGVzKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnVU5MT0FEX1NMSURFUycsXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd19maWxtc3RyaXAoc2hvd0ZpbG1zdHJpcCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU0hPV19GSUxNU1RSSVAnLFxyXG5cdFx0c2hvd0ZpbG1zdHJpcFxyXG5cdH1cclxufVxyXG4iLCJjb25zdCBnYWxsZXJ5U2xpZGVzID0ge1xyXG5cdGFjdGlvbjogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRheWxpZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImF0LXRoZS10cmFja1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdG9yY3Jvc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwidWx0aW1hdGUtc2F2ZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzb2NjZXItbWF0Y2hcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zb2NjZXItbWF0Y2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJsZWFwLW9mLWZhaXRoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbGVhcC1vZi1mYWl0aC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhpZ2gtanVtcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImtpY2stZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2tpY2stZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpZy13YXZlLXN1cmZpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iaWctd2F2ZS1zdXJmaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2thdGUtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NrYXRlLXBhcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJza2lpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdWRkbGUtanVtcGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3B1ZGRsZS1qdW1waW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhY2gtYmFja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iZWFjaC1iYWNrZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1cmYtc3BsYXNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzY2hyb2RpbmdlcnMta2lja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGV2ZW50czogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWNsb3Vkcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoZGF5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aGRheS1naXJsLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiNHRoLWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHJlZ25hbmN5LWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0aW5nLWNsYXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoLWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoLWFubm91bmNlbWVudC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWZyaWVuZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwid2VkZGluZy1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImZpcnN0LWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0ZS1jZWxlYnJhdGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRlLWNlbGVicmF0aW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGUtYW5kLWdyb29tXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtYW5kLWdyb29tLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRsYW5kc2NhcGU6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhcmNoZXMtbmF0aW9uYWwtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2FyY2hlcy1uYXRpb25hbC1wYXJrLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicm9va2x5bi1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9icm9va2x5bi1icmlkZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhbG0tY2xvdWRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvY2FsbS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJvYXRob3VzZS1jb3R0YWdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRldmlscy1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kZXZpbHMtYnJpZGdlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGFrZS1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBvcHBpZXNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBpZXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcGllci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJpdmVyLXJlZmxlY3Rpb25cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZHVzay1pbi1hZnJpY2FcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1hcnNoLXBlaXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm5pZ2h0LWRvbHBoaW5zXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbmlnaHQtZG9scGhpbnMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmbGF0aXJvbi1idWlsZGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2ZsYXRpcm9uLWJ1aWxkaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibW91bnRhaW4tbGFrZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21vdW50YWluLWxha2UuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJueWMtc2t5bGluZTJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZTIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdXJwbGUtZmxvd2Vyc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3B1cnBsZS1mbG93ZXJzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwb3J0cmFpdDogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1ibHVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtYmx1ci5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhdXRpZnVsLWNhc3VhbFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWNhc3VhbC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxvbmRlLWNsb3NlLXVwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhcm5pdmFsLW5pZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGFwcHktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInlvdW5nLW1vbmtzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC95b3VuZy1tb25rcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cC1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2xvc2UtdXAtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWRpbmctd29tYW5cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJnaXJsLXJhYmJpdC1mcmllbmRzaGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicmVkLWhhaXJlZC1jaGlsZFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvcmVkLWhhaXJlZC1jaGlsZC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0LWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndvbWFuLWRyZXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC93b21hbi1kcmVzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLXdvbWFuLWJva2VoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC13b21hbi1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQxXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnlTbGlkZXM7IiwiXHJcblxyXG5jb25zdCBob21lU2xpZGVzID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGcnKSxcclxuXHRcdH0sXHRcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL3N0YXJ5LWxlbnMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1saWdodHMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpZGVzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzbGlkZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYmVhY2gtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZmllbGQtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2ZpZWxkLXNob290LmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2luLWFuZC1vdXQtb2YtZm9jdXMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2luLWFuZC1vdXQtb2YtZm9jdXMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc21va2UtY2xvdWQnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL3Ntb2tlLWNsb3VkLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2F0LWR1c2snLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2F0LWR1c2suanBlZycpXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1lc3NhZ2U6IFsnJywnJ10sXHJcblx0cmVkaXJlY3Q6IGZhbHNlXHJcblx0fTtcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX01FU1NBR0UnOlxyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGFjdGlvbi5tZXNzYWdlO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbWVzc2FnZSB9XHJcblx0XHRjYXNlICdSRURJUkVDVF9DSEVDSyc6XHJcblx0XHRcdGxldCByZWRpcmVjdCA9IGFjdGlvbi5yZWRpcmVjdDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlZGlyZWN0IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNvY2lhbE1lZGlhTGlua3MgOiBbXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdG5hbWU6IFwiRmFjZUJvb2tcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjM0I1OTk4XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzI0NWFjZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkZsaWNrclwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvZGF2aWRfYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1mbGlja3JcIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiNGRTA4ODNcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjMTI4ZmRjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiSW5zdGFncmFtXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Jva2VoYmVzdHBob3RvZ3JhcGh5L1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjZjE3NTMwXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzdhMzhhYlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkxpbmtlZEluXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWRib2tlaC9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWxpbmtlZGluXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjMDA3N2I1XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzU2YjllZVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3Rlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAoJ1NFVF9GT09URVJfTElOS1MnKTpcclxuXHRcdFx0bGV0IGxpbmtzID0gYWN0aW9uLmxpbmtzO1xyXG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCBsaW5rc307XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXJfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfVElNRVInOlxyXG5cdFx0XHRsZXQgdGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aW1lciB9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfVElNRVInOlxyXG5cdFx0XHR0aW1lciA9IGFjdGlvbi50aW1lcjtcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgdGltZXJ9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnM7IiwiaW1wb3J0IGdhbGxlcnlTbGlkZXMgZnJvbSAnLi4vZGF0YS9nYWxsZXJ5U2xpZGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGNhc2UgJ0NIT09TRV9HQUxMRVJZJzpcclxuXHRcdFx0bGV0IGdhbGxlcnkgPSBhY3Rpb24uZ2FsbGVyeTtcclxuXHRcdFx0c2xpZGVzID0gWyAuLi5nYWxsZXJ5U2xpZGVzW2dhbGxlcnldIF1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsaW5rSW5mbzogW1xyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWhvbWUnLCBcclxuXHRcdFx0cGF0aDogJy8nLCBcclxuXHRcdFx0bmFtZTogJ0hvbWUnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWdhbGxlcnknLCBcclxuXHRcdFx0cGF0aDogJy9nYWxsZXJ5JywgXHJcblx0XHRcdG5hbWU6ICdQaG90byBHYWxsZXJ5J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1hYm91dCcsIFxyXG5cdFx0XHRwYXRoOiAnL2Fib3V0JywgXHJcblx0XHRcdG5hbWU6ICdBYm91dCBCb2tlaCdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstY29udGFjdCcsIFxyXG5cdFx0XHRwYXRoOiAnL2NvbnRhY3QnLCBcclxuXHRcdFx0bmFtZTogJ0NvbnRhY3QgVXMnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLXRlc3QnLCBcclxuXHRcdFx0cGF0aDogJy90ZXN0JywgXHJcblx0XHRcdG5hbWU6ICdUZXN0IFBhZ2UnXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bW9iaWxlTWVudTogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnTU9CSUxFX0hFQURFUl9TVEFUVVMnOlxyXG5cdFx0XHRsZXQgbW9iaWxlTWVudSA9IGFjdGlvbi5tb2JpbGVNZW51XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBtb2JpbGVNZW51IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob21lX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ1NUT1JFX1dJTkRPV19XSURUSCc6XHJcblx0XHRcdGxldCB3aW5kb3dXaWR0aCA9IGFjdGlvbi53aW5kb3dXaWR0aDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHdpbmRvd1dpZHRoIH07XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93O1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF1c2VTbGlkZVNob3cgfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGN1cnJlbnRTbGlkZU5vOiAwLFxyXG5cdHBhdXNlU2xpZGVTaG93OiBmYWxzZSxcclxuXHRzaG93RmlsbXN0cmlwOiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdG9yX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX0lORk8nOlxyXG5cdFx0XHRsZXQgY3VycmVudFNsaWRlSW5mbyA9IGFjdGlvbi5jdXJyZW50U2xpZGVJbmZvO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlSW5mbyB9XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX05PJzpcclxuXHRcdFx0bGV0IGN1cnJlbnRTbGlkZU5vID0gYWN0aW9uLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm99XHJcblx0XHRjYXNlICdJTkNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0bGV0IHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gdG90YWxOb1NsaWRlcyAtIDEpe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdERUNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0dG90YWxOb1NsaWRlcyA9IGFjdGlvbi50b3RhbE5vU2xpZGVzO1xyXG5cdFx0XHRpZihjdXJyZW50U2xpZGVObyA9PSAwKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IHRvdGFsTm9TbGlkZXMgLSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vIC09IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vIH1cclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3dcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH1cclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ0xPQURfTkVXX1NMSURFUyc6XHJcblx0XHRcdGxldCBzbGlkZXMgPSBhY3Rpb24uc2xpZGVzO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVJbmZvID0gc2xpZGVzWzBdO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IDAgXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMsIGN1cnJlbnRTbGlkZUluZm8sICBjdXJyZW50U2xpZGVOb307XHJcblx0XHRjYXNlICdVTkxPQURfU0xJREVTJzpcclxuXHRcdFx0bGV0IHRlbXBTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnY3VycmVudFNsaWRlSW5mbyddO1xyXG5cdFx0XHRkZWxldGUgdGVtcFN0YXRlWydzbGlkZXMnXTtcclxuXHRcdFx0cmV0dXJuIHsgLi4udGVtcFN0YXRlIH07XHJcblx0XHRjYXNlICdTSE9XX0ZJTE1TVFJJUCc6XHJcblx0XHRcdGxldCBzaG93RmlsbXN0cmlwID0gYWN0aW9uLnNob3dGaWxtc3RyaXA7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzaG93RmlsbXN0cmlwIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcblx0Ly8gY3VycmVudFNsaWRlSW5mbzoge1xyXG5cdC8vIFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdC8vIFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdC8vIH0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0b3JfcmVkdWNlcnM7IiwiLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2luZGV4Lmh0bWwnLFxyXG5cdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRjb21wb25lbnQ6IEhvbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBBYm91dFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0JyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2NvbnRhY3QvOnN0YXR1cycsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IENvbnRhY3RcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZ2FsbGVyeScsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogR2FsbGVyeVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9nYWxsZXJ5LzpnYWxsZXJ5JyxcclxuXHRcdGV4YWN0OiBmYWxzZSxcclxuXHRcdGNvbXBvbmVudDogR2FsbGVyeVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy90ZXN0JyxcclxuXHRcdGV4YWN0OiBmYWxzZSxcclxuXHRcdGNvbXBvbmVudDogVGVzdFxyXG5cdH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBhYm91dF9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2Fib3V0X3JlZHVjZXJzJztcclxuaW1wb3J0IGNvbnRhY3RfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9jb250YWN0X3JlZHVjZXJzJztcclxuaW1wb3J0IGZvb3Rlcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2Zvb3Rlcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBnYWxsZXJ5X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZ2FsbGVyeV9yZWR1Y2Vycyc7XHJcbmltcG9ydCBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMnO1xyXG5pbXBvcnQgaGVhZGVyX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzJztcclxuaW1wb3J0IGhvbWVfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9ob21lX3JlZHVjZXJzJztcclxuaW1wb3J0IHByb2plY3Rvcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycyc7XHJcblxyXG5cclxuLy9BZGQgYWRkaXRpb25hbCByZWR1Y2VycyBpbiBoZXJlIHRvIGJlIGNvbWJpbmVkIGludG8gb25lIHJlZHVjZXJcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdGFib3V0OiBhYm91dF9yZWR1Y2VycyxcclxuXHRjb250YWN0OiBjb250YWN0X3JlZHVjZXJzLFxyXG5cdGZvb3RlcjogZm9vdGVyX3JlZHVjZXJzLFxyXG5cdGdhbGxlcnk6IGdhbGxlcnlfcmVkdWNlcnMsXHJcblx0Z2FsbGVyeVNlbGVjdG9yOiBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMsXHJcblx0aGVhZGVyOiBoZWFkZXJfcmVkdWNlcnMsXHJcblx0aG9tZTogaG9tZV9yZWR1Y2VycyxcclxuXHRwcm9qZWN0b3I6IHByb2plY3Rvcl9yZWR1Y2VycyxcclxufSlcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcblx0cm9vdFJlZHVjZXIsXHJcblx0Ly8gaWYgcmVkZXggZGV2dG9vbHMgZXh0ZW5zaW9uIGlzIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHJ1biB0aGUgZGV2dG9vbHMgZnVuY3Rpb25cclxuXHRfX2lzQnJvd3Nlcl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNpcmNsZXR5cGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXN0YXRpYy1nemlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
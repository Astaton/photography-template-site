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
		key: 'render',
		value: function render() {
			var _this4 = this;

			var slides = this.props.slides;
			return _react2.default.createElement(
				'div',
				{ id: 'filmstrip__container', className: 'filmstrip__container' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlQWJvdXRNb2RpZmllck9uIiwidG9nZ2xlQWJvdXRNb2RpZmllck9mZiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlcyIsImFib3V0IiwiQ29tcG9uZW50Iiwic3RhdGVUb1Byb3BzIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbmRleCIsImltYWdlIiwiZmlsbXN0cmlwQ2VsbENsaWNrSGFuZGxlciIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsInNsaWRlTm8iLCJzdG9yZV9jdXJyZW50X3NsaWRlX25vIiwidXBkYXRlU2xpZGVTaG93Iiwic2hpZnRCeSIsInRyYXZlbERpc3RhbmNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldFdpZHRoIiwicHJvcG9zZWRQb3NpdGlvbiIsInBhcnNlSW50IiwiZmlsbXN0cmlwUG9zaXRpb24iLCJsZWZ0QXJyb3dQb3NpdGlvbiIsInJpZ2h0QXJyb3dQb3NpdGlvbiIsImZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIiLCJtYXBTbGlkZXNUb0ZpbG1zdHJpcCIsImZpbG1zdHJpcExlZnQiLCJmaWxtc3RyaXBSaWdodCIsIkZvb3RlciIsImFkZExpc3RlbmVycyIsImZvb3RlciIsInNvY2lhbE1lZGlhTGlua3MiLCJzb2NpYWxNZWRpYUxpbmtzSW5mbyIsImZvckVhY2giLCJmb250X2NvbG9yIiwiYmdfY29sb3IxIiwiYmdfY29sb3IyIiwiaG92ZXIiLCJob3Zlck9uIiwiaG92ZXJPZmYiLCJsaW5rIiwiaWNvbiIsImdhbGxlcnlBY3Rpb25zIiwiR2FsbGVyeSIsImNsb3NlR2FsbGVyeSIsImdhbGxlcnkiLCJjaG9vc2VfZ2FsbGVyeSIsInVubG9hZF9zbGlkZXMiLCJHYWxsZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5U2VsZWN0b3JMb2FkIiwiY2xlYXJJbnRlcnZhbCIsImdhbGxlcnlTZWxlY3RvciIsInRpbWVyIiwiZ2FsbGVyeVNlbGVjdG9yUmVzZXQiLCJnYWxsZXJ5U2VsZWN0b3JJZHMiLCJjb250YWluZXJJZCIsImdhbGxlcnlTZWxlY3RvcklkIiwiY291bnRlciIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3RvcmVfdGltZXIiLCJnYWxsZXJ5TmFtZSIsImhvdmVySW4iLCJob3Zlck91dCIsImNsaWNrIiwiZ29Ub0dhbGxlcnkiLCJvcGVuR2FsbGVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJIZWFkZXIiLCJtb2JpbGVNZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhlYWRlciIsInRvZ2dsZU1vYmlsZU1lbnVPdXQiLCJtb2JpbGVfaGVhZGVyX3N0YXR1cyIsInRvZ2dsZU1vYmlsZU1lbnVJbiIsImxpbmtJbmZvIiwia2V5IiwicHVyZSIsIkhvbWUiLCJ1cGRhdGVXaW5kb3dXaWR0aCIsInNsaWRlU2hvdyIsInRvZ2dsZUhvbWVNb2RpZmllck9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNpcmNsZVR5cGUiLCJyYWRpdXMiLCJ0b2dnbGVIb21lTW9kaWZpZXJPZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFNsaWRlU2hvdyIsInN0b3JlX3dpbmRvd193aWR0aCIsImlubmVyV2lkdGgiLCJpbnRlcnZhbFRpbWVyIiwiaG9tZSIsImhvbWVTbGlkZXMiLCJpbWdTcmMiLCJjb3VudCIsInBhdXNlU2xpZGVTaG93IiwiY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSIsIndpbmRvd1dpZHRoIiwicGF1c2Vfc2xpZGVfc2hvdyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvYWRlciIsImxvYWRlcklkIiwiUHJvamVjdG9yIiwiZG93bkFycm93VmlzaWJpbGl0eSIsImxvYWRQcm9qZWN0b3IiLCJhdXRvUnVuUHJvamVjdG9yIiwic2hvd19maWxtc3RyaXAiLCJjdXJyZW50U2xpZGVObyIsImluY3JlbWVudF9zbGlkZSIsImRlY3JlbWVudF9zbGlkZSIsImZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyIiwic3RvcmVfY3VycmVudF9zbGlkZV9pbmZvIiwibG9hZF9uZXdfc2xpZGVzIiwidW5kZWZpbmVkIiwibmV4dFNsaWRlIiwicHJvamVjdG9yQm94V2lkdGgiLCJjYWxjdWxhdGVkV2lkdGgiLCJzaG93RmlsbXN0cmlwIiwiY3VycmVudFNsaWRlSW5mbyIsInNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJ1bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMiLCJzdHlsZUZvciIsInByZXZpb3VzU2xpZGUiLCJwcm9qZWN0b3JEb3duSGFuZGxlciIsInBhdXNlQnV0dG9uSGFuZGxlciIsIlNsaWRlIiwic2V0U3R5bGVzIiwicmVtb3ZlU3R5bGVzIiwicGhvdG9JbmZvIiwiVGVzdCIsImFkZF9waG90byIsImN1cnJlbnRTbGlkZXMiLCJjbGVhcl90aW1lciIsInRvdGFsTm9TbGlkZXMiLCJnYWxsZXJ5U2xpZGVzIiwiYWN0aW9uIiwiZXZlbnRzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJpbml0aWFsU3RhdGUiLCJhYm91dF9yZWR1Y2VycyIsInB1c2giLCJjb250YWN0X3JlZHVjZXJzIiwiZm9vdGVyX3JlZHVjZXJzIiwibGlua3MiLCJnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMiLCJoZWFkZXJfcmVkdWNlcnMiLCJob21lX3JlZHVjZXJzIiwicHJvamVjdG9yX3JlZHVjZXJzIiwidGVtcFN0YXRlIiwicm9vdFJlZHVjZXIiLCJnYWxsZXJ5X3JlZHVjZXJzIiwiX19pc0Jyb3dzZXJfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Rjs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNB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MkI7QUFJbkN2RyxVQUFTK0csMEJBSjBCO0FBS25Dekcsa0JBQWlCbUcsa0NBTGtCO0FBTW5DM0UsU0FBUTRFLHlCQU4yQjtBQU9uQ3ZELE9BQU13RCx1QkFQNkI7QUFRbkNwTCxZQUFXcUw7QUFSd0IsQ0FBaEIsQ0FBcEI7O0FBV0EsSUFBTWpPLFFBQVEsd0JBQ2JtTyxXQURhO0FBRWI7QUFDQUUsS0FBYUEsSUFBSXZFLE9BQU93RSw0QkFBeEIsSUFBd0R4RSxPQUFPd0UsNEJBQVAsRUFIM0MsQ0FBZDs7a0JBTWV0TyxLOzs7Ozs7Ozs7OztBQzdCZix3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiOyIsImNvbnN0IGNsaWVudCA9IHtcclxuXHR1c2VyOiAnb3Jzb24xMDhAZ21haWwuY29tJyxcclxuXHRpZDogJzU1NzM0NjcxODY5MC1jaGQxZWYxY2UwdGpqbmgxN211cWQwMWRqZmk2b201by5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcblx0c2VjcmV0OiAnNmhTRmoxdWRCbHRNWGswZ0pRTmhOYTh3JyxcclxuXHRyZWZyZXNoVG9rZW46ICcxL3JuVlZaZzRpWTIyQUJDd2trdUpqVlk4TjBBaGRuanVLVHRUaGo3cFlROUlqTWJkYWFvSG9OTVpxYm5JNWlpejgnLFxyXG5cdGFjZXNzVG9rZW46ICd5YTI5Lkdsc0JCblRRXzVseWtHM3ZmakRWamRVMHFReTdDYjdvQjhlWjhfU2xOcDg2dW5Ba1JrS1pDc0ltSmZDandyem9CUmM3UEQwd0ctMFhyWlFES2tQY0dpdmNzQjRad1V0WVhDN3RtUWRmNkthMFdzcUFtWEI4akV1YTBqaWsnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckVtYWlsID0gXCJhc3RhdG9uMTA4QG91dGxvb2suY29tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCIvL2V4cHJlc3MgaW1wb3J0XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG4vL21pZGRsZXdhcmUgaW1wb3J0c1xyXG5pbXBvcnQgZXhwcmVzc1N0YXRpY0d6aXAgZnJvbSBcImV4cHJlc3Mtc3RhdGljLWd6aXBcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9zaGFyZWQvcm91dGVzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCc7XHJcblxyXG4vL2xvY2FsIGltcG9ydHNcclxuaW1wb3J0IGNsaWVudCwgeyB1c2VyRW1haWwgfSBmcm9tICcuLi8uLi9vYXV0aC9jbGllbnREYXRhJztcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZSgnLycsIGV4cHJlc3NTdGF0aWNHemlwKFwicHVibGljL1wiKSk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdGxldCBkZXN0ID0gcmVxLnVybCA9PSAnL2luZGV4Lmh0bWwnID8gJy8nIDogcmVxLnVybDtcclxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cclxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17ZGVzdH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdDxBcHAgLz4gXHJcblx0XHRcdDwvU3RhdGljUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpXHJcblxyXG5cdHJlcy5zZW5kKGBcclxuXHRcdDxodG1sIGxhbmc9XCJlbi11c1wiPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cclxuXHRcdFx0XHQ8dGl0bGU+Qm9rZWggQmVzdCBQaG90b2dyYXBoeSBJbmMuPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JHtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby5wbmcnKX0+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMi4wL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWhXVmpmbHdGeEw2c056bnRpaDI3YmZ4a3IyN1BtYmJLL2lTdkorYTQrMG93WHE3OXYrbHNGa1c1NGJPR2JpRFFcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxyXG5cdFx0XHRcdDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJhcHBcIj4ke21hcmt1cH08L2Rpdj5cclxuXHRcdFx0PC9ib2R5PlxyXG5cdFx0PC9odG1sPlxyXG5cdGApXHJcbn0pXHJcblxyXG5hcHAucG9zdCgnL2NvbnRhY3QnLCAocmVxLCByZXMpID0+IHtcclxuXHRsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcblx0XHRzZXJ2aWNlOiAnZ21haWwnLFxyXG5cdFx0aG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuXHRcdGF1dGg6IHtcclxuXHRcdFx0dHlwZTogJ09BdXRoMicsXHJcblx0XHRcdHVzZXI6IGNsaWVudC51c2VyLFxyXG5cdFx0XHRjbGllbnRJZDogY2xpZW50LmlkLFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IGNsaWVudC5zZWNyZXQsXHJcblx0XHRcdHJlZnJlc2hUb2tlbjogY2xpZW50LnJlZnJlc2hUb2tlbixcclxuXHRcdFx0YWNjZXNzVG9rZW46IGNsaWVudC5hY2Nlc3NUb2tlblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgbWFpbE9wdGlvbnMgPSB7XHJcblx0XHRmcm9tOiBgJHtyZXEuYm9keS5uYW1lfSA8JHtjbGllbnQudXNlcn0+YCxcclxuXHRcdHRvOiAnYXN0YXRvbjEwOEBvdXRsb29rLmNvbScsXHJcblx0XHRzdWJqZWN0OiAnQ29udGFjdCBmcm9tIEJva2VoIEJlc3QgUGhvdG8gd2Vic2l0ZScsXHJcblx0XHRodG1sOiAgYDwhRE9DVFlQRSA+XHJcblx0XHRcdFx0PGh0bWwgbGFuZz1cInVzLWVuXCI+XHJcblx0XHRcdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHRcdFx0PG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIj5cclxuXHRcdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aDsgaW5pdGlhbC1zY2FsZT0xLjA7IG1heGltdW0tc2NhbGU9MS4wOyB1c2VyLXNjYWxhYmxlPW5vO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGl0bGU+Q29vbCBFbWFpbCBicm88L3RpdGxlPlxyXG5cdFx0XHRcdFx0PC9oZWFkPlxyXG5cdFx0XHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkVtYWlsIEZyb20gJHtyZXEuYm9keS5uYW1lfSBhdCAke3JlcS5ib2R5LmVtYWlsfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHA+bWVzc3NhZ2UgZnJvbSAke3JlcS5ib2R5Lm5hbWV9IHJlYWRzOiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5tZXNzYWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm5hbWV9LCAke3JlcS5ib2R5Lm51bWJlcn0gJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9ib2R5PlxyXG5cdFx0XHRcdDwvaHRtbD5gXHJcblx0fVxyXG5cclxuXHR0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVyciwgaW5mbykgPT4ge1xyXG5cdFx0aWYoZXJyKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9mYWlsJyk7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFbWFpbCBzZW50Jyk7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3Qvc3VjY2VzcycpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICcrcG9ydCkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWJvdXRBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9hYm91dF9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9uKClcclxuXHRcdC8vIHRoaXMucHJvcHMuYWN0aW9ucy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQWJvdXQgcHJvcHMgYXJlJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9mZigpXHJcblx0fVxyXG5cclxuXHR0b2dnbGVBYm91dE1vZGlmaWVyT24oKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWFib3V0Jyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5hYm91dC5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJhYm91dF9fcGFnZS1oZWFkZXJcIj5PdXIgU3Rvcnk8L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiYWJvdXRcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+RGF2aWQgQm9rZWggPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBhIHNhZ2UgbW93ZXIgZ29hdCwgcmFjY29vbnMgcmh1YmFyYiBvdXRob3VzZSBhLCBhcHBsZXMgYmVycmllcyBjb3JuLiBLaWRuZXkgYmVhbnMgb3N0cmljaCB0cnVja3MuIEluIHRoZSBzdHJhdyByYWluIGJhcnJlbHMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyB3ZWxsIGtub3duIGZvciByYWtlcyBwbG93cy4gSm9obiBEZWVyZSBiZWVzLCBwYXJzbGV5IHN3ZWV0IGNvcm4gYXQsIHBvcmt5IHBpZyBzaG92ZWxzLiB2ZXRlcmluYXJpYW4gYmx1ZSBiZXJyaWVzIGNhdHRsZSBqZWxseSBjYW5uaW5nLiBCbHVlIGJlcnJpZXMgcGlnZW9ucyBidXp6IGFuZCBiZWFuIHByYWlyaWUgZG9ncyBuYWlscyBhdCBlc3QuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gLiBBdWdlcnMgb2F0cyBoZW4gY293cGllcy4gQXBwbGVzIGR1Y2suXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5PdXIgV29yayA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIHN0cmF3LCBxdWFpbCBhIG9zdHJpY2hlcyBkb25rZXksIGhheSBob29rIGN1Y3VtYmVycy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuIFNob3ZlbHMgYXQgcmFrZXMgcGxvd3MuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gSGF5YmluZSBjYXJyb3RzIHNveWJlYW5zLCBvd2xzIGR1Y2sgcmFpc2luZyBvciwgY2hlZXAgaW4gcGxvd3MuIE91dGhvdXNlIGF0IG5haWxzIG1vd2VyLiBGb3JhZ2UgSGFydmVzdGVyLCBiZWFuIGFuZCBTaWxhZy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJhYm91dF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Bd2FyZHMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8bGk+Q3VsdGl2YXRvciBicnVzc2VsIHNwcm91dHMgaGFycm93cywgY2VsZXJ5IGRyZWFkIHdpdGgga2FsZSBhdWdlcnMgaGFycm93cy4gVmV0ZXJpbmFyaWFuIGF0IFNlZWRlciBlZ2dzIHdpdGggd2F0ZXJtZWxvbiBvc3RyaWNoZXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPkNvbyB3aXRoIHJhYmJpdHMgZWN0LiBHcmFwZXMgbmVzdCBwaXRjaCBmb3JrIGFuIHBsb3dzIG1hcGxlIHN5cnVwIHllYXJsaW5ncywgcXVpbHQgc3F1ZWFrIGRvZ2dpZXMuIExhbWIgcGlnIHJvb3N0ZXIgc2hlZXAuIFV0dGVycyBhcmUgd2VhdGhlcnZhbmUgZm9hbCBlc3QuIDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Hb2JibGUgZmVlZCwgamVsbHkgcGVwcGVycyBhdCBwbG93IGJhc2lsIHN3YXRoZXIsIGNhdCB3ZWF0aGVydmFuZSBncmFpbiB0cnVja3MsIGhvb3QgcG9ueSByb2JpbnMgcGVhY29ja3MgYW4ga2FsZS4gUm9vc3RlciBjZWxlcnkgcGluZWFwcGxlcyBmZXJ0aWxpemVyLjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGFib3V0LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0YWJvdXQsIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgYWJvdXRBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBYm91dCk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0Um91dGUsXHJcblx0UmVkaXJlY3QsXHJcblx0U3dpdGNoXHJcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbi8vUm91dGVzIGltcG9ydFxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInBhZ2Utd3JhcHBlclwiIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0XHQ8U3dpdGNoPlxyXG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDLCAuLi5yZXN0IH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRleGFjdD17ZXhhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QyB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX0gXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N3aXRjaD5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vUmVhY3QgQ29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnRzIGltcG9ydHNcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb250YWN0X2FjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdHRoaXMuY29uZmlybU1lc3NhZ2VCb3goKTtcclxuXHRcdC8vdGltZW91dCBuZWVkZWQgZm9yIHJlZGlyZWN0IHRvIHN0eWxlIG1haW4gcHJvcGVybHkuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdHRoaXMucmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQ29udGFjdCBwcm9wcyBpczogJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5tb3VudGluZyBDb250YWN0XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIHdvcmtlZCByZWRpcmVjdGluZycpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayh0cnVlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyBtYXkgbm90IGhhdmUgd29ya2VkIHNldHRpbmcgcmVkaXJlY3QgdG8gZmFsc2UnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbmZpcm1NZXNzYWdlQm94KCkge1xyXG5cdFx0Ly9jaGVja3Mgc3RhdHVzIG9mIHNlbnQgbWVzc2FnZXMgYW5kIGRpc3BsYXlzIGEgbm90aWNlIGFjY29yZGluZ2x5XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0IGNvbmZpcm1NZXNzYWdlQm94XCIpXHJcblx0XHRsZXQgc3RhdHVzID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzKXtcclxuXHRcdFx0aWYoc3RhdHVzID09PSAnc3VjY2Vzcycpe1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgU2VudCEhJywgJ0lcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nXSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBzdWNjZXNzIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgRXJyb3IhIScsICdQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiddKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgZmFpbCBcIiwgdGhpcy5wcm9wcy5jb250YWN0KTsgfSwgMTAwMCk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHR9LCA2MDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPbigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4nKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4tLWNvbnRhY3QnKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUxvYWRlclN0eWxlcygpIHtcclxuXHRcdCQoJyNsb2FkZXJfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIxJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmNvbnRhY3QucmVkaXJlY3QgPT09IHRydWUpe1xyXG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPScvY29udGFjdCcgLz5cclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4nIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMgP1xyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNvbmZpcm1fX2NvbnRhaW5lclwiIGNsYXNzTmFtZT0nY29uZmlybV9fY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbmZpcm1fX2lubmVyJz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nY29uZmlybV9faGVhZGVyJz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMF19PC9oMj5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdjb25maXJtX190ZXh0Jz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMV19PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLW91dHRlci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1pbm5lci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFjdF9faGVhZGVyJz5HZXQgSW4gVG91Y2ggV2l0aCBVczwvaDE+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5JZiB5b3UncmUgdGhpbmtpbmcgYWJvdXQgaGlyaW5nIGEgcGhvdG9ncmFwaGVyIGZvciBhIHNob290LCB3ZSB3b3VsZCBsb3ZlIHRvIGRpc2N1c3MgaXQgd2l0aCB5b3UuICBXZSBjYW4gcHJvdmlkZSBwcm9mZXNzaW9uYWwgaW5zaWdodCBhbmQgaGVscCB0byBtYWtlIHlvdXIgZHJlYW0gc2hvb3QgYSByZWFsaXR5LiAgQ29uc3VsYXRpb25zIGFyZSBjb21wbGV0ZWx5IGZyZWUuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX2FkZHJlc3MtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBBZGRyZXNzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTIzIFdvb3N0ZXIgU3QgLSBOZXcgWW9yaywgTlkgMTAwMTJcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhciBmYS1lbnZlbG9wZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBFbWFpbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdERCb2tlaEBCb2tlaEJlc3QuY29tXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtcGhvbmVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gUGhvbmUgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoMjEyKSA1NTUtNTU1NVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19tZXNzYWdlLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBjb250YWN0OiBzdGF0ZS5jb250YWN0IH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQ29udGFjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19jb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J21lc3Nlbmdlcl9fZm9ybScgbWV0aG9kPSdwb3N0JyBhY3Rpb249Jyc+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J25hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1uYW1lJyBpZD0naW5wdXROYW1lJyBwbGFjZWhvbGRlcj0nTmFtZSAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdudW1iZXInIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1udW1iZXInIGlkPSdpbnB1dE51bWJlcicgcGxhY2Vob2xkZXI9J051bWJlcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1lbWFpbCcgaWQ9J2lucHV0RW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbWVzc2FnZScgaWQ9J2lucHV0TWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UgIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgaWQ9J21lc3Nlbmdlcl9fc2VuZCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2J1dHRvbicgdmFsdWU9J1NlbmQgTWVzc2FnZScgPjwvaW5wdXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpbG1zdHJpcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJGaWxtc3RyaXAgbW91bnRlZCBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQobmFtZSkge1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQobmFtZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbWFnZSBlcnJvclwiKTtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdG1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykge1xyXG5cdFx0bGV0IG1hcHBlZFNsaWRlcyA9IHNsaWRlcy5tYXAoICh7IG5hbWUsIGltYWdlIH0sIGluZGV4KSA9PiB7IFxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYga2V5PXtgZmlsbXN0cmlwX19jZWxsLSR7bmFtZX1gfSBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NlbGxcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHsgdGhpcy5maWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKGluZGV4KX0gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0YWx0PXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS1vdmVybGF5XCIgaWQ9XCJmaWxtc3RyaXBfX2ltYWdlLW92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e2BmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWB9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFwcGVkU2xpZGVzXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBDZWxsQ2xpY2tIYW5kbGVyKHNsaWRlTm8pIHtcclxuXHRcdGNvbnNvbGUubG9nKCdzbGlkZU5vIGlzOiAnLCBzbGlkZU5vKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9ubyhzbGlkZU5vKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYmVmb3JlIGNhbGwgdG8gdXBkYXRlU2xpZGVTaG93IHByb3BzIGFyZTogXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVNsaWRlU2hvdygpIFxyXG5cdFx0fSk7XHJcblx0XHQvLyB0aGlzLnByb3BzLnN0b3JlX2N1cnJlbnRfc2xpZGVfaW5mbyhzbGlkZUluZm8pO1xyXG5cdH1cclxuXHJcblx0ZmlsbXN0cmlwQ29udGFpbmVyU2hpZnRlcihzaGlmdEJ5KSB7XHJcblx0XHRsZXQgdHJhdmVsRGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsbXN0cmlwX19jb250YWluZXInKS5vZmZzZXRXaWR0aCAtZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RvcicpLm9mZnNldFdpZHRoO1xyXG5cdFx0bGV0IHByb3Bvc2VkUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSkgKyBzaGlmdEJ5O1xyXG5cdFx0aWYodHJhdmVsRGlzdGFuY2UgPD0gMCB8fCBwcm9wb3NlZFBvc2l0aW9uID4gMCB8fCB0cmF2ZWxEaXN0YW5jZSArIHByb3Bvc2VkUG9zaXRpb24gPCAwKXtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgZmlsbXN0cmlwUG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgbGVmdEFycm93UG9zaXRpb24gPSBwYXJzZUludCgkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnKSk7XHJcblx0XHRsZXQgcmlnaHRBcnJvd1Bvc2l0aW9uID0gcGFyc2VJbnQoJCgnI2ZpbG1zdHJpcF9fY29udHJvbC1yaWdodCcpLmNzcygnbGVmdCcpKTtcclxuXHRcdCQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnbGVmdCcsIGZpbG1zdHJpcFBvc2l0aW9uICsgc2hpZnRCeSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLWxlZnQnKS5jc3MoJ2xlZnQnLCBsZWZ0QXJyb3dQb3NpdGlvbiArIChzaGlmdEJ5Ki0xKSk7XHJcblx0XHQkKCcjZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0JykuY3NzKCdsZWZ0JywgcmlnaHRBcnJvd1Bvc2l0aW9uICsgKHNoaWZ0QnkqLTEpKTtcclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBMZWZ0KCkge1xyXG5cdFx0dGhpcy5maWxtc3RyaXBDb250YWluZXJTaGlmdGVyKDIwMCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZmlsbXN0cmlwUmlnaHQoKSB7XHJcblx0XHR0aGlzLmZpbG1zdHJpcENvbnRhaW5lclNoaWZ0ZXIoLTIwMCk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwiZmlsbXN0cmlwX19jb250YWluZXJcIiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdHsgc2xpZGVzID8gdGhpcy5tYXBTbGlkZXNUb0ZpbG1zdHJpcChzbGlkZXMpIDogbnVsbCB9XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJmaWxtc3RyaXBfX2NvbnRyb2wtbGVmdFwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIiBcclxuXHRcdFx0XHRcdHRpdGxlPVwiU2hpZnQgZmlsbXN0cmlwIHRvIHRoZSByaWdodFwiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBMZWZ0KCl9PlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXNydFwiPmZpbG1zdHJpcCBsZWZ0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1yaWdodFwiIFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgXHJcblx0XHRcdFx0XHR0aXRsZT1cIlNoaWZ0IGZpbG1zdHJpcCB0byB0aGUgbGVmdFwiIFxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBSaWdodCgpfT5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1zcnRcIj5maWxtc3RyaXAgcmlnaHQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIiA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiIGlkPVwiZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBwcm9qZWN0b3I6IHN0YXRlLnByb2plY3RvciB9IH07XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7IHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoRmlsbXN0cmlwKTsgIiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiRm9vdGVyIHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMucHJvcHMuZm9vdGVyLnNvY2lhbE1lZGlhTGlua3MpO1xyXG5cdH1cclxuXHJcblx0Ly9jaGVjayB0byBzZWUgaWYgdGhlc2UgY2FuIGJlIGFkZGVkIGRpcmVjdGx5IGlubGluZSBkdXJpbmcgdGhlIGluaXRpYWwgbWFwcGluZyBvZiB0aGUgU29jaWFsIE1lZGlhbCBMaW5rcyBpbiB0aGUgSlNYXHJcblx0YWRkTGlzdGVuZXJzKHNvY2lhbE1lZGlhTGlua3NJbmZvKSB7XHJcblx0XHRzb2NpYWxNZWRpYUxpbmtzSW5mby5mb3JFYWNoKCAoeyBmb250X2NvbG9yLCBuYW1lLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiB9KSA9PiB7XHJcblx0XHRcdCQoYCMke25hbWV9LWhvdmVyLWJveGApLmhvdmVyKCgpID0+IHRoaXMuaG92ZXJPbihgIyR7bmFtZX0tc29jaWFsYCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpLCAoKSA9PiB0aGlzLmhvdmVyT2ZmKGAjJHtuYW1lfS1zb2NpYWxgKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhvdmVyT24oaWQsIGZvbnRfY29sb3IsIGJnX2NvbG9yMSwgYmdfY29sb3IyKSB7XHJcblx0XHQkKGlkKS5jc3MoJ2NvbG9yJywgZm9udF9jb2xvcik7XHJcblx0XHQkKGlkKS5jc3MoJ2JhY2tncm91bmQnLCBgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAke2JnX2NvbG9yMX0sICR7YmdfY29sb3IyfSlgKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rLS1ob3ZlcicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmsnKTtcclxuXHR9XHJcblxyXG5cdGhvdmVyT2ZmKGlkKSB7XHJcblx0XHQkKGlkKS5jc3MoJ2NvbG9yJywgJ3doaXRlJyk7XHJcblx0XHQkKGlkKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCkpJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYm9keVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5BcnRpc3Q8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0LWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFydGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RGF2aWQgQm9rZWggZm91bmRlciBvZiBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5LCBJcyBhbiBhd2FyZCB3aW5uaW5nIHBob3RvZ3JhcGhlciB3aXRoIG92ZXIgOCB5ZWFycyBvZiBleHBlcmllbmNlLiBMZWFybiBtb3JlIGFib3V0IERhdmlkIGFuZCBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IFxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgaWQ9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtbGlua1wiIHRvPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpPiBoZXJlLiA8L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+Qm9rZWggQmVzdCBQaG90b2dyYXBoeTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFkZHJlc3MgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjEyMyBXb29zdGVyIFN0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4gTmV3IFlvcmssIE5ZIDEwMDEyPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cInRlbDoxLTIxMi01NTUtNTU1NVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPigyMTIpIDU1NS01NTU1PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj48L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9hZGRyZXNzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Tb2NpYWwgTWVkaWE8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWwtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcy5tYXAoKHsgbmFtZSwgbGluayAsIGljb259KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtgJHtuYW1lfS1zb2NpYWxgfSBpZD17YCR7bmFtZX0taG92ZXItYm94YH0gY2xhc3NOYW1lPSdmb290ZXJfX3NvY2lhbC1ob3Zlci1ib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1zcnRcIj57bmFtZX08L2I+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2Ake2ljb259IGZvb3Rlcl9fc29jaWFsLWxpbmtgfSBpZD17YCR7bmFtZX0tc29jaWFsYH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGl0bGU9e25hbWV9PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYmFzZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlLXRleHRcIj4mY29weTsgQm9rZWggQmVzdCBQaG90b2dyYXBoeSAtIE5ldyBZb3JrLCBOWTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb290ZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGZvb3Rlcjogc3RhdGUuZm9vdGVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcykoRm9vdGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgZ2FsbGVyeUFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHByb2plY3RvckFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEdhbGxlcnlTZWxlY3RvciBmcm9tICcuL0dhbGxlcnlTZWxlY3Rvcic7XHJcbmltcG9ydCBQcm9qZWN0b3IgZnJvbSAnLi9Qcm9qZWN0b3InO1xyXG5cclxuY2xhc3MgR2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uIG1vdW50IEdhbGxlcnkgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0Y29uc29sZS5sb2coKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIEdhbGxlcnkgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNsb3NlR2FsbGVyeSgpIHtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW4tLWdhbGxlcnlcIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlc1wiKTtcclxuXHRcdH1cclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHR9XHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdH1cclxuXHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuZ2FsbGVyeS5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdDxHYWxsZXJ5U2VsZWN0b3IgY2hvb3NlX2dhbGxlcnk9eyB0aGlzLnByb3BzLmFjdGlvbnMuY2hvb3NlX2dhbGxlcnkgfSB1bmxvYWRfc2xpZGVzPXsgdGhpcy5wcm9wcy5hY3Rpb25zLnVubG9hZF9zbGlkZXMgfS8+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FsbGVyeV9fY2xvc2VcIiB0aXRsZT1cIkNsb3NlIEdhbGxlcnlcIiBvbkNsaWNrPXsgKCkgPT4gdGhpcy5jbG9zZUdhbGxlcnkoKSB9PlxyXG5cdFx0XHRcdDxiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlLXNydFwiPkNsb3NlIEdhbGxlcnk8L2I+XHJcblx0XHRcdFx0WFxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlcy1jbG9zZWRcIiBpZD1cImdhbGxlcnlfX2ltYWdlc1wiPlxyXG5cdFx0XHRcdFx0PFByb2plY3RvciBzdHlsZUZvcj17XCJnYWxsZXJ5XCJ9IHNsaWRlcz17c2xpZGVzfS8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdGNvbnN0IHsgZ2FsbGVyeSwgcHJvamVjdG9yIH0gPSBzdGF0ZTtcclxuXHRyZXR1cm4geyBcclxuXHRcdGdhbGxlcnksIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgZ2FsbGVyeUFjdGlvbnMsIHByb2plY3RvckFjdGlvbnMpLCBkaXNwYXRjaClcclxuXHR9OyBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoR2FsbGVyeSk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2dhbGxlcnlTZWxlY3Rvcl9hY3Rpb25zJztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbi8valF1ZXJ5IGltcG9ydFxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmdhbGxlcnlTZWxlY3RvckxvYWQoKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnR2FsbGVyeVNlbGVjdG9yIHByb3BzIGFyZTogJyx0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLmdhbGxlcnlTZWxlY3Rvci50aW1lcik7XHJcblx0XHR0aGlzLmdhbGxlcnlTZWxlY3RvclJlc2V0KCk7XHJcblx0fVxyXG5cclxuXHQvL3NhdmUgdGltZXIgdG8gc3RhdGUgdG8gY2xlYXIgb24gdW5tb3VudCBzbyB0aGF0IHRoZSB0aW1lciBpcyBjbGVhcmVkIGV2ZW4gaWYgcGFnZSBpcyB1bm1vdW50ZWQgbWlkIGxvYWRcclxuXHRnYWxsZXJ5U2VsZWN0b3JMb2FkKCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGxldCBjb3VudGVyID0gMDtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcblx0XHRcdCQoZ2FsbGVyeVNlbGVjdG9ySWRzW2NvdW50ZXJdLmNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKTtcclxuXHRcdFx0JChnYWxsZXJ5U2VsZWN0b3JJZHNbY291bnRlcl0uY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyJyk7XHJcblx0XHRcdGNvdW50ZXIrK1xyXG5cdFx0XHRpZihjb3VudGVyID49IGdhbGxlcnlTZWxlY3Rvcklkcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgNTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdH1cclxuXHJcblx0Z2FsbGVyeVNlbGVjdG9yUmVzZXQoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCJ9XHJcblx0XHRdO1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9ySWRzLmZvckVhY2goICh7IGNvbnRhaW5lcklkIH0pID0+IHtcclxuXHRcdFx0aWYoJChjb250YWluZXJJZCkuaGFzQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJykpIHtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdCQoY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblxyXG5cdC8vcHV0IGxpc3RlbmVycyBkaXJlY3RseSBvbiB0byB0aGUgaHRtbCB0YWdzXHJcblx0YWRkTGlzdGVuZXJzKCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwiLCBnYWxsZXJ5TmFtZTogXCJhY3Rpb25cIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCIsIGdhbGxlcnlOYW1lOiBcImV2ZW50c1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIiwgZ2FsbGVyeU5hbWU6IFwibGFuZHNjYXBlXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwiLCBnYWxsZXJ5TmFtZTogXCJwb3J0cmFpdFwifVxyXG5cdFx0XTtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcklkcy5mb3JFYWNoKCAoeyBjb250YWluZXJJZCwgZ2FsbGVyeVNlbGVjdG9ySWQsIGdhbGxlcnlOYW1lIH0pID0+IHtcclxuXHRcdFx0JChjb250YWluZXJJZCkuaG92ZXIoKCkgPT4gdGhpcy5ob3ZlckluKGdhbGxlcnlTZWxlY3RvcklkKSwgKCkgPT4gdGhpcy5ob3Zlck91dChnYWxsZXJ5U2VsZWN0b3JJZCkpO1xyXG5cdFx0XHQkKGNvbnRhaW5lcklkKS5jbGljaygoKSA9PiB0aGlzLmdvVG9HYWxsZXJ5KGdhbGxlcnlOYW1lKSlcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdGdvVG9HYWxsZXJ5KGdhbGxlcnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiY2xpY2tlZCBnb1RvR2FsbGVyeSBvbiBcIisgZ2FsbGVyeSk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMuY2hvb3NlX2dhbGxlcnkoZ2FsbGVyeSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMub3BlbkdhbGxlcnkoKTsgfSwgNTApO1xyXG5cdH1cclxuXHJcblx0b3BlbkdhbGxlcnkoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gb3BlbiB0aGUgZ2FsbGVyeVwiKTtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW5cIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdH1cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiAkKFwiI21haW5cIikub2Zmc2V0KCkudG9wXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwxNTAwKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gY2xvc2VHYWxsZXJ5KCkge1xyXG5cdC8vIFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKSl7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0Ly8gXHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHQvLyBcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdGhvdmVySW4oaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdH1cclxuXHJcblxyXG5cdGhvdmVyT3V0KGlkKSB7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIEFjdGlvbiBHYWxsZXJ5XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzFcIj5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgIDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkFjdGlvbjwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBFdmVudHMgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18yXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5FdmVudHM8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgTGFuZHNjYXBlIEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fM1wiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+TGFuZHNjYXBlPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIFBvcnRyYWl0IEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNFwiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+UG9ydGFpdDwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3I6IHN0YXRlLmdhbGxlcnlTZWxlY3RvclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnlTZWxlY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hlYWRlcl9hY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bW9iaWxlTWVudTogZmFsc2UsXHJcblx0XHR9XHJcblx0XHR0aGlzLmhhbmRsZU1lbnVDbGljayA9IHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlYWRlciBwcm9wcyBhcmUgJywgdGhpcy5wcm9wcyk7XHJcblxyXG5cdH1cclxuXHJcblx0aGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNZW51Q2xpY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbW9iaWxlTWVudSBjbGlja2VkJyk7XHJcblx0XHRpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSB0cnVlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51T3V0KCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXMoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51SW4oKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVJbigpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2LS1zbGlkZS1pbicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYnKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVPdXQoKSB7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0fVxyXG4gXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uTW91c2VMZWF2ZT17KCk9PiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUoKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1saW5rXCIgaWQ9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBleGFjdCB0bz1cIi9cIiB0aXRsZT1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy5cIj5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxvZ29cIiBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIil9IGFsdD1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy4gbG9nb1wiIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbmFtZVwiPkJva2VoIFBob3RvZ3JhcGh5PC9wPlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbWVudS1pY29uIGZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVNZW51Q2xpY2soKX0+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtrZXl9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCIgZXhhY3QgdG89e3BhdGh9PntuYW1lfTwvTmF2TGluaz48L2xpPil9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDxuYXYgaWQ9XCJoZWFkZXJfX21vYmlsZS1uYXZcIiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGVyLmxpbmtJbmZvLm1hcCgoeyBrZXksIHBhdGgsIG5hbWUgfSkgPT4gPGxpIGtleT17YG1vYmlsZS0ke2tleX1gfT4gPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBoZWFkZXI6IHN0YXRlLmhlYWRlciB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMsIG51bGwsIHtwdXJlOmZhbHNlfSkoSGVhZGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9DaXJjbGVUeXBlIGltcG9ydFxyXG5pbXBvcnQgQ2lyY2xlVHlwZSBmcm9tICdjaXJjbGV0eXBlJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9ob21lX2FjdGlvbnMnO1xyXG5cclxuLy9EYXRhIGltcG9ydHNcclxuaW1wb3J0IGhvbWVTbGlkZXMgZnJvbSAnLi9kYXRhL2hvbWVTbGlkZXMnO1xyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGggPSB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuc2xpZGVTaG93KCk7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9uKCk7XHJcblx0XHR0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dXaWR0aCk7XHJcblx0XHRuZXcgQ2lyY2xlVHlwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZV9fd2VsY29tZS10ZXh0JykpLnJhZGl1cyg2MDApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZygnSG9tZSBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7IH0sIDE1MDAgKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVbm1vdW50ZWQgQ29tcG9uZW50XCIpO1xyXG5cdFx0dGhpcy50b2dnbGVIb21lTW9kaWZpZXJPZmYoKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdHRoaXMuc3RvcFNsaWRlU2hvdygpO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJcIik7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVIb21lTW9kaWZpZXJPbigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpbmRvd1dpZHRoKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV93aW5kb3dfd2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IGludGVydmFsVGltZXIgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtob21lU2xpZGVzWzBdLmltZ1NyY30pYCk7XHJcblx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7XHJcblx0XHQvL3JlbW92ZSBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7XHJcblx0XHRsZXQgY291bnQgPSAxXHJcblx0XHRjb25zb2xlLmxvZygnc2xpZGVzaG93IHN0YXJ0aW5nJyk7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKGNvdW50ID09IGhvbWVTbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRjb3VudCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGltYWdlID0gaG9tZVNsaWRlc1tjb3VudF0uaW1nU3JjO1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGNvdW50KytcclxuXHRcdFx0XHQvL2FkZCBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTtcclxuXHRcdFx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdFx0XHQvL3JlbW92ZSBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0XHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdFx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzcyBhZ2FpbiBzbyB0aGF0IHRoZSBlZmZlY3Qgc3RhcnRzIG92ZXJcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aW1hZ2V9KWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb3VudCsrIHBhdXNlIGlzOiAnLCB0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvdW50ID0gdGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KTtcclxuXHRcdFx0dGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCk7XHJcblx0XHR9LCA4NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3N0b3JlZCBpbnRlcnZhbFRpbWVyIGlzICcraW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyB0b28gc21hbGwgc3RvcHBlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cclxuXHQvLyBjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KSB7XHJcblx0Ly8gXHRsZXQgeyB3aW5kb3dXaWR0aCwgcGF1c2VTbGlkZVNob3cgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoIDwgNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdC8vIFx0XHRyZXR1cm4gY291bnRcclxuXHQvLyBcdH1cclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudCs9MVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdHN0b3BTbGlkZVNob3coKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2xlYXJpbmcgaW50ZXJ2YWxUaW1lciAnK3RoaXMucHJvcHMuaG9tZS5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIiA+XHJcblx0XHRcdFx0PGRpdiBpZD1cImhvbWVfX2ZpbHRlci1ib3hcIiBjbGFzc05hbWU9XCJob21lX19maWx0ZXItYm94XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lXCI+XHJcblx0XHRcdFx0XHQ8aDEgaWQ9XCJob21lX193ZWxjb21lLXRleHRcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dC1tb2JpbGVcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhvbWU6IHN0YXRlLmhvbWVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZD17cHJvcHMubG9hZGVySWR9IGNsYXNzTmFtZT1cImxvYWRlcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjFcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0XHQ8aW1nIGlkPVwibG9nby1sb2FkZXIyXCIgY2xhc3NOYW1lPVwibG9hZGVyX19sb2dvXCIgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZycpfT48L2ltZz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XHJcbmltcG9ydCBGaWxtc3RyaXAgZnJvbSAnLi9GaWxtc3RyaXAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFByb2plY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5kb3duQXJyb3dWaXNpYmlsaXR5KCk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0fSw1MCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuYXV0b1J1blByb2plY3RvcigpO1xyXG5cdFx0fSwxMDApO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3RvciBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIFByb2plY3RvciBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMucHJvamVjdG9yLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcChmYWxzZSk7XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfY29udGFpbmVyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdG5leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5pbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gaW5jcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKSB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5kZWNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gZGVjcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKSB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHJcblx0dXBkYXRlU2xpZGVTaG93KCkge1xyXG5cdFx0bGV0IHsgc2xpZGVzLCBjdXJyZW50U2xpZGVObyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIHVwZGF0ZVNsaWRlU2hvdyBwcm9wcyBhcmU6IFwiLCB0aGlzLnByb3BzKTtcclxuXHRcdHRoaXMuZmlsbXN0cmlwT3ZlcmxheVNoaWZ0ZXIoKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKHNsaWRlc1tjdXJyZW50U2xpZGVOb10pO1xyXG5cdH1cclxuXHJcblxyXG5cdGxvYWRQcm9qZWN0b3IoKSB7XHJcblx0XHR0aGlzLnByb3BzLmxvYWRfbmV3X3NsaWRlcyh0aGlzLnByb3BzLnNsaWRlcyk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLnVwZGF0ZVNsaWRlU2hvdygpOyBcclxuXHRcdH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRhdXRvUnVuUHJvamVjdG9yKCkge1xyXG5cdFx0bGV0IGludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcyA9PT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0XHR0aGlzLmxvYWRQcm9qZWN0b3IoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnByb3BzLnByb2plY3Rvci5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdFx0dGhpcy5uZXh0U2xpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSw2NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0cGF1c2VCdXR0b25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3c7XHJcblx0XHRpZihwYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGRvd25BcnJvd1Zpc2liaWxpdHkoKSB7XHJcblx0XHQvL2lmIGNvbnRhaW5lciBob3VzaW5nIHRoZSBwcm9qZWN0b3IgaXMgdG9vIHNtYWxsIGRvbid0IGdpdmUgdGhlIG9wdGlvbiB0byBicmluZyB1cCB0aGUgcGhvdG8gc3RyaXBcclxuXHRcdGxldCBwcm9qZWN0b3JCb3hXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGlmKHByb2plY3RvckJveFdpZHRoIDwgNzUwKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHByb2plY3RvckRvd25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IGNhbGN1bGF0ZWRXaWR0aCA9IHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcy5sZW5ndGgqMjAwK1wicHhcIjtcclxuXHRcdHRoaXMucHJvcHMuc2hvd19maWxtc3RyaXAoIXRoaXMucHJvcHMucHJvamVjdG9yLnNob3dGaWxtc3RyaXApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyAkKCcjZmlsbXN0cmlwX19jb250YWluZXInKS5jc3MoJ3dpZHRoJywgY2FsY3VsYXRlZFdpZHRoKSB9LCAyNSk7XHJcblx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9fY29udGFpbmVyXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKSB7XHJcblx0XHQvL21ha2Ugc3VyZSBtb2RpZmllZCBjbGFzcyBpcyBub3Qgb24gYmVmb3JlIHRvZ2dsaW5nXHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG9uIGJlZm9yZSB0b2dnbGluZyBpdCBvZmZcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZS0tc2hpZnRcIik7XHJcblx0XHRcdC8vSWYgY29udHJvbC1kb3duIGlzIGluIHVzZSBieSB0aGUgZmlsbXN0cmlwIGxlYXZlIGl0IGFsb25lXHJcblx0XHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRmaWxtc3RyaXBPdmVybGF5U2hpZnRlcigpIHtcclxuXHRcdGxldCBjdXJyZW50U2xpZGVObyA9IHRoaXMucHJvcHMucHJvamVjdG9yLmN1cnJlbnRTbGlkZU5vO1xyXG5cdFx0JChcIiNmaWxtc3RyaXBfX3NlbGVjdG9yLWNlbGxcIikuY3NzKCdsZWZ0JywgY3VycmVudFNsaWRlTm8qMjAwKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZUluZm8sIHNob3dGaWxtc3RyaXAsIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJwcm9qZWN0b3JcIiBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0b3JcIiBcclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eyAoKSA9PiB0aGlzLnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX0gXHJcblx0XHRcdFx0b25Nb3VzZUxlYXZlPXsgKCkgPT4gdGhpcy51bnNoaWZ0UHJvamVjdG9yQ29udHJvbHMoKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHtjdXJyZW50U2xpZGVJbmZvID8gXHJcblx0XHRcdFx0XHQ8U2xpZGUgcGhvdG9JbmZvPXtjdXJyZW50U2xpZGVJbmZvfSBcclxuXHRcdFx0XHRcdFx0c3R5bGVGb3I9e3RoaXMucHJvcHMuc3R5bGVGb3J9IFxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0e3NsaWRlcyA/XHJcblx0XHRcdFx0XHQ8RmlsbXN0cmlwIHNsaWRlcz17c2xpZGVzfSBcclxuXHRcdFx0XHRcdFx0dXBkYXRlU2xpZGVTaG93PXsgKCkgPT4gdGhpcy51cGRhdGVTbGlkZVNob3coKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiIHRpdGxlPVwiU2VlIHByZXZpb3VzIHBob3RvXCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+bGVmdCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcmV2aW91c1NsaWRlKCl9ID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIgdGl0bGU9XCJTZWUgbmV4dCBwaG90b1wiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnJpZ2h0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgb25DbGljaz17KCkgPT4gdGhpcy5uZXh0U2xpZGUoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIgdGl0bGU9XCJTZWUgYWxsIHBob3RvcyBpbiBjdXJyZW50IGdhbGxlcnlcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5kb3duIGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWRvd25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb2plY3RvckRvd25IYW5kbGVyKCl9PjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiB0aXRsZT1cIlBhdXNlIHNsaWRlIHNob3dcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5wYXVzZSBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYXVzZS1jaXJjbGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhdXNlQnV0dG9uSGFuZGxlcigpfT48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgcHJvamVjdG9yOiBzdGF0ZS5wcm9qZWN0b3J9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKFByb2plY3Rvcik7ICIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zZXRTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5yZW1vdmVTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdHNldFN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHN0eWxlRm9yID0gdGhpcy5wcm9wcy5zdHlsZUZvcjtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIGZyYW1lXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lLS0ke3N0eWxlRm9yfWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgcGhvdG9cclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG8tLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTdHlsZXMoKSB7XHJcblx0XHRsZXQgeyBuYW1lIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdGxldCB7IHN0eWxlRm9yIH0gPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWVgKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90b2ApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlTG9hZGVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VFcnJvcmVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCB7IG5hbWUsIGltYWdlIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD17YCR7bmFtZX0tc2xpZGVfX2ZyYW1lYH0gY2xhc3NOYW1lPVwic2xpZGVfX2ZyYW1lXCI+XHJcblx0XHRcdFx0PGltZyBpZD17YCR7bmFtZX0tc2xpZGVfX3Bob3RvYH0gY2xhc3NOYW1lPVwic2xpZGVfX3Bob3RvXCIgXHJcblx0XHRcdFx0XHRzcmM9e2ltYWdlfSAgXHJcblx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlSW1hZ2VMb2FkZWQuYmluZCh0aGlzKX0gXHJcblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2ltZz5cclxuXHRcdFx0XHQ8TG9hZGVyIGxvYWRlcklkPXtcInNsaWRlX19sb2FkZXJcIn0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PHA+TXkgTG9hZGVyIGlzbid0IGl0IGdyZWF0PzwvcD5cclxuXHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiLCJleHBvcnQgZnVuY3Rpb24gYWRkX3Bob3RvKG5hbWUsIGltYWdlLCBjdXJyZW50U2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdBRERfUEhPVE8nLFxyXG5cdFx0Y3VycmVudFNsaWRlcyxcclxuXHRcdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9tZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX01FU1NBR0UnLFxyXG5cdFx0bWVzc2FnZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0X2NoZWNrKHJlZGlyZWN0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdSRURJUkVDVF9DSEVDSycsXHJcblx0XHRyZWRpcmVjdFxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcih0aW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0dGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcl90aW1lcigpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NMRUFSX1RJTUVSJyxcclxuXHRcdHRpbWVyOiBmYWxzZVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlX2dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hPT1NFX0dBTExFUlknLFxyXG5cdFx0Z2FsbGVyeVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb2JpbGVfaGVhZGVyX3N0YXR1cyhtb2JpbGVNZW51KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdNT0JJTEVfSEVBREVSX1NUQVRVUycsXHJcblx0XHRtb2JpbGVNZW51XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV93aW5kb3dfd2lkdGgod2luZG93V2lkdGgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1dJTkRPV19XSURUSCcsXHJcblx0XHR3aW5kb3dXaWR0aFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKGN1cnJlbnRTbGlkZUluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX0NVUlJFTlRfU0xJREVfSU5GTycsXHJcblx0XHRjdXJyZW50U2xpZGVJbmZvXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9ubyhjdXJyZW50U2xpZGVObykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9OTycsXHJcblx0XHRjdXJyZW50U2xpZGVOb1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgdG90YWxOb1NsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnSU5DUkVNRU5UX1NMSURFJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vLFxyXG5cdFx0dG90YWxOb1NsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgdG90YWxOb1NsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnREVDUkVNRU5UX1NMSURFJyxcclxuXHRcdGN1cnJlbnRTbGlkZU5vLFxyXG5cdFx0dG90YWxOb1NsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcihpbnRlcnZhbFRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHRpbnRlcnZhbFRpbWVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZF9uZXdfc2xpZGVzKHNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9BRF9ORVdfU0xJREVTJyxcclxuXHRcdHNsaWRlc1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZF9zbGlkZXMoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdVTkxPQURfU0xJREVTJyxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93X2ZpbG1zdHJpcChzaG93RmlsbXN0cmlwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTSE9XX0ZJTE1TVFJJUCcsXHJcblx0XHRzaG93RmlsbXN0cmlwXHJcblx0fVxyXG59IiwiY29uc3QgZ2FsbGVyeVNsaWRlcyA9IHtcclxuXHRhY3Rpb246IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkYXlsaWdodFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhdC10aGUtdHJhY2tcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9hdC10aGUtdHJhY2suanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtb3RvcmNyb3NzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInVsdGltYXRlLXNhdmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi91bHRpbWF0ZS1zYXZlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic29jY2VyLW1hdGNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGVhcC1vZi1mYWl0aFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWdoLWp1bXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJraWNrLWZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9raWNrLWZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaWctd2F2ZS1zdXJmaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmlnLXdhdmUtc3VyZmluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNrYXRlLXBhcmtcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2tpaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2tpaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHVkZGxlLWp1bXBpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYWNoLWJhY2tmbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdXJmLXNwbGFzaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2Nocm9kaW5nZXJzLWtpY2tmbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRldmVudHM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwYXJ0eS1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZS1jbG91ZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaXJ0aGRheS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIjR0aC1iaXJ0aGRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInByZWduYW5jeS1hbm5vdW5jZW1lbnRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ3JhZHVhdGluZy1jbGFzc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiaXJ0aC1hbm5vdW5jZW1lbnRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwYXJ0eS1mcmllbmRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZnJpZW5kcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndlZGRpbmctZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmaXJzdC1iaXJ0aGRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2ZpcnN0LWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ3JhZHVhdGUtY2VsZWJyYXRpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0ZS1jZWxlYnJhdGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWFuZC1ncm9vbVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bGFuZHNjYXBlOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYXJjaGVzLW5hdGlvbmFsLXBhcmtcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9hcmNoZXMtbmF0aW9uYWwtcGFyay5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJvb2tseW4tYnJpZGdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjYWxtLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJib2F0aG91c2UtY290dGFnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2JvYXRob3VzZS1jb3R0YWdlLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkZXZpbHMtYnJpZGdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImxha2UtcGVpclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2xha2UtcGVpci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1bnNldC1wb3BwaWVzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBvcHBpZXMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1bnNldC1waWVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBpZXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJyaXZlci1yZWZsZWN0aW9uXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcml2ZXItcmVmbGVjdGlvbi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImR1c2staW4tYWZyaWNhXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZHVzay1pbi1hZnJpY2EuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtYXJzaC1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm55Yy1za3lsaW5lXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJuaWdodC1kb2xwaGluc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZmxhdGlyb24tYnVpbGRpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdW50YWluLWxha2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmUyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHVycGxlLWZsb3dlcnNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cG9ydHJhaXQ6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWF1dGlmdWwtYmx1clwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1jYXN1YWxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1jYXN1YWwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjYXJuaXZhbC1uaWdodFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2Fybml2YWwtbmlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhhcHB5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hhcHB5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsYWNrLWFuZC13aGl0ZS1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ5b3VuZy1tb25rc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibG9uZGUtY2xvc2UtdXAtYm9rZWhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGlkaW5nLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oaWRpbmctd29tYW4uanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZ2lybC1yYWJiaXQtZnJpZW5kc2hpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvZ2lybC1yYWJiaXQtZnJpZW5kc2hpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJlZC1oYWlyZWQtY2hpbGRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdWl0LWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ3b21hbi1kcmVzc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjbG9zZS11cC13b21hbi1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdWl0MVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2xpZGVzOyIsIlxyXG5cclxuY29uc3QgaG9tZVNsaWRlcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tYW5nbGUuanBnJyksXHJcblx0XHR9LFx0XHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtcmVmbGVjdGlvbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLWNsb3NlLXVwLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sYW5kc2NhcGUtc2hvb3QuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWRlczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c2xpZGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2JlYWNoLXNob290JyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2ZpZWxkLXNob290JyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdpbi1hbmQtb3V0LW9mLWZvY3VzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9pbi1hbmQtb3V0LW9mLWZvY3VzLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3Ntb2tlLWNsb3VkJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdhdC1kdXNrJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lOiAnYWJvdmUtdGhlLWNsb3VkcycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHRcdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9QSE9UTyc6XHJcblx0XHRcdGxldCBwaG90b0luZm8gPSBhY3Rpb24ucGhvdG9JbmZvO1xyXG5cdFx0XHRsZXQgc2xpZGVzID0gWyAuLi5hY3Rpb25zLmN1cnJlbnRTbGlkZXMgXTtcclxuXHRcdFx0c2xpZGVzLnB1c2gocGhvdG9JbmZvKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtZXNzYWdlOiBbJycsJyddLFxyXG5cdHJlZGlyZWN0OiBmYWxzZVxyXG5cdH07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9NRVNTQUdFJzpcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBhY3Rpb24ubWVzc2FnZTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG1lc3NhZ2UgfVxyXG5cdFx0Y2FzZSAnUkVESVJFQ1RfQ0hFQ0snOlxyXG5cdFx0XHRsZXQgcmVkaXJlY3QgPSBhY3Rpb24ucmVkaXJlY3Q7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWRpcmVjdCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzb2NpYWxNZWRpYUxpbmtzIDogW1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRuYW1lOiBcIkZhY2VCb29rXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYm9rZWhiZXN0cGhvdG9ncmFwaHlcIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiIzNCNTk5OFwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiMyNDVhY2RcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJGbGlja3JcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZsaWNrci5jb20vcGhvdG9zL2RhdmlkX2Jva2VoL1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmxpY2tyXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjRkUwODgzXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzEyOGZkY1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkluc3RhZ3JhbVwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeS9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiI2YxNzUzMFwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiM3YTM4YWJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJMaW5rZWRJblwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhdmlkYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1saW5rZWRpblwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiIzAwNzdiNVwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiM1NmI5ZWVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb290ZXJfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgKCdTRVRfRk9PVEVSX0xJTktTJyk6XHJcblx0XHRcdGxldCBsaW5rcyA9IGFjdGlvbi5saW5rcztcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgbGlua3N9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IHRpbWVyID0gYWN0aW9uLnRpbWVyO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGltZXIgfTtcclxuXHRcdGNhc2UgJ0NMRUFSX1RJTUVSJzpcclxuXHRcdFx0dGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHRpbWVyfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzOyIsImltcG9ydCBnYWxsZXJ5U2xpZGVzIGZyb20gJy4uL2RhdGEvZ2FsbGVyeVNsaWRlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuZnVuY3Rpb24gYWJvdXRfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9QSE9UTyc6XHJcblx0XHRcdGxldCBwaG90b0luZm8gPSBhY3Rpb24ucGhvdG9JbmZvO1xyXG5cdFx0XHRsZXQgc2xpZGVzID0gWyAuLi5hY3Rpb25zLmN1cnJlbnRTbGlkZXMgXTtcclxuXHRcdFx0c2xpZGVzLnB1c2gocGhvdG9JbmZvKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRjYXNlICdDSE9PU0VfR0FMTEVSWSc6XHJcblx0XHRcdGxldCBnYWxsZXJ5ID0gYWN0aW9uLmdhbGxlcnk7XHJcblx0XHRcdHNsaWRlcyA9IFsgLi4uZ2FsbGVyeVNsaWRlc1tnYWxsZXJ5XSBdXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bGlua0luZm86IFtcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1ob21lJywgXHJcblx0XHRcdHBhdGg6ICcvJywgXHJcblx0XHRcdG5hbWU6ICdIb21lJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1nYWxsZXJ5JywgXHJcblx0XHRcdHBhdGg6ICcvZ2FsbGVyeScsIFxyXG5cdFx0XHRuYW1lOiAnUGhvdG8gR2FsbGVyeSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstYWJvdXQnLCBcclxuXHRcdFx0cGF0aDogJy9hYm91dCcsIFxyXG5cdFx0XHRuYW1lOiAnQWJvdXQgQm9rZWgnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWNvbnRhY3QnLCBcclxuXHRcdFx0cGF0aDogJy9jb250YWN0JywgXHJcblx0XHRcdG5hbWU6ICdDb250YWN0IFVzJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay10ZXN0JywgXHJcblx0XHRcdHBhdGg6ICcvdGVzdCcsIFxyXG5cdFx0XHRuYW1lOiAnVGVzdCBQYWdlJ1xyXG5cdFx0fSxcclxuXHRdLFxyXG5cdG1vYmlsZU1lbnU6IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBoZWFkZXJfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ01PQklMRV9IRUFERVJfU1RBVFVTJzpcclxuXHRcdFx0bGV0IG1vYmlsZU1lbnUgPSBhY3Rpb24ubW9iaWxlTWVudVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbW9iaWxlTWVudSB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcl9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0cGF1c2VTbGlkZVNob3c6IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9tZV9yZWR1Y2VycyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdTVE9SRV9XSU5ET1dfV0lEVEgnOlxyXG5cdFx0XHRsZXQgd2luZG93V2lkdGggPSBhY3Rpb24ud2luZG93V2lkdGg7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB3aW5kb3dXaWR0aCB9O1xyXG5cdFx0Y2FzZSAnUEFVU0VfU0xJREVfU0hPVyc6XHJcblx0XHRcdGxldCBwYXVzZVNsaWRlU2hvdyA9IGFjdGlvbi5wYXVzZVNsaWRlU2hvdztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRjdXJyZW50U2xpZGVObzogMCxcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcblx0c2hvd0ZpbG1zdHJpcDogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3Rvcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJzpcclxuXHRcdFx0bGV0IGN1cnJlbnRTbGlkZUluZm8gPSBhY3Rpb24uY3VycmVudFNsaWRlSW5mbztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZUluZm8gfVxyXG5cdFx0Y2FzZSAnU1RPUkVfQ1VSUkVOVF9TTElERV9OTyc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vfVxyXG5cdFx0Y2FzZSAnSU5DUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdGxldCB0b3RhbE5vU2xpZGVzID0gYWN0aW9uLnRvdGFsTm9TbGlkZXM7XHJcblx0XHRcdGlmKGN1cnJlbnRTbGlkZU5vID09IHRvdGFsTm9TbGlkZXMgLSAxKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm8gfVxyXG5cdFx0Y2FzZSAnREVDUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gMCl7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gPSB0b3RhbE5vU2xpZGVzIC0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyAtPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZVNsaWRlU2hvdyB9XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdMT0FEX05FV19TTElERVMnOlxyXG5cdFx0XHRsZXQgc2xpZGVzID0gYWN0aW9uLnNsaWRlcztcclxuXHRcdFx0Y3VycmVudFNsaWRlSW5mbyA9IHNsaWRlc1swXTtcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSAwIFxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzLCBjdXJyZW50U2xpZGVJbmZvLCAgY3VycmVudFNsaWRlTm99O1xyXG5cdFx0Y2FzZSAnVU5MT0FEX1NMSURFUyc6XHJcblx0XHRcdGxldCB0ZW1wU3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0XHRcdGRlbGV0ZSB0ZW1wU3RhdGVbJ2N1cnJlbnRTbGlkZUluZm8nXTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnc2xpZGVzJ107XHJcblx0XHRcdHJldHVybiB7IC4uLnRlbXBTdGF0ZSB9O1xyXG5cdFx0Y2FzZSAnU0hPV19GSUxNU1RSSVAnOlxyXG5cdFx0XHRsZXQgc2hvd0ZpbG1zdHJpcCA9IGFjdGlvbi5zaG93RmlsbXN0cmlwO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2hvd0ZpbG1zdHJpcCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5cdC8vIGN1cnJlbnRTbGlkZUluZm86IHtcclxuXHQvLyBcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHQvLyBcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHQvLyB9LFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdG9yX3JlZHVjZXJzOyIsIi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiAnLycsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogSG9tZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9pbmRleC5odG1sJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Fib3V0JyxcclxuXHRcdGV4YWN0OiBmYWxzZSxcclxuXHRcdGNvbXBvbmVudDogQWJvdXRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvY29udGFjdCcsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogQ29udGFjdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0LzpzdGF0dXMnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2dhbGxlcnknLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBHYWxsZXJ5XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL3Rlc3QnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBUZXN0XHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGFib3V0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvYWJvdXRfcmVkdWNlcnMnO1xyXG5pbXBvcnQgY29udGFjdF9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZm9vdGVyX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZm9vdGVyX3JlZHVjZXJzJztcclxuaW1wb3J0IGdhbGxlcnlfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzJztcclxuaW1wb3J0IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlTZWxlY3Rvcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBoZWFkZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9oZWFkZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgaG9tZV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hvbWVfcmVkdWNlcnMnO1xyXG5pbXBvcnQgcHJvamVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvcHJvamVjdG9yX3JlZHVjZXJzJztcclxuXHJcblxyXG4vL0FkZCBhZGRpdGlvbmFsIHJlZHVjZXJzIGluIGhlcmUgdG8gYmUgY29tYmluZWQgaW50byBvbmUgcmVkdWNlclxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0YWJvdXQ6IGFib3V0X3JlZHVjZXJzLFxyXG5cdGNvbnRhY3Q6IGNvbnRhY3RfcmVkdWNlcnMsXHJcblx0Zm9vdGVyOiBmb290ZXJfcmVkdWNlcnMsXHJcblx0Z2FsbGVyeTogZ2FsbGVyeV9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5U2VsZWN0b3I6IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyxcclxuXHRoZWFkZXI6IGhlYWRlcl9yZWR1Y2VycyxcclxuXHRob21lOiBob21lX3JlZHVjZXJzLFxyXG5cdHByb2plY3RvcjogcHJvamVjdG9yX3JlZHVjZXJzLFxyXG59KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuXHRyb290UmVkdWNlcixcclxuXHQvLyBpZiByZWRleCBkZXZ0b29scyBleHRlbnNpb24gaXMgb24gdGhlIHdpbmRvdyBvYmplY3QgcnVuIHRoZSBkZXZ0b29scyBmdW5jdGlvblxyXG5cdF9faXNCcm93c2VyX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2lyY2xldHlwZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc3RhdGljLWd6aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
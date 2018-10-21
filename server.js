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
		key: 'filmstripLeft',
		value: function filmstripLeft() {
			console.log("shifted filmstrip left");
		}
	}, {
		key: 'filmstripRight',
		value: function filmstripRight() {
			console.log("shifted filmstrip right");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlQWJvdXRNb2RpZmllck9uIiwidG9nZ2xlQWJvdXRNb2RpZmllck9mZiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlcyIsImFib3V0IiwiQ29tcG9uZW50Iiwic3RhdGVUb1Byb3BzIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbWFnZSIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsIm1hcFNsaWRlc1RvRmlsbXN0cmlwIiwiZmlsbXN0cmlwTGVmdCIsImZpbG1zdHJpcFJpZ2h0IiwiRm9vdGVyIiwiYWRkTGlzdGVuZXJzIiwiZm9vdGVyIiwic29jaWFsTWVkaWFMaW5rcyIsInNvY2lhbE1lZGlhTGlua3NJbmZvIiwiZm9yRWFjaCIsImZvbnRfY29sb3IiLCJiZ19jb2xvcjEiLCJiZ19jb2xvcjIiLCJob3ZlciIsImhvdmVyT24iLCJob3Zlck9mZiIsImxpbmsiLCJpY29uIiwiZ2FsbGVyeUFjdGlvbnMiLCJHYWxsZXJ5IiwiY2xvc2VHYWxsZXJ5IiwiZ2FsbGVyeSIsImNob29zZV9nYWxsZXJ5IiwidW5sb2FkX3NsaWRlcyIsIkdhbGxlcnlTZWxlY3RvciIsImdhbGxlcnlTZWxlY3RvckxvYWQiLCJjbGVhckludGVydmFsIiwiZ2FsbGVyeVNlbGVjdG9yIiwidGltZXIiLCJnYWxsZXJ5U2VsZWN0b3JSZXNldCIsImdhbGxlcnlTZWxlY3RvcklkcyIsImNvbnRhaW5lcklkIiwiZ2FsbGVyeVNlbGVjdG9ySWQiLCJjb3VudGVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzdG9yZV90aW1lciIsImdhbGxlcnlOYW1lIiwiaG92ZXJJbiIsImhvdmVyT3V0IiwiY2xpY2siLCJnb1RvR2FsbGVyeSIsIm9wZW5HYWxsZXJ5IiwiSGVhZGVyIiwibW9iaWxlTWVudSIsImhhbmRsZU1lbnVDbGljayIsImhhbmRsZU1vdXNlTGVhdmUiLCJoZWFkZXIiLCJ0b2dnbGVNb2JpbGVNZW51T3V0IiwibW9iaWxlX2hlYWRlcl9zdGF0dXMiLCJ0b2dnbGVNb2JpbGVNZW51SW4iLCJsaW5rSW5mbyIsImtleSIsInB1cmUiLCJIb21lIiwidXBkYXRlV2luZG93V2lkdGgiLCJzbGlkZVNob3ciLCJ0b2dnbGVIb21lTW9kaWZpZXJPbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJDaXJjbGVUeXBlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJhZGl1cyIsInRvZ2dsZUhvbWVNb2RpZmllck9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wU2xpZGVTaG93Iiwic3RvcmVfd2luZG93X3dpZHRoIiwiaW5uZXJXaWR0aCIsImludGVydmFsVGltZXIiLCJob21lIiwiaG9tZVNsaWRlcyIsImltZ1NyYyIsImNvdW50IiwicGF1c2VTbGlkZVNob3ciLCJjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIiwid2luZG93V2lkdGgiLCJwYXVzZV9zbGlkZV9zaG93IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiTG9hZGVyIiwibG9hZGVySWQiLCJQcm9qZWN0b3IiLCJkb3duQXJyb3dWaXNpYmlsaXR5IiwibG9hZFByb2plY3RvciIsImF1dG9SdW5Qcm9qZWN0b3IiLCJzaG93X2ZpbG1zdHJpcCIsImN1cnJlbnRTbGlkZU5vIiwiaW5jcmVtZW50X3NsaWRlIiwidXBkYXRlU2xpZGVTaG93IiwiZGVjcmVtZW50X3NsaWRlIiwiZmlsbXN0cmlwT3ZlcmxheVNoaWZ0ZXIiLCJzdG9yZV9jdXJyZW50X3NsaWRlX2luZm8iLCJsb2FkX25ld19zbGlkZXMiLCJ1bmRlZmluZWQiLCJuZXh0U2xpZGUiLCJwcm9qZWN0b3JCb3hXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2FsY3VsYXRlZFdpZHRoIiwic2hvd0ZpbG1zdHJpcCIsImN1cnJlbnRTbGlkZUluZm8iLCJzaGlmdFByb2plY3RvckNvbnRyb2xzIiwidW5zaGlmdFByb2plY3RvckNvbnRyb2xzIiwic3R5bGVGb3IiLCJwcmV2aW91c1NsaWRlIiwiZmlsbVN0cmlwSGFuZGxlciIsInBhdXNlQnV0dG9uSGFuZGxlciIsIlNsaWRlIiwic2V0U3R5bGVzIiwicmVtb3ZlU3R5bGVzIiwicGhvdG9JbmZvIiwiVGVzdCIsImFkZF9waG90byIsImN1cnJlbnRTbGlkZXMiLCJjbGVhcl90aW1lciIsInRvdGFsTm9TbGlkZXMiLCJnYWxsZXJ5U2xpZGVzIiwiYWN0aW9uIiwiZXZlbnRzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJpbml0aWFsU3RhdGUiLCJhYm91dF9yZWR1Y2VycyIsInB1c2giLCJjb250YWN0X3JlZHVjZXJzIiwiZm9vdGVyX3JlZHVjZXJzIiwibGlua3MiLCJnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMiLCJoZWFkZXJfcmVkdWNlcnMiLCJob21lX3JlZHVjZXJzIiwicHJvamVjdG9yX3JlZHVjZXJzIiwidGVtcFN0YXRlIiwicm9vdFJlZHVjZXIiLCJnYWxsZXJ5X3JlZHVjZXJzIiwiX19pc0Jyb3dzZXJfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Rjs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxTQUFTO0FBQ2RDLE9BQU0sb0JBRFE7QUFFZEMsS0FBSSwwRUFGVTtBQUdkQyxTQUFRLDBCQUhNO0FBSWRDLGVBQWMsb0VBSkE7QUFLZEMsYUFBWTtBQUxFLENBQWY7O0FBUU8sSUFBTUMsZ0NBQVksd0JBQWxCOztrQkFFUU4sTTs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQWRBO0FBUkE7QUF3QkEsSUFBTU8sT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDOztBQUhBOzs7QUFKQTs7O0FBSkE7OztBQVZBOztBQXNCQSxJQUFNQyxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxHQUFKLENBQVEsR0FBUixFQUFhLGlDQUFrQixTQUFsQixDQUFiOztBQUVBRCxJQUFJQyxHQUFKLENBQVFDLHFCQUFXQyxVQUFYLENBQXNCLEVBQUNDLFVBQVUsS0FBWCxFQUF0QixDQUFSOztBQUVBSixJQUFJSyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ2hDLEtBQUlDLE9BQU9ILElBQUlJLEdBQUosSUFBVyxhQUFYLEdBQTJCLEdBQTNCLEdBQWlDSixJQUFJSSxHQUFoRDtBQUNBLEtBQU1DLFNBQVMsNEJBQ2Q7QUFBQyxzQkFBRDtBQUFBLElBQVUsT0FBT0MsZUFBakI7QUFDQztBQUFDLCtCQUFEO0FBQUEsS0FBYyxVQUFVSCxJQUF4QixFQUE4QixTQUFTLEVBQXZDO0FBQ0MsaUNBQUMsYUFBRDtBQUREO0FBREQsRUFEYyxDQUFmOztBQVFBRixLQUFJTSxJQUFKLDRRQU00Q0MsbUJBQU9BLENBQUMsNERBQVIsQ0FONUMsd1VBV21CSCxNQVhuQjtBQWVBLENBekJEOztBQTJCQVgsSUFBSWUsSUFBSixDQUFTLFVBQVQsRUFBcUIsVUFBQ1QsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDbEMsS0FBSVMsY0FBY0MscUJBQVdDLGVBQVgsQ0FBMkI7QUFDNUNDLFdBQVMsT0FEbUM7QUFFNUNDLFFBQU0sZ0JBRnNDO0FBRzVDQyxRQUFNO0FBQ0xDLFNBQU0sUUFERDtBQUVMaEMsU0FBTUQscUJBQU9DLElBRlI7QUFHTGlDLGFBQVVsQyxxQkFBT0UsRUFIWjtBQUlMaUMsaUJBQWNuQyxxQkFBT0csTUFKaEI7QUFLTEMsaUJBQWNKLHFCQUFPSSxZQUxoQjtBQU1MZ0MsZ0JBQWFwQyxxQkFBT29DO0FBTmY7QUFIc0MsRUFBM0IsQ0FBbEI7O0FBYUEsS0FBSUMsY0FBYztBQUNqQkMsUUFBU3JCLElBQUlzQixJQUFKLENBQVNDLElBQWxCLFVBQTJCeEMscUJBQU9DLElBQWxDLE1BRGlCO0FBRWpCd0MsTUFBSSx3QkFGYTtBQUdqQkMsV0FBUyx1Q0FIUTtBQUlqQkMsOFpBU3NCMUIsSUFBSXNCLElBQUosQ0FBU0MsSUFUL0IsWUFTMEN2QixJQUFJc0IsSUFBSixDQUFTSyxLQVRuRCw4Q0FVd0IzQixJQUFJc0IsSUFBSixDQUFTQyxJQVZqQyx1Q0FXVXZCLElBQUlzQixJQUFKLENBQVNNLE9BWG5CLCtCQVlVNUIsSUFBSXNCLElBQUosQ0FBU0MsSUFabkIsVUFZNEJ2QixJQUFJc0IsSUFBSixDQUFTTyxNQVpyQyxTQVkrQzdCLElBQUlzQixJQUFKLENBQVNLLEtBWnhEO0FBSmlCLEVBQWxCOztBQXNCQWpCLGFBQVlvQixRQUFaLENBQXFCVixXQUFyQixFQUFrQyxVQUFDVyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNoRCxNQUFHRCxHQUFILEVBQU87QUFDTkUsV0FBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJILEdBQXJCO0FBQ0E5QixPQUFJa0MsUUFBSixDQUFhLGVBQWI7QUFDQSxHQUhELE1BR007QUFDTEYsV0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDQWpDLE9BQUlrQyxRQUFKLENBQWEsa0JBQWI7QUFDQTtBQUNELEVBUkQ7QUFVQSxDQTlDRDs7QUFnREF6QyxJQUFJMEMsTUFBSixDQUFXOUMsSUFBWCxFQUFpQjtBQUFBLFFBQU0yQyxRQUFRQyxHQUFSLENBQVksK0JBQTZCNUMsSUFBekMsQ0FBTjtBQUFBLENBQWpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBOzs7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7QUFHQTs7SUFBWStDLFk7O0FBQ1o7O0lBQVlDLGdCOzs7Ozs7Ozs7OytlQWRaOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0lBSU1DLEs7OztBQUNMLGdCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2pCOzs7O3NDQUVtQjtBQUNuQixRQUFLQyxxQkFBTDtBQUNBO0FBQ0FULFdBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQixLQUFLTSxLQUFwQztBQUNBOzs7eUNBRXNCO0FBQ3RCLFFBQUtHLHNCQUFMO0FBQ0E7OzswQ0FFdUI7QUFDdkJDLEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLGFBQXZCO0FBQ0FELEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLE1BQXZCO0FBQ0E7OzsyQ0FFd0I7QUFDeEJELEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLE1BQXZCO0FBQ0FELEtBQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLGFBQXZCO0FBQ0E7OzsyQkFFUTtBQUNSLE9BQUlDLFNBQVMsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCRCxNQUE5QjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxNQUFSLEVBQWUsV0FBVSxNQUF6QjtBQUNDO0FBQUE7QUFBQSxPQUFJLFdBQVUsb0JBQWQ7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUEsT0FBSyxXQUFVLGtCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0Msb0NBQUMsbUJBQUQsSUFBVyxVQUFVLE9BQXJCLEVBQThCLFFBQVFBLE1BQXRDO0FBREQsTUFERDtBQUlDO0FBQUE7QUFBQSxRQUFHLFdBQVUsYUFBYjtBQUNDO0FBQUE7QUFBQSxTQUFNLFdBQVUsdUJBQWhCO0FBQUE7QUFBQSxPQUREO0FBQUE7QUFBQSxNQUpEO0FBUUM7QUFBQTtBQUFBLFFBQUcsV0FBVSxhQUFiO0FBQ0M7QUFBQTtBQUFBLFNBQU0sV0FBVSx1QkFBaEI7QUFBQTtBQUFBLE9BREQ7QUFBQTtBQUFBLE1BUkQ7QUFZQztBQUFBO0FBQUEsUUFBRyxXQUFVLGFBQWI7QUFDQztBQUFBO0FBQUEsU0FBTSxXQUFVLHVCQUFoQjtBQUFBO0FBQUEsT0FERDtBQUFBO0FBQUEsTUFaRDtBQWdCQztBQUFBO0FBQUEsUUFBSSxXQUFVLGFBQWQ7QUFDQztBQUFBO0FBQUEsU0FBTSxXQUFVLHVCQUFoQjtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FIRDtBQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQWhCRDtBQUZELElBREQ7QUE0QkE7Ozs7RUExRGtCRSxnQjs7QUE2RHBCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQUEsS0FDckJGLEtBRHFCLEdBQ0FOLEtBREEsQ0FDckJNLEtBRHFCO0FBQUEsS0FDZEcsU0FEYyxHQUNBVCxLQURBLENBQ2RTLFNBRGM7O0FBRTdCLFFBQU87QUFDTkgsY0FETTtBQUVORztBQUZNLEVBQVA7QUFJQSxDQU5EOztBQVFBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsV0FBWTtBQUNuQyxRQUFPO0FBQ0xDLFdBQVMsK0JBQW1CQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmpCLFlBQWxCLEVBQWdDQyxnQkFBaEMsQ0FBbkIsRUFBc0VpQixRQUF0RTtBQURKLEVBQVA7QUFHQSxDQUpEOztrQkFPZSx5QkFBUU4sWUFBUixFQUFzQkUsZUFBdEIsRUFBdUNaLEtBQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZmOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7K2VBYkE7OztBQVFBOzs7QUFJQTs7O0lBR01pQixHOzs7Ozs7Ozs7OzsyQkFHSTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxjQUFSLEVBQXVCLFdBQVUsY0FBakM7QUFDQyxrQ0FBQyxnQkFBRCxPQUREO0FBRUU7QUFBQywyQkFBRDtBQUFBO0FBQ0VDLHNCQUFPQyxHQUFQLENBQVc7QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxVQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxVQUEyQkMsQ0FBM0IsUUFBZ0JDLFNBQWhCO0FBQUEsVUFBaUNDLElBQWpDOztBQUFBLGFBQ1gsOEJBQUMscUJBQUQ7QUFDQyxZQUFLSixJQUROO0FBRUMsYUFBTUEsSUFGUDtBQUdDLGNBQU9DLEtBSFI7QUFJQyxlQUFRLGdCQUFDcEIsS0FBRDtBQUFBLGVBQ1AsOEJBQUMsQ0FBRCxlQUFPQSxLQUFQLEVBQWtCdUIsSUFBbEIsRUFETztBQUFBO0FBSlQsUUFEVztBQUFBLE1BQVg7QUFERixLQUZGO0FBY0Msa0NBQUMsZ0JBQUQ7QUFkRCxJQUREO0FBa0JBOzs7O0VBdEJnQmYsZ0I7O2tCQXlCSFEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2Y7Ozs7QUFDQTs7QUFHQTs7QUFHQTs7QUFHQTs7OztBQUNBOzs7O0FBR0E7O0lBQVlRLGM7Ozs7Ozs7Ozs7K2VBZlo7OztBQUlBOzs7QUFHQTs7O0FBR0E7OztBQUlBOzs7SUFLTUMsTzs7O0FBQ0wsa0JBQVl6QixLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMkdBQ1hBLEtBRFc7QUFFakI7Ozs7c0NBRWtCO0FBQUE7O0FBQ2xCLFFBQUswQixpQkFBTDtBQUNBO0FBQ0FDLGNBQVksWUFBTTtBQUNqQixXQUFLQyx1QkFBTDtBQUNBLElBRkQsRUFFRSxFQUZGO0FBR0EsUUFBS0Msa0JBQUw7QUFDQSxRQUFLQyx3QkFBTDtBQUNBckMsV0FBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDLEtBQUtNLEtBQXZDO0FBQ0E7Ozt5Q0FHc0I7QUFDdEIsUUFBSytCLHdCQUFMO0FBQ0EsUUFBS0Ysa0JBQUw7QUFDQXBDLFdBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLFFBQUtNLEtBQUwsQ0FBV2dDLGNBQVgsQ0FBMEIsS0FBMUI7QUFDQTs7OzZDQUcwQjtBQUFBOztBQUMxQixPQUFHLEtBQUtoQyxLQUFMLENBQVdpQyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsTUFBM0IsRUFBa0M7QUFDakMxQyxZQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDQWlDLGVBQVksWUFBTTtBQUNqQixZQUFLM0IsS0FBTCxDQUFXZ0MsY0FBWCxDQUEwQixJQUExQjtBQUNBLEtBRkQsRUFFRSxJQUZGO0FBR0EsSUFMRCxNQUtPO0FBQ052QyxZQUFRQyxHQUFSLENBQVksd0RBQVo7QUFDQWlDLGVBQVksWUFBTTtBQUNqQixZQUFLM0IsS0FBTCxDQUFXZ0MsY0FBWCxDQUEwQixLQUExQjtBQUNBLEtBRkQsRUFFRSxJQUZGO0FBR0E7QUFDRDs7O3NDQUdtQjtBQUFBOztBQUNuQjtBQUNBdkMsV0FBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0EsT0FBSXlDLFNBQVMsS0FBS25DLEtBQUwsQ0FBV2lDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxNQUFyQztBQUNBLE9BQUdBLE1BQUgsRUFBVTtBQUNULFFBQUdBLFdBQVcsU0FBZCxFQUF3QjtBQUN2QixVQUFLbkMsS0FBTCxDQUFXb0MsYUFBWCxDQUF5QixDQUFDLGdCQUFELEVBQW1CLDZCQUFuQixDQUF6QjtBQUNBM0MsYUFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DLEtBQUtNLEtBQUwsQ0FBV3FDLE9BQVgsQ0FBbUJqRCxPQUF2RDtBQUNBLEtBSEQsTUFHSztBQUNKLFVBQUtZLEtBQUwsQ0FBV29DLGFBQVgsQ0FBeUIsQ0FBQyxpQkFBRCxFQUFvQix5QkFBcEIsQ0FBekI7QUFDQVQsZ0JBQVksWUFBTTtBQUFFbEMsY0FBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLE9BQUtNLEtBQUwsQ0FBV3FDLE9BQTVDO0FBQXVELE1BQTNFLEVBQTZFLElBQTdFO0FBQ0E7QUFDRFYsZUFBWSxZQUFNO0FBQ2pCdkIsT0FBRSxxQkFBRixFQUF5QkMsV0FBekIsQ0FBcUMsNkJBQXJDO0FBQ0FELE9BQUUscUJBQUYsRUFBeUJDLFdBQXpCLENBQXFDLG9CQUFyQztBQUNBLEtBSEQsRUFHRyxHQUhIO0FBSUFzQixlQUFZLFlBQU07QUFDakJ2QixPQUFFLHFCQUFGLEVBQXlCQyxXQUF6QixDQUFxQyxvQkFBckM7QUFDQUQsT0FBRSxxQkFBRixFQUF5QkMsV0FBekIsQ0FBcUMsNkJBQXJDO0FBQ0EsS0FIRCxFQUdHLElBSEg7QUFJQTtBQUNEOzs7NENBR3lCO0FBQ3pCLE9BQUdELEVBQUUsT0FBRixFQUFXa0MsUUFBWCxDQUFvQixNQUFwQixNQUFnQyxJQUFuQyxFQUF3QztBQUN2Q2xDLE1BQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLGVBQXZCO0FBQ0FELE1BQUUsT0FBRixFQUFXQyxXQUFYLENBQXVCLE1BQXZCO0FBQ0E7QUFDRDs7OzZDQUcwQjtBQUMxQixPQUFHRCxFQUFFLE9BQUYsRUFBV2tDLFFBQVgsQ0FBb0IsZUFBcEIsTUFBeUMsSUFBNUMsRUFBaUQ7QUFDaERsQyxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixNQUF2QjtBQUNBRCxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixlQUF2QjtBQUNBO0FBQ0Q7Ozt1Q0FHb0I7QUFDcEJELEtBQUUsb0JBQUYsRUFBd0JDLFdBQXhCLENBQW9DLDJCQUFwQztBQUNBRCxLQUFFLGVBQUYsRUFBbUJDLFdBQW5CLENBQStCLHNCQUEvQjtBQUNBRCxLQUFFLGVBQUYsRUFBbUJDLFdBQW5CLENBQStCLHNCQUEvQjtBQUNBOzs7MkJBR087QUFDUCxPQUFHLEtBQUtMLEtBQUwsQ0FBV3FDLE9BQVgsQ0FBbUIxQyxRQUFuQixLQUFnQyxJQUFuQyxFQUF3QztBQUN2QyxXQUFPLDhCQUFDLHdCQUFELElBQVUsSUFBRyxVQUFiLEdBQVA7QUFDQTtBQUNELFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmLEVBQXNCLElBQUcsTUFBekI7QUFDRSxTQUFLSyxLQUFMLENBQVdpQyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsTUFBeEIsR0FDQTtBQUFBO0FBQUEsT0FBSyxJQUFHLG9CQUFSLEVBQTZCLFdBQVUsb0JBQXZDO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNBO0FBQUE7QUFBQSxTQUFJLFdBQVUsaUJBQWQ7QUFBaUMsWUFBS25DLEtBQUwsQ0FBV3FDLE9BQVgsQ0FBbUJqRCxPQUFuQixDQUEyQixDQUEzQjtBQUFqQyxPQURBO0FBRUEsb0NBQUMsZ0JBQUQsT0FGQTtBQUdBO0FBQUE7QUFBQSxTQUFJLFdBQVUsZUFBZDtBQUErQixZQUFLWSxLQUFMLENBQVdxQyxPQUFYLENBQW1CakQsT0FBbkIsQ0FBMkIsQ0FBM0I7QUFBL0I7QUFIQTtBQURELEtBREEsR0FTQSxJQVZGO0FBWUM7QUFBQTtBQUFBLE9BQUssV0FBVSxnQ0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsK0JBQWY7QUFDQztBQUFBO0FBQUEsU0FBSSxXQUFVLGlCQUFkO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxPQUZEO0FBS0M7QUFBQTtBQUFBLFNBQUssV0FBVSw0QkFBZjtBQUNDO0FBQUE7QUFBQSxVQUFTLFdBQVUsdUJBQW5CO0FBQ0M7QUFBQTtBQUFBO0FBQ0MsaURBQU0sV0FBVSw4Q0FBaEIsR0FERDtBQUFBO0FBRUM7QUFBQTtBQUFBLFlBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQUEsVUFGRDtBQUFBO0FBQUEsU0FERDtBQU1DO0FBQUE7QUFBQTtBQUNDLGlEQUFNLFdBQVUsd0NBQWhCLEdBREQ7QUFBQTtBQUVDO0FBQUE7QUFBQSxZQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBLFVBRkQ7QUFBQTtBQUFBLFNBTkQ7QUFXQztBQUFBO0FBQUE7QUFDQyxpREFBTSxXQUFVLHFDQUFoQixHQUREO0FBQUE7QUFFQztBQUFBO0FBQUEsWUFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQSxVQUZEO0FBQUE7QUFBQTtBQVhEO0FBREQ7QUFMRDtBQURELEtBWkQ7QUF1Q0M7QUFBQTtBQUFBLE9BQUssV0FBVSw0QkFBZjtBQUNDLG1DQUFDLHFCQUFEO0FBREQ7QUF2Q0QsSUFERDtBQTZDQTs7OztFQXhJb0JvQixnQjs7QUE0SXRCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQUUsUUFBTyxFQUFFNEIsU0FBU3BDLE1BQU1vQyxPQUFqQixFQUFQO0FBQW1DLENBQW5FOztBQUVBLElBQU0xQixrQkFBa0IsU0FBbEJBLGVBQWtCLFdBQVk7QUFBRSxRQUFPLCtCQUFtQmEsY0FBbkIsRUFBbUNULFFBQW5DLENBQVA7QUFBcUQsQ0FBM0Y7O2tCQUVlLHlCQUFRTixZQUFSLEVBQXNCRSxlQUF0QixFQUF1Q2MsT0FBdkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LZjs7Ozs7O0FBRUEsSUFBTWMsY0FBYyxTQUFkQSxXQUFjLEdBQUk7QUFDdkIsUUFDQztBQUFBO0FBQUEsSUFBSyxXQUFVLHNCQUFmO0FBQ0M7QUFBQTtBQUFBLEtBQU0sV0FBVSxpQkFBaEIsRUFBa0MsUUFBTyxNQUF6QyxFQUFnRCxRQUFPLEVBQXZEO0FBQ0MsNENBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsV0FBVSx1QkFBekMsRUFBaUUsSUFBRyxXQUFwRSxFQUFnRixhQUFZLGlCQUE1RixFQUE4RyxjQUE5RyxHQUREO0FBRUMsNENBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssTUFBMUIsRUFBaUMsV0FBVSx5QkFBM0MsRUFBcUUsSUFBRyxhQUF4RSxFQUFzRixhQUFZLFFBQWxHLEdBRkQ7QUFHQyw0Q0FBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxXQUFVLHdCQUExQyxFQUFtRSxJQUFHLFlBQXRFLEVBQW1GLGFBQVksa0JBQS9GLEVBQWtILGNBQWxILEdBSEQ7QUFJQywrQ0FBVSxNQUFLLFNBQWYsRUFBeUIsV0FBVSwwQkFBbkMsRUFBOEQsSUFBRyxjQUFqRSxFQUFnRixhQUFZLHFCQUE1RixFQUFrSCxjQUFsSCxHQUpEO0FBS0MsNENBQU8sTUFBSyxRQUFaLEVBQXFCLElBQUcsaUJBQXhCLEVBQTBDLFdBQVUsbUJBQXBELEVBQXdFLE9BQU0sY0FBOUU7QUFMRDtBQURELEVBREQ7QUFXQSxDQVpEOztrQkFjZUEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7OztBQUdBOzs7Ozs7Ozs7OytlQUpBOzs7QUFHQTs7O0lBSU1DLFM7OztBQUNMLG9CQUFZeEMsS0FBWixFQUFrQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXO0FBRWpCOzs7O3NDQUVtQjtBQUNuQlAsV0FBUUMsR0FBUixDQUFZLDhCQUFaLEVBQTRDLEtBQUtNLEtBQWpEO0FBQ0E7OztvQ0FFaUJqQixJLEVBQU07QUFDdkJxQixpQ0FBNEJyQixJQUE1QixFQUFvQzBELEdBQXBDLENBQXdDLFNBQXhDLEVBQW1ELE1BQW5EO0FBQ0E7OztxQ0FFa0IxRCxJLEVBQU07QUFDeEI7QUFDQXFCLGlDQUE0QnJCLElBQTVCLEVBQW9DMEQsR0FBcEMsQ0FBd0MsU0FBeEMsRUFBbUQsT0FBbkQ7QUFDQTs7O3VDQUVvQm5DLE0sRUFBUTtBQUFBOztBQUM1QixPQUFJb0MsZUFBZXBDLE9BQU9ZLEdBQVAsQ0FBWSxnQkFBcUI7QUFBQSxRQUFsQm5DLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLFFBQVo0RCxLQUFZLFFBQVpBLEtBQVk7O0FBQ25ELFdBQ0M7QUFBQTtBQUFBLE9BQUssMEJBQXdCNUQsSUFBN0IsRUFBcUMsV0FBVSxpQkFBL0M7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0MsNkNBQUssV0FBVSxrQkFBZjtBQUNDLFlBQUs0RCxLQUROO0FBRUMsWUFBSzVELElBRk47QUFHQyxlQUFRLE9BQUs2RCxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsTUFBNUIsRUFBa0M5RCxJQUFsQyxDQUhUO0FBSUMsZ0JBQVMsT0FBSytELGtCQUFMLENBQXdCRCxJQUF4QixDQUE2QixNQUE3QixFQUFtQzlELElBQW5DO0FBSlY7QUFERCxNQUREO0FBVUMsNENBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLDBCQUE3QyxHQVZEO0FBV0MsbUNBQUMsZ0JBQUQsSUFBUSxxQ0FBbUNBLElBQTNDO0FBWEQsS0FERDtBQWVBLElBaEJrQixDQUFuQjtBQWlCQSxVQUFPMkQsWUFBUDtBQUNBOzs7a0NBRWU7QUFDZmpELFdBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBOzs7bUNBRWdCO0FBQ2hCRCxXQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDQTs7OzJCQUdRO0FBQUE7O0FBQ1IsT0FBSVksU0FBUyxLQUFLTixLQUFMLENBQVdNLE1BQXhCO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLHNCQUFSLEVBQStCLFdBQVUsc0JBQXpDO0FBQ0dBLGFBQVMsS0FBS3lDLG9CQUFMLENBQTBCekMsTUFBMUIsQ0FBVCxHQUE2QyxJQURoRDtBQUVDO0FBQUE7QUFBQSxPQUFNLElBQUcseUJBQVQsRUFBbUMsV0FBVSx5QkFBN0M7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLHdCQUFiO0FBQUE7QUFBQSxNQUREO0FBRUMsMENBQUcsV0FBVSxtQkFBYixFQUFpQyxTQUFTO0FBQUEsY0FBTSxPQUFLMEMsYUFBTCxFQUFOO0FBQUEsT0FBMUM7QUFGRCxLQUZEO0FBTUM7QUFBQTtBQUFBLE9BQU0sSUFBRywwQkFBVCxFQUFvQyxXQUFVLDBCQUE5QztBQUNDO0FBQUE7QUFBQSxRQUFHLFdBQVUsd0JBQWI7QUFBQTtBQUFBLE1BREQ7QUFFQywwQ0FBRyxXQUFVLG9CQUFiLEVBQWtDLFNBQVM7QUFBQSxjQUFNLE9BQUtDLGNBQUwsRUFBTjtBQUFBLE9BQTNDO0FBRkQsS0FORDtBQVVDLDJDQUFLLFdBQVUsMEJBQWYsRUFBMEMsSUFBRywwQkFBN0M7QUFWRCxJQUREO0FBZUE7Ozs7RUFqRXNCekMsZ0I7O2tCQW9FVGdDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFZjs7OztBQUNBOztBQUdBOzs7Ozs7OzsrZUFMQTs7O0FBSUE7OztJQUdNVSxNOzs7QUFDTCxpQkFBWWxELEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWkEsS0FEWTtBQUVsQjs7OztzQ0FFbUI7QUFDbkI7QUFDQSxRQUFLbUQsWUFBTCxDQUFrQixLQUFLbkQsS0FBTCxDQUFXb0QsTUFBWCxDQUFrQkMsZ0JBQXBDO0FBQ0E7O0FBRUQ7Ozs7K0JBQ2FDLG9CLEVBQXNCO0FBQUE7O0FBQ2xDQSx3QkFBcUJDLE9BQXJCLENBQThCLGdCQUFnRDtBQUFBLFFBQTdDQyxVQUE2QyxRQUE3Q0EsVUFBNkM7QUFBQSxRQUFqQ3pFLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLFFBQTNCMEUsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsUUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0V0RCxZQUFNckIsSUFBTixpQkFBd0I0RSxLQUF4QixDQUE4QjtBQUFBLFlBQU0sT0FBS0MsT0FBTCxPQUFpQjdFLElBQWpCLGNBQWdDeUUsVUFBaEMsRUFBNENDLFNBQTVDLEVBQXVEQyxTQUF2RCxDQUFOO0FBQUEsS0FBOUIsRUFBdUc7QUFBQSxZQUFNLE9BQUtHLFFBQUwsT0FBa0I5RSxJQUFsQixhQUFOO0FBQUEsS0FBdkc7QUFDQSxJQUZEO0FBR0E7OzswQkFFT3RDLEUsRUFBSStHLFUsRUFBWUMsUyxFQUFXQyxTLEVBQVc7QUFDN0N0RCxLQUFFM0QsRUFBRixFQUFNZ0csR0FBTixDQUFVLE9BQVYsRUFBbUJlLFVBQW5CO0FBQ0FwRCxLQUFFM0QsRUFBRixFQUFNZ0csR0FBTixDQUFVLFlBQVYsOEJBQWtEZ0IsU0FBbEQsVUFBZ0VDLFNBQWhFO0FBQ0F0RCxLQUFFM0QsRUFBRixFQUFNNEQsV0FBTixDQUFrQiw0QkFBbEI7QUFDQUQsS0FBRTNELEVBQUYsRUFBTTRELFdBQU4sQ0FBa0IscUJBQWxCO0FBQ0E7OzsyQkFFUTVELEUsRUFBSTtBQUNaMkQsS0FBRTNELEVBQUYsRUFBTWdHLEdBQU4sQ0FBVSxPQUFWLEVBQW1CLE9BQW5CO0FBQ0FyQyxLQUFFM0QsRUFBRixFQUFNZ0csR0FBTixDQUFVLFlBQVYsRUFBd0IsK0NBQXhCO0FBQ0FyQyxLQUFFM0QsRUFBRixFQUFNNEQsV0FBTixDQUFrQixxQkFBbEI7QUFDQUQsS0FBRTNELEVBQUYsRUFBTTRELFdBQU4sQ0FBa0IsNEJBQWxCO0FBQ0E7OzsyQkFFTztBQUNQLFVBQ0M7QUFBQTtBQUFBLE1BQVEsV0FBVSxRQUFsQjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsY0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFDQztBQUFBO0FBQUEsU0FBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVSxrQ0FBZjtBQUNDO0FBQUE7QUFBQSxVQUFHLFdBQVUscUJBQWI7QUFBQTtBQUVDO0FBQUMsZ0NBQUQ7QUFBQSxXQUFTLElBQUcscUJBQVosRUFBa0MsV0FBVSxxQkFBNUMsRUFBa0UsSUFBRyxRQUFyRTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUZEO0FBREQ7QUFGRCxNQUREO0FBWUM7QUFBQTtBQUFBLFFBQUssV0FBVSxpQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSyxXQUFVLG1DQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQVMsV0FBVSxpQkFBbkI7QUFDQztBQUFBO0FBQUEsV0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQSxTQUREO0FBRUM7QUFBQTtBQUFBLFdBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUEsU0FGRDtBQUdDO0FBQUE7QUFBQSxXQUFHLE1BQUssb0JBQVI7QUFDQztBQUFBO0FBQUEsWUFBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQURELFNBSEQ7QUFNQyw2Q0FBRyxXQUFVLHNCQUFiO0FBTkQ7QUFERDtBQUZELE1BWkQ7QUF5QkM7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSSxXQUFVLGtDQUFkO0FBQ0UsWUFBS0wsS0FBTCxDQUFXb0QsTUFBWCxDQUFrQkMsZ0JBQWxCLENBQW1DbkMsR0FBbkMsQ0FBdUM7QUFBQSxZQUFHbkMsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBUytFLElBQVQsU0FBU0EsSUFBVDtBQUFBLFlBQWdCQyxJQUFoQixTQUFnQkEsSUFBaEI7QUFBQSxlQUN2QztBQUFBO0FBQUEsV0FBSSxLQUFRaEYsSUFBUixZQUFKLEVBQTJCLElBQU9BLElBQVAsZUFBM0IsRUFBb0QsV0FBVSwwQkFBOUQ7QUFDQztBQUFBO0FBQUEsWUFBRyxNQUFNK0UsSUFBVCxFQUFlLFFBQU8sUUFBdEI7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsY0FBRyxXQUFVLG9CQUFiO0FBQW1DL0U7QUFBbkMsWUFERDtBQUVDLGdEQUFHLFdBQWNnRixJQUFkLHlCQUFILEVBQTZDLElBQU9oRixJQUFQLFlBQTdDLEVBQW1FLGVBQVksTUFBL0UsRUFBc0YsT0FBT0EsSUFBN0Y7QUFGRDtBQUREO0FBREQsU0FEdUM7QUFBQSxRQUF2QztBQURGO0FBRkQ7QUF6QkQsS0FERDtBQTBDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLG1CQUFiO0FBQUE7QUFBQTtBQUREO0FBMUNELElBREQ7QUFnREE7Ozs7RUFoRm1CeUIsZ0I7O0FBbUZyQixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUM3QixRQUFPO0FBQ04yQyxVQUFRbkQsTUFBTW1EO0FBRFIsRUFBUDtBQUdBLENBSkQ7O2tCQU1lLHlCQUFRM0MsWUFBUixFQUFzQnlDLE1BQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GZjs7OztBQUdBOztBQUdBOztBQUdBOztJQUFZYyxjOztBQUNaOztJQUFZbEUsZ0I7O0FBR1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQWZBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFJQTs7O0lBSU1tRSxPOzs7QUFDTCxrQkFBWWpFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWkEsS0FEWTtBQUVsQjs7OztzQ0FFbUI7QUFDbkJQLFdBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQyxLQUFLTSxLQUEvQztBQUNBUCxXQUFRQyxHQUFSO0FBQ0E7Ozt1Q0FFb0I7QUFDcEI7QUFDQTs7O3lDQUVzQjtBQUN0QixRQUFLd0UsWUFBTDtBQUNBOzs7aUNBR2M7QUFDZCxPQUFHOUQsRUFBRSxPQUFGLEVBQVdrQyxRQUFYLENBQW9CLGVBQXBCLENBQUgsRUFBd0M7QUFDdkNsQyxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixNQUF2QjtBQUNBRCxNQUFFLE9BQUYsRUFBV0MsV0FBWCxDQUF1QixlQUF2QjtBQUNBRCxNQUFFLDZCQUFGLEVBQWlDQyxXQUFqQyxDQUE2Qyw0QkFBN0M7QUFDQUQsTUFBRSw2QkFBRixFQUFpQ0MsV0FBakMsQ0FBNkMsa0NBQTdDO0FBQ0FELE1BQUUsa0JBQUYsRUFBc0JDLFdBQXRCLENBQWtDLHdCQUFsQztBQUNBRCxNQUFFLGtCQUFGLEVBQXNCQyxXQUF0QixDQUFrQyxpQkFBbEM7QUFDQTtBQUNELE9BQUdELEVBQUUsMEJBQUYsRUFBOEJrQyxRQUE5QixDQUF1QywwQ0FBdkMsQ0FBSCxFQUFzRjtBQUNyRmxDLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLDBDQUExQztBQUNBO0FBQ0QsT0FBR0QsRUFBRSwwQkFBRixFQUE4QmtDLFFBQTlCLENBQXVDLGdDQUF2QyxDQUFILEVBQTRFO0FBQzNFbEMsTUFBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0E7QUFDRCxPQUFHLENBQUNELEVBQUUsMEJBQUYsRUFBOEJrQyxRQUE5QixDQUF1Qyx5QkFBdkMsQ0FBSixFQUFzRTtBQUNyRWxDLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLHlCQUExQztBQUNBO0FBQ0Q7OzsyQkFJTztBQUFBOztBQUNQLE9BQUlDLFNBQVMsS0FBS04sS0FBTCxDQUFXbUUsT0FBWCxDQUFtQjdELE1BQWhDO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWYsRUFBc0IsSUFBRyxNQUF6QjtBQUNDLGtDQUFDLHlCQUFELElBQWlCLGdCQUFpQixLQUFLTixLQUFMLENBQVdZLE9BQVgsQ0FBbUJ3RCxjQUFyRCxFQUFzRSxlQUFnQixLQUFLcEUsS0FBTCxDQUFXWSxPQUFYLENBQW1CeUQsYUFBekcsR0FERDtBQUVDO0FBQUE7QUFBQSxPQUFNLFdBQVUsZ0JBQWhCLEVBQWlDLE9BQU0sZUFBdkMsRUFBdUQsU0FBVTtBQUFBLGNBQU0sT0FBS0gsWUFBTCxFQUFOO0FBQUEsT0FBakU7QUFDQTtBQUFBO0FBQUEsUUFBRyxXQUFVLG9CQUFiO0FBQUE7QUFBQSxNQURBO0FBQUE7QUFBQSxLQUZEO0FBTUM7QUFBQTtBQUFBLE9BQUssV0FBVSx3QkFBZixFQUF3QyxJQUFHLGlCQUEzQztBQUNDLG1DQUFDLG1CQUFELElBQVcsVUFBVSxTQUFyQixFQUFnQyxRQUFRNUQsTUFBeEM7QUFERDtBQU5ELElBREQ7QUFZQTs7OztFQXZEb0JFLGdCOztBQTBEdEIsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFBQSxLQUNyQjBELE9BRHFCLEdBQ0VsRSxLQURGLENBQ3JCa0UsT0FEcUI7QUFBQSxLQUNaekQsU0FEWSxHQUNFVCxLQURGLENBQ1pTLFNBRFk7O0FBRTdCLFFBQU87QUFDTnlELGtCQURNO0FBRU56RDtBQUZNLEVBQVA7QUFJQSxDQU5EOztBQVFBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsV0FBWTtBQUNuQyxRQUFPO0FBQ0xDLFdBQVMsK0JBQW1CQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmtELGNBQWxCLEVBQWtDbEUsZ0JBQWxDLENBQW5CLEVBQXdFaUIsUUFBeEU7QUFESixFQUFQO0FBR0EsQ0FKRDs7a0JBTWUseUJBQVFOLFlBQVIsRUFBc0JFLGVBQXRCLEVBQXVDc0QsT0FBdkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZmOzs7O0FBR0E7O0FBR0E7O0lBQVl6QyxjOztBQUdaOztBQUlBOzs7Ozs7Ozs7Ozs7K2VBZEE7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUlBOzs7SUFHTThDLGU7OztBQUNMLDBCQUFZdEUsS0FBWixFQUFrQjtBQUFBOztBQUFBLDJIQUNYQSxLQURXO0FBRWpCOzs7O3NDQUVtQjtBQUNuQixRQUFLdUUsbUJBQUw7QUFDQSxRQUFLcEIsWUFBTDtBQUNBMUQsV0FBUUMsR0FBUixDQUFZLDZCQUFaLEVBQTBDLEtBQUtNLEtBQS9DO0FBQ0E7Ozt5Q0FFc0I7QUFDdEJ3RSxpQkFBYyxLQUFLeEUsS0FBTCxDQUFXeUUsZUFBWCxDQUEyQkMsS0FBekM7QUFDQSxRQUFLQyxvQkFBTDtBQUNBOztBQUVEOzs7O3dDQUNzQjtBQUNyQixPQUFJQyxxQkFBcUIsQ0FDekIsRUFBRUMsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUR5QixFQUV6QixFQUFFRCxhQUFhLCtCQUFmLEVBQWdEQyxtQkFBbUIscUJBQW5FLEVBRnlCLEVBR3pCLEVBQUVELGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFIeUIsRUFJekIsRUFBRUQsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUp5QixDQUF6QjtBQU1BLE9BQUlDLFVBQVUsQ0FBZDtBQUNBLE9BQUlMLFFBQVFNLFlBQWEsWUFBTTtBQUM5QiwwQkFBRUosbUJBQW1CRyxPQUFuQixFQUE0QkYsV0FBOUIsRUFBMkN4RSxXQUEzQyxDQUF1RCw4Q0FBdkQ7QUFDQSwwQkFBRXVFLG1CQUFtQkcsT0FBbkIsRUFBNEJGLFdBQTlCLEVBQTJDeEUsV0FBM0MsQ0FBdUQsb0NBQXZEO0FBQ0EwRTtBQUNBLFFBQUdBLFdBQVdILG1CQUFtQkssTUFBakMsRUFBeUM7QUFDeENULG1CQUFjRSxLQUFkO0FBQ0E7QUFDRCxJQVBXLEVBT1QsR0FQUyxDQUFaO0FBUUEsUUFBSzFFLEtBQUwsQ0FBV2tGLFdBQVgsQ0FBdUJSLEtBQXZCO0FBQ0E7Ozt5Q0FFc0I7QUFDdEIsT0FBSUUscUJBQXFCLENBQ3pCLEVBQUVDLGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFEeUIsRUFFekIsRUFBRUQsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUZ5QixFQUd6QixFQUFFRCxhQUFhLCtCQUFmLEVBQWdEQyxtQkFBbUIscUJBQW5FLEVBSHlCLEVBSXpCLEVBQUVELGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFKeUIsQ0FBekI7QUFNQUYsc0JBQW1CckIsT0FBbkIsQ0FBNEIsZ0JBQXFCO0FBQUEsUUFBbEJzQixXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ2hELFFBQUcsc0JBQUVBLFdBQUYsRUFBZXZDLFFBQWYsQ0FBd0IsOENBQXhCLENBQUgsRUFBNEU7QUFDM0UsMkJBQUV1QyxXQUFGLEVBQWV4RSxXQUFmLENBQTJCLG9DQUEzQjtBQUNBLDJCQUFFd0UsV0FBRixFQUFleEUsV0FBZixDQUEyQiw4Q0FBM0I7QUFDQTtBQUNELElBTEQ7QUFNQTs7QUFHRDs7OztpQ0FDZTtBQUFBOztBQUNkLE9BQUl1RSxxQkFBcUIsQ0FDekIsRUFBRUMsYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUEwRkssYUFBYSxRQUF2RyxFQUR5QixFQUV6QixFQUFFTixhQUFhLCtCQUFmLEVBQWdEQyxtQkFBbUIscUJBQW5FLEVBQTBGSyxhQUFhLFFBQXZHLEVBRnlCLEVBR3pCLEVBQUVOLGFBQWEsK0JBQWYsRUFBZ0RDLG1CQUFtQixxQkFBbkUsRUFBMEZLLGFBQWEsV0FBdkcsRUFIeUIsRUFJekIsRUFBRU4sYUFBYSwrQkFBZixFQUFnREMsbUJBQW1CLHFCQUFuRSxFQUEwRkssYUFBYSxVQUF2RyxFQUp5QixDQUF6QjtBQU1BUCxzQkFBbUJyQixPQUFuQixDQUE0QixpQkFBcUQ7QUFBQSxRQUFsRHNCLFdBQWtELFNBQWxEQSxXQUFrRDtBQUFBLFFBQXJDQyxpQkFBcUMsU0FBckNBLGlCQUFxQztBQUFBLFFBQWxCSyxXQUFrQixTQUFsQkEsV0FBa0I7O0FBQ2hGLDBCQUFFTixXQUFGLEVBQWVsQixLQUFmLENBQXFCO0FBQUEsWUFBTSxPQUFLeUIsT0FBTCxDQUFhTixpQkFBYixDQUFOO0FBQUEsS0FBckIsRUFBNEQ7QUFBQSxZQUFNLE9BQUtPLFFBQUwsQ0FBY1AsaUJBQWQsQ0FBTjtBQUFBLEtBQTVEO0FBQ0EsMEJBQUVELFdBQUYsRUFBZVMsS0FBZixDQUFxQjtBQUFBLFlBQU0sT0FBS0MsV0FBTCxDQUFpQkosV0FBakIsQ0FBTjtBQUFBLEtBQXJCO0FBQ0EsSUFIRDtBQUlBOzs7OEJBR1doQixPLEVBQVM7QUFBQTs7QUFDcEIxRSxXQUFRQyxHQUFSLENBQVksNEJBQTJCeUUsT0FBdkM7QUFDQSxRQUFLbkUsS0FBTCxDQUFXcUUsYUFBWDtBQUNBLFFBQUtyRSxLQUFMLENBQVdvRSxjQUFYLENBQTBCRCxPQUExQjtBQUNBeEMsY0FBWSxZQUFNO0FBQUUsV0FBSzZELFdBQUw7QUFBcUIsSUFBekMsRUFBMkMsRUFBM0M7QUFDQTs7O2dDQUVhO0FBQ2IvRixXQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDQSxPQUFHLHNCQUFFLE9BQUYsRUFBVzRDLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBSCxFQUErQjtBQUM5QiwwQkFBRSxPQUFGLEVBQVdqQyxXQUFYLENBQXVCLGVBQXZCO0FBQ0EsMEJBQUUsT0FBRixFQUFXQSxXQUFYLENBQXVCLE1BQXZCO0FBQ0EsMEJBQUUsNkJBQUYsRUFBaUNBLFdBQWpDLENBQTZDLGtDQUE3QztBQUNBLDBCQUFFLDZCQUFGLEVBQWlDQSxXQUFqQyxDQUE2Qyw0QkFBN0M7QUFDQSwwQkFBRSxrQkFBRixFQUFzQkEsV0FBdEIsQ0FBa0MsaUJBQWxDO0FBQ0EsMEJBQUUsa0JBQUYsRUFBc0JBLFdBQXRCLENBQWtDLHdCQUFsQztBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7MEJBR1E1RCxFLEVBQUk7QUFDWCx5QkFBRUEsRUFBRixFQUFNNEQsV0FBTixDQUFrQixpQ0FBbEI7QUFDQSx5QkFBRTVELEVBQUYsRUFBTTRELFdBQU4sQ0FBa0Isb0NBQWxCO0FBQ0E7OzsyQkFHUTVELEUsRUFBSTtBQUNaLHlCQUFFQSxFQUFGLEVBQU00RCxXQUFOLENBQWtCLG9DQUFsQjtBQUNBLHlCQUFFNUQsRUFBRixFQUFNNEQsV0FBTixDQUFrQixpQ0FBbEI7QUFDQTs7OzJCQUdPO0FBQ1AsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLDRCQUFmLEVBQTRDLElBQUcsNEJBQS9DO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxvQ0FBZixFQUFvRCxJQUFHLDhCQUF2RCxFQUFzRixPQUFNLHlCQUE1RjtBQUNJLDRDQUFLLFdBQVUsMEJBQWYsRUFBMEMsSUFBRyxvQkFBN0MsR0FESjtBQUdJO0FBQUE7QUFBQSxRQUFHLFdBQVUsdUJBQWI7QUFBQTtBQUFBO0FBSEosS0FERDtBQU1JO0FBQUE7QUFBQSxPQUFLLFdBQVUsb0NBQWYsRUFBb0QsSUFBRyw4QkFBdkQsRUFBc0YsT0FBTSx5QkFBNUY7QUFDQyw0Q0FBSyxXQUFVLDBCQUFmLEVBQTBDLElBQUcsb0JBQTdDLEdBREQ7QUFHQztBQUFBO0FBQUEsUUFBRyxXQUFVLHVCQUFiO0FBQUE7QUFBQTtBQUhELEtBTko7QUFXSTtBQUFBO0FBQUEsT0FBSyxXQUFVLG9DQUFmLEVBQW9ELElBQUcsOEJBQXZELEVBQXNGLE9BQU0sNEJBQTVGO0FBQ0MsNENBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLG9CQUE3QyxHQUREO0FBR0M7QUFBQTtBQUFBLFFBQUcsV0FBVSx1QkFBYjtBQUFBO0FBQUE7QUFIRCxLQVhKO0FBZ0JJO0FBQUE7QUFBQSxPQUFLLFdBQVUsb0NBQWYsRUFBb0QsSUFBRyw4QkFBdkQsRUFBc0YsT0FBTSwyQkFBNUY7QUFDQyw0Q0FBSyxXQUFVLDBCQUFmLEVBQTBDLElBQUcsb0JBQTdDLEdBREQ7QUFHQztBQUFBO0FBQUEsUUFBRyxXQUFVLHVCQUFiO0FBQUE7QUFBQTtBQUhEO0FBaEJKLElBREQ7QUF3QkE7Ozs7RUFySTRCRyxnQjs7QUF3STlCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDUixLQUFELEVBQVc7QUFDL0IsUUFBTztBQUNOd0UsbUJBQWlCeEUsTUFBTXdFO0FBRGpCLEVBQVA7QUFHQSxDQUpEOztBQU1BLElBQU05RCxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNJLFFBQUQsRUFBYztBQUNyQyxRQUFPLCtCQUFtQlMsY0FBbkIsRUFBbUNULFFBQW5DLENBQVA7QUFDQSxDQUZEOztrQkFJZSx5QkFBUU4sWUFBUixFQUFzQkUsZUFBdEIsRUFBdUMyRCxlQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLZjs7OztBQUNBOztBQUdBOztBQUdBOztBQUdBOztJQUFZOUMsYzs7Ozs7Ozs7OzsrZUFYWjs7O0FBSUE7OztBQUdBOzs7QUFHQTs7O0lBSU1pRSxNOzs7QUFDTCxpQkFBWXpGLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsUUFBS0MsS0FBTCxHQUFhO0FBQ1p5RixlQUFZO0FBREEsR0FBYjtBQUdBLFFBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQjlDLElBQXJCLE9BQXZCO0FBQ0EsUUFBSytDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCL0MsSUFBdEIsT0FBeEI7QUFOaUI7QUFPakI7Ozs7c0NBRW1CO0FBQ25CcEQsV0FBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUtNLEtBQXRDO0FBRUE7OztxQ0FFa0I7QUFDbEIsT0FBRyxLQUFLQSxLQUFMLENBQVc2RixNQUFYLENBQWtCSCxVQUFsQixLQUFpQyxJQUFwQyxFQUF5QztBQUN4QyxTQUFLSSxtQkFBTDtBQUNBLFNBQUs5RixLQUFMLENBQVcrRixvQkFBWCxDQUFnQyxLQUFoQztBQUNBO0FBQ0Q7OztvQ0FFaUI7QUFDakJ0RyxXQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQSxPQUFHLEtBQUtNLEtBQUwsQ0FBVzZGLE1BQVgsQ0FBa0JILFVBQWxCLEtBQWlDLElBQXBDLEVBQXlDO0FBQ3hDLFNBQUtJLG1CQUFMO0FBQ0EsU0FBSzlGLEtBQUwsQ0FBVytGLG9CQUFYLENBQWdDLEtBQWhDO0FBQ0EsSUFIRCxNQUdPLElBQUcsS0FBSy9GLEtBQUwsQ0FBVzZGLE1BQVgsQ0FBa0JILFVBQWxCLEtBQWlDLEtBQXBDLEVBQTBDO0FBQ2hELFNBQUtNLGtCQUFMO0FBQ0EsU0FBS2hHLEtBQUwsQ0FBVytGLG9CQUFYLENBQWdDLElBQWhDO0FBQ0E7QUFDRDs7O3VDQUVvQjtBQUNwQjNGLEtBQUUscUJBQUYsRUFBeUJDLFdBQXpCLENBQXFDLDhCQUFyQztBQUNBRCxLQUFFLHFCQUFGLEVBQXlCQyxXQUF6QixDQUFxQyxvQkFBckM7QUFDQTs7O3dDQUVxQjtBQUNyQkQsS0FBRSxxQkFBRixFQUF5QkMsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ0FELEtBQUUscUJBQUYsRUFBeUJDLFdBQXpCLENBQXFDLDhCQUFyQztBQUNBOzs7MkJBRVE7QUFBQTs7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFRLFdBQVUsUUFBbEIsRUFBMkIsY0FBYztBQUFBLGFBQUssT0FBS3VGLGdCQUFMLEVBQUw7QUFBQSxNQUF6QztBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUseUJBQWY7QUFDQztBQUFDLDZCQUFEO0FBQUEsUUFBUyxXQUFVLG9CQUFuQixFQUF3QyxJQUFHLG9CQUEzQyxFQUFnRSxXQUFoRSxFQUFzRSxJQUFHLEdBQXpFLEVBQTZFLE9BQU0sd0JBQW5GO0FBQ0MsNkNBQUssV0FBVSxvQkFBZixFQUFvQyxLQUFLNUgsbUJBQU9BLENBQUMsd0VBQVIsQ0FBekMsRUFBdUYsS0FBSSw2QkFBM0YsR0FERDtBQUVDO0FBQUE7QUFBQSxTQUFHLFdBQVUsb0JBQWI7QUFBQTtBQUFBO0FBRkQsTUFERDtBQUtDLDBDQUFHLFdBQVUsc0NBQWIsRUFBb0QsU0FBUztBQUFBLGNBQU0sT0FBSzJILGVBQUwsRUFBTjtBQUFBLE9BQTdEO0FBTEQsS0FERDtBQVFDO0FBQUE7QUFBQSxPQUFLLFdBQVUsYUFBZjtBQUNDO0FBQUE7QUFBQSxRQUFJLFdBQVUsbUJBQWQ7QUFDRSxXQUFLM0YsS0FBTCxDQUFXNkYsTUFBWCxDQUFrQkksUUFBbEIsQ0FBMkIvRSxHQUEzQixDQUErQjtBQUFBLFdBQUdnRixHQUFILFFBQUdBLEdBQUg7QUFBQSxXQUFRL0UsSUFBUixRQUFRQSxJQUFSO0FBQUEsV0FBY3BDLElBQWQsUUFBY0EsSUFBZDtBQUFBLGNBQXlCO0FBQUE7QUFBQSxVQUFJLEtBQUttSCxHQUFUO0FBQUE7QUFBZTtBQUFDLGdDQUFEO0FBQUEsV0FBUyxXQUFVLGVBQW5CLEVBQW1DLFdBQW5DLEVBQXlDLElBQUkvRSxJQUE3QztBQUFvRHBDO0FBQXBEO0FBQWYsUUFBekI7QUFBQSxPQUEvQjtBQURGO0FBREQsS0FSRDtBQWFDO0FBQUE7QUFBQSxPQUFLLElBQUcsb0JBQVIsRUFBNkIsV0FBVSxvQkFBdkM7QUFDQztBQUFBO0FBQUEsUUFBSSxXQUFVLDBCQUFkO0FBQ0UsV0FBS2lCLEtBQUwsQ0FBVzZGLE1BQVgsQ0FBa0JJLFFBQWxCLENBQTJCL0UsR0FBM0IsQ0FBK0I7QUFBQSxXQUFHZ0YsR0FBSCxTQUFHQSxHQUFIO0FBQUEsV0FBUS9FLElBQVIsU0FBUUEsSUFBUjtBQUFBLFdBQWNwQyxJQUFkLFNBQWNBLElBQWQ7QUFBQSxjQUF5QjtBQUFBO0FBQUEsVUFBSSxpQkFBZW1ILEdBQW5CO0FBQUE7QUFBMkI7QUFBQyxnQ0FBRDtBQUFBLFdBQVMsV0FBVSxzQkFBbkIsRUFBMEMsV0FBMUMsRUFBZ0QsSUFBSS9FLElBQXBEO0FBQTJEcEM7QUFBM0Q7QUFBM0IsUUFBekI7QUFBQSxPQUEvQjtBQURGO0FBREQ7QUFiRCxJQUREO0FBcUJBOzs7O0VBakVtQnlCLGdCOztBQW9FckIsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFBRSxRQUFPLEVBQUVvRixRQUFRNUYsTUFBTTRGLE1BQWhCLEVBQVA7QUFBaUMsQ0FBakU7O0FBRUEsSUFBTWxGLGtCQUFrQixTQUFsQkEsZUFBa0IsV0FBWTtBQUFFLFFBQU8sK0JBQW1CYSxjQUFuQixFQUFtQ1QsUUFBbkMsQ0FBUDtBQUFxRCxDQUEzRjs7a0JBRWUseUJBQVFOLFlBQVIsRUFBc0JFLGVBQXRCLEVBQXVDLElBQXZDLEVBQTZDLEVBQUN3RixNQUFLLEtBQU4sRUFBN0MsRUFBMkRWLE1BQTNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGZjs7OztBQUNBOztBQUdBOztBQUdBOztBQUdBOzs7O0FBR0E7O0lBQVlqRSxjOztBQUdaOzs7O0FBR0E7Ozs7Ozs7Ozs7OzsrZUFwQkE7OztBQUlBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztJQUdNNEUsSTs7O0FBQ0wsZUFBWXBHLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsUUFBS3FHLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCeEQsSUFBdkIsT0FBekI7QUFGaUI7QUFHakI7Ozs7c0NBRW1CO0FBQUE7O0FBQ25CLFFBQUt5RCxTQUFMO0FBQ0EsUUFBS0Msb0JBQUw7QUFDQSxRQUFLRixpQkFBTDtBQUNBRyxVQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLSixpQkFBdkM7QUFDQSxPQUFJSyxvQkFBSixDQUFlQyxTQUFTQyxjQUFULENBQXdCLG9CQUF4QixDQUFmLEVBQThEQyxNQUE5RCxDQUFxRSxHQUFyRTtBQUNBbEYsY0FBWSxZQUFNO0FBQUVsQyxZQUFRQyxHQUFSLENBQVksa0JBQVosRUFBK0IsT0FBS00sS0FBcEM7QUFBNkMsSUFBakUsRUFBbUUsSUFBbkU7QUFDQTs7O3lDQUVzQjtBQUN0QlAsV0FBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0EsUUFBS29ILHFCQUFMO0FBQ0FOLFVBQU9PLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtWLGlCQUExQztBQUNBLFFBQUtXLGFBQUw7QUFDQSx5QkFBRSxlQUFGLEVBQW1CdkUsR0FBbkIsQ0FBdUIsa0JBQXZCLEVBQTJDLEVBQTNDO0FBQ0E7Ozt5Q0FFc0I7QUFDdEIseUJBQUUsT0FBRixFQUFXcEMsV0FBWCxDQUF1QixZQUF2QjtBQUNBLHlCQUFFLE9BQUYsRUFBV0EsV0FBWCxDQUF1QixNQUF2QjtBQUNBOzs7MENBRXVCO0FBQ3ZCLHlCQUFFLE9BQUYsRUFBV0EsV0FBWCxDQUF1QixNQUF2QjtBQUNBLHlCQUFFLE9BQUYsRUFBV0EsV0FBWCxDQUF1QixZQUF2QjtBQUNBOzs7c0NBRW1CO0FBQ25CLFFBQUtMLEtBQUwsQ0FBV2lILGtCQUFYLENBQThCVCxPQUFPVSxVQUFyQztBQUNBOzs7OEJBR1c7QUFBQTs7QUFBQSxPQUNMQyxhQURLLEdBQ2EsS0FBS25ILEtBQUwsQ0FBV29ILElBRHhCLENBQ0xELGFBREs7O0FBRVgseUJBQUUsZUFBRixFQUFtQjFFLEdBQW5CLENBQXVCLGtCQUF2QixXQUFrRDRFLHFCQUFXLENBQVgsRUFBY0MsTUFBaEU7QUFDQTtBQUNBLHlCQUFFLG1CQUFGLEVBQXVCakgsV0FBdkIsQ0FBbUMsNEJBQW5DO0FBQ0E7QUFDQTtBQUNBLHlCQUFFLG1CQUFGLEVBQXVCQSxXQUF2QixDQUFtQyxrQkFBbkM7QUFDQTtBQUNBLE9BQUlrSCxRQUFRLENBQVo7QUFDQTlILFdBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLE9BQUlnRixRQUFRTSxZQUFhLFlBQUs7QUFDN0IsUUFBR3VDLFNBQVNGLHFCQUFXcEMsTUFBdkIsRUFBOEI7QUFDN0JzQyxhQUFRLENBQVI7QUFDQTtBQUNELFFBQUk1RSxRQUFRMEUscUJBQVdFLEtBQVgsRUFBa0JELE1BQTlCO0FBQ0EsUUFBRyxPQUFLdEgsS0FBTCxDQUFXb0gsSUFBWCxDQUFnQkksY0FBaEIsSUFBa0MsS0FBckMsRUFBMkM7QUFDMUNEO0FBQ0E7QUFDQSwyQkFBRSxtQkFBRixFQUF1QmxILFdBQXZCLENBQW1DLGtCQUFuQztBQUNBO0FBQ0E7QUFDQSwyQkFBRSxtQkFBRixFQUF1QkEsV0FBdkIsQ0FBbUMsNEJBQW5DO0FBQ0E7QUFDQTtBQUNBc0IsZ0JBQVcsWUFBTTtBQUFFLDRCQUFFLG1CQUFGLEVBQXVCdEIsV0FBdkIsQ0FBbUMsNEJBQW5DO0FBQW1FLE1BQXRGLEVBQXdGLENBQXhGO0FBQ0E7QUFDQTtBQUNBc0IsZ0JBQVcsWUFBTTtBQUFFLDRCQUFFLG1CQUFGLEVBQXVCdEIsV0FBdkIsQ0FBbUMsa0JBQW5DO0FBQXlELE1BQTVFLEVBQThFLENBQTlFO0FBQ0E7QUFDQSwyQkFBRSxlQUFGLEVBQW1Cb0MsR0FBbkIsQ0FBdUIsa0JBQXZCLFdBQWtERSxLQUFsRDtBQUNBbEQsYUFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDLE9BQUtNLEtBQUwsQ0FBV29ILElBQVgsQ0FBZ0JJLGNBQWxEO0FBQ0E7QUFDRDtBQUNBLFdBQUtDLHlCQUFMO0FBQ0EsSUF4QlcsRUF3QlQsSUF4QlMsQ0FBWjtBQXlCQSxRQUFLekgsS0FBTCxDQUFXa0YsV0FBWCxDQUF1QlIsS0FBdkI7QUFDQWpGLFdBQVFDLEdBQVIsQ0FBWSw2QkFBMkJ5SCxhQUF2QztBQUNBOzs7OENBRzJCO0FBQUEscUJBQ1csS0FBS25ILEtBQUwsQ0FBV29ILElBRHRCO0FBQUEsT0FDckJNLFdBRHFCLGVBQ3JCQSxXQURxQjtBQUFBLE9BQ1JGLGNBRFEsZUFDUkEsY0FEUTs7QUFFM0IsT0FBR0UsY0FBYyxHQUFqQixFQUFxQjtBQUNwQixTQUFLMUgsS0FBTCxDQUFXMkgsZ0JBQVgsQ0FBNEIsSUFBNUI7QUFDQWxJLFlBQVFDLEdBQVIsQ0FBWSx5REFBWixFQUF1RSxLQUFLTSxLQUFMLENBQVdvSCxJQUFsRjtBQUNBO0FBQ0QsT0FBR00sZUFBZSxHQUFsQixFQUFzQjtBQUNyQixTQUFLMUgsS0FBTCxDQUFXMkgsZ0JBQVgsQ0FBNEIsS0FBNUI7QUFDQWxJLFlBQVFDLEdBQVIsQ0FBWSwwREFBWixFQUF3RSxLQUFLTSxLQUFMLENBQVdvSCxJQUFuRjtBQUNBO0FBQ0Q7QUFDQTs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztrQ0FHZ0I7QUFDZjNILFdBQVFDLEdBQVIsQ0FBWSw0QkFBMEIsS0FBS00sS0FBTCxDQUFXb0gsSUFBWCxDQUFnQkQsYUFBdEQ7QUFDQTNDLGlCQUFjLEtBQUt4RSxLQUFMLENBQVdvSCxJQUFYLENBQWdCRCxhQUE5QjtBQUNBLFFBQUtuSCxLQUFMLENBQVcySCxnQkFBWCxDQUE0QixJQUE1QjtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsTUFBUixFQUFlLFdBQVUsTUFBekI7QUFDQywyQ0FBSyxJQUFHLGtCQUFSLEVBQTJCLFdBQVUsa0JBQXJDLEdBREQ7QUFFQztBQUFBO0FBQUEsT0FBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUEsUUFBSSxJQUFHLG9CQUFQLEVBQTRCLFdBQVUsb0JBQXRDO0FBQUE7QUFBQSxNQUREO0FBSUM7QUFBQTtBQUFBLFFBQUksSUFBRywyQkFBUCxFQUFtQyxXQUFVLG9CQUE3QztBQUFBO0FBQUE7QUFKRDtBQUZELElBREQ7QUFhQTs7OztFQTlIaUJuSCxnQjs7QUFrSW5CLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDUixLQUFELEVBQVc7QUFDL0IsUUFBTztBQUNObUgsUUFBTW5ILE1BQU1tSDtBQUROLEVBQVA7QUFHQSxDQUpEOztBQU1BLElBQU1RLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUM3RyxRQUFELEVBQWM7QUFDeEMsUUFBTywrQkFBbUJTLGNBQW5CLEVBQW1DVCxRQUFuQyxDQUFQO0FBQ0EsQ0FGRDs7a0JBSWUseUJBQVFOLFlBQVIsRUFBc0JtSCxrQkFBdEIsRUFBMEN4QixJQUExQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS2Y7Ozs7OztBQUVBLElBQU15QixTQUFTLFNBQVRBLE1BQVMsQ0FBQzdILEtBQUQsRUFBVztBQUN6QixRQUNDO0FBQUE7QUFBQSxJQUFLLElBQUlBLE1BQU04SCxRQUFmLEVBQXlCLFdBQVUsbUJBQW5DO0FBQ0MseUNBQUssSUFBRyxjQUFSLEVBQXVCLFdBQVUsY0FBakMsRUFBZ0QsS0FBSzlKLG1CQUFPQSxDQUFDLDRFQUFSLENBQXJELEdBREQ7QUFFQyx5Q0FBSyxJQUFHLGNBQVIsRUFBdUIsV0FBVSxjQUFqQyxFQUFnRCxLQUFLQSxtQkFBT0EsQ0FBQyw0RUFBUixDQUFyRDtBQUZELEVBREQ7QUFNQSxDQVBEOztrQkFTZTZKLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmY7Ozs7QUFHQTs7QUFHQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7SUFBWXJHLGM7Ozs7Ozs7Ozs7K2VBZlo7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUtBOzs7SUFHTXVHLFM7OztBQUNMLG9CQUFZL0gsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNaQSxLQURZO0FBRWxCOzs7O3NDQUdtQjtBQUFBOztBQUNuQixRQUFLZ0ksbUJBQUw7QUFDQSxRQUFLaEksS0FBTCxDQUFXcUUsYUFBWDtBQUNBLFFBQUtyRSxLQUFMLENBQVcySCxnQkFBWCxDQUE0QixLQUE1QjtBQUNBaEcsY0FBWSxZQUFNO0FBQ2pCLFdBQUtzRyxhQUFMO0FBQ0EsSUFGRCxFQUVFLEVBRkY7QUFHQXRHLGNBQVksWUFBTTtBQUNqQixXQUFLdUcsZ0JBQUw7QUFDQSxJQUZELEVBRUUsR0FGRjs7QUFJQXpJLFdBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQyxLQUFLTSxLQUF6QztBQUNBOzs7dUNBR29CO0FBQ3BCO0FBQ0E7Ozt5Q0FHc0I7QUFDdEJ3RSxpQkFBYyxLQUFLeEUsS0FBTCxDQUFXVSxTQUFYLENBQXFCeUcsYUFBbkM7QUFDQSxRQUFLbkgsS0FBTCxDQUFXbUksY0FBWCxDQUEwQixLQUExQjtBQUNBLE9BQUcsQ0FBQy9ILEVBQUUsMEJBQUYsRUFBOEJrQyxRQUE5QixDQUF1Qyx5QkFBdkMsQ0FBSixFQUFzRTtBQUNyRWxDLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLGdDQUExQztBQUNBRCxNQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQywwQ0FBMUM7QUFDQUQsTUFBRSxzQkFBRixFQUEwQkMsV0FBMUIsQ0FBc0MsK0JBQXRDO0FBQ0FELE1BQUUsc0JBQUYsRUFBMEJDLFdBQTFCLENBQXNDLHFCQUF0QztBQUNBO0FBQ0Q7Ozs4QkFHVztBQUFBOztBQUFBLDBCQUNzQixLQUFLTCxLQUFMLENBQVdVLFNBRGpDO0FBQUEsT0FDTDBILGNBREssb0JBQ0xBLGNBREs7QUFBQSxPQUNXOUgsTUFEWCxvQkFDV0EsTUFEWDs7QUFFWCxRQUFLTixLQUFMLENBQVdxSSxlQUFYLENBQTJCRCxjQUEzQixFQUEyQzlILE9BQU8yRSxNQUFsRDtBQUNBO0FBQ0F0RCxjQUFZLFlBQU07QUFBRSxXQUFLMkcsZUFBTDtBQUF3QixJQUE1QyxFQUE4QyxFQUE5QztBQUNBOzs7a0NBR2U7QUFBQTs7QUFBQSwyQkFDa0IsS0FBS3RJLEtBQUwsQ0FBV1UsU0FEN0I7QUFBQSxPQUNUMEgsY0FEUyxxQkFDVEEsY0FEUztBQUFBLE9BQ085SCxNQURQLHFCQUNPQSxNQURQOztBQUVmLFFBQUtOLEtBQUwsQ0FBV3VJLGVBQVgsQ0FBMkJILGNBQTNCLEVBQTJDOUgsT0FBTzJFLE1BQWxEO0FBQ0E7QUFDQXRELGNBQVksWUFBTTtBQUFFLFdBQUsyRyxlQUFMO0FBQXdCLElBQTVDLEVBQThDLEVBQTlDO0FBQ0E7OztvQ0FHaUI7QUFBQSwyQkFDZ0IsS0FBS3RJLEtBQUwsQ0FBV1UsU0FEM0I7QUFBQSxPQUNYSixNQURXLHFCQUNYQSxNQURXO0FBQUEsT0FDSDhILGNBREcscUJBQ0hBLGNBREc7O0FBRWpCLFFBQUtJLHVCQUFMO0FBQ0EsUUFBS3hJLEtBQUwsQ0FBV3lJLHdCQUFYLENBQW9DbkksT0FBTzhILGNBQVAsQ0FBcEM7QUFDQTs7O2tDQUdlO0FBQUE7O0FBQ2YsUUFBS3BJLEtBQUwsQ0FBVzBJLGVBQVgsQ0FBMkIsS0FBSzFJLEtBQUwsQ0FBV00sTUFBdEM7QUFDQXFCLGNBQVksWUFBTTtBQUNqQixXQUFLMkcsZUFBTDtBQUNBLElBRkQsRUFFRyxFQUZIO0FBR0E7OztxQ0FHa0I7QUFBQTs7QUFDbEIsT0FBSW5CLGdCQUFnQm5DLFlBQWEsWUFBSztBQUNyQyxRQUFHLE9BQUtoRixLQUFMLENBQVdVLFNBQVgsQ0FBcUJKLE1BQXJCLEtBQWdDcUksU0FBbkMsRUFBNkM7QUFDNUMsWUFBS1YsYUFBTDtBQUNBO0FBQ0QsUUFBRyxPQUFLakksS0FBTCxDQUFXVSxTQUFYLENBQXFCOEcsY0FBckIsSUFBdUMsS0FBMUMsRUFBZ0Q7QUFDL0MsWUFBS29CLFNBQUw7QUFDQTtBQUNELElBUG1CLEVBT2xCLElBUGtCLENBQXBCO0FBUUEsUUFBSzVJLEtBQUwsQ0FBV2tGLFdBQVgsQ0FBdUJpQyxhQUF2QjtBQUNBOzs7dUNBR29CO0FBQ3BCLE9BQUlLLGlCQUFpQixLQUFLeEgsS0FBTCxDQUFXVSxTQUFYLENBQXFCOEcsY0FBMUM7QUFDQSxPQUFHQSxrQkFBa0IsS0FBckIsRUFBMkI7QUFDMUIsU0FBS3hILEtBQUwsQ0FBVzJILGdCQUFYLENBQTRCLElBQTVCO0FBQ0EsSUFGRCxNQUVLO0FBQ0osU0FBSzNILEtBQUwsQ0FBVzJILGdCQUFYLENBQTRCLEtBQTVCO0FBQ0E7QUFDRDs7O3dDQUdxQjtBQUNyQjtBQUNBLE9BQUlrQixvQkFBb0JsQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDa0MsV0FBN0Q7QUFDQSxPQUFHRCxvQkFBb0IsR0FBdkIsRUFBMkI7QUFDMUJ6SSxNQUFFLDBCQUFGLEVBQThCcUMsR0FBOUIsQ0FBa0MsU0FBbEMsRUFBNkMsTUFBN0M7QUFDQTtBQUNEOzs7cUNBR2tCO0FBQ2xCLE9BQUlzRyxrQkFBa0IsS0FBSy9JLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQkosTUFBckIsQ0FBNEIyRSxNQUE1QixHQUFtQyxHQUFuQyxHQUF1QyxJQUE3RDtBQUNBLFFBQUtqRixLQUFMLENBQVdtSSxjQUFYLENBQTBCLENBQUMsS0FBS25JLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQnNJLGFBQWhEO0FBQ0FySCxjQUFZLFlBQU07QUFBRXZCLE1BQUUsdUJBQUYsRUFBMkJxQyxHQUEzQixDQUErQixPQUEvQixFQUF3Q3NHLGVBQXhDO0FBQTBELElBQTlFLEVBQWdGLEVBQWhGO0FBQ0EzSSxLQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQywwQ0FBMUM7QUFDQUQsS0FBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0FELEtBQUUsdUJBQUYsRUFBMkJDLFdBQTNCLENBQXVDLGdDQUF2QztBQUNBRCxLQUFFLHVCQUFGLEVBQTJCQyxXQUEzQixDQUF1QyxzQkFBdkM7QUFDQTs7OzJDQUd3QjtBQUN4QjtBQUNBLE9BQUdELEVBQUUsMEJBQUYsRUFBOEJrQyxRQUE5QixDQUF1Qyx5QkFBdkMsQ0FBSCxFQUFxRTtBQUNwRWxDLE1BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLGdDQUExQztBQUNBRCxNQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQUQsTUFBRSwyQkFBRixFQUErQkMsV0FBL0IsQ0FBMkMsaUNBQTNDO0FBQ0FELE1BQUUsMkJBQUYsRUFBK0JDLFdBQS9CLENBQTJDLDBCQUEzQztBQUNBRCxNQUFFLDJCQUFGLEVBQStCQyxXQUEvQixDQUEyQyxpQ0FBM0M7QUFDQUQsTUFBRSwyQkFBRixFQUErQkMsV0FBL0IsQ0FBMkMsMEJBQTNDO0FBQ0M7QUFDRCxRQUFHLENBQUNELEVBQUUsMEJBQUYsRUFBOEJrQyxRQUE5QixDQUF1QywwQ0FBdkMsQ0FBSixFQUF1RjtBQUN0RmxDLE9BQUUsMEJBQUYsRUFBOEJDLFdBQTlCLENBQTBDLGdDQUExQztBQUNBRCxPQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQTtBQUNEO0FBQ0Q7Ozs2Q0FHMEI7QUFDMUI7QUFDQSxPQUFHRCxFQUFFLDBCQUFGLEVBQThCa0MsUUFBOUIsQ0FBdUMsZ0NBQXZDLENBQUgsRUFBNEU7QUFDM0VsQyxNQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQUQsTUFBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0FELE1BQUUsMkJBQUYsRUFBK0JDLFdBQS9CLENBQTJDLDBCQUEzQztBQUNBRCxNQUFFLDJCQUFGLEVBQStCQyxXQUEvQixDQUEyQyxpQ0FBM0M7QUFDQUQsTUFBRSwyQkFBRixFQUErQkMsV0FBL0IsQ0FBMkMsMEJBQTNDO0FBQ0FELE1BQUUsMkJBQUYsRUFBK0JDLFdBQS9CLENBQTJDLGlDQUEzQztBQUNBO0FBQ0EsUUFBRyxDQUFDRCxFQUFFLDBCQUFGLEVBQThCa0MsUUFBOUIsQ0FBdUMsMENBQXZDLENBQUosRUFBdUY7QUFDdEZsQyxPQUFFLDBCQUFGLEVBQThCQyxXQUE5QixDQUEwQyx5QkFBMUM7QUFDQUQsT0FBRSwwQkFBRixFQUE4QkMsV0FBOUIsQ0FBMEMsZ0NBQTFDO0FBQ0E7QUFDRDtBQUNEOzs7NENBR3lCO0FBQ3pCLE9BQUkrSCxpQkFBaUIsS0FBS3BJLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQjBILGNBQTFDO0FBQ0FoSSxLQUFFLDJCQUFGLEVBQStCcUMsR0FBL0IsQ0FBbUMsTUFBbkMsRUFBMkMyRixpQkFBZSxHQUExRDtBQUNBOzs7MkJBR087QUFBQTs7QUFBQSwyQkFDMkMsS0FBS3BJLEtBQUwsQ0FBV1UsU0FEdEQ7QUFBQSxPQUNEdUksZ0JBREMscUJBQ0RBLGdCQURDO0FBQUEsT0FDaUJELGFBRGpCLHFCQUNpQkEsYUFEakI7QUFBQSxPQUNnQzFJLE1BRGhDLHFCQUNnQ0EsTUFEaEM7O0FBRVAsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLFdBQVIsRUFBb0IsV0FBVSxXQUE5QixFQUEwQyxjQUFlO0FBQUEsYUFBTSxPQUFLNEksc0JBQUwsRUFBTjtBQUFBLE1BQXpELEVBQThGLGNBQWU7QUFBQSxhQUFNLE9BQUtDLHdCQUFMLEVBQU47QUFBQSxNQUE3RztBQUNFRix1QkFDQSw4QkFBQyxlQUFELElBQU8sV0FBV0EsZ0JBQWxCO0FBQ0MsZUFBVSxLQUFLakosS0FBTCxDQUFXb0o7QUFEdEIsTUFEQSxHQUtBLDhCQUFDLGdCQUFELE9BTkY7QUFRRTlJLGFBQ0EsOEJBQUMsbUJBQUQsSUFBVyxRQUFRQSxNQUFuQixHQURBLEdBR0EsSUFYRjtBQWFDO0FBQUE7QUFBQSxPQUFNLElBQUcseUJBQVQsRUFBbUMsV0FBVSx5QkFBN0M7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLHdCQUFiO0FBQUE7QUFBQSxNQUREO0FBRUMsMENBQUcsV0FBVSw0QkFBYixFQUEwQyxTQUFTO0FBQUEsY0FBTSxPQUFLK0ksYUFBTCxFQUFOO0FBQUEsT0FBbkQ7QUFGRCxLQWJEO0FBaUJDO0FBQUE7QUFBQSxPQUFNLElBQUcsMEJBQVQsRUFBb0MsV0FBVSwwQkFBOUM7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLHdCQUFiO0FBQUE7QUFBQSxNQUREO0FBRUMsMENBQUcsV0FBVSw2QkFBYixFQUEyQyxTQUFTO0FBQUEsY0FBTSxPQUFLVCxTQUFMLEVBQU47QUFBQSxPQUFwRDtBQUZELEtBakJEO0FBcUJDO0FBQUE7QUFBQSxPQUFNLElBQUcseUJBQVQsRUFBbUMsV0FBVSx5QkFBN0M7QUFDQztBQUFBO0FBQUEsUUFBRyxXQUFVLHdCQUFiO0FBQUE7QUFBQSxNQUREO0FBRUMsMENBQUcsV0FBVSw0QkFBYixFQUEwQyxTQUFTO0FBQUEsY0FBTSxPQUFLVSxnQkFBTCxFQUFOO0FBQUEsT0FBbkQ7QUFGRCxLQXJCRDtBQXlCQztBQUFBO0FBQUEsT0FBTSxJQUFHLDBCQUFULEVBQW9DLFdBQVUsMEJBQTlDO0FBQ0M7QUFBQTtBQUFBLFFBQUcsV0FBVSx3QkFBYjtBQUFBO0FBQUEsTUFERDtBQUVDLDBDQUFHLFdBQVUscUJBQWIsRUFBbUMsU0FBUztBQUFBLGNBQU0sT0FBS0Msa0JBQUwsRUFBTjtBQUFBLE9BQTVDO0FBRkQ7QUF6QkQsSUFERDtBQWdDQTs7OztFQTVMc0IvSSxnQjs7QUErTHhCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQUUsUUFBTyxFQUFFQyxXQUFXVCxNQUFNUyxTQUFuQixFQUFQO0FBQXNDLENBQXRFOztBQUVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsV0FBWTtBQUFFLFFBQU8sK0JBQW1CYSxjQUFuQixFQUFtQ1QsUUFBbkMsQ0FBUDtBQUFxRCxDQUEzRjs7a0JBRWUseUJBQVFOLFlBQVIsRUFBc0JFLGVBQXRCLEVBQXVDb0gsU0FBdkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk5mOzs7O0FBR0E7Ozs7Ozs7Ozs7K2VBSkE7OztBQUdBOzs7SUFJTXlCLEs7OztBQUNMLGdCQUFZeEosS0FBWixFQUFrQjtBQUFBOztBQUFBLHVHQUNYQSxLQURXO0FBRWpCOzs7O3NDQUVtQjtBQUNuQixRQUFLeUosU0FBTDtBQUNBOzs7eUNBRXNCO0FBQ3RCLFFBQUtDLFlBQUw7QUFDQTs7OzhCQUVXO0FBQUEsT0FDTDNLLElBREssR0FDSSxLQUFLaUIsS0FBTCxDQUFXMkosU0FEZixDQUNMNUssSUFESzs7QUFFWCxPQUFJcUssV0FBVyxLQUFLcEosS0FBTCxDQUFXb0osUUFBMUI7QUFDQTtBQUNBaEosV0FBTXJCLElBQU4sb0JBQTJCc0IsV0FBM0Isb0JBQXdEK0ksUUFBeEQ7QUFDQWhKLFdBQU1yQixJQUFOLG9CQUEyQnNCLFdBQTNCO0FBQ0E7QUFDQUQsV0FBTXJCLElBQU4sb0JBQTJCc0IsV0FBM0Isb0JBQXdEK0ksUUFBeEQ7QUFDQWhKLFdBQU1yQixJQUFOLG9CQUEyQnNCLFdBQTNCO0FBQ0E7OztpQ0FFYztBQUFBLE9BQ1J0QixJQURRLEdBQ0MsS0FBS2lCLEtBQUwsQ0FBVzJKLFNBRFosQ0FDUjVLLElBRFE7QUFBQSxPQUVScUssUUFGUSxHQUVLLEtBQUtwSixLQUFMLENBQVdvSixRQUZoQixDQUVSQSxRQUZRO0FBR2Q7O0FBQ0FoSixXQUFNckIsSUFBTixvQkFBMkJzQixXQUEzQjtBQUNBRCxXQUFNckIsSUFBTixvQkFBMkJzQixXQUEzQixvQkFBd0QrSSxRQUF4RDtBQUNBO0FBQ0FoSixXQUFNckIsSUFBTixvQkFBMkJzQixXQUEzQjtBQUNBRCxXQUFNckIsSUFBTixvQkFBMkJzQixXQUEzQixvQkFBd0QrSSxRQUF4RDtBQUNBOzs7c0NBRW1CO0FBQ25CaEosS0FBRSxnQkFBRixFQUFvQnFDLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLE1BQW5DO0FBQ0E7Ozt1Q0FFb0I7QUFDcEJyQyxLQUFFLGdCQUFGLEVBQW9CcUMsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsT0FBbkM7QUFDQTs7OzJCQUVRO0FBQUEsMEJBQ2MsS0FBS3pDLEtBQUwsQ0FBVzJKLFNBRHpCO0FBQUEsT0FDRjVLLElBREUsb0JBQ0ZBLElBREU7QUFBQSxPQUNJNEQsS0FESixvQkFDSUEsS0FESjs7QUFFUixVQUNDO0FBQUE7QUFBQSxNQUFLLElBQU81RCxJQUFQLGtCQUFMLEVBQWlDLFdBQVUsY0FBM0M7QUFDQywyQ0FBSyxJQUFPQSxJQUFQLGtCQUFMLEVBQWlDLFdBQVUsY0FBM0M7QUFDQyxVQUFLNEQsS0FETjtBQUVDLGFBQVEsS0FBS0MsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBRlQ7QUFHQyxjQUFTLEtBQUtDLGtCQUFMLENBQXdCRCxJQUF4QixDQUE2QixJQUE3QjtBQUhWLE1BREQ7QUFPQyxrQ0FBQyxnQkFBRCxJQUFRLFVBQVUsZUFBbEI7QUFQRCxJQUREO0FBV0E7Ozs7RUF4RGtCckMsZ0I7O2tCQTRETGdKLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFZjs7OztBQUdBOzs7Ozs7Ozs7OytlQUpBOzs7QUFHQTs7O0lBR01JLEk7OztBQUNMLGVBQVk1SixLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1pBLEtBRFk7QUFFbEI7Ozs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsTUFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDLGtDQUFDLGdCQUFEO0FBRkQsSUFERDtBQU1BOzs7O0VBWmlCUSxnQjs7a0JBZUpvSixJOzs7Ozs7Ozs7Ozs7Ozs7OztRQ3JCQ0MsUyxHQUFBQSxTO0FBQVQsU0FBU0EsU0FBVCxDQUFtQjlLLElBQW5CLEVBQXlCNEQsS0FBekIsRUFBZ0NtSCxhQUFoQyxFQUErQztBQUNyRCxRQUFPO0FBQ050TCxRQUFNLFdBREE7QUFFTnNMLDhCQUZNO0FBR05ILGFBQVc7QUFDVjVLLGFBRFU7QUFFVjREO0FBRlU7QUFITCxFQUFQO0FBUUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNUZVAsYSxHQUFBQSxhO1FBT0FKLGMsR0FBQUEsYztBQVBULFNBQVNJLGFBQVQsQ0FBdUJoRCxPQUF2QixFQUFnQztBQUN0QyxRQUFPO0FBQ05aLFFBQU0sZUFEQTtBQUVOWTtBQUZNLEVBQVA7QUFJQTs7QUFFTSxTQUFTNEMsY0FBVCxDQUF3QnJDLFFBQXhCLEVBQWtDO0FBQ3hDLFFBQU87QUFDTm5CLFFBQU0sZ0JBREE7QUFFTm1CO0FBRk0sRUFBUDtBQUlBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDWmV1RixXLEdBQUFBLFc7UUFPQTZFLFcsR0FBQUEsVztBQVBULFNBQVM3RSxXQUFULENBQXFCUixLQUFyQixFQUE0QjtBQUNsQyxRQUFPO0FBQ05sRyxRQUFNLGFBREE7QUFFTmtHO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVNxRixXQUFULEdBQXVCO0FBQzdCLFFBQU87QUFDTnZMLFFBQU0sYUFEQTtBQUVOa0csU0FBTztBQUZELEVBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztRQ1plbUYsUyxHQUFBQSxTO1FBV0F6RixjLEdBQUFBLGM7QUFYVCxTQUFTeUYsU0FBVCxDQUFtQjlLLElBQW5CLEVBQXlCNEQsS0FBekIsRUFBZ0NtSCxhQUFoQyxFQUErQztBQUNyRCxRQUFPO0FBQ050TCxRQUFNLFdBREE7QUFFTnNMLDhCQUZNO0FBR05ILGFBQVc7QUFDVjVLLGFBRFU7QUFFVjREO0FBRlU7QUFITCxFQUFQO0FBUUE7O0FBRU0sU0FBU3lCLGNBQVQsQ0FBd0JELE9BQXhCLEVBQWlDO0FBQ3ZDLFFBQU87QUFDTjNGLFFBQU0sZ0JBREE7QUFFTjJGO0FBRk0sRUFBUDtBQUlBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDaEJlNEIsb0IsR0FBQUEsb0I7QUFBVCxTQUFTQSxvQkFBVCxDQUE4QkwsVUFBOUIsRUFBMEM7QUFDaEQsUUFBTztBQUNObEgsUUFBTSxzQkFEQTtBQUVOa0g7QUFGTSxFQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNMZVIsVyxHQUFBQSxXO1FBT0ErQixrQixHQUFBQSxrQjtRQU9BVSxnQixHQUFBQSxnQjtBQWRULFNBQVN6QyxXQUFULENBQXFCaUMsYUFBckIsRUFBb0M7QUFDMUMsUUFBTztBQUNOM0ksUUFBTSxhQURBO0FBRU4ySTtBQUZNLEVBQVA7QUFJQTs7QUFFTSxTQUFTRixrQkFBVCxDQUE0QlMsV0FBNUIsRUFBeUM7QUFDL0MsUUFBTztBQUNObEosUUFBTSxvQkFEQTtBQUVOa0o7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEJILGNBQTFCLEVBQTBDO0FBQ2hELFFBQU87QUFDTmhKLFFBQU0sa0JBREE7QUFFTmdKO0FBRk0sRUFBUDtBQUlBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDbkJlaUIsd0IsR0FBQUEsd0I7UUFPQUosZSxHQUFBQSxlO1FBUUFFLGUsR0FBQUEsZTtRQVFBWixnQixHQUFBQSxnQjtRQU9BekMsVyxHQUFBQSxXO1FBT0F3RCxlLEdBQUFBLGU7UUFPQXJFLGEsR0FBQUEsYTtRQU1BOEQsYyxHQUFBQSxjO0FBbERULFNBQVNNLHdCQUFULENBQWtDUSxnQkFBbEMsRUFBb0Q7QUFDMUQsUUFBTztBQUNOekssUUFBTSwwQkFEQTtBQUVOeUs7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU1osZUFBVCxDQUF5QkQsY0FBekIsRUFBeUM0QixhQUF6QyxFQUF3RDtBQUM5RCxRQUFPO0FBQ054TCxRQUFNLGlCQURBO0FBRU40SixnQ0FGTTtBQUdONEI7QUFITSxFQUFQO0FBS0E7O0FBRU0sU0FBU3pCLGVBQVQsQ0FBeUJILGNBQXpCLEVBQXlDNEIsYUFBekMsRUFBd0Q7QUFDOUQsUUFBTztBQUNOeEwsUUFBTSxpQkFEQTtBQUVONEosZ0NBRk07QUFHTjRCO0FBSE0sRUFBUDtBQUtBOztBQUVNLFNBQVNyQyxnQkFBVCxDQUEwQkgsY0FBMUIsRUFBMEM7QUFDaEQsUUFBTztBQUNOaEosUUFBTSxrQkFEQTtBQUVOZ0o7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBU3RDLFdBQVQsQ0FBcUJpQyxhQUFyQixFQUFvQztBQUMxQyxRQUFPO0FBQ04zSSxRQUFNLGFBREE7QUFFTjJJO0FBRk0sRUFBUDtBQUlBOztBQUVNLFNBQVN1QixlQUFULENBQXlCcEksTUFBekIsRUFBaUM7QUFDdkMsUUFBTztBQUNOOUIsUUFBTSxpQkFEQTtBQUVOOEI7QUFGTSxFQUFQO0FBSUE7O0FBRU0sU0FBUytELGFBQVQsR0FBeUI7QUFDL0IsUUFBTztBQUNON0YsUUFBTTtBQURBLEVBQVA7QUFHQTs7QUFFTSxTQUFTMkosY0FBVCxDQUF3QmEsYUFBeEIsRUFBdUM7QUFDN0MsUUFBTztBQUNOeEssUUFBTSxnQkFEQTtBQUVOd0s7QUFGTSxFQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REQsSUFBTWlCLGdCQUFnQjtBQUNyQkMsU0FBUSxDQUNQO0FBQ0NuTCxRQUFNLFVBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQywyR0FBUjtBQUZSLEVBRE8sRUFLUDtBQUNDZSxRQUFNLGNBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyxxSEFBUjtBQUZSLEVBTE8sRUFTUDtBQUNDZSxRQUFNLFlBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyxpSEFBUjtBQUZSLEVBVE8sRUFhUDtBQUNDZSxRQUFNLGVBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBYk8sRUFpQlA7QUFDQ2UsUUFBTSxjQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMscUhBQVI7QUFGUixFQWpCTyxFQXFCUDtBQUNDZSxRQUFNLGVBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBckJPLEVBeUJQO0FBQ0NlLFFBQU0sV0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLCtHQUFSO0FBRlIsRUF6Qk8sRUE2QlA7QUFDQ2UsUUFBTSxXQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsK0dBQVI7QUFGUixFQTdCTyxFQWlDUDtBQUNDZSxRQUFNLGtCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsNkhBQVI7QUFGUixFQWpDTyxFQXFDUDtBQUNDZSxRQUFNLFlBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyxpSEFBUjtBQUZSLEVBckNPLEVBeUNQO0FBQ0NlLFFBQU0sUUFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHlHQUFSO0FBRlIsRUF6Q08sRUE2Q1A7QUFDQ2UsUUFBTSxnQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHlIQUFSO0FBRlIsRUE3Q08sRUFpRFA7QUFDQ2UsUUFBTSxnQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHlIQUFSO0FBRlIsRUFqRE8sRUFxRFA7QUFDQ2UsUUFBTSxhQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsbUhBQVI7QUFGUixFQXJETyxFQXlEUDtBQUNDZSxRQUFNLHVCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsdUlBQVI7QUFGUixFQXpETyxDQURhO0FBK0RyQm1NLFNBQVEsQ0FDUDtBQUNDcEwsUUFBTSxXQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsNkdBQVI7QUFGUixFQURPLEVBS1A7QUFDQ2UsUUFBTSxPQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsdUdBQVI7QUFGUixFQUxPLEVBU1A7QUFDQ2UsUUFBTSxjQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsbUhBQVI7QUFGUixFQVRPLEVBYVA7QUFDQ2UsUUFBTSw4QkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLG1KQUFSO0FBRlIsRUFiTyxFQWlCUDtBQUNDZSxRQUFNLGVBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBakJPLEVBcUJQO0FBQ0NlLFFBQU0sY0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHFIQUFSO0FBRlIsRUFyQk8sRUF5QlA7QUFDQ2UsUUFBTSx3QkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHlJQUFSO0FBRlIsRUF6Qk8sRUE2QlA7QUFDQ2UsUUFBTSxrQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLDZIQUFSO0FBRlIsRUE3Qk8sRUFpQ1A7QUFDQ2UsUUFBTSxvQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLGlJQUFSO0FBRlIsRUFqQ08sRUFxQ1A7QUFDQ2UsUUFBTSxlQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsdUhBQVI7QUFGUixFQXJDTyxFQXlDUDtBQUNDZSxRQUFNLGFBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyxtSEFBUjtBQUZSLEVBekNPLEVBNkNQO0FBQ0NlLFFBQU0sZ0JBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx5SEFBUjtBQUZSLEVBN0NPLEVBaURQO0FBQ0NlLFFBQU0sc0JBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyxxSUFBUjtBQUZSLEVBakRPLEVBcURQO0FBQ0NlLFFBQU0saUJBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQywySEFBUjtBQUZSLEVBckRPLENBL0RhO0FBeUhyQm9NLFlBQVcsQ0FDVjtBQUNDckwsUUFBTSxzQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHlJQUFSO0FBRlIsRUFEVSxFQUtWO0FBQ0NlLFFBQU0saUJBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQywrSEFBUjtBQUZSLEVBTFUsRUFTVjtBQUNDZSxRQUFNLGFBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBVFUsRUFhVjtBQUNDZSxRQUFNLG1CQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsbUlBQVI7QUFGUixFQWJVLEVBaUJWO0FBQ0NlLFFBQU0sZUFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLDZIQUFSO0FBRlIsRUFqQlUsRUFxQlY7QUFDQ2UsUUFBTSxXQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMscUhBQVI7QUFGUixFQXJCVSxFQXlCVjtBQUNDZSxRQUFNLGdCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsNkhBQVI7QUFGUixFQXpCVSxFQTZCVjtBQUNDZSxRQUFNLGFBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx5SEFBUjtBQUZSLEVBN0JVLEVBaUNWO0FBQ0NlLFFBQU0sa0JBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyxtSUFBUjtBQUZSLEVBakNVLEVBcUNWO0FBQ0NlLFFBQU0sZ0JBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQywrSEFBUjtBQUZSLEVBckNVLEVBeUNWO0FBQ0NlLFFBQU0sWUFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUF6Q1UsRUE2Q1Y7QUFDQ2UsUUFBTSxhQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMseUhBQVI7QUFGUixFQTdDVSxFQWlEVjtBQUNDZSxRQUFNLGdCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsK0hBQVI7QUFGUixFQWpEVSxFQXFEVjtBQUNDZSxRQUFNLG1CQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMscUlBQVI7QUFGUixFQXJEVSxFQXlEVjtBQUNDZSxRQUFNLGVBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyw2SEFBUjtBQUZSLEVBekRVLEVBNkRWO0FBQ0NlLFFBQU0sY0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLDJIQUFSO0FBRlIsRUE3RFUsRUFpRVY7QUFDQ2UsUUFBTSxnQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLCtIQUFSO0FBRlIsRUFqRVUsQ0F6SFU7QUErTHJCcU0sV0FBVSxDQUNUO0FBQ0N0TCxRQUFNLGdCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsMkhBQVI7QUFGUixFQURTLEVBS1Q7QUFDQ2UsUUFBTSxrQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLCtIQUFSO0FBRlIsRUFMUyxFQVNUO0FBQ0NlLFFBQU0saUJBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyw2SEFBUjtBQUZSLEVBVFMsRUFhVDtBQUNDZSxRQUFNLGdCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsMkhBQVI7QUFGUixFQWJTLEVBaUJUO0FBQ0NlLFFBQU0sWUFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLG1IQUFSO0FBRlIsRUFqQlMsRUFxQlQ7QUFDQ2UsUUFBTSxxQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHVJQUFSO0FBRlIsRUFyQlMsRUF5QlQ7QUFDQ2UsUUFBTSxhQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsdUhBQVI7QUFGUixFQXpCUyxFQTZCVDtBQUNDZSxRQUFNLHVCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsMklBQVI7QUFGUixFQTdCUyxFQWlDVDtBQUNDZSxRQUFNLGNBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx5SEFBUjtBQUZSLEVBakNTLEVBcUNUO0FBQ0NlLFFBQU0sY0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUFyQ1MsRUF5Q1Q7QUFDQ2UsUUFBTSxnQ0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLDZKQUFSO0FBRlIsRUF6Q1MsRUE2Q1Q7QUFDQ2UsUUFBTSx3QkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLDZJQUFSO0FBRlIsRUE3Q1MsRUFpRFQ7QUFDQ2UsUUFBTSxrQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLGlJQUFSO0FBRlIsRUFqRFMsRUFxRFQ7QUFDQ2UsUUFBTSxVQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsaUhBQVI7QUFGUixFQXJEUyxFQXlEVDtBQUNDZSxRQUFNLGFBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx1SEFBUjtBQUZSLEVBekRTLEVBNkRUO0FBQ0NlLFFBQU0sc0JBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQyx5SUFBUjtBQUZSLEVBN0RTLEVBaUVUO0FBQ0NlLFFBQU0sT0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLDJHQUFSO0FBRlIsRUFqRVM7QUEvTFcsQ0FBdEI7O2tCQXVRZWlNLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUWYsSUFBTTVDLGFBQWEsQ0FDakI7QUFDQ0MsU0FBUXRKLG1CQUFPQSxDQUFDLGlIQUFSO0FBRFQsQ0FEaUIsRUFJakI7QUFDQ3NKLFNBQVF0SixtQkFBT0EsQ0FBQywyR0FBUjtBQURULENBSmlCLEVBT2pCO0FBQ0NzSixTQUFRdEosbUJBQU9BLENBQUMsMkhBQVI7QUFEVCxDQVBpQixFQVVqQjtBQUNDc0osU0FBUXRKLG1CQUFPQSxDQUFDLGlIQUFSO0FBRFQsQ0FWaUIsRUFhakI7QUFDQ3NKLFNBQVF0SixtQkFBT0EsQ0FBQyxxSEFBUjtBQURULENBYmlCLEVBZ0JqQjtBQUNDc0osU0FBUXRKLG1CQUFPQSxDQUFDLHVIQUFSO0FBRFQsQ0FoQmlCLEVBbUJqQjtBQUNDc0osU0FBUXRKLG1CQUFPQSxDQUFDLHFIQUFSO0FBRFQsQ0FuQmlCLEVBc0JqQjtBQUNDc0osU0FBUXRKLG1CQUFPQSxDQUFDLHVHQUFSO0FBRFQsQ0F0QmlCLENBQW5COztrQkEyQmVxSixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmLElBQU1pRCxlQUFlO0FBQ3BCaEssU0FBUSxDQUNQO0FBQ0N2QixRQUFNLGtCQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMseUlBQVI7QUFGUixFQURPLEVBS1A7QUFDQ2UsUUFBTSxhQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsNkhBQVI7QUFGUixFQUxPLEVBU1A7QUFDQ2UsUUFBTSxhQURQO0FBRUM0RCxTQUFPM0UsbUJBQU9BLENBQUMsK0hBQVI7QUFGUixFQVRPLEVBYVA7QUFDQ2UsUUFBTSxxQkFEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLCtJQUFSO0FBRlIsRUFiTyxFQWlCUDtBQUNDZSxRQUFNLGFBRFA7QUFFQzRELFNBQU8zRSxtQkFBT0EsQ0FBQywrSEFBUjtBQUZSLEVBakJPLEVBcUJQO0FBQ0NlLFFBQU0sU0FEUDtBQUVDNEQsU0FBTzNFLG1CQUFPQSxDQUFDLHVIQUFSO0FBRlIsRUFyQk8sQ0FEWTtBQTJCcEIyTCxZQUFXO0FBQ1Q1SyxRQUFNLGtCQURHO0FBRVQ0RCxTQUFPM0UsbUJBQU9BLENBQUMseUlBQVI7QUFGRTtBQTNCUyxDQUFyQjs7QUFpQ0EsU0FBU3VNLGNBQVQsR0FBb0Q7QUFBQSxLQUE1QnRLLEtBQTRCLHVFQUF0QnFLLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDbkQsU0FBT0EsT0FBTzFMLElBQWQ7QUFDQyxPQUFLLFdBQUw7QUFDQyxPQUFJbUwsWUFBWU8sT0FBT1AsU0FBdkI7QUFDQSxPQUFJckosc0NBQWNNLFFBQVFrSixhQUF0QixFQUFKO0FBQ0F4SixVQUFPa0ssSUFBUCxDQUFZYixTQUFaO0FBQ0EsdUJBQVkxSixLQUFaLElBQW1CSyxjQUFuQjtBQUNEO0FBQ0MsVUFBT0wsS0FBUDtBQVBGO0FBU0E7O2tCQUVjc0ssYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2YsSUFBTUQsZUFBZTtBQUNwQmxMLFVBQVMsQ0FBQyxFQUFELEVBQUksRUFBSixDQURXO0FBRXBCTyxXQUFVO0FBRlUsQ0FBckI7O0FBS0EsU0FBUzhLLGdCQUFULEdBQXNEO0FBQUEsS0FBNUJ4SyxLQUE0Qix1RUFBdEJxSyxZQUFzQjtBQUFBLEtBQVJKLE1BQVE7O0FBQ3JELFNBQU9BLE9BQU8xTCxJQUFkO0FBQ0MsT0FBSyxlQUFMO0FBQ0MsT0FBSVksVUFBVThLLE9BQU85SyxPQUFyQjtBQUNBLHVCQUFZYSxLQUFaLElBQW1CYixnQkFBbkI7QUFDRCxPQUFLLGdCQUFMO0FBQ0MsT0FBSU8sV0FBV3VLLE9BQU92SyxRQUF0QjtBQUNBLHVCQUFZTSxLQUFaLElBQW1CTixrQkFBbkI7QUFDRDtBQUNDLFVBQU9NLEtBQVA7QUFSRjtBQVVBOztrQkFFY3dLLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZixJQUFNSCxlQUFlO0FBQ3BCakgsbUJBQW1CLENBQ2hCO0FBQ0N0RSxRQUFNLFVBRFA7QUFFQytFLFFBQU0sK0NBRlA7QUFHQ0MsUUFBTSx3QkFIUDtBQUlDUCxjQUFZLFNBSmI7QUFLQ0MsYUFBVyxTQUxaO0FBTUNDLGFBQVc7QUFOWixFQURnQixFQVNoQjtBQUNDM0UsUUFBTSxRQURQO0FBRUMrRSxRQUFNLDRDQUZQO0FBR0NDLFFBQU0sZUFIUDtBQUlDUCxjQUFZLFNBSmI7QUFLQ0MsYUFBVyxTQUxaO0FBTUNDLGFBQVc7QUFOWixFQVRnQixFQWlCaEI7QUFDQzNFLFFBQU0sV0FEUDtBQUVDK0UsUUFBTSxpREFGUDtBQUdDQyxRQUFNLGtCQUhQO0FBSUNQLGNBQVksU0FKYjtBQUtDQyxhQUFXLFNBTFo7QUFNQ0MsYUFBVztBQU5aLEVBakJnQixFQXlCaEI7QUFDQzNFLFFBQU0sVUFEUDtBQUVDK0UsUUFBTSx5Q0FGUDtBQUdDQyxRQUFNLGlCQUhQO0FBSUNQLGNBQVksU0FKYjtBQUtDQyxhQUFXLFNBTFo7QUFNQ0MsYUFBVztBQU5aLEVBekJnQjtBQURDLENBQXJCOztBQXFDQSxTQUFTZ0gsZUFBVCxHQUFxRDtBQUFBLEtBQTVCekssS0FBNEIsdUVBQXRCcUssWUFBc0I7QUFBQSxLQUFSSixNQUFROztBQUNwRCxTQUFPQSxPQUFPMUwsSUFBZDtBQUNDLE9BQU0sa0JBQU47QUFDQyxPQUFJbU0sUUFBUVQsT0FBT1MsS0FBbkI7QUFDQSx1QkFBVzFLLEtBQVgsSUFBa0IwSyxZQUFsQjtBQUNEO0FBQ0MsVUFBTzFLLEtBQVA7QUFMRjtBQU9BOztrQkFFY3lLLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NmLElBQU1KLGVBQWUsRUFBckI7O0FBRUEsU0FBU00sd0JBQVQsR0FBZ0U7QUFBQSxLQUE5QjNLLEtBQThCLHVFQUF0QnFLLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDL0QsU0FBT0EsT0FBTzFMLElBQWQ7QUFDQyxPQUFLLGFBQUw7QUFDQyxPQUFJa0csUUFBUXdGLE9BQU94RixLQUFuQjtBQUNBLHVCQUFZekUsS0FBWixJQUFtQnlFLFlBQW5CO0FBQ0QsT0FBSyxhQUFMO0FBQ0NBLFdBQVF3RixPQUFPeEYsS0FBZjtBQUNBLHVCQUFXekUsS0FBWCxJQUFrQnlFLFlBQWxCO0FBQ0Q7QUFDQyxVQUFPekUsS0FBUDtBQVJGO0FBVUE7O2tCQUVjMkssd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7O0FBRUEsSUFBTU4sZUFBZSxFQUFyQjs7QUFFQSxTQUFTQyxjQUFULEdBQW9EO0FBQUEsS0FBNUJ0SyxLQUE0Qix1RUFBdEJxSyxZQUFzQjtBQUFBLEtBQVJKLE1BQVE7O0FBQ25ELFNBQU9BLE9BQU8xTCxJQUFkO0FBQ0MsT0FBSyxXQUFMO0FBQ0MsT0FBSW1MLFlBQVlPLE9BQU9QLFNBQXZCO0FBQ0EsT0FBSXJKLHNDQUFjTSxRQUFRa0osYUFBdEIsRUFBSjtBQUNBeEosVUFBT2tLLElBQVAsQ0FBWWIsU0FBWjtBQUNBLHVCQUFZMUosS0FBWixJQUFtQkssY0FBbkI7QUFDRCxPQUFLLGdCQUFMO0FBQ0MsT0FBSTZELFVBQVUrRixPQUFPL0YsT0FBckI7QUFDQTdELHlDQUFjMkosd0JBQWM5RixPQUFkLENBQWQ7QUFDQSx1QkFBWWxFLEtBQVosSUFBbUJLLGNBQW5CO0FBQ0Q7QUFDQyxVQUFPTCxLQUFQO0FBWEY7QUFhQTs7a0JBRWNzSyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZixJQUFNRCxlQUFlO0FBQ3BCckUsV0FBVSxDQUNUO0FBQ0NDLE9BQUssY0FETjtBQUVDL0UsUUFBTSxHQUZQO0FBR0NwQyxRQUFNO0FBSFAsRUFEUyxFQU1UO0FBQ0NtSCxPQUFLLGlCQUROO0FBRUMvRSxRQUFNLFVBRlA7QUFHQ3BDLFFBQU07QUFIUCxFQU5TLEVBV1Q7QUFDQ21ILE9BQUssZUFETjtBQUVDL0UsUUFBTSxRQUZQO0FBR0NwQyxRQUFNO0FBSFAsRUFYUyxFQWdCVDtBQUNDbUgsT0FBSyxpQkFETjtBQUVDL0UsUUFBTSxVQUZQO0FBR0NwQyxRQUFNO0FBSFAsRUFoQlMsRUFxQlQ7QUFDQ21ILE9BQUssY0FETjtBQUVDL0UsUUFBTSxPQUZQO0FBR0NwQyxRQUFNO0FBSFAsRUFyQlMsQ0FEVTtBQTRCcEIyRyxhQUFZO0FBNUJRLENBQXJCOztBQStCQSxTQUFTbUYsZUFBVCxHQUFxRDtBQUFBLEtBQTVCNUssS0FBNEIsdUVBQXRCcUssWUFBc0I7QUFBQSxLQUFSSixNQUFROztBQUNwRCxTQUFPQSxPQUFPMUwsSUFBZDtBQUNDLE9BQUssc0JBQUw7QUFDQyxPQUFJa0gsYUFBYXdFLE9BQU94RSxVQUF4QjtBQUNBLHVCQUFZekYsS0FBWixJQUFtQnlGLHNCQUFuQjtBQUNEO0FBQ0MsVUFBT3pGLEtBQVA7QUFMRjtBQU9BOztrQkFFYzRLLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNmLElBQU1QLGVBQWU7QUFDcEI5QyxpQkFBZ0I7QUFESSxDQUFyQjs7QUFJQSxTQUFTc0QsYUFBVCxHQUFxRDtBQUFBLEtBQTlCN0ssS0FBOEIsdUVBQXRCcUssWUFBc0I7QUFBQSxLQUFSSixNQUFROztBQUNwRCxTQUFPQSxPQUFPMUwsSUFBZDtBQUNDLE9BQUssYUFBTDtBQUNDLE9BQUkySSxnQkFBZ0IrQyxPQUFPL0MsYUFBM0I7QUFDQSx1QkFBWWxILEtBQVosSUFBbUJrSCw0QkFBbkI7QUFDRCxPQUFLLG9CQUFMO0FBQ0MsT0FBSU8sY0FBY3dDLE9BQU94QyxXQUF6QjtBQUNBLHVCQUFZekgsS0FBWixJQUFtQnlILHdCQUFuQjtBQUNELE9BQUssa0JBQUw7QUFDQyxPQUFJRixpQkFBaUIwQyxPQUFPMUMsY0FBNUI7QUFDQSx1QkFBWXZILEtBQVosSUFBbUJ1SCw4QkFBbkI7QUFDRDtBQUNDLFVBQU92SCxLQUFQO0FBWEY7QUFhQTs7a0JBRWM2SyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZixJQUFNUixlQUFlO0FBQ3BCbEMsaUJBQWdCLENBREk7QUFFcEJaLGlCQUFnQixLQUZJO0FBR3BCd0IsZ0JBQWU7QUFISyxDQUFyQjs7QUFNQSxTQUFTK0Isa0JBQVQsR0FBd0Q7QUFBQSxLQUE1QjlLLEtBQTRCLHVFQUF0QnFLLFlBQXNCO0FBQUEsS0FBUkosTUFBUTs7QUFDdkQsU0FBT0EsT0FBTzFMLElBQWQ7QUFDQyxPQUFLLDBCQUFMO0FBQ0MsT0FBSXlLLG1CQUFtQmlCLE9BQU9qQixnQkFBOUI7QUFDQSx1QkFBWWhKLEtBQVosSUFBbUJnSixrQ0FBbkI7QUFDRCxPQUFLLGlCQUFMO0FBQ0MsT0FBSWIsaUJBQWlCOEIsT0FBTzlCLGNBQTVCO0FBQ0EsT0FBSTRCLGdCQUFnQkUsT0FBT0YsYUFBM0I7QUFDQSxPQUFHNUIsa0JBQWtCNEIsZ0JBQWdCLENBQXJDLEVBQXVDO0FBQ3RDNUIscUJBQWlCLENBQWpCO0FBQ0EsSUFGRCxNQUVPO0FBQ05BLHNCQUFrQixDQUFsQjtBQUNBO0FBQ0QsdUJBQVluSSxLQUFaLElBQW1CbUksOEJBQW5CO0FBQ0QsT0FBSyxpQkFBTDtBQUNDQSxvQkFBaUI4QixPQUFPOUIsY0FBeEI7QUFDQTRCLG1CQUFnQkUsT0FBT0YsYUFBdkI7QUFDQSxPQUFHNUIsa0JBQWtCLENBQXJCLEVBQXVCO0FBQ3RCQSxxQkFBaUI0QixnQkFBZ0IsQ0FBakM7QUFDQSxJQUZELE1BRU87QUFDTjVCLHNCQUFrQixDQUFsQjtBQUNBO0FBQ0QsdUJBQVluSSxLQUFaLElBQW1CbUksOEJBQW5CO0FBQ0QsT0FBSyxrQkFBTDtBQUNDLE9BQUlaLGlCQUFpQjBDLE9BQU8xQyxjQUE1QjtBQUNBLHVCQUFZdkgsS0FBWixJQUFtQnVILDhCQUFuQjtBQUNELE9BQUssYUFBTDtBQUNDLE9BQUlMLGdCQUFnQitDLE9BQU8vQyxhQUEzQjtBQUNBLHVCQUFZbEgsS0FBWixJQUFtQmtILDRCQUFuQjtBQUNELE9BQUssaUJBQUw7QUFDQyxPQUFJN0csU0FBUzRKLE9BQU81SixNQUFwQjtBQUNBMkksc0JBQW1CM0ksT0FBTyxDQUFQLENBQW5CO0FBQ0E4SCxvQkFBaUIsQ0FBakI7QUFDQSx1QkFBWW5JLEtBQVosSUFBbUJLLGNBQW5CLEVBQTJCMkksa0NBQTNCLEVBQThDYiw4QkFBOUM7QUFDRCxPQUFLLGVBQUw7QUFDQyxPQUFJNEMseUJBQWlCL0ssS0FBakIsQ0FBSjtBQUNBLFVBQU8rSyxVQUFVLGtCQUFWLENBQVA7QUFDQSxVQUFPQSxVQUFVLFFBQVYsQ0FBUDtBQUNBLHVCQUFZQSxTQUFaO0FBQ0QsT0FBSyxnQkFBTDtBQUNDLE9BQUloQyxnQkFBZ0JrQixPQUFPbEIsYUFBM0I7QUFDQSx1QkFBWS9JLEtBQVosSUFBbUIrSSw0QkFBbkI7QUFDRDtBQUNDLFVBQU8vSSxLQUFQO0FBMUNGO0FBNENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztrQkFFYzhLLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTTlKLFNBQVMsQ0FDZDtBQUNDRSxPQUFNLEdBRFA7QUFFQ0MsUUFBTyxJQUZSO0FBR0NFLFlBQVc4RTtBQUhaLENBRGMsRUFNZDtBQUNDakYsT0FBTSxhQURQO0FBRUNDLFFBQU8sSUFGUjtBQUdDRSxZQUFXOEU7QUFIWixDQU5jLEVBV2Q7QUFDQ2pGLE9BQU0sUUFEUDtBQUVDQyxRQUFPLEtBRlI7QUFHQ0UsWUFBV3ZCO0FBSFosQ0FYYyxFQWdCZDtBQUNDb0IsT0FBTSxVQURQO0FBRUNDLFFBQU8sSUFGUjtBQUdDRSxZQUFXRztBQUhaLENBaEJjLEVBcUJkO0FBQ0NOLE9BQU0sa0JBRFA7QUFFQ0MsUUFBTyxLQUZSO0FBR0NFLFlBQVdHO0FBSFosQ0FyQmMsRUEwQmQ7QUFDQ04sT0FBTSxVQURQO0FBRUNDLFFBQU8sS0FGUjtBQUdDRSxZQUFXMkM7QUFIWixDQTFCYyxFQStCZDtBQUNDOUMsT0FBTSxPQURQO0FBRUNDLFFBQU8sS0FGUjtBQUdDRSxZQUFXc0k7QUFIWixDQS9CYyxDQUFmLEMsQ0FSQTtrQkE4Q2UzSSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2Y7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0E7QUFDQSxJQUFNZ0ssY0FBYyw0QkFBZ0I7QUFDbkMxSyxRQUFPZ0ssd0JBRDRCO0FBRW5DbEksVUFBU29JLDBCQUYwQjtBQUduQ3JILFNBQVFzSCx5QkFIMkI7QUFJbkN2RyxVQUFTK0csMEJBSjBCO0FBS25Dekcsa0JBQWlCbUcsa0NBTGtCO0FBTW5DL0UsU0FBUWdGLHlCQU4yQjtBQU9uQ3pELE9BQU0wRCx1QkFQNkI7QUFRbkNwSyxZQUFXcUs7QUFSd0IsQ0FBaEIsQ0FBcEI7O0FBV0EsSUFBTWpOLFFBQVEsd0JBQ2JtTixXQURhO0FBRWI7QUFDQUUsS0FBYUEsSUFBSTNFLE9BQU80RSw0QkFBeEIsSUFBd0Q1RSxPQUFPNEUsNEJBQVAsRUFIM0MsQ0FBZDs7a0JBTWV0TixLOzs7Ozs7Ozs7OztBQzdCZix3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtbGlnaHRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hdC13b3JrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYmVhY2gtYmFja2ZsaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2RheWxpZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2Nocm9kaW5nZXJzLWtpY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2F0ZS1wYXJrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzLzR0aC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWFuZC1ncm9vbS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRpbmctY2xhc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wcmVnbmFuY3ktYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYnJvb2tseW4tYnJpZGdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbnljLXNreWxpbmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9iZWFjaC1zaG9vdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9maWVsZC1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWJsdXIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3JlZC1oYWlyZWQtY2hpbGQuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdDEuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvd29tYW4tZHJlc3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiOyIsImNvbnN0IGNsaWVudCA9IHtcclxuXHR1c2VyOiAnb3Jzb24xMDhAZ21haWwuY29tJyxcclxuXHRpZDogJzU1NzM0NjcxODY5MC1jaGQxZWYxY2UwdGpqbmgxN211cWQwMWRqZmk2b201by5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXHJcblx0c2VjcmV0OiAnNmhTRmoxdWRCbHRNWGswZ0pRTmhOYTh3JyxcclxuXHRyZWZyZXNoVG9rZW46ICcxL3JuVlZaZzRpWTIyQUJDd2trdUpqVlk4TjBBaGRuanVLVHRUaGo3cFlROUlqTWJkYWFvSG9OTVpxYm5JNWlpejgnLFxyXG5cdGFjZXNzVG9rZW46ICd5YTI5Lkdsc0JCblRRXzVseWtHM3ZmakRWamRVMHFReTdDYjdvQjhlWjhfU2xOcDg2dW5Ba1JrS1pDc0ltSmZDandyem9CUmM3UEQwd0ctMFhyWlFES2tQY0dpdmNzQjRad1V0WVhDN3RtUWRmNkthMFdzcUFtWEI4akV1YTBqaWsnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckVtYWlsID0gXCJhc3RhdG9uMTA4QG91dGxvb2suY29tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCIvL2V4cHJlc3MgaW1wb3J0XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG4vL21pZGRsZXdhcmUgaW1wb3J0c1xyXG5pbXBvcnQgZXhwcmVzc1N0YXRpY0d6aXAgZnJvbSBcImV4cHJlc3Mtc3RhdGljLWd6aXBcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9zaGFyZWQvcm91dGVzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCc7XHJcblxyXG4vL2xvY2FsIGltcG9ydHNcclxuaW1wb3J0IGNsaWVudCwgeyB1c2VyRW1haWwgfSBmcm9tICcuLi8uLi9vYXV0aC9jbGllbnREYXRhJztcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZSgnLycsIGV4cHJlc3NTdGF0aWNHemlwKFwicHVibGljL1wiKSk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG5cdGxldCBkZXN0ID0gcmVxLnVybCA9PSAnL2luZGV4Lmh0bWwnID8gJy8nIDogcmVxLnVybDtcclxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cclxuXHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17ZGVzdH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdDxBcHAgLz4gXHJcblx0XHRcdDwvU3RhdGljUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpXHJcblxyXG5cdHJlcy5zZW5kKGBcclxuXHRcdDxodG1sIGxhbmc9XCJlbi11c1wiPlxyXG5cdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cclxuXHRcdFx0XHQ8dGl0bGU+Qm9rZWggQmVzdCBQaG90b2dyYXBoeSBJbmMuPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9JHtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby5wbmcnKX0+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMi4wL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWhXVmpmbHdGeEw2c056bnRpaDI3YmZ4a3IyN1BtYmJLL2lTdkorYTQrMG93WHE3OXYrbHNGa1c1NGJPR2JpRFFcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxyXG5cdFx0XHRcdDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG5cdFx0XHQ8L2hlYWQ+XHJcblx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJhcHBcIj4ke21hcmt1cH08L2Rpdj5cclxuXHRcdFx0PC9ib2R5PlxyXG5cdFx0PC9odG1sPlxyXG5cdGApXHJcbn0pXHJcblxyXG5hcHAucG9zdCgnL2NvbnRhY3QnLCAocmVxLCByZXMpID0+IHtcclxuXHRsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcblx0XHRzZXJ2aWNlOiAnZ21haWwnLFxyXG5cdFx0aG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuXHRcdGF1dGg6IHtcclxuXHRcdFx0dHlwZTogJ09BdXRoMicsXHJcblx0XHRcdHVzZXI6IGNsaWVudC51c2VyLFxyXG5cdFx0XHRjbGllbnRJZDogY2xpZW50LmlkLFxyXG5cdFx0XHRjbGllbnRTZWNyZXQ6IGNsaWVudC5zZWNyZXQsXHJcblx0XHRcdHJlZnJlc2hUb2tlbjogY2xpZW50LnJlZnJlc2hUb2tlbixcclxuXHRcdFx0YWNjZXNzVG9rZW46IGNsaWVudC5hY2Nlc3NUb2tlblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgbWFpbE9wdGlvbnMgPSB7XHJcblx0XHRmcm9tOiBgJHtyZXEuYm9keS5uYW1lfSA8JHtjbGllbnQudXNlcn0+YCxcclxuXHRcdHRvOiAnYXN0YXRvbjEwOEBvdXRsb29rLmNvbScsXHJcblx0XHRzdWJqZWN0OiAnQ29udGFjdCBmcm9tIEJva2VoIEJlc3QgUGhvdG8gd2Vic2l0ZScsXHJcblx0XHRodG1sOiAgYDwhRE9DVFlQRSA+XHJcblx0XHRcdFx0PGh0bWwgbGFuZz1cInVzLWVuXCI+XHJcblx0XHRcdFx0XHQ8aGVhZD5cclxuXHRcdFx0XHRcdFx0PG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9VVRGLThcIj5cclxuXHRcdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aDsgaW5pdGlhbC1zY2FsZT0xLjA7IG1heGltdW0tc2NhbGU9MS4wOyB1c2VyLXNjYWxhYmxlPW5vO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGl0bGU+Q29vbCBFbWFpbCBicm88L3RpdGxlPlxyXG5cdFx0XHRcdFx0PC9oZWFkPlxyXG5cdFx0XHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkVtYWlsIEZyb20gJHtyZXEuYm9keS5uYW1lfSBhdCAke3JlcS5ib2R5LmVtYWlsfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHA+bWVzc3NhZ2UgZnJvbSAke3JlcS5ib2R5Lm5hbWV9IHJlYWRzOiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5tZXNzYWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke3JlcS5ib2R5Lm5hbWV9LCAke3JlcS5ib2R5Lm51bWJlcn0gJHtyZXEuYm9keS5lbWFpbH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9ib2R5PlxyXG5cdFx0XHRcdDwvaHRtbD5gXHJcblx0fVxyXG5cclxuXHR0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVyciwgaW5mbykgPT4ge1xyXG5cdFx0aWYoZXJyKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuXHRcdFx0cmVzLnJlZGlyZWN0KCcvY29udGFjdC9mYWlsJyk7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFbWFpbCBzZW50Jyk7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3Qvc3VjY2VzcycpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICcrcG9ydCkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWJvdXRBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9hYm91dF9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgcHJvamVjdG9yQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9uKClcclxuXHRcdC8vIHRoaXMucHJvcHMuYWN0aW9ucy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQWJvdXQgcHJvcHMgYXJlJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMudG9nZ2xlQWJvdXRNb2RpZmllck9mZigpXHJcblx0fVxyXG5cclxuXHR0b2dnbGVBYm91dE1vZGlmaWVyT24oKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWFib3V0Jyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5hYm91dC5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJhYm91dF9fcGFnZS1oZWFkZXJcIj5PdXIgU3Rvcnk8L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiYWJvdXRcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+RGF2aWQgQm9rZWggPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBhIHNhZ2UgbW93ZXIgZ29hdCwgcmFjY29vbnMgcmh1YmFyYiBvdXRob3VzZSBhLCBhcHBsZXMgYmVycmllcyBjb3JuLiBLaWRuZXkgYmVhbnMgb3N0cmljaCB0cnVja3MuIEluIHRoZSBzdHJhdyByYWluIGJhcnJlbHMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyB3ZWxsIGtub3duIGZvciByYWtlcyBwbG93cy4gSm9obiBEZWVyZSBiZWVzLCBwYXJzbGV5IHN3ZWV0IGNvcm4gYXQsIHBvcmt5IHBpZyBzaG92ZWxzLiB2ZXRlcmluYXJpYW4gYmx1ZSBiZXJyaWVzIGNhdHRsZSBqZWxseSBjYW5uaW5nLiBCbHVlIGJlcnJpZXMgcGlnZW9ucyBidXp6IGFuZCBiZWFuIHByYWlyaWUgZG9ncyBuYWlscyBhdCBlc3QuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gLiBBdWdlcnMgb2F0cyBoZW4gY293cGllcy4gQXBwbGVzIGR1Y2suXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5PdXIgV29yayA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdGlzIHN0cmF3LCBxdWFpbCBhIG9zdHJpY2hlcyBkb25rZXksIGhheSBob29rIGN1Y3VtYmVycy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuIFNob3ZlbHMgYXQgcmFrZXMgcGxvd3MuIFF1YWNrIGhhbW1lcnMgZWdncGxhbnQgaXMgdXR0ZXJzIG5haWxzIGdhcmRlbi4gSGF5YmluZSBjYXJyb3RzIHNveWJlYW5zLCBvd2xzIGR1Y2sgcmFpc2luZyBvciwgY2hlZXAgaW4gcGxvd3MuIE91dGhvdXNlIGF0IG5haWxzIG1vd2VyLiBGb3JhZ2UgSGFydmVzdGVyLCBiZWFuIGFuZCBTaWxhZy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJhYm91dF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Bd2FyZHMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8bGk+Q3VsdGl2YXRvciBicnVzc2VsIHNwcm91dHMgaGFycm93cywgY2VsZXJ5IGRyZWFkIHdpdGgga2FsZSBhdWdlcnMgaGFycm93cy4gVmV0ZXJpbmFyaWFuIGF0IFNlZWRlciBlZ2dzIHdpdGggd2F0ZXJtZWxvbiBvc3RyaWNoZXMuPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPkNvbyB3aXRoIHJhYmJpdHMgZWN0LiBHcmFwZXMgbmVzdCBwaXRjaCBmb3JrIGFuIHBsb3dzIG1hcGxlIHN5cnVwIHllYXJsaW5ncywgcXVpbHQgc3F1ZWFrIGRvZ2dpZXMuIExhbWIgcGlnIHJvb3N0ZXIgc2hlZXAuIFV0dGVycyBhcmUgd2VhdGhlcnZhbmUgZm9hbCBlc3QuIDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Hb2JibGUgZmVlZCwgamVsbHkgcGVwcGVycyBhdCBwbG93IGJhc2lsIHN3YXRoZXIsIGNhdCB3ZWF0aGVydmFuZSBncmFpbiB0cnVja3MsIGhvb3QgcG9ueSByb2JpbnMgcGVhY29ja3MgYW4ga2FsZS4gUm9vc3RlciBjZWxlcnkgcGluZWFwcGxlcyBmZXJ0aWxpemVyLjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGFib3V0LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0YWJvdXQsIFxyXG5cdFx0cHJvamVjdG9yIFxyXG5cdH07IFxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuIFx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoT2JqZWN0LmFzc2lnbih7fSwgYWJvdXRBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBYm91dCk7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0Um91dGUsXHJcblx0UmVkaXJlY3QsXHJcblx0U3dpdGNoXHJcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbi8vUm91dGVzIGltcG9ydFxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInBhZ2Utd3JhcHBlclwiIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0XHQ8U3dpdGNoPlxyXG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDLCAuLi5yZXN0IH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRleGFjdD17ZXhhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QyB7Li4ucHJvcHN9IHsuLi5yZXN0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX0gXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N3aXRjaD5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vUmVhY3QgQ29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnRzIGltcG9ydHNcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb250YWN0X2FjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdHRoaXMuY29uZmlybU1lc3NhZ2VCb3goKTtcclxuXHRcdC8vdGltZW91dCBuZWVkZWQgZm9yIHJlZGlyZWN0IHRvIHN0eWxlIG1haW4gcHJvcGVybHkuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKTtcclxuXHRcdH0sNTApO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdHRoaXMucmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCk7XHJcblx0XHRjb25zb2xlLmxvZygnQ29udGFjdCBwcm9wcyBpczogJywgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkZXJTdHlsZXMoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidW5tb3VudGluZyBDb250YWN0XCIpO1xyXG5cdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVkaXJlY3RBZnRlclNlbmRNZXNzYWdlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0hleSB0aGlzIHdvcmtlZCByZWRpcmVjdGluZycpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wcm9wcy5yZWRpcmVjdF9jaGVjayh0cnVlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyBtYXkgbm90IGhhdmUgd29ya2VkIHNldHRpbmcgcmVkaXJlY3QgdG8gZmFsc2UnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdFx0XHR9LDM1MDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbmZpcm1NZXNzYWdlQm94KCkge1xyXG5cdFx0Ly9jaGVja3Mgc3RhdHVzIG9mIHNlbnQgbWVzc2FnZXMgYW5kIGRpc3BsYXlzIGEgbm90aWNlIGFjY29yZGluZ2x5XHJcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0IGNvbmZpcm1NZXNzYWdlQm94XCIpXHJcblx0XHRsZXQgc3RhdHVzID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzO1xyXG5cdFx0aWYoc3RhdHVzKXtcclxuXHRcdFx0aWYoc3RhdHVzID09PSAnc3VjY2Vzcycpe1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgU2VudCEhJywgJ0lcXCdsbCBnZXQgYmFjayB0byB5b3Ugc29vbi4nXSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJwcm9wcyBhZnRlciBzdWNjZXNzIFwiLCB0aGlzLnByb3BzLmNvbnRhY3QubWVzc2FnZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuc3RvcmVfbWVzc2FnZShbJ01lc3NhZ2UgRXJyb3IhIScsICdQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiddKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgZmFpbCBcIiwgdGhpcy5wcm9wcy5jb250YWN0KTsgfSwgMTAwMCk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHsgXHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXInKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lci0tZHJvcC1pbicpO1xyXG5cdFx0XHR9LCA2MDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPbigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4nKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZigpIHtcclxuXHRcdGlmKCQoJyNtYWluJykuaGFzQ2xhc3MoJ21haW4tLWNvbnRhY3QnKSA9PT0gdHJ1ZSl7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tY29udGFjdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRvZ2dsZUxvYWRlclN0eWxlcygpIHtcclxuXHRcdCQoJyNsb2FkZXJfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fY29udGFpbmVyJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIxJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0XHQkKCcjbG9nby1sb2FkZXIyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm0tbG9hZGVyX19sb2dvJyk7XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLmNvbnRhY3QucmVkaXJlY3QgPT09IHRydWUpe1xyXG5cdFx0XHRyZXR1cm4gPFJlZGlyZWN0IHRvPScvY29udGFjdCcgLz5cclxuXHRcdH1cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4nIGlkPVwibWFpblwiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zdGF0dXMgP1xyXG5cdFx0XHRcdFx0PGRpdiBpZD1cImNvbmZpcm1fX2NvbnRhaW5lclwiIGNsYXNzTmFtZT0nY29uZmlybV9fY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbmZpcm1fX2lubmVyJz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nY29uZmlybV9faGVhZGVyJz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMF19PC9oMj5cclxuXHRcdFx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdjb25maXJtX190ZXh0Jz57dGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2VbMV19PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19pbmZvLW91dHRlci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1pbm5lci1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFjdF9faGVhZGVyJz5HZXQgSW4gVG91Y2ggV2l0aCBVczwvaDE+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5JZiB5b3UncmUgdGhpbmtpbmcgYWJvdXQgaGlyaW5nIGEgcGhvdG9ncmFwaGVyIGZvciBhIHNob290LCB3ZSB3b3VsZCBsb3ZlIHRvIGRpc2N1c3MgaXQgd2l0aCB5b3UuICBXZSBjYW4gcHJvdmlkZSBwcm9mZXNzaW9uYWwgaW5zaWdodCBhbmQgaGVscCB0byBtYWtlIHlvdXIgZHJlYW0gc2hvb3QgYSByZWFsaXR5LiAgQ29uc3VsYXRpb25zIGFyZSBjb21wbGV0ZWx5IGZyZWUuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhY3RfX2FkZHJlc3MtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8YWRkcmVzcyBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBBZGRyZXNzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0MTIzIFdvb3N0ZXIgU3QgLSBOZXcgWW9yaywgTlkgMTAwMTJcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19hZGRyZXNzLWljb25zIGZhciBmYS1lbnZlbG9wZVwiPjwvc3Bhbj4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX3NydFwiPiBFbWFpbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdERCb2tlaEBCb2tlaEJlc3QuY29tXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtcGhvbmVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gUGhvbmUgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoMjEyKSA1NTUtNTU1NVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19tZXNzYWdlLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBjb250YWN0OiBzdGF0ZS5jb250YWN0IH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQ29udGFjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19jb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J21lc3Nlbmdlcl9fZm9ybScgbWV0aG9kPSdwb3N0JyBhY3Rpb249Jyc+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J25hbWUnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1uYW1lJyBpZD0naW5wdXROYW1lJyBwbGFjZWhvbGRlcj0nTmFtZSAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSdudW1iZXInIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1udW1iZXInIGlkPSdpbnB1dE51bWJlcicgcGxhY2Vob2xkZXI9J051bWJlcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19pbnB1dC1lbWFpbCcgaWQ9J2lucHV0RW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCAocmVxdWlyZWQpJyByZXF1aXJlZD48L2lucHV0PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbWVzc2FnZScgaWQ9J2lucHV0TWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UgIChyZXF1aXJlZCknIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgaWQ9J21lc3Nlbmdlcl9fc2VuZCcgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2J1dHRvbicgdmFsdWU9J1NlbmQgTWVzc2FnZScgPjwvaW5wdXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpbG1zdHJpcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJGaWxtc3RyaXAgbW91bnRlZCBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQobmFtZSkge1xyXG5cdFx0JChgI2ZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQobmFtZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJpbWFnZSBlcnJvclwiKTtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdG1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykge1xyXG5cdFx0bGV0IG1hcHBlZFNsaWRlcyA9IHNsaWRlcy5tYXAoICh7IG5hbWUsIGltYWdlIH0pID0+IHsgXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBrZXk9e2BmaWxtc3RyaXBfX2NlbGwtJHtuYW1lfWB9IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY2VsbFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2ltYWdlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2ltYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlfSBcclxuXHRcdFx0XHRcdFx0XHRhbHQ9e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25Mb2FkPXt0aGlzLmhhbmRsZUltYWdlTG9hZGVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdFx0b25FcnJvcj17dGhpcy5oYW5kbGVJbWFnZUVycm9yZWQuYmluZCh0aGlzLCBuYW1lKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8L2ltZz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2ltYWdlLW92ZXJsYXlcIiBpZD1cImZpbG1zdHJpcF9faW1hZ2Utb3ZlcmxheVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PExvYWRlciBsb2FkZXJJZD17YGZpbG1zdHJpcEltYWdlTG9hZGVyX18ke25hbWV9YH0vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBtYXBwZWRTbGlkZXNcclxuXHR9XHJcblxyXG5cdGZpbG1zdHJpcExlZnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNoaWZ0ZWQgZmlsbXN0cmlwIGxlZnRcIik7XHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBSaWdodCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwic2hpZnRlZCBmaWxtc3RyaXAgcmlnaHRcIilcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udGFpbmVyXCI+XHJcblx0XHRcdFx0eyBzbGlkZXMgPyB0aGlzLm1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykgOiBudWxsIH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1zcnRcIj5maWxtc3RyaXAgbGVmdDwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgb25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBMZWZ0KCl9ID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIHJpZ2h0PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgb25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBSaWdodCgpfSA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiIGlkPVwiZmlsbXN0cmlwX19zZWxlY3Rvci1jZWxsXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsbXN0cmlwOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIkZvb3RlciBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVycyh0aGlzLnByb3BzLmZvb3Rlci5zb2NpYWxNZWRpYUxpbmtzKTtcclxuXHR9XHJcblxyXG5cdC8vY2hlY2sgdG8gc2VlIGlmIHRoZXNlIGNhbiBiZSBhZGRlZCBkaXJlY3RseSBpbmxpbmUgZHVyaW5nIHRoZSBpbml0aWFsIG1hcHBpbmcgb2YgdGhlIFNvY2lhbCBNZWRpYWwgTGlua3MgaW4gdGhlIEpTWFxyXG5cdGFkZExpc3RlbmVycyhzb2NpYWxNZWRpYUxpbmtzSW5mbykge1xyXG5cdFx0c29jaWFsTWVkaWFMaW5rc0luZm8uZm9yRWFjaCggKHsgZm9udF9jb2xvciwgbmFtZSwgYmdfY29sb3IxLCBiZ19jb2xvcjIgfSkgPT4ge1xyXG5cdFx0XHQkKGAjJHtuYW1lfS1ob3Zlci1ib3hgKS5ob3ZlcigoKSA9PiB0aGlzLmhvdmVyT24oYCMke25hbWV9LXNvY2lhbGAsIGZvbnRfY29sb3IsIGJnX2NvbG9yMSwgYmdfY29sb3IyKSwgKCkgPT4gdGhpcy5ob3Zlck9mZihgIyR7bmFtZX0tc29jaWFsYCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRob3Zlck9uKGlkLCBmb250X2NvbG9yLCBiZ19jb2xvcjEsIGJnX2NvbG9yMikge1xyXG5cdFx0JChpZCkuY3NzKCdjb2xvcicsIGZvbnRfY29sb3IpO1xyXG5cdFx0JChpZCkuY3NzKCdiYWNrZ3JvdW5kJywgYGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHtiZ19jb2xvcjF9LCAke2JnX2NvbG9yMn0pYCk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluay0taG92ZXInKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rJyk7XHJcblx0fVxyXG5cclxuXHRob3Zlck9mZihpZCkge1xyXG5cdFx0JChpZCkuY3NzKCdjb2xvcicsICd3aGl0ZScpO1xyXG5cdFx0JChpZCkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApKScpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmsnKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rLS1ob3ZlcicpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2JvZHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3RcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+QXJ0aXN0PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hcnRpc3RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdERhdmlkIEJva2VoIGZvdW5kZXIgb2YgQm9rZWggQmVzdCBQaG90b2dyYXBoeSwgSXMgYW4gYXdhcmQgd2lubmluZyBwaG90b2dyYXBoZXIgd2l0aCBvdmVyIDggeWVhcnMgb2YgZXhwZXJpZW5jZS4gTGVhcm4gbW9yZSBhYm91dCBEYXZpZCBhbmQgQm9rZWggQmVzdCBQaG90b2dyYXBoeSBcclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGlkPVwiZm9vdGVyX19hcnRpc3QtbGlua1wiIGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0LWxpbmtcIiB0bz1cIi9hYm91dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aT4gaGVyZS4gPC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJmb290ZXJfX2hlYWRlclwiPkJva2VoIEJlc3QgUGhvdG9ncmFwaHk8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzcy1jb250ZW50LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhZGRyZXNzIGNsYXNzTmFtZT1cImZvb3Rlcl9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4xMjMgV29vc3RlciBTdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+IE5ldyBZb3JrLCBOWSAxMDAxMjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6MS0yMTItNTU1LTU1NTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4oMjEyKSA1NTUtNTU1NTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fdGV4dC1hZGRyZXNzXCI+PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWxcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+U29jaWFsIE1lZGlhPC9oND5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyLnNvY2lhbE1lZGlhTGlua3MubWFwKCh7IG5hbWUsIGxpbmsgLCBpY29ufSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YCR7bmFtZX0tc29jaWFsYH0gaWQ9e2Ake25hbWV9LWhvdmVyLWJveGB9IGNsYXNzTmFtZT0nZm9vdGVyX19zb2NpYWwtaG92ZXItYm94Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWwtc3J0XCI+e25hbWV9PC9iPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgJHtpY29ufSBmb290ZXJfX3NvY2lhbC1saW5rYH0gaWQ9e2Ake25hbWV9LXNvY2lhbGB9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRpdGxlPXtuYW1lfT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2Jhc2VcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fYmFzZS10ZXh0XCI+JmNvcHk7IEJva2VoIEJlc3QgUGhvdG9ncmFwaHkgLSBOZXcgWW9yaywgTlk8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRmb290ZXI6IHN0YXRlLmZvb3RlclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMpKEZvb3Rlcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGdhbGxlcnlBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5X2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBwcm9qZWN0b3JBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9wcm9qZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBHYWxsZXJ5U2VsZWN0b3IgZnJvbSAnLi9HYWxsZXJ5U2VsZWN0b3InO1xyXG5pbXBvcnQgUHJvamVjdG9yIGZyb20gJy4vUHJvamVjdG9yJztcclxuXHJcbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbiBtb3VudCBHYWxsZXJ5IHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdGNvbnNvbGUubG9nKCk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9uIHVwZGF0ZSBHYWxsZXJ5IHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5jbG9zZUdhbGxlcnkoKTtcclxuXHR9XHJcblxyXG5cclxuXHRjbG9zZUdhbGxlcnkoKSB7XHJcblx0XHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpKXtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXNcIik7XHJcblx0XHR9XHJcblx0XHRpZigkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHR9XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGxldCBzbGlkZXMgPSB0aGlzLnByb3BzLmdhbGxlcnkuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBpZD1cIm1haW5cIj5cclxuXHRcdFx0XHQ8R2FsbGVyeVNlbGVjdG9yIGNob29zZV9nYWxsZXJ5PXsgdGhpcy5wcm9wcy5hY3Rpb25zLmNob29zZV9nYWxsZXJ5IH0gdW5sb2FkX3NsaWRlcz17IHRoaXMucHJvcHMuYWN0aW9ucy51bmxvYWRfc2xpZGVzIH0vPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhbGxlcnlfX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZSBHYWxsZXJ5XCIgb25DbGljaz17ICgpID0+IHRoaXMuY2xvc2VHYWxsZXJ5KCkgfT5cclxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJnYWxsZXJ5X19jbG9zZS1zcnRcIj5DbG9zZSBHYWxsZXJ5PC9iPlxyXG5cdFx0XHRcdFhcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIgaWQ9XCJnYWxsZXJ5X19pbWFnZXNcIj5cclxuXHRcdFx0XHRcdDxQcm9qZWN0b3Igc3R5bGVGb3I9e1wiZ2FsbGVyeVwifSBzbGlkZXM9e3NsaWRlc30vPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRjb25zdCB7IGdhbGxlcnksIHByb2plY3RvciB9ID0gc3RhdGU7XHJcblx0cmV0dXJuIHsgXHJcblx0XHRnYWxsZXJ5LCBcclxuXHRcdHByb2plY3RvciBcclxuXHR9OyBcclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcbiBcdFx0YWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKE9iamVjdC5hc3NpZ24oe30sIGdhbGxlcnlBY3Rpb25zLCBwcm9qZWN0b3JBY3Rpb25zKSwgZGlzcGF0Y2gpXHJcblx0fTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnkpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9nYWxsZXJ5U2VsZWN0b3JfYWN0aW9ucyc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG4vL2pRdWVyeSBpbXBvcnRcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5nYWxsZXJ5U2VsZWN0b3JMb2FkKCk7XHJcblx0XHR0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0dhbGxlcnlTZWxlY3RvciBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5nYWxsZXJ5U2VsZWN0b3IudGltZXIpO1xyXG5cdFx0dGhpcy5nYWxsZXJ5U2VsZWN0b3JSZXNldCgpO1xyXG5cdH1cclxuXHJcblx0Ly9zYXZlIHRpbWVyIHRvIHN0YXRlIHRvIGNsZWFyIG9uIHVubW91bnQgc28gdGhhdCB0aGUgdGltZXIgaXMgY2xlYXJlZCBldmVuIGlmIHBhZ2UgaXMgdW5tb3VudGVkIG1pZCBsb2FkXHJcblx0Z2FsbGVyeVNlbGVjdG9yTG9hZCgpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRsZXQgY291bnRlciA9IDA7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG5cdFx0XHQkKGdhbGxlcnlTZWxlY3Rvcklkc1tjb3VudGVyXS5jb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJyk7XHJcblx0XHRcdCQoZ2FsbGVyeVNlbGVjdG9ySWRzW2NvdW50ZXJdLmNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRjb3VudGVyKytcclxuXHRcdFx0aWYoY291bnRlciA+PSBnYWxsZXJ5U2VsZWN0b3JJZHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdH1cclxuXHRcdH0sIDUwMCk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3RpbWVyKHRpbWVyKTtcclxuXHR9XHJcblxyXG5cdGdhbGxlcnlTZWxlY3RvclJlc2V0KCkge1xyXG5cdFx0bGV0IGdhbGxlcnlTZWxlY3RvcklkcyA9IFtcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fNFwifVxyXG5cdFx0XTtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcklkcy5mb3JFYWNoKCAoeyBjb250YWluZXJJZCB9KSA9PiB7XHJcblx0XHRcdGlmKCQoY29udGFpbmVySWQpLmhhc0NsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpKSB7XHJcblx0XHRcdFx0JChjb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXInKTtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcklkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHQvL3B1dCBsaXN0ZW5lcnMgZGlyZWN0bHkgb24gdG8gdGhlIGh0bWwgdGFnc1xyXG5cdGFkZExpc3RlbmVycygpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIiwgZ2FsbGVyeU5hbWU6IFwiYWN0aW9uXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwiLCBnYWxsZXJ5TmFtZTogXCJldmVudHNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18zXCIsIGdhbGxlcnlOYW1lOiBcImxhbmRzY2FwZVwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIiwgZ2FsbGVyeU5hbWU6IFwicG9ydHJhaXRcIn1cclxuXHRcdF07XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3JJZHMuZm9yRWFjaCggKHsgY29udGFpbmVySWQsIGdhbGxlcnlTZWxlY3RvcklkLCBnYWxsZXJ5TmFtZSB9KSA9PiB7XHJcblx0XHRcdCQoY29udGFpbmVySWQpLmhvdmVyKCgpID0+IHRoaXMuaG92ZXJJbihnYWxsZXJ5U2VsZWN0b3JJZCksICgpID0+IHRoaXMuaG92ZXJPdXQoZ2FsbGVyeVNlbGVjdG9ySWQpKTtcclxuXHRcdFx0JChjb250YWluZXJJZCkuY2xpY2soKCkgPT4gdGhpcy5nb1RvR2FsbGVyeShnYWxsZXJ5TmFtZSkpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRnb1RvR2FsbGVyeShnYWxsZXJ5KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImNsaWNrZWQgZ29Ub0dhbGxlcnkgb24gXCIrIGdhbGxlcnkpO1xyXG5cdFx0dGhpcy5wcm9wcy51bmxvYWRfc2xpZGVzKCk7XHJcblx0XHR0aGlzLnByb3BzLmNob29zZV9nYWxsZXJ5KGdhbGxlcnkpO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLm9wZW5HYWxsZXJ5KCk7IH0sIDUwKTtcclxuXHR9XHJcblxyXG5cdG9wZW5HYWxsZXJ5KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIG9wZW4gdGhlIGdhbGxlcnlcIik7XHJcblx0XHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluXCIpKXtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHRcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeV9faW1hZ2VzXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeV9faW1hZ2VzXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlcy1jbG9zZWRcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBjbG9zZUdhbGxlcnkoKSB7XHJcblx0Ly8gXHRpZigkKFwiI21haW5cIikuaGFzQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpKXtcclxuXHQvLyBcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpblwiKTtcclxuXHQvLyBcdFx0JChcIiNtYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKTtcclxuXHQvLyBcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdC8vIFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXItLW9wZW5cIik7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cclxuXHJcblx0aG92ZXJJbihpZCkge1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLXNsaWRlLWluJyk7XHJcblx0fVxyXG5cclxuXHJcblx0aG92ZXJPdXQoaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLXNsaWRlLWluJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1ob3ZlcicpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgQWN0aW9uIEdhbGxlcnlcIj5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMVwiPlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgPHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+QWN0aW9uPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIEV2ZW50cyBHYWxsZXJ5XCI+XHJcblx0XHRcdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzJcIj5cclxuXHRcdFx0ICAgIFx0PC9kaXY+XHJcblx0XHRcdCAgICBcdDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkV2ZW50czwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBMYW5kc2NhcGUgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5MYW5kc2NhcGU8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgUG9ydHJhaXQgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX180XCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5Qb3J0YWl0PC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnlTZWxlY3Rvcjogc3RhdGUuZ2FsbGVyeVNlbGVjdG9yXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoR2FsbGVyeVNlbGVjdG9yKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMnO1xyXG5cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRtb2JpbGVNZW51OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuaGFuZGxlTWVudUNsaWNrID0gdGhpcy5oYW5kbGVNZW51Q2xpY2suYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnaGVhZGVyIHByb3BzIGFyZSAnLCB0aGlzLnByb3BzKTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG5cdFx0aWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gdHJ1ZSl7XHJcblx0XHRcdHRoaXMudG9nZ2xlTW9iaWxlTWVudU91dCgpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZU1lbnVDbGljaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdtb2JpbGVNZW51IGNsaWNrZWQnKTtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYodGhpcy5wcm9wcy5oZWFkZXIubW9iaWxlTWVudSA9PT0gZmFsc2Upe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVJbigpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm1vYmlsZV9oZWFkZXJfc3RhdHVzKHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlTW9iaWxlTWVudUluKCkge1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlTW9iaWxlTWVudU91dCgpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2Jyk7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdi0tc2xpZGUtaW4nKTtcclxuXHR9XHJcbiBcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCIgb25Nb3VzZUxlYXZlPXsoKT0+IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSgpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBpZD1cImhlYWRlcl9fYnJhbmQtbGlua1wiIGV4YWN0IHRvPVwiL1wiIHRpdGxlPVwiQm9rZWggUGhvdG9ncmFwaHkgSW5jLlwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbG9nb1wiIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9sb2dvcy9zaXRlLWxvZ28yLnN2Z1wiKX0gYWx0PVwiQm9rZWggUGhvdG9ncmFwaHkgSW5jLiBsb2dvXCIgLz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1uYW1lXCI+Qm9rZWggUGhvdG9ncmFwaHk8L3A+XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1tZW51LWljb24gZmFzIGZhLWJhcnNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU1lbnVDbGljaygpfT48L2k+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGluay1saXN0XCI+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmhlYWRlci5saW5rSW5mby5tYXAoKHsga2V5LCBwYXRoLCBuYW1lIH0pID0+IDxsaSBrZXk9e2tleX0+IDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0PG5hdiBpZD1cImhlYWRlcl9fbW9iaWxlLW5hdlwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLW5hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbW9iaWxlLWxpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtgbW9iaWxlLSR7a2V5fWB9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rc1wiIGV4YWN0IHRvPXtwYXRofT57bmFtZX08L05hdkxpbms+PC9saT4pfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IGhlYWRlcjogc3RhdGUuaGVhZGVyIH0gfVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4geyByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcywgbnVsbCwge3B1cmU6ZmFsc2V9KShIZWFkZXIpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL0NpcmNsZVR5cGUgaW1wb3J0XHJcbmltcG9ydCBDaXJjbGVUeXBlIGZyb20gJ2NpcmNsZXR5cGUnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hvbWVfYWN0aW9ucyc7XHJcblxyXG4vL0RhdGEgaW1wb3J0c1xyXG5pbXBvcnQgaG9tZVNsaWRlcyBmcm9tICcuL2RhdGEvaG9tZVNsaWRlcyc7XHJcblxyXG4vL2pRdWVyeSBpbXBvcnRcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy51cGRhdGVXaW5kb3dXaWR0aCA9IHRoaXMudXBkYXRlV2luZG93V2lkdGguYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zbGlkZVNob3coKTtcclxuXHRcdHRoaXMudG9nZ2xlSG9tZU1vZGlmaWVyT24oKTtcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGgoKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdG5ldyBDaXJjbGVUeXBlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lX193ZWxjb21lLXRleHQnKSkucmFkaXVzKDYwMCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IGNvbnNvbGUubG9nKCdIb21lIHByb3BzIGFyZTogJyx0aGlzLnByb3BzKTsgfSwgMTUwMCApO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlVubW91bnRlZCBDb21wb25lbnRcIik7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9mZigpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93V2lkdGgpO1xyXG5cdFx0dGhpcy5zdG9wU2xpZGVTaG93KCk7XHJcblx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9uKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0taG9tZScpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlSG9tZU1vZGlmaWVyT2ZmKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbicpO1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0taG9tZScpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2luZG93V2lkdGgoKSB7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0fVxyXG5cclxuXHJcblx0c2xpZGVTaG93KCkge1xyXG5cdFx0bGV0IHsgaW50ZXJ2YWxUaW1lciB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybCgke2hvbWVTbGlkZXNbMF0uaW1nU3JjfSlgKTtcclxuXHRcdC8vYWRkIGZsYXNoLWluIGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTtcclxuXHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3hcIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdGxldCBjb3VudCA9IDFcclxuXHRcdGNvbnNvbGUubG9nKCdzbGlkZXNob3cgc3RhcnRpbmcnKTtcclxuXHRcdGxldCB0aW1lciA9IHNldEludGVydmFsKCAoKT0+IHtcclxuXHRcdFx0aWYoY291bnQgPT0gaG9tZVNsaWRlcy5sZW5ndGgpe1xyXG5cdFx0XHRcdGNvdW50ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaW1hZ2UgPSBob21lU2xpZGVzW2NvdW50XS5pbWdTcmM7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMuaG9tZS5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdFx0Y291bnQrK1xyXG5cdFx0XHRcdC8vYWRkIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGZsYXNoLWluIGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHRcdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXItLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vYWRkIGZsYXNoLWluIGNsYXNzIGFnYWluIHNvIHRoYXQgdGhlIGVmZmVjdCBzdGFydHMgb3ZlclxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94LS1mbGFzaC1pblwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly9yZW1vdmUgaG9tZV9fZmlsdGVyLWJveCBjbGFzc1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpOyB9LCA1KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7IH0sIDUpO1xyXG5cdFx0XHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtpbWFnZX0pYCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NvdW50KysgcGF1c2UgaXM6ICcsIHRoaXMucHJvcHMuaG9tZS5wYXVzZVNsaWRlU2hvdyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY291bnQgPSB0aGlzLmNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoY291bnQpO1xyXG5cdFx0XHR0aGlzLmNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoKTtcclxuXHRcdH0sIDg1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcih0aW1lcik7XHJcblx0XHRjb25zb2xlLmxvZygnc3RvcmVkIGludGVydmFsVGltZXIgaXMgJytpbnRlcnZhbFRpbWVyKTtcclxuXHR9XHJcblxyXG5cclxuXHRjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCkge1xyXG5cdFx0bGV0IHsgd2luZG93V2lkdGgsIHBhdXNlU2xpZGVTaG93IH0gPSB0aGlzLnByb3BzLmhvbWU7XHJcblx0XHRpZih3aW5kb3dXaWR0aCA8IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlU2xpZGVTaG93Q2hlY2sgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYod2luZG93V2lkdGggPj0gNTc2KXtcclxuXHRcdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlU2xpZGVTaG93Q2hlY2sgd2luZG93IGJpZyBlbm91Z2ggc3RhcnRlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblxyXG5cdC8vIGNoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUoY291bnQpIHtcclxuXHQvLyBcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdC8vIFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygnY2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSB3aW5kb3cgdG9vIHNtYWxsIHN0b3BwZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudFxyXG5cdC8vIFx0fVxyXG5cdC8vIFx0aWYod2luZG93V2lkdGggPj0gNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IGJpZyBlbm91Z2ggc3RhcnRlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHQvLyBcdFx0cmV0dXJuIGNvdW50Kz0xXHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cclxuXHJcblx0c3RvcFNsaWRlU2hvdygpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdjbGVhcmluZyBpbnRlcnZhbFRpbWVyICcrdGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnByb3BzLmhvbWUuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiID5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiaG9tZV9fZmlsdGVyLWJveFwiIGNsYXNzTmFtZT1cImhvbWVfX2ZpbHRlci1ib3hcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWVcIj5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dFwiIGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWUtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRCb2tlaCBCZXN0IFBob3RvZ3JhcGh5XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGgxIGlkPVwiaG9tZV9fd2VsY29tZS10ZXh0LW1vYmlsZVwiIGNsYXNzTmFtZT1cImhvbWVfX3dlbGNvbWUtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRCb2tlaCBCZXN0IFBob3RvZ3JhcGh5XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aG9tZTogc3RhdGUuaG9tZVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGlkPXtwcm9wcy5sb2FkZXJJZH0gY2xhc3NOYW1lPVwibG9hZGVyX19jb250YWluZXJcIj5cclxuXHRcdFx0PGltZyBpZD1cImxvZ28tbG9hZGVyMVwiIGNsYXNzTmFtZT1cImxvYWRlcl9fbG9nb1wiIHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2xvZ29zL2xvZ28tbG9hZGVyMS5zdmcnKX0+PC9pbWc+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjJcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjIuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vL1JlYWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcclxuaW1wb3J0IEZpbG1zdHJpcCBmcm9tICcuL0ZpbG1zdHJpcCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydFxyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgUHJvamVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmRvd25BcnJvd1Zpc2liaWxpdHkoKTtcclxuXHRcdHRoaXMucHJvcHMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KGZhbHNlKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkUHJvamVjdG9yKCk7XHJcblx0XHR9LDUwKTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dGhpcy5hdXRvUnVuUHJvamVjdG9yKCk7XHJcblx0XHR9LDEwMCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwiUHJvamVjdG9yIHByb3BzIGFyZSBcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbiB1cGRhdGUgUHJvamVjdG9yIHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5wcm9qZWN0b3IuaW50ZXJ2YWxUaW1lcik7XHJcblx0XHR0aGlzLnByb3BzLnNob3dfZmlsbXN0cmlwKGZhbHNlKTtcclxuXHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNmaWxtc3RyaXBfY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0bmV4dFNsaWRlKCkge1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlTm8sIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLnByb3BzLmluY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgc2xpZGVzLmxlbmd0aCk7XHJcblx0XHQvL2RlbGF5ZWQgc28gdGhhdCByZWR1eCBoYXMgdGltZSB0byB1cGRhdGUgc3RvcmUgZnJvbSBpbmNyZW1lbnRfc2xpZGUoKVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRwcmV2aW91c1NsaWRlKCkge1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlTm8sIHNsaWRlcyB9ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3I7XHJcblx0XHR0aGlzLnByb3BzLmRlY3JlbWVudF9zbGlkZShjdXJyZW50U2xpZGVObywgc2xpZGVzLmxlbmd0aCk7XHJcblx0XHQvL2RlbGF5ZWQgc28gdGhhdCByZWR1eCBoYXMgdGltZSB0byB1cGRhdGUgc3RvcmUgZnJvbSBkZWNyZW1lbnRfc2xpZGUoKVxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyB0aGlzLnVwZGF0ZVNsaWRlU2hvdygpIH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHR1cGRhdGVTbGlkZVNob3coKSB7XHJcblx0XHRsZXQgeyBzbGlkZXMsIGN1cnJlbnRTbGlkZU5vIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMuZmlsbXN0cmlwT3ZlcmxheVNoaWZ0ZXIoKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKHNsaWRlc1tjdXJyZW50U2xpZGVOb10pO1xyXG5cdH1cclxuXHJcblxyXG5cdGxvYWRQcm9qZWN0b3IoKSB7XHJcblx0XHR0aGlzLnByb3BzLmxvYWRfbmV3X3NsaWRlcyh0aGlzLnByb3BzLnNsaWRlcyk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLnVwZGF0ZVNsaWRlU2hvdygpOyBcclxuXHRcdH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRhdXRvUnVuUHJvamVjdG9yKCkge1xyXG5cdFx0bGV0IGludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcyA9PT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0XHR0aGlzLmxvYWRQcm9qZWN0b3IoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnByb3BzLnByb2plY3Rvci5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdFx0dGhpcy5uZXh0U2xpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSw2NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0cGF1c2VCdXR0b25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3c7XHJcblx0XHRpZihwYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGRvd25BcnJvd1Zpc2liaWxpdHkoKSB7XHJcblx0XHQvL2lmIGNvbnRhaW5lciBob3VzaW5nIHRoZSBwcm9qZWN0b3IgaXMgdG9vIHNtYWxsIGRvbid0IGdpdmUgdGhlIG9wdGlvbiB0byBicmluZyB1cCB0aGUgcGhvdG8gc3RyaXBcclxuXHRcdGxldCBwcm9qZWN0b3JCb3hXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGlmKHByb2plY3RvckJveFdpZHRoIDwgNzUwKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1TdHJpcEhhbmRsZXIoKSB7XHJcblx0XHRsZXQgY2FsY3VsYXRlZFdpZHRoID0gdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzLmxlbmd0aCoyMDArXCJweFwiO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcCghdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2hvd0ZpbG1zdHJpcCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7ICQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnd2lkdGgnLCBjYWxjdWxhdGVkV2lkdGgpIH0sIDI1KTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXJcIik7XHJcblx0fVxyXG5cclxuXHJcblx0c2hpZnRQcm9qZWN0b3JDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG5vdCBvbiBiZWZvcmUgdG9nZ2xpbmdcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKTtcclxuXHRcdFx0XHQvL0lmIGNvbnRyb2wtZG93biBpcyBpbiB1c2UgYnkgdGhlIGZpbG1zdHJpcCBsZWF2ZSBpdCBhbG9uZVxyXG5cdFx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dW5zaGlmdFByb2plY3RvckNvbnRyb2xzKCkge1xyXG5cdFx0Ly9tYWtlIHN1cmUgbW9kaWZpZWQgY2xhc3MgaXMgb24gYmVmb3JlIHRvZ2dsaW5nIGl0IG9mZlxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXBhdXNlLS1zaGlmdFwiKTtcclxuXHRcdFx0Ly9JZiBjb250cm9sLWRvd24gaXMgaW4gdXNlIGJ5IHRoZSBmaWxtc3RyaXAgbGVhdmUgaXQgYWxvbmVcclxuXHRcdFx0aWYoISQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpKXtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1zdHJpcE92ZXJsYXlTaGlmdGVyKCkge1xyXG5cdFx0bGV0IGN1cnJlbnRTbGlkZU5vID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IuY3VycmVudFNsaWRlTm87XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fc2VsZWN0b3ItY2VsbFwiKS5jc3MoJ2xlZnQnLCBjdXJyZW50U2xpZGVObyoyMDApO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IHsgY3VycmVudFNsaWRlSW5mbywgc2hvd0ZpbG1zdHJpcCwgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD1cInByb2plY3RvclwiIGNsYXNzTmFtZT1cInByb2plY3RvclwiIG9uTW91c2VFbnRlcj17ICgpID0+IHRoaXMuc2hpZnRQcm9qZWN0b3JDb250cm9scygpfSBvbk1vdXNlTGVhdmU9eyAoKSA9PiB0aGlzLnVuc2hpZnRQcm9qZWN0b3JDb250cm9scygpfT5cclxuXHRcdFx0XHR7Y3VycmVudFNsaWRlSW5mbyA/IFxyXG5cdFx0XHRcdFx0PFNsaWRlIHBob3RvSW5mbz17Y3VycmVudFNsaWRlSW5mb30gXHJcblx0XHRcdFx0XHRcdHN0eWxlRm9yPXt0aGlzLnByb3BzLnN0eWxlRm9yfSBcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHtzbGlkZXMgP1xyXG5cdFx0XHRcdFx0PEZpbG1zdHJpcCBzbGlkZXM9e3NsaWRlc30vPlxyXG5cdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0bnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1sZWZ0XCIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5sZWZ0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByZXZpb3VzU2xpZGUoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5yaWdodCBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIG9uQ2xpY2s9eygpID0+IHRoaXMubmV4dFNsaWRlKCl9ID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWRvd25cIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPmRvd24gYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtZG93blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsbVN0cmlwSGFuZGxlcigpfT48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXBhdXNlXCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+cGF1c2UgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGF1c2UtY2lyY2xlXCIgb25DbGljaz17KCkgPT4gdGhpcy5wYXVzZUJ1dHRvbkhhbmRsZXIoKX0+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7IHJldHVybiB7IHByb2plY3Rvcjogc3RhdGUucHJvamVjdG9yfSB9XHJcblxyXG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7IHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShQcm9qZWN0b3IpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWN0IENvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5cclxuXHJcbmNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5zZXRTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5yZW1vdmVTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cdHNldFN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHN0eWxlRm9yID0gdGhpcy5wcm9wcy5zdHlsZUZvcjtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIGZyYW1lXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lLS0ke3N0eWxlRm9yfWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgcGhvdG9cclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG8tLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTdHlsZXMoKSB7XHJcblx0XHRsZXQgeyBuYW1lIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdGxldCB7IHN0eWxlRm9yIH0gPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWVgKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90b2ApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlTG9hZGVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VFcnJvcmVkKCkge1xyXG5cdFx0JChcIiNzbGlkZV9fbG9hZGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCB7IG5hbWUsIGltYWdlIH0gPSB0aGlzLnByb3BzLnBob3RvSW5mbztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBpZD17YCR7bmFtZX0tc2xpZGVfX2ZyYW1lYH0gY2xhc3NOYW1lPVwic2xpZGVfX2ZyYW1lXCI+XHJcblx0XHRcdFx0PGltZyBpZD17YCR7bmFtZX0tc2xpZGVfX3Bob3RvYH0gY2xhc3NOYW1lPVwic2xpZGVfX3Bob3RvXCIgXHJcblx0XHRcdFx0XHRzcmM9e2ltYWdlfSAgXHJcblx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlSW1hZ2VMb2FkZWQuYmluZCh0aGlzKX0gXHJcblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2ltZz5cclxuXHRcdFx0XHQ8TG9hZGVyIGxvYWRlcklkPXtcInNsaWRlX19sb2FkZXJcIn0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PHA+TXkgTG9hZGVyIGlzbid0IGl0IGdyZWF0PzwvcD5cclxuXHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiLCJleHBvcnQgZnVuY3Rpb24gYWRkX3Bob3RvKG5hbWUsIGltYWdlLCBjdXJyZW50U2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdBRERfUEhPVE8nLFxyXG5cdFx0Y3VycmVudFNsaWRlcyxcclxuXHRcdHBob3RvSW5mbzoge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9tZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX01FU1NBR0UnLFxyXG5cdFx0bWVzc2FnZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0X2NoZWNrKHJlZGlyZWN0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdSRURJUkVDVF9DSEVDSycsXHJcblx0XHRyZWRpcmVjdFxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV90aW1lcih0aW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0dGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcl90aW1lcigpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NMRUFSX1RJTUVSJyxcclxuXHRcdHRpbWVyOiBmYWxzZVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlX2dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hPT1NFX0dBTExFUlknLFxyXG5cdFx0Z2FsbGVyeVxyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtb2JpbGVfaGVhZGVyX3N0YXR1cyhtb2JpbGVNZW51KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdNT0JJTEVfSEVBREVSX1NUQVRVUycsXHJcblx0XHRtb2JpbGVNZW51XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV93aW5kb3dfd2lkdGgod2luZG93V2lkdGgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1dJTkRPV19XSURUSCcsXHJcblx0XHR3aW5kb3dXaWR0aFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX3NsaWRlX3Nob3cocGF1c2VTbGlkZVNob3cpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1BBVVNFX1NMSURFX1NIT1cnLFxyXG5cdFx0cGF1c2VTbGlkZVNob3dcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKGN1cnJlbnRTbGlkZUluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX0NVUlJFTlRfU0xJREVfSU5GTycsXHJcblx0XHRjdXJyZW50U2xpZGVJbmZvXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCB0b3RhbE5vU2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdJTkNSRU1FTlRfU0xJREUnLFxyXG5cdFx0Y3VycmVudFNsaWRlTm8sXHJcblx0XHR0b3RhbE5vU2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCB0b3RhbE5vU2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdERUNSRU1FTlRfU0xJREUnLFxyXG5cdFx0Y3VycmVudFNsaWRlTm8sXHJcblx0XHR0b3RhbE5vU2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKGludGVydmFsVGltZXIpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NUT1JFX1RJTUVSJyxcclxuXHRcdGludGVydmFsVGltZXJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkX25ld19zbGlkZXMoc2xpZGVzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0FEX05FV19TTElERVMnLFxyXG5cdFx0c2xpZGVzXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5sb2FkX3NsaWRlcygpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1VOTE9BRF9TTElERVMnLFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dfZmlsbXN0cmlwKHNob3dGaWxtc3RyaXApIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NIT1dfRklMTVNUUklQJyxcclxuXHRcdHNob3dGaWxtc3RyaXBcclxuXHR9XHJcbn0iLCJjb25zdCBnYWxsZXJ5U2xpZGVzID0ge1xyXG5cdGFjdGlvbjogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRheWxpZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImF0LXRoZS10cmFja1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2F0LXRoZS10cmFjay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1vdG9yY3Jvc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9tb3RvcmNyb3NzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwidWx0aW1hdGUtc2F2ZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzb2NjZXItbWF0Y2hcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zb2NjZXItbWF0Y2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJsZWFwLW9mLWZhaXRoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbGVhcC1vZi1mYWl0aC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhpZ2gtanVtcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2hpZ2gtanVtcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImtpY2stZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2tpY2stZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpZy13YXZlLXN1cmZpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iaWctd2F2ZS1zdXJmaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic2thdGUtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NrYXRlLXBhcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJza2lpbmdcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdWRkbGUtanVtcGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3B1ZGRsZS1qdW1waW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhY2gtYmFja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iZWFjaC1iYWNrZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1cmYtc3BsYXNoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc3VyZi1zcGxhc2guanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzY2hyb2RpbmdlcnMta2lja2ZsaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGV2ZW50czogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWRheS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyaWRlLWNsb3Vkc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWNsb3Vkcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoZGF5LWdpcmxcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aGRheS1naXJsLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiNHRoLWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicHJlZ25hbmN5LWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0aW5nLWNsYXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJpcnRoLWFubm91bmNlbWVudFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoLWFubm91bmNlbWVudC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInBhcnR5LWZyaWVuZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwid2VkZGluZy1kYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy93ZWRkaW5nLWRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImZpcnN0LWJpcnRoZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJncmFkdWF0ZS1jZWxlYnJhdGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRlLWNlbGVicmF0aW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGUtYW5kLWdyb29tXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtYW5kLWdyb29tLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRsYW5kc2NhcGU6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJhcmNoZXMtbmF0aW9uYWwtcGFya1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2FyY2hlcy1uYXRpb25hbC1wYXJrLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicm9va2x5bi1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9icm9va2x5bi1icmlkZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhbG0tY2xvdWRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvY2FsbS1jbG91ZHMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJvYXRob3VzZS1jb3R0YWdlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYm9hdGhvdXNlLWNvdHRhZ2UuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImRldmlscy1icmlkZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kZXZpbHMtYnJpZGdlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibGFrZS1wZWlyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbGFrZS1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBvcHBpZXNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcG9wcGllcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3Vuc2V0LXBpZXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcGllci5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInJpdmVyLXJlZmxlY3Rpb25cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZHVzay1pbi1hZnJpY2FcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm1hcnNoLXBlaXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tYXJzaC1wZWlyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibnljLXNreWxpbmVcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm5pZ2h0LWRvbHBoaW5zXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbmlnaHQtZG9scGhpbnMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJmbGF0aXJvbi1idWlsZGluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2ZsYXRpcm9uLWJ1aWxkaW5nLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibW91bnRhaW4tbGFrZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21vdW50YWluLWxha2UuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJueWMtc2t5bGluZTJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZTIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwdXJwbGUtZmxvd2Vyc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3B1cnBsZS1mbG93ZXJzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwb3J0cmFpdDogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJlYXV0aWZ1bC1ibHVyXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtYmx1ci5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhdXRpZnVsLWNhc3VhbFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWNhc3VhbC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxvbmRlLWNsb3NlLXVwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNhcm5pdmFsLW5pZ2h0XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGFwcHktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWd1eVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxhY2stYW5kLXdoaXRlLWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInlvdW5nLW1vbmtzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC95b3VuZy1tb25rcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJsb25kZS1jbG9zZS11cC1ib2tlaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2xvc2UtdXAtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC1ndXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoaWRpbmctd29tYW5cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hpZGluZy13b21hbi5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxhY2stYW5kLXdoaXRlLWNsb3NlLXVwLXdvbWFuXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJnaXJsLXJhYmJpdC1mcmllbmRzaGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicmVkLWhhaXJlZC1jaGlsZFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvcmVkLWhhaXJlZC1jaGlsZC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0LWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIndvbWFuLWRyZXNzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC93b21hbi1kcmVzcy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImNsb3NlLXVwLXdvbWFuLWJva2VoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC13b21hbi1ib2tlaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInN1aXQxXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnlTbGlkZXM7IiwiXHJcblxyXG5jb25zdCBob21lU2xpZGVzID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1hbmdsZS5qcGcnKSxcclxuXHRcdH0sXHRcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL3N0YXJ5LWxlbnMuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtY2xvc2UtdXAuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1vbi1ncm91bmQuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1saWdodHMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nU3JjOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpZGVzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzbGlkZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYmVhY2gtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZmllbGQtc2hvb3QnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2ZpZWxkLXNob290LmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2luLWFuZC1vdXQtb2YtZm9jdXMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2luLWFuZC1vdXQtb2YtZm9jdXMuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc21va2UtY2xvdWQnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL3Ntb2tlLWNsb3VkLmpwZWcnKVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2F0LWR1c2snLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2F0LWR1c2suanBlZycpXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdFx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1lc3NhZ2U6IFsnJywnJ10sXHJcblx0cmVkaXJlY3Q6IGZhbHNlXHJcblx0fTtcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX01FU1NBR0UnOlxyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGFjdGlvbi5tZXNzYWdlO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgbWVzc2FnZSB9XHJcblx0XHRjYXNlICdSRURJUkVDVF9DSEVDSyc6XHJcblx0XHRcdGxldCByZWRpcmVjdCA9IGFjdGlvbi5yZWRpcmVjdDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlZGlyZWN0IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNvY2lhbE1lZGlhTGlua3MgOiBbXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdG5hbWU6IFwiRmFjZUJvb2tcIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ib2tlaGJlc3RwaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjM0I1OTk4XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzI0NWFjZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkZsaWNrclwiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvZGF2aWRfYm9rZWgvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1mbGlja3JcIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiNGRTA4ODNcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjMTI4ZmRjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiSW5zdGFncmFtXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Jva2VoYmVzdHBob3RvZ3JhcGh5L1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjZjE3NTMwXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzdhMzhhYlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiBcIkxpbmtlZEluXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWRib2tlaC9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWxpbmtlZGluXCIsXHJcblx0XHRcdFx0XHRmb250X2NvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMTogXCIjMDA3N2I1XCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjI6IFwiIzU2YjllZVwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3Rlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAoJ1NFVF9GT09URVJfTElOS1MnKTpcclxuXHRcdFx0bGV0IGxpbmtzID0gYWN0aW9uLmxpbmtzO1xyXG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCBsaW5rc307XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXJfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfVElNRVInOlxyXG5cdFx0XHRsZXQgdGltZXIgPSBhY3Rpb24udGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aW1lciB9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfVElNRVInOlxyXG5cdFx0XHR0aW1lciA9IGFjdGlvbi50aW1lcjtcclxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgdGltZXJ9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnM7IiwiaW1wb3J0IGdhbGxlcnlTbGlkZXMgZnJvbSAnLi4vZGF0YS9nYWxsZXJ5U2xpZGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcblxyXG5mdW5jdGlvbiBhYm91dF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1BIT1RPJzpcclxuXHRcdFx0bGV0IHBob3RvSW5mbyA9IGFjdGlvbi5waG90b0luZm87XHJcblx0XHRcdGxldCBzbGlkZXMgPSBbIC4uLmFjdGlvbnMuY3VycmVudFNsaWRlcyBdO1xyXG5cdFx0XHRzbGlkZXMucHVzaChwaG90b0luZm8pO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGNhc2UgJ0NIT09TRV9HQUxMRVJZJzpcclxuXHRcdFx0bGV0IGdhbGxlcnkgPSBhY3Rpb24uZ2FsbGVyeTtcclxuXHRcdFx0c2xpZGVzID0gWyAuLi5nYWxsZXJ5U2xpZGVzW2dhbGxlcnldIF1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHNsaWRlcyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0X3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsaW5rSW5mbzogW1xyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWhvbWUnLCBcclxuXHRcdFx0cGF0aDogJy8nLCBcclxuXHRcdFx0bmFtZTogJ0hvbWUnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWdhbGxlcnknLCBcclxuXHRcdFx0cGF0aDogJy9nYWxsZXJ5JywgXHJcblx0XHRcdG5hbWU6ICdQaG90byBHYWxsZXJ5J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1hYm91dCcsIFxyXG5cdFx0XHRwYXRoOiAnL2Fib3V0JywgXHJcblx0XHRcdG5hbWU6ICdBYm91dCBCb2tlaCdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstY29udGFjdCcsIFxyXG5cdFx0XHRwYXRoOiAnL2NvbnRhY3QnLCBcclxuXHRcdFx0bmFtZTogJ0NvbnRhY3QgVXMnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLXRlc3QnLCBcclxuXHRcdFx0cGF0aDogJy90ZXN0JywgXHJcblx0XHRcdG5hbWU6ICdUZXN0IFBhZ2UnXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0bW9iaWxlTWVudTogZmFsc2UsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcl9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnTU9CSUxFX0hFQURFUl9TVEFUVVMnOlxyXG5cdFx0XHRsZXQgbW9iaWxlTWVudSA9IGFjdGlvbi5tb2JpbGVNZW51XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBtb2JpbGVNZW51IH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyX3JlZHVjZXJzOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRwYXVzZVNsaWRlU2hvdzogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob21lX3JlZHVjZXJzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ1NUT1JFX1dJTkRPV19XSURUSCc6XHJcblx0XHRcdGxldCB3aW5kb3dXaWR0aCA9IGFjdGlvbi53aW5kb3dXaWR0aDtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHdpbmRvd1dpZHRoIH07XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93O1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF1c2VTbGlkZVNob3cgfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGN1cnJlbnRTbGlkZU5vOiAwLFxyXG5cdHBhdXNlU2xpZGVTaG93OiBmYWxzZSxcclxuXHRzaG93RmlsbXN0cmlwOiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdG9yX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9DVVJSRU5UX1NMSURFX0lORk8nOlxyXG5cdFx0XHRsZXQgY3VycmVudFNsaWRlSW5mbyA9IGFjdGlvbi5jdXJyZW50U2xpZGVJbmZvO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlSW5mbyB9XHJcblx0XHRjYXNlICdJTkNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRsZXQgY3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdGxldCB0b3RhbE5vU2xpZGVzID0gYWN0aW9uLnRvdGFsTm9TbGlkZXM7XHJcblx0XHRcdGlmKGN1cnJlbnRTbGlkZU5vID09IHRvdGFsTm9TbGlkZXMgLSAxKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFNsaWRlTm8gfVxyXG5cdFx0Y2FzZSAnREVDUkVNRU5UX1NMSURFJzpcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSBhY3Rpb24uY3VycmVudFNsaWRlTm87XHJcblx0XHRcdHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gMCl7XHJcblx0XHRcdFx0Y3VycmVudFNsaWRlTm8gPSB0b3RhbE5vU2xpZGVzIC0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyAtPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdQQVVTRV9TTElERV9TSE9XJzpcclxuXHRcdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gYWN0aW9uLnBhdXNlU2xpZGVTaG93XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZVNsaWRlU2hvdyB9XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCBpbnRlcnZhbFRpbWVyID0gYWN0aW9uLmludGVydmFsVGltZXI7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBpbnRlcnZhbFRpbWVyIH07XHJcblx0XHRjYXNlICdMT0FEX05FV19TTElERVMnOlxyXG5cdFx0XHRsZXQgc2xpZGVzID0gYWN0aW9uLnNsaWRlcztcclxuXHRcdFx0Y3VycmVudFNsaWRlSW5mbyA9IHNsaWRlc1swXTtcclxuXHRcdFx0Y3VycmVudFNsaWRlTm8gPSAwIFxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzLCBjdXJyZW50U2xpZGVJbmZvLCAgY3VycmVudFNsaWRlTm99O1xyXG5cdFx0Y2FzZSAnVU5MT0FEX1NMSURFUyc6XHJcblx0XHRcdGxldCB0ZW1wU3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0XHRcdGRlbGV0ZSB0ZW1wU3RhdGVbJ2N1cnJlbnRTbGlkZUluZm8nXTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnc2xpZGVzJ107XHJcblx0XHRcdHJldHVybiB7IC4uLnRlbXBTdGF0ZSB9O1xyXG5cdFx0Y2FzZSAnU0hPV19GSUxNU1RSSVAnOlxyXG5cdFx0XHRsZXQgc2hvd0ZpbG1zdHJpcCA9IGFjdGlvbi5zaG93RmlsbXN0cmlwO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2hvd0ZpbG1zdHJpcCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5cdC8vIGN1cnJlbnRTbGlkZUluZm86IHtcclxuXHQvLyBcdG5hbWU6ICdhYm92ZS10aGUtY2xvdWRzJyxcclxuXHQvLyBcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHQvLyB9LFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdG9yX3JlZHVjZXJzOyIsIi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuL1Rlc3QnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiAnLycsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogSG9tZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9pbmRleC5odG1sJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Fib3V0JyxcclxuXHRcdGV4YWN0OiBmYWxzZSxcclxuXHRcdGNvbXBvbmVudDogQWJvdXRcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvY29udGFjdCcsXHJcblx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdGNvbXBvbmVudDogQ29udGFjdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0LzpzdGF0dXMnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2dhbGxlcnknLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBHYWxsZXJ5XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL3Rlc3QnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBUZXN0XHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGFib3V0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvYWJvdXRfcmVkdWNlcnMnO1xyXG5pbXBvcnQgY29udGFjdF9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZm9vdGVyX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZm9vdGVyX3JlZHVjZXJzJztcclxuaW1wb3J0IGdhbGxlcnlfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzJztcclxuaW1wb3J0IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlTZWxlY3Rvcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBoZWFkZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9oZWFkZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgaG9tZV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hvbWVfcmVkdWNlcnMnO1xyXG5pbXBvcnQgcHJvamVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvcHJvamVjdG9yX3JlZHVjZXJzJztcclxuXHJcblxyXG4vL0FkZCBhZGRpdGlvbmFsIHJlZHVjZXJzIGluIGhlcmUgdG8gYmUgY29tYmluZWQgaW50byBvbmUgcmVkdWNlclxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0YWJvdXQ6IGFib3V0X3JlZHVjZXJzLFxyXG5cdGNvbnRhY3Q6IGNvbnRhY3RfcmVkdWNlcnMsXHJcblx0Zm9vdGVyOiBmb290ZXJfcmVkdWNlcnMsXHJcblx0Z2FsbGVyeTogZ2FsbGVyeV9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5U2VsZWN0b3I6IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyxcclxuXHRoZWFkZXI6IGhlYWRlcl9yZWR1Y2VycyxcclxuXHRob21lOiBob21lX3JlZHVjZXJzLFxyXG5cdHByb2plY3RvcjogcHJvamVjdG9yX3JlZHVjZXJzLFxyXG59KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuXHRyb290UmVkdWNlcixcclxuXHQvLyBpZiByZWRleCBkZXZ0b29scyBleHRlbnNpb24gaXMgb24gdGhlIHdpbmRvdyBvYmplY3QgcnVuIHRoZSBkZXZ0b29scyBmdW5jdGlvblxyXG5cdF9faXNCcm93c2VyX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2lyY2xldHlwZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc3RhdGljLWd6aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
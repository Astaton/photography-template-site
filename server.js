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
				)
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
			if (!$("#projector__control-down").hasClass("projector__control-down")) {
				$("#projector__control-down").toggleClass("projector__control-down--shift");
				$("#projector__control-down").toggleClass("projector__control-down--filmstrip-shift");
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
		key: 'shiftControls',
		value: function shiftControls() {
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
		key: 'unshiftControls',
		value: function unshiftControls() {
			//make sure modified class is on before toggling it off
			if ($("#projector__control-left").hasClass("projector__control-left--shift")) {
				$("#projector__control-left").toggleClass("projector__control-left");
				$("#projector__control-left").toggleClass("projector__control-left--shift");
				$("#projector__control-right").toggleClass("projector__control-right");
				$("#projector__control-right").toggleClass("projector__control-right--shift");
				$("#projector__control-down").toggleClass("projector__control-down");
				$("#projector__control-down").toggleClass("projector__control-down--shift");
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
						return _this7.shiftControls();
					}, onMouseLeave: function onMouseLeave() {
						return _this7.unshiftControls();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXBldHVyZS1yZWZsZWN0aW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2F0LXdvcmsuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9zdGFyeS1sZW5zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vZGF5bGlnaHQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2xlYXAtb2YtZmFpdGguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9wdWRkbGUtanVtcGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zY2hyb2RpbmdlcnMta2lja2ZsaXAuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9za2lpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc29jY2VyLW1hdGNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3VsdGltYXRlLXNhdmUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvNHRoLWJpcnRoZGF5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aC1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGhkYXktZ2lybC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGluZy1jbGFzcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1mcmllbmRzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3ByZWduYW5jeS1hbm5vdW5jZW1lbnQuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2NhbG0tY2xvdWRzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZGV2aWxzLWJyaWRnZS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9mbGF0aXJvbi1idWlsZGluZy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9tb3VudGFpbi1sYWtlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL25pZ2h0LWRvbHBoaW5zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9wdXJwbGUtZmxvd2Vycy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hdC1kdXNrLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2JlYWNoLXNob290LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9zbW9rZS1jbG91ZC5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW4uanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLWJva2VoLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmxvbmRlLWNsb3NlLXVwLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtZ3V5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvY2xvc2UtdXAtd29tYW4tYm9rZWguanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGFwcHktZ2lybC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvc3VpdC1ndXkuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9zdWl0MS5qcGVnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQveW91bmctbW9ua3MuanBlZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIxLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbG9nb3MvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xvZ29zL3NpdGUtbG9nbzIuc3ZnIiwid2VicGFjazovLy8uL29hdXRoL2NsaWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRmlsbXN0cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0dhbGxlcnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Qcm9qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2Fib3V0X2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NvbnRhY3RfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvaGVhZGVyX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2hvbWVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FjdGlvbnMvcHJvamVjdG9yX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2dhbGxlcnlTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9kYXRhL2hvbWVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvbnRhY3RfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5U2VsZWN0b3JfcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9nYWxsZXJ5X3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaGVhZGVyX3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3Byb2plY3Rvcl9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2lyY2xldHlwZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXN0YXRpYy1nemlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiY2xpZW50IiwidXNlciIsImlkIiwic2VjcmV0IiwicmVmcmVzaFRva2VuIiwiYWNlc3NUb2tlbiIsInVzZXJFbWFpbCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGVzdCIsInVybCIsIm1hcmt1cCIsInN0b3JlIiwic2VuZCIsInJlcXVpcmUiLCJwb3N0IiwidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJhdXRoIiwidHlwZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW4iLCJtYWlsT3B0aW9ucyIsImZyb20iLCJib2R5IiwibmFtZSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJudW1iZXIiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJsaXN0ZW4iLCJhYm91dEFjdGlvbnMiLCJwcm9qZWN0b3JBY3Rpb25zIiwiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlQWJvdXRNb2RpZmllck9uIiwidG9nZ2xlQWJvdXRNb2RpZmllck9mZiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNsaWRlcyIsImFib3V0IiwiQ29tcG9uZW50Iiwic3RhdGVUb1Byb3BzIiwicHJvamVjdG9yIiwiZGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BhdGNoIiwiQXBwIiwicm91dGVzIiwibWFwIiwicGF0aCIsImV4YWN0IiwiQyIsImNvbXBvbmVudCIsInJlc3QiLCJhY3Rpb25DcmVhdG9ycyIsIkNvbnRhY3QiLCJjb25maXJtTWVzc2FnZUJveCIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb250YWN0TW9kaWZpZXJPbiIsInRvZ2dsZUxvYWRlclN0eWxlcyIsInJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSIsInRvZ2dsZUNvbnRhY3RNb2RpZmllck9mZiIsInJlZGlyZWN0X2NoZWNrIiwibWF0Y2giLCJwYXJhbXMiLCJzdGF0dXMiLCJzdG9yZV9tZXNzYWdlIiwiY29udGFjdCIsImhhc0NsYXNzIiwiQ29udGFjdEZvcm0iLCJGaWxtc3RyaXAiLCJjc3MiLCJtYXBwZWRTbGlkZXMiLCJpbWFnZSIsImhhbmRsZUltYWdlTG9hZGVkIiwiYmluZCIsImhhbmRsZUltYWdlRXJyb3JlZCIsIm1hcFNsaWRlc1RvRmlsbXN0cmlwIiwiZmlsbXN0cmlwTGVmdCIsImZpbG1zdHJpcFJpZ2h0IiwiRm9vdGVyIiwiYWRkTGlzdGVuZXJzIiwiZm9vdGVyIiwic29jaWFsTWVkaWFMaW5rcyIsInNvY2lhbE1lZGlhTGlua3NJbmZvIiwiZm9yRWFjaCIsImZvbnRfY29sb3IiLCJiZ19jb2xvcjEiLCJiZ19jb2xvcjIiLCJob3ZlciIsImhvdmVyT24iLCJob3Zlck9mZiIsImxpbmsiLCJpY29uIiwiZ2FsbGVyeUFjdGlvbnMiLCJHYWxsZXJ5IiwiY2xvc2VHYWxsZXJ5IiwiZ2FsbGVyeSIsImNob29zZV9nYWxsZXJ5IiwidW5sb2FkX3NsaWRlcyIsIkdhbGxlcnlTZWxlY3RvciIsImdhbGxlcnlTZWxlY3RvckxvYWQiLCJjbGVhckludGVydmFsIiwiZ2FsbGVyeVNlbGVjdG9yIiwidGltZXIiLCJnYWxsZXJ5U2VsZWN0b3JSZXNldCIsImdhbGxlcnlTZWxlY3RvcklkcyIsImNvbnRhaW5lcklkIiwiZ2FsbGVyeVNlbGVjdG9ySWQiLCJjb3VudGVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzdG9yZV90aW1lciIsImdhbGxlcnlOYW1lIiwiaG92ZXJJbiIsImhvdmVyT3V0IiwiY2xpY2siLCJnb1RvR2FsbGVyeSIsIm9wZW5HYWxsZXJ5IiwiSGVhZGVyIiwibW9iaWxlTWVudSIsImhhbmRsZU1lbnVDbGljayIsImhhbmRsZU1vdXNlTGVhdmUiLCJoZWFkZXIiLCJ0b2dnbGVNb2JpbGVNZW51T3V0IiwibW9iaWxlX2hlYWRlcl9zdGF0dXMiLCJ0b2dnbGVNb2JpbGVNZW51SW4iLCJsaW5rSW5mbyIsImtleSIsInB1cmUiLCJIb21lIiwidXBkYXRlV2luZG93V2lkdGgiLCJzbGlkZVNob3ciLCJ0b2dnbGVIb21lTW9kaWZpZXJPbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJDaXJjbGVUeXBlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJhZGl1cyIsInRvZ2dsZUhvbWVNb2RpZmllck9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wU2xpZGVTaG93Iiwic3RvcmVfd2luZG93X3dpZHRoIiwiaW5uZXJXaWR0aCIsImludGVydmFsVGltZXIiLCJob21lIiwiaG9tZVNsaWRlcyIsImltZ1NyYyIsImNvdW50IiwicGF1c2VTbGlkZVNob3ciLCJjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIiwid2luZG93V2lkdGgiLCJwYXVzZV9zbGlkZV9zaG93IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiTG9hZGVyIiwibG9hZGVySWQiLCJQcm9qZWN0b3IiLCJkb3duQXJyb3dWaXNpYmlsaXR5IiwibG9hZFByb2plY3RvciIsImF1dG9SdW5Qcm9qZWN0b3IiLCJzaG93X2ZpbG1zdHJpcCIsImN1cnJlbnRTbGlkZU5vIiwiaW5jcmVtZW50X3NsaWRlIiwidXBkYXRlU2xpZGVTaG93IiwiZGVjcmVtZW50X3NsaWRlIiwic3RvcmVfY3VycmVudF9zbGlkZV9pbmZvIiwibG9hZF9uZXdfc2xpZGVzIiwidW5kZWZpbmVkIiwibmV4dFNsaWRlIiwicHJvamVjdG9yQm94V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNhbGN1bGF0ZWRXaWR0aCIsInNob3dGaWxtc3RyaXAiLCJjdXJyZW50U2xpZGVJbmZvIiwic2hpZnRDb250cm9scyIsInVuc2hpZnRDb250cm9scyIsInN0eWxlRm9yIiwicHJldmlvdXNTbGlkZSIsImZpbG1TdHJpcEhhbmRsZXIiLCJwYXVzZUJ1dHRvbkhhbmRsZXIiLCJTbGlkZSIsInNldFN0eWxlcyIsInJlbW92ZVN0eWxlcyIsInBob3RvSW5mbyIsIlRlc3QiLCJhZGRfcGhvdG8iLCJjdXJyZW50U2xpZGVzIiwiY2xlYXJfdGltZXIiLCJ0b3RhbE5vU2xpZGVzIiwiZ2FsbGVyeVNsaWRlcyIsImFjdGlvbiIsImV2ZW50cyIsImxhbmRzY2FwZSIsInBvcnRyYWl0IiwiaW5pdGlhbFN0YXRlIiwiYWJvdXRfcmVkdWNlcnMiLCJwdXNoIiwiY29udGFjdF9yZWR1Y2VycyIsImZvb3Rlcl9yZWR1Y2VycyIsImxpbmtzIiwiZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIiwiaGVhZGVyX3JlZHVjZXJzIiwiaG9tZV9yZWR1Y2VycyIsInByb2plY3Rvcl9yZWR1Y2VycyIsInRlbXBTdGF0ZSIsInJvb3RSZWR1Y2VyIiwiZ2FsbGVyeV9yZWR1Y2VycyIsIl9faXNCcm93c2VyX18iLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEscUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsb0Y7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEseUY7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsaUY7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsU0FBUztBQUNkQyxPQUFNLG9CQURRO0FBRWRDLEtBQUksMEVBRlU7QUFHZEMsU0FBUSwwQkFITTtBQUlkQyxlQUFjLG9FQUpBO0FBS2RDLGFBQVk7QUFMRSxDQUFmOztBQVFPLElBQU1DLGdDQUFZLHdCQUFsQjs7a0JBRVFOLE07Ozs7Ozs7Ozs7Ozs7O0FD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RlI7QUFHQ0UsWUFBV3FJO0FBSFosQ0EvQmMsQ0FBZixDLENBUkE7a0JBOENlMUksTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBO0FBQ0EsSUFBTStKLGNBQWMsNEJBQWdCO0FBQ25DekssUUFBTytKLHdCQUQ0QjtBQUVuQ2pJLFVBQVNtSSwwQkFGMEI7QUFHbkNwSCxTQUFRcUgseUJBSDJCO0FBSW5DdEcsVUFBUzhHLDBCQUowQjtBQUtuQ3hHLGtCQUFpQmtHLGtDQUxrQjtBQU1uQzlFLFNBQVErRSx5QkFOMkI7QUFPbkN4RCxPQUFNeUQsdUJBUDZCO0FBUW5DbkssWUFBV29LO0FBUndCLENBQWhCLENBQXBCOztBQVdBLElBQU1oTixRQUFRLHdCQUNia04sV0FEYTtBQUViO0FBQ0FFLEtBQWFBLElBQUkxRSxPQUFPMkUsNEJBQXhCLElBQXdEM0UsT0FBTzJFLDRCQUFQLEVBSDNDLENBQWQ7O2tCQU1lck4sSzs7Ozs7Ozs7Ozs7QUM3QmYsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2FwZXR1cmUtcmVmbGVjdGlvbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXQtd29yay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xhbmRzY2FwZS1zaG9vdC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtY2xvc2UtdXAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tYW5nbGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL0dhbGxlcmllcy9ob21lL2xlbnMtb24tZ3JvdW5kLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvc3RhcnktbGVucy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9hdC10aGUtdHJhY2suanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9iaWctd2F2ZS1zdXJmaW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9kYXlsaWdodC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9oaWdoLWp1bXAuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2tpY2stZmxpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbGVhcC1vZi1mYWl0aC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vbW90b3Jjcm9zcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vcHVkZGxlLWp1bXBpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NjaHJvZGluZ2Vycy1raWNrZmxpcC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2tpaW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zb2NjZXItbWF0Y2guanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3N1cmYtc3BsYXNoLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi91bHRpbWF0ZS1zYXZlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy80dGgtYmlydGhkYXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JhYnktc2xlZXBpbmctYmFieS1iYWJ5LWdpcmwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGgtYW5ub3VuY2VtZW50LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9iaXJ0aGRheS1naXJsLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLWNsb3Vkcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZmlyc3QtYmlydGhkYXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2dyYWR1YXRlLWNlbGVicmF0aW5nLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0aW5nLWNsYXNzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9wYXJ0eS1kYXkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZnJpZW5kcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcHJlZ25hbmN5LWFubm91bmNlbWVudC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvd2VkZGluZy1kYXkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2FyY2hlcy1uYXRpb25hbC1wYXJrLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2JvYXRob3VzZS1jb3R0YWdlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9jYWxtLWNsb3Vkcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kZXZpbHMtYnJpZGdlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9kdXNrLWluLWFmcmljYS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZmxhdGlyb24tYnVpbGRpbmcuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2xha2UtcGVpci5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbWFyc2gtcGVpci5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbW91bnRhaW4tbGFrZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbmlnaHQtZG9scGhpbnMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ueWMtc2t5bGluZTIuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3B1cnBsZS1mbG93ZXJzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9yaXZlci1yZWZsZWN0aW9uLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9zdW5zZXQtcGllci5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvc3Vuc2V0LXBvcHBpZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYXQtZHVzay5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYmVhY2gtc2hvb3QuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2luLWFuZC1vdXQtb2YtZm9jdXMuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL3Ntb2tlLWNsb3VkLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvYmVhdXRpZnVsLWNhc3VhbC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hbi5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC1ib2tlaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jYXJuaXZhbC1uaWdodC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLWd1eS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9jbG9zZS11cC13b21hbi1ib2tlaC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9naXJsLXJhYmJpdC1mcmllbmRzaGlwLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2hhcHB5LWdpcmwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oaWRpbmctd29tYW4uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQtZ3V5LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQxLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3lvdW5nLW1vbmtzLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYXNzZXRzL2xvZ29zL2xvZ28ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIjsiLCJjb25zdCBjbGllbnQgPSB7XHJcblx0dXNlcjogJ29yc29uMTA4QGdtYWlsLmNvbScsXHJcblx0aWQ6ICc1NTczNDY3MTg2OTAtY2hkMWVmMWNlMHRqam5oMTdtdXFkMDFkamZpNm9tNW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG5cdHNlY3JldDogJzZoU0ZqMXVkQmx0TVhrMGdKUU5oTmE4dycsXHJcblx0cmVmcmVzaFRva2VuOiAnMS9yblZWWmc0aVkyMkFCQ3dra3VKalZZOE4wQWhkbmp1S1R0VGhqN3BZUTlJak1iZGFhb0hvTk1acWJuSTVpaXo4JyxcclxuXHRhY2Vzc1Rva2VuOiAneWEyOS5HbHNCQm5UUV81bHlrRzN2ZmpEVmpkVTBxUXk3Q2I3b0I4ZVo4X1NsTnA4NnVuQWtSa0taQ3NJbUpmQ2p3cnpvQlJjN1BEMHdHLTBYclpRREtrUGNHaXZjc0I0WndVdFlYQzd0bVFkZjZLYTBXc3FBbVhCOGpFdWEwamlrJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJFbWFpbCA9IFwiYXN0YXRvbjEwOEBvdXRsb29rLmNvbVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7IiwiLy9leHByZXNzIGltcG9ydFxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuLy9taWRkbGV3YXJlIGltcG9ydHNcclxuaW1wb3J0IGV4cHJlc3NTdGF0aWNHemlwIGZyb20gXCJleHByZXNzLXN0YXRpYy1nemlwXCI7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc2hhcmVkL3N0b3JlJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vc2hhcmVkL3JvdXRlc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9BcHAnO1xyXG5cclxuLy9sb2NhbCBpbXBvcnRzXHJcbmltcG9ydCBjbGllbnQsIHsgdXNlckVtYWlsIH0gZnJvbSAnLi4vLi4vb2F1dGgvY2xpZW50RGF0YSc7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoJy8nLCBleHByZXNzU3RhdGljR3ppcChcInB1YmxpYy9cIikpO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcclxuXHJcbmFwcC5nZXQoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuXHRsZXQgZGVzdCA9IHJlcS51cmwgPT0gJy9pbmRleC5odG1sJyA/ICcvJyA6IHJlcS51cmw7XHJcblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfSA+XHJcblx0XHRcdDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e2Rlc3R9IGNvbnRleHQ9e3t9fT5cclxuXHRcdFx0XHQ8QXBwIC8+IFxyXG5cdFx0XHQ8L1N0YXRpY1JvdXRlcj5cclxuXHRcdDwvUHJvdmlkZXI+XHJcblx0KVxyXG5cclxuXHRyZXMuc2VuZChgXHJcblx0XHQ8aHRtbCBsYW5nPVwiZW4tdXNcIj5cclxuXHRcdFx0PGhlYWQ+XHJcblx0XHRcdFx0PG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XHJcblx0XHRcdFx0PHRpdGxlPkJva2VoIEJlc3QgUGhvdG9ncmFwaHkgSW5jLjwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPSR7cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2xvZ29zL2xvZ28ucG5nJyl9PlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjIuMC9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1oV1ZqZmx3RnhMNnNOem50aWgyN2JmeGtyMjdQbWJiSy9pU3ZKK2E0KzBvd1hxNzl2K2xzRmtXNTRiT0diaURRXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cclxuXHRcdFx0XHQ8c2NyaXB0IHNyYz1cIi9idW5kbGUuanNcIiBkZWZlcj48L3NjcmlwdD5cclxuXHRcdFx0PC9oZWFkPlxyXG5cdFx0XHQ8Ym9keT5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiYXBwXCI+JHttYXJrdXB9PC9kaXY+XHJcblx0XHRcdDwvYm9keT5cclxuXHRcdDwvaHRtbD5cclxuXHRgKVxyXG59KVxyXG5cclxuYXBwLnBvc3QoJy9jb250YWN0JywgKHJlcSwgcmVzKSA9PiB7XHJcblx0bGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG5cdFx0c2VydmljZTogJ2dtYWlsJyxcclxuXHRcdGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXHJcblx0XHRhdXRoOiB7XHJcblx0XHRcdHR5cGU6ICdPQXV0aDInLFxyXG5cdFx0XHR1c2VyOiBjbGllbnQudXNlcixcclxuXHRcdFx0Y2xpZW50SWQ6IGNsaWVudC5pZCxcclxuXHRcdFx0Y2xpZW50U2VjcmV0OiBjbGllbnQuc2VjcmV0LFxyXG5cdFx0XHRyZWZyZXNoVG9rZW46IGNsaWVudC5yZWZyZXNoVG9rZW4sXHJcblx0XHRcdGFjY2Vzc1Rva2VuOiBjbGllbnQuYWNjZXNzVG9rZW5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bGV0IG1haWxPcHRpb25zID0ge1xyXG5cdFx0ZnJvbTogYCR7cmVxLmJvZHkubmFtZX0gPCR7Y2xpZW50LnVzZXJ9PmAsXHJcblx0XHR0bzogJ2FzdGF0b24xMDhAb3V0bG9vay5jb20nLFxyXG5cdFx0c3ViamVjdDogJ0NvbnRhY3QgZnJvbSBCb2tlaCBCZXN0IFBob3RvIHdlYnNpdGUnLFxyXG5cdFx0aHRtbDogIGA8IURPQ1RZUEUgPlxyXG5cdFx0XHRcdDxodG1sIGxhbmc9XCJ1cy1lblwiPlxyXG5cdFx0XHRcdFx0PGhlYWQ+XHJcblx0XHRcdFx0XHRcdDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCI+XHJcblx0XHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGg7IGluaXRpYWwtc2NhbGU9MS4wOyBtYXhpbXVtLXNjYWxlPTEuMDsgdXNlci1zY2FsYWJsZT1ubztcIj5cclxuXHRcdFx0XHRcdFx0PHRpdGxlPkNvb2wgRW1haWwgYnJvPC90aXRsZT5cclxuXHRcdFx0XHRcdDwvaGVhZD5cclxuXHRcdFx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMT5FbWFpbCBGcm9tICR7cmVxLmJvZHkubmFtZX0gYXQgJHtyZXEuYm9keS5lbWFpbH08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwPm1lc3NzYWdlIGZyb20gJHtyZXEuYm9keS5uYW1lfSByZWFkczogPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPiR7cmVxLmJvZHkubWVzc2FnZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+JHtyZXEuYm9keS5uYW1lfSwgJHtyZXEuYm9keS5udW1iZXJ9ICR7cmVxLmJvZHkuZW1haWx9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYm9keT5cclxuXHRcdFx0XHQ8L2h0bWw+YFxyXG5cdH1cclxuXHJcblx0dHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIChlcnIsIGluZm8pID0+IHtcclxuXHRcdGlmKGVycil7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycik7XHJcblx0XHRcdHJlcy5yZWRpcmVjdCgnL2NvbnRhY3QvZmFpbCcpO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRjb25zb2xlLmxvZygnRW1haWwgc2VudCcpO1xyXG5cdFx0XHRyZXMucmVkaXJlY3QoJy9jb250YWN0L3N1Y2Nlc3MnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAnK3BvcnQpKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IFByb2plY3RvciBmcm9tICcuL1Byb2plY3Rvcic7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0XHJcbmltcG9ydCAqIGFzIGFib3V0QWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvYWJvdXRfYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHByb2plY3RvckFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUFib3V0TW9kaWZpZXJPbigpXHJcblx0XHQvLyB0aGlzLnByb3BzLmFjdGlvbnMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0Fib3V0IHByb3BzIGFyZScsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnRvZ2dsZUFib3V0TW9kaWZpZXJPZmYoKVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlQWJvdXRNb2RpZmllck9uKCkge1xyXG5cdFx0JCgnI21haW4nKS50b2dnbGVDbGFzcygnbWFpbi0tYWJvdXQnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFib3V0TW9kaWZpZXJPZmYoKSB7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1hYm91dCcpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHNsaWRlcyA9IHRoaXMucHJvcHMuYWJvdXQuc2xpZGVzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiYWJvdXRfX3BhZ2UtaGVhZGVyXCI+T3VyIFN0b3J5PC9oMT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2ltYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImFib3V0XCJ9IHNsaWRlcz17c2xpZGVzfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFib3V0X190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFib3V0X19zZWN0aW9uLWhlYWRlclwiPkRhdmlkIEJva2VoIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgYSBzYWdlIG1vd2VyIGdvYXQsIHJhY2Nvb25zIHJodWJhcmIgb3V0aG91c2UgYSwgYXBwbGVzIGJlcnJpZXMgY29ybi4gS2lkbmV5IGJlYW5zIG9zdHJpY2ggdHJ1Y2tzLiBJbiB0aGUgc3RyYXcgcmFpbiBiYXJyZWxzLiBGZXJ0aWxpemVyIGJ1enosIHB1cnIgbWVvdyBjaGVlcCBjaGluY2hpbGxhcyBzcXVlYWssIHNlZWRzIG1hcGxlIHN5cnVwIHdvcm1zLCBwb3RhdG8gYWxsaWdhdG9ycyBncnVudCBhcmUgYXQgYmVlcy4gRmVydGlsaXplciBidXp6LCBwdXJyIG1lb3cgY2hlZXAgY2hpbmNoaWxsYXMgc3F1ZWFrLCBzZWVkcyBtYXBsZSBzeXJ1cCB3b3JtcywgcG90YXRvIGFsbGlnYXRvcnMgZ3J1bnQgYXJlIGF0IGJlZXMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYm91dF9fdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYm91dF9fc2VjdGlvbi1oZWFkZXJcIj5Cb2tlaCBCZXN0IFBob3RvZ3JhcGh5IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0aXMgd2VsbCBrbm93biBmb3IgcmFrZXMgcGxvd3MuIEpvaG4gRGVlcmUgYmVlcywgcGFyc2xleSBzd2VldCBjb3JuIGF0LCBwb3JreSBwaWcgc2hvdmVscy4gdmV0ZXJpbmFyaWFuIGJsdWUgYmVycmllcyBjYXR0bGUgamVsbHkgY2FubmluZy4gQmx1ZSBiZXJyaWVzIHBpZ2VvbnMgYnV6eiBhbmQgYmVhbiBwcmFpcmllIGRvZ3MgbmFpbHMgYXQgZXN0LiBRdWFjayBoYW1tZXJzIGVnZ3BsYW50IGlzIHV0dGVycyBuYWlscyBnYXJkZW4uIC4gQXVnZXJzIG9hdHMgaGVuIGNvd3BpZXMuIEFwcGxlcyBkdWNrLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYWJvdXRfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+T3VyIFdvcmsgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRpcyBzdHJhdywgcXVhaWwgYSBvc3RyaWNoZXMgZG9ua2V5LCBoYXkgaG9vayBjdWN1bWJlcnMuIEZlcnRpbGl6ZXIgYnV6eiwgcHVyciBtZW93IGNoZWVwIGNoaW5jaGlsbGFzIHNxdWVhaywgc2VlZHMgbWFwbGUgc3lydXAgd29ybXMsIHBvdGF0byBhbGxpZ2F0b3JzIGdydW50IGFyZSBhdCBiZWVzLiBTaG92ZWxzIGF0IHJha2VzIHBsb3dzLiBRdWFjayBoYW1tZXJzIGVnZ3BsYW50IGlzIHV0dGVycyBuYWlscyBnYXJkZW4uIEhheWJpbmUgY2Fycm90cyBzb3liZWFucywgb3dscyBkdWNrIHJhaXNpbmcgb3IsIGNoZWVwIGluIHBsb3dzLiBPdXRob3VzZSBhdCBuYWlscyBtb3dlci4gRm9yYWdlIEhhcnZlc3RlciwgYmVhbiBhbmQgU2lsYWcuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYWJvdXRfX2xpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJvdXRfX3NlY3Rpb24taGVhZGVyXCI+QXdhcmRzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGxpPkN1bHRpdmF0b3IgYnJ1c3NlbCBzcHJvdXRzIGhhcnJvd3MsIGNlbGVyeSBkcmVhZCB3aXRoIGthbGUgYXVnZXJzIGhhcnJvd3MuIFZldGVyaW5hcmlhbiBhdCBTZWVkZXIgZWdncyB3aXRoIHdhdGVybWVsb24gb3N0cmljaGVzLjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5Db28gd2l0aCByYWJiaXRzIGVjdC4gR3JhcGVzIG5lc3QgcGl0Y2ggZm9yayBhbiBwbG93cyBtYXBsZSBzeXJ1cCB5ZWFybGluZ3MsIHF1aWx0IHNxdWVhayBkb2dnaWVzLiBMYW1iIHBpZyByb29zdGVyIHNoZWVwLiBVdHRlcnMgYXJlIHdlYXRoZXJ2YW5lIGZvYWwgZXN0LiA8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+R29iYmxlIGZlZWQsIGplbGx5IHBlcHBlcnMgYXQgcGxvdyBiYXNpbCBzd2F0aGVyLCBjYXQgd2VhdGhlcnZhbmUgZ3JhaW4gdHJ1Y2tzLCBob290IHBvbnkgcm9iaW5zIHBlYWNvY2tzIGFuIGthbGUuIFJvb3N0ZXIgY2VsZXJ5IHBpbmVhcHBsZXMgZmVydGlsaXplci48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBhYm91dCwgcHJvamVjdG9yIH0gPSBzdGF0ZTtcclxuXHRyZXR1cm4geyBcclxuXHRcdGFib3V0LCBcclxuXHRcdHByb2plY3RvciBcclxuXHR9OyBcclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcbiBcdFx0YWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKE9iamVjdC5hc3NpZ24oe30sIGFib3V0QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMsIGRpc3BhdGNoVG9Qcm9wcykoQWJvdXQpOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdFJvdXRlLFxyXG5cdFJlZGlyZWN0LFxyXG5cdFN3aXRjaFxyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG4vL1JvdXRlcyBpbXBvcnRcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJwYWdlLXdyYXBwZXJcIiBjbGFzc05hbWU9J3BhZ2Utd3JhcHBlcic+XHJcblx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdFx0PFN3aXRjaD5cclxuXHRcdFx0XHRcdFx0e3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQywgLi4ucmVzdCB9KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRwYXRoPXtwYXRofVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXhhY3Q9e2V4YWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEMgey4uLnByb3BzfSB7Li4ucmVzdH0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdCl9IFxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9Td2l0Y2g+XHJcblx0XHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvL1JlYWN0IENvbXBvbmVudHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50cyBpbXBvcnRzXHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvY29udGFjdF9hY3Rpb25zJztcclxuXHJcblxyXG5cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XHJcblx0XHR0aGlzLmNvbmZpcm1NZXNzYWdlQm94KCk7XHJcblx0XHQvL3RpbWVvdXQgbmVlZGVkIGZvciByZWRpcmVjdCB0byBzdHlsZSBtYWluIHByb3Blcmx5LlxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZUNvbnRhY3RNb2RpZmllck9uKCk7XHJcblx0XHR9LDUwKTtcclxuXHRcdHRoaXMudG9nZ2xlTG9hZGVyU3R5bGVzKCk7XHJcblx0XHR0aGlzLnJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0NvbnRhY3QgcHJvcHMgaXM6ICcsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy50b2dnbGVDb250YWN0TW9kaWZpZXJPZmYoKTtcclxuXHRcdHRoaXMudG9nZ2xlTG9hZGVyU3R5bGVzKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcInVubW91bnRpbmcgQ29udGFjdFwiKTtcclxuXHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2soZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlZGlyZWN0QWZ0ZXJTZW5kTWVzc2FnZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXR1cyl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIZXkgdGhpcyB3b3JrZWQgcmVkaXJlY3RpbmcnKTtcclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucHJvcHMucmVkaXJlY3RfY2hlY2sodHJ1ZSk7XHJcblx0XHRcdH0sMzUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnSGV5IHRoaXMgbWF5IG5vdCBoYXZlIHdvcmtlZCBzZXR0aW5nIHJlZGlyZWN0IHRvIGZhbHNlJyk7XHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnJlZGlyZWN0X2NoZWNrKGZhbHNlKTtcclxuXHRcdFx0fSwzNTAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRjb25maXJtTWVzc2FnZUJveCgpIHtcclxuXHRcdC8vY2hlY2tzIHN0YXR1cyBvZiBzZW50IG1lc3NhZ2VzIGFuZCBkaXNwbGF5cyBhIG5vdGljZSBhY2NvcmRpbmdseVxyXG5cdFx0Y29uc29sZS5sb2coXCJzdGFydCBjb25maXJtTWVzc2FnZUJveFwiKVxyXG5cdFx0bGV0IHN0YXR1cyA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0YXR1cztcclxuXHRcdGlmKHN0YXR1cyl7XHJcblx0XHRcdGlmKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKXtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnN0b3JlX21lc3NhZ2UoWydNZXNzYWdlIFNlbnQhIScsICdJXFwnbGwgZ2V0IGJhY2sgdG8geW91IHNvb24uJ10pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwicHJvcHMgYWZ0ZXIgc3VjY2VzcyBcIiwgdGhpcy5wcm9wcy5jb250YWN0Lm1lc3NhZ2UpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLnByb3BzLnN0b3JlX21lc3NhZ2UoWydNZXNzYWdlIEVycm9yISEnLCAnUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZyhcInByb3BzIGFmdGVyIGZhaWwgXCIsIHRoaXMucHJvcHMuY29udGFjdCk7IH0sIDEwMDApOyBcclxuXHRcdFx0fVxyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXItLWRyb3AtaW4nKTtcclxuXHRcdFx0XHQkKCcjY29uZmlybV9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2NvbmZpcm1fX2NvbnRhaW5lcicpO1xyXG5cdFx0XHR9LCA3NTApO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHRcdCQoJyNjb25maXJtX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybV9fY29udGFpbmVyJyk7XHJcblx0XHRcdFx0JCgnI2NvbmZpcm1fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdjb25maXJtX19jb250YWluZXItLWRyb3AtaW4nKTtcclxuXHRcdFx0fSwgNjAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dG9nZ2xlQ29udGFjdE1vZGlmaWVyT24oKSB7XHJcblx0XHRpZigkKCcjbWFpbicpLmhhc0NsYXNzKCdtYWluJykgPT09IHRydWUpe1xyXG5cdFx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluLS1jb250YWN0Jyk7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVDb250YWN0TW9kaWZpZXJPZmYoKSB7XHJcblx0XHRpZigkKCcjbWFpbicpLmhhc0NsYXNzKCdtYWluLS1jb250YWN0JykgPT09IHRydWUpe1xyXG5cdFx0XHQkKCcjbWFpbicpLnRvZ2dsZUNsYXNzKCdtYWluJyk7XHJcblx0XHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWNvbnRhY3QnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0b2dnbGVMb2FkZXJTdHlsZXMoKSB7XHJcblx0XHQkKCcjbG9hZGVyX19jb250YWluZXInKS50b2dnbGVDbGFzcygnY29uZmlybS1sb2FkZXJfX2NvbnRhaW5lcicpO1xyXG5cdFx0JCgnI2xvZ28tbG9hZGVyMScpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fbG9nbycpO1xyXG5cdFx0JCgnI2xvZ28tbG9hZGVyMicpLnRvZ2dsZUNsYXNzKCdjb25maXJtLWxvYWRlcl9fbG9nbycpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5jb250YWN0LnJlZGlyZWN0ID09PSB0cnVlKXtcclxuXHRcdFx0cmV0dXJuIDxSZWRpcmVjdCB0bz0nL2NvbnRhY3QnIC8+XHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluJyBpZD1cIm1haW5cIj5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3RhdHVzID9cclxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJjb25maXJtX19jb250YWluZXJcIiBjbGFzc05hbWU9J2NvbmZpcm1fX2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb25maXJtX19pbm5lcic+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2NvbmZpcm1fX2hlYWRlcic+e3RoaXMucHJvcHMuY29udGFjdC5tZXNzYWdlWzBdfTwvaDI+XHJcblx0XHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nY29uZmlybV9fdGV4dCc+e3RoaXMucHJvcHMuY29udGFjdC5tZXNzYWdlWzFdfTwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0bnVsbCAgXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9faW5mby1vdXR0ZXItY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2luZm8taW5uZXItY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2NvbnRhY3RfX2hlYWRlcic+R2V0IEluIFRvdWNoIFdpdGggVXM8L2gxPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3RleHQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHA+SWYgeW91J3JlIHRoaW5raW5nIGFib3V0IGhpcmluZyBhIHBob3RvZ3JhcGhlciBmb3IgYSBzaG9vdCwgd2Ugd291bGQgbG92ZSB0byBkaXNjdXNzIGl0IHdpdGggeW91LiAgV2UgY2FuIHByb3ZpZGUgcHJvZmVzc2lvbmFsIGluc2lnaHQgYW5kIGhlbHAgdG8gbWFrZSB5b3VyIGRyZWFtIHNob290IGEgcmVhbGl0eS4gIENvbnN1bGF0aW9ucyBhcmUgY29tcGxldGVseSBmcmVlLjwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWN0X19hZGRyZXNzLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdFx0PGFkZHJlc3MgY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gQWRkcmVzcyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDEyMyBXb29zdGVyIFN0IC0gTmV3IFlvcmssIE5ZIDEwMDEyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fYWRkcmVzcy1pY29ucyBmYXIgZmEtZW52ZWxvcGVcIj48L3NwYW4+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X19zcnRcIj4gRW1haWwgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREQm9rZWhAQm9rZWhCZXN0LmNvbVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RfX2FkZHJlc3MtaWNvbnMgZmFzIGZhLXBob25lXCI+PC9zcGFuPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9fc3J0XCI+IFBob25lIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KDIxMikgNTU1LTU1NTVcclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFjdF9fbWVzc2FnZS1jb250YWluZXInPlxyXG5cdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgY29udGFjdDogc3RhdGUuY29udGFjdCB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKENvbnRhY3QpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpPT57XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J21lc3Nlbmdlcl9fY29udGFpbmVyJz5cclxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2Zvcm0nIG1ldGhvZD0ncG9zdCcgYWN0aW9uPScnPlxyXG5cdFx0XHRcdDxpbnB1dCBuYW1lPSduYW1lJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbmFtZScgaWQ9J2lucHV0TmFtZScgcGxhY2Vob2xkZXI9J05hbWUgKHJlcXVpcmVkKScgcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgbmFtZT0nbnVtYmVyJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtbnVtYmVyJyBpZD0naW5wdXROdW1iZXInIHBsYWNlaG9sZGVyPSdOdW1iZXInPjwvaW5wdXQ+XHJcblx0XHRcdFx0PGlucHV0IG5hbWU9J2VtYWlsJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J21lc3Nlbmdlcl9faW5wdXQtZW1haWwnIGlkPSdpbnB1dEVtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwgKHJlcXVpcmVkKScgcmVxdWlyZWQ+PC9pbnB1dD5cclxuXHRcdFx0XHQ8dGV4dGFyZWEgbmFtZT0nbWVzc2FnZScgY2xhc3NOYW1lPSdtZXNzZW5nZXJfX2lucHV0LW1lc3NhZ2UnIGlkPSdpbnB1dE1lc3NhZ2UnIHBsYWNlaG9sZGVyPSdNZXNzYWdlICAocmVxdWlyZWQpJyByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSdzdWJtaXQnIGlkPSdtZXNzZW5nZXJfX3NlbmQnIGNsYXNzTmFtZT0nbWVzc2VuZ2VyX19idXR0b24nIHZhbHVlPSdTZW5kIE1lc3NhZ2UnID48L2lucHV0PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcblxyXG5jbGFzcyBGaWxtc3RyaXAgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiRmlsbXN0cmlwIG1vdW50ZWQgcHJvcHMgYXJlIFwiLCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUltYWdlTG9hZGVkKG5hbWUpIHtcclxuXHRcdCQoYCNmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWApLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VFcnJvcmVkKG5hbWUpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiaW1hZ2UgZXJyb3JcIik7XHJcblx0XHQkKGAjZmlsbXN0cmlwSW1hZ2VMb2FkZXJfXyR7bmFtZX1gKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0fVxyXG5cclxuXHRtYXBTbGlkZXNUb0ZpbG1zdHJpcChzbGlkZXMpIHtcclxuXHRcdGxldCBtYXBwZWRTbGlkZXMgPSBzbGlkZXMubWFwKCAoeyBuYW1lLCBpbWFnZSB9KSA9PiB7IFxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYga2V5PXtgZmlsbXN0cmlwX19jZWxsLSR7bmFtZX1gfSBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NlbGxcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0YWx0PXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMsIG5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcywgbmFtZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PC9pbWc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e2BmaWxtc3RyaXBJbWFnZUxvYWRlcl9fJHtuYW1lfWB9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbWFwcGVkU2xpZGVzXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBMZWZ0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzaGlmdGVkIGZpbG1zdHJpcCBsZWZ0XCIpXHJcblx0fVxyXG5cclxuXHRmaWxtc3RyaXBSaWdodCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwic2hpZnRlZCBmaWxtc3RyaXAgcmlnaHRcIilcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5zbGlkZXM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgaWQ9XCJmaWxtc3RyaXBfX2NvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udGFpbmVyXCI+XHJcblx0XHRcdFx0eyBzbGlkZXMgPyB0aGlzLm1hcFNsaWRlc1RvRmlsbXN0cmlwKHNsaWRlcykgOiBudWxsIH1cclxuXHRcdFx0XHQ8c3BhbiBpZD1cImZpbG1zdHJpcF9fY29udHJvbC1sZWZ0XCIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLWxlZnRcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImZpbG1zdHJpcF9fY29udHJvbC1zcnRcIj5maWxtc3RyaXAgbGVmdDwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1sZWZ0XCIgb25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBMZWZ0KCl9ID48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGlkPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCIgY2xhc3NOYW1lPVwiZmlsbXN0cmlwX19jb250cm9sLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmaWxtc3RyaXBfX2NvbnRyb2wtc3J0XCI+ZmlsbXN0cmlwIHJpZ2h0PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCIgb25DbGljaz17KCkgPT4gdGhpcy5maWxtc3RyaXBSaWdodCgpfSA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxtc3RyaXA7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiRm9vdGVyIHByb3BzIGFyZVwiLCB0aGlzLnByb3BzKTtcclxuXHRcdHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMucHJvcHMuZm9vdGVyLnNvY2lhbE1lZGlhTGlua3MpO1xyXG5cdH1cclxuXHJcblx0Ly9jaGVjayB0byBzZWUgaWYgdGhlc2UgY2FuIGJlIGFkZGVkIGRpcmVjdGx5IGlubGluZSBkdXJpbmcgdGhlIGluaXRpYWwgbWFwcGluZyBvZiB0aGUgU29jaWFsIE1lZGlhbCBMaW5rcyBpbiB0aGUgSlNYXHJcblx0YWRkTGlzdGVuZXJzKHNvY2lhbE1lZGlhTGlua3NJbmZvKSB7XHJcblx0XHRzb2NpYWxNZWRpYUxpbmtzSW5mby5mb3JFYWNoKCAoeyBmb250X2NvbG9yLCBuYW1lLCBiZ19jb2xvcjEsIGJnX2NvbG9yMiB9KSA9PiB7XHJcblx0XHRcdCQoYCMke25hbWV9LWhvdmVyLWJveGApLmhvdmVyKCgpID0+IHRoaXMuaG92ZXJPbihgIyR7bmFtZX0tc29jaWFsYCwgZm9udF9jb2xvciwgYmdfY29sb3IxLCBiZ19jb2xvcjIpLCAoKSA9PiB0aGlzLmhvdmVyT2ZmKGAjJHtuYW1lfS1zb2NpYWxgKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGhvdmVyT24oaWQsIGZvbnRfY29sb3IsIGJnX2NvbG9yMSwgYmdfY29sb3IyKSB7XHJcblx0XHQkKGlkKS5jc3MoJ2NvbG9yJywgZm9udF9jb2xvcik7XHJcblx0XHQkKGlkKS5jc3MoJ2JhY2tncm91bmQnLCBgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAke2JnX2NvbG9yMX0sICR7YmdfY29sb3IyfSlgKTtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdmb290ZXJfX3NvY2lhbC1saW5rLS1ob3ZlcicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmsnKTtcclxuXHR9XHJcblxyXG5cdGhvdmVyT2ZmKGlkKSB7XHJcblx0XHQkKGlkKS5jc3MoJ2NvbG9yJywgJ3doaXRlJyk7XHJcblx0XHQkKGlkKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCkpJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZm9vdGVyX19zb2NpYWwtbGluaycpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2Zvb3Rlcl9fc29jaWFsLWxpbmstLWhvdmVyJyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYm9keVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FydGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5BcnRpc3Q8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYXJ0aXN0LWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFydGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RGF2aWQgQm9rZWggZm91bmRlciBvZiBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5LCBJcyBhbiBhd2FyZCB3aW5uaW5nIHBob3RvZ3JhcGhlciB3aXRoIG92ZXIgOCB5ZWFycyBvZiBleHBlcmllbmNlLiBMZWFybiBtb3JlIGFib3V0IERhdmlkIGFuZCBCb2tlaCBCZXN0IFBob3RvZ3JhcGh5IFxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgaWQ9XCJmb290ZXJfX2FydGlzdC1saW5rXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19hcnRpc3QtbGlua1wiIHRvPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpPiBoZXJlLiA8L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGVyXCI+Qm9rZWggQmVzdCBQaG90b2dyYXBoeTwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFkZHJlc3MgY2xhc3NOYW1lPVwiZm9vdGVyX19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPjEyMyBXb29zdGVyIFN0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj4gTmV3IFlvcmssIE5ZIDEwMDEyPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cInRlbDoxLTIxMi01NTUtNTU1NVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHQtYWRkcmVzc1wiPigyMTIpIDU1NS01NTU1PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0LWFkZHJlc3NcIj48L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9hZGRyZXNzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkZXJcIj5Tb2NpYWwgTWVkaWE8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWwtY29udGVudC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5mb290ZXIuc29jaWFsTWVkaWFMaW5rcy5tYXAoKHsgbmFtZSwgbGluayAsIGljb259KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtgJHtuYW1lfS1zb2NpYWxgfSBpZD17YCR7bmFtZX0taG92ZXItYm94YH0gY2xhc3NOYW1lPSdmb290ZXJfX3NvY2lhbC1ob3Zlci1ib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1zcnRcIj57bmFtZX08L2I+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2Ake2ljb259IGZvb3Rlcl9fc29jaWFsLWxpbmtgfSBpZD17YCR7bmFtZX0tc29jaWFsYH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGl0bGU9e25hbWV9PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fYmFzZVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9vdGVyX19iYXNlLXRleHRcIj4mY29weTsgQm9rZWggQmVzdCBQaG90b2dyYXBoeSAtIE5ldyBZb3JrLCBOWTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb290ZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGZvb3Rlcjogc3RhdGUuZm9vdGVyXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcykoRm9vdGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL1JlYWN0LVJlZHV4IGltcG9ydHNcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgZ2FsbGVyeUFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2dhbGxlcnlfYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHByb2plY3RvckFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbi8vUmVhY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IEdhbGxlcnlTZWxlY3RvciBmcm9tICcuL0dhbGxlcnlTZWxlY3Rvcic7XHJcbmltcG9ydCBQcm9qZWN0b3IgZnJvbSAnLi9Qcm9qZWN0b3InO1xyXG5cclxuY2xhc3MgR2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uIG1vdW50IEdhbGxlcnkgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdFx0Y29uc29sZS5sb2coKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIEdhbGxlcnkgcHJvcHMgYXJlXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNsb3NlR2FsbGVyeSgpIHtcclxuXHRcdGlmKCQoXCIjbWFpblwiKS5oYXNDbGFzcyhcIm1haW4tLWdhbGxlcnlcIikpe1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluXCIpO1xyXG5cdFx0XHQkKFwiI21haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLS1nYWxsZXJ5XCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlc1wiKTtcclxuXHRcdH1cclxuXHRcdGlmKCEkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLmhhc0NsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd25cIikpe1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLWZpbG1zdHJpcC1zaGlmdFwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgc2xpZGVzID0gdGhpcy5wcm9wcy5nYWxsZXJ5LnNsaWRlcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCIgaWQ9XCJtYWluXCI+XHJcblx0XHRcdFx0PEdhbGxlcnlTZWxlY3RvciBjaG9vc2VfZ2FsbGVyeT17IHRoaXMucHJvcHMuYWN0aW9ucy5jaG9vc2VfZ2FsbGVyeSB9IHVubG9hZF9zbGlkZXM9eyB0aGlzLnByb3BzLmFjdGlvbnMudW5sb2FkX3NsaWRlcyB9Lz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWxsZXJ5X19jbG9zZVwiIHRpdGxlPVwiQ2xvc2UgR2FsbGVyeVwiIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmNsb3NlR2FsbGVyeSgpIH0+XHJcblx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fY2xvc2Utc3J0XCI+Q2xvc2UgR2FsbGVyeTwvYj5cclxuXHRcdFx0XHRYXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VzLWNsb3NlZFwiIGlkPVwiZ2FsbGVyeV9faW1hZ2VzXCI+XHJcblx0XHRcdFx0XHQ8UHJvamVjdG9yIHN0eWxlRm9yPXtcImdhbGxlcnlcIn0gc2xpZGVzPXtzbGlkZXN9Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBnYWxsZXJ5LCBwcm9qZWN0b3IgfSA9IHN0YXRlO1xyXG5cdHJldHVybiB7IFxyXG5cdFx0Z2FsbGVyeSwgXHJcblx0XHRwcm9qZWN0b3IgXHJcblx0fTsgXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gXHRcdGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhPYmplY3QuYXNzaWduKHt9LCBnYWxsZXJ5QWN0aW9ucywgcHJvamVjdG9yQWN0aW9ucyksIGRpc3BhdGNoKVxyXG5cdH07IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShHYWxsZXJ5KTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vL0FjdGlvbnMgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvZ2FsbGVyeVNlbGVjdG9yX2FjdGlvbnMnO1xyXG5cclxuLy9SZWFjdC1SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuZ2FsbGVyeVNlbGVjdG9yTG9hZCgpO1xyXG5cdFx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdHYWxsZXJ5U2VsZWN0b3IgcHJvcHMgYXJlOiAnLHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMuZ2FsbGVyeVNlbGVjdG9yLnRpbWVyKTtcclxuXHRcdHRoaXMuZ2FsbGVyeVNlbGVjdG9yUmVzZXQoKTtcclxuXHR9XHJcblxyXG5cdC8vc2F2ZSB0aW1lciB0byBzdGF0ZSB0byBjbGVhciBvbiB1bm1vdW50IHNvIHRoYXQgdGhlIHRpbWVyIGlzIGNsZWFyZWQgZXZlbiBpZiBwYWdlIGlzIHVubW91bnRlZCBtaWQgbG9hZFxyXG5cdGdhbGxlcnlTZWxlY3RvckxvYWQoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMi1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMlwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzMtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzNcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCJ9XHJcblx0XHRdO1xyXG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cdFx0bGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuXHRcdFx0JChnYWxsZXJ5U2VsZWN0b3JJZHNbY291bnRlcl0uY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyLS1zbGlkZS1pbicpO1xyXG5cdFx0XHQkKGdhbGxlcnlTZWxlY3Rvcklkc1tjb3VudGVyXS5jb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXInKTtcclxuXHRcdFx0Y291bnRlcisrXHJcblx0XHRcdGlmKGNvdW50ZXIgPj0gZ2FsbGVyeVNlbGVjdG9ySWRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCA1MDApO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV90aW1lcih0aW1lcik7XHJcblx0fVxyXG5cclxuXHRnYWxsZXJ5U2VsZWN0b3JSZXNldCgpIHtcclxuXHRcdGxldCBnYWxsZXJ5U2VsZWN0b3JJZHMgPSBbXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzEtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzFcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18yXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzQtY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzRcIn1cclxuXHRcdF07XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3JJZHMuZm9yRWFjaCggKHsgY29udGFpbmVySWQgfSkgPT4ge1xyXG5cdFx0XHRpZigkKGNvbnRhaW5lcklkKS5oYXNDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lci0tc2xpZGUtaW4nKSkge1xyXG5cdFx0XHRcdCQoY29udGFpbmVySWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyJyk7XHJcblx0XHRcdFx0JChjb250YWluZXJJZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXItLXNsaWRlLWluJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcblx0Ly9wdXQgbGlzdGVuZXJzIGRpcmVjdGx5IG9uIHRvIHRoZSBodG1sIHRhZ3NcclxuXHRhZGRMaXN0ZW5lcnMoKSB7XHJcblx0XHRsZXQgZ2FsbGVyeVNlbGVjdG9ySWRzID0gW1xyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xLWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX18xXCIsIGdhbGxlcnlOYW1lOiBcImFjdGlvblwifSwgXHJcblx0XHR7IGNvbnRhaW5lcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIsIGdhbGxlcnlTZWxlY3RvcklkOiBcIiNnYWxsZXJ5U2VsZWN0b3JfXzJcIiwgZ2FsbGVyeU5hbWU6IFwiZXZlbnRzXCJ9LCBcclxuXHRcdHsgY29udGFpbmVySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fMy1jb250YWluZXJcIiwgZ2FsbGVyeVNlbGVjdG9ySWQ6IFwiI2dhbGxlcnlTZWxlY3Rvcl9fM1wiLCBnYWxsZXJ5TmFtZTogXCJsYW5kc2NhcGVcIn0sIFxyXG5cdFx0eyBjb250YWluZXJJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180LWNvbnRhaW5lclwiLCBnYWxsZXJ5U2VsZWN0b3JJZDogXCIjZ2FsbGVyeVNlbGVjdG9yX180XCIsIGdhbGxlcnlOYW1lOiBcInBvcnRyYWl0XCJ9XHJcblx0XHRdO1xyXG5cdFx0Z2FsbGVyeVNlbGVjdG9ySWRzLmZvckVhY2goICh7IGNvbnRhaW5lcklkLCBnYWxsZXJ5U2VsZWN0b3JJZCwgZ2FsbGVyeU5hbWUgfSkgPT4ge1xyXG5cdFx0XHQkKGNvbnRhaW5lcklkKS5ob3ZlcigoKSA9PiB0aGlzLmhvdmVySW4oZ2FsbGVyeVNlbGVjdG9ySWQpLCAoKSA9PiB0aGlzLmhvdmVyT3V0KGdhbGxlcnlTZWxlY3RvcklkKSk7XHJcblx0XHRcdCQoY29udGFpbmVySWQpLmNsaWNrKCgpID0+IHRoaXMuZ29Ub0dhbGxlcnkoZ2FsbGVyeU5hbWUpKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0Z29Ub0dhbGxlcnkoZ2FsbGVyeSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2VkIGdvVG9HYWxsZXJ5IG9uIFwiKyBnYWxsZXJ5KTtcclxuXHRcdHRoaXMucHJvcHMudW5sb2FkX3NsaWRlcygpO1xyXG5cdFx0dGhpcy5wcm9wcy5jaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KTtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy5vcGVuR2FsbGVyeSgpOyB9LCA1MCk7XHJcblx0fVxyXG5cclxuXHRvcGVuR2FsbGVyeSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBvcGVuIHRoZSBnYWxsZXJ5XCIpO1xyXG5cdFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpblwiKSl7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0XHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0XHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lci0tb3BlblwiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyXCIpO1xyXG5cdFx0XHQkKFwiI2dhbGxlcnlfX2ltYWdlc1wiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlfX2ltYWdlc1wiKTtcclxuXHRcdFx0JChcIiNnYWxsZXJ5X19pbWFnZXNcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5X19pbWFnZXMtY2xvc2VkXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gY2xvc2VHYWxsZXJ5KCkge1xyXG5cdC8vIFx0aWYoJChcIiNtYWluXCIpLmhhc0NsYXNzKFwibWFpbi0tZ2FsbGVyeVwiKSl7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW5cIik7XHJcblx0Ly8gXHRcdCQoXCIjbWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tLWdhbGxlcnlcIik7XHJcblx0Ly8gXHRcdCQoXCIjZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKTtcclxuXHQvLyBcdFx0JChcIiNnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImdhbGxlcnlTZWxlY3Rvcl9fY29udGFpbmVyLS1vcGVuXCIpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdGhvdmVySW4oaWQpIHtcclxuXHRcdCQoaWQpLnRvZ2dsZUNsYXNzKCdnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tLWhvdmVyJyk7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdH1cclxuXHJcblxyXG5cdGhvdmVyT3V0KGlkKSB7XHJcblx0XHQkKGlkKS50b2dnbGVDbGFzcygnZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLS1zbGlkZS1pbicpO1xyXG5cdFx0JChpZCkudG9nZ2xlQ2xhc3MoJ2dhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi0taG92ZXInKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX2NvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX19jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fMS1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIEFjdGlvbiBHYWxsZXJ5XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzFcIj5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgIDxwIGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fdGV4dFwiPkFjdGlvbjwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb24tY29udGFpbmVyXCIgaWQ9XCJnYWxsZXJ5U2VsZWN0b3JfXzItY29udGFpbmVyXCIgdGl0bGU9XCJWaWV3IFRoZSBFdmVudHMgR2FsbGVyeVwiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvblwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18yXCI+XHJcblx0XHRcdCAgICBcdDwvZGl2PlxyXG5cdFx0XHQgICAgXHQ8cCBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3RleHRcIj5FdmVudHM8L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX19zZWN0aW9uLWNvbnRhaW5lclwiIGlkPVwiZ2FsbGVyeVNlbGVjdG9yX18zLWNvbnRhaW5lclwiIHRpdGxlPVwiVmlldyBUaGUgTGFuZHNjYXBlIEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fM1wiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+TGFuZHNjYXBlPC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlTZWxlY3Rvcl9fc2VjdGlvbi1jb250YWluZXJcIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNC1jb250YWluZXJcIiB0aXRsZT1cIlZpZXcgVGhlIFBvcnRyYWl0IEdhbGxlcnlcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5U2VsZWN0b3JfX3NlY3Rpb25cIiBpZD1cImdhbGxlcnlTZWxlY3Rvcl9fNFwiPlxyXG5cdFx0XHQgICAgXHQ8L2Rpdj5cclxuXHRcdFx0ICAgIFx0PHAgY2xhc3NOYW1lPVwiZ2FsbGVyeVNlbGVjdG9yX190ZXh0XCI+UG9ydGFpdDwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5U2VsZWN0b3I6IHN0YXRlLmdhbGxlcnlTZWxlY3RvclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEdhbGxlcnlTZWxlY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9BY3Rpb25zIGltcG9ydHNcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2hlYWRlcl9hY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bW9iaWxlTWVudTogZmFsc2UsXHJcblx0XHR9XHJcblx0XHR0aGlzLmhhbmRsZU1lbnVDbGljayA9IHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlYWRlciBwcm9wcyBhcmUgJywgdGhpcy5wcm9wcyk7XHJcblxyXG5cdH1cclxuXHJcblx0aGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IHRydWUpe1xyXG5cdFx0XHR0aGlzLnRvZ2dsZU1vYmlsZU1lbnVPdXQoKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNZW51Q2xpY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbW9iaWxlTWVudSBjbGlja2VkJyk7XHJcblx0XHRpZih0aGlzLnByb3BzLmhlYWRlci5tb2JpbGVNZW51ID09PSB0cnVlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51T3V0KCk7XHJcblx0XHRcdHRoaXMucHJvcHMubW9iaWxlX2hlYWRlcl9zdGF0dXMoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMucHJvcHMuaGVhZGVyLm1vYmlsZU1lbnUgPT09IGZhbHNlKXtcclxuXHRcdFx0dGhpcy50b2dnbGVNb2JpbGVNZW51SW4oKTtcclxuXHRcdFx0dGhpcy5wcm9wcy5tb2JpbGVfaGVhZGVyX3N0YXR1cyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVJbigpIHtcclxuXHRcdCQoJyNoZWFkZXJfX21vYmlsZS1uYXYnKS50b2dnbGVDbGFzcygnaGVhZGVyX19tb2JpbGUtbmF2LS1zbGlkZS1pbicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYnKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZU1vYmlsZU1lbnVPdXQoKSB7XHJcblx0XHQkKCcjaGVhZGVyX19tb2JpbGUtbmF2JykudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9fbW9iaWxlLW5hdicpO1xyXG5cdFx0JCgnI2hlYWRlcl9fbW9iaWxlLW5hdicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21vYmlsZS1uYXYtLXNsaWRlLWluJyk7XHJcblx0fVxyXG4gXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uTW91c2VMZWF2ZT17KCk9PiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUoKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19icmFuZC1saW5rXCIgaWQ9XCJoZWFkZXJfX2JyYW5kLWxpbmtcIiBleGFjdCB0bz1cIi9cIiB0aXRsZT1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy5cIj5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJoZWFkZXJfX2JyYW5kLWxvZ29cIiBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvbG9nb3Mvc2l0ZS1sb2dvMi5zdmdcIil9IGFsdD1cIkJva2VoIFBob3RvZ3JhcGh5IEluYy4gbG9nb1wiIC8+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlcl9fYnJhbmQtbmFtZVwiPkJva2VoIFBob3RvZ3JhcGh5PC9wPlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbWVudS1pY29uIGZhcyBmYS1iYXJzXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVNZW51Q2xpY2soKX0+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oZWFkZXIubGlua0luZm8ubWFwKCh7IGtleSwgcGF0aCwgbmFtZSB9KSA9PiA8bGkga2V5PXtrZXl9PiA8TmF2TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCIgZXhhY3QgdG89e3BhdGh9PntuYW1lfTwvTmF2TGluaz48L2xpPil9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDxuYXYgaWQ9XCJoZWFkZXJfX21vYmlsZS1uYXZcIiBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1uYXZcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX21vYmlsZS1saW5rLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGVyLmxpbmtJbmZvLm1hcCgoeyBrZXksIHBhdGgsIG5hbWUgfSkgPT4gPGxpIGtleT17YG1vYmlsZS0ke2tleX1gfT4gPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19tb2JpbGUtbGlua3NcIiBleGFjdCB0bz17cGF0aH0+e25hbWV9PC9OYXZMaW5rPjwvbGk+KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gc3RhdGUgPT4geyByZXR1cm4geyBoZWFkZXI6IHN0YXRlLmhlYWRlciB9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMsIG51bGwsIHtwdXJlOmZhbHNlfSkoSGVhZGVyKTsiLCIvL1JlYWN0IGltcG9ydHNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9DaXJjbGVUeXBlIGltcG9ydFxyXG5pbXBvcnQgQ2lyY2xlVHlwZSBmcm9tICdjaXJjbGV0eXBlJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRzXHJcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9ob21lX2FjdGlvbnMnO1xyXG5cclxuLy9EYXRhIGltcG9ydHNcclxuaW1wb3J0IGhvbWVTbGlkZXMgZnJvbSAnLi9kYXRhL2hvbWVTbGlkZXMnO1xyXG5cclxuLy9qUXVlcnkgaW1wb3J0XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMudXBkYXRlV2luZG93V2lkdGggPSB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMuc2xpZGVTaG93KCk7XHJcblx0XHR0aGlzLnRvZ2dsZUhvbWVNb2RpZmllck9uKCk7XHJcblx0XHR0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKCk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dXaWR0aCk7XHJcblx0XHRuZXcgQ2lyY2xlVHlwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZV9fd2VsY29tZS10ZXh0JykpLnJhZGl1cyg2MDApO1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4geyBjb25zb2xlLmxvZygnSG9tZSBwcm9wcyBhcmU6ICcsdGhpcy5wcm9wcyk7IH0sIDE1MDAgKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJVbm1vdW50ZWQgQ29tcG9uZW50XCIpO1xyXG5cdFx0dGhpcy50b2dnbGVIb21lTW9kaWZpZXJPZmYoKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcclxuXHRcdHRoaXMuc3RvcFNsaWRlU2hvdygpO1xyXG5cdFx0JChcIiNwYWdlLXdyYXBwZXJcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJcIik7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVIb21lTW9kaWZpZXJPbigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUhvbWVNb2RpZmllck9mZigpIHtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4nKTtcclxuXHRcdCQoJyNtYWluJykudG9nZ2xlQ2xhc3MoJ21haW4tLWhvbWUnKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpbmRvd1dpZHRoKCkge1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZV93aW5kb3dfd2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNsaWRlU2hvdygpIHtcclxuXHRcdGxldCB7IGludGVydmFsVGltZXIgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHRcdCQoXCIjcGFnZS13cmFwcGVyXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtob21lU2xpZGVzWzBdLmltZ1NyY30pYCk7XHJcblx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7XHJcblx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7XHJcblx0XHQvL3JlbW92ZSBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHQkKFwiI2hvbWVfX2ZpbHRlci1ib3hcIikudG9nZ2xlQ2xhc3MoXCJob21lX19maWx0ZXItYm94XCIpO1xyXG5cdFx0Ly8gJChcIiNwYWdlLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJwYWdlLXdyYXBwZXJcIik7XHJcblx0XHRsZXQgY291bnQgPSAxXHJcblx0XHRjb25zb2xlLmxvZygnc2xpZGVzaG93IHN0YXJ0aW5nJyk7XHJcblx0XHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKGNvdW50ID09IGhvbWVTbGlkZXMubGVuZ3RoKXtcclxuXHRcdFx0XHRjb3VudCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGltYWdlID0gaG9tZVNsaWRlc1tjb3VudF0uaW1nU3JjO1xyXG5cdFx0XHRpZih0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGNvdW50KytcclxuXHRcdFx0XHQvL2FkZCBob21lX19maWx0ZXItYm94IGNsYXNzXHJcblx0XHRcdFx0JChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTtcclxuXHRcdFx0XHQvLyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlclwiKTtcclxuXHRcdFx0XHQvL3JlbW92ZSBmbGFzaC1pbiBjbGFzc1xyXG5cdFx0XHRcdCQoXCIjaG9tZV9fZmlsdGVyLWJveFwiKS50b2dnbGVDbGFzcyhcImhvbWVfX2ZpbHRlci1ib3gtLWZsYXNoLWluXCIpO1xyXG5cdFx0XHRcdC8vICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyLS1mbGFzaC1pblwiKTtcclxuXHRcdFx0XHQvL2FkZCBmbGFzaC1pbiBjbGFzcyBhZ2FpbiBzbyB0aGF0IHRoZSBlZmZlY3Qgc3RhcnRzIG92ZXJcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveC0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI3BhZ2Utd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInBhZ2Utd3JhcHBlci0tZmxhc2gtaW5cIik7IH0sIDUpO1xyXG5cdFx0XHRcdC8vcmVtb3ZlIGhvbWVfX2ZpbHRlci1ib3ggY2xhc3NcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNob21lX19maWx0ZXItYm94XCIpLnRvZ2dsZUNsYXNzKFwiaG9tZV9fZmlsdGVyLWJveFwiKTsgfSwgNSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjcGFnZS13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwicGFnZS13cmFwcGVyXCIpOyB9LCA1KTtcclxuXHRcdFx0XHQkKFwiI3BhZ2Utd3JhcHBlclwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aW1hZ2V9KWApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb3VudCsrIHBhdXNlIGlzOiAnLCB0aGlzLnByb3BzLmhvbWUucGF1c2VTbGlkZVNob3cpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvdW50ID0gdGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KTtcclxuXHRcdFx0dGhpcy5jaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKCk7XHJcblx0XHR9LCA4NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIodGltZXIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3N0b3JlZCBpbnRlcnZhbFRpbWVyIGlzICcraW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hlY2tUb1Byb2NlZWRUb05leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IHdpbmRvd1dpZHRoLCBwYXVzZVNsaWRlU2hvdyB9ID0gdGhpcy5wcm9wcy5ob21lO1xyXG5cdFx0aWYod2luZG93V2lkdGggPCA1NzYpe1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3codHJ1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyB0b28gc21hbGwgc3RvcHBlZCBzbGlkZXNob3cgJywgdGhpcy5wcm9wcy5ob21lKTtcclxuXHRcdH1cclxuXHRcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdwYXVzZVNsaWRlU2hvd0NoZWNrIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cclxuXHQvLyBjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlKGNvdW50KSB7XHJcblx0Ly8gXHRsZXQgeyB3aW5kb3dXaWR0aCwgcGF1c2VTbGlkZVNob3cgfSA9IHRoaXMucHJvcHMuaG9tZTtcclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoIDwgNTc2KXtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2NoZWNrVG9Qcm9jZWVkVG9OZXh0U2xpZGUgd2luZG93IHRvbyBzbWFsbCBzdG9wcGVkIHNsaWRlc2hvdyAnLCB0aGlzLnByb3BzLmhvbWUpO1xyXG5cdC8vIFx0XHRyZXR1cm4gY291bnRcclxuXHQvLyBcdH1cclxuXHQvLyBcdGlmKHdpbmRvd1dpZHRoID49IDU3Nil7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjaGVja1RvUHJvY2VlZFRvTmV4dFNsaWRlIHdpbmRvdyBiaWcgZW5vdWdoIHN0YXJ0ZWQgc2xpZGVzaG93ICcsIHRoaXMucHJvcHMuaG9tZSk7XHJcblx0Ly8gXHRcdHJldHVybiBjb3VudCs9MVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cdHN0b3BTbGlkZVNob3coKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2xlYXJpbmcgaW50ZXJ2YWxUaW1lciAnK3RoaXMucHJvcHMuaG9tZS5pbnRlcnZhbFRpbWVyKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5wcm9wcy5ob21lLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5wYXVzZV9zbGlkZV9zaG93KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIiA+XHJcblx0XHRcdFx0PGRpdiBpZD1cImhvbWVfX2ZpbHRlci1ib3hcIiBjbGFzc05hbWU9XCJob21lX19maWx0ZXItYm94XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lXCI+XHJcblx0XHRcdFx0XHQ8aDEgaWQ9XCJob21lX193ZWxjb21lLXRleHRcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxoMSBpZD1cImhvbWVfX3dlbGNvbWUtdGV4dC1tb2JpbGVcIiBjbGFzc05hbWU9XCJob21lX193ZWxjb21lLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0Qm9rZWggQmVzdCBQaG90b2dyYXBoeVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhvbWU6IHN0YXRlLmhvbWVcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBpZD17cHJvcHMubG9hZGVySWR9IGNsYXNzTmFtZT1cImxvYWRlcl9fY29udGFpbmVyXCI+XHJcblx0XHRcdDxpbWcgaWQ9XCJsb2dvLWxvYWRlcjFcIiBjbGFzc05hbWU9XCJsb2FkZXJfX2xvZ29cIiBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2dvcy9sb2dvLWxvYWRlcjEuc3ZnJyl9PjwvaW1nPlxyXG5cdFx0XHQ8aW1nIGlkPVwibG9nby1sb2FkZXIyXCIgY2xhc3NOYW1lPVwibG9hZGVyX19sb2dvXCIgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9nb3MvbG9nby1sb2FkZXIyLnN2ZycpfT48L2ltZz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWR1eCBpbXBvcnRzXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vUmVhY3QtUmVkdXggaW1wb3J0c1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XHJcbmltcG9ydCBGaWxtc3RyaXAgZnJvbSAnLi9GaWxtc3RyaXAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbi8vQWN0aW9ucyBpbXBvcnRcclxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL3Byb2plY3Rvcl9hY3Rpb25zJztcclxuXHJcbmNsYXNzIFByb2plY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5kb3duQXJyb3dWaXNpYmlsaXR5KCk7XHJcblx0XHR0aGlzLnByb3BzLnVubG9hZF9zbGlkZXMoKTtcclxuXHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyhmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZFByb2plY3RvcigpO1xyXG5cdFx0fSw1MCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuYXV0b1J1blByb2plY3RvcigpO1xyXG5cdFx0fSwxMDApO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3RvciBwcm9wcyBhcmUgXCIsIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib24gdXBkYXRlIFByb2plY3RvciBwcm9wcyBhcmVcIiwgdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucHJvcHMucHJvamVjdG9yLmludGVydmFsVGltZXIpO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcChmYWxzZSk7XHJcblx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjZmlsbXN0cmlwX2NvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZpbG1zdHJpcF9jb250YWluZXItLXNsaWRlLWluXCIpO1xyXG5cdFx0XHQkKFwiI2ZpbG1zdHJpcF9jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfY29udGFpbmVyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdG5leHRTbGlkZSgpIHtcclxuXHRcdGxldCB7IGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0dGhpcy5wcm9wcy5pbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHNsaWRlcy5sZW5ndGgpO1xyXG5cdFx0Ly9kZWxheWVkIHNvIHRoYXQgcmVkdXggaGFzIHRpbWUgdG8gdXBkYXRlIHN0b3JlIGZyb20gaW5jcmVtZW50X3NsaWRlKClcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVTbGlkZVNob3coKTsgfSwgNTApO1xyXG5cdH1cclxuXHJcblxyXG5cdHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVObywgc2xpZGVzIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMucHJvcHMuZGVjcmVtZW50X3NsaWRlKGN1cnJlbnRTbGlkZU5vLCBzbGlkZXMubGVuZ3RoKTtcclxuXHRcdC8vZGVsYXllZCBzbyB0aGF0IHJlZHV4IGhhcyB0aW1lIHRvIHVwZGF0ZSBzdG9yZSBmcm9tIGRlY3JlbWVudF9zbGlkZSgpXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMudXBkYXRlU2xpZGVTaG93KCk7IH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHR1cGRhdGVTbGlkZVNob3coKSB7XHJcblx0XHRsZXQgeyBzbGlkZXMsIGN1cnJlbnRTbGlkZU5vIH0gPSB0aGlzLnByb3BzLnByb2plY3RvcjtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfY3VycmVudF9zbGlkZV9pbmZvKHNsaWRlc1tjdXJyZW50U2xpZGVOb10pO1xyXG5cdH1cclxuXHJcblxyXG5cdGxvYWRQcm9qZWN0b3IoKSB7XHJcblx0XHR0aGlzLnByb3BzLmxvYWRfbmV3X3NsaWRlcyh0aGlzLnByb3BzLnNsaWRlcyk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7IFxyXG5cdFx0XHR0aGlzLnVwZGF0ZVNsaWRlU2hvdygpOyBcclxuXHRcdH0sIDUwKTtcclxuXHR9XHJcblxyXG5cclxuXHRhdXRvUnVuUHJvamVjdG9yKCkge1xyXG5cdFx0bGV0IGludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbCggKCk9PiB7XHJcblx0XHRcdGlmKHRoaXMucHJvcHMucHJvamVjdG9yLnNsaWRlcyA9PT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0XHR0aGlzLmxvYWRQcm9qZWN0b3IoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLnByb3BzLnByb2plY3Rvci5wYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdFx0dGhpcy5uZXh0U2xpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSw2NTAwKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcik7XHJcblx0fVxyXG5cclxuXHJcblx0cGF1c2VCdXR0b25IYW5kbGVyKCkge1xyXG5cdFx0bGV0IHBhdXNlU2xpZGVTaG93ID0gdGhpcy5wcm9wcy5wcm9qZWN0b3IucGF1c2VTbGlkZVNob3c7XHJcblx0XHRpZihwYXVzZVNsaWRlU2hvdyA9PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMucHJvcHMucGF1c2Vfc2xpZGVfc2hvdyh0cnVlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnByb3BzLnBhdXNlX3NsaWRlX3Nob3coZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGRvd25BcnJvd1Zpc2liaWxpdHkoKSB7XHJcblx0XHQvL2lmIGNvbnRhaW5lciBob3VzaW5nIHRoZSBwcm9qZWN0b3IgaXMgdG9vIHNtYWxsIGRvbid0IGdpdmUgdGhlIG9wdGlvbiB0byBicmluZyB1cCB0aGUgcGhvdG8gc3RyaXBcclxuXHRcdGxldCBwcm9qZWN0b3JCb3hXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0b3InKS5vZmZzZXRXaWR0aDtcclxuXHRcdGlmKHByb2plY3RvckJveFdpZHRoIDwgNzUwKXtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGZpbG1TdHJpcEhhbmRsZXIoKSB7XHJcblx0XHRsZXQgY2FsY3VsYXRlZFdpZHRoID0gdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2xpZGVzLmxlbmd0aCoyMDArXCJweFwiO1xyXG5cdFx0dGhpcy5wcm9wcy5zaG93X2ZpbG1zdHJpcCghdGhpcy5wcm9wcy5wcm9qZWN0b3Iuc2hvd0ZpbG1zdHJpcCk7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7ICQoJyNmaWxtc3RyaXBfX2NvbnRhaW5lcicpLmNzcygnd2lkdGgnLCBjYWxjdWxhdGVkV2lkdGgpIH0sIDI1KTtcclxuXHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tZmlsbXN0cmlwLXNoaWZ0XCIpO1xyXG5cdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1zaGlmdFwiKTtcclxuXHRcdCQoXCIjZmlsbXN0cmlwX19jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmaWxtc3RyaXBfX2NvbnRhaW5lci0tc2xpZGUtaW5cIik7XHJcblx0XHQkKFwiI2ZpbG1zdHJpcF9fY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiZmlsbXN0cmlwX19jb250YWluZXJcIik7XHJcblx0fVxyXG5cclxuXHJcblx0c2hpZnRDb250cm9scygpIHtcclxuXHRcdC8vbWFrZSBzdXJlIG1vZGlmaWVkIGNsYXNzIGlzIG5vdCBvbiBiZWZvcmUgdG9nZ2xpbmdcclxuXHRcdGlmKCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikuaGFzQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdC0tc2hpZnRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHQtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKTtcclxuXHRcdFx0XHQvL0lmIGNvbnRyb2wtZG93biBpcyBpbiB1c2UgYnkgdGhlIGZpbG1zdHJpcCBsZWF2ZSBpdCBhbG9uZVxyXG5cdFx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93bi0tc2hpZnRcIik7XHJcblx0XHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dW5zaGlmdENvbnRyb2xzKCkge1xyXG5cdFx0Ly9tYWtlIHN1cmUgbW9kaWZpZWQgY2xhc3MgaXMgb24gYmVmb3JlIHRvZ2dsaW5nIGl0IG9mZlxyXG5cdFx0aWYoJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKSl7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1sZWZ0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcmlnaHRcIik7XHJcblx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLXJpZ2h0XCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLXJpZ2h0LS1zaGlmdFwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duXCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKS50b2dnbGVDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1wYXVzZVwiKTtcclxuXHRcdFx0JChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2UtLXNoaWZ0XCIpO1xyXG5cdFx0XHQvL0lmIGNvbnRyb2wtZG93biBpcyBpbiB1c2UgYnkgdGhlIGZpbG1zdHJpcCBsZWF2ZSBpdCBhbG9uZVxyXG5cdFx0XHRpZighJChcIiNwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKS5oYXNDbGFzcyhcInByb2plY3Rvcl9fY29udHJvbC1kb3duLS1maWxtc3RyaXAtc2hpZnRcIikpe1xyXG5cdFx0XHRcdCQoXCIjcHJvamVjdG9yX19jb250cm9sLWRvd25cIikudG9nZ2xlQ2xhc3MoXCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiKTtcclxuXHRcdFx0XHQkKFwiI3Byb2plY3Rvcl9fY29udHJvbC1kb3duXCIpLnRvZ2dsZUNsYXNzKFwicHJvamVjdG9yX19jb250cm9sLWRvd24tLXNoaWZ0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgeyBjdXJyZW50U2xpZGVJbmZvLCBzaG93RmlsbXN0cmlwLCBzbGlkZXMgfSA9IHRoaXMucHJvcHMucHJvamVjdG9yO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPVwicHJvamVjdG9yXCIgY2xhc3NOYW1lPVwicHJvamVjdG9yXCIgb25Nb3VzZUVudGVyPXsgKCkgPT4gdGhpcy5zaGlmdENvbnRyb2xzKCl9IG9uTW91c2VMZWF2ZT17ICgpID0+IHRoaXMudW5zaGlmdENvbnRyb2xzKCl9PlxyXG5cdFx0XHRcdHtjdXJyZW50U2xpZGVJbmZvID8gXHJcblx0XHRcdFx0XHQ8U2xpZGUgcGhvdG9JbmZvPXtjdXJyZW50U2xpZGVJbmZvfSBcclxuXHRcdFx0XHRcdFx0c3R5bGVGb3I9e3RoaXMucHJvcHMuc3R5bGVGb3J9IFxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0e3NsaWRlcyA/XHJcblx0XHRcdFx0XHQ8RmlsbXN0cmlwIHNsaWRlcz17c2xpZGVzfS8+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzcGFuIGlkPVwicHJvamVjdG9yX19jb250cm9sLWxlZnRcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtbGVmdFwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPmxlZnQgYXJyb3c8L2I+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJldmlvdXNTbGlkZSgpfSA+PC9pPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBpZD1cInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwicHJvamVjdG9yX19jb250cm9sLXNydFwiPnJpZ2h0IGFycm93PC9iPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgb25DbGljaz17KCkgPT4gdGhpcy5uZXh0U2xpZGUoKX0gPjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtZG93blwiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1kb3duXCI+XHJcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtc3J0XCI+ZG93biBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy5maWxtU3RyaXBIYW5kbGVyKCl9PjwvaT5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gaWQ9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIiBjbGFzc05hbWU9XCJwcm9qZWN0b3JfX2NvbnRyb2wtcGF1c2VcIj5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInByb2plY3Rvcl9fY29udHJvbC1zcnRcIj5wYXVzZSBhcnJvdzwvYj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYXVzZS1jaXJjbGVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBhdXNlQnV0dG9uSGFuZGxlcigpfT48L2k+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHsgcmV0dXJuIHsgcHJvamVjdG9yOiBzdGF0ZS5wcm9qZWN0b3J9IH1cclxuXHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHsgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKFByb2plY3Rvcik7IiwiLy9SZWFjdCBpbXBvcnRzXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1JlY3QgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcblxyXG5cclxuY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnNldFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR0aGlzLnJlbW92ZVN0eWxlcygpO1xyXG5cdH1cclxuXHJcblx0c2V0U3R5bGVzKCkge1xyXG5cdFx0bGV0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcy5waG90b0luZm87XHJcblx0XHRsZXQgc3R5bGVGb3IgPSB0aGlzLnByb3BzLnN0eWxlRm9yO1xyXG5cdFx0Ly9zZXQgc3R5bGVzIGZvciB0aGUgZnJhbWVcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19mcmFtZWApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fZnJhbWUtLSR7c3R5bGVGb3J9YCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fZnJhbWVgKS50b2dnbGVDbGFzcyhgc2xpZGVfX2ZyYW1lYCk7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBwaG90b1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX3Bob3RvYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19waG90by0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdCQoYCMke25hbWV9LXNsaWRlX19waG90b2ApLnRvZ2dsZUNsYXNzKGBzbGlkZV9fcGhvdG9gKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVN0eWxlcygpIHtcclxuXHRcdGxldCB7IG5hbWUgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0bGV0IHsgc3R5bGVGb3IgfSA9IHRoaXMucHJvcHMuc3R5bGVGb3I7XHJcblx0XHQvL3NldCBzdHlsZXMgZm9yIHRoZSBmcmFtZVxyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZWApO1xyXG5cdFx0JChgIyR7bmFtZX0tc2xpZGVfX2ZyYW1lYCkudG9nZ2xlQ2xhc3MoYHNsaWRlX19mcmFtZS0tJHtzdHlsZUZvcn1gKTtcclxuXHRcdC8vc2V0IHN0eWxlcyBmb3IgdGhlIHBob3RvXHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvYCk7XHJcblx0XHQkKGAjJHtuYW1lfS1zbGlkZV9fcGhvdG9gKS50b2dnbGVDbGFzcyhgc2xpZGVfX3Bob3RvLS0ke3N0eWxlRm9yfWApO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlSW1hZ2VMb2FkZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbWFnZUVycm9yZWQoKSB7XHJcblx0XHQkKFwiI3NsaWRlX19sb2FkZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHsgbmFtZSwgaW1hZ2UgfSA9IHRoaXMucHJvcHMucGhvdG9JbmZvO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGlkPXtgJHtuYW1lfS1zbGlkZV9fZnJhbWVgfSBjbGFzc05hbWU9XCJzbGlkZV9fZnJhbWVcIj5cclxuXHRcdFx0XHQ8aW1nIGlkPXtgJHtuYW1lfS1zbGlkZV9fcGhvdG9gfSBjbGFzc05hbWU9XCJzbGlkZV9fcGhvdG9cIiBcclxuXHRcdFx0XHRcdHNyYz17aW1hZ2V9ICBcclxuXHRcdFx0XHRcdG9uTG9hZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZC5iaW5kKHRoaXMpfSBcclxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlSW1hZ2VFcnJvcmVkLmJpbmQodGhpcyl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvaW1nPlxyXG5cdFx0XHRcdDxMb2FkZXIgbG9hZGVySWQ9e1wic2xpZGVfX2xvYWRlclwifS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyIsIi8vUmVhY3QgaW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuXHJcbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8cD5NeSBMb2FkZXIgaXNuJ3QgaXQgZ3JlYXQ/PC9wPlxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRfcGhvdG8obmFtZSwgaW1hZ2UsIGN1cnJlbnRTbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0FERF9QSE9UTycsXHJcblx0XHRjdXJyZW50U2xpZGVzLFxyXG5cdFx0cGhvdG9JbmZvOiB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGltYWdlXHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX21lc3NhZ2UobWVzc2FnZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfTUVTU0FHRScsXHJcblx0XHRtZXNzYWdlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RfY2hlY2socmVkaXJlY3QpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1JFRElSRUNUX0NIRUNLJyxcclxuXHRcdHJlZGlyZWN0XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3RpbWVyKHRpbWVyKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTVE9SRV9USU1FUicsXHJcblx0XHR0aW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX3RpbWVyKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0xFQVJfVElNRVInLFxyXG5cdFx0dGltZXI6IGZhbHNlXHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZF9waG90byhuYW1lLCBpbWFnZSwgY3VycmVudFNsaWRlcykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQUREX1BIT1RPJyxcclxuXHRcdGN1cnJlbnRTbGlkZXMsXHJcblx0XHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aW1hZ2VcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VfZ2FsbGVyeShnYWxsZXJ5KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSE9PU0VfR0FMTEVSWScsXHJcblx0XHRnYWxsZXJ5XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1vYmlsZV9oZWFkZXJfc3RhdHVzKG1vYmlsZU1lbnUpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ01PQklMRV9IRUFERVJfU1RBVFVTJyxcclxuXHRcdG1vYmlsZU1lbnVcclxuXHR9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3dpbmRvd193aWR0aCh3aW5kb3dXaWR0aCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfV0lORE9XX1dJRFRIJyxcclxuXHRcdHdpbmRvd1dpZHRoXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Vfc2xpZGVfc2hvdyhwYXVzZVNsaWRlU2hvdykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnUEFVU0VfU0xJREVfU0hPVycsXHJcblx0XHRwYXVzZVNsaWRlU2hvd1xyXG5cdH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzdG9yZV9jdXJyZW50X3NsaWRlX2luZm8oY3VycmVudFNsaWRlSW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfQ1VSUkVOVF9TTElERV9JTkZPJyxcclxuXHRcdGN1cnJlbnRTbGlkZUluZm9cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHRvdGFsTm9TbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0lOQ1JFTUVOVF9TTElERScsXHJcblx0XHRjdXJyZW50U2xpZGVObyxcclxuXHRcdHRvdGFsTm9TbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyZW1lbnRfc2xpZGUoY3VycmVudFNsaWRlTm8sIHRvdGFsTm9TbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0RFQ1JFTUVOVF9TTElERScsXHJcblx0XHRjdXJyZW50U2xpZGVObyxcclxuXHRcdHRvdGFsTm9TbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXVzZV9zbGlkZV9zaG93KHBhdXNlU2xpZGVTaG93KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdQQVVTRV9TTElERV9TSE9XJyxcclxuXHRcdHBhdXNlU2xpZGVTaG93XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfdGltZXIoaW50ZXJ2YWxUaW1lcikge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU1RPUkVfVElNRVInLFxyXG5cdFx0aW50ZXJ2YWxUaW1lclxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRfbmV3X3NsaWRlcyhzbGlkZXMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPQURfTkVXX1NMSURFUycsXHJcblx0XHRzbGlkZXNcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWRfc2xpZGVzKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnVU5MT0FEX1NMSURFUycsXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd19maWxtc3RyaXAoc2hvd0ZpbG1zdHJpcCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU0hPV19GSUxNU1RSSVAnLFxyXG5cdFx0c2hvd0ZpbG1zdHJpcFxyXG5cdH1cclxufSIsImNvbnN0IGdhbGxlcnlTbGlkZXMgPSB7XHJcblx0YWN0aW9uOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZGF5bGlnaHRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9kYXlsaWdodC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYXQtdGhlLXRyYWNrXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vYXQtdGhlLXRyYWNrLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibW90b3Jjcm9zc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL21vdG9yY3Jvc3MuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ1bHRpbWF0ZS1zYXZlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vdWx0aW1hdGUtc2F2ZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNvY2Nlci1tYXRjaFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NvY2Nlci1tYXRjaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImxlYXAtb2YtZmFpdGhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9sZWFwLW9mLWZhaXRoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiaGlnaC1qdW1wXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vaGlnaC1qdW1wLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwia2ljay1mbGlwXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24va2ljay1mbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmlnLXdhdmUtc3VyZmluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JpZy13YXZlLXN1cmZpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJza2F0ZS1wYXJrXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vc2thdGUtcGFyay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNraWluZ1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NraWluZy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInB1ZGRsZS1qdW1waW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9hY3Rpb24vcHVkZGxlLWp1bXBpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWFjaC1iYWNrZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL2JlYWNoLWJhY2tmbGlwLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3VyZi1zcGxhc2hcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2FjdGlvbi9zdXJmLXNwbGFzaC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInNjaHJvZGluZ2Vycy1raWNrZmxpcFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvYWN0aW9uL3NjaHJvZGluZ2Vycy1raWNrZmxpcC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0ZXZlbnRzOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicGFydHktZGF5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcGFydHktZGF5LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JyaWRlLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYnJpZGUtY2xvdWRzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYnJpZGUtY2xvdWRzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiYWJ5LXNsZWVwaW5nLWJhYnktYmFieS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmFieS1zbGVlcGluZy1iYWJ5LWJhYnktZ2lybC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmlydGhkYXktZ2lybFwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL2JpcnRoZGF5LWdpcmwuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCI0dGgtYmlydGhkYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy80dGgtYmlydGhkYXkuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJwcmVnbmFuY3ktYW5ub3VuY2VtZW50XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvcHJlZ25hbmN5LWFubm91bmNlbWVudC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImdyYWR1YXRpbmctY2xhc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9ncmFkdWF0aW5nLWNsYXNzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmlydGgtYW5ub3VuY2VtZW50XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvYmlydGgtYW5ub3VuY2VtZW50LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicGFydHktZnJpZW5kc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3BhcnR5LWZyaWVuZHMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJ3ZWRkaW5nLWRheVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvZXZlbnRzL3dlZGRpbmctZGF5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZmlyc3QtYmlydGhkYXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9maXJzdC1iaXJ0aGRheS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImdyYWR1YXRlLWNlbGVicmF0aW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9ldmVudHMvZ3JhZHVhdGUtY2VsZWJyYXRpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJicmlkZS1hbmQtZ3Jvb21cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2V2ZW50cy9icmlkZS1hbmQtZ3Jvb20uanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGxhbmRzY2FwZTogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImFyY2hlcy1uYXRpb25hbC1wYXJrXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvYXJjaGVzLW5hdGlvbmFsLXBhcmsuanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImJyb29rbHluLWJyaWRnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Jyb29rbHluLWJyaWRnZS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2FsbS1jbG91ZHNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9jYWxtLWNsb3Vkcy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYm9hdGhvdXNlLWNvdHRhZ2VcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9ib2F0aG91c2UtY290dGFnZS5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiZGV2aWxzLWJyaWRnZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2Rldmlscy1icmlkZ2UuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJsYWtlLXBlaXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9sYWtlLXBlaXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdW5zZXQtcG9wcGllc1wiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1wb3BwaWVzLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJzdW5zZXQtcGllclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3N1bnNldC1waWVyLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwicml2ZXItcmVmbGVjdGlvblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL3JpdmVyLXJlZmxlY3Rpb24uanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJkdXNrLWluLWFmcmljYVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL2R1c2staW4tYWZyaWNhLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibWFyc2gtcGVpclwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL21hcnNoLXBlaXIuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJueWMtc2t5bGluZVwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwibmlnaHQtZG9scGhpbnNcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL2xhbmRzY2FwZS9uaWdodC1kb2xwaGlucy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImZsYXRpcm9uLWJ1aWxkaW5nXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvZmxhdGlyb24tYnVpbGRpbmcuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJtb3VudGFpbi1sYWtlXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvbW91bnRhaW4tbGFrZS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIm55Yy1za3lsaW5lMlwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvbGFuZHNjYXBlL255Yy1za3lsaW5lMi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcInB1cnBsZS1mbG93ZXJzXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9sYW5kc2NhcGUvcHVycGxlLWZsb3dlcnMuanBlZycpLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHBvcnRyYWl0OiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmVhdXRpZnVsLWJsdXJcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JlYXV0aWZ1bC1ibHVyLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJiZWF1dGlmdWwtY2FzdWFsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9iZWF1dGlmdWwtY2FzdWFsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibG9uZGUtY2xvc2UtdXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Jsb25kZS1jbG9zZS11cC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2Fybml2YWwtbmlnaHRcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nhcm5pdmFsLW5pZ2h0LmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJoYXBweS1naXJsXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9oYXBweS1naXJsLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibGFjay1hbmQtd2hpdGUtZ3V5XCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibGFjay1hbmQtd2hpdGUtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwieW91bmctbW9ua3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3lvdW5nLW1vbmtzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiYmxvbmRlLWNsb3NlLXVwLWJva2VoXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9ibG9uZGUtY2xvc2UtdXAtYm9rZWguanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJjbG9zZS11cC1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLWd1eS5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImhpZGluZy13b21hblwiLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcG9ydHJhaXQvaGlkaW5nLXdvbWFuLmpwZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJibGFjay1hbmQtd2hpdGUtY2xvc2UtdXAtd29tYW5cIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2JsYWNrLWFuZC13aGl0ZS1jbG9zZS11cC13b21hbi5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcImdpcmwtcmFiYml0LWZyaWVuZHNoaXBcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2dpcmwtcmFiYml0LWZyaWVuZHNoaXAuanBlZycpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJyZWQtaGFpcmVkLWNoaWxkXCIsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9wb3J0cmFpdC9yZWQtaGFpcmVkLWNoaWxkLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3VpdC1ndXlcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQtZ3V5LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwid29tYW4tZHJlc3NcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3dvbWFuLWRyZXNzLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiY2xvc2UtdXAtd29tYW4tYm9rZWhcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L2Nsb3NlLXVwLXdvbWFuLWJva2VoLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwic3VpdDFcIixcclxuXHRcdFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3BvcnRyYWl0L3N1aXQxLmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeVNsaWRlczsiLCJcclxuXHJcbmNvbnN0IGhvbWVTbGlkZXMgPSBbXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWFuZ2xlLmpwZycpLFxyXG5cdFx0fSxcdFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvc3RhcnktbGVucy5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLXJlZmxlY3Rpb24uanBnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGVucy1jbG9zZS11cC5qcGcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9sZW5zLW9uLWdyb3VuZC5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvbGFuZHNjYXBlLXNob290LmpwZWcnKSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZ1NyYzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HYWxsZXJpZXMvaG9tZS9hcGV0dXJlLWxpZ2h0cy5qcGVnJyksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWdTcmM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR2FsbGVyaWVzL2hvbWUvYXQtd29yay5qcGVnJyksXHJcblx0XHR9LFxyXG5cdF1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVTbGlkZXM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNsaWRlczogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYWJvdmUtdGhlLWNsb3VkcycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYWJvdmUtdGhlLWNsb3Vkcy5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdiZWFjaC1zaG9vdCcsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYmVhY2gtc2hvb3QuanBnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdmaWVsZC1zaG9vdCcsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvZmllbGQtc2hvb3QuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnaW4tYW5kLW91dC1vZi1mb2N1cycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvaW4tYW5kLW91dC1vZi1mb2N1cy5qcGVnJylcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdzbW9rZS1jbG91ZCcsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvc21va2UtY2xvdWQuanBlZycpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYXQtZHVzaycsXHJcblx0XHRcdGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dhbGxlcmllcy9waG90b2dyYXBoZXIvYXQtZHVzay5qcGVnJylcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwaG90b0luZm86IHtcclxuXHRcdFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdFx0XHRpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYWxsZXJpZXMvcGhvdG9ncmFwaGVyL2Fib3ZlLXRoZS1jbG91ZHMuanBlZycpXHJcblx0XHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBRERfUEhPVE8nOlxyXG5cdFx0XHRsZXQgcGhvdG9JbmZvID0gYWN0aW9uLnBob3RvSW5mbztcclxuXHRcdFx0bGV0IHNsaWRlcyA9IFsgLi4uYWN0aW9ucy5jdXJyZW50U2xpZGVzIF07XHJcblx0XHRcdHNsaWRlcy5wdXNoKHBob3RvSW5mbyk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWVzc2FnZTogWycnLCcnXSxcclxuXHRyZWRpcmVjdDogZmFsc2VcclxuXHR9O1xyXG5cclxuZnVuY3Rpb24gY29udGFjdF9yZWR1Y2VycyhzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfTUVTU0FHRSc6XHJcblx0XHRcdGxldCBtZXNzYWdlID0gYWN0aW9uLm1lc3NhZ2U7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBtZXNzYWdlIH1cclxuXHRcdGNhc2UgJ1JFRElSRUNUX0NIRUNLJzpcclxuXHRcdFx0bGV0IHJlZGlyZWN0ID0gYWN0aW9uLnJlZGlyZWN0O1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVkaXJlY3QgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdF9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c29jaWFsTWVkaWFMaW5rcyA6IFtcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0bmFtZTogXCJGYWNlQm9va1wiLCBcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Jva2VoYmVzdHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1mYWNlYm9vay1zcXVhcmVcIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiMzQjU5OThcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjMjQ1YWNkXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiRmxpY2tyXCIsIFxyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL3d3dy5mbGlja3IuY29tL3Bob3Rvcy9kYXZpZF9ib2tlaC9cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZsaWNrclwiLFxyXG5cdFx0XHRcdFx0Zm9udF9jb2xvcjogXCIjRkZGRkZGXCIsXHJcblx0XHRcdFx0XHRiZ19jb2xvcjE6IFwiI0ZFMDg4M1wiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IyOiBcIiMxMjhmZGNcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogXCJJbnN0YWdyYW1cIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYm9rZWhiZXN0cGhvdG9ncmFwaHkvXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1pbnN0YWdyYW1cIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiNmMTc1MzBcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjN2EzOGFiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiTGlua2VkSW5cIiwgXHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYXZpZGJva2VoL1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtbGlua2VkaW5cIixcclxuXHRcdFx0XHRcdGZvbnRfY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG5cdFx0XHRcdFx0YmdfY29sb3IxOiBcIiMwMDc3YjVcIixcclxuXHRcdFx0XHRcdGJnX2NvbG9yMjogXCIjNTZiOWVlXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9vdGVyX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICgnU0VUX0ZPT1RFUl9MSU5LUycpOlxyXG5cdFx0XHRsZXQgbGlua3MgPSBhY3Rpb24ubGlua3M7XHJcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGxpbmtzfTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3Rlcl9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VycyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTVE9SRV9USU1FUic6XHJcblx0XHRcdGxldCB0aW1lciA9IGFjdGlvbi50aW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHRpbWVyIH07XHJcblx0XHRjYXNlICdDTEVBUl9USU1FUic6XHJcblx0XHRcdHRpbWVyID0gYWN0aW9uLnRpbWVyO1xyXG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCB0aW1lcn1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbGxlcnlTZWxlY3Rvcl9yZWR1Y2VyczsiLCJpbXBvcnQgZ2FsbGVyeVNsaWRlcyBmcm9tICcuLi9kYXRhL2dhbGxlcnlTbGlkZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cclxuXHJcbmZ1bmN0aW9uIGFib3V0X3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBRERfUEhPVE8nOlxyXG5cdFx0XHRsZXQgcGhvdG9JbmZvID0gYWN0aW9uLnBob3RvSW5mbztcclxuXHRcdFx0bGV0IHNsaWRlcyA9IFsgLi4uYWN0aW9ucy5jdXJyZW50U2xpZGVzIF07XHJcblx0XHRcdHNsaWRlcy5wdXNoKHBob3RvSW5mbyk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMgfVxyXG5cdFx0Y2FzZSAnQ0hPT1NFX0dBTExFUlknOlxyXG5cdFx0XHRsZXQgZ2FsbGVyeSA9IGFjdGlvbi5nYWxsZXJ5O1xyXG5cdFx0XHRzbGlkZXMgPSBbIC4uLmdhbGxlcnlTbGlkZXNbZ2FsbGVyeV0gXVxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2xpZGVzIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGxpbmtJbmZvOiBbXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstaG9tZScsIFxyXG5cdFx0XHRwYXRoOiAnLycsIFxyXG5cdFx0XHRuYW1lOiAnSG9tZSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstZ2FsbGVyeScsIFxyXG5cdFx0XHRwYXRoOiAnL2dhbGxlcnknLCBcclxuXHRcdFx0bmFtZTogJ1Bob3RvIEdhbGxlcnknXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRrZXk6ICduYXZMaW5rLWFib3V0JywgXHJcblx0XHRcdHBhdGg6ICcvYWJvdXQnLCBcclxuXHRcdFx0bmFtZTogJ0Fib3V0IEJva2VoJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0a2V5OiAnbmF2TGluay1jb250YWN0JywgXHJcblx0XHRcdHBhdGg6ICcvY29udGFjdCcsIFxyXG5cdFx0XHRuYW1lOiAnQ29udGFjdCBVcydcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGtleTogJ25hdkxpbmstdGVzdCcsIFxyXG5cdFx0XHRwYXRoOiAnL3Rlc3QnLCBcclxuXHRcdFx0bmFtZTogJ1Rlc3QgUGFnZSdcclxuXHRcdH0sXHJcblx0XSxcclxuXHRtb2JpbGVNZW51OiBmYWxzZSxcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyX3JlZHVjZXJzKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdNT0JJTEVfSEVBREVSX1NUQVRVUyc6XHJcblx0XHRcdGxldCBtb2JpbGVNZW51ID0gYWN0aW9uLm1vYmlsZU1lbnVcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIG1vYmlsZU1lbnUgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJfcmVkdWNlcnM7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHBhdXNlU2xpZGVTaG93OiBmYWxzZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhvbWVfcmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU1RPUkVfVElNRVInOlxyXG5cdFx0XHRsZXQgaW50ZXJ2YWxUaW1lciA9IGFjdGlvbi5pbnRlcnZhbFRpbWVyO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgaW50ZXJ2YWxUaW1lciB9O1xyXG5cdFx0Y2FzZSAnU1RPUkVfV0lORE9XX1dJRFRIJzpcclxuXHRcdFx0bGV0IHdpbmRvd1dpZHRoID0gYWN0aW9uLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgd2luZG93V2lkdGggfTtcclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3c7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXVzZVNsaWRlU2hvdyB9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZV9yZWR1Y2VyczsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0Y3VycmVudFNsaWRlTm86IDAsXHJcblx0cGF1c2VTbGlkZVNob3c6IGZhbHNlLFxyXG5cdHNob3dGaWxtc3RyaXA6IGZhbHNlLFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0b3JfcmVkdWNlcnMoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NUT1JFX0NVUlJFTlRfU0xJREVfSU5GTyc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVJbmZvID0gYWN0aW9uLmN1cnJlbnRTbGlkZUluZm87XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVJbmZvIH1cclxuXHRcdGNhc2UgJ0lOQ1JFTUVOVF9TTElERSc6XHJcblx0XHRcdGxldCBjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0bGV0IHRvdGFsTm9TbGlkZXMgPSBhY3Rpb24udG90YWxOb1NsaWRlcztcclxuXHRcdFx0aWYoY3VycmVudFNsaWRlTm8gPT0gdG90YWxOb1NsaWRlcyAtIDEpe1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50U2xpZGVObyB9XHJcblx0XHRjYXNlICdERUNSRU1FTlRfU0xJREUnOlxyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IGFjdGlvbi5jdXJyZW50U2xpZGVObztcclxuXHRcdFx0dG90YWxOb1NsaWRlcyA9IGFjdGlvbi50b3RhbE5vU2xpZGVzO1xyXG5cdFx0XHRpZihjdXJyZW50U2xpZGVObyA9PSAwKXtcclxuXHRcdFx0XHRjdXJyZW50U2xpZGVObyA9IHRvdGFsTm9TbGlkZXMgLSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRTbGlkZU5vIC09IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRTbGlkZU5vIH1cclxuXHRcdGNhc2UgJ1BBVVNFX1NMSURFX1NIT1cnOlxyXG5cdFx0XHRsZXQgcGF1c2VTbGlkZVNob3cgPSBhY3Rpb24ucGF1c2VTbGlkZVNob3dcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBhdXNlU2xpZGVTaG93IH1cclxuXHRcdGNhc2UgJ1NUT1JFX1RJTUVSJzpcclxuXHRcdFx0bGV0IGludGVydmFsVGltZXIgPSBhY3Rpb24uaW50ZXJ2YWxUaW1lcjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGludGVydmFsVGltZXIgfTtcclxuXHRcdGNhc2UgJ0xPQURfTkVXX1NMSURFUyc6XHJcblx0XHRcdGxldCBzbGlkZXMgPSBhY3Rpb24uc2xpZGVzO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVJbmZvID0gc2xpZGVzWzBdO1xyXG5cdFx0XHRjdXJyZW50U2xpZGVObyA9IDAgXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzbGlkZXMsIGN1cnJlbnRTbGlkZUluZm8sICBjdXJyZW50U2xpZGVOb307XHJcblx0XHRjYXNlICdVTkxPQURfU0xJREVTJzpcclxuXHRcdFx0bGV0IHRlbXBTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRcdFx0ZGVsZXRlIHRlbXBTdGF0ZVsnY3VycmVudFNsaWRlSW5mbyddO1xyXG5cdFx0XHRkZWxldGUgdGVtcFN0YXRlWydzbGlkZXMnXTtcclxuXHRcdFx0cmV0dXJuIHsgLi4udGVtcFN0YXRlIH07XHJcblx0XHRjYXNlICdTSE9XX0ZJTE1TVFJJUCc6XHJcblx0XHRcdGxldCBzaG93RmlsbXN0cmlwID0gYWN0aW9uLnNob3dGaWxtc3RyaXA7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBzaG93RmlsbXN0cmlwIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcblx0Ly8gY3VycmVudFNsaWRlSW5mbzoge1xyXG5cdC8vIFx0bmFtZTogJ2Fib3ZlLXRoZS1jbG91ZHMnLFxyXG5cdC8vIFx0aW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyaWVzL3Bob3RvZ3JhcGhlci9hYm92ZS10aGUtY2xvdWRzLmpwZWcnKVxyXG5cdC8vIH0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0b3JfcmVkdWNlcnM7IiwiLy9SZWFjdCBDb21wb25lbnQgaW1wb3J0c1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4vVGVzdCc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvJyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBIb21lXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2luZGV4Lmh0bWwnLFxyXG5cdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRjb21wb25lbnQ6IEhvbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0ZXhhY3Q6IGZhbHNlLFxyXG5cdFx0Y29tcG9uZW50OiBBYm91dFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9jb250YWN0JyxcclxuXHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0Y29tcG9uZW50OiBDb250YWN0XHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2NvbnRhY3QvOnN0YXR1cycsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IENvbnRhY3RcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZ2FsbGVyeScsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IEdhbGxlcnlcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvdGVzdCcsXHJcblx0XHRleGFjdDogZmFsc2UsXHJcblx0XHRjb21wb25lbnQ6IFRlc3RcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYWJvdXRfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9hYm91dF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBjb250YWN0X3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udGFjdF9yZWR1Y2Vycyc7XHJcbmltcG9ydCBmb290ZXJfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9mb290ZXJfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeV9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2dhbGxlcnlfcmVkdWNlcnMnO1xyXG5pbXBvcnQgZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzJztcclxuaW1wb3J0IGhlYWRlcl9yZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2hlYWRlcl9yZWR1Y2Vycyc7XHJcbmltcG9ydCBob21lX3JlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaG9tZV9yZWR1Y2Vycyc7XHJcbmltcG9ydCBwcm9qZWN0b3JfcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9wcm9qZWN0b3JfcmVkdWNlcnMnO1xyXG5cclxuXHJcbi8vQWRkIGFkZGl0aW9uYWwgcmVkdWNlcnMgaW4gaGVyZSB0byBiZSBjb21iaW5lZCBpbnRvIG9uZSByZWR1Y2VyXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRhYm91dDogYWJvdXRfcmVkdWNlcnMsXHJcblx0Y29udGFjdDogY29udGFjdF9yZWR1Y2VycyxcclxuXHRmb290ZXI6IGZvb3Rlcl9yZWR1Y2VycyxcclxuXHRnYWxsZXJ5OiBnYWxsZXJ5X3JlZHVjZXJzLFxyXG5cdGdhbGxlcnlTZWxlY3RvcjogZ2FsbGVyeVNlbGVjdG9yX3JlZHVjZXJzLFxyXG5cdGhlYWRlcjogaGVhZGVyX3JlZHVjZXJzLFxyXG5cdGhvbWU6IGhvbWVfcmVkdWNlcnMsXHJcblx0cHJvamVjdG9yOiBwcm9qZWN0b3JfcmVkdWNlcnMsXHJcbn0pXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG5cdHJvb3RSZWR1Y2VyLFxyXG5cdC8vIGlmIHJlZGV4IGRldnRvb2xzIGV4dGVuc2lvbiBpcyBvbiB0aGUgd2luZG93IG9iamVjdCBydW4gdGhlIGRldnRvb2xzIGZ1bmN0aW9uXHJcblx0X19pc0Jyb3dzZXJfXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaXJjbGV0eXBlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zdGF0aWMtZ3ppcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function draw() {\r\n\tconst canvas = document.getElementById(\"canvas\");\r\n\tif (canvas.getContext) {\r\n\t\tconst ctx = canvas.getContext('2d');\r\n\t\tctx.save();\r\n\t\tctx.clearRect(0,0,canvas.width,canvas.height);\r\n\r\n\t\t//background\r\n\t\tconst lineGrad = ctx.createLinearGradient(0,0,0,1920);\r\n\t\tlineGrad.addColorStop(0, '#758ef2');\r\n\t\tlineGrad.addColorStop(1, '#9bb1ea');\r\n\t\tctx.fillStyle = lineGrad;\r\n\t\tctx.fillRect(0,0,1080,1920);\r\n\r\n\t\tctx.translate(540, 860);\r\n\t\t//sunlight\r\n\t\tconst radialGrad = ctx.createRadialGradient(0,0,122,0,0,200);\r\n\t\tradialGrad.addColorStop(0, 'rgba(204,204,255,1)');\r\n\t\tradialGrad.addColorStop(0.3, 'rgba(219,222,255,0.8)');\r\n\t\tradialGrad.addColorStop(0.5, 'rgba(209,219,255,0.6)');\r\n\t\tradialGrad.addColorStop(0.7, 'rgba(202,215,249,0.4)');\r\n\t\tradialGrad.addColorStop(0.8, 'rgba(200,212,250,0.3)');\r\n\t\tradialGrad.addColorStop(0.9, 'rgba(192,205,249,0.2)');\r\n\t\tradialGrad.addColorStop(1, 'rgba(189,201,249,0.1)');\r\n\t\tctx.fillStyle = radialGrad;\r\n\t\tctx.beginPath();\r\n\t\tctx.arc(0,0,200,0,Math.PI*2,true);\r\n\t\tctx.fill();\r\n\t\t//sun\r\n\t\tctx.fillStyle = '#fff7ec';\r\n\t\tctx.beginPath();\r\n\t\tctx.arc(0,0,122,0,Math.PI*2,true);\r\n\t\tctx.fill();\r\n\r\n\t\tctx.translate(-540,-860);\r\n\t\t//grassLand\r\n\t\tctx.beginPath();\r\n\t\tctx.moveTo(700, 1697);\r\n\t\tctx.quadraticCurveTo(870, 1600, 1080, 1660);\r\n\t\tctx.lineTo(1080, 1800);\r\n\t\tctx.lineTo(700, 1800);\r\n\t\tctx.closePath();\r\n\t\tctx.strokeStyle = '#a7b9e1';\r\n\t\tctx.stroke();\r\n\t\tconst lineGrad2 = ctx.createLinearGradient(700, 1690, 700, 1800);\r\n\t\tlineGrad2.addColorStop(0, '#a9bef3');\r\n\t\tlineGrad2.addColorStop(1, '#a7bbed');\r\n\t\tctx.fillStyle = lineGrad2;\r\n\t\tctx.fill();\r\n\r\n\t\tctx.beginPath();\r\n\t\tctx.moveTo(0,1700);\r\n\t\tctx.bezierCurveTo(280, 1490, 902, 1737, 1080, 1702);\r\n\t\tctx.strokeStyle = '#bacffc';\r\n\t\tctx.lineTo(1080,1920);\r\n\t\tctx.lineTo(0,1920);\r\n\t\tctx.closePath();\r\n\t\tctx.stroke();\r\n\t\tconst lineGrad1 = ctx.createLinearGradient(0,1700,0,1920);\r\n\t\tlineGrad1.addColorStop(0, 'rgba(195,209,255,0.8');\r\n\t\tlineGrad1.addColorStop(0.3, 'rgba(176,197,242, 0.9');\r\n\t\tlineGrad1.addColorStop(1, '#9bb1ea');\r\n\t\tctx.fillStyle = lineGrad1;\r\n\t\tctx.fill();\r\n\r\n\t\t//tents\r\n\t\tdrawTriangle(ctx,122,1734,139,1734,132,1682,'fill','#a6bdee');\r\n\t\tdrawTriangle(ctx,122,1734,139,1734,125,1757,'fill','#94a6e8');\r\n\r\n\t\tdrawTriangle(ctx,164,1743,206,1743,183,1663,'fill','#9ab0e9');\r\n\t\tdrawTriangle(ctx,164,1743,206,1743,177,1783,'fill','#94aee7');\r\n\r\n\t\tdrawTriangle(ctx,224,1727,240,1727,233,1693,'fill','#9ab0e9');\r\n\t\tdrawTriangle(ctx,224,1727,240,1727,230,1743,'fill','#9ab0e9');\r\n\r\n\t\tdrawTriangle(ctx,894,1645,943,1645,920,1608,'fill','#9db8ef');\r\n\t\tdrawTriangle(ctx,894,1645,943,1645,923,1668,'fill','#96abea');\r\n\r\n\t\t//windmill\r\n\t\tdrawQuadrilateral(ctx,289,1542,292,1542,294,1640,286,1640,'fill','#b4caf3');\r\n\t\twindmill.draw(ctx);\r\n\t\twindmill.rotate += windmill.vr;\r\n\t\t\r\n\r\n\t\tctx.restore();\r\n\t\t\r\n\t\twindow.requestAnimationFrame(draw);\r\n\t}\r\n\r\n}\r\nwindow.requestAnimationFrame(draw);\r\n\r\nlet windmill = {\r\n\trotate: 0,\r\n\tvr: 0.01,\r\n\tcolor: '#b4caf3',\r\n\tdraw: function(ctx) {\r\n\r\n\t\tctx.translate(290,1544);\r\n\t\tctx.save();\r\n\t\tctx.rotate(this.rotate*Math.PI);\r\n\t\tdrawTriangle(ctx,-55,32,0,6,-5,-3,'fill', this.color);\r\n\t\tdrawTriangle(ctx,-5,-3,0,-60,5,-3,'fill', this.color);\r\n\t\tdrawTriangle(ctx,5,-3,55,32,0,6,'fill', this.color);\r\n\t\tdrawTriangle(ctx,5,-3,-5,-3,0,6,'fill', this.color);\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nfunction drawTriangle(ctx,x1,y1,x2,y2,x3,y3,type,color) {\r\n\tctx.beginPath();\r\n\tctx.moveTo(x1,y1);\r\n\tctx.lineTo(x2,y2);\r\n\tctx.lineTo(x3,y3);\r\n\tctx.closePath();\r\n\tctx[type + 'Style'] = color;\r\n\tctx[type]();\r\n}\r\n\r\nfunction drawQuadrilateral(ctx,x1,y1,x2,y2,x3,y3,x4,y4,type,color) {\r\n\tctx.beginPath();\r\n\tctx.moveTo(x1,y1);\r\n\tctx.lineTo(x2,y2);\r\n\tctx.lineTo(x3,y3);\r\n\tctx.lineTo(x4,y4);\r\n\tctx.closePath();\r\n\tctx[type + 'Style'] = color;\r\n\tctx[type]();\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
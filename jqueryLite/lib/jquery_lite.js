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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

const $l = function(arg){
  let nodeArr = [];
  if(typeof(arg)==="string"){
    let nodeList = document.querySelectorAll(arg);
    nodeArr = Array.from(nodeList);
  }else if(typeof(arg) ==="object"){
    let nodeList = document.querySelectorAll(arg);
    nodeArr = Array.from(nodeList);
  }
  let domNode = new DOMNodeCollection(nodeArr);
  return domNode;
};


window.$l = $l;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection{
  constructor(HTMLElements){
    this.elements = HTMLElements;
  }
}

DOMNodeCollection.prototype.html = function(str){
  if(str===undefined){
     return this.elements[0].innerHTML;
  }else{
    this.elements.forEach(function(el){
      el.innerHTML = str;
    })
  }
}

DOMNodeCollection.prototype.empty = function(){
  this.html("");
}

DOMNodeCollection.prototype.append = function(arg){
  if(typeof(arg)==="string"){
    this.elements.forEach(function(el){
      el.innerHTML += arg;
    })
  }else if (typeof(arg)==="object"){
     this.elements.forEach(function(el){
      el.innerHTML += arg.outerHTML; 
    });
  }else{
    
    for (let i = 0; i < arg.length; i++) {
      for (let j = 0; j < this.elements.length; j++) {
        this.elements[j].appendChild(arg[i].cloneNode(true))
      }
    }
  }
    
}


DOMNodeCollection.prototype.attr = function(key, val){
  if(typeof(val)==="string"){
    this.elements.forEach(function(el){
      el.setAttribute(key, val);
    })
  }else{
    return this.elements[0].getAttribute(key);
  }
}

DOMNodeCollection.prototype.addClass = function(str){
  this.elements.forEach((el) => el.classList.add(str));
}


DOMNodeCollection.prototype.removeClass = function(str){
  this.elements.forEach((el) => el.classList.remove(str));
}


module.exports = DOMNodeCollection;

/***/ })
/******/ ]);
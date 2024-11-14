"use strict";
(self["webpackChunkmy_portfolio"] = self["webpackChunkmy_portfolio"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var anjin_byte_github_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anjin-byte-github-io */ "../pkg/anjin_byte_github_io.js");
/* harmony import */ var anjin_byte_github_io_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! anjin-byte-github-io/anjin_byte_github_io_bg.wasm */ "../pkg/anjin_byte_github_io_bg.wasm");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([anjin_byte_github_io__WEBPACK_IMPORTED_MODULE_1__, anjin_byte_github_io_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_2__]);
([anjin_byte_github_io__WEBPACK_IMPORTED_MODULE_1__, anjin_byte_github_io_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// Import the WebAssembly memory at the top of the file.

var CELL_SIZE = 5; // px
var GRID_COLOR = "#CCCCCC";
var DEAD_COLOR = "#FFFFFF";
var ALIVE_COLOR = "#000000";

// Construct the universe, and get its width and height.
var universe = anjin_byte_github_io__WEBPACK_IMPORTED_MODULE_1__.Universe["new"]();
var width = universe.width();
var height = universe.height();
var getIndex = function getIndex(row, column) {
  return row * width + column;
};
var drawCells = function drawCells() {
  var cellsPtr = universe.cells();
  var cells = new Uint8Array(anjin_byte_github_io_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.buffer, cellsPtr, width * height);
  ctx.beginPath();
  for (var row = 0; row < height; row++) {
    for (var col = 0; col < width; col++) {
      var idx = getIndex(row, col);
      ctx.fillStyle = cells[idx] === anjin_byte_github_io__WEBPACK_IMPORTED_MODULE_1__.Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;
      ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE);
    }
  }
  ctx.stroke();
};
var drawGrid = function drawGrid() {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  // Vertical lines.
  for (var i = 0; i <= width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
  }

  // Horizontal lines.
  for (var j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
  }
  ctx.stroke();
};

// Give the canvas room for all of our cells and a 1px border
// around each of them.
var canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;
var ctx = canvas.getContext('2d');
var _renderLoop = function renderLoop() {
  universe.tick();
  drawGrid();
  drawCells();
  requestAnimationFrame(_renderLoop);
};
requestAnimationFrame(_renderLoop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B","sourcesContent":["body {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../pkg/anjin_byte_github_io.js":
/*!**************************************!*\
  !*** ../pkg/anjin_byte_github_io.js ***!
  \**************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* reexport safe */ _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.Cell),
/* harmony export */   Universe: () => (/* reexport safe */ _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.Universe),
/* harmony export */   __wbg_alert_c3fef96375c34701: () => (/* reexport safe */ _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_alert_c3fef96375c34701),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),
/* harmony export */   greet: () => (/* reexport safe */ _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.greet)
/* harmony export */ });
/* harmony import */ var _anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anjin_byte_github_io_bg.wasm */ "../pkg/anjin_byte_github_io_bg.wasm");
/* harmony import */ var _anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anjin_byte_github_io_bg.js */ "../pkg/anjin_byte_github_io_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



(0,_anjin_byte_github_io_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_anjin_byte_github_io_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "../pkg/anjin_byte_github_io_bg.js":
/*!*****************************************!*\
  !*** ../pkg/anjin_byte_github_io_bg.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell),
/* harmony export */   Universe: () => (/* binding */ Universe),
/* harmony export */   __wbg_alert_c3fef96375c34701: () => (/* binding */ __wbg_alert_c3fef96375c34701),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw),
/* harmony export */   greet: () => (/* binding */ greet)
/* harmony export */ });
let wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
let WASM_VECTOR_LEN = 0;
const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
let cachedTextEncoder = new lTextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
/**
 * @param {string} name
 */
function greet(name) {
  const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  wasm.greet(ptr0, len0);
}
const Cell = Object.freeze({
  Dead: 0,
  "0": "Dead",
  Alive: 1,
  "1": "Alive"
});
const UniverseFinalization = typeof FinalizationRegistry === 'undefined' ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(ptr => wasm.__wbg_universe_free(ptr >>> 0, 1));
class Universe {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(Universe.prototype);
    obj.__wbg_ptr = ptr;
    UniverseFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    UniverseFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_universe_free(ptr, 0);
  }
  /**
   * @returns {Universe}
   */
  static new() {
    const ret = wasm.universe_new();
    return Universe.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  width() {
    const ret = wasm.universe_width(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  height() {
    const ret = wasm.universe_height(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  cells() {
    const ret = wasm.universe_cells(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {string}
   */
  render() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.universe_render(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  tick() {
    wasm.universe_tick(this.__wbg_ptr);
  }
}
function __wbg_alert_c3fef96375c34701(arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;

/***/ }),

/***/ "../pkg/anjin_byte_github_io_bg.wasm":
/*!*******************************************!*\
  !*** ../pkg/anjin_byte_github_io_bg.wasm ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./anjin_byte_github_io_bg.js */ "../pkg/anjin_byte_github_io_bg.js");
module.exports = __webpack_require__.v(exports, module.id, "a7c2f327dd987c0905cb", {
	"./anjin_byte_github_io_bg.js": {
		"__wbg_alert_c3fef96375c34701": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_c3fef96375c34701,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
	}
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy5jc3M/YThkMCIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby8uLi9wa2cvYW5qaW5fYnl0ZV9naXRodWJfaW8uanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4uL3BrZy9hbmppbl9ieXRlX2dpdGh1Yl9pb19iZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiYW5qaW4tYnl0ZS1naXRodWItaW9cIjtcbmltcG9ydCB7IFVuaXZlcnNlLCBDZWxsIH0gZnJvbSBcImFuamluLWJ5dGUtZ2l0aHViLWlvXCI7XG5cbi8vIEltcG9ydCB0aGUgV2ViQXNzZW1ibHkgbWVtb3J5IGF0IHRoZSB0b3Agb2YgdGhlIGZpbGUuXG5pbXBvcnQgeyBtZW1vcnkgfSBmcm9tIFwiYW5qaW4tYnl0ZS1naXRodWItaW8vYW5qaW5fYnl0ZV9naXRodWJfaW9fYmcud2FzbVwiO1xuXG5jb25zdCBDRUxMX1NJWkUgPSA1OyAvLyBweFxuY29uc3QgR1JJRF9DT0xPUiA9IFwiI0NDQ0NDQ1wiO1xuY29uc3QgREVBRF9DT0xPUiA9IFwiI0ZGRkZGRlwiO1xuY29uc3QgQUxJVkVfQ09MT1IgPSBcIiMwMDAwMDBcIjtcblxuLy8gQ29uc3RydWN0IHRoZSB1bml2ZXJzZSwgYW5kIGdldCBpdHMgd2lkdGggYW5kIGhlaWdodC5cbmNvbnN0IHVuaXZlcnNlID0gVW5pdmVyc2UubmV3KCk7XG5jb25zdCB3aWR0aCA9IHVuaXZlcnNlLndpZHRoKCk7XG5jb25zdCBoZWlnaHQgPSB1bml2ZXJzZS5oZWlnaHQoKTtcblxuXG5jb25zdCBnZXRJbmRleCA9IChyb3csIGNvbHVtbikgPT4ge1xuICAgIHJldHVybiByb3cgKiB3aWR0aCArIGNvbHVtbjtcbn07XG5cbmNvbnN0IGRyYXdDZWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBjZWxsc1B0ciA9IHVuaXZlcnNlLmNlbGxzKCk7XG4gICAgY29uc3QgY2VsbHMgPSBuZXcgVWludDhBcnJheShtZW1vcnkuYnVmZmVyLCBjZWxsc1B0ciwgd2lkdGggKiBoZWlnaHQpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB3aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEluZGV4KHJvdywgY29sKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNlbGxzW2lkeF0gPT09IENlbGwuRGVhZFxuICAgICAgICAgICAgICAgID8gREVBRF9DT0xPUlxuICAgICAgICAgICAgICAgIDogQUxJVkVfQ09MT1I7XG5cbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgICAgICBjb2wgKiAoQ0VMTF9TSVpFICsgMSkgKyAxLFxuICAgICAgICAgICAgICAgIHJvdyAqIChDRUxMX1NJWkUgKyAxKSArIDEsXG4gICAgICAgICAgICAgICAgQ0VMTF9TSVpFLFxuICAgICAgICAgICAgICAgIENFTExfU0laRVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKTtcbn07XG5cblxuY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IEdSSURfQ09MT1I7XG5cbiAgICAvLyBWZXJ0aWNhbCBsaW5lcy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB3aWR0aDsgaSsrKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oaSAqIChDRUxMX1NJWkUgKyAxKSArIDEsIDApO1xuICAgICAgICBjdHgubGluZVRvKGkgKiAoQ0VMTF9TSVpFICsgMSkgKyAxLCAoQ0VMTF9TSVpFICsgMSkgKiBoZWlnaHQgKyAxKTtcbiAgICB9XG5cbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzLlxuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGhlaWdodDsgaisrKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgaiAqIChDRUxMX1NJWkUgKyAxKSArIDEpO1xuICAgICAgICBjdHgubGluZVRvKChDRUxMX1NJWkUgKyAxKSAqIHdpZHRoICsgMSwgaiAqIChDRUxMX1NJWkUgKyAxKSArIDEpO1xuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKTtcbn07XG5cblxuLy8gR2l2ZSB0aGUgY2FudmFzIHJvb20gZm9yIGFsbCBvZiBvdXIgY2VsbHMgYW5kIGEgMXB4IGJvcmRlclxuLy8gYXJvdW5kIGVhY2ggb2YgdGhlbS5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1vZi1saWZlLWNhbnZhc1wiKTtcbmNhbnZhcy5oZWlnaHQgPSAoQ0VMTF9TSVpFICsgMSkgKiBoZWlnaHQgKyAxO1xuY2FudmFzLndpZHRoID0gKENFTExfU0laRSArIDEpICogd2lkdGggKyAxO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3QgcmVuZGVyTG9vcCA9ICgpID0+IHtcbiAgICB1bml2ZXJzZS50aWNrKCk7XG5cbiAgICBkcmF3R3JpZCgpO1xuICAgIGRyYXdDZWxscygpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckxvb3ApO1xufTtcblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckxvb3ApOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL2FuamluX2J5dGVfZ2l0aHViX2lvX2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2FuamluX2J5dGVfZ2l0aHViX2lvX2JnLmpzXCI7XG5pbXBvcnQgeyBfX3diZ19zZXRfd2FzbSB9IGZyb20gXCIuL2FuamluX2J5dGVfZ2l0aHViX2lvX2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTsiLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50OEFycmF5TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhBcnJheU1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OEFycmF5TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OEFycmF5TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5sZXQgY2FjaGVkRGF0YVZpZXdNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0RGF0YVZpZXdNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWREYXRhVmlld01lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkRGF0YVZpZXdNZW1vcnkwLmJ1ZmZlci5kZXRhY2hlZCA9PT0gdHJ1ZSB8fCAoY2FjaGVkRGF0YVZpZXdNZW1vcnkwLmJ1ZmZlci5kZXRhY2hlZCA9PT0gdW5kZWZpbmVkICYmIGNhY2hlZERhdGFWaWV3TWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikpIHtcbiAgICAgICAgY2FjaGVkRGF0YVZpZXdNZW1vcnkwID0gbmV3IERhdGFWaWV3KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWREYXRhVmlld01lbW9yeTA7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgsIDEpID4+PiAwO1xuICAgICAgICBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4sIDEpID4+PiAwO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhBcnJheU1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuXG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgb2Zmc2V0LCAxKSA+Pj4gMDtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyZWV0KG5hbWUpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAobmFtZSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgd2FzbS5ncmVldChwdHIwLCBsZW4wKTtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSBPYmplY3QuZnJlZXplKHsgRGVhZDowLFwiMFwiOlwiRGVhZFwiLEFsaXZlOjEsXCIxXCI6XCJBbGl2ZVwiLCB9KTtcblxuY29uc3QgVW5pdmVyc2VGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193YmdfdW5pdmVyc2VfZnJlZShwdHIgPj4+IDAsIDEpKTtcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShVbml2ZXJzZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmouX193YmdfcHRyID0gcHRyO1xuICAgICAgICBVbml2ZXJzZUZpbmFsaXphdGlvbi5yZWdpc3RlcihvYmosIG9iai5fX3diZ19wdHIsIG9iaik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgX19kZXN0cm95X2ludG9fcmF3KCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fd2JnX3B0cjtcbiAgICAgICAgdGhpcy5fX3diZ19wdHIgPSAwO1xuICAgICAgICBVbml2ZXJzZUZpbmFsaXphdGlvbi51bnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIHdhc20uX193YmdfdW5pdmVyc2VfZnJlZShwdHIsIDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7VW5pdmVyc2V9XG4gICAgICovXG4gICAgc3RhdGljIG5ldygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS51bml2ZXJzZV9uZXcoKTtcbiAgICAgICAgcmV0dXJuIFVuaXZlcnNlLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHdpZHRoKCkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnVuaXZlcnNlX3dpZHRoKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBoZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udW5pdmVyc2VfaGVpZ2h0KHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBjZWxscygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS51bml2ZXJzZV9jZWxscyh0aGlzLl9fd2JnX3B0cik7XG4gICAgICAgIHJldHVybiByZXQgPj4+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZGVmZXJyZWQxXzA7XG4gICAgICAgIGxldCBkZWZlcnJlZDFfMTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJldHB0ciA9IHdhc20uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpO1xuICAgICAgICAgICAgd2FzbS51bml2ZXJzZV9yZW5kZXIocmV0cHRyLCB0aGlzLl9fd2JnX3B0cik7XG4gICAgICAgICAgICB2YXIgcjAgPSBnZXREYXRhVmlld01lbW9yeTAoKS5nZXRJbnQzMihyZXRwdHIgKyA0ICogMCwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgcjEgPSBnZXREYXRhVmlld01lbW9yeTAoKS5nZXRJbnQzMihyZXRwdHIgKyA0ICogMSwgdHJ1ZSk7XG4gICAgICAgICAgICBkZWZlcnJlZDFfMCA9IHIwO1xuICAgICAgICAgICAgZGVmZXJyZWQxXzEgPSByMTtcbiAgICAgICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tV2FzbTAocjAsIHIxKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHdhc20uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNik7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShkZWZlcnJlZDFfMCwgZGVmZXJyZWQxXzEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICAgIHdhc20udW5pdmVyc2VfdGljayh0aGlzLl9fd2JnX3B0cik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYWxlcnRfYzNmZWY5NjM3NWMzNDcwMShhcmcwLCBhcmcxKSB7XG4gICAgYWxlcnQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ3YXNtIiwiVW5pdmVyc2UiLCJDZWxsIiwibWVtb3J5IiwiQ0VMTF9TSVpFIiwiR1JJRF9DT0xPUiIsIkRFQURfQ09MT1IiLCJBTElWRV9DT0xPUiIsInVuaXZlcnNlIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRJbmRleCIsInJvdyIsImNvbHVtbiIsImRyYXdDZWxscyIsImNlbGxzUHRyIiwiY2VsbHMiLCJVaW50OEFycmF5IiwiYnVmZmVyIiwiY3R4IiwiYmVnaW5QYXRoIiwiY29sIiwiaWR4IiwiZmlsbFN0eWxlIiwiRGVhZCIsImZpbGxSZWN0Iiwic3Ryb2tlIiwiZHJhd0dyaWQiLCJzdHJva2VTdHlsZSIsImkiLCJtb3ZlVG8iLCJsaW5lVG8iLCJqIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZW5kZXJMb29wIiwidGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9fd2JnX3NldF93YXNtIiwidmFsIiwibFRleHREZWNvZGVyIiwiVGV4dERlY29kZXIiLCJtb2R1bGUiLCJyZXF1aXJlIiwiY2FjaGVkVGV4dERlY29kZXIiLCJpZ25vcmVCT00iLCJmYXRhbCIsImRlY29kZSIsImNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwIiwiZ2V0VWludDhBcnJheU1lbW9yeTAiLCJieXRlTGVuZ3RoIiwiZ2V0U3RyaW5nRnJvbVdhc20wIiwicHRyIiwibGVuIiwic3ViYXJyYXkiLCJjYWNoZWREYXRhVmlld01lbW9yeTAiLCJnZXREYXRhVmlld01lbW9yeTAiLCJkZXRhY2hlZCIsInVuZGVmaW5lZCIsIkRhdGFWaWV3IiwiV0FTTV9WRUNUT1JfTEVOIiwibFRleHRFbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJjYWNoZWRUZXh0RW5jb2RlciIsImVuY29kZVN0cmluZyIsImVuY29kZUludG8iLCJhcmciLCJ2aWV3IiwiYnVmIiwiZW5jb2RlIiwic2V0IiwicmVhZCIsImxlbmd0aCIsIndyaXR0ZW4iLCJwYXNzU3RyaW5nVG9XYXNtMCIsIm1hbGxvYyIsInJlYWxsb2MiLCJtZW0iLCJvZmZzZXQiLCJjb2RlIiwiY2hhckNvZGVBdCIsInNsaWNlIiwicmV0IiwiZ3JlZXQiLCJuYW1lIiwicHRyMCIsIl9fd2JpbmRnZW5fbWFsbG9jIiwiX193YmluZGdlbl9yZWFsbG9jIiwibGVuMCIsIk9iamVjdCIsImZyZWV6ZSIsIkFsaXZlIiwiVW5pdmVyc2VGaW5hbGl6YXRpb24iLCJGaW5hbGl6YXRpb25SZWdpc3RyeSIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsIl9fd2JnX3VuaXZlcnNlX2ZyZWUiLCJfX3dyYXAiLCJvYmoiLCJjcmVhdGUiLCJwcm90b3R5cGUiLCJfX3diZ19wdHIiLCJfX2Rlc3Ryb3lfaW50b19yYXciLCJmcmVlIiwibmV3IiwidW5pdmVyc2VfbmV3IiwidW5pdmVyc2Vfd2lkdGgiLCJ1bml2ZXJzZV9oZWlnaHQiLCJ1bml2ZXJzZV9jZWxscyIsInJlbmRlciIsImRlZmVycmVkMV8wIiwiZGVmZXJyZWQxXzEiLCJyZXRwdHIiLCJfX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyIiwidW5pdmVyc2VfcmVuZGVyIiwicjAiLCJnZXRJbnQzMiIsInIxIiwiX193YmluZGdlbl9mcmVlIiwidW5pdmVyc2VfdGljayIsIl9fd2JnX2FsZXJ0X2MzZmVmOTYzNzVjMzQ3MDEiLCJhcmcwIiwiYXJnMSIsImFsZXJ0IiwiX193YmluZGdlbl90aHJvdyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
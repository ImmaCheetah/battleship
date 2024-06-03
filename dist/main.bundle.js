"use strict";
(self["webpackChunktemplate_repo"] = self["webpackChunktemplate_repo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS RESET || */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* VARIABLES || */
:root {
  --header: #383838;
  --border-clr: #A50519;
  --main-text-clr: rgb(255, 254, 254);
  --bg: #a1a1a1;
  --cells: rgb(254, 253, 253);
  --ship: #6395d2;
  --hit: rgb(163, 56, 56);
  --miss: rgb(128, 128, 128);
  --hover: rgb(174, 174, 174);
}

body {
  font-size: 30px;
  color: var(--main-text-clr);
}

/* HEADER || */
.header-div {
  position: absolute;
  height: 80px;
  width: 100vw;
  background-color: var(--header);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 7px 34px -14px rgba(0,0,0,0.75);
}

h1 {
  color: var(--main-text-clr);
  font-size: 60px;
}

/* MAIN CONTAINER || */
.container {
  min-height: 100vh; /* FIX */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg);
}

/* NAME INPUT || */
.player-input {
  display: flex;
  align-self: start;
}

input {
  height: 30px;
  font-size: 20px;
  border: none;
}

/* BOARD CONTAINER || */
.boards-container {
  display: flex;
  gap: 3em;
}

.human-board, .computer-board {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  grid-template-rows: repeat(10, 40px);
  /* padding: 1em; */
}

.grid-cell {
  /* width: 8px;
  height: 8px; */
  padding: 10px;
  appearance: none;
  border: none;
  margin: 1px;
}

/* PLAYER DIV || */
.name-div {
  display: flex;
}

.human-name, .computer-name {
  height: 50px;
}

.winner-div {
  padding: 15px;
}

/* BUTTONS || */
button {
  appearance: none;
  border: none;
  padding: 12px;
  font-size: 18px;
  background-color: var(--header);
  color: var(--main-text-clr);
}

/* PROPERTY COLOURS || */
.ship {
  background-color: var(--ship);
  border: solid 1px white;
}

.missed {
  background-color: var(--miss);
  border: solid 1px white;
}

.hit {
  background-color: var(--hit);
  border: solid 1px white;
}

/* EFFECTS || */
#confirm-btn:active, .randomize-btn:active, .start-btn:active {
  background-color: #5c5c5c;
  transform: translateY(4px);
}

.no-click {
  pointer-events: none;
}

/* .grid-cell:hover {
  background-color: var(--hover);
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;IACrB,qBAAqB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,qBAAqB;EACrB,mCAAmC;EACnC,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,uBAAuB;EACvB,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gDAAgD;AAClD;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA,sBAAsB;AACtB;EACE,iBAAiB,EAAE,QAAQ;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE;gBACc;EACd,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,wBAAwB;AACxB;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA,eAAe;AACf;EACE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;GAEG","sourcesContent":["/* CSS RESET || */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    text-decoration: none;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* VARIABLES || */\n:root {\n  --header: #383838;\n  --border-clr: #A50519;\n  --main-text-clr: rgb(255, 254, 254);\n  --bg: #a1a1a1;\n  --cells: rgb(254, 253, 253);\n  --ship: #6395d2;\n  --hit: rgb(163, 56, 56);\n  --miss: rgb(128, 128, 128);\n  --hover: rgb(174, 174, 174);\n}\n\nbody {\n  font-size: 30px;\n  color: var(--main-text-clr);\n}\n\n/* HEADER || */\n.header-div {\n  position: absolute;\n  height: 80px;\n  width: 100vw;\n  background-color: var(--header);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: -2px 7px 34px -14px rgba(0,0,0,0.75);\n}\n\nh1 {\n  color: var(--main-text-clr);\n  font-size: 60px;\n}\n\n/* MAIN CONTAINER || */\n.container {\n  min-height: 100vh; /* FIX */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--bg);\n}\n\n/* NAME INPUT || */\n.player-input {\n  display: flex;\n  align-self: start;\n}\n\ninput {\n  height: 30px;\n  font-size: 20px;\n  border: none;\n}\n\n/* BOARD CONTAINER || */\n.boards-container {\n  display: flex;\n  gap: 3em;\n}\n\n.human-board, .computer-board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  grid-template-rows: repeat(10, 40px);\n  /* padding: 1em; */\n}\n\n.grid-cell {\n  /* width: 8px;\n  height: 8px; */\n  padding: 10px;\n  appearance: none;\n  border: none;\n  margin: 1px;\n}\n\n/* PLAYER DIV || */\n.name-div {\n  display: flex;\n}\n\n.human-name, .computer-name {\n  height: 50px;\n}\n\n.winner-div {\n  padding: 15px;\n}\n\n/* BUTTONS || */\nbutton {\n  appearance: none;\n  border: none;\n  padding: 12px;\n  font-size: 18px;\n  background-color: var(--header);\n  color: var(--main-text-clr);\n}\n\n/* PROPERTY COLOURS || */\n.ship {\n  background-color: var(--ship);\n  border: solid 1px white;\n}\n\n.missed {\n  background-color: var(--miss);\n  border: solid 1px white;\n}\n\n.hit {\n  background-color: var(--hit);\n  border: solid 1px white;\n}\n\n/* EFFECTS || */\n#confirm-btn:active, .randomize-btn:active, .start-btn:active {\n  background-color: #5c5c5c;\n  transform: translateY(4px);\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n/* .grid-cell:hover {\n  background-color: var(--hover);\n} */"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/screenController */ "./src/modules/screenController.js");



(0,_modules_screenController__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameController: () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/modules/playerFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/modules/shipFactory.js");



function GameController(humanName, computerName = "Lil CPU") {
  let human = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.Player)(humanName);
  let computer = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.Computer)(computerName);

  let players = [human, computer];

  let currentPlayer = players[0];
  let opponent = players[1];

  const playRound = (y, x) => {
    if (human.playerBoard.isBoardEmpty()) {
      return;
    }

    // Check if player is human and call correct method on computer
    if (getCurrentPlayer() == players[0]) {
      opponent.receivePlayerAttack(y, x);
      // console.log(
      //   "This is computer board when current player is human",
      //   getComputerBoard(),
      // );

      // If computer then call computerAttack on human
    } else {
      // console.log(
      //   "This is human board when current player is computer",
      //   getHumanBoard(),
      // );
      currentPlayer.computerAttack(opponent);
    }
    switchPlayerTurn();
    printRoundInfo();
  };

  const switchPlayerTurn = () => {
    if (getCurrentPlayer() == players[0]) {
      currentPlayer = players[1];
      opponent = players[0];
    } else {
      currentPlayer = players[0];
      opponent = players[1];
    }
  };

  const placeShipsRandomly = () => {
    let humanCruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(2);
    let humanSub = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
    let humanDestroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
    let humanBattleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(4);
    let humanCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(5);

    let computerCruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(2);
    let computerSub = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
    let computerDestroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
    let computerBattleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(4);
    let computerCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.Ship)(5);

    human.placePlayerShipRandomly(humanCruiser);
    human.placePlayerShipRandomly(humanSub);
    human.placePlayerShipRandomly(humanDestroyer);
    human.placePlayerShipRandomly(humanBattleship);
    human.placePlayerShipRandomly(humanCarrier);

    computer.placePlayerShipRandomly(computerCruiser);
    computer.placePlayerShipRandomly(computerSub);
    computer.placePlayerShipRandomly(computerDestroyer);
    computer.placePlayerShipRandomly(computerBattleship);
    computer.placePlayerShipRandomly(computerCarrier);

    restartComputerAttackArray();
  };

  const restartComputerAttackArray = () => {
    computer.refillAttackArray();
  };

  const returnWinner = () => {
    if (checkForWin(getCurrentPlayer())) {
      return `${getOpponent().playerName} is the winner!`;
    }

    if (checkForWin(getOpponent())) {
      return `${getCurrentPlayer().playerName} is the winner!`;
    }
  };

  const checkForWin = (playerObj) => {
    if (playerObj.playerBoard.allShipsSunk() === true) {
      return true;
    } else {
      return false;
    }
  };

  const printRoundInfo = () => {
    console.log(`It's ${getCurrentPlayer().playerName}'s turn`);
  };

  const replaceBoards = () => {
    human.playerBoard.generateBoard();
    computer.playerBoard.generateBoard();
  };

  const getCurrentPlayer = () => {
    return currentPlayer;
  };

  const getOpponent = () => {
    return opponent;
  };

  const getHumanObject = () => {
    return human;
  };

  const getComputerObject = () => {
    return computer;
  };

  const getHumanBoard = () => {
    return human.playerBoard.board;
  };

  const getComputerBoard = () => {
    return computer.playerBoard.board;
  };

  return {
    getCurrentPlayer,
    getOpponent,
    playRound,
    getHumanBoard,
    getComputerBoard,
    getComputerObject,
    getHumanObject,
    switchPlayerTurn,
    printRoundInfo,
    returnWinner,
    checkForWin,
    placeShipsRandomly,
    replaceBoards,
  };
}




/***/ }),

/***/ "./src/modules/gameboardFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/gameboardFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
function Gameboard() {
  let board = [];
  let placedShips = [];
  let missedHits = [];
  // Create 10x10 array with object in each index
  const generateBoard = () => {
    placedShips = [];
    missedHits = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = {
          ship: null,
          beenHit: false,
          missedHit: false,
        };
      }
    }
  };

  const placeShip = (ship, y, x, layout) => {
    isOutOfBounds(ship, y, x);
    hasOverlap(ship, y, x, layout);

    placedShips.push(ship);

    for (let i = 0; i < ship.shipLength; i++) {
      // If there is layout, it will be horizontal else it will be vertical
      if (layout) {
        board[y][x].ship = ship;
        x += 1;
      } else {
        board[y][x].ship = ship;
        y += 1;
      }
    }
    return board;
  };

  // Checks if ship will be out of bounds or overlap and calls function again to generate new coordinates
  const placeShipRandomly = (ship) => {
    let randomX = randomNum();
    let randomY = randomNum();
    let randomBoolVal = randomBool();

    if (
      isOutOfBounds(ship, randomY, randomX) ||
      hasOverlap(ship, randomY, randomX, randomBoolVal)
    ) {
      placeShipRandomly(ship);
    } else {
      placeShip(ship, randomY, randomX, randomBoolVal);
    }
  };

  const randomNum = () => {
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
  };

  const randomBool = () => Math.random() >= 0.5;

  const receiveAttack = (y, x) => {
    let targetCell = board[y][x];

    if (isAlreadyHit(board, y, x)) {
      throw "Been hit already";
    }

    if (targetCell.ship != null) {
      targetCell.ship.hit();
      targetCell.beenHit = true;
    } else {
      board[y][x].missedHit = true;
      missedHits.push([y, x]);
    }
  };

  const isAlreadyHit = (board, y, x) => {
    if (board[y][x].beenHit === true || board[y][x].missedHit === true) {
      return true;
    }
  };

  const allShipsSunk = () => {
    let counter = 0;
    placedShips.forEach((object) => {
      if (object.isSunk()) {
        counter += 1;
      }
    });

    if (counter === placedShips.length) {
      return true;
    } else {
      return false;
    }
  };

  const isOutOfBounds = (ship, y, x) => {
    let shipLength = ship.shipLength;

    let maxY = y + shipLength;
    let maxX = x + shipLength;

    if (y < 0 || x < 0 || maxY > 9 || maxX > 9) {
      return true;
    } else {
      return false;
    }
  };

  // Loop through length of ship and check board if there is a ship at that coordinate
  const hasOverlap = (shipObj, y, x, layout) => {
    if (board[y][x].ship != null) {
      return true;
    }

    for (let i = 0; i < shipObj.shipLength; i++) {
      if (board[y][x].ship != null) {
        return true;
      }
      if (layout) {
        x += 1;
      } else {
        y += 1;
      }
    }
  };

  const isBoardEmpty = () => {
    if (placedShips.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  generateBoard();

  return {
    placeShip,
    placeShipRandomly,
    receiveAttack,
    hasOverlap,
    allShipsSunk,
    isBoardEmpty,
    generateBoard,
    isAlreadyHit,
    get board() {
      return board;
    },
    get missedHits() {
      return missedHits;
    },
    get placedShips() {
      return placedShips;
    },
  };
}




/***/ }),

/***/ "./src/modules/playerFactory.js":
/*!**************************************!*\
  !*** ./src/modules/playerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/modules/gameboardFactory.js");


function Player(playerName) {
  let playerBoard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  const placePlayerShip = (ship, y, x, layout) => {
    playerBoard.placeShip(ship, y, x, layout);
  };

  const placePlayerShipRandomly = (ship) => {
    playerBoard.placeShipRandomly(ship);
  };

  const receivePlayerAttack = (y, x) => {
    playerBoard.receiveAttack(y, x);
  };

  const attackEnemyBoard = (opponent, y, x) => {
    opponent.playerBoard.receiveAttack(y, x);
  };

  const updateName = (newName) => {
    playerName = newName;
    return newName;
  };

  return {
    get playerName() {
      return playerName;
    },
    updateName,
    playerBoard,
    placePlayerShip,
    placePlayerShipRandomly,
    receivePlayerAttack,
    attackEnemyBoard,
  };
}

function Computer(playerName = "Lil CPU") {
  const computer = Player(playerName);
  const {
    playerBoard,
    placePlayerShip,
    placePlayerShipRandomly,
    receivePlayerAttack,
  } = computer;

  // Randomly choose one spot
  // Use that to attack the player
  // Find index of that attack then delete from array
  const computerAttack = (player) => {
    let singleAttack =
      allAttacks[Math.floor(Math.random() * allAttacks.length)];
    console.log(allAttacks);
    player.receivePlayerAttack(singleAttack[0], singleAttack[1]);

    let attackIndex = returnIndexOfCoord(allAttacks, singleAttack);
    allAttacks.splice(attackIndex, 1);
  };
  // Return the index of the attack from the array that holds all attacks
  const returnIndexOfCoord = (array, value) => {
    let index = 0;

    array.every((element) => {
      if (element[0] === value[0] && element[1] === value[1]) {
        return false;
      } else {
        index += 1;
        return true;
      }
    });

    return index;
  };
  // Create all possible attacks in an array
  const createArrayWithAllAttacks = () => {
    let possibleAttacks = [];
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        possibleAttacks.push([x, y]);
      }
    }
    return possibleAttacks;
  };

  const refillAttackArray = () => {
    allAttacks = createArrayWithAllAttacks();
  };

  // Create array of attacks
  let allAttacks = createArrayWithAllAttacks();

  return {
    get playerName() {
      return playerName;
    },
    playerBoard,
    placePlayerShip,
    placePlayerShipRandomly,
    receivePlayerAttack,
    computerAttack,
    refillAttackArray,
  };
}




/***/ }),

/***/ "./src/modules/screenController.js":
/*!*****************************************!*\
  !*** ./src/modules/screenController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScreenController)
/* harmony export */ });
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/modules/gameController.js");
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory */ "./src/modules/playerFactory.js");



function ScreenController() {
  const startBtn = document.querySelector(".start-btn");
  const randomizeBtn = document.querySelector(".randomize-btn");
  const confirmBtn = document.getElementById("confirm-btn");

  let placeHolder = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let game = (0,_gameController__WEBPACK_IMPORTED_MODULE_0__.GameController)();

  renderBoard(placeHolder, "computer");
  renderBoard(placeHolder, "human");

  function renderBoard(object, div) {
    const boardDiv = document.querySelector(`.${div}-board`);
    const thisBoard = object.playerBoard.board;
    thisBoard.forEach((element, indexY) => {
      element.forEach((item, indexX) => {
        const gridCell = document.createElement("button");
        gridCell.classList.add(div, "grid-cell");
        gridCell.setAttribute("data-coords", [indexY, indexX]);
        boardDiv.appendChild(gridCell);
        if (item.ship != null && div !== 'computer') {
            gridCell.classList.add('ship');
        }
        // if (item.ship != null) {
        //   gridCell.classList.add("ship");
        // }

        if (item.missedHit == true) {
          gridCell.classList.add("missed");
        }

        if (item.beenHit == true) {
          gridCell.classList.add("hit");
        }
      });
    });
  }

  function getPlayerName() {
    const playerNameInput = document.getElementById("name");

    return playerNameInput.value;
  }

  function displayNames(humanObj, computerObj) {
    const humanNameDiv = document.querySelector(".human-name");
    const computerNameDiv = document.querySelector(".computer-name");

    humanNameDiv.textContent = humanObj.playerName;
    computerNameDiv.textContent = computerObj.playerName;
  }

  // Not used as turns switch instantly
  function displayTurn() {
    const playerTurn = document.querySelector(".player-turn");
    playerTurn.textContent = `${game.getCurrentPlayer().playerName}'s turn`;
  }

  function displayWinnerAndEndGame() {
    const winnerDiv = document.querySelector(".winner-div");

    if (
      game.checkForWin(game.getHumanObject()) ||
      game.checkForWin(game.getComputerObject())
    ) {
      winnerDiv.textContent = game.returnWinner();
      disableComputerBoard();
    }
  }

  function makeCellsClickable() {
    const allCells = document.querySelectorAll(".grid-cell");
    allCells.forEach((element) => {
      element.addEventListener("click", (e) => {
        clearDOMBoards();
        playRoundsWithCheck(e);
        renderBoard(game.getHumanObject(), "human");
        renderBoard(game.getComputerObject(), "computer");
        displayWinnerAndEndGame();
        makeCellsClickable();
      });
    });
  }

  function playRoundsWithCheck(e) {
    let splitCoords = e.target.dataset.coords.split(",");
    let y = splitCoords[0];
    let x = splitCoords[1];

    if (
      game.getComputerBoard()[y][x].beenHit == true ||
      game.getComputerBoard()[y][x].missedHit === true
    ) {
      return;
    }

    game.playRound(y, x);
    game.playRound();
  }

  function disableHumanBoard() {
    const humanBoard = document.querySelector(".human-board");

    humanBoard.classList.add("no-click");
  }

  function disableComputerBoard() {
    const computerBoard = document.querySelector(".computer-board");

    computerBoard.classList.add("no-click");
  }

  function enableComputerBoard() {
    const computerBoard = document.querySelector(".computer-board");

    computerBoard.classList.remove("no-click");
  }

  function clearDOMBoards() {
    const humanBoard = document.querySelector(".human-board");
    const computerBoard = document.querySelector(".computer-board");
    const winnerDiv = document.querySelector(".winner-div");

    humanBoard.textContent = "";
    computerBoard.textContent = "";
    winnerDiv.textContent = "";
  }

  function showModal() {
    const nameModal = document.getElementById("name-dialog");

    nameModal.showModal();
  }

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    game.getHumanObject().updateName(getPlayerName());
    displayNames(game.getHumanObject(), game.getComputerObject());

    const nameModal = document.getElementById("name-dialog");
    nameModal.close();
  });

  startBtn.addEventListener("click", () => {
    makeCellsClickable();
  });

  randomizeBtn.addEventListener("click", () => {
    game.replaceBoards();
    clearDOMBoards();
    game.placeShipsRandomly();
    enableComputerBoard();
    renderBoard(game.getHumanObject(), "human");
    renderBoard(game.getComputerObject(), "computer");
  });

  disableHumanBoard();
  showModal();
}


/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship(shipLength, hits = 0) {
  if (!shipLength) throw "Missing argument for ship";

  const hit = () => {
    hits += 1;
  };

  const isSunk = () => {
    if (shipLength === hits) {
      return true;
    }
    return false;
  };

  const assignName = () => {
    if (shipLength === 2) {
      return "Cruiser";
    } else if (shipLength === 3) {
      return "Submarine";
    } else if (shipLength === 4) {
      return "Battleship";
    } else if (shipLength === 5) {
      return "Carrier";
    }
  };

  let name = assignName();

  return {
    get name() {
      return name;
    },
    get shipLength() {
      return shipLength;
    },
    get hits() {
      return hits;
    },
    hit,
    isSunk,
  };
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSzBCOztBQUUvQztBQUNBLG9CQUFvQiw0REFBUzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdzQjtBQUNUOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0Isc0RBQU07QUFDMUIsYUFBYSwrREFBYzs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCxJQUFJO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvbW9kdWxlcy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL21vZHVsZXMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL21vZHVsZXMvc2hpcEZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENTUyBSRVNFVCB8fCAqL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogVkFSSUFCTEVTIHx8ICovXG46cm9vdCB7XG4gIC0taGVhZGVyOiAjMzgzODM4O1xuICAtLWJvcmRlci1jbHI6ICNBNTA1MTk7XG4gIC0tbWFpbi10ZXh0LWNscjogcmdiKDI1NSwgMjU0LCAyNTQpO1xuICAtLWJnOiAjYTFhMWExO1xuICAtLWNlbGxzOiByZ2IoMjU0LCAyNTMsIDI1Myk7XG4gIC0tc2hpcDogIzYzOTVkMjtcbiAgLS1oaXQ6IHJnYigxNjMsIDU2LCA1Nik7XG4gIC0tbWlzczogcmdiKDEyOCwgMTI4LCAxMjgpO1xuICAtLWhvdmVyOiByZ2IoMTc0LCAxNzQsIDE3NCk7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY2xyKTtcbn1cblxuLyogSEVBREVSIHx8ICovXG4uaGVhZGVyLWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAtMnB4IDdweCAzNHB4IC0xNHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbmgxIHtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jbHIpO1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi8qIE1BSU4gQ09OVEFJTkVSIHx8ICovXG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7IC8qIEZJWCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xufVxuXG4vKiBOQU1FIElOUFVUIHx8ICovXG4ucGxheWVyLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogQk9BUkQgQ09OVEFJTkVSIHx8ICovXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM2VtO1xufVxuXG4uaHVtYW4tYm9hcmQsIC5jb21wdXRlci1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQwcHgpO1xuICAvKiBwYWRkaW5nOiAxZW07ICovXG59XG5cbi5ncmlkLWNlbGwge1xuICAvKiB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDsgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDFweDtcbn1cblxuLyogUExBWUVSIERJViB8fCAqL1xuLm5hbWUtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmh1bWFuLW5hbWUsIC5jb21wdXRlci1uYW1lIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ud2lubmVyLWRpdiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi8qIEJVVFRPTlMgfHwgKi9cbmJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNscik7XG59XG5cbi8qIFBST1BFUlRZIENPTE9VUlMgfHwgKi9cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xufVxuXG4ubWlzc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG59XG5cbi8qIEVGRkVDVFMgfHwgKi9cbiNjb25maXJtLWJ0bjphY3RpdmUsIC5yYW5kb21pemUtYnRuOmFjdGl2ZSwgLnN0YXJ0LWJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLm5vLWNsaWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIC5ncmlkLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0lBQ3JCLHFCQUFxQjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCLEVBQUUsUUFBUTtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7Z0JBQ2M7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGVBQWU7QUFDZjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSRVNFVCB8fCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogVkFSSUFCTEVTIHx8ICovXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXI6ICMzODM4Mzg7XFxuICAtLWJvcmRlci1jbHI6ICNBNTA1MTk7XFxuICAtLW1haW4tdGV4dC1jbHI6IHJnYigyNTUsIDI1NCwgMjU0KTtcXG4gIC0tYmc6ICNhMWExYTE7XFxuICAtLWNlbGxzOiByZ2IoMjU0LCAyNTMsIDI1Myk7XFxuICAtLXNoaXA6ICM2Mzk1ZDI7XFxuICAtLWhpdDogcmdiKDE2MywgNTYsIDU2KTtcXG4gIC0tbWlzczogcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiAgLS1ob3ZlcjogcmdiKDE3NCwgMTc0LCAxNzQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY2xyKTtcXG59XFxuXFxuLyogSEVBREVSIHx8ICovXFxuLmhlYWRlci1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAtMnB4IDdweCAzNHB4IC0xNHB4IHJnYmEoMCwwLDAsMC43NSk7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY2xyKTtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuXFxuLyogTUFJTiBDT05UQUlORVIgfHwgKi9cXG4uY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBGSVggKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbn1cXG5cXG4vKiBOQU1FIElOUFVUIHx8ICovXFxuLnBsYXllci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogQk9BUkQgQ09OVEFJTkVSIHx8ICovXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM2VtO1xcbn1cXG5cXG4uaHVtYW4tYm9hcmQsIC5jb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQwcHgpO1xcbiAgLyogcGFkZGluZzogMWVtOyAqL1xcbn1cXG5cXG4uZ3JpZC1jZWxsIHtcXG4gIC8qIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDsgKi9cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbi8qIFBMQVlFUiBESVYgfHwgKi9cXG4ubmFtZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmh1bWFuLW5hbWUsIC5jb21wdXRlci1uYW1lIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLndpbm5lci1kaXYge1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLyogQlVUVE9OUyB8fCAqL1xcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNscik7XFxufVxcblxcbi8qIFBST1BFUlRZIENPTE9VUlMgfHwgKi9cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xcbn1cXG5cXG4vKiBFRkZFQ1RTIHx8ICovXFxuI2NvbmZpcm0tYnRuOmFjdGl2ZSwgLnJhbmRvbWl6ZS1idG46YWN0aXZlLCAuc3RhcnQtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi5uby1jbGljayB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogLmdyaWQtY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFNjcmVlbkNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9zY3JlZW5Db250cm9sbGVyXCI7XG5cblNjcmVlbkNvbnRyb2xsZXIoKTsiLCJpbXBvcnQgeyBDb21wdXRlciwgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIEdhbWVDb250cm9sbGVyKGh1bWFuTmFtZSwgY29tcHV0ZXJOYW1lID0gXCJMaWwgQ1BVXCIpIHtcbiAgbGV0IGh1bWFuID0gUGxheWVyKGh1bWFuTmFtZSk7XG4gIGxldCBjb21wdXRlciA9IENvbXB1dGVyKGNvbXB1dGVyTmFtZSk7XG5cbiAgbGV0IHBsYXllcnMgPSBbaHVtYW4sIGNvbXB1dGVyXTtcblxuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcnNbMF07XG4gIGxldCBvcHBvbmVudCA9IHBsYXllcnNbMV07XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKHksIHgpID0+IHtcbiAgICBpZiAoaHVtYW4ucGxheWVyQm9hcmQuaXNCb2FyZEVtcHR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBwbGF5ZXIgaXMgaHVtYW4gYW5kIGNhbGwgY29ycmVjdCBtZXRob2Qgb24gY29tcHV0ZXJcbiAgICBpZiAoZ2V0Q3VycmVudFBsYXllcigpID09IHBsYXllcnNbMF0pIHtcbiAgICAgIG9wcG9uZW50LnJlY2VpdmVQbGF5ZXJBdHRhY2soeSwgeCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgIC8vICAgXCJUaGlzIGlzIGNvbXB1dGVyIGJvYXJkIHdoZW4gY3VycmVudCBwbGF5ZXIgaXMgaHVtYW5cIixcbiAgICAgIC8vICAgZ2V0Q29tcHV0ZXJCb2FyZCgpLFxuICAgICAgLy8gKTtcblxuICAgICAgLy8gSWYgY29tcHV0ZXIgdGhlbiBjYWxsIGNvbXB1dGVyQXR0YWNrIG9uIGh1bWFuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICBcIlRoaXMgaXMgaHVtYW4gYm9hcmQgd2hlbiBjdXJyZW50IHBsYXllciBpcyBjb21wdXRlclwiLFxuICAgICAgLy8gICBnZXRIdW1hbkJvYXJkKCksXG4gICAgICAvLyApO1xuICAgICAgY3VycmVudFBsYXllci5jb21wdXRlckF0dGFjayhvcHBvbmVudCk7XG4gICAgfVxuICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICBwcmludFJvdW5kSW5mbygpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgaWYgKGdldEN1cnJlbnRQbGF5ZXIoKSA9PSBwbGF5ZXJzWzBdKSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyc1sxXTtcbiAgICAgIG9wcG9uZW50ID0gcGxheWVyc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcnNbMF07XG4gICAgICBvcHBvbmVudCA9IHBsYXllcnNbMV07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9ICgpID0+IHtcbiAgICBsZXQgaHVtYW5DcnVpc2VyID0gU2hpcCgyKTtcbiAgICBsZXQgaHVtYW5TdWIgPSBTaGlwKDMpO1xuICAgIGxldCBodW1hbkRlc3Ryb3llciA9IFNoaXAoMyk7XG4gICAgbGV0IGh1bWFuQmF0dGxlc2hpcCA9IFNoaXAoNCk7XG4gICAgbGV0IGh1bWFuQ2FycmllciA9IFNoaXAoNSk7XG5cbiAgICBsZXQgY29tcHV0ZXJDcnVpc2VyID0gU2hpcCgyKTtcbiAgICBsZXQgY29tcHV0ZXJTdWIgPSBTaGlwKDMpO1xuICAgIGxldCBjb21wdXRlckRlc3Ryb3llciA9IFNoaXAoMyk7XG4gICAgbGV0IGNvbXB1dGVyQmF0dGxlc2hpcCA9IFNoaXAoNCk7XG4gICAgbGV0IGNvbXB1dGVyQ2FycmllciA9IFNoaXAoNSk7XG5cbiAgICBodW1hbi5wbGFjZVBsYXllclNoaXBSYW5kb21seShodW1hbkNydWlzZXIpO1xuICAgIGh1bWFuLnBsYWNlUGxheWVyU2hpcFJhbmRvbWx5KGh1bWFuU3ViKTtcbiAgICBodW1hbi5wbGFjZVBsYXllclNoaXBSYW5kb21seShodW1hbkRlc3Ryb3llcik7XG4gICAgaHVtYW4ucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoaHVtYW5CYXR0bGVzaGlwKTtcbiAgICBodW1hbi5wbGFjZVBsYXllclNoaXBSYW5kb21seShodW1hbkNhcnJpZXIpO1xuXG4gICAgY29tcHV0ZXIucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoY29tcHV0ZXJDcnVpc2VyKTtcbiAgICBjb21wdXRlci5wbGFjZVBsYXllclNoaXBSYW5kb21seShjb21wdXRlclN1Yik7XG4gICAgY29tcHV0ZXIucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoY29tcHV0ZXJEZXN0cm95ZXIpO1xuICAgIGNvbXB1dGVyLnBsYWNlUGxheWVyU2hpcFJhbmRvbWx5KGNvbXB1dGVyQmF0dGxlc2hpcCk7XG4gICAgY29tcHV0ZXIucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoY29tcHV0ZXJDYXJyaWVyKTtcblxuICAgIHJlc3RhcnRDb21wdXRlckF0dGFja0FycmF5KCk7XG4gIH07XG5cbiAgY29uc3QgcmVzdGFydENvbXB1dGVyQXR0YWNrQXJyYXkgPSAoKSA9PiB7XG4gICAgY29tcHV0ZXIucmVmaWxsQXR0YWNrQXJyYXkoKTtcbiAgfTtcblxuICBjb25zdCByZXR1cm5XaW5uZXIgPSAoKSA9PiB7XG4gICAgaWYgKGNoZWNrRm9yV2luKGdldEN1cnJlbnRQbGF5ZXIoKSkpIHtcbiAgICAgIHJldHVybiBgJHtnZXRPcHBvbmVudCgpLnBsYXllck5hbWV9IGlzIHRoZSB3aW5uZXIhYDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tGb3JXaW4oZ2V0T3Bwb25lbnQoKSkpIHtcbiAgICAgIHJldHVybiBgJHtnZXRDdXJyZW50UGxheWVyKCkucGxheWVyTmFtZX0gaXMgdGhlIHdpbm5lciFgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0ZvcldpbiA9IChwbGF5ZXJPYmopID0+IHtcbiAgICBpZiAocGxheWVyT2JqLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmludFJvdW5kSW5mbyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgSXQncyAke2dldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJOYW1lfSdzIHR1cm5gKTtcbiAgfTtcblxuICBjb25zdCByZXBsYWNlQm9hcmRzID0gKCkgPT4ge1xuICAgIGh1bWFuLnBsYXllckJvYXJkLmdlbmVyYXRlQm9hcmQoKTtcbiAgICBjb21wdXRlci5wbGF5ZXJCb2FyZC5nZW5lcmF0ZUJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VycmVudFBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VycmVudFBsYXllcjtcbiAgfTtcblxuICBjb25zdCBnZXRPcHBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gb3Bwb25lbnQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0SHVtYW5PYmplY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGh1bWFuO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbXB1dGVyT2JqZWN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBjb21wdXRlcjtcbiAgfTtcblxuICBjb25zdCBnZXRIdW1hbkJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBodW1hbi5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgfTtcblxuICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBjb21wdXRlci5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEN1cnJlbnRQbGF5ZXIsXG4gICAgZ2V0T3Bwb25lbnQsXG4gICAgcGxheVJvdW5kLFxuICAgIGdldEh1bWFuQm9hcmQsXG4gICAgZ2V0Q29tcHV0ZXJCb2FyZCxcbiAgICBnZXRDb21wdXRlck9iamVjdCxcbiAgICBnZXRIdW1hbk9iamVjdCxcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIHByaW50Um91bmRJbmZvLFxuICAgIHJldHVybldpbm5lcixcbiAgICBjaGVja0ZvcldpbixcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcmVwbGFjZUJvYXJkcyxcbiAgfTtcbn1cblxuZXhwb3J0IHsgR2FtZUNvbnRyb2xsZXIgfTtcbiIsImZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGxldCBwbGFjZWRTaGlwcyA9IFtdO1xuICBsZXQgbWlzc2VkSGl0cyA9IFtdO1xuICAvLyBDcmVhdGUgMTB4MTAgYXJyYXkgd2l0aCBvYmplY3QgaW4gZWFjaCBpbmRleFxuICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIHBsYWNlZFNoaXBzID0gW107XG4gICAgbWlzc2VkSGl0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IHtcbiAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgIGJlZW5IaXQ6IGZhbHNlLFxuICAgICAgICAgIG1pc3NlZEhpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB5LCB4LCBsYXlvdXQpID0+IHtcbiAgICBpc091dE9mQm91bmRzKHNoaXAsIHksIHgpO1xuICAgIGhhc092ZXJsYXAoc2hpcCwgeSwgeCwgbGF5b3V0KTtcblxuICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBsYXlvdXQsIGl0IHdpbGwgYmUgaG9yaXpvbnRhbCBlbHNlIGl0IHdpbGwgYmUgdmVydGljYWxcbiAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgYm9hcmRbeV1beF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkW3ldW3hdLnNoaXAgPSBzaGlwO1xuICAgICAgICB5ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICAvLyBDaGVja3MgaWYgc2hpcCB3aWxsIGJlIG91dCBvZiBib3VuZHMgb3Igb3ZlcmxhcCBhbmQgY2FsbHMgZnVuY3Rpb24gYWdhaW4gdG8gZ2VuZXJhdGUgbmV3IGNvb3JkaW5hdGVzXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbWx5ID0gKHNoaXApID0+IHtcbiAgICBsZXQgcmFuZG9tWCA9IHJhbmRvbU51bSgpO1xuICAgIGxldCByYW5kb21ZID0gcmFuZG9tTnVtKCk7XG4gICAgbGV0IHJhbmRvbUJvb2xWYWwgPSByYW5kb21Cb29sKCk7XG5cbiAgICBpZiAoXG4gICAgICBpc091dE9mQm91bmRzKHNoaXAsIHJhbmRvbVksIHJhbmRvbVgpIHx8XG4gICAgICBoYXNPdmVybGFwKHNoaXAsIHJhbmRvbVksIHJhbmRvbVgsIHJhbmRvbUJvb2xWYWwpXG4gICAgKSB7XG4gICAgICBwbGFjZVNoaXBSYW5kb21seShzaGlwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2VTaGlwKHNoaXAsIHJhbmRvbVksIHJhbmRvbVgsIHJhbmRvbUJvb2xWYWwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByYW5kb21OdW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpICsgMCk7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tQm9vbCA9ICgpID0+IE1hdGgucmFuZG9tKCkgPj0gMC41O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeSwgeCkgPT4ge1xuICAgIGxldCB0YXJnZXRDZWxsID0gYm9hcmRbeV1beF07XG5cbiAgICBpZiAoaXNBbHJlYWR5SGl0KGJvYXJkLCB5LCB4KSkge1xuICAgICAgdGhyb3cgXCJCZWVuIGhpdCBhbHJlYWR5XCI7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldENlbGwuc2hpcCAhPSBudWxsKSB7XG4gICAgICB0YXJnZXRDZWxsLnNoaXAuaGl0KCk7XG4gICAgICB0YXJnZXRDZWxsLmJlZW5IaXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZFt5XVt4XS5taXNzZWRIaXQgPSB0cnVlO1xuICAgICAgbWlzc2VkSGl0cy5wdXNoKFt5LCB4XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzQWxyZWFkeUhpdCA9IChib2FyZCwgeSwgeCkgPT4ge1xuICAgIGlmIChib2FyZFt5XVt4XS5iZWVuSGl0ID09PSB0cnVlIHx8IGJvYXJkW3ldW3hdLm1pc3NlZEhpdCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgcGxhY2VkU2hpcHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0LmlzU3VuaygpKSB7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb3VudGVyID09PSBwbGFjZWRTaGlwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzT3V0T2ZCb3VuZHMgPSAoc2hpcCwgeSwgeCkgPT4ge1xuICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcC5zaGlwTGVuZ3RoO1xuXG4gICAgbGV0IG1heFkgPSB5ICsgc2hpcExlbmd0aDtcbiAgICBsZXQgbWF4WCA9IHggKyBzaGlwTGVuZ3RoO1xuXG4gICAgaWYgKHkgPCAwIHx8IHggPCAwIHx8IG1heFkgPiA5IHx8IG1heFggPiA5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICAvLyBMb29wIHRocm91Z2ggbGVuZ3RoIG9mIHNoaXAgYW5kIGNoZWNrIGJvYXJkIGlmIHRoZXJlIGlzIGEgc2hpcCBhdCB0aGF0IGNvb3JkaW5hdGVcbiAgY29uc3QgaGFzT3ZlcmxhcCA9IChzaGlwT2JqLCB5LCB4LCBsYXlvdXQpID0+IHtcbiAgICBpZiAoYm9hcmRbeV1beF0uc2hpcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBPYmouc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYm9hcmRbeV1beF0uc2hpcCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICB4ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzQm9hcmRFbXB0eSA9ICgpID0+IHtcbiAgICBpZiAocGxhY2VkU2hpcHMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGdlbmVyYXRlQm9hcmQoKTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGhhc092ZXJsYXAsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGlzQm9hcmRFbXB0eSxcbiAgICBnZW5lcmF0ZUJvYXJkLFxuICAgIGlzQWxyZWFkeUhpdCxcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBnZXQgbWlzc2VkSGl0cygpIHtcbiAgICAgIHJldHVybiBtaXNzZWRIaXRzO1xuICAgIH0sXG4gICAgZ2V0IHBsYWNlZFNoaXBzKCkge1xuICAgICAgcmV0dXJuIHBsYWNlZFNoaXBzO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyTmFtZSkge1xuICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAoc2hpcCwgeSwgeCwgbGF5b3V0KSA9PiB7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIHksIHgsIGxheW91dCk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkgPSAoc2hpcCkgPT4ge1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVQbGF5ZXJBdHRhY2sgPSAoeSwgeCkgPT4ge1xuICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrRW5lbXlCb2FyZCA9IChvcHBvbmVudCwgeSwgeCkgPT4ge1xuICAgIG9wcG9uZW50LnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcGxheWVyTmFtZSA9IG5ld05hbWU7XG4gICAgcmV0dXJuIG5ld05hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcGxheWVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgIH0sXG4gICAgdXBkYXRlTmFtZSxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBwbGFjZVBsYXllclNoaXAsXG4gICAgcGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHksXG4gICAgcmVjZWl2ZVBsYXllckF0dGFjayxcbiAgICBhdHRhY2tFbmVteUJvYXJkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBDb21wdXRlcihwbGF5ZXJOYW1lID0gXCJMaWwgQ1BVXCIpIHtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIocGxheWVyTmFtZSk7XG4gIGNvbnN0IHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBwbGFjZVBsYXllclNoaXAsXG4gICAgcGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHksXG4gICAgcmVjZWl2ZVBsYXllckF0dGFjayxcbiAgfSA9IGNvbXB1dGVyO1xuXG4gIC8vIFJhbmRvbWx5IGNob29zZSBvbmUgc3BvdFxuICAvLyBVc2UgdGhhdCB0byBhdHRhY2sgdGhlIHBsYXllclxuICAvLyBGaW5kIGluZGV4IG9mIHRoYXQgYXR0YWNrIHRoZW4gZGVsZXRlIGZyb20gYXJyYXlcbiAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgbGV0IHNpbmdsZUF0dGFjayA9XG4gICAgICBhbGxBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbEF0dGFja3MubGVuZ3RoKV07XG4gICAgY29uc29sZS5sb2coYWxsQXR0YWNrcyk7XG4gICAgcGxheWVyLnJlY2VpdmVQbGF5ZXJBdHRhY2soc2luZ2xlQXR0YWNrWzBdLCBzaW5nbGVBdHRhY2tbMV0pO1xuXG4gICAgbGV0IGF0dGFja0luZGV4ID0gcmV0dXJuSW5kZXhPZkNvb3JkKGFsbEF0dGFja3MsIHNpbmdsZUF0dGFjayk7XG4gICAgYWxsQXR0YWNrcy5zcGxpY2UoYXR0YWNrSW5kZXgsIDEpO1xuICB9O1xuICAvLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBhdHRhY2sgZnJvbSB0aGUgYXJyYXkgdGhhdCBob2xkcyBhbGwgYXR0YWNrc1xuICBjb25zdCByZXR1cm5JbmRleE9mQ29vcmQgPSAoYXJyYXksIHZhbHVlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudFswXSA9PT0gdmFsdWVbMF0gJiYgZWxlbWVudFsxXSA9PT0gdmFsdWVbMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG4gIC8vIENyZWF0ZSBhbGwgcG9zc2libGUgYXR0YWNrcyBpbiBhbiBhcnJheVxuICBjb25zdCBjcmVhdGVBcnJheVdpdGhBbGxBdHRhY2tzID0gKCkgPT4ge1xuICAgIGxldCBwb3NzaWJsZUF0dGFja3MgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICBwb3NzaWJsZUF0dGFja3MucHVzaChbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9zc2libGVBdHRhY2tzO1xuICB9O1xuXG4gIGNvbnN0IHJlZmlsbEF0dGFja0FycmF5ID0gKCkgPT4ge1xuICAgIGFsbEF0dGFja3MgPSBjcmVhdGVBcnJheVdpdGhBbGxBdHRhY2tzKCk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGFycmF5IG9mIGF0dGFja3NcbiAgbGV0IGFsbEF0dGFja3MgPSBjcmVhdGVBcnJheVdpdGhBbGxBdHRhY2tzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcGxheWVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgIH0sXG4gICAgcGxheWVyQm9hcmQsXG4gICAgcGxhY2VQbGF5ZXJTaGlwLFxuICAgIHBsYWNlUGxheWVyU2hpcFJhbmRvbWx5LFxuICAgIHJlY2VpdmVQbGF5ZXJBdHRhY2ssXG4gICAgY29tcHV0ZXJBdHRhY2ssXG4gICAgcmVmaWxsQXR0YWNrQXJyYXksXG4gIH07XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTtcbiIsImltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcigpIHtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKTtcbiAgY29uc3QgcmFuZG9taXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemUtYnRuXCIpO1xuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtLWJ0blwiKTtcblxuICBsZXQgcGxhY2VIb2xkZXIgPSBQbGF5ZXIoKTtcbiAgbGV0IGdhbWUgPSBHYW1lQ29udHJvbGxlcigpO1xuXG4gIHJlbmRlckJvYXJkKHBsYWNlSG9sZGVyLCBcImNvbXB1dGVyXCIpO1xuICByZW5kZXJCb2FyZChwbGFjZUhvbGRlciwgXCJodW1hblwiKTtcblxuICBmdW5jdGlvbiByZW5kZXJCb2FyZChvYmplY3QsIGRpdikge1xuICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGl2fS1ib2FyZGApO1xuICAgIGNvbnN0IHRoaXNCb2FyZCA9IG9iamVjdC5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgICB0aGlzQm9hcmQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXhZKSA9PiB7XG4gICAgICBlbGVtZW50LmZvckVhY2goKGl0ZW0sIGluZGV4WCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoZGl2LCBcImdyaWQtY2VsbFwiKTtcbiAgICAgICAgZ3JpZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZHNcIiwgW2luZGV4WSwgaW5kZXhYXSk7XG4gICAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICAgICAgaWYgKGl0ZW0uc2hpcCAhPSBudWxsICYmIGRpdiAhPT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChpdGVtLnNoaXAgIT0gbnVsbCkge1xuICAgICAgICAvLyAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKGl0ZW0ubWlzc2VkSGl0ID09IHRydWUpIHtcbiAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uYmVlbkhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQbGF5ZXJOYW1lKCkge1xuICAgIGNvbnN0IHBsYXllck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcblxuICAgIHJldHVybiBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5TmFtZXMoaHVtYW5PYmosIGNvbXB1dGVyT2JqKSB7XG4gICAgY29uc3QgaHVtYW5OYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1uYW1lXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItbmFtZVwiKTtcblxuICAgIGh1bWFuTmFtZURpdi50ZXh0Q29udGVudCA9IGh1bWFuT2JqLnBsYXllck5hbWU7XG4gICAgY29tcHV0ZXJOYW1lRGl2LnRleHRDb250ZW50ID0gY29tcHV0ZXJPYmoucGxheWVyTmFtZTtcbiAgfVxuXG4gIC8vIE5vdCB1c2VkIGFzIHR1cm5zIHN3aXRjaCBpbnN0YW50bHlcbiAgZnVuY3Rpb24gZGlzcGxheVR1cm4oKSB7XG4gICAgY29uc3QgcGxheWVyVHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR1cm5cIik7XG4gICAgcGxheWVyVHVybi50ZXh0Q29udGVudCA9IGAke2dhbWUuZ2V0Q3VycmVudFBsYXllcigpLnBsYXllck5hbWV9J3MgdHVybmA7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5V2lubmVyQW5kRW5kR2FtZSgpIHtcbiAgICBjb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1kaXZcIik7XG5cbiAgICBpZiAoXG4gICAgICBnYW1lLmNoZWNrRm9yV2luKGdhbWUuZ2V0SHVtYW5PYmplY3QoKSkgfHxcbiAgICAgIGdhbWUuY2hlY2tGb3JXaW4oZ2FtZS5nZXRDb21wdXRlck9iamVjdCgpKVxuICAgICkge1xuICAgICAgd2lubmVyRGl2LnRleHRDb250ZW50ID0gZ2FtZS5yZXR1cm5XaW5uZXIoKTtcbiAgICAgIGRpc2FibGVDb21wdXRlckJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUNlbGxzQ2xpY2thYmxlKCkge1xuICAgIGNvbnN0IGFsbENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWNlbGxcIik7XG4gICAgYWxsQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY2xlYXJET01Cb2FyZHMoKTtcbiAgICAgICAgcGxheVJvdW5kc1dpdGhDaGVjayhlKTtcbiAgICAgICAgcmVuZGVyQm9hcmQoZ2FtZS5nZXRIdW1hbk9iamVjdCgpLCBcImh1bWFuXCIpO1xuICAgICAgICByZW5kZXJCb2FyZChnYW1lLmdldENvbXB1dGVyT2JqZWN0KCksIFwiY29tcHV0ZXJcIik7XG4gICAgICAgIGRpc3BsYXlXaW5uZXJBbmRFbmRHYW1lKCk7XG4gICAgICAgIG1ha2VDZWxsc0NsaWNrYWJsZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5Um91bmRzV2l0aENoZWNrKGUpIHtcbiAgICBsZXQgc3BsaXRDb29yZHMgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3Jkcy5zcGxpdChcIixcIik7XG4gICAgbGV0IHkgPSBzcGxpdENvb3Jkc1swXTtcbiAgICBsZXQgeCA9IHNwbGl0Q29vcmRzWzFdO1xuXG4gICAgaWYgKFxuICAgICAgZ2FtZS5nZXRDb21wdXRlckJvYXJkKClbeV1beF0uYmVlbkhpdCA9PSB0cnVlIHx8XG4gICAgICBnYW1lLmdldENvbXB1dGVyQm9hcmQoKVt5XVt4XS5taXNzZWRIaXQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnYW1lLnBsYXlSb3VuZCh5LCB4KTtcbiAgICBnYW1lLnBsYXlSb3VuZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZUh1bWFuQm9hcmQoKSB7XG4gICAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW4tYm9hcmRcIik7XG5cbiAgICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJuby1jbGlja1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVDb21wdXRlckJvYXJkKCkge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwibm8tY2xpY2tcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVDb21wdXRlckJvYXJkKCkge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tY2xpY2tcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckRPTUJvYXJkcygpIHtcbiAgICBjb25zdCBodW1hbkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1ib2FyZFwiKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcbiAgICBjb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1kaXZcIik7XG5cbiAgICBodW1hbkJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb21wdXRlckJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB3aW5uZXJEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgIGNvbnN0IG5hbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZS1kaWFsb2dcIik7XG5cbiAgICBuYW1lTW9kYWwuc2hvd01vZGFsKCk7XG4gIH1cblxuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGdhbWUuZ2V0SHVtYW5PYmplY3QoKS51cGRhdGVOYW1lKGdldFBsYXllck5hbWUoKSk7XG4gICAgZGlzcGxheU5hbWVzKGdhbWUuZ2V0SHVtYW5PYmplY3QoKSwgZ2FtZS5nZXRDb21wdXRlck9iamVjdCgpKTtcblxuICAgIGNvbnN0IG5hbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZS1kaWFsb2dcIik7XG4gICAgbmFtZU1vZGFsLmNsb3NlKCk7XG4gIH0pO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFrZUNlbGxzQ2xpY2thYmxlKCk7XG4gIH0pO1xuXG4gIHJhbmRvbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdhbWUucmVwbGFjZUJvYXJkcygpO1xuICAgIGNsZWFyRE9NQm9hcmRzKCk7XG4gICAgZ2FtZS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICBlbmFibGVDb21wdXRlckJvYXJkKCk7XG4gICAgcmVuZGVyQm9hcmQoZ2FtZS5nZXRIdW1hbk9iamVjdCgpLCBcImh1bWFuXCIpO1xuICAgIHJlbmRlckJvYXJkKGdhbWUuZ2V0Q29tcHV0ZXJPYmplY3QoKSwgXCJjb21wdXRlclwiKTtcbiAgfSk7XG5cbiAgZGlzYWJsZUh1bWFuQm9hcmQoKTtcbiAgc2hvd01vZGFsKCk7XG59XG4iLCJmdW5jdGlvbiBTaGlwKHNoaXBMZW5ndGgsIGhpdHMgPSAwKSB7XG4gIGlmICghc2hpcExlbmd0aCkgdGhyb3cgXCJNaXNzaW5nIGFyZ3VtZW50IGZvciBzaGlwXCI7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBMZW5ndGggPT09IGhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXNzaWduTmFtZSA9ICgpID0+IHtcbiAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgcmV0dXJuIFwiQ3J1aXNlclwiO1xuICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgcmV0dXJuIFwiU3VibWFyaW5lXCI7XG4gICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICByZXR1cm4gXCJCYXR0bGVzaGlwXCI7XG4gICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICByZXR1cm4gXCJDYXJyaWVyXCI7XG4gICAgfVxuICB9O1xuXG4gIGxldCBuYW1lID0gYXNzaWduTmFtZSgpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBzaGlwTGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHNoaXBMZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
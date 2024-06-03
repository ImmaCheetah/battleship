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



function GameController(humanName, computerName = 'Lil CPU') {
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
            console.log('This is computer board when current player is human', getComputerBoard())

            // If computer then call computerAttack on human
        } else {
            console.log('This is human board when current player is computer', getHumanBoard())
            currentPlayer.computerAttack(opponent);
        }
        switchPlayerTurn();
        printRoundInfo();
    }

    const switchPlayerTurn = () => {
        if (getCurrentPlayer() == players[0]) {
            currentPlayer = players[1];
            opponent = players[0];
        } else {
            currentPlayer = players[0];
            opponent = players[1];
        }
    }

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
    }

    const checkForWinner = () => {
        if (getCurrentPlayer().playerBoard.allShipsSunk() == true) {
            return `${getOpponent().playerName} is the winner!`;
        }

        if (getOpponent().playerBoard.allShipsSunk() == true) {
            return `${getCurrentPlayer().playerName} is the winner!`;
        }
    }

    const printRoundInfo = () => {
        console.log(`It's ${getCurrentPlayer().playerName}'s turn`)
    }

    const replaceBoards = () => {
        human.playerBoard.generateBoard();
        computer.playerBoard.generateBoard();
    }

    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    const getOpponent = () => {
        return opponent;
    }

    const getHumanObject = () => {
        return human;
    }

    const getComputerObject = () => {
        return computer;
    }

    const getHumanBoard = () => {
        return human.playerBoard.board;
    }

    const getComputerBoard = () => {
        return computer.playerBoard.board;
    }

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
        checkForWinner,
        placeShipsRandomly,
        replaceBoards
    }
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
            board[i][j] = 
            {
                ship: null,
                beenHit: false,
                missedHit: false
            };
          }
        }
    }

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
    }

    // Checks if ship will be out of bounds or overlap and calls function again to generate new coordinates
    const placeShipRandomly = (ship) => {
        let randomX = randomNum();
        let randomY = randomNum();
        let randomBoolVal = randomBool();

        if (isOutOfBounds(ship, randomY, randomX) || hasOverlap(ship, randomY, randomX, randomBoolVal)) {
            placeShipRandomly(ship);
        } else {
            placeShip(ship, randomY, randomX, randomBoolVal);
        }
    }

    const  randomNum = () => {
        return Math.floor(Math.random() * (9 - 0 + 1) + 0);
    }

    const randomBool = () => Math.random() >= 0.5;


    const receiveAttack = (y, x) => {
        let targetCell = board[y][x];
        
        if (isAlreadyHit(board, y, x)) {
            throw ('Been hit already');  
        };

        if (targetCell.ship != null) {
            targetCell.ship.hit();
            targetCell.beenHit = true;
        } else {
            board[y][x].missedHit = true;
            missedHits.push([y,x])
        }
    }

    const isAlreadyHit = (board, y, x) => {
        if (board[y][x].beenHit === true || board[y][x].missedHit === true) {
            return true;
        }
    }

    const allShipsSunk = () => {
        let counter = 0;
        placedShips.forEach((object) => {
            if (object.isSunk()) {
                counter += 1;
            }
        })

        if (counter === placedShips.length) {
            return true;
        } else {
            return false;
        }
    }

    const isOutOfBounds = (ship, y, x) => {
        let shipLength = ship.shipLength;

        let maxY = y + shipLength;
        let maxX = x + shipLength;

        if (y < 0 || x < 0 || maxY > 9 || maxX > 9) {
            return true;
        } else {
            return false;
        }
    }

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
    }

    const isBoardEmpty = () => {
        if (placedShips.length == 0) {
            return true;
        } else {
            return false;
        }
    }

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
        }
    }
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
    }

    const placePlayerShipRandomly = (ship) => {
        playerBoard.placeShipRandomly(ship);
    }

    const receivePlayerAttack = (y, x) => {
        playerBoard.receiveAttack(y, x);
    }

    const attackEnemyBoard = (opponent, y, x) => {
        opponent.playerBoard.receiveAttack(y, x);
    }

    const updateName = (newName) => {
        playerName = newName;
        return newName;
    }
    
    return { 
        get playerName() {
            return playerName;
        },
        updateName, 
        playerBoard, 
        placePlayerShip,
        placePlayerShipRandomly, 
        receivePlayerAttack, 
        attackEnemyBoard 
    }
}

function Computer(playerName = 'Lil CPU') {
    const computer = Player(playerName);
    const {playerBoard, placePlayerShip, placePlayerShipRandomly, receivePlayerAttack} = computer;

    // Randomly choose one spot
    // Use that to attack the player
    // Find index of that attack then delete from array
    const computerAttack = (player) => {
        let singleAttack = allAttacks[Math.floor(Math.random() * allAttacks.length)]

        player.receivePlayerAttack(singleAttack[0], singleAttack[1]);

        let attackIndex = returnIndexOfCoord(allAttacks, singleAttack)
        allAttacks.splice(attackIndex, 1);
        
    }
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
        })

        return index;
    }
    // Create all possible attacks in an array
    const createArrayWithAllAttacks = () => {
        let possibleAttacks = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                possibleAttacks.push([x, y]);
            }
        }
        return possibleAttacks;
    }

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
        computerAttack
    }
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
    const startBtn = document.querySelector('.start-btn');
    const randomizeBtn = document.querySelector('.randomize-btn');
    const confirmBtn = document.getElementById('confirm-btn');

    let placeHolder = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.Player)();
    let game = (0,_gameController__WEBPACK_IMPORTED_MODULE_0__.GameController)();

    renderBoard(placeHolder, 'computer');
    renderBoard(placeHolder, 'human');

    function getPlayerName() {
        const playerNameInput = document.getElementById('name');

        return playerNameInput.value;
    }

    function renderBoard(object, div) {
        const boardDiv = document.querySelector(`.${div}-board`);
        const thisBoard = object.playerBoard.board;
        thisBoard.forEach((element, indexY) => {
            element.forEach((item, indexX) => {
                const gridCell = document.createElement('button');
                gridCell.classList.add(div, 'grid-cell');
                gridCell.setAttribute('data-coords', [indexY, indexX])
                boardDiv.appendChild(gridCell)
                if (item.ship != null && div !== 'computer') {
                    gridCell.classList.add('ship');
                }
                // if (item.ship != null) {
                //     gridCell.classList.add('ship');
                // }

                if (item.missedHit == true) {
                    gridCell.classList.add('missed');
                }

                if (item.beenHit == true) {
                    gridCell.classList.add('hit');
                }

            })
        })
    }

    function displayNames(humanObj, computerObj) {
        const humanNameDiv = document.querySelector('.human-name');
        const computerNameDiv = document.querySelector('.computer-name');

        humanNameDiv.textContent = humanObj.playerName;
        computerNameDiv.textContent = computerObj.playerName;
    }

    // Not used as turns switch instantly
    function displayTurn() {
        const playerTurn = document.querySelector('.player-turn');
        playerTurn.textContent = `${game.getCurrentPlayer().playerName}'s turn`;
    }

    function displayWinnerAndEndGame() {
        const winnerDiv = document.querySelector('.winner-div');

        if (!game.getHumanObject().playerBoard.isBoardEmpty()) {
            winnerDiv.textContent = game.checkForWinner();
        }

    }

    function makeCellsClickable() {
        const allCells = document.querySelectorAll('.grid-cell');
        allCells.forEach((element) => {
            element.addEventListener('click', (e) => {
                clearDOMBoards();
                playRoundsWithCheck(e);
                renderBoard(game.getHumanObject(), 'human');
                renderBoard(game.getComputerObject(), 'computer');
                displayWinnerAndEndGame();
                makeCellsClickable();
                alternateDisableBoard();
            })
        })
    }

    function playRoundsWithCheck(e) {
        let splitCoords = e.target.dataset.coords.split(',');
        let y = splitCoords[0];
        let x = splitCoords[1];

        if (game.getComputerBoard()[y][x].beenHit == true || game.getComputerBoard()[y][x].missedHit === true) {
            return;
        }

        game.playRound(y, x);
        game.playRound();
    }

    function alternateDisableBoard() {
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        if (game.getCurrentPlayer() == game.getHumanObject()) {
            humanBoard.classList.add('no-click');
            computerBoard.classList.remove('no-click');
        } else {
            humanBoard.classList.remove('no-click');
            computerBoard.classList.add('no-click');
        }
    }

    function clearDOMBoards() {
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        humanBoard.textContent = '';
        computerBoard.textContent = '';
    }

    
    alternateDisableBoard();
    // alternateDisableBoard();
    showModal(); 

    function showModal() {
        const nameModal = document.getElementById('name-dialog');

        nameModal.showModal(); 
    }

    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();

        game.getHumanObject().updateName(getPlayerName())
        displayNames(game.getHumanObject(), game.getComputerObject());

        const nameModal = document.getElementById('name-dialog');
        nameModal.close();
    })
    
    startBtn.addEventListener('click', () => {
        makeCellsClickable();
    })

    randomizeBtn.addEventListener('click', () => {
        game.replaceBoards(); 
        clearDOMBoards();
        game.placeShipsRandomly();
        renderBoard(game.getHumanObject(), 'human');
        renderBoard(game.getComputerObject(), 'computer');
    })
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
    if (!shipLength) throw ('Missing argument for ship');

    const hit = () => {
        hits += 1;
    }
    
    const isSunk = () => {
        if (shipLength === hits) {
            return true;
        }
        return false
    }
    
    const assignName = () => {
        if (shipLength === 2) {
            return 'Cruiser';
        } else if (shipLength === 3) {
            return 'Submarine'
        } else if (shipLength === 4) {
            return 'Battleship';
        } else if (shipLength === 5) {
            return 'Carrier';
        }
    }
    
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
        isSunk 
    }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9KNEI7O0FBRTlDO0FBQ0Esc0JBQXNCLDREQUFTOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDRFQUE0RTs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZrRDtBQUNDOztBQUVwQztBQUNmO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQU07QUFDNUIsZUFBZSwrREFBYzs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsSUFBSTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDeEpBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9tb2R1bGVzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvbW9kdWxlcy9zY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ1NTIFJFU0VUIHx8ICovXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBWQVJJQUJMRVMgfHwgKi9cbjpyb290IHtcbiAgLS1oZWFkZXI6ICMzODM4Mzg7XG4gIC0tYm9yZGVyLWNscjogI0E1MDUxOTtcbiAgLS1tYWluLXRleHQtY2xyOiByZ2IoMjU1LCAyNTQsIDI1NCk7XG4gIC0tYmc6ICNhMWExYTE7XG4gIC0tY2VsbHM6IHJnYigyNTQsIDI1MywgMjUzKTtcbiAgLS1zaGlwOiAjNjM5NWQyO1xuICAtLWhpdDogcmdiKDE2MywgNTYsIDU2KTtcbiAgLS1taXNzOiByZ2IoMTI4LCAxMjgsIDEyOCk7XG4gIC0taG92ZXI6IHJnYigxNzQsIDE3NCwgMTc0KTtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jbHIpO1xufVxuXG4vKiBIRUFERVIgfHwgKi9cbi5oZWFkZXItZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IC0ycHggN3B4IDM0cHggLTE0cHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuaDEge1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNscik7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLyogTUFJTiBDT05UQUlORVIgfHwgKi9cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRklYICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XG59XG5cbi8qIE5BTUUgSU5QVVQgfHwgKi9cbi5wbGF5ZXItaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBCT0FSRCBDT05UQUlORVIgfHwgKi9cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzZW07XG59XG5cbi5odW1hbi1ib2FyZCwgLmNvbXB1dGVyLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XG4gIC8qIHBhZGRpbmc6IDFlbTsgKi9cbn1cblxuLmdyaWQtY2VsbCB7XG4gIC8qIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4OyAqL1xuICBwYWRkaW5nOiAxMHB4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMXB4O1xufVxuXG4vKiBQTEFZRVIgRElWIHx8ICovXG4ubmFtZS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaHVtYW4tbmFtZSwgLmNvbXB1dGVyLW5hbWUge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi53aW5uZXItZGl2IHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLyogQlVUVE9OUyB8fCAqL1xuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY2xyKTtcbn1cblxuLyogUFJPUEVSVFkgQ09MT1VSUyB8fCAqL1xuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG59XG5cbi5taXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcbn1cblxuLyogRUZGRUNUUyB8fCAqL1xuI2NvbmZpcm0tYnRuOmFjdGl2ZSwgLnJhbmRvbWl6ZS1idG46YWN0aXZlLCAuc3RhcnQtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4ubm8tY2xpY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogLmdyaWQtY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7SUFDckIscUJBQXFCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBLGNBQWM7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtnQkFDYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIFJFU0VUIHx8ICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBWQVJJQUJMRVMgfHwgKi9cXG46cm9vdCB7XFxuICAtLWhlYWRlcjogIzM4MzgzODtcXG4gIC0tYm9yZGVyLWNscjogI0E1MDUxOTtcXG4gIC0tbWFpbi10ZXh0LWNscjogcmdiKDI1NSwgMjU0LCAyNTQpO1xcbiAgLS1iZzogI2ExYTFhMTtcXG4gIC0tY2VsbHM6IHJnYigyNTQsIDI1MywgMjUzKTtcXG4gIC0tc2hpcDogIzYzOTVkMjtcXG4gIC0taGl0OiByZ2IoMTYzLCA1NiwgNTYpO1xcbiAgLS1taXNzOiByZ2IoMTI4LCAxMjgsIDEyOCk7XFxuICAtLWhvdmVyOiByZ2IoMTc0LCAxNzQsIDE3NCk7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jbHIpO1xcbn1cXG5cXG4vKiBIRUFERVIgfHwgKi9cXG4uaGVhZGVyLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IC0ycHggN3B4IDM0cHggLTE0cHggcmdiYSgwLDAsMCwwLjc1KTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jbHIpO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4vKiBNQUlOIENPTlRBSU5FUiB8fCAqL1xcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7IC8qIEZJWCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbi8qIE5BTUUgSU5QVVQgfHwgKi9cXG4ucGxheWVyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBCT0FSRCBDT05UQUlORVIgfHwgKi9cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzZW07XFxufVxcblxcbi5odW1hbi1ib2FyZCwgLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAvKiBwYWRkaW5nOiAxZW07ICovXFxufVxcblxcbi5ncmlkLWNlbGwge1xcbiAgLyogd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4OyAqL1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDFweDtcXG59XFxuXFxuLyogUExBWUVSIERJViB8fCAqL1xcbi5uYW1lLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaHVtYW4tbmFtZSwgLmNvbXB1dGVyLW5hbWUge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ud2lubmVyLWRpdiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4vKiBCVVRUT05TIHx8ICovXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY2xyKTtcXG59XFxuXFxuLyogUFJPUEVSVFkgQ09MT1VSUyB8fCAqL1xcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxufVxcblxcbi8qIEVGRkVDVFMgfHwgKi9cXG4jY29uZmlybS1idG46YWN0aXZlLCAucmFuZG9taXplLWJ0bjphY3RpdmUsIC5zdGFydC1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLm5vLWNsaWNrIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiAuZ3JpZC1jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgU2NyZWVuQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL3NjcmVlbkNvbnRyb2xsZXJcIjtcblxuU2NyZWVuQ29udHJvbGxlcigpOyIsImltcG9ydCB7IENvbXB1dGVyLCBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIoaHVtYW5OYW1lLCBjb21wdXRlck5hbWUgPSAnTGlsIENQVScpIHtcbiAgICBsZXQgaHVtYW4gPSBQbGF5ZXIoaHVtYW5OYW1lKTtcbiAgICBsZXQgY29tcHV0ZXIgPSBDb21wdXRlcihjb21wdXRlck5hbWUpO1xuXG4gICAgbGV0IHBsYXllcnMgPSBbaHVtYW4sIGNvbXB1dGVyXTtcblxuICAgIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyc1swXTtcbiAgICBsZXQgb3Bwb25lbnQgPSBwbGF5ZXJzWzFdO1xuICAgIFxuICAgIGNvbnN0IHBsYXlSb3VuZCA9ICh5LCB4KSA9PiB7XG4gICAgICAgIGlmIChodW1hbi5wbGF5ZXJCb2FyZC5pc0JvYXJkRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIGlzIGh1bWFuIGFuZCBjYWxsIGNvcnJlY3QgbWV0aG9kIG9uIGNvbXB1dGVyXG4gICAgICAgIGlmIChnZXRDdXJyZW50UGxheWVyKCkgPT0gcGxheWVyc1swXSkge1xuICAgICAgICAgICAgb3Bwb25lbnQucmVjZWl2ZVBsYXllckF0dGFjayh5LCB4KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGNvbXB1dGVyIGJvYXJkIHdoZW4gY3VycmVudCBwbGF5ZXIgaXMgaHVtYW4nLCBnZXRDb21wdXRlckJvYXJkKCkpXG5cbiAgICAgICAgICAgIC8vIElmIGNvbXB1dGVyIHRoZW4gY2FsbCBjb21wdXRlckF0dGFjayBvbiBodW1hblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgaHVtYW4gYm9hcmQgd2hlbiBjdXJyZW50IHBsYXllciBpcyBjb21wdXRlcicsIGdldEh1bWFuQm9hcmQoKSlcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIuY29tcHV0ZXJBdHRhY2sob3Bwb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgcHJpbnRSb3VuZEluZm8oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0Q3VycmVudFBsYXllcigpID09IHBsYXllcnNbMF0pIHtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdO1xuICAgICAgICAgICAgb3Bwb25lbnQgPSBwbGF5ZXJzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcnNbMF07XG4gICAgICAgICAgICBvcHBvbmVudCA9IHBsYXllcnNbMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAoKSA9PiB7XG4gICAgICAgIGxldCBodW1hbkNydWlzZXIgPSBTaGlwKDIpO1xuICAgICAgICBsZXQgaHVtYW5TdWIgPSBTaGlwKDMpO1xuICAgICAgICBsZXQgaHVtYW5EZXN0cm95ZXIgPSBTaGlwKDMpO1xuICAgICAgICBsZXQgaHVtYW5CYXR0bGVzaGlwID0gU2hpcCg0KTtcbiAgICAgICAgbGV0IGh1bWFuQ2FycmllciA9IFNoaXAoNSk7XG5cbiAgICAgICAgbGV0IGNvbXB1dGVyQ3J1aXNlciA9IFNoaXAoMik7XG4gICAgICAgIGxldCBjb21wdXRlclN1YiA9IFNoaXAoMyk7XG4gICAgICAgIGxldCBjb21wdXRlckRlc3Ryb3llciA9IFNoaXAoMyk7XG4gICAgICAgIGxldCBjb21wdXRlckJhdHRsZXNoaXAgPSBTaGlwKDQpO1xuICAgICAgICBsZXQgY29tcHV0ZXJDYXJyaWVyID0gU2hpcCg1KTtcblxuICAgICAgICBodW1hbi5wbGFjZVBsYXllclNoaXBSYW5kb21seShodW1hbkNydWlzZXIpO1xuICAgICAgICBodW1hbi5wbGFjZVBsYXllclNoaXBSYW5kb21seShodW1hblN1Yik7XG4gICAgICAgIGh1bWFuLnBsYWNlUGxheWVyU2hpcFJhbmRvbWx5KGh1bWFuRGVzdHJveWVyKTtcbiAgICAgICAgaHVtYW4ucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoaHVtYW5CYXR0bGVzaGlwKTtcbiAgICAgICAgaHVtYW4ucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoaHVtYW5DYXJyaWVyKTtcblxuICAgICAgICBjb21wdXRlci5wbGFjZVBsYXllclNoaXBSYW5kb21seShjb21wdXRlckNydWlzZXIpO1xuICAgICAgICBjb21wdXRlci5wbGFjZVBsYXllclNoaXBSYW5kb21seShjb21wdXRlclN1Yik7XG4gICAgICAgIGNvbXB1dGVyLnBsYWNlUGxheWVyU2hpcFJhbmRvbWx5KGNvbXB1dGVyRGVzdHJveWVyKTtcbiAgICAgICAgY29tcHV0ZXIucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoY29tcHV0ZXJCYXR0bGVzaGlwKTtcbiAgICAgICAgY29tcHV0ZXIucGxhY2VQbGF5ZXJTaGlwUmFuZG9tbHkoY29tcHV0ZXJDYXJyaWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Z2V0T3Bwb25lbnQoKS5wbGF5ZXJOYW1lfSBpcyB0aGUgd2lubmVyIWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0T3Bwb25lbnQoKS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Z2V0Q3VycmVudFBsYXllcigpLnBsYXllck5hbWV9IGlzIHRoZSB3aW5uZXIhYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByaW50Um91bmRJbmZvID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgSXQncyAke2dldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJOYW1lfSdzIHR1cm5gKVxuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGh1bWFuLnBsYXllckJvYXJkLmdlbmVyYXRlQm9hcmQoKTtcbiAgICAgICAgY29tcHV0ZXIucGxheWVyQm9hcmQuZ2VuZXJhdGVCb2FyZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UGxheWVyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE9wcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3Bwb25lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SHVtYW5PYmplY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBodW1hbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wdXRlck9iamVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEh1bWFuQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBodW1hbi5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29tcHV0ZXIucGxheWVyQm9hcmQuYm9hcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q3VycmVudFBsYXllciwgXG4gICAgICAgIGdldE9wcG9uZW50LCBcbiAgICAgICAgcGxheVJvdW5kLCBcbiAgICAgICAgZ2V0SHVtYW5Cb2FyZCwgXG4gICAgICAgIGdldENvbXB1dGVyQm9hcmQsXG4gICAgICAgIGdldENvbXB1dGVyT2JqZWN0LFxuICAgICAgICBnZXRIdW1hbk9iamVjdCxcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybixcbiAgICAgICAgcHJpbnRSb3VuZEluZm8sXG4gICAgICAgIGNoZWNrRm9yV2lubmVyLFxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgICAgIHJlcGxhY2VCb2FyZHNcbiAgICB9XG59XG5cbmV4cG9ydCB7R2FtZUNvbnRyb2xsZXJ9IiwiZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGxldCBwbGFjZWRTaGlwcyA9IFtdO1xuICAgIGxldCBtaXNzZWRIaXRzID0gW107XG4gICAgLy8gQ3JlYXRlIDEweDEwIGFycmF5IHdpdGggb2JqZWN0IGluIGVhY2ggaW5kZXhcbiAgICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBwbGFjZWRTaGlwcyA9IFtdO1xuICAgICAgICBtaXNzZWRIaXRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgICAgICAgYmVlbkhpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWlzc2VkSGl0OiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeSwgeCwgbGF5b3V0KSA9PiB7XG4gICAgICAgIGlzT3V0T2ZCb3VuZHMoc2hpcCwgeSwgeCk7XG4gICAgICAgIGhhc092ZXJsYXAoc2hpcCwgeSwgeCwgbGF5b3V0KTtcbiAgICAgICAgXG4gICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbGF5b3V0LCBpdCB3aWxsIGJlIGhvcml6b250YWwgZWxzZSBpdCB3aWxsIGJlIHZlcnRpY2FsXG4gICAgICAgICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeV1beF0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgeCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2FyZFt5XVt4XS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICB5ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkOyAgXG4gICAgfVxuXG4gICAgLy8gQ2hlY2tzIGlmIHNoaXAgd2lsbCBiZSBvdXQgb2YgYm91bmRzIG9yIG92ZXJsYXAgYW5kIGNhbGxzIGZ1bmN0aW9uIGFnYWluIHRvIGdlbmVyYXRlIG5ldyBjb29yZGluYXRlc1xuICAgIGNvbnN0IHBsYWNlU2hpcFJhbmRvbWx5ID0gKHNoaXApID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbVggPSByYW5kb21OdW0oKTtcbiAgICAgICAgbGV0IHJhbmRvbVkgPSByYW5kb21OdW0oKTtcbiAgICAgICAgbGV0IHJhbmRvbUJvb2xWYWwgPSByYW5kb21Cb29sKCk7XG5cbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoc2hpcCwgcmFuZG9tWSwgcmFuZG9tWCkgfHwgaGFzT3ZlcmxhcChzaGlwLCByYW5kb21ZLCByYW5kb21YLCByYW5kb21Cb29sVmFsKSkge1xuICAgICAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGFjZVNoaXAoc2hpcCwgcmFuZG9tWSwgcmFuZG9tWCwgcmFuZG9tQm9vbFZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCAgcmFuZG9tTnVtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkgKyAwKTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21Cb29sID0gKCkgPT4gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG5cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeSwgeCkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0Q2VsbCA9IGJvYXJkW3ldW3hdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzQWxyZWFkeUhpdChib2FyZCwgeSwgeCkpIHtcbiAgICAgICAgICAgIHRocm93ICgnQmVlbiBoaXQgYWxyZWFkeScpOyAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRhcmdldENlbGwuc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRDZWxsLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0YXJnZXRDZWxsLmJlZW5IaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbeV1beF0ubWlzc2VkSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIG1pc3NlZEhpdHMucHVzaChbeSx4XSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQWxyZWFkeUhpdCA9IChib2FyZCwgeSwgeCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeV1beF0uYmVlbkhpdCA9PT0gdHJ1ZSB8fCBib2FyZFt5XVt4XS5taXNzZWRIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHBsYWNlZFNoaXBzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY291bnRlciA9PT0gcGxhY2VkU2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzT3V0T2ZCb3VuZHMgPSAoc2hpcCwgeSwgeCkgPT4ge1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAuc2hpcExlbmd0aDtcblxuICAgICAgICBsZXQgbWF4WSA9IHkgKyBzaGlwTGVuZ3RoO1xuICAgICAgICBsZXQgbWF4WCA9IHggKyBzaGlwTGVuZ3RoO1xuXG4gICAgICAgIGlmICh5IDwgMCB8fCB4IDwgMCB8fCBtYXhZID4gOSB8fCBtYXhYID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggbGVuZ3RoIG9mIHNoaXAgYW5kIGNoZWNrIGJvYXJkIGlmIHRoZXJlIGlzIGEgc2hpcCBhdCB0aGF0IGNvb3JkaW5hdGVcbiAgICBjb25zdCBoYXNPdmVybGFwID0gKHNoaXBPYmosIHksIHgsIGxheW91dCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeV1beF0uc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcE9iai5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChib2FyZFt5XVt4XS5zaGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgICAgICAgICB4ICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQm9hcmRFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXBzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlQm9hcmQoKTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5LCBcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgaGFzT3ZlcmxhcCwgXG4gICAgICAgIGFsbFNoaXBzU3VuaywgXG4gICAgICAgIGlzQm9hcmRFbXB0eSxcbiAgICAgICAgZ2VuZXJhdGVCb2FyZCxcbiAgICAgICAgaXNBbHJlYWR5SGl0LFxuICAgICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgIH0sIFxuICAgICAgICBnZXQgbWlzc2VkSGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXNzZWRIaXRzO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcGxhY2VkU2hpcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7R2FtZWJvYXJkfVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiXG5cbmZ1bmN0aW9uIFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgbGV0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAoc2hpcCwgeSwgeCwgbGF5b3V0KSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChzaGlwLCB5LCB4LCBsYXlvdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlUGxheWVyU2hpcFJhbmRvbWx5ID0gKHNoaXApID0+IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZVBsYXllckF0dGFjayA9ICh5LCB4KSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrRW5lbXlCb2FyZCA9IChvcHBvbmVudCwgeSwgeCkgPT4ge1xuICAgICAgICBvcHBvbmVudC5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZU5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgICAgICBwbGF5ZXJOYW1lID0gbmV3TmFtZTtcbiAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXQgcGxheWVyTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVOYW1lLCBcbiAgICAgICAgcGxheWVyQm9hcmQsIFxuICAgICAgICBwbGFjZVBsYXllclNoaXAsXG4gICAgICAgIHBsYWNlUGxheWVyU2hpcFJhbmRvbWx5LCBcbiAgICAgICAgcmVjZWl2ZVBsYXllckF0dGFjaywgXG4gICAgICAgIGF0dGFja0VuZW15Qm9hcmQgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBDb21wdXRlcihwbGF5ZXJOYW1lID0gJ0xpbCBDUFUnKSB7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3Qge3BsYXllckJvYXJkLCBwbGFjZVBsYXllclNoaXAsIHBsYWNlUGxheWVyU2hpcFJhbmRvbWx5LCByZWNlaXZlUGxheWVyQXR0YWNrfSA9IGNvbXB1dGVyO1xuXG4gICAgLy8gUmFuZG9tbHkgY2hvb3NlIG9uZSBzcG90XG4gICAgLy8gVXNlIHRoYXQgdG8gYXR0YWNrIHRoZSBwbGF5ZXJcbiAgICAvLyBGaW5kIGluZGV4IG9mIHRoYXQgYXR0YWNrIHRoZW4gZGVsZXRlIGZyb20gYXJyYXlcbiAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IHNpbmdsZUF0dGFjayA9IGFsbEF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQXR0YWNrcy5sZW5ndGgpXVxuXG4gICAgICAgIHBsYXllci5yZWNlaXZlUGxheWVyQXR0YWNrKHNpbmdsZUF0dGFja1swXSwgc2luZ2xlQXR0YWNrWzFdKTtcblxuICAgICAgICBsZXQgYXR0YWNrSW5kZXggPSByZXR1cm5JbmRleE9mQ29vcmQoYWxsQXR0YWNrcywgc2luZ2xlQXR0YWNrKVxuICAgICAgICBhbGxBdHRhY2tzLnNwbGljZShhdHRhY2tJbmRleCwgMSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBhdHRhY2sgZnJvbSB0aGUgYXJyYXkgdGhhdCBob2xkcyBhbGwgYXR0YWNrc1xuICAgIGNvbnN0IHJldHVybkluZGV4T2ZDb29yZCA9IChhcnJheSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgICBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRbMF0gPT09IHZhbHVlWzBdICYmIGVsZW1lbnRbMV0gPT09IHZhbHVlWzFdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGFsbCBwb3NzaWJsZSBhdHRhY2tzIGluIGFuIGFycmF5XG4gICAgY29uc3QgY3JlYXRlQXJyYXlXaXRoQWxsQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBvc3NpYmxlQXR0YWNrcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQXR0YWNrcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYXJyYXkgb2YgYXR0YWNrc1xuICAgIGxldCBhbGxBdHRhY2tzID0gY3JlYXRlQXJyYXlXaXRoQWxsQXR0YWNrcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHBsYXllck5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIHBsYWNlUGxheWVyU2hpcCwgXG4gICAgICAgIHBsYWNlUGxheWVyU2hpcFJhbmRvbWx5LFxuICAgICAgICByZWNlaXZlUGxheWVyQXR0YWNrLCBcbiAgICAgICAgY29tcHV0ZXJBdHRhY2tcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSIsImltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XG4gICAgY29uc3QgcmFuZG9taXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWl6ZS1idG4nKTtcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tYnRuJyk7XG5cbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBQbGF5ZXIoKTtcbiAgICBsZXQgZ2FtZSA9IEdhbWVDb250cm9sbGVyKCk7XG5cbiAgICByZW5kZXJCb2FyZChwbGFjZUhvbGRlciwgJ2NvbXB1dGVyJyk7XG4gICAgcmVuZGVyQm9hcmQocGxhY2VIb2xkZXIsICdodW1hbicpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGxheWVyTmFtZSgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcblxuICAgICAgICByZXR1cm4gcGxheWVyTmFtZUlucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckJvYXJkKG9iamVjdCwgZGl2KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGl2fS1ib2FyZGApO1xuICAgICAgICBjb25zdCB0aGlzQm9hcmQgPSBvYmplY3QucGxheWVyQm9hcmQuYm9hcmQ7XG4gICAgICAgIHRoaXNCb2FyZC5mb3JFYWNoKChlbGVtZW50LCBpbmRleFkpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9yRWFjaCgoaXRlbSwgaW5kZXhYKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKGRpdiwgJ2dyaWQtY2VsbCcpO1xuICAgICAgICAgICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZHMnLCBbaW5kZXhZLCBpbmRleFhdKVxuICAgICAgICAgICAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGdyaWRDZWxsKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNoaXAgIT0gbnVsbCAmJiBkaXYgIT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAoaXRlbS5zaGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1pc3NlZEhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmJlZW5IaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheU5hbWVzKGh1bWFuT2JqLCBjb21wdXRlck9iaikge1xuICAgICAgICBjb25zdCBodW1hbk5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtYW4tbmFtZScpO1xuICAgICAgICBjb25zdCBjb21wdXRlck5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItbmFtZScpO1xuXG4gICAgICAgIGh1bWFuTmFtZURpdi50ZXh0Q29udGVudCA9IGh1bWFuT2JqLnBsYXllck5hbWU7XG4gICAgICAgIGNvbXB1dGVyTmFtZURpdi50ZXh0Q29udGVudCA9IGNvbXB1dGVyT2JqLnBsYXllck5hbWU7XG4gICAgfVxuXG4gICAgLy8gTm90IHVzZWQgYXMgdHVybnMgc3dpdGNoIGluc3RhbnRseVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUdXJuKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJUdXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10dXJuJyk7XG4gICAgICAgIHBsYXllclR1cm4udGV4dENvbnRlbnQgPSBgJHtnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJOYW1lfSdzIHR1cm5gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXaW5uZXJBbmRFbmRHYW1lKCkge1xuICAgICAgICBjb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWRpdicpO1xuXG4gICAgICAgIGlmICghZ2FtZS5nZXRIdW1hbk9iamVjdCgpLnBsYXllckJvYXJkLmlzQm9hcmRFbXB0eSgpKSB7XG4gICAgICAgICAgICB3aW5uZXJEaXYudGV4dENvbnRlbnQgPSBnYW1lLmNoZWNrRm9yV2lubmVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VDZWxsc0NsaWNrYWJsZSgpIHtcbiAgICAgICAgY29uc3QgYWxsQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1jZWxsJyk7XG4gICAgICAgIGFsbENlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyRE9NQm9hcmRzKCk7XG4gICAgICAgICAgICAgICAgcGxheVJvdW5kc1dpdGhDaGVjayhlKTtcbiAgICAgICAgICAgICAgICByZW5kZXJCb2FyZChnYW1lLmdldEh1bWFuT2JqZWN0KCksICdodW1hbicpO1xuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKGdhbWUuZ2V0Q29tcHV0ZXJPYmplY3QoKSwgJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVdpbm5lckFuZEVuZEdhbWUoKTtcbiAgICAgICAgICAgICAgICBtYWtlQ2VsbHNDbGlja2FibGUoKTtcbiAgICAgICAgICAgICAgICBhbHRlcm5hdGVEaXNhYmxlQm9hcmQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheVJvdW5kc1dpdGhDaGVjayhlKSB7XG4gICAgICAgIGxldCBzcGxpdENvb3JkcyA9IGUudGFyZ2V0LmRhdGFzZXQuY29vcmRzLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCB5ID0gc3BsaXRDb29yZHNbMF07XG4gICAgICAgIGxldCB4ID0gc3BsaXRDb29yZHNbMV07XG5cbiAgICAgICAgaWYgKGdhbWUuZ2V0Q29tcHV0ZXJCb2FyZCgpW3ldW3hdLmJlZW5IaXQgPT0gdHJ1ZSB8fCBnYW1lLmdldENvbXB1dGVyQm9hcmQoKVt5XVt4XS5taXNzZWRIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWUucGxheVJvdW5kKHksIHgpO1xuICAgICAgICBnYW1lLnBsYXlSb3VuZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsdGVybmF0ZURpc2FibGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1hbi1ib2FyZCcpO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5cbiAgICAgICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllcigpID09IGdhbWUuZ2V0SHVtYW5PYmplY3QoKSkge1xuICAgICAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKCduby1jbGljaycpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCduby1jbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCduby1jbGljaycpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCduby1jbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJET01Cb2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtYW4tYm9hcmQnKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuXG4gICAgICAgIGh1bWFuQm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29tcHV0ZXJCb2FyZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIFxuICAgIGFsdGVybmF0ZURpc2FibGVCb2FyZCgpO1xuICAgIC8vIGFsdGVybmF0ZURpc2FibGVCb2FyZCgpO1xuICAgIHNob3dNb2RhbCgpOyBcblxuICAgIGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgbmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtZGlhbG9nJyk7XG5cbiAgICAgICAgbmFtZU1vZGFsLnNob3dNb2RhbCgpOyBcbiAgICB9XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGdhbWUuZ2V0SHVtYW5PYmplY3QoKS51cGRhdGVOYW1lKGdldFBsYXllck5hbWUoKSlcbiAgICAgICAgZGlzcGxheU5hbWVzKGdhbWUuZ2V0SHVtYW5PYmplY3QoKSwgZ2FtZS5nZXRDb21wdXRlck9iamVjdCgpKTtcblxuICAgICAgICBjb25zdCBuYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1kaWFsb2cnKTtcbiAgICAgICAgbmFtZU1vZGFsLmNsb3NlKCk7XG4gICAgfSlcbiAgICBcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZUNlbGxzQ2xpY2thYmxlKCk7XG4gICAgfSlcblxuICAgIHJhbmRvbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ2FtZS5yZXBsYWNlQm9hcmRzKCk7IFxuICAgICAgICBjbGVhckRPTUJvYXJkcygpO1xuICAgICAgICBnYW1lLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICByZW5kZXJCb2FyZChnYW1lLmdldEh1bWFuT2JqZWN0KCksICdodW1hbicpO1xuICAgICAgICByZW5kZXJCb2FyZChnYW1lLmdldENvbXB1dGVyT2JqZWN0KCksICdjb21wdXRlcicpO1xuICAgIH0pXG59XG4iLCJmdW5jdGlvbiBTaGlwKHNoaXBMZW5ndGgsIGhpdHMgPSAwKSB7XG4gICAgaWYgKCFzaGlwTGVuZ3RoKSB0aHJvdyAoJ01pc3NpbmcgYXJndW1lbnQgZm9yIHNoaXAnKTtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSBoaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYXNzaWduTmFtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAnQ3J1aXNlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdTdWJtYXJpbmUnXG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuICdCYXR0bGVzaGlwJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gJ0NhcnJpZXInO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCBuYW1lID0gYXNzaWduTmFtZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfSwgXG4gICAgICAgIGdldCBzaGlwTGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGg7XG4gICAgICAgIH0sIFxuICAgICAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBoaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQsIFxuICAgICAgICBpc1N1bmsgXG4gICAgfVxufVxuXG5leHBvcnQge1NoaXB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
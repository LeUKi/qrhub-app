"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************************************!*\
  !*** D:/qrc-uni/main.js?{"page":"pages%2Fscan%2Fscan"} ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/scan/scan.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/scan/scan'\n        _pages_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zY2FuL3NjYW4ubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9zY2FuL3NjYW4nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** D:/qrc-uni/main.js?{"type":"appStyle"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************!*\
  !*** D:/qrc-uni/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/qrc-uni/App.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "cl-iconfont",
      "src": "url(\"https://at.alicdn.com/t/font_1725188_qbt8uo65mws.woff2?t=1620721822607\") format(\"woff2\"), url(\"https://at.alicdn.com/t/font_1725188_qbt8uo65mws.woff?t=1620721822607\") format(\"woff\"), url(\"https://at.alicdn.com/t/font_1725188_qbt8uo65mws.ttf?t=1620721822607\") format(\"truetype\")"
    }
  ],
  "cl-icon-amount-fill": {
    "content:before": "\"\\e8f9\""
  },
  "cl-icon-wallet-fill": {
    "content:before": "\"\\e8fa\""
  },
  "cl-icon-doc-fill": {
    "content:before": "\"\\e8fb\""
  },
  "cl-icon-good-fill": {
    "content:before": "\"\\e8f8\""
  },
  "cl-icon-camera-fill": {
    "content:before": "\"\\e8fc\""
  },
  "cl-icon-mail-fill": {
    "content:before": "\"\\e8fd\""
  },
  "cl-icon-bank-card-fill": {
    "content:before": "\"\\e8fe\""
  },
  "cl-icon-relay-fill": {
    "content:before": "\"\\e8f7\""
  },
  "cl-icon-comment-fill": {
    "content:before": "\"\\e634\""
  },
  "cl-icon-share": {
    "content:before": "\"\\e8f3\""
  },
  "cl-icon-link": {
    "content:before": "\"\\e8f4\""
  },
  "cl-icon-back": {
    "content:before": "\"\\e8f5\""
  },
  "cl-icon-enter": {
    "content:before": "\"\\e8f6\""
  },
  "cl-icon-top": {
    "content:before": "\"\\e8ea\""
  },
  "cl-icon-upgrade": {
    "content:before": "\"\\e8eb\""
  },
  "cl-icon-rise": {
    "content:before": "\"\\e8ec\""
  },
  "cl-icon-decline": {
    "content:before": "\"\\e8ed\""
  },
  "cl-icon-active": {
    "content:before": "\"\\e8ee\""
  },
  "cl-icon-shrink": {
    "content:before": "\"\\e8f1\""
  },
  "cl-icon-cropper": {
    "content:before": "\"\\e8f2\""
  },
  "cl-icon-fullscreen": {
    "content:before": "\"\\e8ef\""
  },
  "cl-icon-enlarge": {
    "content:before": "\"\\e8f0\""
  },
  "cl-icon-chart-pie": {
    "content:before": "\"\\e8e6\""
  },
  "cl-icon-arrow-double-left": {
    "content:before": "\"\\e8e7\""
  },
  "cl-icon-arrow-double-right": {
    "content:before": "\"\\e8e8\""
  },
  "cl-icon-like-fill": {
    "content:before": "\"\\e8df\""
  },
  "cl-icon-like": {
    "content:before": "\"\\e8e0\""
  },
  "cl-icon-my": {
    "content:before": "\"\\e8e1\""
  },
  "cl-icon-eye-open": {
    "content:before": "\"\\e8dc\""
  },
  "cl-icon-friend": {
    "content:before": "\"\\e8e2\""
  },
  "cl-icon-eye-close": {
    "content:before": "\"\\e8de\""
  },
  "cl-icon-cloud-download": {
    "content:before": "\"\\e8db\""
  },
  "cl-icon-cloud-upload": {
    "content:before": "\"\\e8da\""
  },
  "cl-icon-set": {
    "content:before": "\"\\e8e4\""
  },
  "cl-icon-chart-bar": {
    "content:before": "\"\\e8d8\""
  },
  "cl-icon-clock-fill": {
    "content:before": "\"\\e8cc\""
  },
  "cl-icon-favor-fill": {
    "content:before": "\"\\e8ce\""
  },
  "cl-icon-help-fill": {
    "content:before": "\"\\e8cf\""
  },
  "cl-icon-history-fill": {
    "content:before": "\"\\e8d0\""
  },
  "cl-icon-smile-fill": {
    "content:before": "\"\\e8d1\""
  },
  "cl-icon-success-fill": {
    "content:before": "\"\\e8d2\""
  },
  "cl-icon-map-fill": {
    "content:before": "\"\\e8d3\""
  },
  "cl-icon-prompt-fill": {
    "content:before": "\"\\e8d4\""
  },
  "cl-icon-meh-fill": {
    "content:before": "\"\\e8d5\""
  },
  "cl-icon-cry-fill": {
    "content:before": "\"\\e8d6\""
  },
  "cl-icon-delete-fill": {
    "content:before": "\"\\e8d7\""
  },
  "cl-icon-stop": {
    "content:before": "\"\\e8c4\""
  },
  "cl-icon-play": {
    "content:before": "\"\\e8c5\""
  },
  "cl-icon-more": {
    "content:before": "\"\\e8c6\""
  },
  "cl-icon-back-top": {
    "content:before": "\"\\e8bb\""
  },
  "cl-icon-map": {
    "content:before": "\"\\e8c7\""
  },
  "cl-icon-keyboard-9": {
    "content:before": "\"\\e8c8\""
  },
  "cl-icon-keyboard-26": {
    "content:before": "\"\\e8c9\""
  },
  "cl-icon-calendar": {
    "content:before": "\"\\e8bd\""
  },
  "cl-icon-customer-service": {
    "content:before": "\"\\e8be\""
  },
  "cl-icon-edit": {
    "content:before": "\"\\e8ca\""
  },
  "cl-icon-scan": {
    "content:before": "\"\\e8bf\""
  },
  "cl-icon-pay": {
    "content:before": "\"\\e8c0\""
  },
  "cl-icon-image": {
    "content:before": "\"\\e8ac\""
  },
  "cl-icon-warning-border": {
    "content:before": "\"\\e8b3\""
  },
  "cl-icon-time": {
    "content:before": "\"\\e8b5\""
  },
  "cl-icon-meh": {
    "content:before": "\"\\e8b6\""
  },
  "cl-icon-cry": {
    "content:before": "\"\\e8b7\""
  },
  "cl-icon-smile": {
    "content:before": "\"\\e8b8\""
  },
  "cl-icon-refresh": {
    "content:before": "\"\\e8ad\""
  },
  "cl-icon-plus-border": {
    "content:before": "\"\\e8ae\""
  },
  "cl-icon-minus-border": {
    "content:before": "\"\\e8af\""
  },
  "cl-icon-check-border": {
    "content:before": "\"\\e8b0\""
  },
  "cl-icon-close-border": {
    "content:before": "\"\\e8b1\""
  },
  "cl-icon-help-border": {
    "content:before": "\"\\e8b2\""
  },
  "cl-icon-caret-bottom": {
    "content:before": "\"\\e797\""
  },
  "cl-icon-caret-top": {
    "content:before": "\"\\e798\""
  },
  "cl-icon-toast-warning": {
    "content:before": "\"\\e62b\""
  },
  "cl-icon-notification": {
    "content:before": "\"\\e808\""
  },
  "cl-icon-notification-fill": {
    "content:before": "\"\\e807\""
  },
  "cl-icon-arrow-bottom": {
    "content:before": "\"\\e661\""
  },
  "cl-icon-arrow-top": {
    "content:before": "\"\\e6de\""
  },
  "cl-icon-toast-waiting": {
    "content:before": "\"\\e62a\""
  },
  "cl-icon-toast-success": {
    "content:before": "\"\\e642\""
  },
  "cl-icon-toast-error": {
    "content:before": "\"\\e644\""
  },
  "cl-icon-arrow-left": {
    "content:before": "\"\\e7ed\""
  },
  "cl-icon-arrow-right": {
    "content:before": "\"\\e806\""
  },
  "cl-icon-plus": {
    "content:before": "\"\\e809\""
  },
  "cl-icon-minus": {
    "content:before": "\"\\e80a\""
  },
  "cl-icon-check": {
    "content:before": "\"\\e645\""
  },
  "cl-icon-close": {
    "content:before": "\"\\e646\""
  },
  "cl-icon-search": {
    "content:before": "\"\\e65c\""
  },
  "cl-button": {
    "alignItems": "center",
    "justifyContent": "center",
    "height": "66rpx",
    "lineHeight": 1,
    "verticalAlign": "middle",
    "boxSizing": "border-box",
    "fontSize": "26rpx",
    "whiteSpace": "nowrap",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": "0rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "30rpx",
    "backgroundColor": "#ffffff",
    "borderRadius": "10rpx"
  },
  "cl-button__text": {
    "color": "#666666"
  },
  "cl-button__icon": {
    "marginRight": "10rpx"
  },
  "cl-button--small": {
    "height": "60rpx",
    "paddingTop": "0rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "24rpx"
  },
  "cl-button--mini": {
    "fontSize": "24rpx",
    "paddingTop": 0,
    "paddingRight": "14rpx",
    "paddingBottom": 0,
    "paddingLeft": "14rpx",
    "height": "54rpx"
  },
  "cl-button--text": {
    "backgroundColor": "rgba(0,0,0,0)",
    "borderWidth::after": 0
  },
  "cl-input": {
    "display": "flex",
    "height": "70rpx",
    "width": 100,
    "verticalAlign": "middle",
    "position": "relative",
    "borderRadius": "8rpx",
    "boxSizing": "border-box",
    "transitionProperty": "borderColor",
    "transitionDuration": 200,
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "backgroundColor": "#ffffff"
  },
  "cl-input--focus": {
    "borderColor": "rgba(64,158,255,0.7)"
  },
  "cl-input__wrap": {
    "display": "flex",
    "alignItems": "center",
    "flex": 1,
    "height": 100,
    "position": "relative"
  },
  "cl-input__inner": {
    "height": 100,
    "flex": 1,
    "fontSize": "26rpx",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#000000",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "outline": "none",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "cl-input__prepend": {
    "display": "flex",
    "alignItems": "center",
    "fontSize": "26rpx",
    "marginRight": "20rpx"
  },
  "cl-input__append": {
    "display": "flex",
    "alignItems": "center",
    "fontSize": "26rpx",
    "marginLeft": "20rpx"
  },
  "cl-input__clear": {
    "fontSize": "34rpx",
    "color": "#c1c1c1",
    "cursor": "pointer",
    "marginLeft": "20rpx"
  },
  "cl-input__icon": {
    "fontSize": "34rpx",
    "color": "#999999",
    "cursor": "pointer"
  },
  "cl-input--prefix": {
    "flexShrink": 0
  },
  "cl-input--suffix": {
    "flexShrink": 0
  },
  "cl-input-number": {
    "alignItems": "center"
  },
  "cl-input-number__plus": {
    "alignItems": "center",
    "justifyContent": "center",
    "height": "40rpx",
    "width": "40rpx",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderRadius": "6rpx",
    "fontSize": "28rpx",
    "borderWidth::after": 0,
    "borderStyle::after": "solid",
    "borderColor::after": "#000000",
    "opacity:active": 0.8,
    "backgroundColor": "#409eff",
    "color": "#ffffff"
  },
  "cl-input-number__minus": {
    "alignItems": "center",
    "justifyContent": "center",
    "height": "40rpx",
    "width": "40rpx",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderRadius": "6rpx",
    "fontSize": "28rpx",
    "borderWidth::after::after": 0,
    "borderStyle::after::after": "solid",
    "borderColor::after::after": "#000000",
    "opacity:active:active": 0.8,
    "backgroundColor": "#eeeeee"
  },
  "cl-input-number__value": {
    "fontSize": "26rpx",
    "marginTop": 0,
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx",
    "textAlign": "center"
  },
  "cl-textarea": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dcdfe6",
    "borderRadius": "8rpx",
    "width": 100,
    "boxSizing": "border-box",
    "backgroundColor": "#ffffff",
    "position": "relative",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "16rpx",
    "lineHeight": "36rpx"
  },
  "cl-textarea__count": {
    "position": "absolute",
    "right": "10rpx",
    "bottom": "4rpx",
    "fontSize": "24rpx",
    "letterSpacing": "1rpx",
    "color": "#999999"
  },
  "cl-switch": {
    "position": "relative"
  },
  "cl-checkbox": {
    "lineHeight": "40rpx",
    "fontSize": "26rpx",
    "transitionDuration": 300
  },
  "cl-checkbox__input": {
    "verticalAlign": "middle",
    "height": "40rpx",
    "width": "40rpx",
    "textAlign": "center",
    "color": "#999999",
    "marginRight": "14rpx",
    "boxSizing": "border-box",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderRadius": "6rpx",
    "position": "relative",
    "top": "-2rpx",
    "transitionDuration": 300
  },
  "cl-checkbox--border": {
    "borderRadius": "10rpx",
    "paddingTop": "14rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "14rpx",
    "paddingLeft": "20rpx",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "boxSizing": "border-box"
  },
  "cl-radio": {
    "height": "40rpx",
    "lineHeight": "40rpx",
    "fontSize": "26rpx"
  },
  "cl-radio__input": {
    "verticalAlign": "middle",
    "height": "40rpx",
    "width": "40rpx",
    "textAlign": "center",
    "color": "#999999",
    "marginRight": "14rpx",
    "boxSizing": "border-box",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "borderRadius": "40rpx",
    "transitionProperty": "color",
    "transitionDuration": 300,
    "position": "relative",
    "top": "-2rpx"
  },
  "cl-swiper": {
    "position": "relative"
  },
  "cl-swiper__btn-prev": {
    "left": "20rpx"
  },
  "cl-swiper__btn-next": {
    "right": "20rpx"
  },
  "cl-tabs": {
    "width": 100
  },
  "cl-tabs__header": {
    "display": "flex",
    "height": "80rpx",
    "position": "relative"
  },
  "cl-tabs__bar": {
    "whiteSpace": "nowrap",
    "boxSizing": "border-box",
    "flex": 1
  },
  "cl-tabs__bar-box": {
    "position": "relative",
    "height": 100,
    "width": 100
  },
  "cl-tabs__bar-item": {
    "alignItems": "center",
    "justifyContent": "center",
    "height": 100,
    "fontSize": "28rpx",
    "boxSizing": "border-box"
  },
  "cl-tabs__dropdown": {
    "alignItems": "center",
    "justifyContent": "center",
    "width": "100rpx"
  },
  "cl-tabs__dropdown-box": {
    "position": "absolute",
    "top": "80rpx",
    "left": 0,
    "width": 100,
    "boxSizing": "border-box",
    "backgroundColor": "#ffffff",
    "overflow": "hidden",
    "transitionDuration": 300,
    "zIndex": 99
  },
  "cl-tabs__line": {
    "height": "4rpx",
    "width": "16",
    "position": "absolute",
    "bottom": "2rpx",
    "borderRadius": "20rpx",
    "transitionDuration": 500,
    "backgroundColor": "#409eff"
  },
  "cl-tabs__container": {
    "backgroundColor": "#ffffff"
  },
  "cl-list": {
    "marginBottom": "20rpx"
  },
  "cl-list-item": {
    "display": "flex",
    "alignItems": "center",
    "position": "relative",
    "overflow": "hidden",
    "backgroundColor": "#ffffff"
  },
  "cl-list-item--disabled": {
    "backgroundColor": "#eeeeee",
    "color": "#999999",
    "content:after": "\"\"",
    "backgroundColor:after": "rgba(0,0,0,0.1)",
    "position:after": "absolute",
    "left:after": 0,
    "top:after": 0,
    "right:after": 0,
    "bottom:after": 0
  },
  "cl-list-item__icon": {
    "flexShrink": 0,
    "marginRight": "20rpx"
  },
  "cl-list-item__label": {
    "flexShrink": 0,
    "display": "flex",
    "alignItems": "center",
    "minHeight": "80rpx",
    "fontSize": "28rpx",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "cl-list-item__append": {
    "flexShrink": 0,
    "display": "flex",
    "alignItems": "center",
    "minHeight": "80rpx",
    "fontSize": "26rpx"
  },
  "cl-list-item__content": {
    "display": "flex",
    "alignItems": "center",
    "minHeight": "80rpx",
    "fontSize": "26rpx",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "flex": 1
  },
  "cl-list-item__swiper": {
    "display": "flex",
    "alignItems": "center",
    "transitionDuration": 300,
    "width": 100
  },
  "cl-list-item__container": {
    "display": "flex",
    "alignItems": "center",
    "width": 100,
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "boxSizing": "border-box"
  },
  "cl-list-item__menu-left": {
    "height": 100,
    "transform": "translateX(-100%)",
    "position": "absolute",
    "transitionProperty": "left",
    "transitionDuration": 300
  },
  "cl-list-item__menu-right": {
    "height": 100,
    "transform": "translateX(100%)",
    "position": "absolute",
    "right": 0,
    "transitionProperty": "left",
    "transitionDuration": 300
  },
  "cl-col": {
    "width": 100,
    "boxSizing": "border-box",
    "content::before": "''"
  },
  "cl-col-0": {
    "width": 0
  },
  "cl-col-push-1": {
    "position": "relative",
    "left": 4.16667
  },
  "cl-col-pull-1": {
    "position": "relative",
    "right": 4.16667
  },
  "cl-col-push-2": {
    "position": "relative",
    "left": 8.33333
  },
  "cl-col-pull-2": {
    "position": "relative",
    "right": 8.33333
  },
  "cl-col-push-3": {
    "position": "relative",
    "left": 12.5
  },
  "cl-col-pull-3": {
    "position": "relative",
    "right": 12.5
  },
  "cl-col-push-4": {
    "position": "relative",
    "left": 16.66667
  },
  "cl-col-pull-4": {
    "position": "relative",
    "right": 16.66667
  },
  "cl-col-push-5": {
    "position": "relative",
    "left": 20.83333
  },
  "cl-col-pull-5": {
    "position": "relative",
    "right": 20.83333
  },
  "cl-col-push-6": {
    "position": "relative",
    "left": 25
  },
  "cl-col-pull-6": {
    "position": "relative",
    "right": 25
  },
  "cl-col-push-7": {
    "position": "relative",
    "left": 29.16667
  },
  "cl-col-pull-7": {
    "position": "relative",
    "right": 29.16667
  },
  "cl-col-push-8": {
    "position": "relative",
    "left": 33.33333
  },
  "cl-col-pull-8": {
    "position": "relative",
    "right": 33.33333
  },
  "cl-col-push-9": {
    "position": "relative",
    "left": 37.5
  },
  "cl-col-pull-9": {
    "position": "relative",
    "right": 37.5
  },
  "cl-col-push-10": {
    "position": "relative",
    "left": 41.66667
  },
  "cl-col-pull-10": {
    "position": "relative",
    "right": 41.66667
  },
  "cl-col-push-11": {
    "position": "relative",
    "left": 45.83333
  },
  "cl-col-pull-11": {
    "position": "relative",
    "right": 45.83333
  },
  "cl-col-push-12": {
    "position": "relative",
    "left": 50
  },
  "cl-col-pull-12": {
    "position": "relative",
    "right": 50
  },
  "cl-col-push-13": {
    "position": "relative",
    "left": 54.16667
  },
  "cl-col-pull-13": {
    "position": "relative",
    "right": 54.16667
  },
  "cl-col-push-14": {
    "position": "relative",
    "left": 58.33333
  },
  "cl-col-pull-14": {
    "position": "relative",
    "right": 58.33333
  },
  "cl-col-push-15": {
    "position": "relative",
    "left": 62.5
  },
  "cl-col-pull-15": {
    "position": "relative",
    "right": 62.5
  },
  "cl-col-push-16": {
    "position": "relative",
    "left": 66.66667
  },
  "cl-col-pull-16": {
    "position": "relative",
    "right": 66.66667
  },
  "cl-col-push-17": {
    "position": "relative",
    "left": 70.83333
  },
  "cl-col-pull-17": {
    "position": "relative",
    "right": 70.83333
  },
  "cl-col-push-18": {
    "position": "relative",
    "left": 75
  },
  "cl-col-pull-18": {
    "position": "relative",
    "right": 75
  },
  "cl-col-push-19": {
    "position": "relative",
    "left": 79.16667
  },
  "cl-col-pull-19": {
    "position": "relative",
    "right": 79.16667
  },
  "cl-col-push-20": {
    "position": "relative",
    "left": 83.33333
  },
  "cl-col-pull-20": {
    "position": "relative",
    "right": 83.33333
  },
  "cl-col-push-21": {
    "position": "relative",
    "left": 87.5
  },
  "cl-col-pull-21": {
    "position": "relative",
    "right": 87.5
  },
  "cl-col-push-22": {
    "position": "relative",
    "left": 91.66667
  },
  "cl-col-pull-22": {
    "position": "relative",
    "right": 91.66667
  },
  "cl-col-push-23": {
    "position": "relative",
    "left": 95.83333
  },
  "cl-col-pull-23": {
    "position": "relative",
    "right": 95.83333
  },
  "cl-col-push-24": {
    "position": "relative",
    "left": 100
  },
  "cl-col-pull-24": {
    "position": "relative",
    "right": 100
  },
  "cl-col-1": {
    "width": 4.16667
  },
  "cl-col-offset-1": {
    "marginLeft": 4.16667
  },
  "cl-col-2": {
    "width": 8.33333
  },
  "cl-col-offset-2": {
    "marginLeft": 8.33333
  },
  "cl-col-3": {
    "width": 12.5
  },
  "cl-col-offset-3": {
    "marginLeft": 12.5
  },
  "cl-col-4": {
    "width": 16.66667
  },
  "cl-col-offset-4": {
    "marginLeft": 16.66667
  },
  "cl-col-5": {
    "width": 20.83333
  },
  "cl-col-offset-5": {
    "marginLeft": 20.83333
  },
  "cl-col-6": {
    "width": 25
  },
  "cl-col-offset-6": {
    "marginLeft": 25
  },
  "cl-col-7": {
    "width": 29.16667
  },
  "cl-col-offset-7": {
    "marginLeft": 29.16667
  },
  "cl-col-8": {
    "width": 33.33333
  },
  "cl-col-offset-8": {
    "marginLeft": 33.33333
  },
  "cl-col-9": {
    "width": 37.5
  },
  "cl-col-offset-9": {
    "marginLeft": 37.5
  },
  "cl-col-10": {
    "width": 41.66667
  },
  "cl-col-offset-10": {
    "marginLeft": 41.66667
  },
  "cl-col-11": {
    "width": 45.83333
  },
  "cl-col-offset-11": {
    "marginLeft": 45.83333
  },
  "cl-col-12": {
    "width": 50
  },
  "cl-col-offset-12": {
    "marginLeft": 50
  },
  "cl-col-13": {
    "width": 54.16667
  },
  "cl-col-offset-13": {
    "marginLeft": 54.16667
  },
  "cl-col-14": {
    "width": 58.33333
  },
  "cl-col-offset-14": {
    "marginLeft": 58.33333
  },
  "cl-col-15": {
    "width": 62.5
  },
  "cl-col-offset-15": {
    "marginLeft": 62.5
  },
  "cl-col-16": {
    "width": 66.66667
  },
  "cl-col-offset-16": {
    "marginLeft": 66.66667
  },
  "cl-col-17": {
    "width": 70.83333
  },
  "cl-col-offset-17": {
    "marginLeft": 70.83333
  },
  "cl-col-18": {
    "width": 75
  },
  "cl-col-offset-18": {
    "marginLeft": 75
  },
  "cl-col-19": {
    "width": 79.16667
  },
  "cl-col-offset-19": {
    "marginLeft": 79.16667
  },
  "cl-col-20": {
    "width": 83.33333
  },
  "cl-col-offset-20": {
    "marginLeft": 83.33333
  },
  "cl-col-21": {
    "width": 87.5
  },
  "cl-col-offset-21": {
    "marginLeft": 87.5
  },
  "cl-col-22": {
    "width": 91.66667
  },
  "cl-col-offset-22": {
    "marginLeft": 91.66667
  },
  "cl-col-23": {
    "width": 95.83333
  },
  "cl-col-offset-23": {
    "marginLeft": 95.83333
  },
  "cl-col-24": {
    "width": 100
  },
  "cl-col-offset-24": {
    "marginLeft": 100
  },
  "cl-row": {
    "position": "relative",
    "boxSizing": "border-box",
    "content::after": "\"\"",
    "content::after::before": "\"\"",
    "clear::after": "both"
  },
  "cl-row--flex": {
    "display": "flex"
  },
  "cl-avatar": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "28rpx",
    "color": "#ffffff",
    "overflow": "hidden",
    "boxSizing": "border-box"
  },
  "cl-avatar--circle": {
    "borderRadius": 100
  },
  "cl-avatar--square": {
    "borderRadius": "10rpx"
  },
  "cl-avatar__placeholder": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": 100,
    "width": 100
  },
  "cl-avatar__error": {
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "22rpx",
    "textAlign": "center",
    "backgroundColor": "#eeeeee",
    "height": 100,
    "width": 100
  },
  "cl-avatar__target": {
    "height": 100,
    "width": 100
  },
  "cl-avatar-group__more": {
    "backgroundColor": "#409eff",
    "justifyContent": "center",
    "alignItems": "center",
    "height": 100,
    "width": 100,
    "content::before": "\"+\"",
    "position::before": "relative",
    "top::before": "-2rpx",
    "right::before": "2rpx"
  },
  "cl-action-sheet": {
    "position": "relative",
    "zIndex": 1000
  },
  "cl-action-sheet__item": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "80rpx",
    "fontSize": "28rpx",
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#eeeeee",
    "backgroundColor": "#ffffff",
    "borderRadius": 0,
    "borderBottomWidth:last-child": 0,
    "borderBottomStyle:last-child": "solid",
    "borderBottomColor:last-child": "#000000",
    "borderWidth:after": 0,
    "borderStyle:after": "solid",
    "borderColor:after": "#000000"
  },
  "cl-action-sheet__item--cancel": {
    "marginTop": "10rpx"
  },
  "cl-action-sheet__icon": {
    "fontSize": "40rpx",
    "marginRight": "10rpx"
  },
  "cl-search": {
    "display": "flex",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "boxSizing": "border-box"
  },
  "cl-search__input": {
    "flex": 1,
    "position": "relative"
  },
  "cl-search__prepend": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "20rpx"
  },
  "cl-search__append": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "20rpx"
  },
  "cl-grid": {
    "boxSizing": "border-box",
    "content::after": "\"\"",
    "content::after::before": "\"\"",
    "clear::after": "both"
  },
  "cl-grid-item": {
    "float": "left",
    "boxSizing": "border-box",
    "position": "relative"
  },
  "cl-grid--border": {
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#dcdfe6",
    "borderBottomWidth": 0,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#000000",
    "borderRightWidth": 0,
    "borderRightStyle": "solid",
    "borderRightColor": "#000000"
  },
  "cl-popup__wrapper": {
    "zIndex": 300,
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "opacity": 0,
    "transitionDuration": 300,
    "pointerEvents": "none",
    "content::after": "\"\"",
    "height::after": 100,
    "width::after": 0,
    "verticalAlign::after": "middle"
  },
  "cl-popup__wrapper--center": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "cl-toast": {
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "minWidth": "auto",
    "maxWidth": 80,
    "boxSizing": "border-box",
    "borderRadius": "10rpx",
    "position": "fixed",
    "left": 50,
    "transform": "translate(-50%, -50%)",
    "overflow": "hidden",
    "paddingTop": "14rpx",
    "paddingRight": "14rpx",
    "paddingBottom": "14rpx",
    "paddingLeft": "14rpx",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "zIndex": 3020,
    "opacity": 0,
    "pointerEvents": "none",
    "transitionProperty": "opacity",
    "transitionDuration": 300
  },
  "cl-toast__icon": {
    "paddingTop": "20rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "50rpx"
  },
  "cl-toast__content": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "fontSize": "26rpx",
    "lineHeight": "36rpx",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "cl-toast--default": {
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "cl-toast--primary": {
    "backgroundColor": "#409eff"
  },
  "cl-toast--success": {
    "backgroundColor": "#67c23a"
  },
  "cl-toast--error": {
    "backgroundColor": "#dd524d"
  },
  "cl-toast--warning": {
    "backgroundColor": "#e6a23c"
  },
  "cl-toast--info": {
    "backgroundColor": "#909399"
  },
  "cl-loading": {
    "lineHeight": 1
  },
  "cl-loading__inner": {
    "height": 100,
    "width": 100,
    "borderRadius": 100,
    "borderStyle": "solid",
    "boxSizing": "border-box",
    "animation": "loading-rotate 1s linear infinite",
    "color": "#409eff"
  },
  "cl-loading--spin": {
    "position": "relative",
    "animation": "loading-rotate 2s linear infinite"
  },
  "cl-loading__spin": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "height": 100,
    "width": 100
  },
  "cl-loading__spin-item": {
    "position": "absolute",
    "borderRadius": "5",
    "color": "#409eff"
  },
  "cl-badge": {
    "position": "relative",
    "verticalAlign": "middle",
    "zIndex": 9
  },
  "cl-badge__content": {
    "height": "16rpx",
    "minWidth": "16rpx",
    "lineHeight": "16rpx",
    "position": "absolute",
    "top": "-8rpx",
    "right": "-8rpx",
    "backgroundColor": "#dd524d",
    "color": "#ffffff",
    "fontSize": "24rpx",
    "textAlign": "center",
    "whiteSpace": "nowrap",
    "borderWidth": "4rpx",
    "borderStyle": "solid",
    "borderColor": "#FFFFFF",
    "borderRadius": "20rpx",
    "paddingTop": "8rpx",
    "paddingRight": "8rpx",
    "paddingBottom": "8rpx",
    "paddingLeft": "8rpx",
    "transform": "scale(0.9)"
  },
  "cl-badge__content--primary": {
    "backgroundColor": "#409eff"
  },
  "cl-badge__content--success": {
    "backgroundColor": "#67c23a"
  },
  "cl-badge__content--warning": {
    "backgroundColor": "#e6a23c"
  },
  "cl-badge__content--info": {
    "backgroundColor": "#909399"
  },
  "cl-badge__content--error": {
    "backgroundColor": "#dd524d"
  },
  "cl-card": {
    "backgroundColor": "#ffffff",
    "borderRadius": "16rpx",
    "marginBottom": "20rpx"
  },
  "cl-card__header": {
    "display": "flex",
    "alignItems": "center",
    "height": "80rpx",
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f7f7f7",
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx"
  },
  "cl-card__more": {
    "display": "flex",
    "alignItems": "center",
    "position": "absolute",
    "right": "20rpx",
    "lineHeight": "1rpx"
  },
  "cl-card__container": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "cl-card__footer": {
    "display": "flex",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "height": "90rpx",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx"
  },
  "cl-confirm": {
    "position": "relative",
    "zIndex": 310
  },
  "cl-confirm__footer": {
    "display": "flex",
    "width": 100
  },
  "cl-divider": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "80rpx",
    "width": 100,
    "position": "relative",
    "textAlign": "center",
    "boxSizing": "border-box"
  },
  "cl-divider__line": {
    "position": "absolute",
    "height": "1rpx",
    "top": 50,
    "left": 50,
    "transform": "scaleY(0.5) translateX(-50%) translateZ(0)"
  },
  "cl-divider__text": {
    "position": "absolute",
    "left": 50,
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "color": "#303133",
    "fontSize": "26rpx",
    "transform": "translateX(-50%)"
  },
  "cl-image": {
    "flexShrink": 0
  },
  "cl-image__target": {
    "height": 100,
    "width": 100,
    "maxHeight": 100,
    "maxWidth": 100
  },
  "cl-image__placeholder": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": 100,
    "width": 100
  },
  "cl-image__error": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": 100,
    "width": 100,
    "fontSize": "24rpx",
    "textAlign": "center"
  },
  "cl-li": {
    "height": 100,
    "overflow": "hidden",
    "position": "relative"
  },
  "cl-li__search": {
    "height": "100rpx",
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#eeeeee",
    "backgroundColor": "#ffffff",
    "boxSizing": "border-box",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx"
  },
  "cl-li__header": {
    "backgroundColor": "#f7f7f7",
    "paddingTop": "10rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "20rpx",
    "fontSize": "26rpx",
    "position": "sticky",
    "top": 0,
    "zIndex": 9
  },
  "cl-li__container": {
    "backgroundColor": "#ffffff"
  },
  "cl-li__item": {
    "display": "flex",
    "alignItems": "center",
    "minHeight": "80rpx",
    "fontSize": "26rpx",
    "boxSizing": "border-box",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "borderBottomWidth:last-child": 0,
    "borderBottomStyle:last-child": "solid",
    "borderBottomColor:last-child": "#000000",
    "backgroundColor:active": "#eeeeee"
  },
  "cl-li__alert": {
    "position": "absolute",
    "top": 0,
    "right": "80rpx",
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.5)",
    "width": "100rpx",
    "height": "100rpx",
    "borderRadius": "10rpx",
    "color": "#ffffff",
    "lineHeight": "100rpx",
    "textAlign": "center",
    "fontSize": "48rpx",
    "zIndex": 100
  },
  "cl-li__bar": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "position": "absolute",
    "right": "20rpx",
    "top": 0,
    "height": 100,
    "fontSize": "24rpx",
    "zIndex": 101
  },
  "cl-li__bar-block": {
    "paddingTop": "5rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "10rpx"
  },
  "cl-noticebar": {
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "cl-noticebar__icon": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx"
  },
  "cl-noticebar__close": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "color": "#999999"
  },
  "cl-noticebar__box": {
    "flex": 1,
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx",
    "overflow": "hidden"
  },
  "cl-noticebar__scroller": {
    "height": "40rpx",
    "lineHeight": "40rpx",
    "position": "relative"
  },
  "cl-noticebar__text": {
    "fontSize": "26rpx"
  },
  "cl-progress": {
    "display": "flex",
    "alignItems": "center",
    "minHeight": "34rpx"
  },
  "cl-progress-bar": {
    "boxSizing": "border-box",
    "flex": 1,
    "marginRight": "10rpx"
  },
  "cl-progress-bar__outer": {
    "borderRadius": "50rpx",
    "backgroundColor": "#ebeef5",
    "overflow": "hidden",
    "position": "relative"
  },
  "cl-progress-bar__inner": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "height": 100,
    "backgroundColor": "#409eff",
    "textAlign": "right",
    "borderRadius": "50rpx",
    "lineHeight": 1,
    "whiteSpace": "nowrap",
    "transitionProperty": "width",
    "transitionDuration": 600,
    "transitionTimingFunction": "ease"
  },
  "cl-progress__text": {
    "height": "34rpx",
    "width": "100rpx",
    "lineHeight": "34rpx",
    "color": "#606266",
    "fontSize": "24rpx",
    "textAlign": "left"
  },
  "cl-progress__icon": {
    "fontSize": "30rpx"
  },
  "cl-rate": {
    "alignItems": "center"
  },
  "cl-rate__icon": {
    "position": "relative",
    "marginRight": "10rpx",
    "color": "#409eff"
  },
  "cl-rate__icon-active": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "overflow": "hidden"
  },
  "cl-rate__text": {
    "fontSize": "26rpx",
    "marginLeft": "10rpx"
  },
  "cl-select": {
    "position": "relative",
    "width": 100,
    "paddingLeft": "20rpx",
    "paddingRight": "60rpx",
    "fontSize": "26rpx",
    "boxSizing": "border-box"
  },
  "cl-select__inner": {
    "height": "70rpx",
    "lineHeight": "70rpx"
  },
  "cl-select__value": {
    "height": "70rpx",
    "width": 100
  },
  "cl-select__icon": {
    "position": "absolute",
    "right": "18rpx",
    "top": 0
  },
  "cl-select__placeholder": {
    "color": "#999999"
  },
  "cl-select-region": {
    "width": 100
  },
  "cl-tag": {
    "borderRadius": "6rpx",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "height": "56rpx",
    "lineHeight": "56rpx",
    "fontSize": "26rpx",
    "color": "#ffffff"
  },
  "cl-tag--small": {
    "height": "56rpx",
    "lineHeight": "56rpx"
  },
  "cl-tag--mini": {
    "height": "48rpx",
    "lineHeight": "48rpx",
    "fontSize": "24rpx"
  },
  "cl-tag--primary": {
    "backgroundColor": "#409eff"
  },
  "cl-tag--success": {
    "backgroundColor": "#67c23a"
  },
  "cl-tag--warning": {
    "backgroundColor": "#e6a23c"
  },
  "cl-tag--error": {
    "backgroundColor": "#dd524d"
  },
  "cl-tag--info": {
    "backgroundColor": "#909399"
  },
  "cl-upload-list": {
    "display": "flex",
    "flexWrap": "wrap"
  },
  "cl-topbar": {
    "display": "flex",
    "alignItems": "center",
    "height": "44",
    "width": 100,
    "position": "relative"
  },
  "cl-topbar__content": {
    "width": 100
  },
  "cl-topbar__text": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "textAlign": "center"
  },
  "cl-topbar__title": {
    "fontSize": "32rpx"
  },
  "cl-topbar__description": {
    "fontSize": "22rpx",
    "color": "#999999"
  },
  "cl-topbar__prepend": {
    "display": "flex",
    "alignItems": "center",
    "height": "44",
    "position": "absolute",
    "left": 0
  },
  "cl-topbar__append": {
    "display": "flex",
    "alignItems": "center",
    "height": "44",
    "position": "absolute",
    "right": 0
  },
  "cl-topbar__icon": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "height": 100,
    "width": "80rpx",
    "fontSize": "40rpx",
    "opacity:active": 0.8
  },
  "cl-text": {
    "whiteSpace": "normal",
    "wordBreak": "break-all",
    "wordWrap": "break-word"
  },
  "cl-text__symbol--price": {
    "fontSize": "22rpx"
  },
  "cl-text__precision": {
    "fontSize": "24rpx"
  },
  "cl-text__prefix-icon": {
    "marginRight": "4rpx",
    "position": "relative",
    "top": "1rpx"
  },
  "cl-text__suffix-icon": {
    "marginLeft": "4rpx",
    "position": "relative",
    "top": "1rpx"
  },
  "cl-timeline-item": {
    "display": "flex",
    "width": 100,
    "position": "relative"
  },
  "cl-timeline-item__timestamp": {
    "fontSize": "24rpx",
    "marginTop": 0,
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx",
    "textAlign": "center"
  },
  "cl-timeline-item__date": {
    "fontSize": "24rpx",
    "textAlign": "right"
  },
  "cl-timeline-item__time": {
    "fontSize": "22rpx",
    "textAlign": "right",
    "color": "#666666"
  },
  "cl-timeline-item__node": {
    "display": "flex",
    "justifyContent": "center",
    "position": "relative",
    "width": "52rpx",
    "content::after": "\"\"",
    "width::after": "2",
    "backgroundColor::after": "#f2f2f2",
    "transform::after": "scaleX(1)",
    "position::after": "absolute",
    "top::after": "32rpx",
    "borderRadius::after": "10rpx"
  },
  "cl-timeline-item__node-box": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "32rpx",
    "width": "32rpx"
  },
  "cl-timeline-item__dot": {
    "height": "16rpx",
    "width": "16rpx",
    "zIndex": 9,
    "borderRadius": "18rpx"
  },
  "cl-timeline-item__icon": {
    "fontSize": "40rpx",
    "zIndex": 2,
    "position": "relative"
  },
  "cl-timeline-item__content": {
    "fontSize": "24rpx",
    "flex": 1,
    "marginTop": 0,
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx",
    "position": "relative",
    "paddingBottom": "60rpx"
  },
  "cl-filter-bar": {
    "display": "flex",
    "alignItems": "center",
    "fontSize": "26rpx",
    "backgroundColor": "#ffffff",
    "boxSizing": "border-box",
    "position": "relative"
  },
  "cl-filter-item": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "80rpx",
    "width": 100,
    "backgroundColor": "#ffffff",
    "color": "#727272",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "boxSizing": "border-box"
  },
  "cl-filter-item__label": {
    "marginRight": "4rpx",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "cl-filter-item__order": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "32rpx"
  },
  "cl-filter-item__order-asc": {
    "marginTop": "2rpx",
    "marginRight": 0,
    "marginBottom": "2rpx",
    "marginLeft": 0,
    "width": 0,
    "height": 0,
    "borderWidth": "5",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)",
    "borderRadius": "6rpx",
    "borderBottomColor": "#cccccc"
  },
  "cl-filter-item__order-desc": {
    "marginTop": "2rpx",
    "marginRight": 0,
    "marginBottom": "2rpx",
    "marginLeft": 0,
    "width": 0,
    "height": 0,
    "borderWidth": "5",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)",
    "borderRadius": "6rpx",
    "borderTopColor": "#cccccc"
  },
  "cl-filter-item__dropdown-icon": {
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "fontSize": "32rpx"
  },
  "cl-filter-item__dropdown-box": {
    "position": "absolute",
    "top": "80rpx",
    "left": 0,
    "maxHeight": 0,
    "width": 100,
    "backgroundColor": "#ffffff",
    "transitionDuration": 300,
    "overflow": "hidden"
  },
  "cl-filter-item__dropdown-box__label": {
    "flex": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "cl-filter-item__dropdown-box__empty": {
    "textAlign": "center",
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx",
    "color": "#999999"
  },
  "cl-filter-item__dropdown-box__btn": {
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx"
  },
  "cl-filter-item__dropdown-box__list": {
    "maxHeight": "460rpx"
  },
  "cl-tabbar": {
    "display": "flex",
    "width": 100,
    "zIndex": 100,
    "position": "relative",
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid"
  },
  "cl-tabbar-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": 100,
    "width": 100,
    "boxSizing": "border-box",
    "position": "relative",
    "float": "left"
  },
  "cl-tabbar-item__block": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "cl-tabbar-item__label": {
    "fontSize": "24rpx"
  },
  "cl-captcha": {
    "position": "relative",
    "width": 100,
    "overflow": "hidden"
  },
  "cl-captcha__input": {
    "position": "absolute",
    "left": -100,
    "height": 100,
    "width": 200,
    "opacity": 0
  },
  "cl-captcha__code": {
    "display": "flex",
    "width": 100
  },
  "cl-captcha__item": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 1,
    "backgroundColor": "#ebecee",
    "borderRadius": "10rpx"
  },
  "cl-captcha__value": {
    "fontSize": "40rpx",
    "fontWeight": "500"
  },
  "cl-captcha__cursor": {
    "height": "40rpx",
    "width": "4rpx",
    "backgroundColor": "#000000",
    "animation": "flash 1s infinite ease"
  },
  "cl-column": {
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "cl-countdown__number": {
    "height": "50rpx",
    "lineHeight": "50rpx",
    "minWidth": "40rpx",
    "textAlign": "center",
    "borderRadius": "6rpx"
  },
  "cl-countdown__splitor": {
    "fontSize": "24rpx"
  },
  "cl-countdown-item": {
    "display": "flex",
    "alignItems": "center"
  },
  "cl-sticky": {
    "position": "sticky",
    "top": 0,
    "zIndex": 99,
    "width": 100
  },
  "cl-video": {
    "height": 100,
    "width": 100
  },
  "cl-waterfall": {
    "width": 100,
    "boxSizing": "border-box",
    "content::after": "\"\"",
    "clear::after": "both"
  },
  "cl-waterfall-column": {
    "float": "left",
    "breakInside": "avoid"
  },
  "cl-cropper__wrap": {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "height": 100,
    "width": 100,
    "zIndex": 99
  },
  "cl-guide": {
    "position": "relative",
    "height": 100
  },
  "cl-guide__mask": {
    "backgroundColor": "rgba(0,0,0,0.5)",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "height": 100,
    "width": 100,
    "zIndex": 9
  },
  "cl-guide__display": {
    "opacity": 1
  },
  "cl-guide__content": {
    "backgroundColor": "#ffffff",
    "borderRadius": "6rpx",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "color": "#000000",
    "fontSize": "28rpx"
  },
  "cl-guide__op": {
    "marginTop": 0,
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx"
  },
  "cl-guide__image": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "cl-guide__tools": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "position": "absolute",
    "width": 100,
    "transitionDuration": 300
  },
  "cl-calendar__header": {
    "position": "relative",
    "paddingBottom": "10rpx",
    "textAlign": "center"
  },
  "cl-calendar__title": {
    "fontSize": "30rpx"
  },
  "cl-calendar__close": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "fontSize": "36rpx"
  },
  "cl-calendar__container": {
    "marginBottom": "20rpx"
  },
  "cl-calendar__selector": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "80rpx"
  },
  "cl-calendar__selector-icon": {
    "position": "relative",
    "top": "1rpx"
  },
  "cl-calendar__selector-date": {
    "fontSize": "28rpx",
    "marginTop": 0,
    "marginRight": "30rpx",
    "marginBottom": 0,
    "marginLeft": "30rpx",
    "width": "200rpx",
    "textAlign": "center"
  },
  "cl-calendar__table": {
    "display": "flex",
    "flexDirection": "column"
  },
  "cl-calendar__tr": {
    "display": "flex"
  },
  "cl-calendar__td": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "paddingTop": "16rpx",
    "paddingRight": 0,
    "paddingBottom": "16rpx",
    "paddingLeft": 0,
    "marginTop": "6rpx",
    "marginRight": 0,
    "marginBottom": "6rpx",
    "marginLeft": 0,
    "position": "relative"
  },
  "cl-calendar__value": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "60rpx",
    "width": "60rpx",
    "borderRadius": "100rpx",
    "fontSize": "30rpx",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "textAlign": "center",
    "overflow": "hidden"
  },
  "cl-calendar__dot": {
    "position": "absolute",
    "right": "10rpx",
    "top": "10rpx",
    "height": "16rpx",
    "width": "16rpx",
    "backgroundColor": "rgba(0,0,0,0)",
    "borderRadius": "16rpx"
  },
  "cl-calendar__remark": {
    "width": "100rpx",
    "fontSize": "20rpx",
    "marginTop": "6rpx",
    "color": "#666666",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "textAlign": "center"
  },
  "cl-calendar__today-btn": {
    "position": "absolute",
    "right": "30rpx",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#000000",
    "fontSize": "22rpx",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "height": "40rpx",
    "lineHeight": "40rpx",
    "borderWidth::after": 0,
    "borderStyle::after": "solid",
    "borderColor::after": "#000000"
  },
  "cl-scroller__wrap": {
    "position": "relative",
    "height": 100,
    "overflow": "hidden"
  },
  "cl-scroller": {
    "height": 100
  },
  "cl-scroller__loading": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "width": 100,
    "position": "absolute",
    "left": 0,
    "bottom": 100,
    "minHeight": "100rpx"
  },
  "cl-scroller__view": {
    "height": 100
  },
  "cl-scroller__back-top": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "right": "30rpx",
    "bottom": "100rpx",
    "backgroundColor": "rgba(255,255,255,0.8)",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "height": "80rpx",
    "width": "80rpx",
    "borderRadius": "80rpx",
    "transform": "translateX(160rpx)",
    "transitionDuration": 300,
    "opacity": 0,
    "zIndex": 99
  },
  "cl-scroller__back-top-text": {
    "fontSize": "20rpx",
    "color": "#444444",
    "marginTop": "-4rpx"
  },
  "uni-border": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#F0F0F0"
  },
  "uni-primary": {
    "color": "#2979ff"
  },
  "uni-primary-bg": {
    "backgroundColor": "#2979ff"
  },
  "uni-primary-disable": {
    "color": "#94bcff"
  },
  "uni-primary-disable-bg": {
    "backgroundColor": "#94bcff"
  },
  "uni-primary-light": {
    "color": "#d4e4ff"
  },
  "uni-primary-light-bg": {
    "backgroundColor": "#d4e4ff"
  },
  "uni-success": {
    "color": "#18bc37"
  },
  "uni-success-bg": {
    "backgroundColor": "#18bc37"
  },
  "uni-success-disable": {
    "color": "#8cde9b"
  },
  "uni-success-disable-bg": {
    "backgroundColor": "#8cde9b"
  },
  "uni-success-light": {
    "color": "#d1f2d7"
  },
  "uni-success-light-bg": {
    "backgroundColor": "#d1f2d7"
  },
  "uni-warning": {
    "color": "#f3a73f"
  },
  "uni-warning-bg": {
    "backgroundColor": "#f3a73f"
  },
  "uni-warning-disable": {
    "color": "#f9d39f"
  },
  "uni-warning-disable-bg": {
    "backgroundColor": "#f9d39f"
  },
  "uni-warning-light": {
    "color": "#fdedd9"
  },
  "uni-warning-light-bg": {
    "backgroundColor": "#fdedd9"
  },
  "uni-error": {
    "color": "#e43d33"
  },
  "uni-error-bg": {
    "backgroundColor": "#e43d33"
  },
  "uni-error-disable": {
    "color": "#f29e99"
  },
  "uni-error-disable-bg": {
    "backgroundColor": "#f29e99"
  },
  "uni-error-light": {
    "color": "#fad8d6"
  },
  "uni-error-light-bg": {
    "backgroundColor": "#fad8d6"
  },
  "uni-info": {
    "color": "#8f939c"
  },
  "uni-info-bg": {
    "backgroundColor": "#8f939c"
  },
  "uni-info-disable": {
    "color": "#c7c9ce"
  },
  "uni-info-disable-bg": {
    "backgroundColor": "#c7c9ce"
  },
  "uni-info-light": {
    "color": "#e9e9eb"
  },
  "uni-info-light-bg": {
    "backgroundColor": "#e9e9eb"
  },
  "uni-main-color": {
    "color": "#3a3a3a"
  },
  "uni-main-color-bg": {
    "backgroundColor": "#3a3a3a"
  },
  "uni-base-color": {
    "color": "#6a6a6a"
  },
  "uni-base-color-bg": {
    "backgroundColor": "#6a6a6a"
  },
  "uni-secondary-color": {
    "color": "#909399"
  },
  "uni-secondary-color-bg": {
    "backgroundColor": "#909399"
  },
  "uni-extra-color": {
    "color": "#c7c7c7"
  },
  "uni-extra-color-bg": {
    "backgroundColor": "#c7c7c7"
  },
  "uni-bg-color": {
    "color": "#f7f7f7"
  },
  "uni-bg-color-bg": {
    "backgroundColor": "#f7f7f7"
  },
  "uni-border-1": {
    "color": "#F0F0F0"
  },
  "uni-border-1-bg": {
    "backgroundColor": "#F0F0F0"
  },
  "uni-border-2": {
    "color": "#EDEDED"
  },
  "uni-border-2-bg": {
    "backgroundColor": "#EDEDED"
  },
  "uni-border-3": {
    "color": "#DCDCDC"
  },
  "uni-border-3-bg": {
    "backgroundColor": "#DCDCDC"
  },
  "uni-border-4": {
    "color": "#B9B9B9"
  },
  "uni-border-4-bg": {
    "backgroundColor": "#B9B9B9"
  },
  "uni-black": {
    "color": "#000000"
  },
  "uni-black-bg": {
    "backgroundColor": "#000000"
  },
  "uni-white": {
    "color": "#ffffff"
  },
  "uni-white-bg": {
    "backgroundColor": "#ffffff"
  },
  "uni-transparent": {
    "color": "rgba(0,0,0,0)"
  },
  "uni-transparent-bg": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-shadow-sm": {
    "boxShadow": "0 0 5px rgba(216, 216, 216, 0.5)"
  },
  "uni-shadow-base": {
    "boxShadow": "0 1px 8px 1px rgba(165, 165, 165, 0.2)"
  },
  "uni-shadow-lg": {
    "boxShadow": "0px 1px 10px 2px rgba(165, 164, 164, 0.5)"
  },
  "uni-mask": {
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "uni-mt-0": {
    "marginTop": "0"
  },
  "uni-mt-n0": {
    "marginTop": "0"
  },
  "uni-mr-0": {
    "marginRight": "0"
  },
  "uni-mr-n0": {
    "marginRight": "0"
  },
  "uni-mb-0": {
    "marginBottom": "0"
  },
  "uni-mb-n0": {
    "marginBottom": "0"
  },
  "uni-ml-0": {
    "marginLeft": "0"
  },
  "uni-ml-n0": {
    "marginLeft": "0"
  },
  "uni-mx-0": {
    "marginLeft": "0",
    "marginRight": "0"
  },
  "uni-mx-n0": {
    "marginLeft": "0",
    "marginRight": "0"
  },
  "uni-my-0": {
    "marginTop": "0",
    "marginBottom": "0"
  },
  "uni-my-n0": {
    "marginTop": "0",
    "marginBottom": "0"
  },
  "uni-ma-0": {
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0"
  },
  "uni-ma-n0": {
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0"
  },
  "uni-mt-1": {
    "marginTop": "2"
  },
  "uni-mt-n1": {
    "marginTop": "-2"
  },
  "uni-mr-1": {
    "marginRight": "2"
  },
  "uni-mr-n1": {
    "marginRight": "-2"
  },
  "uni-mb-1": {
    "marginBottom": "2"
  },
  "uni-mb-n1": {
    "marginBottom": "-2"
  },
  "uni-ml-1": {
    "marginLeft": "2"
  },
  "uni-ml-n1": {
    "marginLeft": "-2"
  },
  "uni-mx-1": {
    "marginLeft": "2",
    "marginRight": "2"
  },
  "uni-mx-n1": {
    "marginLeft": "-2",
    "marginRight": "-2"
  },
  "uni-my-1": {
    "marginTop": "2",
    "marginBottom": "2"
  },
  "uni-my-n1": {
    "marginTop": "-2",
    "marginBottom": "-2"
  },
  "uni-ma-1": {
    "marginTop": "2",
    "marginRight": "2",
    "marginBottom": "2",
    "marginLeft": "2"
  },
  "uni-ma-n1": {
    "marginTop": "-2",
    "marginRight": "-2",
    "marginBottom": "-2",
    "marginLeft": "-2"
  },
  "uni-mt-2": {
    "marginTop": "4"
  },
  "uni-mt-n2": {
    "marginTop": "-4"
  },
  "uni-mr-2": {
    "marginRight": "4"
  },
  "uni-mr-n2": {
    "marginRight": "-4"
  },
  "uni-mb-2": {
    "marginBottom": "4"
  },
  "uni-mb-n2": {
    "marginBottom": "-4"
  },
  "uni-ml-2": {
    "marginLeft": "4"
  },
  "uni-ml-n2": {
    "marginLeft": "-4"
  },
  "uni-mx-2": {
    "marginLeft": "4",
    "marginRight": "4"
  },
  "uni-mx-n2": {
    "marginLeft": "-4",
    "marginRight": "-4"
  },
  "uni-my-2": {
    "marginTop": "4",
    "marginBottom": "4"
  },
  "uni-my-n2": {
    "marginTop": "-4",
    "marginBottom": "-4"
  },
  "uni-ma-2": {
    "marginTop": "4",
    "marginRight": "4",
    "marginBottom": "4",
    "marginLeft": "4"
  },
  "uni-ma-n2": {
    "marginTop": "-4",
    "marginRight": "-4",
    "marginBottom": "-4",
    "marginLeft": "-4"
  },
  "uni-mt-3": {
    "marginTop": "6"
  },
  "uni-mt-n3": {
    "marginTop": "-6"
  },
  "uni-mr-3": {
    "marginRight": "6"
  },
  "uni-mr-n3": {
    "marginRight": "-6"
  },
  "uni-mb-3": {
    "marginBottom": "6"
  },
  "uni-mb-n3": {
    "marginBottom": "-6"
  },
  "uni-ml-3": {
    "marginLeft": "6"
  },
  "uni-ml-n3": {
    "marginLeft": "-6"
  },
  "uni-mx-3": {
    "marginLeft": "6",
    "marginRight": "6"
  },
  "uni-mx-n3": {
    "marginLeft": "-6",
    "marginRight": "-6"
  },
  "uni-my-3": {
    "marginTop": "6",
    "marginBottom": "6"
  },
  "uni-my-n3": {
    "marginTop": "-6",
    "marginBottom": "-6"
  },
  "uni-ma-3": {
    "marginTop": "6",
    "marginRight": "6",
    "marginBottom": "6",
    "marginLeft": "6"
  },
  "uni-ma-n3": {
    "marginTop": "-6",
    "marginRight": "-6",
    "marginBottom": "-6",
    "marginLeft": "-6"
  },
  "uni-mt-4": {
    "marginTop": "8"
  },
  "uni-mt-n4": {
    "marginTop": "-8"
  },
  "uni-mr-4": {
    "marginRight": "8"
  },
  "uni-mr-n4": {
    "marginRight": "-8"
  },
  "uni-mb-4": {
    "marginBottom": "8"
  },
  "uni-mb-n4": {
    "marginBottom": "-8"
  },
  "uni-ml-4": {
    "marginLeft": "8"
  },
  "uni-ml-n4": {
    "marginLeft": "-8"
  },
  "uni-mx-4": {
    "marginLeft": "8",
    "marginRight": "8"
  },
  "uni-mx-n4": {
    "marginLeft": "-8",
    "marginRight": "-8"
  },
  "uni-my-4": {
    "marginTop": "8",
    "marginBottom": "8"
  },
  "uni-my-n4": {
    "marginTop": "-8",
    "marginBottom": "-8"
  },
  "uni-ma-4": {
    "marginTop": "8",
    "marginRight": "8",
    "marginBottom": "8",
    "marginLeft": "8"
  },
  "uni-ma-n4": {
    "marginTop": "-8",
    "marginRight": "-8",
    "marginBottom": "-8",
    "marginLeft": "-8"
  },
  "uni-mt-5": {
    "marginTop": "10"
  },
  "uni-mt-n5": {
    "marginTop": "-10"
  },
  "uni-mr-5": {
    "marginRight": "10"
  },
  "uni-mr-n5": {
    "marginRight": "-10"
  },
  "uni-mb-5": {
    "marginBottom": "10"
  },
  "uni-mb-n5": {
    "marginBottom": "-10"
  },
  "uni-ml-5": {
    "marginLeft": "10"
  },
  "uni-ml-n5": {
    "marginLeft": "-10"
  },
  "uni-mx-5": {
    "marginLeft": "10",
    "marginRight": "10"
  },
  "uni-mx-n5": {
    "marginLeft": "-10",
    "marginRight": "-10"
  },
  "uni-my-5": {
    "marginTop": "10",
    "marginBottom": "10"
  },
  "uni-my-n5": {
    "marginTop": "-10",
    "marginBottom": "-10"
  },
  "uni-ma-5": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "uni-ma-n5": {
    "marginTop": "-10",
    "marginRight": "-10",
    "marginBottom": "-10",
    "marginLeft": "-10"
  },
  "uni-mt-6": {
    "marginTop": "12"
  },
  "uni-mt-n6": {
    "marginTop": "-12"
  },
  "uni-mr-6": {
    "marginRight": "12"
  },
  "uni-mr-n6": {
    "marginRight": "-12"
  },
  "uni-mb-6": {
    "marginBottom": "12"
  },
  "uni-mb-n6": {
    "marginBottom": "-12"
  },
  "uni-ml-6": {
    "marginLeft": "12"
  },
  "uni-ml-n6": {
    "marginLeft": "-12"
  },
  "uni-mx-6": {
    "marginLeft": "12",
    "marginRight": "12"
  },
  "uni-mx-n6": {
    "marginLeft": "-12",
    "marginRight": "-12"
  },
  "uni-my-6": {
    "marginTop": "12",
    "marginBottom": "12"
  },
  "uni-my-n6": {
    "marginTop": "-12",
    "marginBottom": "-12"
  },
  "uni-ma-6": {
    "marginTop": "12",
    "marginRight": "12",
    "marginBottom": "12",
    "marginLeft": "12"
  },
  "uni-ma-n6": {
    "marginTop": "-12",
    "marginRight": "-12",
    "marginBottom": "-12",
    "marginLeft": "-12"
  },
  "uni-mt-7": {
    "marginTop": "14"
  },
  "uni-mt-n7": {
    "marginTop": "-14"
  },
  "uni-mr-7": {
    "marginRight": "14"
  },
  "uni-mr-n7": {
    "marginRight": "-14"
  },
  "uni-mb-7": {
    "marginBottom": "14"
  },
  "uni-mb-n7": {
    "marginBottom": "-14"
  },
  "uni-ml-7": {
    "marginLeft": "14"
  },
  "uni-ml-n7": {
    "marginLeft": "-14"
  },
  "uni-mx-7": {
    "marginLeft": "14",
    "marginRight": "14"
  },
  "uni-mx-n7": {
    "marginLeft": "-14",
    "marginRight": "-14"
  },
  "uni-my-7": {
    "marginTop": "14",
    "marginBottom": "14"
  },
  "uni-my-n7": {
    "marginTop": "-14",
    "marginBottom": "-14"
  },
  "uni-ma-7": {
    "marginTop": "14",
    "marginRight": "14",
    "marginBottom": "14",
    "marginLeft": "14"
  },
  "uni-ma-n7": {
    "marginTop": "-14",
    "marginRight": "-14",
    "marginBottom": "-14",
    "marginLeft": "-14"
  },
  "uni-mt-8": {
    "marginTop": "16"
  },
  "uni-mt-n8": {
    "marginTop": "-16"
  },
  "uni-mr-8": {
    "marginRight": "16"
  },
  "uni-mr-n8": {
    "marginRight": "-16"
  },
  "uni-mb-8": {
    "marginBottom": "16"
  },
  "uni-mb-n8": {
    "marginBottom": "-16"
  },
  "uni-ml-8": {
    "marginLeft": "16"
  },
  "uni-ml-n8": {
    "marginLeft": "-16"
  },
  "uni-mx-8": {
    "marginLeft": "16",
    "marginRight": "16"
  },
  "uni-mx-n8": {
    "marginLeft": "-16",
    "marginRight": "-16"
  },
  "uni-my-8": {
    "marginTop": "16",
    "marginBottom": "16"
  },
  "uni-my-n8": {
    "marginTop": "-16",
    "marginBottom": "-16"
  },
  "uni-ma-8": {
    "marginTop": "16",
    "marginRight": "16",
    "marginBottom": "16",
    "marginLeft": "16"
  },
  "uni-ma-n8": {
    "marginTop": "-16",
    "marginRight": "-16",
    "marginBottom": "-16",
    "marginLeft": "-16"
  },
  "uni-mt-9": {
    "marginTop": "18"
  },
  "uni-mt-n9": {
    "marginTop": "-18"
  },
  "uni-mr-9": {
    "marginRight": "18"
  },
  "uni-mr-n9": {
    "marginRight": "-18"
  },
  "uni-mb-9": {
    "marginBottom": "18"
  },
  "uni-mb-n9": {
    "marginBottom": "-18"
  },
  "uni-ml-9": {
    "marginLeft": "18"
  },
  "uni-ml-n9": {
    "marginLeft": "-18"
  },
  "uni-mx-9": {
    "marginLeft": "18",
    "marginRight": "18"
  },
  "uni-mx-n9": {
    "marginLeft": "-18",
    "marginRight": "-18"
  },
  "uni-my-9": {
    "marginTop": "18",
    "marginBottom": "18"
  },
  "uni-my-n9": {
    "marginTop": "-18",
    "marginBottom": "-18"
  },
  "uni-ma-9": {
    "marginTop": "18",
    "marginRight": "18",
    "marginBottom": "18",
    "marginLeft": "18"
  },
  "uni-ma-n9": {
    "marginTop": "-18",
    "marginRight": "-18",
    "marginBottom": "-18",
    "marginLeft": "-18"
  },
  "uni-mt-10": {
    "marginTop": "20"
  },
  "uni-mt-n10": {
    "marginTop": "-20"
  },
  "uni-mr-10": {
    "marginRight": "20"
  },
  "uni-mr-n10": {
    "marginRight": "-20"
  },
  "uni-mb-10": {
    "marginBottom": "20"
  },
  "uni-mb-n10": {
    "marginBottom": "-20"
  },
  "uni-ml-10": {
    "marginLeft": "20"
  },
  "uni-ml-n10": {
    "marginLeft": "-20"
  },
  "uni-mx-10": {
    "marginLeft": "20",
    "marginRight": "20"
  },
  "uni-mx-n10": {
    "marginLeft": "-20",
    "marginRight": "-20"
  },
  "uni-my-10": {
    "marginTop": "20",
    "marginBottom": "20"
  },
  "uni-my-n10": {
    "marginTop": "-20",
    "marginBottom": "-20"
  },
  "uni-ma-10": {
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20"
  },
  "uni-ma-n10": {
    "marginTop": "-20",
    "marginRight": "-20",
    "marginBottom": "-20",
    "marginLeft": "-20"
  },
  "uni-mt-11": {
    "marginTop": "22"
  },
  "uni-mt-n11": {
    "marginTop": "-22"
  },
  "uni-mr-11": {
    "marginRight": "22"
  },
  "uni-mr-n11": {
    "marginRight": "-22"
  },
  "uni-mb-11": {
    "marginBottom": "22"
  },
  "uni-mb-n11": {
    "marginBottom": "-22"
  },
  "uni-ml-11": {
    "marginLeft": "22"
  },
  "uni-ml-n11": {
    "marginLeft": "-22"
  },
  "uni-mx-11": {
    "marginLeft": "22",
    "marginRight": "22"
  },
  "uni-mx-n11": {
    "marginLeft": "-22",
    "marginRight": "-22"
  },
  "uni-my-11": {
    "marginTop": "22",
    "marginBottom": "22"
  },
  "uni-my-n11": {
    "marginTop": "-22",
    "marginBottom": "-22"
  },
  "uni-ma-11": {
    "marginTop": "22",
    "marginRight": "22",
    "marginBottom": "22",
    "marginLeft": "22"
  },
  "uni-ma-n11": {
    "marginTop": "-22",
    "marginRight": "-22",
    "marginBottom": "-22",
    "marginLeft": "-22"
  },
  "uni-mt-12": {
    "marginTop": "24"
  },
  "uni-mt-n12": {
    "marginTop": "-24"
  },
  "uni-mr-12": {
    "marginRight": "24"
  },
  "uni-mr-n12": {
    "marginRight": "-24"
  },
  "uni-mb-12": {
    "marginBottom": "24"
  },
  "uni-mb-n12": {
    "marginBottom": "-24"
  },
  "uni-ml-12": {
    "marginLeft": "24"
  },
  "uni-ml-n12": {
    "marginLeft": "-24"
  },
  "uni-mx-12": {
    "marginLeft": "24",
    "marginRight": "24"
  },
  "uni-mx-n12": {
    "marginLeft": "-24",
    "marginRight": "-24"
  },
  "uni-my-12": {
    "marginTop": "24",
    "marginBottom": "24"
  },
  "uni-my-n12": {
    "marginTop": "-24",
    "marginBottom": "-24"
  },
  "uni-ma-12": {
    "marginTop": "24",
    "marginRight": "24",
    "marginBottom": "24",
    "marginLeft": "24"
  },
  "uni-ma-n12": {
    "marginTop": "-24",
    "marginRight": "-24",
    "marginBottom": "-24",
    "marginLeft": "-24"
  },
  "uni-mt-13": {
    "marginTop": "26"
  },
  "uni-mt-n13": {
    "marginTop": "-26"
  },
  "uni-mr-13": {
    "marginRight": "26"
  },
  "uni-mr-n13": {
    "marginRight": "-26"
  },
  "uni-mb-13": {
    "marginBottom": "26"
  },
  "uni-mb-n13": {
    "marginBottom": "-26"
  },
  "uni-ml-13": {
    "marginLeft": "26"
  },
  "uni-ml-n13": {
    "marginLeft": "-26"
  },
  "uni-mx-13": {
    "marginLeft": "26",
    "marginRight": "26"
  },
  "uni-mx-n13": {
    "marginLeft": "-26",
    "marginRight": "-26"
  },
  "uni-my-13": {
    "marginTop": "26",
    "marginBottom": "26"
  },
  "uni-my-n13": {
    "marginTop": "-26",
    "marginBottom": "-26"
  },
  "uni-ma-13": {
    "marginTop": "26",
    "marginRight": "26",
    "marginBottom": "26",
    "marginLeft": "26"
  },
  "uni-ma-n13": {
    "marginTop": "-26",
    "marginRight": "-26",
    "marginBottom": "-26",
    "marginLeft": "-26"
  },
  "uni-mt-14": {
    "marginTop": "28"
  },
  "uni-mt-n14": {
    "marginTop": "-28"
  },
  "uni-mr-14": {
    "marginRight": "28"
  },
  "uni-mr-n14": {
    "marginRight": "-28"
  },
  "uni-mb-14": {
    "marginBottom": "28"
  },
  "uni-mb-n14": {
    "marginBottom": "-28"
  },
  "uni-ml-14": {
    "marginLeft": "28"
  },
  "uni-ml-n14": {
    "marginLeft": "-28"
  },
  "uni-mx-14": {
    "marginLeft": "28",
    "marginRight": "28"
  },
  "uni-mx-n14": {
    "marginLeft": "-28",
    "marginRight": "-28"
  },
  "uni-my-14": {
    "marginTop": "28",
    "marginBottom": "28"
  },
  "uni-my-n14": {
    "marginTop": "-28",
    "marginBottom": "-28"
  },
  "uni-ma-14": {
    "marginTop": "28",
    "marginRight": "28",
    "marginBottom": "28",
    "marginLeft": "28"
  },
  "uni-ma-n14": {
    "marginTop": "-28",
    "marginRight": "-28",
    "marginBottom": "-28",
    "marginLeft": "-28"
  },
  "uni-mt-15": {
    "marginTop": "30"
  },
  "uni-mt-n15": {
    "marginTop": "-30"
  },
  "uni-mr-15": {
    "marginRight": "30"
  },
  "uni-mr-n15": {
    "marginRight": "-30"
  },
  "uni-mb-15": {
    "marginBottom": "30"
  },
  "uni-mb-n15": {
    "marginBottom": "-30"
  },
  "uni-ml-15": {
    "marginLeft": "30"
  },
  "uni-ml-n15": {
    "marginLeft": "-30"
  },
  "uni-mx-15": {
    "marginLeft": "30",
    "marginRight": "30"
  },
  "uni-mx-n15": {
    "marginLeft": "-30",
    "marginRight": "-30"
  },
  "uni-my-15": {
    "marginTop": "30",
    "marginBottom": "30"
  },
  "uni-my-n15": {
    "marginTop": "-30",
    "marginBottom": "-30"
  },
  "uni-ma-15": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30"
  },
  "uni-ma-n15": {
    "marginTop": "-30",
    "marginRight": "-30",
    "marginBottom": "-30",
    "marginLeft": "-30"
  },
  "uni-mt-16": {
    "marginTop": "32"
  },
  "uni-mt-n16": {
    "marginTop": "-32"
  },
  "uni-mr-16": {
    "marginRight": "32"
  },
  "uni-mr-n16": {
    "marginRight": "-32"
  },
  "uni-mb-16": {
    "marginBottom": "32"
  },
  "uni-mb-n16": {
    "marginBottom": "-32"
  },
  "uni-ml-16": {
    "marginLeft": "32"
  },
  "uni-ml-n16": {
    "marginLeft": "-32"
  },
  "uni-mx-16": {
    "marginLeft": "32",
    "marginRight": "32"
  },
  "uni-mx-n16": {
    "marginLeft": "-32",
    "marginRight": "-32"
  },
  "uni-my-16": {
    "marginTop": "32",
    "marginBottom": "32"
  },
  "uni-my-n16": {
    "marginTop": "-32",
    "marginBottom": "-32"
  },
  "uni-ma-16": {
    "marginTop": "32",
    "marginRight": "32",
    "marginBottom": "32",
    "marginLeft": "32"
  },
  "uni-ma-n16": {
    "marginTop": "-32",
    "marginRight": "-32",
    "marginBottom": "-32",
    "marginLeft": "-32"
  },
  "uni-pt-0": {
    "paddingTop": "0"
  },
  "uni-pt-n0": {
    "paddingTop": "0"
  },
  "uni-pr-0": {
    "paddingRight": "0"
  },
  "uni-pr-n0": {
    "paddingRight": "0"
  },
  "uni-pb-0": {
    "paddingBottom": "0"
  },
  "uni-pb-n0": {
    "paddingBottom": "0"
  },
  "uni-pl-0": {
    "paddingLeft": "0"
  },
  "uni-pl-n0": {
    "paddingLeft": "0"
  },
  "uni-px-0": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "uni-px-n0": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "uni-py-0": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "uni-py-n0": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "uni-pa-0": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "uni-pa-n0": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "uni-pt-1": {
    "paddingTop": "2"
  },
  "uni-pt-n1": {
    "paddingTop": "-2"
  },
  "uni-pr-1": {
    "paddingRight": "2"
  },
  "uni-pr-n1": {
    "paddingRight": "-2"
  },
  "uni-pb-1": {
    "paddingBottom": "2"
  },
  "uni-pb-n1": {
    "paddingBottom": "-2"
  },
  "uni-pl-1": {
    "paddingLeft": "2"
  },
  "uni-pl-n1": {
    "paddingLeft": "-2"
  },
  "uni-px-1": {
    "paddingLeft": "2",
    "paddingRight": "2"
  },
  "uni-px-n1": {
    "paddingLeft": "-2",
    "paddingRight": "-2"
  },
  "uni-py-1": {
    "paddingTop": "2",
    "paddingBottom": "2"
  },
  "uni-py-n1": {
    "paddingTop": "-2",
    "paddingBottom": "-2"
  },
  "uni-pa-1": {
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2"
  },
  "uni-pa-n1": {
    "paddingTop": "-2",
    "paddingRight": "-2",
    "paddingBottom": "-2",
    "paddingLeft": "-2"
  },
  "uni-pt-2": {
    "paddingTop": "4"
  },
  "uni-pt-n2": {
    "paddingTop": "-4"
  },
  "uni-pr-2": {
    "paddingRight": "4"
  },
  "uni-pr-n2": {
    "paddingRight": "-4"
  },
  "uni-pb-2": {
    "paddingBottom": "4"
  },
  "uni-pb-n2": {
    "paddingBottom": "-4"
  },
  "uni-pl-2": {
    "paddingLeft": "4"
  },
  "uni-pl-n2": {
    "paddingLeft": "-4"
  },
  "uni-px-2": {
    "paddingLeft": "4",
    "paddingRight": "4"
  },
  "uni-px-n2": {
    "paddingLeft": "-4",
    "paddingRight": "-4"
  },
  "uni-py-2": {
    "paddingTop": "4",
    "paddingBottom": "4"
  },
  "uni-py-n2": {
    "paddingTop": "-4",
    "paddingBottom": "-4"
  },
  "uni-pa-2": {
    "paddingTop": "4",
    "paddingRight": "4",
    "paddingBottom": "4",
    "paddingLeft": "4"
  },
  "uni-pa-n2": {
    "paddingTop": "-4",
    "paddingRight": "-4",
    "paddingBottom": "-4",
    "paddingLeft": "-4"
  },
  "uni-pt-3": {
    "paddingTop": "6"
  },
  "uni-pt-n3": {
    "paddingTop": "-6"
  },
  "uni-pr-3": {
    "paddingRight": "6"
  },
  "uni-pr-n3": {
    "paddingRight": "-6"
  },
  "uni-pb-3": {
    "paddingBottom": "6"
  },
  "uni-pb-n3": {
    "paddingBottom": "-6"
  },
  "uni-pl-3": {
    "paddingLeft": "6"
  },
  "uni-pl-n3": {
    "paddingLeft": "-6"
  },
  "uni-px-3": {
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "uni-px-n3": {
    "paddingLeft": "-6",
    "paddingRight": "-6"
  },
  "uni-py-3": {
    "paddingTop": "6",
    "paddingBottom": "6"
  },
  "uni-py-n3": {
    "paddingTop": "-6",
    "paddingBottom": "-6"
  },
  "uni-pa-3": {
    "paddingTop": "6",
    "paddingRight": "6",
    "paddingBottom": "6",
    "paddingLeft": "6"
  },
  "uni-pa-n3": {
    "paddingTop": "-6",
    "paddingRight": "-6",
    "paddingBottom": "-6",
    "paddingLeft": "-6"
  },
  "uni-pt-4": {
    "paddingTop": "8"
  },
  "uni-pt-n4": {
    "paddingTop": "-8"
  },
  "uni-pr-4": {
    "paddingRight": "8"
  },
  "uni-pr-n4": {
    "paddingRight": "-8"
  },
  "uni-pb-4": {
    "paddingBottom": "8"
  },
  "uni-pb-n4": {
    "paddingBottom": "-8"
  },
  "uni-pl-4": {
    "paddingLeft": "8"
  },
  "uni-pl-n4": {
    "paddingLeft": "-8"
  },
  "uni-px-4": {
    "paddingLeft": "8",
    "paddingRight": "8"
  },
  "uni-px-n4": {
    "paddingLeft": "-8",
    "paddingRight": "-8"
  },
  "uni-py-4": {
    "paddingTop": "8",
    "paddingBottom": "8"
  },
  "uni-py-n4": {
    "paddingTop": "-8",
    "paddingBottom": "-8"
  },
  "uni-pa-4": {
    "paddingTop": "8",
    "paddingRight": "8",
    "paddingBottom": "8",
    "paddingLeft": "8"
  },
  "uni-pa-n4": {
    "paddingTop": "-8",
    "paddingRight": "-8",
    "paddingBottom": "-8",
    "paddingLeft": "-8"
  },
  "uni-pt-5": {
    "paddingTop": "10"
  },
  "uni-pt-n5": {
    "paddingTop": "-10"
  },
  "uni-pr-5": {
    "paddingRight": "10"
  },
  "uni-pr-n5": {
    "paddingRight": "-10"
  },
  "uni-pb-5": {
    "paddingBottom": "10"
  },
  "uni-pb-n5": {
    "paddingBottom": "-10"
  },
  "uni-pl-5": {
    "paddingLeft": "10"
  },
  "uni-pl-n5": {
    "paddingLeft": "-10"
  },
  "uni-px-5": {
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "uni-px-n5": {
    "paddingLeft": "-10",
    "paddingRight": "-10"
  },
  "uni-py-5": {
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "uni-py-n5": {
    "paddingTop": "-10",
    "paddingBottom": "-10"
  },
  "uni-pa-5": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "uni-pa-n5": {
    "paddingTop": "-10",
    "paddingRight": "-10",
    "paddingBottom": "-10",
    "paddingLeft": "-10"
  },
  "uni-pt-6": {
    "paddingTop": "12"
  },
  "uni-pt-n6": {
    "paddingTop": "-12"
  },
  "uni-pr-6": {
    "paddingRight": "12"
  },
  "uni-pr-n6": {
    "paddingRight": "-12"
  },
  "uni-pb-6": {
    "paddingBottom": "12"
  },
  "uni-pb-n6": {
    "paddingBottom": "-12"
  },
  "uni-pl-6": {
    "paddingLeft": "12"
  },
  "uni-pl-n6": {
    "paddingLeft": "-12"
  },
  "uni-px-6": {
    "paddingLeft": "12",
    "paddingRight": "12"
  },
  "uni-px-n6": {
    "paddingLeft": "-12",
    "paddingRight": "-12"
  },
  "uni-py-6": {
    "paddingTop": "12",
    "paddingBottom": "12"
  },
  "uni-py-n6": {
    "paddingTop": "-12",
    "paddingBottom": "-12"
  },
  "uni-pa-6": {
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12"
  },
  "uni-pa-n6": {
    "paddingTop": "-12",
    "paddingRight": "-12",
    "paddingBottom": "-12",
    "paddingLeft": "-12"
  },
  "uni-pt-7": {
    "paddingTop": "14"
  },
  "uni-pt-n7": {
    "paddingTop": "-14"
  },
  "uni-pr-7": {
    "paddingRight": "14"
  },
  "uni-pr-n7": {
    "paddingRight": "-14"
  },
  "uni-pb-7": {
    "paddingBottom": "14"
  },
  "uni-pb-n7": {
    "paddingBottom": "-14"
  },
  "uni-pl-7": {
    "paddingLeft": "14"
  },
  "uni-pl-n7": {
    "paddingLeft": "-14"
  },
  "uni-px-7": {
    "paddingLeft": "14",
    "paddingRight": "14"
  },
  "uni-px-n7": {
    "paddingLeft": "-14",
    "paddingRight": "-14"
  },
  "uni-py-7": {
    "paddingTop": "14",
    "paddingBottom": "14"
  },
  "uni-py-n7": {
    "paddingTop": "-14",
    "paddingBottom": "-14"
  },
  "uni-pa-7": {
    "paddingTop": "14",
    "paddingRight": "14",
    "paddingBottom": "14",
    "paddingLeft": "14"
  },
  "uni-pa-n7": {
    "paddingTop": "-14",
    "paddingRight": "-14",
    "paddingBottom": "-14",
    "paddingLeft": "-14"
  },
  "uni-pt-8": {
    "paddingTop": "16"
  },
  "uni-pt-n8": {
    "paddingTop": "-16"
  },
  "uni-pr-8": {
    "paddingRight": "16"
  },
  "uni-pr-n8": {
    "paddingRight": "-16"
  },
  "uni-pb-8": {
    "paddingBottom": "16"
  },
  "uni-pb-n8": {
    "paddingBottom": "-16"
  },
  "uni-pl-8": {
    "paddingLeft": "16"
  },
  "uni-pl-n8": {
    "paddingLeft": "-16"
  },
  "uni-px-8": {
    "paddingLeft": "16",
    "paddingRight": "16"
  },
  "uni-px-n8": {
    "paddingLeft": "-16",
    "paddingRight": "-16"
  },
  "uni-py-8": {
    "paddingTop": "16",
    "paddingBottom": "16"
  },
  "uni-py-n8": {
    "paddingTop": "-16",
    "paddingBottom": "-16"
  },
  "uni-pa-8": {
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "uni-pa-n8": {
    "paddingTop": "-16",
    "paddingRight": "-16",
    "paddingBottom": "-16",
    "paddingLeft": "-16"
  },
  "uni-pt-9": {
    "paddingTop": "18"
  },
  "uni-pt-n9": {
    "paddingTop": "-18"
  },
  "uni-pr-9": {
    "paddingRight": "18"
  },
  "uni-pr-n9": {
    "paddingRight": "-18"
  },
  "uni-pb-9": {
    "paddingBottom": "18"
  },
  "uni-pb-n9": {
    "paddingBottom": "-18"
  },
  "uni-pl-9": {
    "paddingLeft": "18"
  },
  "uni-pl-n9": {
    "paddingLeft": "-18"
  },
  "uni-px-9": {
    "paddingLeft": "18",
    "paddingRight": "18"
  },
  "uni-px-n9": {
    "paddingLeft": "-18",
    "paddingRight": "-18"
  },
  "uni-py-9": {
    "paddingTop": "18",
    "paddingBottom": "18"
  },
  "uni-py-n9": {
    "paddingTop": "-18",
    "paddingBottom": "-18"
  },
  "uni-pa-9": {
    "paddingTop": "18",
    "paddingRight": "18",
    "paddingBottom": "18",
    "paddingLeft": "18"
  },
  "uni-pa-n9": {
    "paddingTop": "-18",
    "paddingRight": "-18",
    "paddingBottom": "-18",
    "paddingLeft": "-18"
  },
  "uni-pt-10": {
    "paddingTop": "20"
  },
  "uni-pt-n10": {
    "paddingTop": "-20"
  },
  "uni-pr-10": {
    "paddingRight": "20"
  },
  "uni-pr-n10": {
    "paddingRight": "-20"
  },
  "uni-pb-10": {
    "paddingBottom": "20"
  },
  "uni-pb-n10": {
    "paddingBottom": "-20"
  },
  "uni-pl-10": {
    "paddingLeft": "20"
  },
  "uni-pl-n10": {
    "paddingLeft": "-20"
  },
  "uni-px-10": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "uni-px-n10": {
    "paddingLeft": "-20",
    "paddingRight": "-20"
  },
  "uni-py-10": {
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "uni-py-n10": {
    "paddingTop": "-20",
    "paddingBottom": "-20"
  },
  "uni-pa-10": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "uni-pa-n10": {
    "paddingTop": "-20",
    "paddingRight": "-20",
    "paddingBottom": "-20",
    "paddingLeft": "-20"
  },
  "uni-pt-11": {
    "paddingTop": "22"
  },
  "uni-pt-n11": {
    "paddingTop": "-22"
  },
  "uni-pr-11": {
    "paddingRight": "22"
  },
  "uni-pr-n11": {
    "paddingRight": "-22"
  },
  "uni-pb-11": {
    "paddingBottom": "22"
  },
  "uni-pb-n11": {
    "paddingBottom": "-22"
  },
  "uni-pl-11": {
    "paddingLeft": "22"
  },
  "uni-pl-n11": {
    "paddingLeft": "-22"
  },
  "uni-px-11": {
    "paddingLeft": "22",
    "paddingRight": "22"
  },
  "uni-px-n11": {
    "paddingLeft": "-22",
    "paddingRight": "-22"
  },
  "uni-py-11": {
    "paddingTop": "22",
    "paddingBottom": "22"
  },
  "uni-py-n11": {
    "paddingTop": "-22",
    "paddingBottom": "-22"
  },
  "uni-pa-11": {
    "paddingTop": "22",
    "paddingRight": "22",
    "paddingBottom": "22",
    "paddingLeft": "22"
  },
  "uni-pa-n11": {
    "paddingTop": "-22",
    "paddingRight": "-22",
    "paddingBottom": "-22",
    "paddingLeft": "-22"
  },
  "uni-pt-12": {
    "paddingTop": "24"
  },
  "uni-pt-n12": {
    "paddingTop": "-24"
  },
  "uni-pr-12": {
    "paddingRight": "24"
  },
  "uni-pr-n12": {
    "paddingRight": "-24"
  },
  "uni-pb-12": {
    "paddingBottom": "24"
  },
  "uni-pb-n12": {
    "paddingBottom": "-24"
  },
  "uni-pl-12": {
    "paddingLeft": "24"
  },
  "uni-pl-n12": {
    "paddingLeft": "-24"
  },
  "uni-px-12": {
    "paddingLeft": "24",
    "paddingRight": "24"
  },
  "uni-px-n12": {
    "paddingLeft": "-24",
    "paddingRight": "-24"
  },
  "uni-py-12": {
    "paddingTop": "24",
    "paddingBottom": "24"
  },
  "uni-py-n12": {
    "paddingTop": "-24",
    "paddingBottom": "-24"
  },
  "uni-pa-12": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "uni-pa-n12": {
    "paddingTop": "-24",
    "paddingRight": "-24",
    "paddingBottom": "-24",
    "paddingLeft": "-24"
  },
  "uni-pt-13": {
    "paddingTop": "26"
  },
  "uni-pt-n13": {
    "paddingTop": "-26"
  },
  "uni-pr-13": {
    "paddingRight": "26"
  },
  "uni-pr-n13": {
    "paddingRight": "-26"
  },
  "uni-pb-13": {
    "paddingBottom": "26"
  },
  "uni-pb-n13": {
    "paddingBottom": "-26"
  },
  "uni-pl-13": {
    "paddingLeft": "26"
  },
  "uni-pl-n13": {
    "paddingLeft": "-26"
  },
  "uni-px-13": {
    "paddingLeft": "26",
    "paddingRight": "26"
  },
  "uni-px-n13": {
    "paddingLeft": "-26",
    "paddingRight": "-26"
  },
  "uni-py-13": {
    "paddingTop": "26",
    "paddingBottom": "26"
  },
  "uni-py-n13": {
    "paddingTop": "-26",
    "paddingBottom": "-26"
  },
  "uni-pa-13": {
    "paddingTop": "26",
    "paddingRight": "26",
    "paddingBottom": "26",
    "paddingLeft": "26"
  },
  "uni-pa-n13": {
    "paddingTop": "-26",
    "paddingRight": "-26",
    "paddingBottom": "-26",
    "paddingLeft": "-26"
  },
  "uni-pt-14": {
    "paddingTop": "28"
  },
  "uni-pt-n14": {
    "paddingTop": "-28"
  },
  "uni-pr-14": {
    "paddingRight": "28"
  },
  "uni-pr-n14": {
    "paddingRight": "-28"
  },
  "uni-pb-14": {
    "paddingBottom": "28"
  },
  "uni-pb-n14": {
    "paddingBottom": "-28"
  },
  "uni-pl-14": {
    "paddingLeft": "28"
  },
  "uni-pl-n14": {
    "paddingLeft": "-28"
  },
  "uni-px-14": {
    "paddingLeft": "28",
    "paddingRight": "28"
  },
  "uni-px-n14": {
    "paddingLeft": "-28",
    "paddingRight": "-28"
  },
  "uni-py-14": {
    "paddingTop": "28",
    "paddingBottom": "28"
  },
  "uni-py-n14": {
    "paddingTop": "-28",
    "paddingBottom": "-28"
  },
  "uni-pa-14": {
    "paddingTop": "28",
    "paddingRight": "28",
    "paddingBottom": "28",
    "paddingLeft": "28"
  },
  "uni-pa-n14": {
    "paddingTop": "-28",
    "paddingRight": "-28",
    "paddingBottom": "-28",
    "paddingLeft": "-28"
  },
  "uni-pt-15": {
    "paddingTop": "30"
  },
  "uni-pt-n15": {
    "paddingTop": "-30"
  },
  "uni-pr-15": {
    "paddingRight": "30"
  },
  "uni-pr-n15": {
    "paddingRight": "-30"
  },
  "uni-pb-15": {
    "paddingBottom": "30"
  },
  "uni-pb-n15": {
    "paddingBottom": "-30"
  },
  "uni-pl-15": {
    "paddingLeft": "30"
  },
  "uni-pl-n15": {
    "paddingLeft": "-30"
  },
  "uni-px-15": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "uni-px-n15": {
    "paddingLeft": "-30",
    "paddingRight": "-30"
  },
  "uni-py-15": {
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "uni-py-n15": {
    "paddingTop": "-30",
    "paddingBottom": "-30"
  },
  "uni-pa-15": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "uni-pa-n15": {
    "paddingTop": "-30",
    "paddingRight": "-30",
    "paddingBottom": "-30",
    "paddingLeft": "-30"
  },
  "uni-pt-16": {
    "paddingTop": "32"
  },
  "uni-pt-n16": {
    "paddingTop": "-32"
  },
  "uni-pr-16": {
    "paddingRight": "32"
  },
  "uni-pr-n16": {
    "paddingRight": "-32"
  },
  "uni-pb-16": {
    "paddingBottom": "32"
  },
  "uni-pb-n16": {
    "paddingBottom": "-32"
  },
  "uni-pl-16": {
    "paddingLeft": "32"
  },
  "uni-pl-n16": {
    "paddingLeft": "-32"
  },
  "uni-px-16": {
    "paddingLeft": "32",
    "paddingRight": "32"
  },
  "uni-px-n16": {
    "paddingLeft": "-32",
    "paddingRight": "-32"
  },
  "uni-py-16": {
    "paddingTop": "32",
    "paddingBottom": "32"
  },
  "uni-py-n16": {
    "paddingTop": "-32",
    "paddingBottom": "-32"
  },
  "uni-pa-16": {
    "paddingTop": "32",
    "paddingRight": "32",
    "paddingBottom": "32",
    "paddingLeft": "32"
  },
  "uni-pa-n16": {
    "paddingTop": "-32",
    "paddingRight": "-32",
    "paddingBottom": "-32",
    "paddingLeft": "-32"
  },
  "uni-radius-0": {
    "borderRadius": 0
  },
  "uni-radius": {
    "borderRadius": "5"
  },
  "uni-radius-lg": {
    "borderRadius": "10"
  },
  "uni-radius-xl": {
    "borderRadius": "30"
  },
  "uni-radius-pill": {
    "borderRadius": "9999"
  },
  "uni-radius-circle": {
    "borderRadius": 50
  },
  "uni-radius-t-0": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0
  },
  "uni-radius-t": {
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5"
  },
  "uni-radius-t-lg": {
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10"
  },
  "uni-radius-t-xl": {
    "borderTopLeftRadius": "30",
    "borderTopRightRadius": "30"
  },
  "uni-radius-t-pill": {
    "borderTopLeftRadius": "9999",
    "borderTopRightRadius": "9999"
  },
  "uni-radius-t-circle": {
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50
  },
  "uni-radius-r-0": {
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "uni-radius-r": {
    "borderTopRightRadius": "5",
    "borderBottomRightRadius": "5"
  },
  "uni-radius-r-lg": {
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "uni-radius-r-xl": {
    "borderTopRightRadius": "30",
    "borderBottomRightRadius": "30"
  },
  "uni-radius-r-pill": {
    "borderTopRightRadius": "9999",
    "borderBottomRightRadius": "9999"
  },
  "uni-radius-r-circle": {
    "borderTopRightRadius": 50,
    "borderBottomRightRadius": 50
  },
  "uni-radius-b-0": {
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0
  },
  "uni-radius-b": {
    "borderBottomLeftRadius": "5",
    "borderBottomRightRadius": "5"
  },
  "uni-radius-b-lg": {
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "uni-radius-b-xl": {
    "borderBottomLeftRadius": "30",
    "borderBottomRightRadius": "30"
  },
  "uni-radius-b-pill": {
    "borderBottomLeftRadius": "9999",
    "borderBottomRightRadius": "9999"
  },
  "uni-radius-b-circle": {
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50
  },
  "uni-radius-l-0": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0
  },
  "uni-radius-l": {
    "borderTopLeftRadius": "5",
    "borderBottomLeftRadius": "5"
  },
  "uni-radius-l-lg": {
    "borderTopLeftRadius": "10",
    "borderBottomLeftRadius": "10"
  },
  "uni-radius-l-xl": {
    "borderTopLeftRadius": "30",
    "borderBottomLeftRadius": "30"
  },
  "uni-radius-l-pill": {
    "borderTopLeftRadius": "9999",
    "borderBottomLeftRadius": "9999"
  },
  "uni-radius-l-circle": {
    "borderTopLeftRadius": 50,
    "borderBottomLeftRadius": 50
  },
  "uni-radius-tl-0": {
    "borderTopLeftRadius": 0
  },
  "uni-radius-tl": {
    "borderTopLeftRadius": "5"
  },
  "uni-radius-tl-lg": {
    "borderTopLeftRadius": "10"
  },
  "uni-radius-tl-xl": {
    "borderTopLeftRadius": "30"
  },
  "uni-radius-tl-pill": {
    "borderTopLeftRadius": "9999"
  },
  "uni-radius-tl-circle": {
    "borderTopLeftRadius": 50
  },
  "uni-radius-tr-0": {
    "borderTopRightRadius": 0
  },
  "uni-radius-tr": {
    "borderTopRightRadius": "5"
  },
  "uni-radius-tr-lg": {
    "borderTopRightRadius": "10"
  },
  "uni-radius-tr-xl": {
    "borderTopRightRadius": "30"
  },
  "uni-radius-tr-pill": {
    "borderTopRightRadius": "9999"
  },
  "uni-radius-tr-circle": {
    "borderTopRightRadius": 50
  },
  "uni-radius-br-0": {
    "borderBottomRightRadius": 0
  },
  "uni-radius-br": {
    "borderBottomRightRadius": "5"
  },
  "uni-radius-br-lg": {
    "borderBottomRightRadius": "10"
  },
  "uni-radius-br-xl": {
    "borderBottomRightRadius": "30"
  },
  "uni-radius-br-pill": {
    "borderBottomRightRadius": "9999"
  },
  "uni-radius-br-circle": {
    "borderBottomRightRadius": 50
  },
  "uni-radius-bl-0": {
    "borderBottomLeftRadius": 0
  },
  "uni-radius-bl": {
    "borderBottomLeftRadius": "5"
  },
  "uni-radius-bl-lg": {
    "borderBottomLeftRadius": "10"
  },
  "uni-radius-bl-xl": {
    "borderBottomLeftRadius": "30"
  },
  "uni-radius-bl-pill": {
    "borderBottomLeftRadius": "9999"
  },
  "uni-radius-bl-circle": {
    "borderBottomLeftRadius": 50
  },
  "example-info": {
    "fontSize": "14",
    "color": "#333333",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!***************************************************!*\
  !*** D:/qrc-uni/pages/scan/scan.nvue?mpType=page ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.nvue?vue&type=template&id=08909608&mpType=page */ 5);\n/* harmony import */ var _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./scan.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./scan.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"82e8b94e\",\n  false,\n  _scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/scan/scan.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF5RDtBQUM3RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXlEO0FBQ2xIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zY2FuLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDg5MDk2MDgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zY2FuLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFDOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiODJlOGI5NGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvc2Nhbi9zY2FuLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************************************************************!*\
  !*** D:/qrc-uni/pages/scan/scan.nvue?vue&type=template&id=08909608&mpType=page ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan.nvue?vue&type=template&id=08909608&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_08909608_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/qrc-uni/pages/scan/scan.nvue?vue&type=template&id=08909608&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c("barcode", {
            ref: "barcode",
            staticClass: ["barcode"],
            attrs: {
              id: "1",
              autostart: "true",
              background: "rgb(0,0,0)",
              frameColor: "#1C86EE",
              scanbarColor: "#1C86EE",
              filters: _vm.fil
            },
            on: { marked: _vm.success1, error: _vm.fail1 }
          }),
          _c("button", { staticClass: ["btn"], on: { click: _vm.toStart } }, [
            _vm._v("开始扫码识别")
          ]),
          _c("button", { staticClass: ["btn"], on: { click: _vm.tocancel } }, [
            _vm._v("取消扫码识别")
          ]),
          _c("button", { staticClass: ["btn"], on: { click: _vm.toFlash } }, [
            _vm._v("开启闪光灯")
          ]),
          _c("button", { staticClass: ["btn"], on: { click: _vm.toscan } }, [
            _vm._v("预览")
          ])
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!***************************************************************************!*\
  !*** D:/qrc-uni/pages/scan/scan.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThhLENBQWdCLDBkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hQzpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhQzpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFDOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY2FuLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFDOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFDOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUM6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/qrc-uni/pages/scan/scan.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  onLoad: function onLoad() {\n\n  },\n  data: function data() {\n    return {\n      fil: [0, 2, 1] };\n\n  },\n\n  methods: {\n    success1: function success1(e) {\n      __f__(\"log\", \"success1:\" + JSON.stringify(e), \" at pages/scan/scan.nvue:24\");\n    },\n    fail1: function fail1(e) {\n      __f__(\"log\", \"fail1:\" + JSON.stringify(e), \" at pages/scan/scan.nvue:27\");\n    },\n    toStart: function toStart() {\n      this.$refs.barcode.start({\n        conserve: true,\n        filename: '_doc/barcode/' });\n\n    },\n    tocancel: function tocancel() {\n      this.$refs.barcode.cancel();\n    },\n    toFlash: function toFlash() {\n      this.$refs.barcode.setFlash(true);\n    },\n\n    toscan: function toscan() {\n      __f__(\"log\", \"scan:\", \" at pages/scan/scan.nvue:43\");\n      var barcodeModule = __webpack_provided_uni_dot_requireNativePlugin('barcodeScan');\n      barcodeModule.scan(\"/static/barcode1.png\", function (e) {\n        __f__(\"log\", \"scan_error:\" + JSON.stringify(e), \" at pages/scan/scan.nvue:46\");\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2Nhbi9zY2FuLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFXQTtBQUNBLFFBREEsb0JBQ0E7O0FBRUEsR0FIQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLG9CQURBOztBQUdBLEdBUkE7O0FBVUE7QUFDQSxZQURBLG9CQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsaUJBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsaUNBRkE7O0FBSUEsS0FaQTtBQWFBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBO0FBQ0E7QUFDQSxLQWxCQTs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQTFCQSxFQVZBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDxiYXJjb2RlIGlkPScxJyBjbGFzcz1cImJhcmNvZGVcIiBhdXRvc3RhcnQ9XCJ0cnVlXCIgcmVmPVwiYmFyY29kZVwiIGJhY2tncm91bmQ9XCJyZ2IoMCwwLDApXCIgZnJhbWVDb2xvcj1cIiMxQzg2RUVcIlxyXG5cdFx0XHRzY2FuYmFyQ29sb3I9XCIjMUM4NkVFXCIgOmZpbHRlcnM9XCJmaWxcIiBAbWFya2VkPVwic3VjY2VzczFcIiBAZXJyb3I9XCJmYWlsMVwiPjwvYmFyY29kZT5cclxuXHRcdDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJ0b1N0YXJ0XCI+5byA5aeL5omr56CB6K+G5YirPC9idXR0b24+XHJcblx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwidG9jYW5jZWxcIj7lj5bmtojmiavnoIHor4bliKs8L2J1dHRvbj5cclxuXHRcdDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJ0b0ZsYXNoXCI+5byA5ZCv6Zeq5YWJ54GvPC9idXR0b24+XHJcblx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwidG9zY2FuXCI+6aKE6KeIPC9idXR0b24+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG9uTG9hZCgpIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRmaWw6IFswLCAyLCAxXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c3VjY2VzczEoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwic3VjY2VzczE6XCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwxKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImZhaWwxOlwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1N0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUuc3RhcnQoe1xyXG5cdFx0XHRcdFx0Y29uc2VydmU6IHRydWUsXHJcblx0XHRcdFx0XHRmaWxlbmFtZTogJ19kb2MvYmFyY29kZS8nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvY2FuY2VsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUuY2FuY2VsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRmxhc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuYmFyY29kZS5zZXRGbGFzaCh0cnVlKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHRvc2NhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzY2FuOlwiKTtcclxuXHRcdFx0XHRjb25zdCBiYXJjb2RlTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2JhcmNvZGVTY2FuJyk7XHJcblx0XHRcdFx0YmFyY29kZU1vZHVsZS5zY2FuKFwiL3N0YXRpYy9iYXJjb2RlMS5wbmdcIiwgKGUpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwic2Nhbl9lcnJvcjpcIiArIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmJhcmNvZGUge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogNzAwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcclxuXHR9XHJcblxyXG5cdC5idG4ge1xyXG5cdFx0dG9wOiAyMHJweDtcclxuXHRcdHdpZHRoOiA3MzBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0NThCMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */
/*!***********************************************************************************!*\
  !*** D:/qrc-uni/pages/scan/scan.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/qrc-uni/pages/scan/scan.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "barcode": {
    "width": "750rpx",
    "height": "700rpx",
    "backgroundColor": "#808080"
  },
  "btn": {
    "top": "20rpx",
    "width": "730rpx",
    "marginLeft": "10rpx",
    "marginTop": "10rpx",
    "backgroundColor": "#458B00",
    "borderRadius": "10rpx"
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
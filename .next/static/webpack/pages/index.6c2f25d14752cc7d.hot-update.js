"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar HeadBar = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(HeadBar, _Component);\n    var _super = _createSuper(HeadBar);\n    function HeadBar() {\n        _classCallCheck(this, HeadBar);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            groupDropdownOptions: [\n                {\n                    value: 1,\n                    text: \"Loading...\",\n                    disabled: true\n                }\n            ],\n            calendarDropdownOptions: [\n                {\n                    value: 1,\n                    text: \"Loading...\",\n                    disabled: true\n                }\n            ],\n            selectedGroup: \"Select Group\",\n            selectedCalendar: \"Select Calendar\"\n        });\n        _defineProperty(_assertThisInitialized(_this), \"setGroupDropdownOptions\", function(options) {\n            _this.setState({\n                groupDropdownOptions: options\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"setCalendarDropdownOptions\", function(options) {\n            _this.setState({\n                calendarDropdownOptions: options\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"setSelectdGroup\", function(value) {\n            _this.setState({\n                selectedGroup: value\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"setSelectedCalendar\", function(value) {\n            _this.setState({\n                selectedCalendar: value\n            });\n        });\n        _defineProperty(_assertThisInitialized(_this), \"test\", function(event, data) {\n            console.log(data.value);\n            _this.setSelectedCalendar(data.value);\n        });\n        return _this;\n    }\n    _createClass(HeadBar, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                    Stackable: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                            header: true,\n                            children: \"Owl Calendar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Menu, {\n                            position: \"right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n                                        scrolling: true,\n                                        id: \"groupDropdown\",\n                                        text: this.state.selectedGroup,\n                                        options: this.state.groupDropdownOptions\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n                                        scrolling: true,\n                                        id: \"calendarDropdown\",\n                                        text: this.state.selectedCalendar,\n                                        options: this.state.calendarDropdownOptions\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        children: \"Manager Group\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        children: \"Manager Calendar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ramwong\\\\Desktop\\\\431 project\\\\etimetable\\\\components\\\\Header.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return HeadBar;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadBar);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEOzs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFDVCxDQUNWO2FBQ0o7Ozs7Q0FDSixDQWhFcUJKLHdEQUFlLENBZ0VwQztBQUNELCtEQUFlSyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSwgRHJvcGRvd24sIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZ3JvdXBEcm9wZG93bk9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogMSwgdGV4dDogJ0xvYWRpbmcuLi4nLCBkaXNhYmxlZDogdHJ1ZSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBjYWxlbmRhckRyb3Bkb3duT3B0aW9uczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiAxLCB0ZXh0OiAnTG9hZGluZy4uLicsIGRpc2FibGVkOiB0cnVlIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdGVkR3JvdXA6IFwiU2VsZWN0IEdyb3VwXCIsXHJcbiAgICAgICAgc2VsZWN0ZWRDYWxlbmRhcjogXCJTZWxlY3QgQ2FsZW5kYXJcIlxyXG4gICAgfVxyXG5cclxuICAgIHNldEdyb3VwRHJvcGRvd25PcHRpb25zID0gb3B0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdyb3VwRHJvcGRvd25PcHRpb25zOiBvcHRpb25zIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbGVuZGFyRHJvcGRvd25PcHRpb25zID0gb3B0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhbGVuZGFyRHJvcGRvd25PcHRpb25zOiBvcHRpb25zIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGRHcm91cCA9IHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRHcm91cDogdmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWRDYWxlbmRhciA9IHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDYWxlbmRhcjogdmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCA9IChldmVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRDYWxlbmRhcihkYXRhLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51IFN0YWNrYWJsZT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIE93bCBDYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gc2Nyb2xsaW5nIGlkPVwiZ3JvdXBEcm9wZG93blwiIHRleHQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRHcm91cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuZ3JvdXBEcm9wZG93bk9wdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBzY3JvbGxpbmcgaWQ9XCJjYWxlbmRhckRyb3Bkb3duXCIgdGV4dD17dGhpcy5zdGF0ZS5zZWxlY3RlZENhbGVuZGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jYWxlbmRhckRyb3Bkb3duT3B0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZXIgR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZXIgQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuTWVudT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkQmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJEcm9wZG93biIsIkJ1dHRvbiIsIkhlYWRCYXIiLCJzdGF0ZSIsImdyb3VwRHJvcGRvd25PcHRpb25zIiwidmFsdWUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJjYWxlbmRhckRyb3Bkb3duT3B0aW9ucyIsInNlbGVjdGVkR3JvdXAiLCJzZWxlY3RlZENhbGVuZGFyIiwic2V0R3JvdXBEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwic2V0U3RhdGUiLCJzZXRDYWxlbmRhckRyb3Bkb3duT3B0aW9ucyIsInNldFNlbGVjdGRHcm91cCIsInNldFNlbGVjdGVkQ2FsZW5kYXIiLCJ0ZXN0IiwiZXZlbnQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsIlN0YWNrYWJsZSIsIkl0ZW0iLCJoZWFkZXIiLCJwb3NpdGlvbiIsInNjcm9sbGluZyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});
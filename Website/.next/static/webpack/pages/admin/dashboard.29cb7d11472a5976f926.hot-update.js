webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./pages/admin/dashboard.js":
/*!**********************************!*\
  !*** ./pages/admin/dashboard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! layouts/Admin.js */ "./layouts/Admin.js");
/* harmony import */ var variables_charts_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! variables/charts.js */ "./variables/charts.js");
/* harmony import */ var variables_charts_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(variables_charts_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Headers/Header.js */ "./components/Headers/Header.js");







var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\pages\\admin\\dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // node.js library that concatenates classes (strings)

 // javascipt plugin for creating charts

 // react plugin used to create charts

 // reactstrap components

 // layout for this page

 // core components




var Dashboard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard, _React$Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dashboard);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleNavs", function (e, index) {
      e.preventDefault();

      _this.setState({
        activeNav: index,
        chartExample1Data: _this.state.chartExample1Data === "data1" ? "data2" : "data1"
      });
    });

    _this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };

    if (window.Chart) {
      Object(variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["parseOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_9___default.a, Object(variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartOptions"])());
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dashboard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_14__["default"], null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        className: "mt--7",
        fluid: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "mb-5 mb-xl-0",
        xl: "8"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        className: "shadow"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], {
        className: "bg-transparent"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "align-items-center"
      }, __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "text-uppercase text-light ls-1 mb-1"
      }, "Vis\xE3o Geral"), __jsx("h2", {
        className: "mb-0"
      }, "Temperatura (19/12/20 - 01/01/21)")), __jsx("div", {
        className: "col"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        className: "justify-content-end",
        pills: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("py-2 px-3", {
          active: this.state.activeNav === 1
        }),
        href: "#pablo",
        onClick: function onClick(e) {
          return _this2.toggleNavs(e, 1);
        }
      }, __jsx("span", {
        className: "d-none d-md-block"
      }, "Month"), __jsx("span", {
        className: "d-md-none"
      }, "M"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("py-2 px-3", {
          active: this.state.activeNav === 2
        }),
        "data-toggle": "tab",
        href: "#pablo",
        onClick: function onClick(e) {
          return _this2.toggleNavs(e, 2);
        }
      }, __jsx("span", {
        className: "d-none d-md-block"
      }, "Week"), __jsx("span", {
        className: "d-md-none"
      }, "W"))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardBody"], null, __jsx("div", {
        className: "chart"
      }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Line"], {
        data: variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartExample1"][this.state.chartExample1Data],
        options: variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartExample1"].options,
        getDatasetAtEvent: function getDatasetAtEvent(e) {
          return console.log(e);
        }
      }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xl: "4"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        className: "shadow"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], {
        className: "bg-transparent"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "align-items-center"
      }, __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "text-uppercase text-muted ls-1 mb-1"
      }, "Performance"), __jsx("h2", {
        className: "mb-0"
      }, "Total orders")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardBody"], null, __jsx("div", {
        className: "chart"
      }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
        data: variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartExample2"].data,
        options: variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartExample2"].options
      })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "mt-5"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "mb-5 mb-xl-0",
        xl: "8"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        className: "shadow"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], {
        className: "border-0"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "align-items-center"
      }, __jsx("div", {
        className: "col"
      }, __jsx("h3", {
        className: "mb-0"
      }, "Page visits")), __jsx("div", {
        className: "col text-right"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "primary",
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        size: "sm"
      }, "See all")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
        className: "align-items-center table-flush",
        responsive: true
      }, __jsx("thead", {
        className: "thead-light"
      }, __jsx("tr", null, __jsx("th", {
        scope: "col"
      }, "Page name"), __jsx("th", {
        scope: "col"
      }, "Visitors"), __jsx("th", {
        scope: "col"
      }, "Unique users"), __jsx("th", {
        scope: "col"
      }, "Bounce rate"))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "/argon/"), __jsx("td", null, "4,569"), __jsx("td", null, "340"), __jsx("td", null, __jsx("i", {
        className: "fas fa-arrow-up text-success mr-3"
      }), " ", "46,53%")), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "/argon/index.html"), __jsx("td", null, "3,985"), __jsx("td", null, "319"), __jsx("td", null, __jsx("i", {
        className: "fas fa-arrow-down text-warning mr-3"
      }), " ", "46,53%")), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "/argon/charts.html"), __jsx("td", null, "3,513"), __jsx("td", null, "294"), __jsx("td", null, __jsx("i", {
        className: "fas fa-arrow-down text-warning mr-3"
      }), " ", "36,49%")), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "/argon/tables.html"), __jsx("td", null, "2,050"), __jsx("td", null, "147"), __jsx("td", null, __jsx("i", {
        className: "fas fa-arrow-up text-success mr-3"
      }), " ", "50,87%")), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "/argon/profile.html"), __jsx("td", null, "1,795"), __jsx("td", null, "190"), __jsx("td", null, __jsx("i", {
        className: "fas fa-arrow-down text-danger mr-3"
      }), " ", "46,53%")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xl: "4"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        className: "shadow"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], {
        className: "border-0"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "align-items-center"
      }, __jsx("div", {
        className: "col"
      }, __jsx("h3", {
        className: "mb-0"
      }, "Social traffic")), __jsx("div", {
        className: "col text-right"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "primary",
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        size: "sm"
      }, "See all")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
        className: "align-items-center table-flush",
        responsive: true
      }, __jsx("thead", {
        className: "thead-light"
      }, __jsx("tr", null, __jsx("th", {
        scope: "col"
      }, "Referral"), __jsx("th", {
        scope: "col"
      }, "Visitors"), __jsx("th", {
        scope: "col"
      }))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "Facebook"), __jsx("td", null, "1,480"), __jsx("td", null, __jsx("div", {
        className: "d-flex align-items-center"
      }, __jsx("span", {
        className: "mr-2"
      }, "60%"), __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Progress"], {
        max: "100",
        value: "60",
        barClassName: "bg-gradient-danger"
      }))))), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "Facebook"), __jsx("td", null, "5,480"), __jsx("td", null, __jsx("div", {
        className: "d-flex align-items-center"
      }, __jsx("span", {
        className: "mr-2"
      }, "70%"), __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Progress"], {
        max: "100",
        value: "70",
        barClassName: "bg-gradient-success"
      }))))), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "Google"), __jsx("td", null, "4,807"), __jsx("td", null, __jsx("div", {
        className: "d-flex align-items-center"
      }, __jsx("span", {
        className: "mr-2"
      }, "80%"), __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Progress"], {
        max: "100",
        value: "80"
      }))))), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "Instagram"), __jsx("td", null, "3,678"), __jsx("td", null, __jsx("div", {
        className: "d-flex align-items-center"
      }, __jsx("span", {
        className: "mr-2"
      }, "75%"), __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Progress"], {
        max: "100",
        value: "75",
        barClassName: "bg-gradient-info"
      }))))), __jsx("tr", null, __jsx("th", {
        scope: "row"
      }, "twitter"), __jsx("td", null, "2,645"), __jsx("td", null, __jsx("div", {
        className: "d-flex align-items-center"
      }, __jsx("span", {
        className: "mr-2"
      }, "30%"), __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Progress"], {
        max: "100",
        value: "30",
        barClassName: "bg-gradient-warning"
      }))))))))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Dashboard.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_12__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwiZSIsImluZGV4IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFjdGl2ZU5hdiIsImNoYXJ0RXhhbXBsZTFEYXRhIiwic3RhdGUiLCJ3aW5kb3ciLCJDaGFydCIsInBhcnNlT3B0aW9ucyIsImNoYXJ0T3B0aW9ucyIsImNsYXNzbmFtZXMiLCJhY3RpdmUiLCJ0b2dnbGVOYXZzIiwiY2hhcnRFeGFtcGxlMSIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRFeGFtcGxlMiIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FlQTs7Q0FFQTs7QUFDQTtBQU9BOztJQUVNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixxTkFVTixVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN6QkQsT0FBQyxDQUFDRSxjQUFGOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxpQkFBUyxFQUFFSCxLQURDO0FBRVpJLHlCQUFpQixFQUNmLE1BQUtDLEtBQUwsQ0FBV0QsaUJBQVgsS0FBaUMsT0FBakMsR0FBMkMsT0FBM0MsR0FBcUQ7QUFIM0MsT0FBZDtBQUtELEtBakJrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hGLGVBQVMsRUFBRSxDQURBO0FBRVhDLHVCQUFpQixFQUFFO0FBRlIsS0FBYjs7QUFJQSxRQUFJRSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJDLCtFQUFZLENBQUNELCtDQUFELEVBQVFFLHlFQUFZLEVBQXBCLENBQVo7QUFDRDs7QUFSZ0I7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LEVBRUUsbUJBQ0UsTUFBQyxvREFBRDtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLElBRlI7QUFHRSxvQkFBWSxFQUFDO0FBSGYsUUFERixDQUZGLENBREYsQ0FIRixDQTdDRixFQTZERSxrQkFDRTtBQUFJLGFBQUssRUFBQztBQUFWLG1CQURGLEVBRUUsMEJBRkYsRUFHRSxrQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixlQURGLEVBRUUsbUJBQ0UsTUFBQyxvREFBRDtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLElBRlI7QUFHRSxvQkFBWSxFQUFDO0FBSGYsUUFERixDQUZGLENBREYsQ0FIRixDQTdERixDQVJGLENBbEJGLENBREYsQ0EvRUYsQ0EvRUYsQ0FIRixDQURGO0FBa1JEOzs7O0VBdFNxQmtCLDRDQUFLLENBQUNDLFM7O0FBeVM5QnZCLFNBQVMsQ0FBQ3dCLE1BQVYsR0FBbUJDLHlEQUFuQjtBQUVlekIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkLjI5Y2I3ZDExNDcyYTU5NzZmOTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlLmpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3NlcyAoc3RyaW5ncylcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBqYXZhc2NpcHQgcGx1Z2luIGZvciBjcmVhdGluZyBjaGFydHNcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbi8vIHJlYWN0IHBsdWdpbiB1c2VkIHRvIGNyZWF0ZSBjaGFydHNcbmltcG9ydCB7IExpbmUsIEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkQm9keSxcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgTmF2LFxuICBQcm9ncmVzcyxcbiAgVGFibGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxuaW1wb3J0IEFkbWluIGZyb20gXCJsYXlvdXRzL0FkbWluLmpzXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7XG4gIGNoYXJ0T3B0aW9ucyxcbiAgcGFyc2VPcHRpb25zLFxuICBjaGFydEV4YW1wbGUxLFxuICBjaGFydEV4YW1wbGUyLFxufSBmcm9tIFwidmFyaWFibGVzL2NoYXJ0cy5qc1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlcnMvSGVhZGVyLmpzXCI7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVOYXY6IDEsXG4gICAgICBjaGFydEV4YW1wbGUxRGF0YTogXCJkYXRhMVwiLFxuICAgIH07XG4gICAgaWYgKHdpbmRvdy5DaGFydCkge1xuICAgICAgcGFyc2VPcHRpb25zKENoYXJ0LCBjaGFydE9wdGlvbnMoKSk7XG4gICAgfVxuICB9XG4gIHRvZ2dsZU5hdnMgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVOYXY6IGluZGV4LFxuICAgICAgY2hhcnRFeGFtcGxlMURhdGE6XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhcnRFeGFtcGxlMURhdGEgPT09IFwiZGF0YTFcIiA/IFwiZGF0YTJcIiA6IFwiZGF0YTFcIixcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtLTdcIiBmbHVpZD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtYi01IG1iLXhsLTBcIiB4bD1cIjhcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtbGlnaHQgbHMtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaXPDo28gR2VyYWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wXCI+VGVtcGVyYXR1cmEgKDE5LzEyLzIwIC0gMDEvMDEvMjEpPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgcGlsbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJweS0yIHB4LTNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLmFjdGl2ZU5hdiA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVOYXZzKGUsIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5Nb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW1kLW5vbmVcIj5NPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJweS0yIHB4LTNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLmFjdGl2ZU5hdiA9PT0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTmF2cyhlLCAyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+V2Vlazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW1kLW5vbmVcIj5XPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIHsvKiBDaGFydCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmVcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjaGFydEV4YW1wbGUxW3RoaXMuc3RhdGUuY2hhcnRFeGFtcGxlMURhdGFdfVxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoYXJ0RXhhbXBsZTEub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhc2V0QXRFdmVudD17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhsPVwiNFwiPlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC1tdXRlZCBscy0xIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMFwiPlRvdGFsIG9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIHsvKiBDaGFydCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RXhhbXBsZTIuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGFydEV4YW1wbGUyLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWItNSBtYi14bC0wXCIgeGw9XCI4XCI+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+UGFnZSB2aXNpdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBhbGxcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciB0YWJsZS1mbHVzaFwiIHJlc3BvbnNpdmU+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlBhZ2UgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VmlzaXRvcnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVuaXF1ZSB1c2VyczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Qm91bmNlIHJhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPi9hcmdvbi88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD40LDU2OTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjM0MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwIHRleHQtc3VjY2VzcyBtci0zXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA0Niw1MyVcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+L2FyZ29uL2luZGV4Lmh0bWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zLDk4NTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjMxOTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LWRvd24gdGV4dC13YXJuaW5nIG1yLTNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDQ2LDUzJVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj4vYXJnb24vY2hhcnRzLmh0bWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zLDUxMzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjI5NDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LWRvd24gdGV4dC13YXJuaW5nIG1yLTNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDM2LDQ5JVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj4vYXJnb24vdGFibGVzLmh0bWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yLDA1MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjE0NzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwIHRleHQtc3VjY2VzcyBtci0zXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA1MCw4NyVcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+L2FyZ29uL3Byb2ZpbGUuaHRtbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjEsNzk1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTkwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctZG93biB0ZXh0LWRhbmdlciBtci0zXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA0Niw1MyVcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeGw9XCI0XCI+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+U29jaWFsIHRyYWZmaWM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBhbGxcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciB0YWJsZS1mbHVzaFwiIHJlc3BvbnNpdmU+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJlZmVycmFsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WaXNpdG9yczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5GYWNlYm9vazwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjEsNDgwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPjYwJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhckNsYXNzTmFtZT1cImJnLWdyYWRpZW50LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+RmFjZWJvb2s8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD41LDQ4MDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj43MCU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI3MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJDbGFzc05hbWU9XCJiZy1ncmFkaWVudC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5Hb29nbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD40LDgwNzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj44MCU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIG1heD1cIjEwMFwiIHZhbHVlPVwiODBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5JbnN0YWdyYW08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zLDY3ODwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj43NSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI3NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJDbGFzc05hbWU9XCJiZy1ncmFkaWVudC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj50d2l0dGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+Miw2NDU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+MzAlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyQ2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkRhc2hib2FyZC5sYXlvdXQgPSBBZG1pbjtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
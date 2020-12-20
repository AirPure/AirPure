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
      }, "Overview"), __jsx("h2", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwiZSIsImluZGV4IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFjdGl2ZU5hdiIsImNoYXJ0RXhhbXBsZTFEYXRhIiwic3RhdGUiLCJ3aW5kb3ciLCJDaGFydCIsInBhcnNlT3B0aW9ucyIsImNoYXJ0T3B0aW9ucyIsImNsYXNzbmFtZXMiLCJhY3RpdmUiLCJ0b2dnbGVOYXZzIiwiY2hhcnRFeGFtcGxlMSIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRFeGFtcGxlMiIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FlQTs7Q0FFQTs7QUFDQTtBQU9BOztJQUVNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixxTkFVTixVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN6QkQsT0FBQyxDQUFDRSxjQUFGOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxpQkFBUyxFQUFFSCxLQURDO0FBRVpJLHlCQUFpQixFQUNmLE1BQUtDLEtBQUwsQ0FBV0QsaUJBQVgsS0FBaUMsT0FBakMsR0FBMkMsT0FBM0MsR0FBcUQ7QUFIM0MsT0FBZDtBQUtELEtBakJrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hGLGVBQVMsRUFBRSxDQURBO0FBRVhDLHVCQUFpQixFQUFFO0FBRlIsS0FBYjs7QUFJQSxRQUFJRSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJDLCtFQUFZLENBQUNELCtDQUFELEVBQVFFLHlFQUFZLEVBQXBCLENBQVo7QUFDRDs7QUFSZ0I7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LEVBRUUsbUJBQ0UsTUFBQyxvREFBRDtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLElBRlI7QUFHRSxvQkFBWSxFQUFDO0FBSGYsUUFERixDQUZGLENBREYsQ0FIRixDQTdDRixFQTZERSxrQkFDRTtBQUFJLGFBQUssRUFBQztBQUFWLG1CQURGLEVBRUUsMEJBRkYsRUFHRSxrQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixlQURGLEVBRUUsbUJBQ0UsTUFBQyxvREFBRDtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLElBRlI7QUFHRSxvQkFBWSxFQUFDO0FBSGYsUUFERixDQUZGLENBREYsQ0FIRixDQTdERixDQVJGLENBbEJGLENBREYsQ0EvRUYsQ0EvRUYsQ0FIRixDQURGO0FBa1JEOzs7O0VBdFNxQmtCLDRDQUFLLENBQUNDLFM7O0FBeVM5QnZCLFNBQVMsQ0FBQ3dCLE1BQVYsR0FBbUJDLHlEQUFuQjtBQUVlekIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkLjczOTA4ZWU5ZTRiYzBlYjg0NzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlLmpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3NlcyAoc3RyaW5ncylcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBqYXZhc2NpcHQgcGx1Z2luIGZvciBjcmVhdGluZyBjaGFydHNcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbi8vIHJlYWN0IHBsdWdpbiB1c2VkIHRvIGNyZWF0ZSBjaGFydHNcbmltcG9ydCB7IExpbmUsIEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkQm9keSxcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgTmF2LFxuICBQcm9ncmVzcyxcbiAgVGFibGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxuaW1wb3J0IEFkbWluIGZyb20gXCJsYXlvdXRzL0FkbWluLmpzXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7XG4gIGNoYXJ0T3B0aW9ucyxcbiAgcGFyc2VPcHRpb25zLFxuICBjaGFydEV4YW1wbGUxLFxuICBjaGFydEV4YW1wbGUyLFxufSBmcm9tIFwidmFyaWFibGVzL2NoYXJ0cy5qc1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlcnMvSGVhZGVyLmpzXCI7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVOYXY6IDEsXG4gICAgICBjaGFydEV4YW1wbGUxRGF0YTogXCJkYXRhMVwiLFxuICAgIH07XG4gICAgaWYgKHdpbmRvdy5DaGFydCkge1xuICAgICAgcGFyc2VPcHRpb25zKENoYXJ0LCBjaGFydE9wdGlvbnMoKSk7XG4gICAgfVxuICB9XG4gIHRvZ2dsZU5hdnMgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVOYXY6IGluZGV4LFxuICAgICAgY2hhcnRFeGFtcGxlMURhdGE6XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhcnRFeGFtcGxlMURhdGEgPT09IFwiZGF0YTFcIiA/IFwiZGF0YTJcIiA6IFwiZGF0YTFcIixcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtLTdcIiBmbHVpZD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtYi01IG1iLXhsLTBcIiB4bD1cIjhcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtbGlnaHQgbHMtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBPdmVydmlld1xuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTBcIj5UZW1wZXJhdHVyYSAoMTkvMTIvMjAgLSAwMS8wMS8yMSk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIiBwaWxscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInB5LTIgcHgtM1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlTmF2ID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU5hdnMoZSwgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPk1vbnRoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPk08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInB5LTIgcHgtM1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlTmF2ID09PSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVOYXZzKGUsIDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2tcIj5XZWVrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbWQtbm9uZVwiPlc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgey8qIENoYXJ0ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RXhhbXBsZTFbdGhpcy5zdGF0ZS5jaGFydEV4YW1wbGUxRGF0YV19XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hhcnRFeGFtcGxlMS5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGdldERhdGFzZXRBdEV2ZW50PXsoZSkgPT4gY29uc29sZS5sb2coZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeGw9XCI0XCI+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LW11dGVkIGxzLTEgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wXCI+VG90YWwgb3JkZXJzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgey8qIENoYXJ0ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhcnRFeGFtcGxlMi5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoYXJ0RXhhbXBsZTIub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtYi01IG1iLXhsLTBcIiB4bD1cIjhcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5QYWdlIHZpc2l0czwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlIGFsbFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIHRhYmxlLWZsdXNoXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aGVhZC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UGFnZSBuYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WaXNpdG9yczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VW5pcXVlIHVzZXJzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Cb3VuY2UgcmF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+L2FyZ29uLzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjQsNTY5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzQwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctdXAgdGV4dC1zdWNjZXNzIG1yLTNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDQ2LDUzJVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj4vYXJnb24vaW5kZXguaHRtbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjMsOTg1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzE5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctZG93biB0ZXh0LXdhcm5pbmcgbXItM1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgNDYsNTMlXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPi9hcmdvbi9jaGFydHMuaHRtbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjMsNTEzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+Mjk0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctZG93biB0ZXh0LXdhcm5pbmcgbXItM1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgMzYsNDklXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPi9hcmdvbi90YWJsZXMuaHRtbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjIsMDUwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTQ3PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctdXAgdGV4dC1zdWNjZXNzIG1yLTNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDUwLDg3JVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj4vYXJnb24vcHJvZmlsZS5odG1sPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSw3OTU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xOTA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1kb3duIHRleHQtZGFuZ2VyIG1yLTNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDQ2LDUzJVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4bD1cIjRcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5Tb2NpYWwgdHJhZmZpYzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlIGFsbFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIHRhYmxlLWZsdXNoXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aGVhZC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UmVmZXJyYWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZpc2l0b3JzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkZhY2Vib29rPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSw0ODA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+NjAlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyQ2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5GYWNlYm9vazwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjUsNDgwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPjcwJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjcwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhckNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkdvb2dsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjQsODA3PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPjgwJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgbWF4PVwiMTAwXCIgdmFsdWU9XCI4MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPkluc3RhZ3JhbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjMsNjc4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPjc1JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjc1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhckNsYXNzTmFtZT1cImJnLWdyYWRpZW50LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnR3aXR0ZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yLDY0NTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj4zMCU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJDbGFzc05hbWU9XCJiZy1ncmFkaWVudC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuRGFzaGJvYXJkLmxheW91dCA9IEFkbWluO1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9
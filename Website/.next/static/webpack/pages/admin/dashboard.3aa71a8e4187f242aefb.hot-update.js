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
      }, "M\xEAs"), __jsx("span", {
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
      }, "De olho"), __jsx("h2", {
        className: "mb-0"
      }, "Avisos")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardBody"], null, __jsx("div", {
        className: "chart"
      }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
        data: variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartExample2"].data,
        options: variables_charts_js__WEBPACK_IMPORTED_MODULE_13__["chartExample2"].options
      }))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwiZSIsImluZGV4IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFjdGl2ZU5hdiIsImNoYXJ0RXhhbXBsZTFEYXRhIiwic3RhdGUiLCJ3aW5kb3ciLCJDaGFydCIsInBhcnNlT3B0aW9ucyIsImNoYXJ0T3B0aW9ucyIsImNsYXNzbmFtZXMiLCJhY3RpdmUiLCJ0b2dnbGVOYXZzIiwiY2hhcnRFeGFtcGxlMSIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRFeGFtcGxlMiIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FlQTs7Q0FFQTs7QUFDQTtBQU9BOztJQUVNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixxTkFVTixVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN6QkQsT0FBQyxDQUFDRSxjQUFGOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxpQkFBUyxFQUFFSCxLQURDO0FBRVpJLHlCQUFpQixFQUNmLE1BQUtDLEtBQUwsQ0FBV0QsaUJBQVgsS0FBaUMsT0FBakMsR0FBMkMsT0FBM0MsR0FBcUQ7QUFIM0MsT0FBZDtBQUtELEtBakJrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hGLGVBQVMsRUFBRSxDQURBO0FBRVhDLHVCQUFpQixFQUFFO0FBRlIsS0FBYjs7QUFJQSxRQUFJRSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJDLCtFQUFZLENBQUNELCtDQUFELEVBQVFFLHlFQUFZLEVBQXBCLENBQVo7QUFDRDs7QUFSZ0I7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RkYsQ0FYRixDQURGLENBdERGLENBREYsQ0FIRixDQURGO0FBdUZEOzs7O0VBM0dxQkssNENBQUssQ0FBQ0MsUzs7QUE4RzlCdkIsU0FBUyxDQUFDd0IsTUFBVixHQUFtQkMseURBQW5CO0FBRWV6Qix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuM2FhNzFhOGU0MTg3ZjI0MmFlZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIG5vZGUuanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzIChzdHJpbmdzKVxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIGphdmFzY2lwdCBwbHVnaW4gZm9yIGNyZWF0aW5nIGNoYXJ0c1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuLy8gcmVhY3QgcGx1Z2luIHVzZWQgdG8gY3JlYXRlIGNoYXJ0c1xuaW1wb3J0IHsgTGluZSwgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRCb2R5LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBOYXYsXG4gIFByb2dyZXNzLFxuICBUYWJsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbi8vIGxheW91dCBmb3IgdGhpcyBwYWdlXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHtcbiAgY2hhcnRPcHRpb25zLFxuICBwYXJzZU9wdGlvbnMsXG4gIGNoYXJ0RXhhbXBsZTEsXG4gIGNoYXJ0RXhhbXBsZTIsXG59IGZyb20gXCJ2YXJpYWJsZXMvY2hhcnRzLmpzXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVycy9IZWFkZXIuanNcIjtcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZU5hdjogMSxcbiAgICAgIGNoYXJ0RXhhbXBsZTFEYXRhOiBcImRhdGExXCIsXG4gICAgfTtcbiAgICBpZiAod2luZG93LkNoYXJ0KSB7XG4gICAgICBwYXJzZU9wdGlvbnMoQ2hhcnQsIGNoYXJ0T3B0aW9ucygpKTtcbiAgICB9XG4gIH1cbiAgdG9nZ2xlTmF2cyA9IChlLCBpbmRleCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZU5hdjogaW5kZXgsXG4gICAgICBjaGFydEV4YW1wbGUxRGF0YTpcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGFydEV4YW1wbGUxRGF0YSA9PT0gXCJkYXRhMVwiID8gXCJkYXRhMlwiIDogXCJkYXRhMVwiLFxuICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgey8qIFBhZ2UgY29udGVudCAqL31cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC0tN1wiIGZsdWlkPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1iLTUgbWIteGwtMFwiIHhsPVwiOFwiPlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC1saWdodCBscy0xIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc8OjbyBHZXJhbFxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTBcIj5UZW1wZXJhdHVyYSAoMTkvMTIvMjAgLSAwMS8wMS8yMSk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIiBwaWxscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInB5LTIgcHgtM1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlTmF2ID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU5hdnMoZSwgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPk3DqnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1tZC1ub25lXCI+TTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwicHktMiBweC0zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmVOYXYgPT09IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU5hdnMoZSwgMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPldlZWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1tZC1ub25lXCI+Vzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICB7LyogQ2hhcnQgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhcnRFeGFtcGxlMVt0aGlzLnN0YXRlLmNoYXJ0RXhhbXBsZTFEYXRhXX1cbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGFydEV4YW1wbGUxLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YXNldEF0RXZlbnQ9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4bD1cIjRcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtbXV0ZWQgbHMtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZSBvbGhvXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMFwiPkF2aXNvczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIHsvKiBDaGFydCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RXhhbXBsZTIuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGFydEV4YW1wbGUyLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICBcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkRhc2hib2FyZC5sYXlvdXQgPSBBZG1pbjtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
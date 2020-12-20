webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var routes = [{
  path: "/dashboard",
  name: "Dashboard",
  icon: "ni ni-tv-2 text-primary",
  layout: "/admin"
}, {
  path: "/dashboard",
  name: "Visualização Geral",
  icon: "ni ni-planet text-blue",
  layout: "/admin"
}, {
  path: "/dashboard",
  name: "Relatórios",
  icon: "ni ni-pin-3 text-orange",
  layout: "/admin"
}, {
  path: "/dashboard",
  name: "PMOC",
  icon: "ni ni-single-02 text-yellow",
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiaWNvbiIsImxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQUlBLE1BQU0sR0FBRyxDQUNYO0FBQ0VDLE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLE1BQUksRUFBRSx5QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQURXLEVBT1g7QUFDRUgsTUFBSSxFQUFFLFlBRFI7QUFFRUMsTUFBSSxFQUFFLG9CQUZSO0FBR0VDLE1BQUksRUFBRSx3QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQVBXLEVBYVg7QUFDRUgsTUFBSSxFQUFFLFlBRFI7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsTUFBSSxFQUFFLHlCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBYlcsRUFtQlg7QUFDRUgsTUFBSSxFQUFFLFlBRFI7QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsTUFBSSxFQUFFLDZCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBbkJXLENBQWI7QUEwQmVKLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC4zOGE4ZmZiOTY5NDM1ZTNhODhjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgaWNvbjogXCJuaSBuaS10di0yIHRleHQtcHJpbWFyeVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgIG5hbWU6IFwiVmlzdWFsaXphw6fDo28gR2VyYWxcIixcbiAgICBpY29uOiBcIm5pIG5pLXBsYW5ldCB0ZXh0LWJsdWVcIixcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9kYXNoYm9hcmRcIixcbiAgICBuYW1lOiBcIlJlbGF0w7NyaW9zXCIsXG4gICAgaWNvbjogXCJuaSBuaS1waW4tMyB0ZXh0LW9yYW5nZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgIG5hbWU6IFwiUE1PQ1wiLFxuICAgIGljb246IFwibmkgbmktc2luZ2xlLTAyIHRleHQteWVsbG93XCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=
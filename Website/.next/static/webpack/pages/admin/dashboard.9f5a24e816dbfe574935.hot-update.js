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
  path: "/icons",
  name: "Visualização Geral",
  icon: "ni ni-planet text-blue",
  layout: "/admin"
}, {
  path: "/maps",
  name: "Relatórios",
  icon: "ni ni-pin-3 text-orange",
  layout: "/admin"
}, {
  path: "/profile",
  name: "User Profile",
  icon: "ni ni-single-02 text-yellow",
  layout: "/admin"
}, {
  path: "/tables",
  name: "Tables",
  icon: "ni ni-bullet-list-67 text-red",
  layout: "/admin"
}, {
  path: "/login",
  name: "Login",
  icon: "ni ni-key-25 text-info",
  layout: "/auth"
}, {
  path: "/register",
  name: "Register",
  icon: "ni ni-circle-08 text-pink",
  layout: "/auth"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiaWNvbiIsImxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQUlBLE1BQU0sR0FBRyxDQUNYO0FBQ0VDLE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLE1BQUksRUFBRSx5QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQURXLEVBT1g7QUFDRUgsTUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBSSxFQUFFLG9CQUZSO0FBR0VDLE1BQUksRUFBRSx3QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQVBXLEVBYVg7QUFDRUgsTUFBSSxFQUFFLE9BRFI7QUFFRUMsTUFBSSxFQUFFLFlBRlI7QUFHRUMsTUFBSSxFQUFFLHlCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBYlcsRUFtQlg7QUFDRUgsTUFBSSxFQUFFLFVBRFI7QUFFRUMsTUFBSSxFQUFFLGNBRlI7QUFHRUMsTUFBSSxFQUFFLDZCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBbkJXLEVBeUJYO0FBQ0VILE1BQUksRUFBRSxTQURSO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLE1BQUksRUFBRSwrQkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQXpCVyxFQStCWDtBQUNFSCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxNQUFJLEVBQUUsd0JBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0EvQlcsRUFxQ1g7QUFDRUgsTUFBSSxFQUFFLFdBRFI7QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsTUFBSSxFQUFFLDJCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBckNXLENBQWI7QUE0Q2VKLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC45ZjVhMjRlODE2ZGJmZTU3NDkzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxuICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgaWNvbjogXCJuaSBuaS10di0yIHRleHQtcHJpbWFyeVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2ljb25zXCIsXG4gICAgbmFtZTogXCJWaXN1YWxpemHDp8OjbyBHZXJhbFwiLFxuICAgIGljb246IFwibmkgbmktcGxhbmV0IHRleHQtYmx1ZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL21hcHNcIixcbiAgICBuYW1lOiBcIlJlbGF0w7NyaW9zXCIsXG4gICAgaWNvbjogXCJuaSBuaS1waW4tMyB0ZXh0LW9yYW5nZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcbiAgICBuYW1lOiBcIlVzZXIgUHJvZmlsZVwiLFxuICAgIGljb246IFwibmkgbmktc2luZ2xlLTAyIHRleHQteWVsbG93XCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdGFibGVzXCIsXG4gICAgbmFtZTogXCJUYWJsZXNcIixcbiAgICBpY29uOiBcIm5pIG5pLWJ1bGxldC1saXN0LTY3IHRleHQtcmVkXCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbG9naW5cIixcbiAgICBuYW1lOiBcIkxvZ2luXCIsXG4gICAgaWNvbjogXCJuaSBuaS1rZXktMjUgdGV4dC1pbmZvXCIsXG4gICAgbGF5b3V0OiBcIi9hdXRoXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxuICAgIG5hbWU6IFwiUmVnaXN0ZXJcIixcbiAgICBpY29uOiBcIm5pIG5pLWNpcmNsZS0wOCB0ZXh0LXBpbmtcIixcbiAgICBsYXlvdXQ6IFwiL2F1dGhcIixcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9
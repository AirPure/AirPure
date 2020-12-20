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
  name: "teste",
  icon: "ni ni-tv-2 text-primary",
  layout: "/admin"
}, {
  path: "/icons",
  name: "Icons",
  icon: "ni ni-planet text-blue",
  layout: "/admin"
}, {
  path: "/maps",
  name: "Maps",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiaWNvbiIsImxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQUlBLE1BQU0sR0FBRyxDQUNYO0FBQ0VDLE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE1BQUksRUFBRSx5QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQURXLEVBT1g7QUFDRUgsTUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsTUFBSSxFQUFFLHdCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBUFcsRUFhWDtBQUNFSCxNQUFJLEVBQUUsT0FEUjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxNQUFJLEVBQUUseUJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FiVyxFQW1CWDtBQUNFSCxNQUFJLEVBQUUsVUFEUjtBQUVFQyxNQUFJLEVBQUUsY0FGUjtBQUdFQyxNQUFJLEVBQUUsNkJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FuQlcsRUF5Qlg7QUFDRUgsTUFBSSxFQUFFLFNBRFI7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsTUFBSSxFQUFFLCtCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBekJXLEVBK0JYO0FBQ0VILE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE1BQUksRUFBRSx3QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQS9CVyxFQXFDWDtBQUNFSCxNQUFJLEVBQUUsV0FEUjtBQUVFQyxNQUFJLEVBQUUsVUFGUjtBQUdFQyxNQUFJLEVBQUUsMkJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FyQ1csQ0FBYjtBQTRDZUoscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmI0NDM0NDk3ZTEzMzk4YWIxOGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgbmFtZTogXCJ0ZXN0ZVwiLFxuICAgIGljb246IFwibmkgbmktdHYtMiB0ZXh0LXByaW1hcnlcIixcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9pY29uc1wiLFxuICAgIG5hbWU6IFwiSWNvbnNcIixcbiAgICBpY29uOiBcIm5pIG5pLXBsYW5ldCB0ZXh0LWJsdWVcIixcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9tYXBzXCIsXG4gICAgbmFtZTogXCJNYXBzXCIsXG4gICAgaWNvbjogXCJuaSBuaS1waW4tMyB0ZXh0LW9yYW5nZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcbiAgICBuYW1lOiBcIlVzZXIgUHJvZmlsZVwiLFxuICAgIGljb246IFwibmkgbmktc2luZ2xlLTAyIHRleHQteWVsbG93XCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdGFibGVzXCIsXG4gICAgbmFtZTogXCJUYWJsZXNcIixcbiAgICBpY29uOiBcIm5pIG5pLWJ1bGxldC1saXN0LTY3IHRleHQtcmVkXCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbG9naW5cIixcbiAgICBuYW1lOiBcIkxvZ2luXCIsXG4gICAgaWNvbjogXCJuaSBuaS1rZXktMjUgdGV4dC1pbmZvXCIsXG4gICAgbGF5b3V0OiBcIi9hdXRoXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxuICAgIG5hbWU6IFwiUmVnaXN0ZXJcIixcbiAgICBpY29uOiBcIm5pIG5pLWNpcmNsZS0wOCB0ZXh0LXBpbmtcIixcbiAgICBsYXlvdXQ6IFwiL2F1dGhcIixcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9
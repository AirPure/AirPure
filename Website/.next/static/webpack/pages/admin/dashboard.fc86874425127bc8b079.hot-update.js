webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\components\\Sidebar\\Sidebar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*eslint-disable*/


 // nodejs library to set properties for components

 // reactstrap components


var ps;

function Sidebar(props) {
  _s();

  var _this = this;

  // used for checking current route
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      collapseOpen = _React$useState2[0],
      setCollapseOpen = _React$useState2[1]; // verifies if routeName is the one active (in browser input)


  var activeRoute = function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1;
  }; // toggles collapse between opened and closed (true/false)


  var toggleCollapse = function toggleCollapse() {
    setCollapseOpen(!collapseOpen);
  }; // closes the collapse


  var closeCollapse = function closeCollapse() {
    setCollapseOpen(false);
  }; // creates the links that appear in the left menu / Sidebar


  var createLinks = function createLinks(routes) {
    return routes.map(function (prop, key) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
        key: key,
        active: activeRoute(prop.layout + prop.path)
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: prop.layout + prop.path
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
        href: "#pablo",
        active: activeRoute(prop.layout + prop.path),
        onClick: closeCollapse
      }, __jsx("i", {
        className: prop.icon
      }), prop.name)));
    });
  };

  var routes = props.routes,
      logo = props.logo;

  var navbarBrand = __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarBrand"], {
    href: "#pablo",
    className: "pt-0"
  }, __jsx("img", {
    alt: logo.imgAlt,
    className: "navbar-brand-img",
    src: logo.imgSrc
  }));

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
    className: "navbar-vertical fixed-left navbar-light bg-white",
    expand: "md",
    id: "sidenav-main"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    fluid: true
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: toggleCollapse
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  })), logo && logo.innerLink ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: logo.innerLink
  }, __jsx("span", null, navbarBrand)) : null, logo && logo.outterLink ? __jsx("a", {
    href: logo.innerLink,
    target: "_blank"
  }, navbarBrand) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "align-items-center d-md-none"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
    nav: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
    nav: true,
    className: "nav-link-icon"
  }, __jsx("i", {
    className: "ni ni-bell-55"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
    "aria-labelledby": "navbar-default_dropdown_1",
    className: "dropdown-menu-arrow",
    right: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, "Action"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, "Another action"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, "Something else here"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
    nav: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
    nav: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    className: "align-items-center"
  }, __jsx("span", {
    className: "avatar avatar-sm rounded-circle"
  }, __jsx("img", {
    alt: "...",
    src: __webpack_require__(/*! assets/img/theme/team-1-800x800.jpg */ "./assets/img/theme/team-1-800x800.jpg")
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
    className: "dropdown-menu-arrow",
    right: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    className: "noti-title",
    header: true,
    tag: "div"
  }, __jsx("h6", {
    className: "text-overflow m-0"
  }, "Welcome!")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-single-02"
  }), __jsx("span", null, "My profile"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-settings-gear-65"
  }), __jsx("span", null, "Settings"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-calendar-grid-58"
  }), __jsx("span", null, "Activity"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-support-16"
  }), __jsx("span", null, "Support"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    href: "#pablo",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, __jsx("i", {
    className: "ni ni-user-run"
  }), __jsx("span", null, "Logout"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
    navbar: true,
    isOpen: collapseOpen
  }, __jsx("div", {
    className: "navbar-collapse-header d-md-none"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, logo ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "collapse-brand",
    xs: "6"
  }, logo.innerLink ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: logo.innerLink
  }, __jsx("img", {
    alt: logo.imgAlt,
    src: logo.imgSrc
  })) : __jsx("a", {
    href: logo.outterLink
  }, __jsx("img", {
    alt: logo.imgAlt,
    src: logo.imgSrc
  }))) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "collapse-close",
    xs: "6"
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: toggleCollapse
  }, __jsx("span", null), __jsx("span", null))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    className: "mt-4 mb-3 d-md-none"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
    className: "input-group-rounded input-group-merge"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    "aria-label": "Search",
    className: "form-control-rounded form-control-prepended",
    placeholder: "Search",
    type: "search"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "prepend"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupText"], null, __jsx("span", {
    className: "fa fa-search"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    navbar: true
  }, createLinks(routes)), __jsx("hr", {
    className: "my-3"
  }))));
}

_s(Sidebar, "pJBHww0OCMUv994asQhkgRkSv00=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Sidebar;
Sidebar.defaultProps = {
  routes: [{}]
};
Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].object),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link href="...">...</Link> tag
    innerLink: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].string,
    // the image src of the logo
    imgSrc: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].string.isRequired,
    // the alt for the img
    imgAlt: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].string.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiXSwibmFtZXMiOlsicHMiLCJTaWRlYmFyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29sbGFwc2VPcGVuIiwic2V0Q29sbGFwc2VPcGVuIiwiYWN0aXZlUm91dGUiLCJyb3V0ZU5hbWUiLCJyb3V0ZSIsImluZGV4T2YiLCJ0b2dnbGVDb2xsYXBzZSIsImNsb3NlQ29sbGFwc2UiLCJjcmVhdGVMaW5rcyIsInJvdXRlcyIsIm1hcCIsInByb3AiLCJrZXkiLCJsYXlvdXQiLCJwYXRoIiwiaWNvbiIsIm5hbWUiLCJsb2dvIiwibmF2YmFyQnJhbmQiLCJpbWdBbHQiLCJpbWdTcmMiLCJpbm5lckxpbmsiLCJvdXR0ZXJMaW5rIiwicmVxdWlyZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FHQTs7QUFDQTtBQThCQSxJQUFJQSxFQUFKOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGc0Isd0JBR2tCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhsQjtBQUFBO0FBQUEsTUFHZkMsWUFIZTtBQUFBLE1BR0RDLGVBSEMsd0JBSXRCOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQWU7QUFDakMsV0FBT1AsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE9BQWIsQ0FBcUJGLFNBQXJCLElBQWtDLENBQUMsQ0FBMUM7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SUUsUUFBSSxFQUFDO0FBSlAsSUFERixFQU9FLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDO0FBQTNCLEtBQ0UsTUFBQyx5REFBRCxRQUNFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLElBREYsQ0FERixDQVBGLENBREYsQ0E5QkYsRUE4Q0UsTUFBQyw4Q0FBRDtBQUFLLFVBQU07QUFBWCxLQUFhRSxXQUFXLENBQUNDLE1BQUQsQ0FBeEIsQ0E5Q0YsRUFnREU7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQWhERixDQXJGRixDQUxGLENBREY7QUFpSkQ7O0dBMUxRZixPO1VBRVFHLHFEOzs7S0FGUkgsTztBQTRMVEEsT0FBTyxDQUFDZ0MsWUFBUixHQUF1QjtBQUNyQmpCLFFBQU0sRUFBRSxDQUFDLEVBQUQ7QUFEYSxDQUF2QjtBQUlBZixPQUFPLENBQUNpQyxTQUFSLEdBQW9CO0FBQ2xCO0FBQ0FsQixRQUFNLEVBQUVtQixvREFBUyxDQUFDQyxPQUFWLENBQWtCRCxvREFBUyxDQUFDRSxNQUE1QixDQUZVO0FBR2xCYixNQUFJLEVBQUVXLG9EQUFTLENBQUNHLEtBQVYsQ0FBZ0I7QUFDcEI7QUFDQTtBQUNBVixhQUFTLEVBQUVPLG9EQUFTLENBQUNJLE1BSEQ7QUFJcEI7QUFDQTtBQUNBVixjQUFVLEVBQUVNLG9EQUFTLENBQUNJLE1BTkY7QUFPcEI7QUFDQVosVUFBTSxFQUFFUSxvREFBUyxDQUFDSSxNQUFWLENBQWlCQyxVQVJMO0FBU3BCO0FBQ0FkLFVBQU0sRUFBRVMsb0RBQVMsQ0FBQ0ksTUFBVixDQUFpQkM7QUFWTCxHQUFoQjtBQUhZLENBQXBCO0FBaUJldkMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmZjODY4NzQ0MjUxMjdiYzhiMDc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludC1kaXNhYmxlKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkQm9keSxcbiAgQ2FyZFRpdGxlLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW0sXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRm9ybUdyb3VwLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgSW5wdXRHcm91cEFkZG9uLFxuICBJbnB1dEdyb3VwVGV4dCxcbiAgSW5wdXRHcm91cCxcbiAgTWVkaWEsXG4gIE5hdmJhckJyYW5kLFxuICBOYXZiYXIsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG4gIE5hdixcbiAgUHJvZ3Jlc3MsXG4gIFRhYmxlLFxuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG52YXIgcHM7XG5cbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHtcbiAgLy8gdXNlZCBmb3IgY2hlY2tpbmcgY3VycmVudCByb3V0ZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NvbGxhcHNlT3Blbiwgc2V0Q29sbGFwc2VPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gdmVyaWZpZXMgaWYgcm91dGVOYW1lIGlzIHRoZSBvbmUgYWN0aXZlIChpbiBicm93c2VyIGlucHV0KVxuICBjb25zdCBhY3RpdmVSb3V0ZSA9IChyb3V0ZU5hbWUpID0+IHtcbiAgICByZXR1cm4gcm91dGVyLnJvdXRlLmluZGV4T2Yocm91dGVOYW1lKSA+IC0xO1xuICB9O1xuICAvLyB0b2dnbGVzIGNvbGxhcHNlIGJldHdlZW4gb3BlbmVkIGFuZCBjbG9zZWQgKHRydWUvZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlID0gKCkgPT4ge1xuICAgIHNldENvbGxhcHNlT3BlbighY29sbGFwc2VPcGVuKTtcbiAgfTtcbiAgLy8gY2xvc2VzIHRoZSBjb2xsYXBzZVxuICBjb25zdCBjbG9zZUNvbGxhcHNlID0gKCkgPT4ge1xuICAgIHNldENvbGxhcHNlT3BlbihmYWxzZSk7XG4gIH07XG4gIC8vIGNyZWF0ZXMgdGhlIGxpbmtzIHRoYXQgYXBwZWFyIGluIHRoZSBsZWZ0IG1lbnUgLyBTaWRlYmFyXG4gIGNvbnN0IGNyZWF0ZUxpbmtzID0gKHJvdXRlcykgPT4ge1xuICAgIHJldHVybiByb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17a2V5fSBhY3RpdmU9e2FjdGl2ZVJvdXRlKHByb3AubGF5b3V0ICsgcHJvcC5wYXRoKX0+XG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvcC5sYXlvdXQgKyBwcm9wLnBhdGh9PlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUm91dGUocHJvcC5sYXlvdXQgKyBwcm9wLnBhdGgpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUNvbGxhcHNlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3Byb3AuaWNvbn0gLz5cbiAgICAgICAgICAgICAge3Byb3AubmFtZX1cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHsgcm91dGVzLCBsb2dvIH0gPSBwcm9wcztcbiAgbGV0IG5hdmJhckJyYW5kID0gKFxuICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiI3BhYmxvXCIgY2xhc3NOYW1lPVwicHQtMFwiPlxuICAgICAgPGltZyBhbHQ9e2xvZ28uaW1nQWx0fSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQtaW1nXCIgc3JjPXtsb2dvLmltZ1NyY30gLz5cbiAgICA8L05hdmJhckJyYW5kPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXJcbiAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci12ZXJ0aWNhbCBmaXhlZC1sZWZ0IG5hdmJhci1saWdodCBiZy13aGl0ZVwiXG4gICAgICBleHBhbmQ9XCJtZFwiXG4gICAgICBpZD1cInNpZGVuYXYtbWFpblwiXG4gICAgPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgey8qIFRvZ2dsZXIgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sbGFwc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsvKiBCcmFuZCAqL31cbiAgICAgICAge2xvZ28gJiYgbG9nby5pbm5lckxpbmsgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj17bG9nby5pbm5lckxpbmt9PlxuICAgICAgICAgICAgPHNwYW4+e25hdmJhckJyYW5kfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7bG9nbyAmJiBsb2dvLm91dHRlckxpbmsgPyAoXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5pbm5lckxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAge25hdmJhckJyYW5kfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHsvKiBVc2VyICovfVxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBkLW1kLW5vbmVcIj5cbiAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2PlxuICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjbGFzc05hbWU9XCJuYXYtbGluay1pY29uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJlbGwtNTVcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyLWRlZmF1bHRfZHJvcGRvd25fMVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtYXJyb3dcIlxuICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFjdGlvbjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFub3RoZXIgYWN0aW9uPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XG4gICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdj5cbiAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXY+XG4gICAgICAgICAgICAgIDxNZWRpYSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcImFzc2V0cy9pbWcvdGhlbWUvdGVhbS0xLTgwMHg4MDAuanBnXCIpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWFycm93XCIgcmlnaHQ+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwibm90aS10aXRsZVwiIGhlYWRlciB0YWc9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1vdmVyZmxvdyBtLTBcIj5XZWxjb21lITwvaDY+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktc2luZ2xlLTAyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPk15IHByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNldHRpbmdzLWdlYXItNjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNhbGVuZGFyLWdyaWQtNThcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0aXZpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXN1cHBvcnQtMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U3VwcG9ydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiI3BhYmxvXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktdXNlci1ydW5cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuICAgICAgICA8L05hdj5cbiAgICAgICAgey8qIENvbGxhcHNlICovfVxuICAgICAgICA8Q29sbGFwc2UgbmF2YmFyIGlzT3Blbj17Y29sbGFwc2VPcGVufT5cbiAgICAgICAgICB7LyogQ29sbGFwc2UgaGVhZGVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlLWhlYWRlciBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIHtsb2dvID8gKFxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sbGFwc2UtYnJhbmRcIiB4cz1cIjZcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2dvLmlubmVyTGluayA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bG9nby5pbm5lckxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtsb2dvLmltZ0FsdH0gc3JjPXtsb2dvLmltZ1NyY30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bG9nby5vdXR0ZXJMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17bG9nby5pbWdBbHR9IHNyYz17bG9nby5pbWdTcmN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbGxhcHNlLWNsb3NlXCIgeHM9XCI2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogRm9ybSAqL31cbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJtdC00IG1iLTMgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1yb3VuZGVkIGlucHV0LWdyb3VwLW1lcmdlXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1yb3VuZGVkIGZvcm0tY29udHJvbC1wcmVwZW5kZWRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxuICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPE5hdiBuYXZiYXI+e2NyZWF0ZUxpbmtzKHJvdXRlcyl9PC9OYXY+XG4gICAgICAgICAgey8qIERpdmlkZXIgKi99XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTNcIiAvPlxuXG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn1cblxuU2lkZWJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvdXRlczogW3t9XSxcbn07XG5cblNpZGViYXIucHJvcFR5cGVzID0ge1xuICAvLyBsaW5rcyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgY29tcG9uZW50XG4gIHJvdXRlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGxvZ286IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLy8gaW5uZXJMaW5rIGlzIGZvciBsaW5rcyB0aGF0IHdpbGwgZGlyZWN0IHRoZSB1c2VyIHdpdGhpbiB0aGUgYXBwXG4gICAgLy8gaXQgd2lsbCBiZSByZW5kZXJlZCBhcyA8TGluayBocmVmPVwiLi4uXCI+Li4uPC9MaW5rPiB0YWdcbiAgICBpbm5lckxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gb3V0dGVyTGluayBpcyBmb3IgbGlua3MgdGhhdCB3aWxsIGRpcmVjdCB0aGUgdXNlciBvdXRzaWRlIHRoZSBhcHBcbiAgICAvLyBpdCB3aWxsIGJlIHJlbmRlcmVkIGFzIHNpbXBsZSA8YSBocmVmPVwiLi4uXCI+Li4uPC9hPiB0YWdcbiAgICBvdXR0ZXJMaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIHRoZSBpbWFnZSBzcmMgb2YgdGhlIGxvZ29cbiAgICBpbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAvLyB0aGUgYWx0IGZvciB0aGUgaW1nXG4gICAgaW1nQWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=
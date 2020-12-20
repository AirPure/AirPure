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
  }), __jsx("h6", {
    className: "navbar-heading text-muted"
  }, "Documentation"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "mb-md-3",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://www.creative-tim.com/learning-lab/nextjs/overview/argon-dashboard?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-spaceship"
  }), "Getting started")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://www.creative-tim.com/learning-lab/nextjs/colors/argon-dashboard?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-palette"
  }), "Foundation")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://www.creative-tim.com/learning-lab/nextjs/avatar/argon-dashboard?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-ui-04"
  }), "Components"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "mb-md-3",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
    className: "active-pro active"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-spaceship"
  }), "Upgrade to PRO"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiXSwibmFtZXMiOlsicHMiLCJTaWRlYmFyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29sbGFwc2VPcGVuIiwic2V0Q29sbGFwc2VPcGVuIiwiYWN0aXZlUm91dGUiLCJyb3V0ZU5hbWUiLCJyb3V0ZSIsImluZGV4T2YiLCJ0b2dnbGVDb2xsYXBzZSIsImNsb3NlQ29sbGFwc2UiLCJjcmVhdGVMaW5rcyIsInJvdXRlcyIsIm1hcCIsInByb3AiLCJrZXkiLCJsYXlvdXQiLCJwYXRoIiwiaWNvbiIsIm5hbWUiLCJsb2dvIiwibmF2YmFyQnJhbmQiLCJpbWdBbHQiLCJpbWdTcmMiLCJpbm5lckxpbmsiLCJvdXR0ZXJMaW5rIiwicmVxdWlyZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FHQTs7QUFDQTtBQThCQSxJQUFJQSxFQUFKOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGc0Isd0JBR2tCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhsQjtBQUFBO0FBQUEsTUFHZkMsWUFIZTtBQUFBLE1BR0RDLGVBSEMsd0JBSXRCOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQWU7QUFDakMsV0FBT1AsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE9BQWIsQ0FBcUJGLFNBQXJCLElBQWtDLENBQUMsQ0FBMUM7QUFDRCxHQUZELENBTHNCLENBUXRCOzs7QUFDQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JMLG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0QsR0FGRCxDQVRzQixDQVl0Qjs7O0FBQ0EsTUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCTixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBRkQsQ0Fic0IsQ0FnQnRCOzs7QUFDQSxNQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxNQUFELEVBQVk7QUFDOUIsV0FBT0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDL0IsYUFDRSxNQUFDLGtEQUFEO0FBQVMsV0FBRyxFQUFFQSxHQUFkO0FBQW1CLGNBQU0sRUFBRVYsV0FBVyxDQUFDUyxJQUFJLENBQUNFLE1BQUwsR0FBY0YsSUFBSSxDQUFDRyxJQUFwQjtBQUF0QyxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUVILElBQUksQ0FBQ0UsTUFBTCxHQUFjRixJQUFJLENBQUNHO0FBQS9CLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsY0FBTSxFQUFFWixXQUFXLENBQUNTLElBQUksQ0FBQ0UsTUFBTCxHQUFjRixJQUFJLENBQUNHLElBQXBCLENBRnJCO0FBR0UsZUFBTyxFQUFFUDtBQUhYLFNBS0U7QUFBRyxpQkFBUyxFQUFFSSxJQUFJLENBQUNJO0FBQW5CLFFBTEYsRUFNR0osSUFBSSxDQUFDSyxJQU5SLENBREYsQ0FERixDQURGO0FBY0QsS0FmTSxDQUFQO0FBZ0JELEdBakJEOztBQWpCc0IsTUFtQ2RQLE1BbkNjLEdBbUNHZCxLQW5DSCxDQW1DZGMsTUFuQ2M7QUFBQSxNQW1DTlEsSUFuQ00sR0FtQ0d0QixLQW5DSCxDQW1DTnNCLElBbkNNOztBQW9DdEIsTUFBSUMsV0FBVyxHQUNiLE1BQUMsc0RBQUQ7QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsYUFBUyxFQUFDO0FBQXJDLEtBQ0U7QUFBSyxPQUFHLEVBQUVELElBQUksQ0FBQ0UsTUFBZjtBQUF1QixhQUFTLEVBQUMsa0JBQWpDO0FBQW9ELE9BQUcsRUFBRUYsSUFBSSxDQUFDRztBQUE5RCxJQURGLENBREY7O0FBS0EsU0FDRSxNQUFDLGlEQUFEO0FBQ0UsYUFBUyxFQUFDLGtEQURaO0FBRUUsVUFBTSxFQUFDLElBRlQ7QUFHRSxNQUFFLEVBQUM7QUFITCxLQUtFLE1BQUMsb0RBQUQ7QUFBVyxTQUFLO0FBQWhCLEtBRUU7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRWQ7QUFIWCxLQUtFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLElBTEYsQ0FGRixFQVVHVyxJQUFJLElBQUlBLElBQUksQ0FBQ0ksU0FBYixHQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVKLElBQUksQ0FBQ0k7QUFBakIsS0FDRSxvQkFBT0gsV0FBUCxDQURGLENBREQsR0FJRyxJQWROLEVBZUdELElBQUksSUFBSUEsSUFBSSxDQUFDSyxVQUFiLEdBQ0M7QUFBRyxRQUFJLEVBQUVMLElBQUksQ0FBQ0ksU0FBZDtBQUF5QixVQUFNLEVBQUM7QUFBaEMsS0FDR0gsV0FESCxDQURELEdBSUcsSUFuQk4sRUFxQkUsTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQywrREFBRDtBQUFzQixPQUFHO0FBQXpCLEtBQ0UsTUFBQyx5REFBRDtBQUFnQixPQUFHLE1BQW5CO0FBQW9CLGFBQVMsRUFBQztBQUE5QixLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixDQURGLEVBSUUsTUFBQyx1REFBRDtBQUNFLHVCQUFnQiwyQkFEbEI7QUFFRSxhQUFTLEVBQUMscUJBRlo7QUFHRSxTQUFLO0FBSFAsS0FLRSxNQUFDLHVEQUFELGlCQUxGLEVBTUUsTUFBQyx1REFBRCx5QkFORixFQU9FLE1BQUMsdURBQUQ7QUFBYyxXQUFPO0FBQXJCLElBUEYsRUFRRSxNQUFDLHVEQUFELDhCQVJGLENBSkYsQ0FERixFQWdCRSxNQUFDLCtEQUFEO0FBQXNCLE9BQUc7QUFBekIsS0FDRSxNQUFDLHlEQUFEO0FBQWdCLE9BQUc7QUFBbkIsS0FDRSxNQUFDLGdEQUFEO0FBQU8sYUFBUyxFQUFDO0FBQWpCLEtBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRTtBQUNFLE9BQUcsRUFBQyxLQUROO0FBRUUsT0FBRyxFQUFFSyxtQkFBTyxDQUFDLGtGQUFEO0FBRmQsSUFERixDQURGLENBREYsQ0FERixFQVdFLE1BQUMsdURBQUQ7QUFBYyxhQUFTLEVBQUMscUJBQXhCO0FBQThDLFNBQUs7QUFBbkQsS0FDRSxNQUFDLHVEQUFEO0FBQWMsYUFBUyxFQUFDLFlBQXhCO0FBQXFDLFVBQU0sTUFBM0M7QUFBNEMsT0FBRyxFQUFDO0FBQWhELEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxnQkFERixDQURGLEVBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyx1REFBRCxRQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixFQUVFLGlDQUZGLENBREYsQ0FKRixFQVVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLE1BQUMsdURBQUQsUUFDRTtBQUFHLGFBQVMsRUFBQztBQUFiLElBREYsRUFFRSwrQkFGRixDQURGLENBVkYsRUFnQkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyx1REFBRCxRQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixFQUVFLCtCQUZGLENBREYsQ0FoQkYsRUFzQkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQ0UsTUFBQyx1REFBRCxRQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixFQUVFLDhCQUZGLENBREYsQ0F0QkYsRUE0QkUsTUFBQyx1REFBRDtBQUFjLFdBQU87QUFBckIsSUE1QkYsRUE2QkUsTUFBQyx1REFBRDtBQUFjLFFBQUksRUFBQyxRQUFuQjtBQUE0QixXQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLGNBQUYsRUFBUDtBQUFBO0FBQXJDLEtBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURGLEVBRUUsNkJBRkYsQ0E3QkYsQ0FYRixDQWhCRixDQXJCRixFQXFGRSxNQUFDLG1EQUFEO0FBQVUsVUFBTSxNQUFoQjtBQUFpQixVQUFNLEVBQUV6QjtBQUF6QixLQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLDhDQUFELFFBQ0dpQixJQUFJLEdBQ0gsTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxNQUFFLEVBQUM7QUFBbkMsS0FDR0EsSUFBSSxDQUFDSSxTQUFMLEdBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUosSUFBSSxDQUFDSTtBQUFqQixLQUNFO0FBQUssT0FBRyxFQUFFSixJQUFJLENBQUNFLE1BQWY7QUFBdUIsT0FBRyxFQUFFRixJQUFJLENBQUNHO0FBQWpDLElBREYsQ0FERCxHQUtDO0FBQUcsUUFBSSxFQUFFSCxJQUFJLENBQUNLO0FBQWQsS0FDRTtBQUFLLE9BQUcsRUFBRUwsSUFBSSxDQUFDRSxNQUFmO0FBQXVCLE9BQUcsRUFBRUYsSUFBSSxDQUFDRztBQUFqQyxJQURGLENBTkosQ0FERyxHQVlELElBYk4sRUFjRSxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQWdDLE1BQUUsRUFBQztBQUFuQyxLQUNFO0FBQ0UsYUFBUyxFQUFDLGdCQURaO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxXQUFPLEVBQUVkO0FBSFgsS0FLRSxtQkFMRixFQU1FLG1CQU5GLENBREYsQ0FkRixDQURGLENBRkYsRUE4QkUsTUFBQywrQ0FBRDtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUNFLE1BQUMscURBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsS0FDRSxNQUFDLGdEQUFEO0FBQ0Usa0JBQVcsUUFEYjtBQUVFLGFBQVMsRUFBQyw2Q0FGWjtBQUdFLGVBQVcsRUFBQyxRQUhkO0FBSUUsUUFBSSxFQUFDO0FBSlAsSUFERixFQU9FLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDO0FBQTNCLEtBQ0UsTUFBQyx5REFBRCxRQUNFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLElBREYsQ0FERixDQVBGLENBREYsQ0E5QkYsRUE4Q0UsTUFBQyw4Q0FBRDtBQUFLLFVBQU07QUFBWCxLQUFhRSxXQUFXLENBQUNDLE1BQUQsQ0FBeEIsQ0E5Q0YsRUFnREU7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQWhERixFQWtERTtBQUFJLGFBQVMsRUFBQztBQUFkLHFCQWxERixFQW9ERSxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsVUFBTTtBQUEvQixLQUNFLE1BQUMsa0RBQUQsUUFDRSxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDO0FBQWQsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLElBREYsb0JBREYsQ0FERixFQU9FLE1BQUMsa0RBQUQsUUFDRSxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDO0FBQWQsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLElBREYsZUFERixDQVBGLEVBYUUsTUFBQyxrREFBRCxRQUNFLE1BQUMsa0RBQUQ7QUFBUyxRQUFJLEVBQUM7QUFBZCxLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixlQURGLENBYkYsQ0FwREYsRUF3RUUsTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFVBQU07QUFBL0IsS0FDRSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ0UsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQztBQUFkLEtBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURGLG1CQURGLENBREYsQ0F4RUYsQ0FyRkYsQ0FMRixDQURGO0FBK0tEOztHQXhOUWYsTztVQUVRRyxxRDs7O0tBRlJILE87QUEwTlRBLE9BQU8sQ0FBQ2dDLFlBQVIsR0FBdUI7QUFDckJqQixRQUFNLEVBQUUsQ0FBQyxFQUFEO0FBRGEsQ0FBdkI7QUFJQWYsT0FBTyxDQUFDaUMsU0FBUixHQUFvQjtBQUNsQjtBQUNBbEIsUUFBTSxFQUFFbUIsb0RBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsb0RBQVMsQ0FBQ0UsTUFBNUIsQ0FGVTtBQUdsQmIsTUFBSSxFQUFFVyxvREFBUyxDQUFDRyxLQUFWLENBQWdCO0FBQ3BCO0FBQ0E7QUFDQVYsYUFBUyxFQUFFTyxvREFBUyxDQUFDSSxNQUhEO0FBSXBCO0FBQ0E7QUFDQVYsY0FBVSxFQUFFTSxvREFBUyxDQUFDSSxNQU5GO0FBT3BCO0FBQ0FaLFVBQU0sRUFBRVEsb0RBQVMsQ0FBQ0ksTUFBVixDQUFpQkMsVUFSTDtBQVNwQjtBQUNBZCxVQUFNLEVBQUVTLG9EQUFTLENBQUNJLE1BQVYsQ0FBaUJDO0FBVkwsR0FBaEI7QUFIWSxDQUFwQjtBQWlCZXZDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC44ZDAxYmY5ZGJmZjk4ZDMyNDNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyplc2xpbnQtZGlzYWJsZSovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZEJvZHksXG4gIENhcmRUaXRsZSxcbiAgQ29sbGFwc2UsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIElucHV0R3JvdXBBZGRvbixcbiAgSW5wdXRHcm91cFRleHQsXG4gIElucHV0R3JvdXAsXG4gIE1lZGlhLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2YmFyLFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBOYXYsXG4gIFByb2dyZXNzLFxuICBUYWJsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxudmFyIHBzO1xuXG5mdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7XG4gIC8vIHVzZWQgZm9yIGNoZWNraW5nIGN1cnJlbnQgcm91dGVcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjb2xsYXBzZU9wZW4sIHNldENvbGxhcHNlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIC8vIHZlcmlmaWVzIGlmIHJvdXRlTmFtZSBpcyB0aGUgb25lIGFjdGl2ZSAoaW4gYnJvd3NlciBpbnB1dClcbiAgY29uc3QgYWN0aXZlUm91dGUgPSAocm91dGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHJvdXRlci5yb3V0ZS5pbmRleE9mKHJvdXRlTmFtZSkgPiAtMTtcbiAgfTtcbiAgLy8gdG9nZ2xlcyBjb2xsYXBzZSBiZXR3ZWVuIG9wZW5lZCBhbmQgY2xvc2VkICh0cnVlL2ZhbHNlKVxuICBjb25zdCB0b2dnbGVDb2xsYXBzZSA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZU9wZW4oIWNvbGxhcHNlT3Blbik7XG4gIH07XG4gIC8vIGNsb3NlcyB0aGUgY29sbGFwc2VcbiAgY29uc3QgY2xvc2VDb2xsYXBzZSA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZU9wZW4oZmFsc2UpO1xuICB9O1xuICAvLyBjcmVhdGVzIHRoZSBsaW5rcyB0aGF0IGFwcGVhciBpbiB0aGUgbGVmdCBtZW51IC8gU2lkZWJhclxuICBjb25zdCBjcmVhdGVMaW5rcyA9IChyb3V0ZXMpID0+IHtcbiAgICByZXR1cm4gcm91dGVzLm1hcCgocHJvcCwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e2tleX0gYWN0aXZlPXthY3RpdmVSb3V0ZShwcm9wLmxheW91dCArIHByb3AucGF0aCl9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3AubGF5b3V0ICsgcHJvcC5wYXRofT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZVJvdXRlKHByb3AubGF5b3V0ICsgcHJvcC5wYXRoKX1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VDb2xsYXBzZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtwcm9wLmljb259IC8+XG4gICAgICAgICAgICAgIHtwcm9wLm5hbWV9XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCB7IHJvdXRlcywgbG9nbyB9ID0gcHJvcHM7XG4gIGxldCBuYXZiYXJCcmFuZCA9IChcbiAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIiNwYWJsb1wiIGNsYXNzTmFtZT1cInB0LTBcIj5cbiAgICAgIDxpbWcgYWx0PXtsb2dvLmltZ0FsdH0gY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kLWltZ1wiIHNyYz17bG9nby5pbWdTcmN9IC8+XG4gICAgPC9OYXZiYXJCcmFuZD5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyXG4gICAgICBjbGFzc05hbWU9XCJuYXZiYXItdmVydGljYWwgZml4ZWQtbGVmdCBuYXZiYXItbGlnaHQgYmctd2hpdGVcIlxuICAgICAgZXhwYW5kPVwibWRcIlxuICAgICAgaWQ9XCJzaWRlbmF2LW1haW5cIlxuICAgID5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIHsvKiBUb2dnbGVyICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7LyogQnJhbmQgKi99XG4gICAgICAgIHtsb2dvICYmIGxvZ28uaW5uZXJMaW5rID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2xvZ28uaW5uZXJMaW5rfT5cbiAgICAgICAgICAgIDxzcGFuPntuYXZiYXJCcmFuZH08L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2xvZ28gJiYgbG9nby5vdXR0ZXJMaW5rID8gKFxuICAgICAgICAgIDxhIGhyZWY9e2xvZ28uaW5uZXJMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIHtuYXZiYXJCcmFuZH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7LyogVXNlciAqL31cbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIgZC1tZC1ub25lXCI+XG4gICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdj5cbiAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXYgY2xhc3NOYW1lPVwibmF2LWxpbmstaWNvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1iZWxsLTU1XCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhci1kZWZhdWx0X2Ryb3Bkb3duXzFcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWFycm93XCJcbiAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5BY3Rpb248L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93biBuYXY+XG4gICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2PlxuICAgICAgICAgICAgICA8TWVkaWEgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbSByb3VuZGVkLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCJhc3NldHMvaW1nL3RoZW1lL3RlYW0tMS04MDB4ODAwLmpwZ1wiKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1hcnJvd1wiIHJpZ2h0PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNsYXNzTmFtZT1cIm5vdGktdGl0bGVcIiBoZWFkZXIgdGFnPVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtb3ZlcmZsb3cgbS0wXCI+V2VsY29tZSE8L2g2PlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNpbmdsZS0wMlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5NeSBwcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zZXR0aW5ncy1nZWFyLTY1XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNldHRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1jYWxlbmRhci1ncmlkLTU4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFjdGl2aXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zdXBwb3J0LTE2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaHJlZj1cIiNwYWJsb1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXVzZXItcnVuXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cbiAgICAgICAgPC9OYXY+XG4gICAgICAgIHsvKiBDb2xsYXBzZSAqL31cbiAgICAgICAgPENvbGxhcHNlIG5hdmJhciBpc09wZW49e2NvbGxhcHNlT3Blbn0+XG4gICAgICAgICAgey8qIENvbGxhcHNlIGhlYWRlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZS1oZWFkZXIgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICB7bG9nbyA/IChcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbGxhcHNlLWJyYW5kXCIgeHM9XCI2XCI+XG4gICAgICAgICAgICAgICAgICB7bG9nby5pbm5lckxpbmsgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xvZ28uaW5uZXJMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17bG9nby5pbWdBbHR9IHNyYz17bG9nby5pbWdTcmN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xvZ28ub3V0dGVyTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2xvZ28uaW1nQWx0fSBzcmM9e2xvZ28uaW1nU3JjfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2xsYXBzZS1jbG9zZVwiIHhzPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sbGFwc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEZvcm0gKi99XG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwibXQtNCBtYi0zIGQtbWQtbm9uZVwiPlxuICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcm91bmRlZCBpbnB1dC1ncm91cC1tZXJnZVwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcm91bmRlZCBmb3JtLWNvbnRyb2wtcHJlcGVuZGVkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxOYXYgbmF2YmFyPntjcmVhdGVMaW5rcyhyb3V0ZXMpfTwvTmF2PlxuICAgICAgICAgIHsvKiBEaXZpZGVyICovfVxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0zXCIgLz5cbiAgICAgICAgICB7LyogSGVhZGluZyAqL31cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRpbmcgdGV4dC1tdXRlZFwiPkRvY3VtZW50YXRpb248L2g2PlxuICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWItbWQtM1wiIG5hdmJhcj5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvbmV4dGpzL292ZXJ2aWV3L2FyZ29uLWRhc2hib2FyZD9yZWY9bmpzYWQtYWRtaW4tc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNwYWNlc2hpcFwiIC8+XG4gICAgICAgICAgICAgICAgR2V0dGluZyBzdGFydGVkXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvbmV4dGpzL2NvbG9ycy9hcmdvbi1kYXNoYm9hcmQ/cmVmPW5qc2FkLWFkbWluLXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1wYWxldHRlXCIgLz5cbiAgICAgICAgICAgICAgICBGb3VuZGF0aW9uXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvbmV4dGpzL2F2YXRhci9hcmdvbi1kYXNoYm9hcmQ/cmVmPW5qc2FkLWFkbWluLXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS11aS0wNFwiIC8+XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50c1xuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtYi1tZC0zXCIgbmF2YmFyPlxuICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiYWN0aXZlLXBybyBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9hcmdvbi1kYXNoYm9hcmQtcHJvLXJlYWN0P3JlZj1uanNhZC1hZG1pbi1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktc3BhY2VzaGlwXCIgLz5cbiAgICAgICAgICAgICAgICBVcGdyYWRlIHRvIFBST1xuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn1cblxuU2lkZWJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvdXRlczogW3t9XSxcbn07XG5cblNpZGViYXIucHJvcFR5cGVzID0ge1xuICAvLyBsaW5rcyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgY29tcG9uZW50XG4gIHJvdXRlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGxvZ286IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLy8gaW5uZXJMaW5rIGlzIGZvciBsaW5rcyB0aGF0IHdpbGwgZGlyZWN0IHRoZSB1c2VyIHdpdGhpbiB0aGUgYXBwXG4gICAgLy8gaXQgd2lsbCBiZSByZW5kZXJlZCBhcyA8TGluayBocmVmPVwiLi4uXCI+Li4uPC9MaW5rPiB0YWdcbiAgICBpbm5lckxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gb3V0dGVyTGluayBpcyBmb3IgbGlua3MgdGhhdCB3aWxsIGRpcmVjdCB0aGUgdXNlciBvdXRzaWRlIHRoZSBhcHBcbiAgICAvLyBpdCB3aWxsIGJlIHJlbmRlcmVkIGFzIHNpbXBsZSA8YSBocmVmPVwiLi4uXCI+Li4uPC9hPiB0YWdcbiAgICBvdXR0ZXJMaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIHRoZSBpbWFnZSBzcmMgb2YgdGhlIGxvZ29cbiAgICBpbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAvLyB0aGUgYWx0IGZvciB0aGUgaW1nXG4gICAgaW1nQWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=
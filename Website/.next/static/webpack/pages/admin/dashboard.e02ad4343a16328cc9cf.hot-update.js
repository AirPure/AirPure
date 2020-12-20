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
      }), "teste")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiXSwibmFtZXMiOlsicHMiLCJTaWRlYmFyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29sbGFwc2VPcGVuIiwic2V0Q29sbGFwc2VPcGVuIiwiYWN0aXZlUm91dGUiLCJyb3V0ZU5hbWUiLCJyb3V0ZSIsImluZGV4T2YiLCJ0b2dnbGVDb2xsYXBzZSIsImNsb3NlQ29sbGFwc2UiLCJjcmVhdGVMaW5rcyIsInJvdXRlcyIsIm1hcCIsInByb3AiLCJrZXkiLCJsYXlvdXQiLCJwYXRoIiwiaWNvbiIsImxvZ28iLCJuYXZiYXJCcmFuZCIsImltZ0FsdCIsImltZ1NyYyIsImlubmVyTGluayIsIm91dHRlckxpbmsiLCJyZXF1aXJlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztDQUdBOztBQUNBO0FBOEJBLElBQUlBLEVBQUo7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZzQix3QkFHa0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSGxCO0FBQUE7QUFBQSxNQUdmQyxZQUhlO0FBQUEsTUFHREMsZUFIQyx3QkFJdEI7OztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBZTtBQUNqQyxXQUFPUCxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBYixDQUFxQkYsU0FBckIsSUFBa0MsQ0FBQyxDQUExQztBQUNELEdB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QWpCLFFBQU0sRUFBRWtCLG9EQUFTLENBQUNDLE9BQVYsQ0FBa0JELG9EQUFTLENBQUNFLE1BQTVCLENBRlU7QUFHbEJiLE1BQUksRUFBRVcsb0RBQVMsQ0FBQ0csS0FBVixDQUFnQjtBQUNwQjtBQUNBO0FBQ0FWLGFBQVMsRUFBRU8sb0RBQVMsQ0FBQ0ksTUFIRDtBQUlwQjtBQUNBO0FBQ0FWLGNBQVUsRUFBRU0sb0RBQVMsQ0FBQ0ksTUFORjtBQU9wQjtBQUNBWixVQUFNLEVBQUVRLG9EQUFTLENBQUNJLE1BQVYsQ0FBaUJDLFVBUkw7QUFTcEI7QUFDQWQsVUFBTSxFQUFFUyxvREFBUyxDQUFDSSxNQUFWLENBQWlCQztBQVZMLEdBQWhCO0FBSFksQ0FBcEI7QUFpQmV0QyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuZTAyYWQ0MzQzYTE2MzI4Y2M5Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50LWRpc2FibGUqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcblxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRCb2R5LFxuICBDYXJkVGl0bGUsXG4gIENvbGxhcHNlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbSxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBGb3JtR3JvdXAsXG4gIEZvcm0sXG4gIElucHV0LFxuICBJbnB1dEdyb3VwQWRkb24sXG4gIElucHV0R3JvdXBUZXh0LFxuICBJbnB1dEdyb3VwLFxuICBNZWRpYSxcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdmJhcixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgTmF2LFxuICBQcm9ncmVzcyxcbiAgVGFibGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbnZhciBwcztcblxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykge1xuICAvLyB1c2VkIGZvciBjaGVja2luZyBjdXJyZW50IHJvdXRlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY29sbGFwc2VPcGVuLCBzZXRDb2xsYXBzZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAvLyB2ZXJpZmllcyBpZiByb3V0ZU5hbWUgaXMgdGhlIG9uZSBhY3RpdmUgKGluIGJyb3dzZXIgaW5wdXQpXG4gIGNvbnN0IGFjdGl2ZVJvdXRlID0gKHJvdXRlTmFtZSkgPT4ge1xuICAgIHJldHVybiByb3V0ZXIucm91dGUuaW5kZXhPZihyb3V0ZU5hbWUpID4gLTE7XG4gIH07XG4gIC8vIHRvZ2dsZXMgY29sbGFwc2UgYmV0d2VlbiBvcGVuZWQgYW5kIGNsb3NlZCAodHJ1ZS9mYWxzZSlcbiAgY29uc3QgdG9nZ2xlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGFwc2VPcGVuKCFjb2xsYXBzZU9wZW4pO1xuICB9O1xuICAvLyBjbG9zZXMgdGhlIGNvbGxhcHNlXG4gIGNvbnN0IGNsb3NlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGFwc2VPcGVuKGZhbHNlKTtcbiAgfTtcbiAgLy8gY3JlYXRlcyB0aGUgbGlua3MgdGhhdCBhcHBlYXIgaW4gdGhlIGxlZnQgbWVudSAvIFNpZGViYXJcbiAgY29uc3QgY3JlYXRlTGlua3MgPSAocm91dGVzKSA9PiB7XG4gICAgcmV0dXJuIHJvdXRlcy5tYXAoKHByb3AsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkl0ZW0ga2V5PXtrZXl9IGFjdGl2ZT17YWN0aXZlUm91dGUocHJvcC5sYXlvdXQgKyBwcm9wLnBhdGgpfT5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9wLmxheW91dCArIHByb3AucGF0aH0+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVSb3V0ZShwcm9wLmxheW91dCArIHByb3AucGF0aCl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQ29sbGFwc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17cHJvcC5pY29ufSAvPlxuICAgICAgICAgICAgICB0ZXN0ZVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgeyByb3V0ZXMsIGxvZ28gfSA9IHByb3BzO1xuICBsZXQgbmF2YmFyQnJhbmQgPSAoXG4gICAgPE5hdmJhckJyYW5kIGhyZWY9XCIjcGFibG9cIiBjbGFzc05hbWU9XCJwdC0wXCI+XG4gICAgICA8aW1nIGFsdD17bG9nby5pbWdBbHR9IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZC1pbWdcIiBzcmM9e2xvZ28uaW1nU3JjfSAvPlxuICAgIDwvTmF2YmFyQnJhbmQ+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhclxuICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXZlcnRpY2FsIGZpeGVkLWxlZnQgbmF2YmFyLWxpZ2h0IGJnLXdoaXRlXCJcbiAgICAgIGV4cGFuZD1cIm1kXCJcbiAgICAgIGlkPVwic2lkZW5hdi1tYWluXCJcbiAgICA+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICB7LyogVG9nZ2xlciAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIEJyYW5kICovfVxuICAgICAgICB7bG9nbyAmJiBsb2dvLmlubmVyTGluayA/IChcbiAgICAgICAgICA8TGluayBocmVmPXtsb2dvLmlubmVyTGlua30+XG4gICAgICAgICAgICA8c3Bhbj57bmF2YmFyQnJhbmR9PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtsb2dvICYmIGxvZ28ub3V0dGVyTGluayA/IChcbiAgICAgICAgICA8YSBocmVmPXtsb2dvLmlubmVyTGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICB7bmF2YmFyQnJhbmR9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgey8qIFVzZXIgKi99XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIGQtbWQtbm9uZVwiPlxuICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93biBuYXY+XG4gICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2IGNsYXNzTmFtZT1cIm5hdi1saW5rLWljb25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYmVsbC01NVwiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXItZGVmYXVsdF9kcm9wZG93bl8xXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1hcnJvd1wiXG4gICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QWN0aW9uPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+U29tZXRoaW5nIGVsc2UgaGVyZTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cbiAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2PlxuICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdj5cbiAgICAgICAgICAgICAgPE1lZGlhIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiYXNzZXRzL2ltZy90aGVtZS90ZWFtLTEtODAweDgwMC5qcGdcIil9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtYXJyb3dcIiByaWdodD5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJub3RpLXRpdGxlXCIgaGVhZGVyIHRhZz1cImRpdlwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LW92ZXJmbG93IG0tMFwiPldlbGNvbWUhPC9oNj5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zaW5nbGUtMDJcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+TXkgcHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktc2V0dGluZ3MtZ2Vhci02NVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2FsZW5kYXItZ3JpZC01OFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BY3Rpdml0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktc3VwcG9ydC0xNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIjcGFibG9cIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS11c2VyLXJ1blwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XG4gICAgICAgIDwvTmF2PlxuICAgICAgICB7LyogQ29sbGFwc2UgKi99XG4gICAgICAgIDxDb2xsYXBzZSBuYXZiYXIgaXNPcGVuPXtjb2xsYXBzZU9wZW59PlxuICAgICAgICAgIHsvKiBDb2xsYXBzZSBoZWFkZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UtaGVhZGVyIGQtbWQtbm9uZVwiPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAge2xvZ28gPyAoXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2xsYXBzZS1icmFuZFwiIHhzPVwiNlwiPlxuICAgICAgICAgICAgICAgICAge2xvZ28uaW5uZXJMaW5rID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsb2dvLmlubmVyTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2xvZ28uaW1nQWx0fSBzcmM9e2xvZ28uaW1nU3JjfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsb2dvLm91dHRlckxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtsb2dvLmltZ0FsdH0gc3JjPXtsb2dvLmltZ1NyY30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sbGFwc2UtY2xvc2VcIiB4cz1cIjZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBGb3JtICovfVxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm10LTQgbWItMyBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXJvdW5kZWQgaW5wdXQtZ3JvdXAtbWVyZ2VcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXJvdW5kZWQgZm9ybS1jb250cm9sLXByZXBlbmRlZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XG4gICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8TmF2IG5hdmJhcj57Y3JlYXRlTGlua3Mocm91dGVzKX08L05hdj5cbiAgICAgICAgICB7LyogRGl2aWRlciAqL31cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktM1wiIC8+XG4gICAgICAgICAgey8qIEhlYWRpbmcgKi99XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkaW5nIHRleHQtbXV0ZWRcIj5Eb2N1bWVudGF0aW9uPC9oNj5cbiAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1iLW1kLTNcIiBuYXZiYXI+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL25leHRqcy9vdmVydmlldy9hcmdvbi1kYXNoYm9hcmQ/cmVmPW5qc2FkLWFkbWluLXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zcGFjZXNoaXBcIiAvPlxuICAgICAgICAgICAgICAgIEdldHRpbmcgc3RhcnRlZFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL25leHRqcy9jb2xvcnMvYXJnb24tZGFzaGJvYXJkP3JlZj1uanNhZC1hZG1pbi1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktcGFsZXR0ZVwiIC8+XG4gICAgICAgICAgICAgICAgRm91bmRhdGlvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL25leHRqcy9hdmF0YXIvYXJnb24tZGFzaGJvYXJkP3JlZj1uanNhZC1hZG1pbi1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktdWktMDRcIiAvPlxuICAgICAgICAgICAgICAgIENvbXBvbmVudHNcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWItbWQtM1wiIG5hdmJhcj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImFjdGl2ZS1wcm8gYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvYXJnb24tZGFzaGJvYXJkLXByby1yZWFjdD9yZWY9bmpzYWQtYWRtaW4tc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNwYWNlc2hpcFwiIC8+XG4gICAgICAgICAgICAgICAgVXBncmFkZSB0byBQUk9cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG5cblNpZGViYXIuZGVmYXVsdFByb3BzID0ge1xuICByb3V0ZXM6IFt7fV0sXG59O1xuXG5TaWRlYmFyLnByb3BUeXBlcyA9IHtcbiAgLy8gbGlua3MgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGNvbXBvbmVudFxuICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBsb2dvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8vIGlubmVyTGluayBpcyBmb3IgbGlua3MgdGhhdCB3aWxsIGRpcmVjdCB0aGUgdXNlciB3aXRoaW4gdGhlIGFwcFxuICAgIC8vIGl0IHdpbGwgYmUgcmVuZGVyZWQgYXMgPExpbmsgaHJlZj1cIi4uLlwiPi4uLjwvTGluaz4gdGFnXG4gICAgaW5uZXJMaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIG91dHRlckxpbmsgaXMgZm9yIGxpbmtzIHRoYXQgd2lsbCBkaXJlY3QgdGhlIHVzZXIgb3V0c2lkZSB0aGUgYXBwXG4gICAgLy8gaXQgd2lsbCBiZSByZW5kZXJlZCBhcyBzaW1wbGUgPGEgaHJlZj1cIi4uLlwiPi4uLjwvYT4gdGFnXG4gICAgb3V0dGVyTGluazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyB0aGUgaW1hZ2Ugc3JjIG9mIHRoZSBsb2dvXG4gICAgaW1nU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLy8gdGhlIGFsdCBmb3IgdGhlIGltZ1xuICAgIGltZ0FsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9
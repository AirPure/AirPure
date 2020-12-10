module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/icons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/img/brand/nextjs_argon_black.png":
/*!*************************************************!*\
  !*** ./assets/img/brand/nextjs_argon_black.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjs_argon_black-00653defbe44f7b5ed0e3926ec44f265.png";

/***/ }),

/***/ "./assets/img/theme/team-1-800x800.jpg":
/*!*********************************************!*\
  !*** ./assets/img/theme/team-1-800x800.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-1-800x800-53033970a416368da35794389680266f.jpg";

/***/ }),

/***/ "./assets/img/theme/team-4-800x800.jpg":
/*!*********************************************!*\
  !*** ./assets/img/theme/team-4-800x800.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-4-800x800-230071328b705f8686cabd26a85ed6a5.jpg";

/***/ }),

/***/ "./components/Footers/AdminFooter.js":
/*!*******************************************!*\
  !*** ./components/Footers/AdminFooter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\components\\Footers\\AdminFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/
 // reactstrap components



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "align-items-center justify-content-xl-between"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xl: "6"
    }, __jsx("div", {
      className: "copyright text-center text-xl-left text-muted"
    }, "\xA9 ", new Date().getFullYear(), " ", __jsx("a", {
      className: "font-weight-bold ml-1",
      href: "https://www.creative-tim.com?ref=njsad-admin-footer",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "Creative Tim"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xl: "6"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "nav-footer justify-content-center justify-content-xl-end"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      href: "https://www.creative-tim.com?ref=njsad-admin-footer",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "Creative Tim")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      href: "https://www.creative-tim.com/presentation?ref=njsad-admin-footer",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "About Us")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      href: "http://blog.creative-tim.com?ref=njsad-admin-footer",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "Blog")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      href: "https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=njsad-admin-footer",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "MIT License"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Headers/Header.js":
/*!**************************************!*\
  !*** ./components/Headers/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\components\\Headers\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // reactstrap components



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "header bg-gradient-dark pb-8 pt-5 pt-md-8"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      fluid: true
    }, __jsx("div", {
      className: "header-body"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "6",
      xl: "3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "card-stats mb-4 mb-xl-0"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("div", {
      className: "col"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h5",
      className: "text-uppercase text-muted mb-0"
    }, "Traffic"), __jsx("span", {
      className: "h2 font-weight-bold mb-0"
    }, "350,897")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "col-auto"
    }, __jsx("div", {
      className: "icon icon-shape bg-danger text-white rounded-circle shadow"
    }, __jsx("i", {
      className: "fas fa-chart-bar"
    })))), __jsx("p", {
      className: "mt-3 mb-0 text-muted text-sm"
    }, __jsx("span", {
      className: "text-success mr-2"
    }, __jsx("i", {
      className: "fa fa-arrow-up"
    }), " 3.48%"), " ", __jsx("span", {
      className: "text-nowrap"
    }, "Since last month"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "6",
      xl: "3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "card-stats mb-4 mb-xl-0"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("div", {
      className: "col"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h5",
      className: "text-uppercase text-muted mb-0"
    }, "New users"), __jsx("span", {
      className: "h2 font-weight-bold mb-0"
    }, "2,356")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "col-auto"
    }, __jsx("div", {
      className: "icon icon-shape bg-warning text-white rounded-circle shadow"
    }, __jsx("i", {
      className: "fas fa-chart-pie"
    })))), __jsx("p", {
      className: "mt-3 mb-0 text-muted text-sm"
    }, __jsx("span", {
      className: "text-danger mr-2"
    }, __jsx("i", {
      className: "fas fa-arrow-down"
    }), " 3.48%"), " ", __jsx("span", {
      className: "text-nowrap"
    }, "Since last week"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "6",
      xl: "3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "card-stats mb-4 mb-xl-0"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("div", {
      className: "col"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h5",
      className: "text-uppercase text-muted mb-0"
    }, "Sales"), __jsx("span", {
      className: "h2 font-weight-bold mb-0"
    }, "924")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "col-auto"
    }, __jsx("div", {
      className: "icon icon-shape bg-yellow text-white rounded-circle shadow"
    }, __jsx("i", {
      className: "fas fa-users"
    })))), __jsx("p", {
      className: "mt-3 mb-0 text-muted text-sm"
    }, __jsx("span", {
      className: "text-warning mr-2"
    }, __jsx("i", {
      className: "fas fa-arrow-down"
    }), " 1.10%"), " ", __jsx("span", {
      className: "text-nowrap"
    }, "Since yesterday"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "6",
      xl: "3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "card-stats mb-4 mb-xl-0"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("div", {
      className: "col"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h5",
      className: "text-uppercase text-muted mb-0"
    }, "Performance"), __jsx("span", {
      className: "h2 font-weight-bold mb-0"
    }, "49,65%")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "col-auto"
    }, __jsx("div", {
      className: "icon icon-shape bg-info text-white rounded-circle shadow"
    }, __jsx("i", {
      className: "fas fa-percent"
    })))), __jsx("p", {
      className: "mt-3 mb-0 text-muted text-sm"
    }, __jsx("span", {
      className: "text-success mr-2"
    }, __jsx("i", {
      className: "fas fa-arrow-up"
    }), " 12%"), " ", __jsx("span", {
      className: "text-nowrap"
    }, "Since last month"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navbars/AdminNavbar.js":
/*!*******************************************!*\
  !*** ./components/Navbars/AdminNavbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\components\\Navbars\\AdminNavbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // reactstrap components



class AdminNavbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      className: "navbar-top navbar-dark",
      expand: "md",
      id: "navbar-main"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: true
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin/dashboard"
    }, __jsx("a", {
      className: "h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
    }, this.props.brandText)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
      className: "mb-0"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      className: "input-group-alternative"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
      addonType: "prepend"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupText"], null, __jsx("i", {
      className: "fas fa-search"
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      placeholder: "Search",
      type: "text"
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      className: "align-items-center d-none d-md-flex",
      navbar: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
      nav: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
      className: "pr-0",
      nav: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
      className: "align-items-center"
    }, __jsx("span", {
      className: "avatar avatar-sm rounded-circle"
    }, __jsx("img", {
      alt: "...",
      src: __webpack_require__(/*! assets/img/theme/team-4-800x800.jpg */ "./assets/img/theme/team-4-800x800.jpg")
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
      className: "ml-2 d-none d-lg-block"
    }, __jsx("span", {
      className: "mb-0 text-sm font-weight-bold"
    }, "Jessica Jones")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
      className: "dropdown-menu-arrow",
      right: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
      className: "noti-title",
      header: true,
      tag: "div"
    }, __jsx("h6", {
      className: "text-overflow m-0"
    }, "Welcome!")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin/profile"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, __jsx("i", {
      className: "ni ni-single-02"
    }), __jsx("span", null, "My profile"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin/profile"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, __jsx("i", {
      className: "ni ni-settings-gear-65"
    }), __jsx("span", null, "Settings"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin/profile"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, __jsx("i", {
      className: "ni ni-calendar-grid-58"
    }), __jsx("span", null, "Activity"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/admin/profile"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, __jsx("i", {
      className: "ni ni-support-16"
    }), __jsx("span", null, "Support"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
      divider: true
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
      href: "#pablo",
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "ni ni-user-run"
    }), __jsx("span", null, "Logout"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AdminNavbar);

/***/ }),

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\components\\Sidebar\\Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/


 // nodejs library to set properties for components

 // reactstrap components


var ps;

function Sidebar(props) {
  // used for checking current route
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const [collapseOpen, setCollapseOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // verifies if routeName is the one active (in browser input)

  const activeRoute = routeName => {
    return router.route.indexOf(routeName) > -1;
  }; // toggles collapse between opened and closed (true/false)


  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  }; // closes the collapse


  const closeCollapse = () => {
    setCollapseOpen(false);
  }; // creates the links that appear in the left menu / Sidebar


  const createLinks = routes => {
    return routes.map((prop, key) => {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
        key: key,
        active: activeRoute(prop.layout + prop.path)
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: prop.layout + prop.path
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        href: "#pablo",
        active: activeRoute(prop.layout + prop.path),
        onClick: closeCollapse
      }, __jsx("i", {
        className: prop.icon
      }), prop.name)));
    });
  };

  const {
    routes,
    logo
  } = props;

  let navbarBrand = __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"], {
    href: "#pablo",
    className: "pt-0"
  }, __jsx("img", {
    alt: logo.imgAlt,
    className: "navbar-brand-img",
    src: logo.imgSrc
  }));

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "navbar-vertical fixed-left navbar-light bg-white",
    expand: "md",
    id: "sidenav-main"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: toggleCollapse
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  })), logo && logo.innerLink ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: logo.innerLink
  }, __jsx("span", null, navbarBrand)) : null, logo && logo.outterLink ? __jsx("a", {
    href: logo.innerLink,
    target: "_blank"
  }, navbarBrand) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "align-items-center d-md-none"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["UncontrolledDropdown"], {
    nav: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownToggle"], {
    nav: true,
    className: "nav-link-icon"
  }, __jsx("i", {
    className: "ni ni-bell-55"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"], {
    "aria-labelledby": "navbar-default_dropdown_1",
    className: "dropdown-menu-arrow",
    right: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, "Action"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, "Another action"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, "Something else here"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["UncontrolledDropdown"], {
    nav: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownToggle"], {
    nav: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Media"], {
    className: "align-items-center"
  }, __jsx("span", {
    className: "avatar avatar-sm rounded-circle"
  }, __jsx("img", {
    alt: "...",
    src: __webpack_require__(/*! assets/img/theme/team-1-800x800.jpg */ "./assets/img/theme/team-1-800x800.jpg")
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"], {
    className: "dropdown-menu-arrow",
    right: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    className: "noti-title",
    header: true,
    tag: "div"
  }, __jsx("h6", {
    className: "text-overflow m-0"
  }, "Welcome!")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-single-02"
  }), __jsx("span", null, "My profile"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-settings-gear-65"
  }), __jsx("span", null, "Settings"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-calendar-grid-58"
  }), __jsx("span", null, "Activity"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin/profile"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, __jsx("i", {
    className: "ni ni-support-16"
  }), __jsx("span", null, "Support"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    divider: true
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    href: "#pablo",
    onClick: e => e.preventDefault()
  }, __jsx("i", {
    className: "ni ni-user-run"
  }), __jsx("span", null, "Logout"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    navbar: true,
    isOpen: collapseOpen
  }, __jsx("div", {
    className: "navbar-collapse-header d-md-none"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, logo ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "collapse-brand",
    xs: "6"
  }, logo.innerLink ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: logo.innerLink
  }, __jsx("img", {
    alt: logo.imgAlt,
    src: logo.imgSrc
  })) : __jsx("a", {
    href: logo.outterLink
  }, __jsx("img", {
    alt: logo.imgAlt,
    src: logo.imgSrc
  }))) : null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "collapse-close",
    xs: "6"
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: toggleCollapse
  }, __jsx("span", null), __jsx("span", null))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    className: "mt-4 mb-3 d-md-none"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "input-group-rounded input-group-merge"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    "aria-label": "Search",
    className: "form-control-rounded form-control-prepended",
    placeholder: "Search",
    type: "search"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "prepend"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], null, __jsx("span", {
    className: "fa fa-search"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    navbar: true
  }, createLinks(routes)), __jsx("hr", {
    className: "my-3"
  }), __jsx("h6", {
    className: "navbar-heading text-muted"
  }, "Documentation"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mb-md-3",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "https://www.creative-tim.com/learning-lab/nextjs/overview/argon-dashboard?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-spaceship"
  }), "Getting started")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "https://www.creative-tim.com/learning-lab/nextjs/colors/argon-dashboard?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-palette"
  }), "Foundation")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "https://www.creative-tim.com/learning-lab/nextjs/avatar/argon-dashboard?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-ui-04"
  }), "Components"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mb-md-3",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "active-pro active"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=njsad-admin-sidebar"
  }, __jsx("i", {
    className: "ni ni-spaceship"
  }), "Upgrade to PRO"))))));
}

Sidebar.defaultProps = {
  routes: [{}]
};
Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].object),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link href="...">...</Link> tag
    innerLink: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].string,
    // the image src of the logo
    imgSrc: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].string.isRequired,
    // the alt for the img
    imgAlt: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].string.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./layouts/Admin.js":
/*!**************************!*\
  !*** ./layouts/Admin.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navbars/AdminNavbar.js */ "./components/Navbars/AdminNavbar.js");
/* harmony import */ var components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footers/AdminFooter.js */ "./components/Footers/AdminFooter.js");
/* harmony import */ var components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Sidebar/Sidebar.js */ "./components/Sidebar/Sidebar.js");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! routes.js */ "./routes.js");
var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\layouts\\Admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // reactstrap components

 // core components






function Admin(props) {
  // used for checking current route
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let mainContentRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);

  const getBrandText = () => {
    for (let i = 0; i < routes_js__WEBPACK_IMPORTED_MODULE_6__["default"].length; i++) {
      if (router.route.indexOf(routes_js__WEBPACK_IMPORTED_MODULE_6__["default"][i].layout + routes_js__WEBPACK_IMPORTED_MODULE_6__["default"][i].path) !== -1) {
        return routes_js__WEBPACK_IMPORTED_MODULE_6__["default"][i].name;
      }
    }

    return "Brand";
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    routes: routes_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    logo: {
      innerLink: "/admin/index",
      imgSrc: __webpack_require__(/*! assets/img/brand/nextjs_argon_black.png */ "./assets/img/brand/nextjs_argon_black.png"),
      imgAlt: "..."
    }
  })), __jsx("div", {
    className: "main-content",
    ref: mainContentRef
  }, __jsx(components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    brandText: getBrandText()
  })), props.children, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, __jsx(components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/admin/icons.js":
/*!******************************!*\
  !*** ./pages/admin/icons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/Admin.js */ "./layouts/Admin.js");
/* harmony import */ var components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Headers/Header.js */ "./components/Headers/Header.js");
var _jsxFileName = "C:\\Users\\Conta\\OneDrive\\\xC1rea de Trabalho\\Arquivos\\TERCEIRO PERIODO\\Iniciacao\\AirPure.git\\trunk\\Website\\pages\\admin\\icons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // react component that copies the given text inside your clipboard

 // reactstrap components

 // layout for this page

 // core components



class Icons extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      className: " mt--7",
      fluid: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx("div", {
      className: " col"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: " shadow"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
      className: " bg-transparent"
    }, __jsx("h3", {
      className: " mb-0"
    }, "Icons")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: " icon-examples"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "active-40",
      onCopy: () => this.setState({
        copiedText: "active-40"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      id: "tooltip982655500",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-active-40"
    }), __jsx("span", null, "active-40")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip982655500"
    }, this.state.copiedText === "active-40" ? "Copied" : "Copy To Clipboard")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "air-baloon",
      onCopy: () => this.setState({
        copiedText: "air-baloon"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "air-baloon",
      id: "tooltip47550434",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-air-baloon"
    }), __jsx("span", null, "air-baloon")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip47550434"
    }, this.state.copiedText === "air-baloon" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "album-2",
      onCopy: () => this.setState({
        copiedText: "album-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "album-2",
      id: "tooltip945481346",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-album-2"
    }), __jsx("span", null, "album-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip945481346"
    }, this.state.copiedText === "album-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "align-center",
      onCopy: () => this.setState({
        copiedText: "align-center"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "align-center",
      id: "tooltip662352101",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-align-center"
    }), __jsx("span", null, "align-center")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip662352101"
    }, this.state.copiedText === "align-center" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "left-2",
      onCopy: () => this.setState({
        copiedText: "align-left-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "align-left-2",
      id: "tooltip125499785",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-align-left-2"
    }), __jsx("span", null, "align-left-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip125499785"
    }, this.state.copiedText === "align-left-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "ambulance",
      onCopy: () => this.setState({
        copiedText: "ambulance"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "ambulance",
      id: "tooltip382136785",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-ambulance"
    }), __jsx("span", null, "ambulance")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip382136785"
    }, this.state.copiedText === "ambulance" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "asdasdsafsdsad",
      onCopy: () => this.setState({
        copiedText: "app"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "app",
      id: "tooltip3354607",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-app"
    }), __jsx("span", null, "app")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip3354607"
    }, this.state.copiedText === "app" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "archive-2",
      onCopy: () => this.setState({
        copiedText: "archive-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "archive-2",
      id: "tooltip949558633",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-archive-2"
    }), __jsx("span", null, "archive-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip949558633"
    }, this.state.copiedText === "archive-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "atom",
      onCopy: () => this.setState({
        copiedText: "atom"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "atom",
      id: "tooltip742747005",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-atom"
    }), __jsx("span", null, "atom")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip742747005"
    }, this.state.copiedText === "atom" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "badge",
      onCopy: () => this.setState({
        copiedText: "badge"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "badge",
      id: "tooltip488565068",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-badge"
    }), __jsx("span", null, "badge")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip488565068"
    }, this.state.copiedText === "badge" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bag-17",
      onCopy: () => this.setState({
        copiedText: "bag-17"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bag-17",
      id: "tooltip163626790",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bag-17"
    }), __jsx("span", null, "bag-17")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip163626790"
    }, this.state.copiedText === "bag-17" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "basket",
      onCopy: () => this.setState({
        copiedText: "basket"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "basket",
      id: "tooltip387253692",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-basket"
    }), __jsx("span", null, "basket")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip387253692"
    }, this.state.copiedText === "basket" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bell-55",
      onCopy: () => this.setState({
        copiedText: "bell-55"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bell-55",
      id: "tooltip126752761",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bell-55"
    }), __jsx("span", null, "bell-55")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip126752761"
    }, this.state.copiedText === "bell-55" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bold-down",
      onCopy: () => this.setState({
        copiedText: "bold-down"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bold-down",
      id: "tooltip819281856",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bold-down"
    }), __jsx("span", null, "bold-down")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip819281856"
    }, this.state.copiedText === "bold-down" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bold-left",
      onCopy: () => this.setState({
        copiedText: "bold-left"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bold-left",
      id: "tooltip881699027",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bold-left"
    }), __jsx("span", null, "bold-left")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip881699027"
    }, this.state.copiedText === "bold-left" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bold-right",
      onCopy: () => this.setState({
        copiedText: "bold-right"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bold-right",
      id: "tooltip208507461",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bold-right"
    }), __jsx("span", null, "bold-right")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip208507461"
    }, this.state.copiedText === "bold-right" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bold-up",
      onCopy: () => this.setState({
        copiedText: "bold-up"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bold-up",
      id: "tooltip105289310",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bold-up"
    }), __jsx("span", null, "bold-up")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip105289310"
    }, this.state.copiedText === "bold-up" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bold",
      onCopy: () => this.setState({
        copiedText: "bold"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bold",
      id: "tooltip832362262",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bold"
    }), __jsx("span", null, "bold")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip832362262"
    }, this.state.copiedText === "bold" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "book-bookmark",
      onCopy: () => this.setState({
        copiedText: "book-bookmark"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "book-bookmark",
      id: "tooltip606002875",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-book-bookmark"
    }), __jsx("span", null, "book-bookmark")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip606002875"
    }, this.state.copiedText === "book-bookmark" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "books",
      onCopy: () => this.setState({
        copiedText: "books"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "books",
      id: "tooltip484529730",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-books"
    }), __jsx("span", null, "books")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip484529730"
    }, this.state.copiedText === "books" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "box-2",
      onCopy: () => this.setState({
        copiedText: "box-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "box-2",
      id: "tooltip509205883",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-box-2"
    }), __jsx("span", null, "box-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip509205883"
    }, this.state.copiedText === "box-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "briefcase-24",
      onCopy: () => this.setState({
        copiedText: "briefcase-24"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "briefcase-24",
      id: "tooltip147778056",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-briefcase-24"
    }), __jsx("span", null, "briefcase-24")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip147778056"
    }, this.state.copiedText === "briefcase-24" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "building",
      onCopy: () => this.setState({
        copiedText: "building"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "building",
      id: "tooltip157423388",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-building"
    }), __jsx("span", null, "building")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip157423388"
    }, this.state.copiedText === "building" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bulb-61",
      onCopy: () => this.setState({
        copiedText: "bulb-61"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bulb-61",
      id: "tooltip126210465",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bulb-61"
    }), __jsx("span", null, "bulb-61")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip126210465"
    }, this.state.copiedText === "bulb-61" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "list-67",
      onCopy: () => this.setState({
        copiedText: "list-67"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bullet-list-67",
      id: "tooltip672244852",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bullet-list-67"
    }), __jsx("span", null, "bullet-list-67")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip672244852"
    }, this.state.copiedText === "list-67" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "bus-front-12",
      onCopy: () => this.setState({
        copiedText: "bus-front-12"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "bus-front-12",
      id: "tooltip17383590",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-bus-front-12"
    }), __jsx("span", null, "bus-front-12")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip17383590"
    }, this.state.copiedText === "bus-front-12" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "button-pause",
      onCopy: () => this.setState({
        copiedText: "button-pause"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "button-pause",
      id: "tooltip721295259",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-button-pause"
    }), __jsx("span", null, "button-pause")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip721295259"
    }, this.state.copiedText === "button-pause" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "button-play",
      onCopy: () => this.setState({
        copiedText: "button-play"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "button-play",
      id: "tooltip397403700",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-button-play"
    }), __jsx("span", null, "button-play")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip397403700"
    }, this.state.copiedText === "button-play" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "button-power",
      onCopy: () => this.setState({
        copiedText: "button-power"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "button-power",
      id: "tooltip286478188",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-button-power"
    }), __jsx("span", null, "button-power")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip286478188"
    }, this.state.copiedText === "button-power" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "calendar-grid-58",
      onCopy: () => this.setState({
        copiedText: "calendar-grid-58"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "calendar-grid-58",
      id: "tooltip332635506",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-calendar-grid-58"
    }), __jsx("span", null, "calendar-grid-58")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip332635506"
    }, this.state.copiedText === "calendar-grid-58" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "camera-compact",
      onCopy: () => this.setState({
        copiedText: "camera-compact"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "camera-compact",
      id: "tooltip872817724",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-camera-compact"
    }), __jsx("span", null, "camera-compact")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip872817724"
    }, this.state.copiedText === "camera-compact" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "caps-small",
      onCopy: () => this.setState({
        copiedText: "caps-small"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "caps-small",
      id: "tooltip108271146",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-caps-small"
    }), __jsx("span", null, "caps-small")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip108271146"
    }, this.state.copiedText === "caps-small" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "cart",
      onCopy: () => this.setState({
        copiedText: "cart"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "cart",
      id: "tooltip315375170",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-cart"
    }), __jsx("span", null, "cart")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip315375170"
    }, this.state.copiedText === "cart" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "chart-bar-32",
      onCopy: () => this.setState({
        copiedText: "chart-bar-32"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "chart-bar-32",
      id: "tooltip906739900",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-chart-bar-32"
    }), __jsx("span", null, "chart-bar-32")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip906739900"
    }, this.state.copiedText === "chart-bar-32" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "chart-pie-35",
      onCopy: () => this.setState({
        copiedText: "chart-pie-35"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "chart-pie-35",
      id: "tooltip211198935",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-chart-pie-35"
    }), __jsx("span", null, "chart-pie-35")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip211198935"
    }, this.state.copiedText === "chart-pie-35" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "chat-round",
      onCopy: () => this.setState({
        copiedText: "chat-round"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "chat-round",
      id: "tooltip452799920",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-chat-round"
    }), __jsx("span", null, "chat-round")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip452799920"
    }, this.state.copiedText === "chat-round" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "check-bold",
      onCopy: () => this.setState({
        copiedText: "check-bold"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "check-bold",
      id: "tooltip204269497",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-check-bold"
    }), __jsx("span", null, "check-bold")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip204269497"
    }, this.state.copiedText === "check-bold" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "circle-08",
      onCopy: () => this.setState({
        copiedText: "circle-08"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "circle-08",
      id: "tooltip63796078",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-circle-08"
    }), __jsx("span", null, "circle-08")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip63796078"
    }, this.state.copiedText === "circle-08" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "cloud-download-95",
      onCopy: () => this.setState({
        copiedText: "cloud-download-95"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "cloud-download-95",
      id: "tooltip171823822",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-cloud-download-95"
    }), __jsx("span", null, "cloud-download-95")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip171823822"
    }, this.state.copiedText === "cloud-download-95" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "cloud-upload-96",
      onCopy: () => this.setState({
        copiedText: "cloud-upload-96"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "cloud-upload-96",
      id: "tooltip603641354",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-cloud-upload-96"
    }), __jsx("span", null, "cloud-upload-96")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip603641354"
    }, this.state.copiedText === "cloud-upload-96" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "compass-04",
      onCopy: () => this.setState({
        copiedText: "compass-04"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "compass-04",
      id: "tooltip138747611",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-compass-04"
    }), __jsx("span", null, "compass-04")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip138747611"
    }, this.state.copiedText === "compass-04" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "controller",
      onCopy: () => this.setState({
        copiedText: "controller"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "controller",
      id: "tooltip477306514",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-controller"
    }), __jsx("span", null, "controller")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip477306514"
    }, this.state.copiedText === "controller" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "credit-card",
      onCopy: () => this.setState({
        copiedText: "credit-card"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "credit-card",
      id: "tooltip672313572",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-credit-card"
    }), __jsx("span", null, "credit-card")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip672313572"
    }, this.state.copiedText === "credit-card" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "curved-next",
      onCopy: () => this.setState({
        copiedText: "curved-next"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "curved-next",
      id: "tooltip228405488",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-curved-next"
    }), __jsx("span", null, "curved-next")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip228405488"
    }, this.state.copiedText === "curved-next" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "delivery-fast",
      onCopy: () => this.setState({
        copiedText: "delivery-fast"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "delivery-fast",
      id: "tooltip405559",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-delivery-fast"
    }), __jsx("span", null, "delivery-fast")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip405559"
    }, this.state.copiedText === "delivery-fast" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "diamond",
      onCopy: () => this.setState({
        copiedText: "diamond"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "diamond",
      id: "tooltip842334307",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-diamond"
    }), __jsx("span", null, "diamond")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip842334307"
    }, this.state.copiedText === "diamond" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "email-83",
      onCopy: () => this.setState({
        copiedText: "email-83"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "email-83",
      id: "tooltip695661232",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-email-83"
    }), __jsx("span", null, "email-83")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip695661232"
    }, this.state.copiedText === "email-83" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "fat-add",
      onCopy: () => this.setState({
        copiedText: "fat-add"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "fat-add",
      id: "tooltip112280005",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-fat-add"
    }), __jsx("span", null, "fat-add")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip112280005"
    }, this.state.copiedText === "fat-add" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "fat-delete",
      onCopy: () => this.setState({
        copiedText: "fat-delete"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "fat-delete",
      id: "tooltip361927124",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-fat-delete"
    }), __jsx("span", null, "fat-delete")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip361927124"
    }, this.state.copiedText === "fat-delete" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "fat-remove",
      onCopy: () => this.setState({
        copiedText: "fat-remove"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "fat-remove",
      id: "tooltip451275187",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-fat-remove"
    }), __jsx("span", null, "fat-remove")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip451275187"
    }, this.state.copiedText === "fat-remove" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "favourite-28",
      onCopy: () => this.setState({
        copiedText: "favourite-28"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "favourite-28",
      id: "tooltip893689512",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-favourite-28"
    }), __jsx("span", null, "favourite-28")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip893689512"
    }, this.state.copiedText === "favourite-28" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "folder-17",
      onCopy: () => this.setState({
        copiedText: "folder-17"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "folder-17",
      id: "tooltip988458715",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-folder-17"
    }), __jsx("span", null, "folder-17")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip988458715"
    }, this.state.copiedText === "folder-17" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "glasses-2",
      onCopy: () => this.setState({
        copiedText: "glasses-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "glasses-2",
      id: "tooltip576477258",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-glasses-2"
    }), __jsx("span", null, "glasses-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip576477258"
    }, this.state.copiedText === "glasses-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "hat-3",
      onCopy: () => this.setState({
        copiedText: "hat-3"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "hat-3",
      id: "tooltip977228923",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-hat-3"
    }), __jsx("span", null, "hat-3")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip977228923"
    }, this.state.copiedText === "hat-3" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "headphones",
      onCopy: () => this.setState({
        copiedText: "headphones"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "headphones",
      id: "tooltip711983709",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-headphones"
    }), __jsx("span", null, "headphones")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip711983709"
    }, this.state.copiedText === "headphones" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "html5",
      onCopy: () => this.setState({
        copiedText: "html5"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "html5",
      id: "tooltip346497134",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-html5"
    }), __jsx("span", null, "html5")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip346497134"
    }, this.state.copiedText === "html5" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "istanbul",
      onCopy: () => this.setState({
        copiedText: "istanbul"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "istanbul",
      id: "tooltip344591402",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-istanbul"
    }), __jsx("span", null, "istanbul")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip344591402"
    }, this.state.copiedText === "istanbul" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "circle-08",
      onCopy: () => this.setState({
        copiedText: "circle-08"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "circle-08",
      id: "tooltip815029398",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-circle-08"
    }), __jsx("span", null, "circle-08")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip815029398"
    }, this.state.copiedText === "circle-08" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "key-25",
      onCopy: () => this.setState({
        copiedText: "key-25"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "key-25",
      id: "tooltip580511416",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-key-25"
    }), __jsx("span", null, "key-25")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip580511416"
    }, this.state.copiedText === "key-25" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "laptop",
      onCopy: () => this.setState({
        copiedText: "laptop"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "laptop",
      id: "tooltip455996160",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-laptop"
    }), __jsx("span", null, "laptop")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip455996160"
    }, this.state.copiedText === "laptop" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "like-2",
      onCopy: () => this.setState({
        copiedText: "like-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "like-2",
      id: "tooltip928932853",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-like-2"
    }), __jsx("span", null, "like-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip928932853"
    }, this.state.copiedText === "like-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "lock-circle-open",
      onCopy: () => this.setState({
        copiedText: "lock-circle-open"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "lock-circle-open",
      id: "tooltip634042199",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-lock-circle-open"
    }), __jsx("span", null, "lock-circle-open")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip634042199"
    }, this.state.copiedText === "lock-circle-open" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "map-big",
      onCopy: () => this.setState({
        copiedText: "map-big"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "map-big",
      id: "tooltip615611081",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-map-big"
    }), __jsx("span", null, "map-big")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip615611081"
    }, this.state.copiedText === "map-big" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "mobile-button",
      onCopy: () => this.setState({
        copiedText: "mobile-button"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "mobile-button",
      id: "tooltip426682279",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-mobile-button"
    }), __jsx("span", null, "mobile-button")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip426682279"
    }, this.state.copiedText === "mobile-button" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "money-coins",
      onCopy: () => this.setState({
        copiedText: "money-coins"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "money-coins",
      id: "tooltip198953665",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-money-coins"
    }), __jsx("span", null, "money-coins")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip198953665"
    }, this.state.copiedText === "money-coins" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "note-03",
      onCopy: () => this.setState({
        copiedText: "note-03"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "note-03",
      id: "tooltip909975995",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-note-03"
    }), __jsx("span", null, "note-03")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip909975995"
    }, this.state.copiedText === "note-03" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "notification-70",
      onCopy: () => this.setState({
        copiedText: "notification-70"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "notification-70",
      id: "tooltip942089221",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-notification-70"
    }), __jsx("span", null, "notification-70")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip942089221"
    }, this.state.copiedText === "notification-70" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "palette",
      onCopy: () => this.setState({
        copiedText: "palette"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "palette",
      id: "tooltip721048582",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-palette"
    }), __jsx("span", null, "palette")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip721048582"
    }, this.state.copiedText === "palette" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "paper-diploma",
      onCopy: () => this.setState({
        copiedText: "paper-diploma"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "paper-diploma",
      id: "tooltip875782946",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-paper-diploma"
    }), __jsx("span", null, "paper-diploma")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip875782946"
    }, this.state.copiedText === "paper-diploma" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "pin-3",
      onCopy: () => this.setState({
        copiedText: "pin-3"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "pin-3",
      id: "tooltip945087492",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-pin-3"
    }), __jsx("span", null, "pin-3")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip945087492"
    }, this.state.copiedText === "pin-3" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "planet",
      onCopy: () => this.setState({
        copiedText: "planet"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "planet",
      id: "tooltip482139663",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-planet"
    }), __jsx("span", null, "planet")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip482139663"
    }, this.state.copiedText === "planet" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "ruler-pencil",
      onCopy: () => this.setState({
        copiedText: "ruler-pencil"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "ruler-pencil",
      id: "tooltip693938896",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-ruler-pencil"
    }), __jsx("span", null, "ruler-pencil")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip693938896"
    }, this.state.copiedText === "ruler-pencil" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "satisfied",
      onCopy: () => this.setState({
        copiedText: "satisfied"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "satisfied",
      id: "tooltip634575265",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-satisfied"
    }), __jsx("span", null, "satisfied")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip634575265"
    }, this.state.copiedText === "satisfied" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "scissors",
      onCopy: () => this.setState({
        copiedText: "scissors"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "scissors",
      id: "tooltip688473648",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-scissors"
    }), __jsx("span", null, "scissors")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip688473648"
    }, this.state.copiedText === "scissors" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "send",
      onCopy: () => this.setState({
        copiedText: "send"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "send",
      id: "tooltip161268791",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-send"
    }), __jsx("span", null, "send")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip161268791"
    }, this.state.copiedText === "send" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "settings-gear-65",
      onCopy: () => this.setState({
        copiedText: "settings-gear-65"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "settings-gear-65",
      id: "tooltip487959296",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-settings-gear-65"
    }), __jsx("span", null, "settings-gear-65")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip487959296"
    }, this.state.copiedText === "settings-gear-65" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "settings",
      onCopy: () => this.setState({
        copiedText: "settings"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "settings",
      id: "tooltip156598208",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-settings"
    }), __jsx("span", null, "settings")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip156598208"
    }, this.state.copiedText === "settings" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "single-02",
      onCopy: () => this.setState({
        copiedText: "single-02"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "single-02",
      id: "tooltip487356467",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-single-02"
    }), __jsx("span", null, "single-02")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip487356467"
    }, this.state.copiedText === "single-02" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "single-copy-04",
      onCopy: () => this.setState({
        copiedText: "single-copy-04"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "single-copy-04",
      id: "tooltip340498904",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-single-copy-04"
    }), __jsx("span", null, "single-copy-04")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip340498904"
    }, this.state.copiedText === "single-copy-04" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "sound-wave",
      onCopy: () => this.setState({
        copiedText: "sound-wave"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "sound-wave",
      id: "tooltip289156059",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-sound-wave"
    }), __jsx("span", null, "sound-wave")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip289156059"
    }, this.state.copiedText === "sound-wave" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "spaceship",
      onCopy: () => this.setState({
        copiedText: "spaceship"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "spaceship",
      id: "tooltip603604642",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-spaceship"
    }), __jsx("span", null, "spaceship")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip603604642"
    }, this.state.copiedText === "spaceship" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "square-pin",
      onCopy: () => this.setState({
        copiedText: "square-pin"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "square-pin",
      id: "tooltip153036405",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-square-pin"
    }), __jsx("span", null, "square-pin")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip153036405"
    }, this.state.copiedText === "square-pin" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "support-16",
      onCopy: () => this.setState({
        copiedText: "support-16"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "support-16",
      id: "tooltip906422211",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-support-16"
    }), __jsx("span", null, "support-16")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip906422211"
    }, this.state.copiedText === "support-16" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "tablet-button",
      onCopy: () => this.setState({
        copiedText: "tablet-button"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "tablet-button",
      id: "tooltip517579618",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-tablet-button"
    }), __jsx("span", null, "tablet-button")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip517579618"
    }, this.state.copiedText === "tablet-button" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "tag",
      onCopy: () => this.setState({
        copiedText: "tag"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "tag",
      id: "tooltip297195808",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-tag"
    }), __jsx("span", null, "tag")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip297195808"
    }, this.state.copiedText === "tag" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "tie-bow",
      onCopy: () => this.setState({
        copiedText: "tie-bow"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "tie-bow",
      id: "tooltip793084796",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-tie-bow"
    }), __jsx("span", null, "tie-bow")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip793084796"
    }, this.state.copiedText === "tie-bow" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "time-alarm",
      onCopy: () => this.setState({
        copiedText: "time-alarm"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "time-alarm",
      id: "tooltip258891035",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-time-alarm"
    }), __jsx("span", null, "time-alarm")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip258891035"
    }, this.state.copiedText === "time-alarm" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "trophy",
      onCopy: () => this.setState({
        copiedText: "trophy"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "trophy",
      id: "tooltip881235890",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-trophy"
    }), __jsx("span", null, "trophy")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip881235890"
    }, this.state.copiedText === "trophy" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "tv-2",
      onCopy: () => this.setState({
        copiedText: "tv-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "tv-2",
      id: "tooltip330279137",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-tv-2"
    }), __jsx("span", null, "tv-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip330279137"
    }, this.state.copiedText === "tv-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "umbrella-13",
      onCopy: () => this.setState({
        copiedText: "umbrella-13"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "umbrella-13",
      id: "tooltip412313570",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-umbrella-13"
    }), __jsx("span", null, "umbrella-13")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip412313570"
    }, this.state.copiedText === "umbrella-13" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "user-run",
      onCopy: () => this.setState({
        copiedText: "user-run"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "user-run",
      id: "tooltip176201858",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-user-run"
    }), __jsx("span", null, "user-run")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip176201858"
    }, this.state.copiedText === "user-run" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "vector",
      onCopy: () => this.setState({
        copiedText: "vector"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "vector",
      id: "tooltip71164138",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-vector"
    }), __jsx("span", null, "vector")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip71164138"
    }, this.state.copiedText === "vector" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "watch-time",
      onCopy: () => this.setState({
        copiedText: "watch-time"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "watch-time",
      id: "tooltip495578192",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-watch-time"
    }), __jsx("span", null, "watch-time")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip495578192"
    }, this.state.copiedText === "watch-time" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "world",
      onCopy: () => this.setState({
        copiedText: "world"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "world",
      id: "tooltip604848245",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-world"
    }), __jsx("span", null, "world")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip604848245"
    }, this.state.copiedText === "world" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "zoom-split-in",
      onCopy: () => this.setState({
        copiedText: "zoom-split-in"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "zoom-split-in",
      id: "tooltip916423293",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-zoom-split-in"
    }), __jsx("span", null, "zoom-split-in")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip916423293"
    }, this.state.copiedText === "zoom-split-in" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "collection",
      onCopy: () => this.setState({
        copiedText: "collection"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "collection",
      id: "tooltip142934658",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-collection"
    }), __jsx("span", null, "collection")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip142934658"
    }, this.state.copiedText === "collection" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "image",
      onCopy: () => this.setState({
        copiedText: "image"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "image",
      id: "tooltip842947283",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-image"
    }), __jsx("span", null, "image")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip842947283"
    }, this.state.copiedText === "image" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "shop",
      onCopy: () => this.setState({
        copiedText: "shop"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "shop",
      id: "tooltip531866818",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-shop"
    }), __jsx("span", null, "shop")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip531866818"
    }, this.state.copiedText === "shop" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "ungroup",
      onCopy: () => this.setState({
        copiedText: "ungroup"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "ungroup",
      id: "tooltip470734151",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-ungroup"
    }), __jsx("span", null, "ungroup")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip470734151"
    }, this.state.copiedText === "ungroup" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "world-2",
      onCopy: () => this.setState({
        copiedText: "world-2"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "world-2",
      id: "tooltip932383030",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-world-2"
    }), __jsx("span", null, "world-2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip932383030"
    }, this.state.copiedText === "world-2" ? "Copied" : "Copy To Clipbord")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "6"
    }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: "ui-04",
      onCopy: () => this.setState({
        copiedText: "ui-04"
      })
    }, __jsx("button", {
      className: " btn-icon-clipboard",
      "data-clipboard-text": "ui-04",
      id: "tooltip9332484",
      type: "button"
    }, __jsx("div", null, __jsx("i", {
      className: " ni ni-ui-04"
    }), __jsx("span", null, "ui-04")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      delay: 0,
      trigger: "hover focus",
      target: "tooltip9332484"
    }, this.state.copiedText === "ui-04" ? "Copied" : "Copy To Clipbord")))))))));
  }

}

Icons.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var routes = [{
  path: "/dashboard",
  name: "Dashboard",
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

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2JyYW5kL25leHRqc19hcmdvbl9ibGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy90aGVtZS90ZWFtLTEtODAweDgwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy90aGVtZS90ZWFtLTQtODAweDgwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXJzL0FkbWluRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVycy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXJzL0FkbWluTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL2ljb25zLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiSGVhZGVyIiwiQWRtaW5OYXZiYXIiLCJwcm9wcyIsImJyYW5kVGV4dCIsInJlcXVpcmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcyIsIlNpZGViYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2xsYXBzZU9wZW4iLCJzZXRDb2xsYXBzZU9wZW4iLCJ1c2VTdGF0ZSIsImFjdGl2ZVJvdXRlIiwicm91dGVOYW1lIiwicm91dGUiLCJpbmRleE9mIiwidG9nZ2xlQ29sbGFwc2UiLCJjbG9zZUNvbGxhcHNlIiwiY3JlYXRlTGlua3MiLCJyb3V0ZXMiLCJtYXAiLCJwcm9wIiwia2V5IiwibGF5b3V0IiwicGF0aCIsImljb24iLCJuYW1lIiwibG9nbyIsIm5hdmJhckJyYW5kIiwiaW1nQWx0IiwiaW1nU3JjIiwiaW5uZXJMaW5rIiwib3V0dGVyTGluayIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJBZG1pbiIsIm1haW5Db250ZW50UmVmIiwiY3JlYXRlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxpbmdFbGVtZW50IiwiY3VycmVudCIsImdldEJyYW5kVGV4dCIsImkiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJ3YXJuIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwidmFsdWUiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsInN0YXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXJyb3IiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwicmVzdWx0IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkljb25zIiwic2V0U3RhdGUiLCJjb3BpZWRUZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LE1BQUksRUFBRSxRQURSO0FBRUVFLE1BQUksRUFBRSxPQUZSO0FBR0VELE1BQUksRUFBRSx3QkFIUjtBQUlFRixRQUFNLEVBQUU7QUFKVixDQS9CVyxFQXFDWDtBQUNFQyxNQUFJLEVBQUUsV0FEUjtBQUVFRSxNQUFJLEVBQUUsVUFGUjtBQUdFRCxNQUFJLEVBQUUsMkJBSFI7QUFJRUYsUUFBTSxFQUFFO0FBSlYsQ0FyQ1csQ0FBYjtBQTRDZUoscUVBQWYsRTs7Ozs7Ozs7Ozs7QUM1Q0Esd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvYWRtaW4vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FkbWluL2ljb25zLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9uZXh0anNfYXJnb25fYmxhY2stMDA2NTNkZWZiZTQ0ZjdiNWVkMGUzOTI2ZWM0NGYyNjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3RlYW0tMS04MDB4ODAwLTUzMDMzOTcwYTQxNjM2OGRhMzU3OTQzODk2ODAyNjZmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy90ZWFtLTQtODAweDgwMC0yMzAwNzEzMjhiNzA1Zjg2ODZjYWJkMjZhODVlZDZhNS5qcGdcIjsiLCIvKmVzbGludC1kaXNhYmxlKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC14bC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPENvbCB4bD1cIjZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHRleHQtY2VudGVyIHRleHQteGwtbGVmdCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9e1wiIFwifVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbWwtMVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20/cmVmPW5qc2FkLWFkbWluLWZvb3RlclwiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0aXZlIFRpbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgeGw9XCI2XCI+XG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdi1mb290ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQteGwtZW5kXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbT9yZWY9bmpzYWQtYWRtaW4tZm9vdGVyXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDcmVhdGl2ZSBUaW1cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJlc2VudGF0aW9uP3JlZj1uanNhZC1hZG1pbi1mb290ZXJcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYmxvZy5jcmVhdGl2ZS10aW0uY29tP3JlZj1uanNhZC1hZG1pbi1mb290ZXJcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL2FyZ29uLWRhc2hib2FyZC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kP3JlZj1uanNhZC1hZG1pbi1mb290ZXJcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1JVCBMaWNlbnNlXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBiZy1ncmFkaWVudC1kYXJrIHBiLTggcHQtNSBwdC1tZC04XCI+XG4gICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvZHlcIj5cbiAgICAgICAgICAgICAgey8qIENhcmQgc3RhdHMgKi99XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIiB4bD1cIjNcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQtc3RhdHMgbWItNCBtYi14bC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LW11dGVkIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhZmZpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDIgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzUwLDg5N1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tc2hhcGUgYmctZGFuZ2VyIHRleHQtd2hpdGUgcm91bmRlZC1jaXJjbGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoYXJ0LWJhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBtYi0wIHRleHQtbXV0ZWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctdXBcIiAvPiAzLjQ4JVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbm93cmFwXCI+U2luY2UgbGFzdCBtb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIiB4bD1cIjNcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQtc3RhdHMgbWItNCBtYi14bC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cImg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LW11dGVkIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IHVzZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMiBmb250LXdlaWdodC1ib2xkIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLDM1NlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24tc2hhcGUgYmctd2FybmluZyB0ZXh0LXdoaXRlIHJvdW5kZWQtY2lyY2xlIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGFydC1waWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgbWItMCB0ZXh0LW11dGVkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LWRvd25cIiAvPiAzLjQ4JVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbm93cmFwXCI+U2luY2UgbGFzdCB3ZWVrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIGxnPVwiNlwiIHhsPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZC1zdGF0cyBtYi00IG1iLXhsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtbXV0ZWQgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDIgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCI+OTI0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNoYXBlIGJnLXllbGxvdyB0ZXh0LXdoaXRlIHJvdW5kZWQtY2lyY2xlIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBtYi0wIHRleHQtbXV0ZWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LWRvd25cIiAvPiAxLjEwJVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbm93cmFwXCI+U2luY2UgeWVzdGVyZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIGxnPVwiNlwiIHhsPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZC1zdGF0cyBtYi00IG1iLXhsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtbXV0ZWQgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDIgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNDksNjUlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi1zaGFwZSBiZy1pbmZvIHRleHQtd2hpdGUgcm91bmRlZC1jaXJjbGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgbWItMCB0ZXh0LW11dGVkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3VjY2VzcyBtci0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy11cFwiIC8+IDEyJVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbm93cmFwXCI+U2luY2UgbGFzdCBtb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIEZvcm0sXG4gIEZvcm1Hcm91cCxcbiAgSW5wdXRHcm91cEFkZG9uLFxuICBJbnB1dEdyb3VwVGV4dCxcbiAgSW5wdXQsXG4gIElucHV0R3JvdXAsXG4gIE5hdmJhcixcbiAgTmF2LFxuICBDb250YWluZXIsXG4gIE1lZGlhLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jbGFzcyBBZG1pbk5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXItdG9wIG5hdmJhci1kYXJrXCIgZXhwYW5kPVwibWRcIiBpZD1cIm5hdmJhci1tYWluXCI+XG4gICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImg0IG1iLTAgdGV4dC13aGl0ZSB0ZXh0LXVwcGVyY2FzZSBkLW5vbmUgZC1sZy1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icmFuZFRleHR9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm5hdmJhci1zZWFyY2ggbmF2YmFyLXNlYXJjaC1kYXJrIGZvcm0taW5saW5lIG1yLTMgZC1ub25lIGQtbWQtZmxleCBtbC1sZy1hdXRvXCI+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIGQtbm9uZSBkLW1kLWZsZXhcIiBuYXZiYXI+XG4gICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93biBuYXY+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIGNsYXNzTmFtZT1cInByLTBcIiBuYXY+XG4gICAgICAgICAgICAgICAgICA8TWVkaWEgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiYXNzZXRzL2ltZy90aGVtZS90ZWFtLTQtODAweDgwMC5qcGdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgY2xhc3NOYW1lPVwibWwtMiBkLW5vbmUgZC1sZy1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1zbSBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBKZXNzaWNhIEpvbmVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1hcnJvd1wiIHJpZ2h0PlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJub3RpLXRpdGxlXCIgaGVhZGVyIHRhZz1cImRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1vdmVyZmxvdyBtLTBcIj5XZWxjb21lITwvaDY+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNpbmdsZS0wMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TXkgcHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zZXR0aW5ncy1nZWFyLTY1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1jYWxlbmRhci1ncmlkLTU4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3Rpdml0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zdXBwb3J0LTE2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktdXNlci1ydW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L05hdmJhcj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5OYXZiYXI7XG4iLCIvKmVzbGludC1kaXNhYmxlKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkQm9keSxcbiAgQ2FyZFRpdGxlLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW0sXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRm9ybUdyb3VwLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgSW5wdXRHcm91cEFkZG9uLFxuICBJbnB1dEdyb3VwVGV4dCxcbiAgSW5wdXRHcm91cCxcbiAgTWVkaWEsXG4gIE5hdmJhckJyYW5kLFxuICBOYXZiYXIsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG4gIE5hdixcbiAgUHJvZ3Jlc3MsXG4gIFRhYmxlLFxuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG52YXIgcHM7XG5cbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHtcbiAgLy8gdXNlZCBmb3IgY2hlY2tpbmcgY3VycmVudCByb3V0ZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NvbGxhcHNlT3Blbiwgc2V0Q29sbGFwc2VPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gdmVyaWZpZXMgaWYgcm91dGVOYW1lIGlzIHRoZSBvbmUgYWN0aXZlIChpbiBicm93c2VyIGlucHV0KVxuICBjb25zdCBhY3RpdmVSb3V0ZSA9IChyb3V0ZU5hbWUpID0+IHtcbiAgICByZXR1cm4gcm91dGVyLnJvdXRlLmluZGV4T2Yocm91dGVOYW1lKSA+IC0xO1xuICB9O1xuICAvLyB0b2dnbGVzIGNvbGxhcHNlIGJldHdlZW4gb3BlbmVkIGFuZCBjbG9zZWQgKHRydWUvZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlID0gKCkgPT4ge1xuICAgIHNldENvbGxhcHNlT3BlbighY29sbGFwc2VPcGVuKTtcbiAgfTtcbiAgLy8gY2xvc2VzIHRoZSBjb2xsYXBzZVxuICBjb25zdCBjbG9zZUNvbGxhcHNlID0gKCkgPT4ge1xuICAgIHNldENvbGxhcHNlT3BlbihmYWxzZSk7XG4gIH07XG4gIC8vIGNyZWF0ZXMgdGhlIGxpbmtzIHRoYXQgYXBwZWFyIGluIHRoZSBsZWZ0IG1lbnUgLyBTaWRlYmFyXG4gIGNvbnN0IGNyZWF0ZUxpbmtzID0gKHJvdXRlcykgPT4ge1xuICAgIHJldHVybiByb3V0ZXMubWFwKChwcm9wLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17a2V5fSBhY3RpdmU9e2FjdGl2ZVJvdXRlKHByb3AubGF5b3V0ICsgcHJvcC5wYXRoKX0+XG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvcC5sYXlvdXQgKyBwcm9wLnBhdGh9PlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUm91dGUocHJvcC5sYXlvdXQgKyBwcm9wLnBhdGgpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUNvbGxhcHNlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3Byb3AuaWNvbn0gLz5cbiAgICAgICAgICAgICAge3Byb3AubmFtZX1cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHsgcm91dGVzLCBsb2dvIH0gPSBwcm9wcztcbiAgbGV0IG5hdmJhckJyYW5kID0gKFxuICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiI3BhYmxvXCIgY2xhc3NOYW1lPVwicHQtMFwiPlxuICAgICAgPGltZyBhbHQ9e2xvZ28uaW1nQWx0fSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQtaW1nXCIgc3JjPXtsb2dvLmltZ1NyY30gLz5cbiAgICA8L05hdmJhckJyYW5kPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXJcbiAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci12ZXJ0aWNhbCBmaXhlZC1sZWZ0IG5hdmJhci1saWdodCBiZy13aGl0ZVwiXG4gICAgICBleHBhbmQ9XCJtZFwiXG4gICAgICBpZD1cInNpZGVuYXYtbWFpblwiXG4gICAgPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgey8qIFRvZ2dsZXIgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sbGFwc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsvKiBCcmFuZCAqL31cbiAgICAgICAge2xvZ28gJiYgbG9nby5pbm5lckxpbmsgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj17bG9nby5pbm5lckxpbmt9PlxuICAgICAgICAgICAgPHNwYW4+e25hdmJhckJyYW5kfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7bG9nbyAmJiBsb2dvLm91dHRlckxpbmsgPyAoXG4gICAgICAgICAgPGEgaHJlZj17bG9nby5pbm5lckxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAge25hdmJhckJyYW5kfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHsvKiBVc2VyICovfVxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBkLW1kLW5vbmVcIj5cbiAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2PlxuICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjbGFzc05hbWU9XCJuYXYtbGluay1pY29uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJlbGwtNTVcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyLWRlZmF1bHRfZHJvcGRvd25fMVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtYXJyb3dcIlxuICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFjdGlvbjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFub3RoZXIgYWN0aW9uPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XG4gICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdj5cbiAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXY+XG4gICAgICAgICAgICAgIDxNZWRpYSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcImFzc2V0cy9pbWcvdGhlbWUvdGVhbS0xLTgwMHg4MDAuanBnXCIpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWFycm93XCIgcmlnaHQ+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwibm90aS10aXRsZVwiIGhlYWRlciB0YWc9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1vdmVyZmxvdyBtLTBcIj5XZWxjb21lITwvaDY+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktc2luZ2xlLTAyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPk15IHByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNldHRpbmdzLWdlYXItNjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNhbGVuZGFyLWdyaWQtNThcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+QWN0aXZpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXN1cHBvcnQtMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U3VwcG9ydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiI3BhYmxvXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktdXNlci1ydW5cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuICAgICAgICA8L05hdj5cbiAgICAgICAgey8qIENvbGxhcHNlICovfVxuICAgICAgICA8Q29sbGFwc2UgbmF2YmFyIGlzT3Blbj17Y29sbGFwc2VPcGVufT5cbiAgICAgICAgICB7LyogQ29sbGFwc2UgaGVhZGVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlLWhlYWRlciBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIHtsb2dvID8gKFxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sbGFwc2UtYnJhbmRcIiB4cz1cIjZcIj5cbiAgICAgICAgICAgICAgICAgIHtsb2dvLmlubmVyTGluayA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bG9nby5pbm5lckxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtsb2dvLmltZ0FsdH0gc3JjPXtsb2dvLmltZ1NyY30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bG9nby5vdXR0ZXJMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17bG9nby5pbWdBbHR9IHNyYz17bG9nby5pbWdTcmN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbGxhcHNlLWNsb3NlXCIgeHM9XCI2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogRm9ybSAqL31cbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJtdC00IG1iLTMgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1yb3VuZGVkIGlucHV0LWdyb3VwLW1lcmdlXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1yb3VuZGVkIGZvcm0tY29udHJvbC1wcmVwZW5kZWRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxuICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPE5hdiBuYXZiYXI+e2NyZWF0ZUxpbmtzKHJvdXRlcyl9PC9OYXY+XG4gICAgICAgICAgey8qIERpdmlkZXIgKi99XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTNcIiAvPlxuICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGluZyB0ZXh0LW11dGVkXCI+RG9jdW1lbnRhdGlvbjwvaDY+XG4gICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtYi1tZC0zXCIgbmF2YmFyPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi9uZXh0anMvb3ZlcnZpZXcvYXJnb24tZGFzaGJvYXJkP3JlZj1uanNhZC1hZG1pbi1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktc3BhY2VzaGlwXCIgLz5cbiAgICAgICAgICAgICAgICBHZXR0aW5nIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi9uZXh0anMvY29sb3JzL2FyZ29uLWRhc2hib2FyZD9yZWY9bmpzYWQtYWRtaW4tc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXBhbGV0dGVcIiAvPlxuICAgICAgICAgICAgICAgIEZvdW5kYXRpb25cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi9uZXh0anMvYXZhdGFyL2FyZ29uLWRhc2hib2FyZD9yZWY9bmpzYWQtYWRtaW4tc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXVpLTA0XCIgLz5cbiAgICAgICAgICAgICAgICBDb21wb25lbnRzXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1iLW1kLTNcIiBuYXZiYXI+XG4gICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJhY3RpdmUtcHJvIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L2FyZ29uLWRhc2hib2FyZC1wcm8tcmVhY3Q/cmVmPW5qc2FkLWFkbWluLXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zcGFjZXNoaXBcIiAvPlxuICAgICAgICAgICAgICAgIFVwZ3JhZGUgdG8gUFJPXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICApO1xufVxuXG5TaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm91dGVzOiBbe31dLFxufTtcblxuU2lkZWJhci5wcm9wVHlwZXMgPSB7XG4gIC8vIGxpbmtzIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBjb21wb25lbnRcbiAgcm91dGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgbG9nbzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvLyBpbm5lckxpbmsgaXMgZm9yIGxpbmtzIHRoYXQgd2lsbCBkaXJlY3QgdGhlIHVzZXIgd2l0aGluIHRoZSBhcHBcbiAgICAvLyBpdCB3aWxsIGJlIHJlbmRlcmVkIGFzIDxMaW5rIGhyZWY9XCIuLi5cIj4uLi48L0xpbms+IHRhZ1xuICAgIGlubmVyTGluazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBvdXR0ZXJMaW5rIGlzIGZvciBsaW5rcyB0aGF0IHdpbGwgZGlyZWN0IHRoZSB1c2VyIG91dHNpZGUgdGhlIGFwcFxuICAgIC8vIGl0IHdpbGwgYmUgcmVuZGVyZWQgYXMgc2ltcGxlIDxhIGhyZWY9XCIuLi5cIj4uLi48L2E+IHRhZ1xuICAgIG91dHRlckxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gdGhlIGltYWdlIHNyYyBvZiB0aGUgbG9nb1xuICAgIGltZ1NyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIC8vIHRoZSBhbHQgZm9yIHRoZSBpbWdcbiAgICBpbWdBbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBBZG1pbk5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL0FkbWluTmF2YmFyLmpzXCI7XG5pbXBvcnQgQWRtaW5Gb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9BZG1pbkZvb3Rlci5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcImNvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzXCI7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSBcInJvdXRlcy5qc1wiO1xuXG5mdW5jdGlvbiBBZG1pbihwcm9wcykge1xuICAvLyB1c2VkIGZvciBjaGVja2luZyBjdXJyZW50IHJvdXRlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgbWFpbkNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgbWFpbkNvbnRlbnRSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICB9LCBbXSk7XG4gIGNvbnN0IGdldEJyYW5kVGV4dCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJvdXRlci5yb3V0ZS5pbmRleE9mKHJvdXRlc1tpXS5sYXlvdXQgKyByb3V0ZXNbaV0ucGF0aCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiByb3V0ZXNbaV0ubmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiQnJhbmRcIjtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGViYXJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICByb3V0ZXM9e3JvdXRlc31cbiAgICAgICAgbG9nbz17e1xuICAgICAgICAgIGlubmVyTGluazogXCIvYWRtaW4vaW5kZXhcIixcbiAgICAgICAgICBpbWdTcmM6IHJlcXVpcmUoXCJhc3NldHMvaW1nL2JyYW5kL25leHRqc19hcmdvbl9ibGFjay5wbmdcIiksXG4gICAgICAgICAgaW1nQWx0OiBcIi4uLlwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCIgcmVmPXttYWluQ29udGVudFJlZn0+XG4gICAgICAgIDxBZG1pbk5hdmJhciB7Li4ucHJvcHN9IGJyYW5kVGV4dD17Z2V0QnJhbmRUZXh0KCl9IC8+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICA8QWRtaW5Gb290ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIFByZWZldGNoT3B0aW9ucyxcbiAgTmV4dFJvdXRlcixcbiAgaXNMb2NhbFVSTCxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgIClcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gcmVhY3QgY29tcG9uZW50IHRoYXQgY29waWVzIHRoZSBnaXZlbiB0ZXh0IGluc2lkZSB5b3VyIGNsaXBib2FyZFxuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRCb2R5LFxuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBVbmNvbnRyb2xsZWRUb29sdGlwLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcbmltcG9ydCBBZG1pbiBmcm9tIFwibGF5b3V0cy9BZG1pbi5qc1wiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlcnMvSGVhZGVyLmpzXCI7XG5cbmNsYXNzIEljb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiIG10LS03XCIgZmx1aWQ+XG4gICAgICAgICAgey8qIFRhYmxlICovfVxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2xcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cIiBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiBtYi0wXCI+SWNvbnM8L2gzPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIiBpY29uLWV4YW1wbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJhY3RpdmUtNDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYWN0aXZlLTQwXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA5ODI2NTU1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYWN0aXZlLTQwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hY3RpdmUtNDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA5ODI2NTU1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYWN0aXZlLTQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib2FyZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJhaXItYmFsb29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImFpci1iYWxvb25cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJhaXItYmFsb29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDc1NTA0MzRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYWlyLWJhbG9vblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWlyLWJhbG9vbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDQ3NTUwNDM0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImFpci1iYWxvb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYWxidW0tMlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJhbGJ1bS0yXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImFsYnVtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA5NDU0ODEzNDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYWxidW0tMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWxidW0tMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDk0NTQ4MTM0NlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJhbGJ1bS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImFsaWduLWNlbnRlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJhbGlnbi1jZW50ZXJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJhbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA2NjIzNTIxMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYWxpZ24tY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hbGlnbi1jZW50ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA2NjIzNTIxMDFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImxlZnQtMlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJhbGlnbi1sZWZ0LTJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJhbGlnbi1sZWZ0LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxMjU0OTk3ODVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYWxpZ24tbGVmdC0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hbGlnbi1sZWZ0LTI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAxMjU0OTk3ODVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYWxpZ24tbGVmdC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImFtYnVsYW5jZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJhbWJ1bGFuY2VcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJhbWJ1bGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAzODIxMzY3ODVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYW1idWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hbWJ1bGFuY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAzODIxMzY3ODVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYW1idWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImFzZGFzZHNhZnNkc2FkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImFwcFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJhcHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAzMzU0NjA3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWFwcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YXBwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMzM1NDYwN1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJhcHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYXJjaGl2ZS0yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImFyY2hpdmUtMlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImFyY2hpdmUtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDk0OTU1ODYzM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1hcmNoaXZlLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFyY2hpdmUtMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDk0OTU1ODYzM1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJhcmNoaXZlLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYXRvbVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJhdG9tXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImF0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA3NDI3NDcwMDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYXRvbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YXRvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDc0Mjc0NzAwNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJhdG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJhZGdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJhZGdlXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJhZGdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDg4NTY1MDY4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJhZGdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5iYWRnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDQ4ODU2NTA2OFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJiYWRnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJiYWctMTdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYmFnLTE3XCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJhZy0xN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDE2MzYyNjc5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1iYWctMTdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJhZy0xNzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDE2MzYyNjc5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJiYWctMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYmFza2V0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJhc2tldFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJiYXNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAzODcyNTM2OTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYmFza2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5iYXNrZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAzODcyNTM2OTJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYmFza2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJlbGwtNTVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYmVsbC01NVwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJiZWxsLTU1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMTI2NzUyNzYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJlbGwtNTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJlbGwtNTU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAxMjY3NTI3NjFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYmVsbC01NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJib2xkLWRvd25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYm9sZC1kb3duXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiYm9sZC1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwODE5MjgxODU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJvbGQtZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Ym9sZC1kb3duPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwODE5MjgxODU2XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImJvbGQtZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJib2xkLWxlZnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYm9sZC1sZWZ0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiYm9sZC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwODgxNjk5MDI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJvbGQtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Ym9sZC1sZWZ0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwODgxNjk5MDI3XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImJvbGQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJib2xkLXJpZ2h0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJvbGQtcmlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJib2xkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMjA4NTA3NDYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJvbGQtcmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJvbGQtcmlnaHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAyMDg1MDc0NjFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYm9sZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJib2xkLXVwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJvbGQtdXBcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiYm9sZC11cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDEwNTI4OTMxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1ib2xkLXVwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ib2xkLXVwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTA1Mjg5MzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImJvbGQtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYm9sZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJib2xkXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA4MzIzNjIyNjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYm9sZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Ym9sZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDgzMjM2MjI2MlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJvb2stYm9va21hcmtcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYm9vay1ib29rbWFya1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJvb2stYm9va21hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA2MDYwMDI4NzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYm9vay1ib29rbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Ym9vay1ib29rbWFyazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDYwNjAwMjg3NVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJib29rLWJvb2ttYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJvb2tzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJvb2tzXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJvb2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDg0NTI5NzMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJvb2tzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ib29rczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDQ4NDUyOTczMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJib29rc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJib3gtMlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJib3gtMlwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJib3gtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDUwOTIwNTg4M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1ib3gtMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Ym94LTI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA1MDkyMDU4ODNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYm94LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYnJpZWZjYXNlLTI0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJyaWVmY2FzZS0yNFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJyaWVmY2FzZS0yNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDE0Nzc3ODA1NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1icmllZmNhc2UtMjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJyaWVmY2FzZS0yNDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDE0Nzc3ODA1NlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJicmllZmNhc2UtMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYnVpbGRpbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYnVpbGRpbmdcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiYnVpbGRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxNTc0MjMzODhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYnVpbGRpbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJ1aWxkaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTU3NDIzMzg4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImJ1aWxkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJ1bGItNjFcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiYnVsYi02MVwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJidWxiLTYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMTI2MjEwNDY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJ1bGItNjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJ1bGItNjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAxMjYyMTA0NjVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYnVsYi02MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJsaXN0LTY3XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImxpc3QtNjdcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiYnVsbGV0LWxpc3QtNjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA2NzIyNDQ4NTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYnVsbGV0LWxpc3QtNjdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJ1bGxldC1saXN0LTY3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNjcyMjQ0ODUyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImxpc3QtNjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiYnVzLWZyb250LTEyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJ1cy1mcm9udC0xMlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImJ1cy1mcm9udC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDE3MzgzNTkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWJ1cy1mcm9udC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YnVzLWZyb250LTEyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTczODM1OTBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYnVzLWZyb250LTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJ1dHRvbi1wYXVzZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJidXR0b24tcGF1c2VcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJidXR0b24tcGF1c2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA3MjEyOTUyNTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYnV0dG9uLXBhdXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5idXR0b24tcGF1c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA3MjEyOTUyNTlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYnV0dG9uLXBhdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJ1dHRvbi1wbGF5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImJ1dHRvbi1wbGF5XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiYnV0dG9uLXBsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAzOTc0MDM3MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYnV0dG9uLXBsYXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmJ1dHRvbi1wbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMzk3NDAzNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImJ1dHRvbi1wbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImJ1dHRvbi1wb3dlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJidXR0b24tcG93ZXJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJidXR0b24tcG93ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAyODY0NzgxODhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktYnV0dG9uLXBvd2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5idXR0b24tcG93ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAyODY0NzgxODhcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiYnV0dG9uLXBvd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImNhbGVuZGFyLWdyaWQtNThcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2FsZW5kYXItZ3JpZC01OFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImNhbGVuZGFyLWdyaWQtNThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAzMzI2MzU1MDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktY2FsZW5kYXItZ3JpZC01OFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y2FsZW5kYXItZ3JpZC01ODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDMzMjYzNTUwNlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJjYWxlbmRhci1ncmlkLTU4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImNhbWVyYS1jb21wYWN0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImNhbWVyYS1jb21wYWN0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiY2FtZXJhLWNvbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA4NzI4MTc3MjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktY2FtZXJhLWNvbXBhY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNhbWVyYS1jb21wYWN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwODcyODE3NzI0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImNhbWVyYS1jb21wYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImNhcHMtc21hbGxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2Fwcy1zbWFsbFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImNhcHMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxMDgyNzExNDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktY2Fwcy1zbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y2Fwcy1zbWFsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDEwODI3MTE0NlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJjYXBzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImNhcnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2FydFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMzE1Mzc1MTcwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNhcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAzMTUzNzUxNzBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiY2FydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJjaGFydC1iYXItMzJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2hhcnQtYmFyLTMyXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiY2hhcnQtYmFyLTMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwOTA2NzM5OTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNoYXJ0LWJhci0zMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y2hhcnQtYmFyLTMyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwOTA2NzM5OTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImNoYXJ0LWJhci0zMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJjaGFydC1waWUtMzVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2hhcnQtcGllLTM1XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiY2hhcnQtcGllLTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMjExMTk4OTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNoYXJ0LXBpZS0zNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y2hhcnQtcGllLTM1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMjExMTk4OTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImNoYXJ0LXBpZS0zNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJjaGF0LXJvdW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImNoYXQtcm91bmRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJjaGF0LXJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDUyNzk5OTIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNoYXQtcm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNoYXQtcm91bmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA0NTI3OTk5MjBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiY2hhdC1yb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJjaGVjay1ib2xkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImNoZWNrLWJvbGRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJjaGVjay1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMjA0MjY5NDk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNoZWNrLWJvbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNoZWNrLWJvbGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAyMDQyNjk0OTdcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiY2hlY2stYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJjaXJjbGUtMDhcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2lyY2xlLTA4XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiY2lyY2xlLTA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNjM3OTYwNzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktY2lyY2xlLTA4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5jaXJjbGUtMDg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA2Mzc5NjA3OFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJjaXJjbGUtMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY2xvdWQtZG93bmxvYWQtOTVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY2xvdWQtZG93bmxvYWQtOTVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJjbG91ZC1kb3dubG9hZC05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDE3MTgyMzgyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jbG91ZC1kb3dubG9hZC05NVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y2xvdWQtZG93bmxvYWQtOTU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAxNzE4MjM4MjJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiY2xvdWQtZG93bmxvYWQtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY2xvdWQtdXBsb2FkLTk2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImNsb3VkLXVwbG9hZC05NlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImNsb3VkLXVwbG9hZC05NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDYwMzY0MTM1NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jbG91ZC11cGxvYWQtOTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNsb3VkLXVwbG9hZC05Njwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDYwMzY0MTM1NFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJjbG91ZC11cGxvYWQtOTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY29tcGFzcy0wNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJjb21wYXNzLTA0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiY29tcGFzcy0wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDEzODc0NzYxMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jb21wYXNzLTA0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5jb21wYXNzLTA0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTM4NzQ3NjExXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImNvbXBhc3MtMDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY29udHJvbGxlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJjb250cm9sbGVyXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiY29udHJvbGxlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDQ3NzMwNjUxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jb250cm9sbGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5jb250cm9sbGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDc3MzA2NTE0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImNvbnRyb2xsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY3JlZGl0LWNhcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY3JlZGl0LWNhcmRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJjcmVkaXQtY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDY3MjMxMzU3MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jcmVkaXQtY2FyZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y3JlZGl0LWNhcmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA2NzIzMTM1NzJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiY3JlZGl0LWNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY3VydmVkLW5leHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY3VydmVkLW5leHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJjdXJ2ZWQtbmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDIyODQwNTQ4OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jdXJ2ZWQtbmV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y3VydmVkLW5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAyMjg0MDU0ODhcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiY3VydmVkLW5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZGVsaXZlcnktZmFzdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJkZWxpdmVyeS1mYXN0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiZGVsaXZlcnktZmFzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDQwNTU1OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1kZWxpdmVyeS1mYXN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5kZWxpdmVyeS1mYXN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDA1NTU5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImRlbGl2ZXJ5LWZhc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZGlhbW9uZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJkaWFtb25kXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImRpYW1vbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA4NDIzMzQzMDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktZGlhbW9uZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZGlhbW9uZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDg0MjMzNDMwN1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJkaWFtb25kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImVtYWlsLTgzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImVtYWlsLTgzXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImVtYWlsLTgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNjk1NjYxMjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWVtYWlsLTgzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5lbWFpbC04Mzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDY5NTY2MTIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJlbWFpbC04M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJmYXQtYWRkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImZhdC1hZGRcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiZmF0LWFkZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDExMjI4MDAwNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1mYXQtYWRkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mYXQtYWRkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTEyMjgwMDA1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImZhdC1hZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZmF0LWRlbGV0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJmYXQtZGVsZXRlXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiZmF0LWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDM2MTkyNzEyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1mYXQtZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mYXQtZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMzYxOTI3MTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImZhdC1kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZmF0LXJlbW92ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJmYXQtcmVtb3ZlXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiZmF0LXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDQ1MTI3NTE4N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1mYXQtcmVtb3ZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mYXQtcmVtb3ZlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDUxMjc1MTg3XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImZhdC1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZmF2b3VyaXRlLTI4XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImZhdm91cml0ZS0yOFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImZhdm91cml0ZS0yOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDg5MzY4OTUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1mYXZvdXJpdGUtMjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmZhdm91cml0ZS0yODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDg5MzY4OTUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJmYXZvdXJpdGUtMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZm9sZGVyLTE3XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImZvbGRlci0xN1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImZvbGRlci0xN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDk4ODQ1ODcxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1mb2xkZXItMTdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmZvbGRlci0xNzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDk4ODQ1ODcxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJmb2xkZXItMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiZ2xhc3Nlcy0yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImdsYXNzZXMtMlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImdsYXNzZXMtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDU3NjQ3NzI1OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1nbGFzc2VzLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmdsYXNzZXMtMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDU3NjQ3NzI1OFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJnbGFzc2VzLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiaGF0LTNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiaGF0LTNcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwiaGF0LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA5NzcyMjg5MjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktaGF0LTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmhhdC0zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwOTc3MjI4OTIzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImhhdC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImhlYWRwaG9uZXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiaGVhZHBob25lc1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImhlYWRwaG9uZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA3MTE5ODM3MDlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktaGVhZHBob25lc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+aGVhZHBob25lczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDcxMTk4MzcwOVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJoZWFkcGhvbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImh0bWw1XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImh0bWw1XCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImh0bWw1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMzQ2NDk3MTM0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWh0bWw1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5odG1sNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDM0NjQ5NzEzNFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJodG1sNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJpc3RhbmJ1bFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJpc3RhbmJ1bFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJpc3RhbmJ1bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDM0NDU5MTQwMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1pc3RhbmJ1bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+aXN0YW5idWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAzNDQ1OTE0MDJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwiaXN0YW5idWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiY2lyY2xlLTA4XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImNpcmNsZS0wOFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImNpcmNsZS0wOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDgxNTAyOTM5OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jaXJjbGUtMDhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNpcmNsZS0wODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDgxNTAyOTM5OFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJjaXJjbGUtMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wia2V5LTI1XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImtleS0yNVwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJrZXktMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA1ODA1MTE0MTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmkta2V5LTI1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5rZXktMjU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA1ODA1MTE0MTZcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwia2V5LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImxhcHRvcFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJsYXB0b3BcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwibGFwdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDU1OTk2MTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWxhcHRvcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bGFwdG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDU1OTk2MTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImxhcHRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJsaWtlLTJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwibGlrZS0yXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImxpa2UtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDkyODkzMjg1M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1saWtlLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmxpa2UtMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDkyODkzMjg1M1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJsaWtlLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wibG9jay1jaXJjbGUtb3BlblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJsb2NrLWNpcmNsZS1vcGVuXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwibG9jay1jaXJjbGUtb3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDYzNDA0MjE5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1sb2NrLWNpcmNsZS1vcGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5sb2NrLWNpcmNsZS1vcGVuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNjM0MDQyMTk5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcImxvY2stY2lyY2xlLW9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wibWFwLWJpZ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJtYXAtYmlnXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cIm1hcC1iaWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA2MTU2MTEwODFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktbWFwLWJpZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWFwLWJpZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDYxNTYxMTA4MVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJtYXAtYmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIm1vYmlsZS1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwibW9iaWxlLWJ1dHRvblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cIm1vYmlsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA0MjY2ODIyNzlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktbW9iaWxlLWJ1dHRvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bW9iaWxlLWJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDQyNjY4MjI3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJtb2JpbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIm1vbmV5LWNvaW5zXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcIm1vbmV5LWNvaW5zXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwibW9uZXktY29pbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxOTg5NTM2NjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktbW9uZXktY29pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1vbmV5LWNvaW5zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTk4OTUzNjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcIm1vbmV5LWNvaW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIm5vdGUtMDNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwibm90ZS0wM1wiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJub3RlLTAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwOTA5OTc1OTk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLW5vdGUtMDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm5vdGUtMDM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA5MDk5NzU5OTVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwibm90ZS0wM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJub3RpZmljYXRpb24tNzBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwibm90aWZpY2F0aW9uLTcwXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwibm90aWZpY2F0aW9uLTcwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwOTQyMDg5MjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLW5vdGlmaWNhdGlvbi03MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bm90aWZpY2F0aW9uLTcwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwOTQyMDg5MjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcIm5vdGlmaWNhdGlvbi03MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJwYWxldHRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInBhbGV0dGVcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwicGFsZXR0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDcyMTA0ODU4MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1wYWxldHRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5wYWxldHRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNzIxMDQ4NTgyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInBhbGV0dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wicGFwZXItZGlwbG9tYVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJwYXBlci1kaXBsb21hXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwicGFwZXItZGlwbG9tYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDg3NTc4Mjk0NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1wYXBlci1kaXBsb21hXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5wYXBlci1kaXBsb21hPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwODc1NzgyOTQ2XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInBhcGVyLWRpcGxvbWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wicGluLTNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwicGluLTNcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwicGluLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA5NDUwODc0OTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktcGluLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnBpbi0zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwOTQ1MDg3NDkyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInBpbi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInBsYW5ldFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJwbGFuZXRcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwicGxhbmV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDgyMTM5NjYzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXBsYW5ldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+cGxhbmV0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDgyMTM5NjYzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInBsYW5ldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJydWxlci1wZW5jaWxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwicnVsZXItcGVuY2lsXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwicnVsZXItcGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNjkzOTM4ODk2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXJ1bGVyLXBlbmNpbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+cnVsZXItcGVuY2lsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNjkzOTM4ODk2XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInJ1bGVyLXBlbmNpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzYXRpc2ZpZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwic2F0aXNmaWVkXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwic2F0aXNmaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNjM0NTc1MjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNhdGlzZmllZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2F0aXNmaWVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNjM0NTc1MjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInNhdGlzZmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzY2lzc29yc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJzY2lzc29yc1wiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJzY2lzc29yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDY4ODQ3MzY0OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1zY2lzc29yc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2Npc3NvcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA2ODg0NzM2NDhcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwic2Npc3NvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJzZW5kXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInNlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxNjEyNjg3OTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktc2VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2VuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDE2MTI2ODc5MVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJzZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInNldHRpbmdzLWdlYXItNjVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwic2V0dGluZ3MtZ2Vhci02NVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInNldHRpbmdzLWdlYXItNjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA0ODc5NTkyOTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktc2V0dGluZ3MtZ2Vhci02NVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2V0dGluZ3MtZ2Vhci02NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDQ4Nzk1OTI5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJzZXR0aW5ncy1nZWFyLTY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInNldHRpbmdzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInNldHRpbmdzXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMTU2NTk4MjA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNldHRpbmdzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZXR0aW5nczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDE1NjU5ODIwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJzZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzaW5nbGUtMDJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwic2luZ2xlLTAyXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwic2luZ2xlLTAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNDg3MzU2NDY3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNpbmdsZS0wMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2luZ2xlLTAyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDg3MzU2NDY3XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInNpbmdsZS0wMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzaW5nbGUtY29weS0wNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJzaW5nbGUtY29weS0wNFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInNpbmdsZS1jb3B5LTA0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMzQwNDk4OTA0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNpbmdsZS1jb3B5LTA0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zaW5nbGUtY29weS0wNDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDM0MDQ5ODkwNFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJzaW5nbGUtY29weS0wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzb3VuZC13YXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInNvdW5kLXdhdmVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJzb3VuZC13YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMjg5MTU2MDU5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNvdW5kLXdhdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNvdW5kLXdhdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAyODkxNTYwNTlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwic291bmQtd2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzcGFjZXNoaXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwic3BhY2VzaGlwXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwic3BhY2VzaGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNjAzNjA0NjQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNwYWNlc2hpcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c3BhY2VzaGlwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNjAzNjA0NjQyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInNwYWNlc2hpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzcXVhcmUtcGluXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInNxdWFyZS1waW5cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJzcXVhcmUtcGluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwMTUzMDM2NDA1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXNxdWFyZS1waW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNxdWFyZS1waW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXAxNTMwMzY0MDVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwic3F1YXJlLXBpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzdXBwb3J0LTE2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInN1cHBvcnQtMTZcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJzdXBwb3J0LTE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwOTA2NDIyMjExXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXN1cHBvcnQtMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnN1cHBvcnQtMTY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA5MDY0MjIyMTFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwic3VwcG9ydC0xNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJ0YWJsZXQtYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInRhYmxldC1idXR0b25cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJ0YWJsZXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNTE3NTc5NjE4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXRhYmxldC1idXR0b25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnRhYmxldC1idXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA1MTc1Nzk2MThcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwidGFibGV0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJ0YWdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwidGFnXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInRhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDI5NzE5NTgwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS10YWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnRhZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDI5NzE5NTgwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ0YWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1widGllLWJvd1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJ0aWUtYm93XCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInRpZS1ib3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA3OTMwODQ3OTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktdGllLWJvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dGllLWJvdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDc5MzA4NDc5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ0aWUtYm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInRpbWUtYWxhcm1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwidGltZS1hbGFybVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInRpbWUtYWxhcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAyNTg4OTEwMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktdGltZS1hbGFybVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dGltZS1hbGFybTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDI1ODg5MTAzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ0aW1lLWFsYXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInRyb3BoeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJ0cm9waHlcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwidHJvcGh5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwODgxMjM1ODkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXRyb3BoeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dHJvcGh5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwODgxMjM1ODkwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInRyb3BoeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJ0di0yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInR2LTJcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwidHYtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDMzMDI3OTEzN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS10di0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj50di0yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMzMwMjc5MTM3XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInR2LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1widW1icmVsbGEtMTNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwidW1icmVsbGEtMTNcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJ1bWJyZWxsYS0xM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDQxMjMxMzU3MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS11bWJyZWxsYS0xM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dW1icmVsbGEtMTM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA0MTIzMTM1NzBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwidW1icmVsbGEtMTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1widXNlci1ydW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwidXNlci1ydW5cIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwidXNlci1ydW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxNzYyMDE4NThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktdXNlci1ydW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnVzZXItcnVuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwMTc2MjAxODU4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInVzZXItcnVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInZlY3RvclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJ2ZWN0b3JcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwidmVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwNzExNjQxMzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktdmVjdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj52ZWN0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA3MTE2NDEzOFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ2ZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wid2F0Y2gtdGltZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJ3YXRjaC10aW1lXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwid2F0Y2gtdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDQ5NTU3ODE5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS13YXRjaC10aW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj53YXRjaC10aW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNDk1NTc4MTkyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcIndhdGNoLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wid29ybGRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwid29ybGRcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwid29ybGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA2MDQ4NDgyNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktd29ybGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPndvcmxkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNjA0ODQ4MjQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcIndvcmxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcInpvb20tc3BsaXQtaW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiem9vbS1zcGxpdC1pblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInpvb20tc3BsaXQtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA5MTY0MjMyOTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktem9vbS1zcGxpdC1pblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+em9vbS1zcGxpdC1pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDkxNjQyMzI5M1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ6b29tLXNwbGl0LWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImNvbGxlY3Rpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwiY29sbGVjdGlvblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImNvbGxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXAxNDI5MzQ2NThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktY29sbGVjdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y29sbGVjdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDE0MjkzNDY1OFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJjb2xsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcImltYWdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcImltYWdlXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwODQyOTQ3MjgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5pbWFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDg0Mjk0NzI4M1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJzaG9wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3BpZWRUZXh0OiBcInNob3BcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidG4taWNvbi1jbGlwYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PVwic2hvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDUzMTg2NjgxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1zaG9wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zaG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwNTMxODY2ODE4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3BpZWRUZXh0ID09PSBcInNob3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29waWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkNvcHkgVG8gQ2xpcGJvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZFRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1widW5ncm91cFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJ1bmdyb3VwXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnRuLWljb24tY2xpcGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGV4dD1cInVuZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXA0NzA3MzQxNTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktdW5ncm91cFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dW5ncm91cDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiaG92ZXIgZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwidG9vbHRpcDQ3MDczNDE1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ1bmdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvcGllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJDb3B5IFRvIENsaXBib3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIndvcmxkLTJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvcGllZFRleHQ6IFwid29ybGQtMlwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJ3b3JsZC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwOTMyMzgzMDMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLXdvcmxkLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPndvcmxkLTI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImhvdmVyIGZvY3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInRvb2x0aXA5MzIzODMwMzBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvcGllZFRleHQgPT09IFwid29ybGQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJ1aS0wNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29waWVkVGV4dDogXCJ1aS0wNFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1pY29uLWNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRleHQ9XCJ1aS0wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9vbHRpcDkzMzI0ODRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktdWktMDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnVpLTA0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJob3ZlciBmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ0b29sdGlwOTMzMjQ4NFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29waWVkVGV4dCA9PT0gXCJ1aS0wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3BpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQ29weSBUbyBDbGlwYm9yZFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkljb25zLmxheW91dCA9IEFkbWluO1xuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsInZhciByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9kYXNoYm9hcmRcIixcbiAgICBuYW1lOiBcIkRhc2hib2FyZFwiLFxuICAgIGljb246IFwibmkgbmktdHYtMiB0ZXh0LXByaW1hcnlcIixcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9pY29uc1wiLFxuICAgIG5hbWU6IFwiSWNvbnNcIixcbiAgICBpY29uOiBcIm5pIG5pLXBsYW5ldCB0ZXh0LWJsdWVcIixcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9tYXBzXCIsXG4gICAgbmFtZTogXCJNYXBzXCIsXG4gICAgaWNvbjogXCJuaSBuaS1waW4tMyB0ZXh0LW9yYW5nZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcbiAgICBuYW1lOiBcIlVzZXIgUHJvZmlsZVwiLFxuICAgIGljb246IFwibmkgbmktc2luZ2xlLTAyIHRleHQteWVsbG93XCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdGFibGVzXCIsXG4gICAgbmFtZTogXCJUYWJsZXNcIixcbiAgICBpY29uOiBcIm5pIG5pLWJ1bGxldC1saXN0LTY3IHRleHQtcmVkXCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbG9naW5cIixcbiAgICBuYW1lOiBcIkxvZ2luXCIsXG4gICAgaWNvbjogXCJuaSBuaS1rZXktMjUgdGV4dC1pbmZvXCIsXG4gICAgbGF5b3V0OiBcIi9hdXRoXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxuICAgIG5hbWU6IFwiUmVnaXN0ZXJcIixcbiAgICBpY29uOiBcIm5pIG5pLWNpcmNsZS0wOCB0ZXh0LXBpbmtcIixcbiAgICBsYXlvdXQ6IFwiL2F1dGhcIixcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
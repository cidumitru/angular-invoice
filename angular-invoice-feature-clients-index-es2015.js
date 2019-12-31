(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-invoice-feature-clients-index"],{

/***/ "../../libs/feature/clients/src/index.ts":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/clients/src/index.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_clients_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/clients.module */ "../../libs/feature/clients/src/lib/clients.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return _lib_clients_module__WEBPACK_IMPORTED_MODULE_0__["ClientsModule"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "../../libs/feature/clients/src/lib/clients.module.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/clients/src/lib/clients.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients/clients.component */ "../../libs/feature/clients/src/lib/clients/clients.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ClientsModule = class ClientsModule {
};
ClientsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"]
                }
            ])
        ],
        declarations: [_clients_clients_component__WEBPACK_IMPORTED_MODULE_2__["ClientsComponent"]]
    })
], ClientsModule);



/***/ }),

/***/ "../../libs/feature/clients/src/lib/clients/clients.component.css":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/clients/src/lib/clients/clients.component.css ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvY2xpZW50cy9zcmMvbGliL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../../libs/feature/clients/src/lib/clients/clients.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/clients/src/lib/clients/clients.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ClientsComponent = class ClientsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ClientsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-clients',
        template: __importDefault(__webpack_require__(/*! raw-loader!./clients.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/clients/src/lib/clients/clients.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./clients.component.css */ "../../libs/feature/clients/src/lib/clients/clients.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ClientsComponent);



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/clients/src/lib/clients/clients.component.html":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/node_modules/raw-loader/dist/cjs.js!/home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/clients/src/lib/clients/clients.component.html ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  clients works!\n</p>\n");

/***/ })

}]);
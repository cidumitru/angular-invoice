(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/feature/invoices/src/lib/core/services/invoices.service.ts":
/*!**************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/services/invoices.service.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mock_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/mock.data */ "../../libs/feature/invoices/src/lib/core/services/mock/mock.data.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/invoices.actions */ "../../libs/feature/invoices/src/lib/core/store/actions/invoices.actions.ts");
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






let InvoicesService = class InvoicesService {
    constructor(store) {
        this.store = store;
    }
    loadInvoices() {
        const state = this.store.snapshot();
        return this.getInvoices().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((items) => {
            this.store.dispatch(new _store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_5__["LoadInvoicesAction"](items));
        }));
    }
    getInvoices() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(_mock_mock_data__WEBPACK_IMPORTED_MODULE_2__["getMockInvoices"])(10));
    }
};
InvoicesService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
InvoicesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], InvoicesService);



/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/services/mock/mock.data.ts":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/services/mock/mock.data.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: getMockInvoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMockInvoices", function() { return getMockInvoices; });
/* harmony import */ var _models_product_mock_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/product.mock.model */ "../../libs/feature/invoices/src/lib/core/services/mock/models/product.mock.model.ts");
/* harmony import */ var _models_invoice_mock_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/invoice.mock.model */ "../../libs/feature/invoices/src/lib/core/services/mock/models/invoice.mock.model.ts");
/* harmony import */ var _mock_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock.products */ "../../libs/feature/invoices/src/lib/core/services/mock/mock.products.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_invoice_shared_lib_enums_invoice_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-invoice/shared/lib/enums/invoice-status.enum */ "../../libs/shared/src/lib/enums/invoice-status.enum.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getMockInvoices(n) {
    const invoices = [];
    for (let i = 0; i < n; i++) {
        invoices.push(new _models_invoice_mock_model__WEBPACK_IMPORTED_MODULE_1__["InvoiceMockModel"]({
            id: 100 + i,
            info: {
                status: _angular_invoice_shared_lib_enums_invoice_status_enum__WEBPACK_IMPORTED_MODULE_4__["InvoiceStatusEnum"].sent,
                number: Math.floor(Math.random() * 100000 + 1),
                series: Math.random().toString(36).substr(2, 2).toLocaleUpperCase(),
                client: `Client ${Math.floor(Math.random() * 100 + 1)}`
            },
            products: getProducts()
        }));
    }
    return invoices;
}
function getProducts() {
    const products = [];
    for (let i = 0; i < 5; i++) {
        const product = lodash__WEBPACK_IMPORTED_MODULE_3__["sample"](_mock_products__WEBPACK_IMPORTED_MODULE_2__["MockProductsLookup"]) || {};
        products.push(new _models_product_mock_model__WEBPACK_IMPORTED_MODULE_0__["ProductMockModel"]({
            id: product.id,
            name: product.name,
            code: `SK-${product.id}`,
            price: Math.floor(Math.random() * 400 + 1) + 100,
            quantity: Math.floor(Math.random() * 5 + 1)
        }));
    }
    return products;
}


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/services/mock/mock.products.ts":
/*!****************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/services/mock/mock.products.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: MockProductsLookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockProductsLookup", function() { return MockProductsLookup; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MockProductsLookup = [{
        id: 1,
        name: 'Muffin - Banana Nut Individual'
    }, {
        id: 2,
        name: 'Beef - Rouladin, Sliced'
    }, {
        id: 3,
        name: 'Daves Island Stinger'
    }, {
        id: 4,
        name: 'Soup - Cream Of Broccoli, Dry'
    }, {
        id: 5,
        name: 'Arctic Char - Fillets'
    }, {
        id: 6,
        name: 'Lychee'
    }, {
        id: 7,
        name: 'Wine - Redchard Merritt'
    }, {
        id: 8,
        name: 'Cheese - St. Paulin'
    }, {
        id: 9,
        name: 'Blouse / Shirt / Sweater'
    }, {
        id: 10,
        name: 'Phyllo Dough'
    }, {
        id: 11,
        name: 'Ecolab - Orange Frc, Cleaner'
    }, {
        id: 12,
        name: 'Cup - 4oz Translucent'
    }, {
        id: 13,
        name: 'Pepsi - 600ml'
    }, {
        id: 14,
        name: 'Coffee - Hazelnut Cream'
    }, {
        id: 15,
        name: 'Zucchini - Green'
    }, {
        id: 16,
        name: 'Bag - Clear 7 Lb'
    }, {
        id: 17,
        name: 'Soup - Campbells, Minestrone'
    }, {
        id: 18,
        name: 'Soap - Hand Soap'
    }, {
        id: 19,
        name: 'Wanton Wrap'
    }, {
        id: 20,
        name: 'Mudslide'
    }];


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/services/mock/models/invoice.mock.model.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/services/mock/models/invoice.mock.model.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: InvoiceMockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceMockModel", function() { return InvoiceMockModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class InvoiceMockModel {
    constructor(invoice) {
        this.id = invoice.id;
        this.info = invoice.info;
        this.products = invoice.products;
    }
}


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/services/mock/models/product.mock.model.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/services/mock/models/product.mock.model.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: ProductMockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMockModel", function() { return ProductMockModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class ProductMockModel {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.code = product.code;
        this.price = product.price;
        this.quantity = product.quantity;
    }
}


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/store/actions/invoices.actions.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/store/actions/invoices.actions.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: CreateInvoiceAction, LoadInvoicesAction, UpdateInvoiceAction, UpdateInvoiceProductAction, DeleteInvoiceAction, SetActiveInvoiceAction, AddProductToInvoiceAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoiceAction", function() { return CreateInvoiceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInvoicesAction", function() { return LoadInvoicesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInvoiceAction", function() { return UpdateInvoiceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInvoiceProductAction", function() { return UpdateInvoiceProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteInvoiceAction", function() { return DeleteInvoiceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveInvoiceAction", function() { return SetActiveInvoiceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductToInvoiceAction", function() { return AddProductToInvoiceAction; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class CreateInvoiceAction {
    constructor() {
    }
}
CreateInvoiceAction.type = '[Invoice] Create';
class LoadInvoicesAction {
    constructor(invoices) {
        this.invoices = invoices;
    }
}
LoadInvoicesAction.type = '[Invoices] Load';
class UpdateInvoiceAction {
    constructor(id, changes) {
        this.id = id;
        this.changes = changes;
    }
}
UpdateInvoiceAction.type = '[Invoice] Update';
class UpdateInvoiceProductAction {
    constructor(invoiceId, productId, changes) {
        this.invoiceId = invoiceId;
        this.productId = productId;
        this.changes = changes;
    }
}
UpdateInvoiceProductAction.type = '[Invoice] Update Products';
class DeleteInvoiceAction {
    constructor(id) {
        this.id = id;
    }
}
DeleteInvoiceAction.type = '[Invoice] Delete';
class SetActiveInvoiceAction {
    constructor(invoiceId) {
        this.invoiceId = invoiceId;
    }
}
SetActiveInvoiceAction.type = '[Invoice] Set Active Invoice';
class AddProductToInvoiceAction {
    constructor(invoiceId, productId) {
        this.invoiceId = invoiceId;
        this.productId = productId;
    }
}
AddProductToInvoiceAction.type = '[Invoice] Add Product to Invoice';


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/store/invoices.state.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/store/invoices.state.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: InvoicesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesState", function() { return InvoicesState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _models_invoices_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/invoices.state.model */ "../../libs/feature/invoices/src/lib/core/store/models/invoices.state.model.ts");
/* harmony import */ var _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/invoices.actions */ "../../libs/feature/invoices/src/lib/core/store/actions/invoices.actions.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_invoice_shared_lib_interfaces_invoice_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-invoice/shared/lib/interfaces/invoice.interface */ "../../libs/shared/src/lib/interfaces/invoice.interface.ts");
/* harmony import */ var _angular_invoice_feature_products_lib_core_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/core/store/actions/product.actions */ "../../libs/feature/products/src/lib/core/store/actions/product.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var InvoicesState_1;







let InvoicesState = InvoicesState_1 = class InvoicesState {
    constructor(store) {
        this.store = store;
    }
    static Invoices(state) {
        return state.items;
    }
    static getActiveInvoiceId(state) {
        return state.activeInvoiceId;
    }
    static getActiveInvoice(state) {
        if (!state.activeInvoiceId) {
            return;
        }
        return state.items[state.activeInvoiceId];
    }
    static getInvoiceById(invoiceId) {
        return Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([InvoicesState_1], (state) => state.items[invoiceId]);
    }
    loadInvoices({ patchState }, { invoices }) {
        const products = invoices.reduce((accum, invoice) => {
            return accum.concat(invoice.products);
        }, []);
        this.store.dispatch(new _angular_invoice_feature_products_lib_core_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_5__["LoadProductsAction"](products));
        const mappedInvoices = invoices.map((invoice) => new _angular_invoice_shared_lib_interfaces_invoice_interface__WEBPACK_IMPORTED_MODULE_4__["InvoiceItemStateModel"]({
            id: invoice.id,
            info: invoice.info,
            productsSpecsById: invoice.products.reduce((productsSpecs, product) => {
                productsSpecs[product.id] = { quantity: product.quantity };
                return productsSpecs;
            }, {})
        }));
        this.store.dispatch(new _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["SetActiveInvoiceAction"](mappedInvoices[0].id));
        const invoicesMap = lodash__WEBPACK_IMPORTED_MODULE_3__["keyBy"](mappedInvoices, 'id');
        patchState({
            items: invoicesMap
        });
    }
    createInvoice({ getState, patchState }, action) {
        const state = getState();
        const newInvoiceId = (lodash__WEBPACK_IMPORTED_MODULE_3__["max"](lodash__WEBPACK_IMPORTED_MODULE_3__["values"](state.items).map((invoice) => invoice.id)) || -1) + 1;
        patchState({
            items: Object.assign(Object.assign({}, state.items), { [newInvoiceId]: new _angular_invoice_shared_lib_interfaces_invoice_interface__WEBPACK_IMPORTED_MODULE_4__["DraftInvoiceStateModel"](newInvoiceId) })
        });
        this.store.dispatch(new _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["SetActiveInvoiceAction"](newInvoiceId));
    }
    setActiveInvoice({ patchState }, { invoiceId }) {
        patchState({
            activeInvoiceId: invoiceId
        });
    }
    addProductToInvoice({ getState, patchState }, { invoiceId, productId }) {
        const state = getState();
        patchState({
            items: Object.assign(Object.assign({}, state.items), { [invoiceId]: Object.assign(Object.assign({}, state.items[invoiceId]), { productsSpecsById: Object.assign(Object.assign({}, state.items[invoiceId].productsSpecsById), { [productId]: { quantity: 1 } }) }) })
        });
    }
    deleteInvoice({ getState, patchState }, { id }) {
        const state = getState();
        const _a = state.items, _b = id, deleted = _a[_b], remaining = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        patchState({
            items: remaining
        });
    }
    updatedInvoiceProduct({ getState, patchState }, { invoiceId, productId, changes }) {
        const copyOfState = Object.assign({}, getState());
        patchState({
            items: Object.assign(Object.assign({}, copyOfState.items), { [invoiceId]: Object.assign(Object.assign({}, copyOfState.items[invoiceId]), { productsSpecsById: Object.assign(Object.assign({}, copyOfState.items[invoiceId].productsSpecsById), { [productId]: Object.assign(Object.assign({}, copyOfState.items[invoiceId].productsSpecsById[productId]), changes) }) }) })
        });
    }
};
InvoicesState.default = new _models_invoices_state_model__WEBPACK_IMPORTED_MODULE_1__["InvoicesStateModel"]();
InvoicesState.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }
];
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["LoadInvoicesAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["LoadInvoicesAction"]]),
    __metadata("design:returntype", void 0)
], InvoicesState.prototype, "loadInvoices", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["CreateInvoiceAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["CreateInvoiceAction"]]),
    __metadata("design:returntype", void 0)
], InvoicesState.prototype, "createInvoice", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["SetActiveInvoiceAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["SetActiveInvoiceAction"]]),
    __metadata("design:returntype", void 0)
], InvoicesState.prototype, "setActiveInvoice", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["AddProductToInvoiceAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["AddProductToInvoiceAction"]]),
    __metadata("design:returntype", void 0)
], InvoicesState.prototype, "addProductToInvoice", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteInvoiceAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteInvoiceAction"]]),
    __metadata("design:returntype", void 0)
], InvoicesState.prototype, "deleteInvoice", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateInvoiceProductAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_invoices_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateInvoiceProductAction"]]),
    __metadata("design:returntype", void 0)
], InvoicesState.prototype, "updatedInvoiceProduct", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], InvoicesState, "Invoices", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], InvoicesState, "getActiveInvoiceId", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], InvoicesState, "getActiveInvoice", null);
InvoicesState = InvoicesState_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])(),
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
        name: 'invoices',
        defaults: InvoicesState_1.default
    }),
    __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
], InvoicesState);



/***/ }),

/***/ "../../libs/feature/invoices/src/lib/core/store/models/invoices.state.model.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/core/store/models/invoices.state.model.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: InvoicesStateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesStateModel", function() { return InvoicesStateModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class InvoicesStateModel {
    constructor(state = {}) {
        this.items = state.items || {};
        this.activeInvoiceId = state.activeInvoiceId || 0;
        this.invoiceProductsById = state.invoiceProductsById || new Map();
    }
}


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoice-item/invoice-item.component.css":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-item/invoice-item.component.css ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvaW52b2ljZXMvc3JjL2xpYi9pbnZvaWNlLWl0ZW0vaW52b2ljZS1pdGVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoice-item/invoice-item.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-item/invoice-item.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: InvoiceItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceItemComponent", function() { return InvoiceItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_product_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/product.view-model */ "../../libs/feature/invoices/src/lib/invoice-item/models/product.view-model.ts");
/* harmony import */ var _models_invoice_item_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/invoice-item.view-model */ "../../libs/feature/invoices/src/lib/invoice-item/models/invoice-item.view-model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/of */ "../../node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_invoice_shared_lib_enums_invoice_status_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-invoice/shared/lib/enums/invoice-status.enum */ "../../libs/shared/src/lib/enums/invoice-status.enum.ts");
/* harmony import */ var _angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/core/store/products.state */ "../../libs/feature/products/src/lib/core/store/products.state.ts");
/* harmony import */ var _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/core/store/actions/invoices.actions */ "../../libs/feature/invoices/src/lib/core/store/actions/invoices.actions.ts");
/* harmony import */ var _angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/core/store/invoices.state */ "../../libs/feature/invoices/src/lib/core/store/invoices.state.ts");
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











let InvoiceItemComponent = class InvoiceItemComponent {
    constructor(store) {
        this.store = store;
        this.invoiceStatuses = _angular_invoice_shared_lib_enums_invoice_status_enum__WEBPACK_IMPORTED_MODULE_7__["InvoiceStatusEnum"];
        this.stateProducts$ = this.store.select(_angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_8__["ProductsState"].getProducts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((products) => lodash__WEBPACK_IMPORTED_MODULE_5__["values"](products)));
    }
    set _invoice(invoice) {
        if (this.invoice && this.invoice.id === invoice.id || !invoice) {
            return;
        }
        this.invoice = this.createViewModel(invoice);
    }
    createViewModel(invoice) {
        const products$ = this.store.select(_angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_10__["InvoicesState"].getInvoiceById(invoice.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((invoiceState) => {
            const productIds = lodash__WEBPACK_IMPORTED_MODULE_5__["keys"](invoiceState.productsSpecsById).map((id) => parseInt(id, 10));
            if (!productIds.length) {
                return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
            }
            return this.store.select(_angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_8__["ProductsState"].getProductsWithIds(productIds)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((stateProducts) => stateProducts.map((product) => {
                return new _models_product_view_model__WEBPACK_IMPORTED_MODULE_3__["ProductViewModel"](Object.assign(Object.assign({}, product), invoice.productsSpecsById[product.id]));
            })));
        }));
        return new _models_invoice_item_view_model__WEBPACK_IMPORTED_MODULE_4__["InvoiceItemViewModel"](Object.assign(Object.assign({}, invoice), { products$ }));
    }
    addNewProduct(product) {
        this.store.dispatch(new _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_9__["AddProductToInvoiceAction"](this.invoice.id, product.id));
    }
    updateInvoiceProducts(productId, product) {
        this.store.dispatch(new _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_9__["UpdateInvoiceProductAction"](this.invoice.id, productId, product));
    }
    snapshot() {
        return this.store.snapshot();
    }
};
InvoiceItemComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('invoice'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InvoiceItemComponent.prototype, "_invoice", null);
InvoiceItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-invoice-item',
        template: __importDefault(__webpack_require__(/*! raw-loader!./invoice-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/invoices/src/lib/invoice-item/invoice-item.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./invoice-item.component.css */ "../../libs/feature/invoices/src/lib/invoice-item/invoice-item.component.css")).default]
    }),
    __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
], InvoiceItemComponent);



/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoice-item/models/invoice-item.view-model.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-item/models/invoice-item.view-model.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: InvoiceItemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceItemViewModel", function() { return InvoiceItemViewModel; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


class InvoiceItemViewModel {
    constructor(invoice) {
        this.editMode = true;
        this.id = invoice.id;
        this.info = invoice.info;
        this.products$ = invoice.products$;
        this.productsSpecsById = invoice.productsSpecsById;
        this.editMode = invoice.editMode || false;
        this.invoiceTotal$ = invoice.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((products) => lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](products.map((product) => product.price * product.quantity))));
    }
    toggleEditMode() {
        this.editMode = !this.editMode;
    }
}


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoice-item/models/product.view-model.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-item/models/product.view-model.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ProductViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewModel", function() { return ProductViewModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class ProductViewModel {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.code = product.code;
        this.price = product.price;
        this.quantity = product.quantity;
    }
}


/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoice-list/invoice-list.component.css":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-list/invoice-list.component.css ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvaW52b2ljZXMvc3JjL2xpYi9pbnZvaWNlLWxpc3QvaW52b2ljZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoice-list/invoice-list.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-list/invoice-list.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
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

let InvoiceListComponent = class InvoiceListComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
InvoiceListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-invoice-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./invoice-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/invoices/src/lib/invoice-list/invoice-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./invoice-list.component.css */ "../../libs/feature/invoices/src/lib/invoice-list/invoice-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], InvoiceListComponent);



/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoices.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoices.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group-item {\n  height: 50px;\n}\n.list-group-item .delete-btn {\n  display: none;\n}\n.list-group-item:hover .delete-btn {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItaW52b2ljZS9hbmd1bGFyLWludm9pY2UvZnJvbnRlbmQvYW5ndWxhci1pbnZvaWNlL2xpYnMvZmVhdHVyZS9pbnZvaWNlcy9zcmMvbGliL2ludm9pY2VzLmNvbXBvbmVudC5zY3NzIiwibGlicy9mZWF0dXJlL2ludm9pY2VzL3NyYy9saWIvaW52b2ljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREdJO0VBQ0UsY0FBQTtBQ0ROIiwiZmlsZSI6ImxpYnMvZmVhdHVyZS9pbnZvaWNlcy9zcmMvbGliL2ludm9pY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGhlaWdodDogNTBweDtcblxuICAuZGVsZXRlLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5kZWxldGUtYnRuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuIiwiLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0gLmRlbGV0ZS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciAuZGVsZXRlLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoices.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoices.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/core/store/actions/invoices.actions */ "../../libs/feature/invoices/src/lib/core/store/actions/invoices.actions.ts");
/* harmony import */ var _angular_invoice_feature_invoices_lib_core_services_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/core/services/invoices.service */ "../../libs/feature/invoices/src/lib/core/services/invoices.service.ts");
/* harmony import */ var _angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/core/store/invoices.state */ "../../libs/feature/invoices/src/lib/core/store/invoices.state.ts");
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








let InvoicesComponent = class InvoicesComponent {
    constructor(api, store) {
        this.api = api;
        this.store = store;
        this.invoices$ = this.store.select(_angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_7__["InvoicesState"].Invoices).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((invoices) => lodash__WEBPACK_IMPORTED_MODULE_4__["values"](invoices)));
    }
    ngOnInit() {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["values"](this.snapshot().invoices.items).length) {
            this.api.loadInvoices().subscribe();
        }
    }
    deleteInvoice(invoiceId) {
        if (confirm('Delete?')) {
            this.store.dispatch(new _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteInvoiceAction"](invoiceId));
        }
    }
    selectInvoice(invoiceId) {
        this.store.dispatch(new _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_5__["SetActiveInvoiceAction"](invoiceId));
    }
    createNewInvoice() {
        this.store.dispatch(new _angular_invoice_feature_invoices_lib_core_store_actions_invoices_actions__WEBPACK_IMPORTED_MODULE_5__["CreateInvoiceAction"]());
    }
    snapshot() {
        return this.store.snapshot();
    }
};
InvoicesComponent.ctorParameters = () => [
    { type: _angular_invoice_feature_invoices_lib_core_services_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_7__["InvoicesState"].getActiveInvoice),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
], InvoicesComponent.prototype, "activeInvoice$", void 0);
InvoicesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-invoices',
        template: __importDefault(__webpack_require__(/*! raw-loader!./invoices.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/invoices/src/lib/invoices.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./invoices.component.scss */ "../../libs/feature/invoices/src/lib/invoices.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_invoice_feature_invoices_lib_core_services_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
], InvoicesComponent);



/***/ }),

/***/ "../../libs/feature/invoices/src/lib/invoices.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoices.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoices.component */ "../../libs/feature/invoices/src/lib/invoices.component.ts");
/* harmony import */ var _invoice_item_invoice_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-item/invoice-item.component */ "../../libs/feature/invoices/src/lib/invoice-item/invoice-item.component.ts");
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "../../libs/feature/invoices/src/lib/invoice-list/invoice-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/invoices.service */ "../../libs/feature/invoices/src/lib/core/services/invoices.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/core/store/invoices.state */ "../../libs/feature/invoices/src/lib/core/store/invoices.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_invoice_shared_lib_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-invoice/shared/lib/shared.module */ "../../libs/shared/src/lib/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let InvoicesModule = class InvoicesModule {
};
InvoicesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_invoice_shared_lib_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forFeature([_angular_invoice_feature_invoices_lib_core_store_invoices_state__WEBPACK_IMPORTED_MODULE_8__["InvoicesState"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([
                {
                    path: '',
                    component: _invoices_component__WEBPACK_IMPORTED_MODULE_2__["InvoicesComponent"]
                }
            ])
        ],
        declarations: [_invoices_component__WEBPACK_IMPORTED_MODULE_2__["InvoicesComponent"], _invoice_item_invoice_item_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceItemComponent"], _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceListComponent"]],
        providers: [_core_services_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"]]
    })
], InvoicesModule);



/***/ }),

/***/ "../../libs/feature/products/src/lib/core/store/actions/product.actions.ts":
/*!******************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/core/store/actions/product.actions.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: LoadProductsAction, AddProductAction, BulkAddProductAction, UpdateProductAction, DeleteProductAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductsAction", function() { return LoadProductsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductAction", function() { return AddProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAddProductAction", function() { return BulkAddProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductAction", function() { return UpdateProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductAction", function() { return DeleteProductAction; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class LoadProductsAction {
    constructor(items) {
        this.items = items;
    }
}
LoadProductsAction.type = '[Products] Load';
class AddProductAction {
    constructor(product) {
        this.product = product;
    }
}
AddProductAction.type = '[Product] Add';
class BulkAddProductAction {
    constructor(products) {
        this.products = products;
    }
}
BulkAddProductAction.type = '[Product] Bulk Add';
class UpdateProductAction {
    constructor(id, changes) {
        this.id = id;
        this.changes = changes;
    }
}
UpdateProductAction.type = '[Product] Update';
class DeleteProductAction {
    constructor(id) {
        this.id = id;
    }
}
DeleteProductAction.type = '[Product] Delete';


/***/ }),

/***/ "../../libs/feature/products/src/lib/core/store/models/products.state.model.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/core/store/models/products.state.model.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ProductsStateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsStateModel", function() { return ProductsStateModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class ProductsStateModel {
    constructor(state = {}) {
        this.items = state.items || {};
        this.productsSpecsByInvoiceId = state.productsSpecsByInvoiceId
            || {};
    }
}


/***/ }),

/***/ "../../libs/feature/products/src/lib/core/store/products.state.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/core/store/products.state.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ProductsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsState", function() { return ProductsState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _models_products_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/products.state.model */ "../../libs/feature/products/src/lib/core/store/models/products.state.model.ts");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/product.actions */ "../../libs/feature/products/src/lib/core/store/actions/product.actions.ts");
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
var ProductsState_1;



let ProductsState = ProductsState_1 = class ProductsState {
    static products(state) {
        return Object.keys(state.items).map((key) => state.items[parseInt(key, 10)]);
    }
    static getProducts(state) {
        return state.items;
    }
    static getProductsWithIds(productIds) {
        return Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([ProductsState_1], (state) => {
            return productIds.map((productId) => state.items[productId]);
        });
    }
    loadProducts({ getState, patchState }, { items }) {
        patchState({
            items: items.reduce((obj, product) => {
                obj[product.id] = product;
                return obj;
            }, {})
        });
    }
    deleteProduct({ getState, patchState }, { id }) {
        const state = getState();
        delete state.items[id];
        patchState({
            items: Object.assign({}, state.items)
        });
    }
    updateProduct({ getState, patchState }, { id, changes }) {
        const state = getState();
        patchState({
            items: Object.assign(Object.assign({}, state.items), { [id]: Object.assign(Object.assign({}, state.items[id]), changes) })
        });
    }
};
ProductsState.default = new _models_products_state_model__WEBPACK_IMPORTED_MODULE_1__["ProductsStateModel"]();
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["LoadProductsAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["LoadProductsAction"]]),
    __metadata("design:returntype", void 0)
], ProductsState.prototype, "loadProducts", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteProductAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteProductAction"]]),
    __metadata("design:returntype", void 0)
], ProductsState.prototype, "deleteProduct", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateProductAction"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _actions_product_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateProductAction"]]),
    __metadata("design:returntype", void 0)
], ProductsState.prototype, "updateProduct", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], ProductsState, "products", null);
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProductsState, "getProducts", null);
ProductsState = ProductsState_1 = __decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
        name: 'products',
        defaults: ProductsState_1.default
    })
], ProductsState);



/***/ }),

/***/ "../../libs/feature/products/src/lib/products.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/products.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "../../libs/feature/products/src/lib/products/products.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/core/store/products.state */ "../../libs/feature/products/src/lib/core/store/products.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([_angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_5__["ProductsState"]])
        ],
        declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]]
    })
], ProductsModule);



/***/ }),

/***/ "../../libs/feature/products/src/lib/products/products.component.css":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/products/products.component.css ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmUvcHJvZHVjdHMvc3JjL2xpYi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "../../libs/feature/products/src/lib/products/products.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/products/products.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_invoice_feature_products_lib_core_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/core/store/actions/product.actions */ "../../libs/feature/products/src/lib/core/store/actions/product.actions.ts");
/* harmony import */ var _angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/core/store/products.state */ "../../libs/feature/products/src/lib/core/store/products.state.ts");
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





let ProductsComponent = class ProductsComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    removeProduct(id) {
        this.store.dispatch(new _angular_invoice_feature_products_lib_core_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteProductAction"](id));
    }
    updateProduct(id, changes) {
        this.store.dispatch(new _angular_invoice_feature_products_lib_core_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProductAction"](id, changes));
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
__decorate([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_angular_invoice_feature_products_lib_core_store_products_state__WEBPACK_IMPORTED_MODULE_4__["ProductsState"].products),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
], ProductsComponent.prototype, "products$", void 0);
ProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products',
        template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/products/src/lib/products/products.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./products.component.css */ "../../libs/feature/products/src/lib/products/products.component.css")).default]
    }),
    __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], ProductsComponent);



/***/ }),

/***/ "../../libs/shared/src/lib/enums/invoice-status.enum.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/shared/src/lib/enums/invoice-status.enum.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: InvoiceStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceStatusEnum", function() { return InvoiceStatusEnum; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["draft"] = "Draft";
    InvoiceStatusEnum["sent"] = "Sent";
    InvoiceStatusEnum["paid"] = "Paid";
    InvoiceStatusEnum["overdue"] = "Overdue";
})(InvoiceStatusEnum || (InvoiceStatusEnum = {}));


/***/ }),

/***/ "../../libs/shared/src/lib/interfaces/invoice.interface.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/shared/src/lib/interfaces/invoice.interface.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: InvoiceItemStateModel, DraftInvoiceStateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceItemStateModel", function() { return InvoiceItemStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftInvoiceStateModel", function() { return DraftInvoiceStateModel; });
/* harmony import */ var _enums_invoice_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/invoice-status.enum */ "../../libs/shared/src/lib/enums/invoice-status.enum.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class InvoiceItemStateModel {
    constructor(invoice) {
        this.id = invoice.id;
        this.info = invoice.info;
        this.productsSpecsById = invoice.productsSpecsById;
    }
}
class DraftInvoiceStateModel {
    constructor(id) {
        this.id = id;
        // TODO: Add series from state
        this.info = { client: 'n/a', number: id, series: 'SK', status: _enums_invoice_status_enum__WEBPACK_IMPORTED_MODULE_0__["InvoiceStatusEnum"].draft };
        this.productsSpecsById = {};
    }
}


/***/ }),

/***/ "../../libs/shared/src/lib/shared.module.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/shared/src/lib/shared.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "../../node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-select-dropdown */ "../../node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_3__["SelectDropDownModule"]
        ],
        declarations: [],
        exports: [
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_3__["SelectDropDownModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/invoices/src/lib/invoice-item/invoice-item.component.html":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/node_modules/raw-loader/dist/cjs.js!/home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-item/invoice-item.component.html ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    Invoice\n    <strong>{{invoice.info.series}} {{invoice.info.number}}</strong>\n    <div class=\"d-inline\">\n      <span class=\"float-right\"> <strong>Status:</strong> {{invoice.info.status}}</span>\n      <button (click)=\"invoice.toggleEditMode()\"\n              class=\"btn btn-sm btn-success ml-2\">{{invoice.editMode ? 'Save' : 'Edit'}}</button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row mb-4\">\n      <div class=\"col-sm-6\">\n        <h6 class=\"mb-3\">From:</h6>\n        <div>\n          <strong>Dumitru</strong>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6\">\n        <h6 class=\"mb-3\">To:</h6>\n        <div>\n          <strong>{{invoice.info.client}}</strong>\n        </div>\n      </div>\n\n\n    </div>\n\n    <div class=\"table-responsive-sm\">\n      <table class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th class=\"center\">SKU</th>\n          <th>Item</th>\n\n          <th class=\"right\">Unit Cost</th>\n          <th class=\"center\">Qty</th>\n          <th class=\"right\">Total</th>\n        </tr>\n        </thead>\n        <tbody>\n        <ng-container [ngTemplateOutlet]=\"displayProducts\"></ng-container>\n        </tbody>\n      </table>\n\n      <ng-container *ngIf=\"invoice?.info?.status === invoiceStatuses.draft || invoice?.editMode\">\n        <h3>Add product to invoice</h3>\n        <ngx-select-dropdown\n          (change)=\"addNewProduct($event.value)\"\n          [config]=\"{displayKey: 'name', search: true}\"\n          [options]=\"stateProducts$ | async\">\n        </ngx-select-dropdown>\n      </ng-container>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-5\">\n\n      </div>\n\n      <div class=\"col-lg-4 col-sm-5 ml-auto\">\n        <table class=\"table table-clear\">\n          <tbody>\n          <tr>\n            <td class=\"left\">\n              <strong>Total</strong>\n            </td>\n            <td class=\"right\">\n              <strong>{{invoice.invoiceTotal$ | async}}</strong>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n<ng-template #displayProducts>\n  <tr *ngFor=\"let product of invoice.products$ | async\">\n    <td class=\"center\">{{product.code}}</td>\n    <td class=\"left\">{{product.name}}</td>\n\n    <td class=\"center\">\n      <input (change)=\"updateInvoiceProducts(product.id, {price: $event.target.valueAsNumber})\" *ngIf=\"invoice.editMode\"\n             [ngModel]=\"product.price\" class=\"form-control\"\n             type=\"number\">\n      <ng-container *ngIf=\"!invoice.editMode\">{{product.price}}</ng-container>\n    </td>\n    <td class=\"center\">\n      <input (change)=\"updateInvoiceProducts(product.id, {quantity: $event.target.valueAsNumber})\"\n             *ngIf=\"invoice.editMode\"\n             [ngModel]=\"product.quantity\" class=\"form-control\"\n             type=\"number\">\n      <ng-container *ngIf=\"!invoice.editMode\">{{product.quantity}}</ng-container>\n    </td>\n    <td class=\"right\">{{product.price * product.quantity}}</td>\n  </tr>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/invoices/src/lib/invoice-list/invoice-list.component.html":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/node_modules/raw-loader/dist/cjs.js!/home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoice-list/invoice-list.component.html ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  invoice-list works!\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/invoices/src/lib/invoices.component.html":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/node_modules/raw-loader/dist/cjs.js!/home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/invoices/src/lib/invoices.component.html ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row mt-4\">\n    <div class=\"col-md-3\">\n      <div class=\"list-group\">\n        <li (click)=\"selectInvoice(invoice?.id)\" *ngFor=\"let invoice of invoices$ | async\"\n            [ngClass]=\"{'active': invoice?.id === (activeInvoice$ | async)?.id}\"\n            class=\"list-group-item d-flex justify-content-between align-items-center\">\n          Invoice {{ invoice.id }}\n          <button (click)=\"deleteInvoice(invoice.id)\" class=\"btn btn-sm btn-danger delete-btn\">Delete</button>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <button (click)=\"createNewInvoice()\" class=\"btn btn-sm btn-success\">Create new Invoice</button>\n        </li>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <app-invoice-item *ngIf=\"activeInvoice$\" [invoice]=\"(activeInvoice$ | async)\"></app-invoice-item>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature/products/src/lib/products/products.component.html":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/node_modules/raw-loader/dist/cjs.js!/home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/libs/feature/products/src/lib/products/products.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"center\">N</th>\n      <th class=\"center\">SKU</th>\n      <th>Item</th>\n\n      <th class=\"right\">Unit Cost</th>\n      <th class=\"right\">Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let product of products$ | async; let i = index\">\n      <td class=\"center\">{{i}}</td>\n      <td class=\"center\">{{product.code}}</td>\n      <td class=\"left\">{{product.name}}</td>\n\n      <td class=\"right\">\n        <input (change)=\"updateProduct(product.id, {price: $event.target.valueAsNumber})\" [ngModel]=\"product.price\"\n               class=\"form-control\"\n               type=\"number\">\n      </td>\n      <td class=\"right\">\n        <button (click)=\"removeProduct(product.id)\" class=\"btn btn-danger\">Delete</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">SmarterBill</a>\n  <button aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n          class=\"navbar-toggler\" data-target=\"#navbarSupportedContent\" data-toggle=\"collapse\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"'invoices'\" class=\"nav-link\" href=\"#\">Invoices</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"'products'\" class=\"nav-link\" href=\"#\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"'clients'\" class=\"nav-link\" href=\"#\">Clients</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input aria-label=\"Search\" class=\"form-control mr-sm-2\" placeholder=\"Global search\" type=\"search\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FuZ3VsYXItaW52b2ljZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-invoice';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'angular-invoice-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/logger-plugin */ "../../node_modules/@ngxs/logger-plugin/__ivy_ngcc__/fesm2015/ngxs-logger-plugin.js");
/* harmony import */ var _angular_invoice_feature_products_lib_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/products/products.component */ "../../libs/feature/products/src/lib/products/products.component.ts");
/* harmony import */ var _angular_invoice_feature_products_lib_products_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-invoice/feature/products/lib/products.module */ "../../libs/feature/products/src/lib/products.module.ts");
/* harmony import */ var _angular_invoice_feature_invoices_lib_invoices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/invoices.component */ "../../libs/feature/invoices/src/lib/invoices.component.ts");
/* harmony import */ var _angular_invoice_feature_invoices_lib_invoices_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-invoice/feature/invoices/lib/invoices.module */ "../../libs/feature/invoices/src/lib/invoices.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_invoice_feature_products_lib_products_module__WEBPACK_IMPORTED_MODULE_8__["ProductsModule"],
            _angular_invoice_feature_invoices_lib_invoices_module__WEBPACK_IMPORTED_MODULE_10__["InvoicesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                {
                    path: 'invoices',
                    component: _angular_invoice_feature_invoices_lib_invoices_component__WEBPACK_IMPORTED_MODULE_9__["InvoicesComponent"]
                    // loadChildren: () => import("@angular-invoice/feature/invoices/index").then(m => m.InvoicesModule),
                },
                {
                    path: 'products',
                    component: _angular_invoice_feature_products_lib_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]
                },
                {
                    path: 'clients',
                    loadChildren: () => __webpack_require__.e(/*! import() | angular-invoice-feature-clients-index */ "angular-invoice-feature-clients-index").then(__webpack_require__.bind(null, /*! @angular-invoice/feature/clients/index */ "../../libs/feature/clients/src/index.ts")).then(m => m.ClientsModule),
                }
            ]),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsLoggerPluginModule"].forRoot(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                selectorOptions: { injectContainerState: false, suppressErrors: false }
            }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/angular-invoice/angular-invoice/frontend/angular-invoice/apps/angular-invoice/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
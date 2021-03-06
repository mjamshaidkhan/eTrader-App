(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./src/app/orders/order-detailed/order-detailed.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/orders/order-detailed/order-detailed.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailedComponent", function() { return OrderDetailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/basket-summary/basket-summary.component */ "./src/app/shared/components/basket-summary/basket-summary.component.ts");
/* harmony import */ var _shared_components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/order-totals/order-totals.component */ "./src/app/shared/components/order-totals/order-totals.component.ts");








function OrderDetailedComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-basket-summary", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-order-totals", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("items", ctx_r89.order.orderItems)("isBasket", false)("isOrder", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("shippingPrice", ctx_r89.order.total - ctx_r89.order.subtotal)("subtotal", ctx_r89.order.subtotal)("total", ctx_r89.order.total);
} }
class OrderDetailedComponent {
    constructor(route, breadcrumbService, ordersService) {
        this.route = route;
        this.breadcrumbService = breadcrumbService;
        this.ordersService = ordersService;
        this.breadcrumbService.set('@OrderDetails', '');
    }
    ngOnInit() {
        //this.getOrderDetails();
        this.ordersService.getOrderDetails(+this.route.snapshot.paramMap.get('id'))
            .subscribe((order) => {
            this.order = order;
            this.breadcrumbService.set('@OrderDetails', `Order# ${order.id} - ${order.status}`);
        }, error => {
            console.log(error);
        });
    }
    getOrderDetails() {
        // this.ordersService.getOrderDetails(+this.route.snapshot.paramMap.get('id'))
        // .subscribe((order: IOrder) => {
        //   this.order = order;
        //   this.breadcrumbService.set('@OrderDetails', `Order# ${order.id} - ${order.status}`);
        // }, error => {
        //   console.log(error);
        // });
    }
}
OrderDetailedComponent.??fac = function OrderDetailedComponent_Factory(t) { return new (t || OrderDetailedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"])); };
OrderDetailedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrderDetailedComponent, selectors: [["app-order-detailed"]], decls: 2, vars: 1, consts: [[1, "container", "mt-5"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-8"], [3, "items", "isBasket", "isOrder"], [1, "col-4"], [3, "shippingPrice", "subtotal", "total"]], template: function OrderDetailedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderDetailedComponent_div_1_Template, 5, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.order);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_5__["BasketSummaryComponent"], _shared_components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1kZXRhaWxlZC9vcmRlci1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderDetailedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-detailed',
                templateUrl: './order-detailed.component.html',
                styleUrls: ['./order-detailed.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"] }, { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detailed/order-detailed.component */ "./src/app/orders/order-detailed/order-detailed.component.ts");






const routes = [
    { path: '', component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"] },
    { path: ':id', component: _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailedComponent"], data: { breadcrumb: { alias: 'OrderDetails' } } }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function OrdersComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const order_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/orders/", order_r88.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("# ", order_r88.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](5, 5, order_r88.orderDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 8, order_r88.total, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](order_r88.status);
} }
class OrdersComponent {
    constructor(ordersService, toastr) {
        this.ordersService = ordersService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.getOrders();
    }
    getOrders() {
        this.ordersService.getOrdersForUser().subscribe((orders) => {
            this.orders = orders;
            this.toastr.success('Orders successfully retrieved');
        }, (error) => {
            this.toastr.error('Error occurred while retrieving orders');
        });
    }
}
OrdersComponent.??fac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
OrdersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 16, vars: 1, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-12"], [1, "table", "table-hover", 2, "cursor", "pointer"], [1, "thead-light"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, OrdersComponent_tr_15_Template, 11, 11, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orders',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.scss']
            }]
    }], function () { return [{ type: _orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detailed/order-detailed.component */ "./src/app/orders/order-detailed/order-detailed.component.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class OrdersModule {
}
OrdersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: OrdersModule });
OrdersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function OrdersModule_Factory(t) { return new (t || OrdersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrdersModule, { declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"], _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"], _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailedComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/orders/orders.service.ts":
/*!******************************************!*\
  !*** ./src/app/orders/orders.service.ts ***!
  \******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class OrdersService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getOrdersForUser() {
        return this.http.get(this.baseUrl + 'orders');
    }
    getOrderDetails(id) {
        return this.http.get(this.baseUrl + 'orders/' + id);
    }
}
OrdersService.??fac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrdersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: OrdersService, factory: OrdersService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map
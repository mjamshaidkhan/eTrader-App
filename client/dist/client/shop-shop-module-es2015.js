(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./src/app/shared/models/ShopParams.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/ShopParams.ts ***!
  \*********************************************/
/*! exports provided: ShopParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopParams", function() { return ShopParams; });
class ShopParams {
    constructor() {
        this.brandId = 0;
        this.typeId = 0;
        this.sort = 'priceAsc';
        this.pageNumber = 1;
        this.pageSize = 10;
    }
}


/***/ }),

/***/ "./src/app/shared/models/pagination.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/pagination.ts ***!
  \*********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
class Pagination {
    constructor() {
        this.data = [];
    }
}


/***/ }),

/***/ "./src/app/shop/product-details/product-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shop.service */ "./src/app/shop/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ProductDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_i_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_i_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.addItemToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r60.product.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r60.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx_r60.product.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.product.description);
} }
class ProductDetailsComponent {
    constructor(shopService, activatedRoute, bcService, basketService) {
        this.shopService = shopService;
        this.activatedRoute = activatedRoute;
        this.bcService = bcService;
        this.basketService = basketService;
        this.quantity = 1;
        this.bcService.set('@productDetails', '');
    }
    ngOnInit() {
        this.loadProduct();
    }
    addItemToCart() {
        this.basketService.addItemToBasket(this.product, this.quantity);
    }
    incrementQuantity() {
        this.quantity++;
    }
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    loadProduct() {
        this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
            this.product = product;
            this.bcService.set('@productDetails', product.name);
        }, err => console.log(err));
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 2, vars: 1, consts: [[1, "container", "mt-5"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-6"], [1, "img-fluid", "w-100", 3, "src", "alt"], [2, "font-size", "2em"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "fa", "fa-minus-circle", "text-warning", "mr-2", 2, "cursor", "pointer", "font-size", "2em", 3, "click"], [1, "font-weight-bold", 2, "font-size", "1.5em"], [1, "fa", "fa-plus-circle", "text-warning", "mx-2", 2, "cursor", "pointer", "font-size", "2em", 3, "click"], [1, "btn", "btn-outline-primary", "btn-lg", "ml-4", 3, "click"], [1, "col-12", "ml-3"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_div_1_Template, 24, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"] }, { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shop/product-item/product-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class ProductItemComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-product-item"]], inputs: { product: "product" }, decls: 14, vars: 9, consts: [[1, "card", "h-100", "shadow-sm"], [1, "image", "position-relative;", 2, "cursor", "pointer"], [1, "img-fluid", "bg-light", 3, "src", "alt"], [1, "d-flex", "align-items-center", "justify-content-center", "hover-overlay"], ["type", "button", 1, "btn", "btn-primary", "fa", "fa-shopping-cart", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-body", "d-flex", "flex-column"], [3, "routerLink"], [1, "text-uppercase"], [1, "mb-2", 2, "font-size", "1.5em"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_4_listener() { return ctx.addItemToBasket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, ctx.product.price, "INR"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".btn[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 40px;\n}\n\n.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  transform: none;\n  opacity: 1;\n}\n\n.hover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: all 0.5s;\n}\n\n.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  z-index: 1000;\n  transition: all 0.5s;\n}\n\n.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  transform: translateX(-20px);\n}\n\n.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type {\n  transform: translateX(20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vRTpcXFByb2plY3RzXFxlQ29tbWVyY2UtQXBwLW1hc3RlclxcZUNvbW1lcmNlLUFwcC1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc2hvcFxccHJvZHVjdC1pdGVtXFxwcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3AvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ0NSOztBREVJO0VBQ0ksNEJBQUE7QUNBUjs7QURHSTtFQUNJLDJCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmltYWdlIDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3Zlci1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB9XG5cbiAgICAmIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICB9XG5cbiAgICAmIGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgfVxufSIsIi5idG4ge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pbWFnZSA6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmltYWdlIDpob3ZlciBidXR0b24ge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ob3Zlci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uaG92ZXItb3ZlcmxheSBidXR0b24ge1xuICB6LWluZGV4OiAxMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5ob3Zlci1vdmVybGF5IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbn1cbi5ob3Zlci1vdmVybGF5IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-item',
                templateUrl: './product-item.component.html',
                styleUrls: ['./product-item.component.scss']
            }]
    }], function () { return [{ type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shop/shop-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/shop/product-details/product-details.component.ts");






const routes = [
    { path: '', component: _shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"] },
    { path: ':id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"], data: { breadcrumb: { alias: 'productDetails' } } },
];
class ShopRoutingModule {
}
ShopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopRoutingModule });
ShopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopRoutingModule_Factory(t) { return new (t || ShopRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopRoutingModule, [{
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

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_ShopParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/ShopParams */ "./src/app/shared/models/ShopParams.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.service */ "./src/app/shop/shop.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/paging-header/paging-header.component */ "./src/app/shared/components/paging-header/paging-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/shop/product-item/product-item.component.ts");
/* harmony import */ var _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/pager/pager.component */ "./src/app/shared/components/pager/pager.component.ts");









const _c0 = ["search"];
function ShopComponent_ng_container_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r11 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r8.shopParams.sort === sort_r11.value)("value", sort_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sort_r11.name, " ");
} }
function ShopComponent_ng_container_3_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_container_3_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const brand_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onBrandSelected(brand_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r12 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", brand_r12.id === ctx_r9.shopParams.brandId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", brand_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", brand_r12.name, " ");
} }
function ShopComponent_ng_container_3_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_container_3_li_12_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const type_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onTypeSelected(type_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", type_r15.id === ctx_r10.shopParams.typeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r15.name, " ");
} }
function ShopComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_container_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onSortSelected($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_ng_container_3_option_4_Template, 2, 3, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brands");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShopComponent_ng_container_3_li_8_Template, 2, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ShopComponent_ng_container_3_li_12_Template, 2, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.sortOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.brands);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.types);
} }
function ShopComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ShopComponent_div_7_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r25);
} }
function ShopComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pager", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function ShopComponent_div_10_Template_app_pager_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r7.shopParams.pageSize)("totalCount", ctx_r7.totalCount)("pageNumber", ctx_r7.shopParams.pageNumber);
} }
class ShopComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.sortOptions = [
            { name: 'Price: Low to High', value: 'priceAsc' },
            { name: 'Price: High to Low', value: 'priceDesc' },
            { name: 'Alphabetical', value: 'name' }
        ];
        this.shopParams = this.shopService.getShopParams();
    }
    ngOnInit() {
        this.getProducts(true);
        this.getBrands();
        this.getTypes();
    }
    getProducts(useCache = false) {
        this.shopService.getProducts(useCache).subscribe(res => {
            this.products = res.data;
            this.totalCount = res.count;
        }, error => {
            console.log(error);
        });
    }
    getBrands() {
        this.shopService.getBrands().subscribe(res => {
            // Spread operators help to spread all objects. Plus one can add additional one on top of existing ones
            this.brands = [{ id: 0, name: 'All' }, ...res];
        }, error => {
            console.log(error);
        });
    }
    getTypes() {
        this.shopService.getTypes().subscribe(res => {
            this.types = [{ id: 0, name: 'All' }, ...res];
        }, error => {
            console.log(error);
        });
    }
    onBrandSelected(brandId) {
        const params = this.shopService.getShopParams();
        params.brandId = brandId;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onTypeSelected(typeId) {
        const params = this.shopService.getShopParams();
        params.typeId = typeId;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onSortSelected(sort) {
        const params = this.shopService.getShopParams();
        params.sort = sort;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onPageChanged(event) {
        const params = this.shopService.getShopParams();
        if (params.pageNumber !== event) {
            params.pageNumber = event;
            this.shopService.setShopParams(params);
            this.getProducts(true);
        }
    }
    onSearch() {
        const params = this.shopService.getShopParams();
        params.search = this.searchTerm.nativeElement.value;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onReset() {
        this.searchTerm.nativeElement.value = '';
        this.shopParams = new _shared_models_ShopParams__WEBPACK_IMPORTED_MODULE_1__["ShopParams"]();
        this.shopService.setShopParams(this.shopParams);
        this.getProducts();
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], viewQuery: function ShopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchTerm = _t.first);
    } }, decls: 11, vars: 7, consts: [[1, "container", "mt-3"], [1, "row"], [1, "col-3"], [4, "ngIf"], [1, "col-9"], [1, "d-flex", "justify-content-between", "align-items-center", "pb-2"], [3, "totalCount", "pageSize", "pageNumber"], ["class", "form-inline", 4, "ngIf"], ["class", "col-4 mb-4", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "text-primary", "ml-3", "mt-4", "mb-3"], [1, "custom-select", "mb-4", 3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "text-primary", "ml-3"], [1, "list-group", "my-3"], ["class", "list-group-item", 3, "active", "value", "click", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [1, "list-group-item", 3, "value", "click"], [1, "form-inline"], ["placeholder", "Search", "type", "text", 1, "form-control", "mr-2", 2, "width", "300px", 3, "keyup.enter"], ["search", ""], [1, "btn", "btn-outline-primary", "my-2", 3, "click"], [1, "btn", "btn-outline-success", "ml-2", "my-2", 3, "click"], [1, "col-4", "mb-4"], [3, "product"], [1, "d-flex", "justify-content-center"], [3, "pageSize", "totalCount", "pageNumber", "pageChanged"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShopComponent_ng_container_3_Template, 13, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-paging-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShopComponent_div_7_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShopComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ShopComponent_div_10_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.types && ctx.brands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalCount", ctx.totalCount)("pageSize", ctx.shopParams.pageSize)("pageNumber", ctx.shopParams.pageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemComponent"], _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_7__["PagerComponent"]], styles: [".list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1.1em;\n}\n.list-group-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.list-group-item[_ngcontent-%COMP%]:active {\n  border-radius: 10px;\n}\n.list-group-item[_ngcontent-%COMP%]:not(.active):hover {\n  color: #fff;\n  background-color: #2780E3;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9FOlxcUHJvamVjdHNcXGVDb21tZXJjZS1BcHAtbWFzdGVyXFxlQ29tbWVyY2UtQXBwLW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzaG9wXFxzaG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc4MEUzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn0iLCIubGlzdC1ncm91cC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5saXN0LWdyb3VwLWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxpc3QtZ3JvdXAtaXRlbTphY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbTpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3ODBFMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.scss']
            }]
    }], function () { return [{ type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }]; }, { searchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shop/shop.module.ts":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/shop/product-item/product-item.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/shop/product-details/product-details.component.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/shop/shop-routing.module.ts");








class ShopModule {
}
ShopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopModule });
ShopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopModule_Factory(t) { return new (t || ShopModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"],
        _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"],
        _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"],
                    _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"],
                    _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shop/shop.service.ts":
/*!**************************************!*\
  !*** ./src/app/shop/shop.service.ts ***!
  \**************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/pagination */ "./src/app/shared/models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_ShopParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/ShopParams */ "./src/app/shared/models/ShopParams.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








class ShopService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:5001/api/';
        // for caching
        this.products = [];
        this.brands = [];
        this.types = [];
        this.pagination = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_2__["Pagination"]();
        this.shopParams = new _shared_models_ShopParams__WEBPACK_IMPORTED_MODULE_4__["ShopParams"]();
    }
    getProducts(useCache) {
        if (useCache === false) {
            this.products = [];
        }
        if (this.products.length > 0 && useCache === true) {
            const pagesReceived = Math.ceil(this.products.length / this.shopParams.pageSize);
            if (this.shopParams.pageNumber <= pagesReceived) {
                this.pagination.data = this.products.slice((this.shopParams.pageNumber - 1) *
                    this.shopParams.pageSize, this.shopParams.pageNumber * this.shopParams.pageSize);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.pagination);
            }
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (this.shopParams.brandId !== 0) {
            params = params.append('brandId', this.shopParams.brandId.toString());
        }
        if (this.shopParams.typeId !== 0) {
            params = params.append('typeId', this.shopParams.typeId.toString());
        }
        params = params.append('sort', this.shopParams.sort);
        params = params.append('pageIndex', this.shopParams.pageNumber.toString());
        params = params.append('pageIndex', this.shopParams.pageSize.toString());
        if (this.shopParams.search) {
            params = params.append('search', this.shopParams.search);
        }
        return this.http.get(this.baseUrl + 'products', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            // Filled array once all products loaded
            // will append the new set of data with existing set
            this.products = [...this.products, ...response.body.data];
            this.pagination = response.body;
            return this.pagination;
        }));
    }
    setShopParams(params) {
        this.shopParams = params;
    }
    getShopParams() {
        return this.shopParams;
    }
    getProduct(id) {
        // basically angular components throw everything once we switch to another component...
        // Hence, returning from service is best way to stay efficient
        // Then once by id product is accessed, it gets retrieved from products array directly as a cached result.
        const product = this.products.find(p => p.id === id);
        if (product) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(product);
        }
        return this.http.get(this.baseUrl + 'products/' + id);
    }
    getBrands() {
        // returning from service
        if (this.brands.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.brands);
        }
        return this.http.get(this.baseUrl + 'products/brands').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            // filled brands
            this.brands = response;
            return response;
        }));
    }
    getTypes() {
        if (this.types.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.types);
        }
        return this.http.get(this.baseUrl + 'products/types').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            // Filled types
            this.types = response;
            return response;
        }));
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=shop-shop-module-es2015.js.map
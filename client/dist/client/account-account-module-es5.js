function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./src/app/account/account-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/account-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AccountRoutingModule */

  /***/
  function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
      return AccountRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/account/register/register.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }];

    var AccountRoutingModule =
    /*#__PURE__*/
    _createClass(function AccountRoutingModule() {
      _classCallCheck(this, AccountRoutingModule);
    });

    AccountRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AccountRoutingModule
    });
    AccountRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AccountRoutingModule_Factory(t) {
        return new (t || AccountRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AccountRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/account/register/register.component.ts");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/account/account-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AccountModule =
    /*#__PURE__*/
    _createClass(function AccountModule() {
      _classCallCheck(this, AccountModule);
    });

    AccountModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AccountModule
    });
    AccountModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AccountModule_Factory(t) {
        return new (t || AccountModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AccountModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/account/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccountLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/text-input/text-input.component */
    "./src/app/shared/components/text-input/text-input.component.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(accountService, router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
          this.createLoginForm();
        }
      }, {
        key: "createLoginForm",
        value: function createLoginForm() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.accountService.login(this.loginForm.value).subscribe(function () {
            _this.router.navigateByUrl(_this.returnUrl);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 10,
      vars: 5,
      consts: [[1, "d-flex", "justify-content-center", "mt-5"], [1, "col-3"], [3, "formGroup", "ngSubmit"], [1, "text-center", "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["formControlName", "email", 3, "label"], ["formControlName", "password", 3, "label", "type"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-text-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-text-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("label", "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("label", "Password")("type", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loginForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/register/register.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account/register/register.component.ts ***!
    \********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAccountRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/text-input/text-input.component */
    "./src/app/shared/components/text-input/text-input.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_ul_9_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var err_r92 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", err_r92, " ");
      }
    }

    function RegisterComponent_ul_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_ul_9_li_1_Template, 2, 1, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r90.errors);
      }
    }

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(formBuilder, accountService, router) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createRegisterForm();
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          this.registerForm = this.formBuilder.group({
            displayName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')], // async validators will be called once sync validators passed
            [this.chackUniqueMail()]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.accountService.register(this.registerForm.value).subscribe(function () {
            _this2.router.navigateByUrl('/shop');
          }, function (err) {
            console.log(err);
            _this2.errors = err.errors;
          });
        }
      }, {
        key: "chackUniqueMail",
        value: function chackUniqueMail() {
          var _this3 = this;

          // we are returning inner observable to outer Observable which is control via switch map
          return function (control) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              if (!control.value) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
              }

              return _this3.accountService.checkEmailExists(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                return res ? {
                  emailExists: true
                } : null;
              }));
            }));
          };
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.??fac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 12,
      vars: 7,
      consts: [[1, "d-flex", "justify-content-center", "mt-5"], [1, "col-3"], [3, "formGroup", "ngSubmit"], [1, "text-center", "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["formControlName", "displayName", 3, "label"], ["formControlName", "email", 3, "label"], ["formControlName", "password", 3, "label", "type"], ["class", "text-danger list-unstyled", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"], [1, "text-danger", "list-unstyled"], [4, "ngFor", "ngForOf"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-text-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-text-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-text-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RegisterComponent_ul_9_Template, 2, 1, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("label", "Display Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("label", "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("label", "Password")("type", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.registerForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map
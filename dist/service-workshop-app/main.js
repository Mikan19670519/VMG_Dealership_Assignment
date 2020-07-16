(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/bookings/bookings-base.service */ "./src/app/core/services/bookings/bookings-base.service.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/bookings/bookings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
        this.title = 'service-workshop-app';
    }
    ngOnInit() {
        this.listIsLoading$ = this.bookingsService.listIsLoading$;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_1__["BookingsBaseService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [3, "value", "listIsLoading"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bookings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Test")("listIsLoading", ctx.listIsLoading$);
    } }, directives: [_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_2__["BookingsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["app-top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background-color: #1976d2;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\napp-top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n}\n\n.fancy-button[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: #ffffff;\n  border-radius: 4px;\n}\n\n.fancy-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #1976d2;\n  padding-right: 4px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUMvSUE7O0FEa0pBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUMvSUY7O0FEa0pBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMvSUo7O0FEa0pFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDL0lKOztBRGtKRTtFQUNFLGVBQUE7QUMvSUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi91dGlscy5zY3NzJztcclxuXHJcblxyXG4kZ3JheS1iYXNlOiAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXHJcbiRncmF5LWRhcms6ICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDIwJSkgIWRlZmF1bHQ7ICAgLy8gIzMzM1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDkzLjUlKSAhZGVmYXVsdDsgLy8gI2VlZVxyXG5cclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCMwMDc5YzIsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICMwMDIzMDAgIWRlZmF1bHQ7XHJcbiRicmFuZC1pbmZvOiAgICAgICAgICAgICMyMjQ0OTkgIWRlZmF1bHQ7XHJcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICM3RDY0MDAgIWRlZmF1bHQ7XHJcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICMzMjAwMDAgIWRlZmF1bHQ7XHJcblxyXG4kYmx1ZTogIzQyQ0FGRDtcclxuJHJlZDogI0UwNDI0MjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG5cclxuJHNlY29uZGFyeTogI0M3Q0VENTtcclxuJGRhbmdlcjogI0UwNDI0MjtcclxuJGxpZ2h0OiAkd2hpdGU7XHJcbiRyZXBvcnQtZ3JleTogI0Q4RDhEODtcclxuXHJcbiRkaXNjbGFpbWVyLWJhY2tncm91bmQ6ICM5NkM1RTg7XHJcbiRyZXBvcnQtbmF2YmFyLXRvZ2dsZS1iYWNrZ3JvdW5kOiAjOTZDNUU4O1xyXG4kcmVwb3J0LW1lbnUtaXRlbS1jb2xvcjogIzAwNjVCMztcclxuJHJlcG9ydC1yZWQ6ICNGRjJDMkQ7XHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4kaGVhZGluZy1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuXHJcblxyXG4vLz09IE5hdmJhclxyXG4kbmF2YmFyLXBhZGRpbmcteTogcmVtKDIwcHgpO1xyXG4kbmF2YmFyLXBhZGRpbmcteDogcmVtKDApO1xyXG5cclxuLy89PSBOYXZzXHJcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogYmxhY2s7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogcmVtKDE2cHgpO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogcmVtKDExcHgpO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogcmVtKDMzcHgpO1xyXG4kYnRuLWZvbnQtc2l6ZTogcmVtKDE2cHgpO1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IHJlbSg4cHgpO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLz09IEJ1dHRvbnMgKyBGb3Jtc1xyXG4vL1xyXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuJGlucHV0LXBhZGRpbmcteTogcmVtKDEycHgpO1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW0oMTZweCk7XHJcbiRpbnB1dC1jb2xvcjogYmxhY2s7XHJcbiRpbnB1dC1oZWlnaHQtaW5uZXI6IHJlbSg0OHB4KTtcclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogJyc7XHJcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogJyc7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGgtZm9jdXNlZDogMXB4O1xyXG4kb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogMDtcclxuXHJcbi8vPT0gQWxlcnRcclxuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRhbGVydC1wYWRkaW5nLXg6IDAuOTVyZW07XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6IDI7XHJcbiRhbGVydC1iZy1sZXZlbDogLTEwO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vLz09IFRvb2x0aXBzXHJcbiR0b29sdGlwLWJnOiBibGFjaztcclxuJHRvb2x0aXAtb3BhY2l0eTogMTtcclxuJHRvb2x0aXAtcGFkZGluZy15OiByZW0oMTJweCk7XHJcbiR0b29sdGlwLXBhZGRpbmcteDogcmVtKDEycHgpO1xyXG4kdG9vbHRpcC1mb250LXNpemU6IHJlbSgxMnB4KTtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6IG5vbmU7XHJcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6IHJlbSgxMnB4KTtcclxuXHJcbi8vPT0gTW9kYWxzXHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAjQzdDRUQ1O1xyXG5cclxuLy89PSBDbG9zZVxyXG4kY2xvc2UtdGV4dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLz09IERyb3Bkb3duc1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogZ3JleS1saXRlO1xyXG5cclxuXHJcbi8vID09IENhcmRzXHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuJGNhcmQtYm9yZGVyLWNvbG9yOiBncmV5LWxpdGU7XHJcbiRjYXJkLWNhcC1iZzogJHdoaXRlO1xyXG5cclxuLy89PSBQcm9ncmVzcyBiYXJzXHJcblxyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogcmVtKDI4cHgpO1xyXG5cclxuLy89PSBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgICAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgeHM6IDAsXHJcbiAgICAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206IDYwMHB4LFxyXG4gICAgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbWQ6IDk2MHB4LFxyXG4gICAgLy8gTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgbGc6IDE0NDBweCxcclxuICAgIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxyXG4gICAgeGw6IDE5MjBweFxyXG4pO1xyXG5cclxuLy8gQ29sb3IgY29udHJhc3RcclxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogIDE3MDtcclxuXHJcbi8vQm94LXNoYWRvd3NcclxuJHotZGVwdGgtMS1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiR6LWRlcHRoLTEtaGFsZi1ib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiR6LWRlcHRoLTItaGFsZi1ib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kei1kZXB0aC0zLWhhbGYtYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR6LWRlcHRoLTQtaGFsZi1ib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR6LWRlcHRoLTUtaGFsZi1ib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJGJvdHRvbS1ib3gtc2hhZG93OiAwIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMXB4IDIycHggMTNweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4vL2VuZFBnZUhyXHJcbiRlbmRQZ2VIcjogd2lkdGgoNTAwcHgpLCBtYXJnaW4tdG9wKDMwcHgpO1xyXG5cclxuLy8gbG9hZGVyXHJcbiRsb2FkaW5nLS13aWR0aDogMjUwcHg7XHJcbiRsb2FkaW5nLWRvdC0tc2l6ZTogMjBweDtcclxuXHJcbmFwcC10b3AtYmFyIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNjhweDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxucGFkZGluZzogMTZweDtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IHJvdztcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hcHAtdG9wLWJhciBoMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZhbmN5LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYW5jeS1idXR0b24gaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuIiwiYXBwLXRvcC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmFwcC10b3AtYmFyIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG59XG5cbi5mYW5jeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmFuY3ktYnV0dG9uIGkubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDM0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_1__["BookingsBaseService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/bookings/bookings-base.service */ "./src/app/core/services/bookings/bookings-base.service.ts");
/* harmony import */ var _core_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/bookings/bookings.service */ "./src/app/core/services/bookings/bookings.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/bookings/bookings.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookings-list/bookings-list.component */ "./src/app/bookings-list/bookings-list.component.ts");
/* harmony import */ var _booking_component_booking_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./booking-component/booking-component.component */ "./src/app/booking-component/booking-component.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_5__["BookingsBaseService"],
            useClass: _core_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_6__["BookingsService"]
        }
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_9__["BookingsComponent"],
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"],
        _bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_11__["BookingsListComponent"],
        _booking_component_booking_component_component__WEBPACK_IMPORTED_MODULE_12__["BookingComponentComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_9__["BookingsComponent"],
                    _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"],
                    _bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_11__["BookingsListComponent"],
                    _booking_component_booking_component_component__WEBPACK_IMPORTED_MODULE_12__["BookingComponentComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [
                    {
                        provide: _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_5__["BookingsBaseService"],
                        useClass: _core_services_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_6__["BookingsService"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/booking-component/booking-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/booking-component/booking-component.component.ts ***!
  \******************************************************************/
/*! exports provided: BookingComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponentComponent", function() { return BookingComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BookingComponentComponent_app_field_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-field-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.validationMessage, "\n");
} }
class BookingComponentComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lostFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onFocus() {
        this.onTouched();
    }
    onBlur() {
        this.lostFocus.emit(this);
    }
}
BookingComponentComponent.ɵfac = function BookingComponentComponent_Factory(t) { return new (t || BookingComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
BookingComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingComponentComponent, selectors: [["app-booking-component"]], inputs: { controlId: "controlId", notes: "notes", bookingDate: "bookingDate", booking: "booking", validationMessage: "validationMessage" }, outputs: { valueChange: "valueChange", lostFocus: "lostFocus" }, decls: 4, vars: 2, consts: [[4, "ngIf"]], template: function BookingComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "booking-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookingComponentComponent_app_field_error_3_Template, 2, 1, "app-field-error", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.notes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWNvbXBvbmVudC9ib29raW5nLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking-component',
                templateUrl: './booking-component.component.html',
                styleUrls: ['./booking-component.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { controlId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bookingDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], booking: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], validationMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], lostFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/bookings-list/bookings-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/bookings-list/bookings-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BookingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsListComponent", function() { return BookingsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["dp1"];
const _c1 = ["dp2"];
function BookingsListComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r4, " ");
} }
function BookingsListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "build_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const booking_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r5.bookingDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r5.clientId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r5.vehicleId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r5.notes, " ");
} }
class BookingsListComponent {
    constructor(calendar) {
        this.calendar = calendar;
        this.headers = ["ID", "Booking Date", "Client", "Vehilce", "Notes", ""];
        this.searchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lostFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    navigateStartEvent(event) {
        this.startdate = event.next;
    }
    navigateEndEvent(event) {
        this.enddate = event.next;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onFocus() {
        this.onTouched();
    }
    onBlur() {
        this.lostFocus.emit(this);
    }
    onSearchClick(startDate, endDate) {
        this.searchClick.emit({ start: startDate, end: endDate });
    }
}
BookingsListComponent.ɵfac = function BookingsListComponent_Factory(t) { return new (t || BookingsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"])); };
BookingsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingsListComponent, selectors: [["app-bookings-list"]], viewQuery: function BookingsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dp1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dp2 = _t.first);
    } }, inputs: { bookingsList: "bookingsList" }, outputs: { searchClick: "searchClick", lostFocus: "lostFocus" }, decls: 32, vars: 4, consts: [[1, "row"], [1, "form-group", "col-md-3", "d-inline"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp1", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dp1", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", "fa", "fa-calendar", 3, "click"], ["placeholder", "yyyy-mm-dd", "name", "dp2", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dp2", "ngbDatepicker"], [1, "col-md-3", "d-inline"], [1, "btn", "fancy-button", 3, "click"], [1, "col-md-9", "d-inline", 2, "text-align", "right"], [1, "btn", "fancy-button"], ["id", "bookings"], [4, "ngFor", "ngForOf"], [1, "material-icons"]], template: function BookingsListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingsListComponent_Template_input_ngModelChange_8_listener($event) { return ctx.modelStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingsListComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingsListComponent_Template_input_ngModelChange_16_listener($event) { return ctx.modelEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingsListComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingsListComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.onSearchClick({ startDate: _r0.value }, { endDate: _r1.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Add Booking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BookingsListComponent_th_30_Template, 2, 1, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BookingsListComponent_tr_31_Template, 16, 5, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookingsList);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["app-top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background-color: #1976d2;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\napp-top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n}\n\n.fancy-button[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: #ffffff;\n  border-radius: 4px;\n}\n\n.fancy-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #1976d2;\n  padding-right: 4px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #1976d2;\n  font-weight: bold;\n}\n\n#bookings[_ngcontent-%COMP%] {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#bookings[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #bookings[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px sold #ddd;\n  padding: 3px 10px 3px 10px;\n}\n\n#bookings[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2ff;\n}\n\n#bookings[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n#bookings[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: lightblue;\n}\n\n#bookings[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-right: 5px;\n}\n\n#bookings[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover {\n  display: initial;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  text-decoration: none;\n  display: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyIsImJvb2tpbmdzLWxpc3QvYm9va2luZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUMvSUE7O0FEa0pBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUMvSUY7O0FEa0pBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMvSUo7O0FEa0pFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDL0lKOztBRGtKRTtFQUNFLGVBQUE7QUMvSUo7O0FBMUJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUE2Qko7O0FBMUJBO0VBQ0ksd0VBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUE2Qko7O0FBMUJBO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtBQTZCSjs7QUExQkE7RUFDSSx5QkFBQTtBQTZCSjs7QUExQkE7RUFDSSxzQkFBQTtBQTZCSjs7QUExQkE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQTZCQTs7QUExQkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUE2Qko7O0FBMUJFO0VBQ0UsZ0JBQUE7QUE2Qko7O0FBMUJFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUE2QkoiLCJmaWxlIjoiYm9va2luZ3MtbGlzdC9ib29raW5ncy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi91dGlscy5zY3NzJztcclxuXHJcblxyXG4kZ3JheS1iYXNlOiAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXHJcbiRncmF5LWRhcms6ICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDIwJSkgIWRlZmF1bHQ7ICAgLy8gIzMzM1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDkzLjUlKSAhZGVmYXVsdDsgLy8gI2VlZVxyXG5cclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCMwMDc5YzIsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XHJcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICMwMDIzMDAgIWRlZmF1bHQ7XHJcbiRicmFuZC1pbmZvOiAgICAgICAgICAgICMyMjQ0OTkgIWRlZmF1bHQ7XHJcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICM3RDY0MDAgIWRlZmF1bHQ7XHJcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICMzMjAwMDAgIWRlZmF1bHQ7XHJcblxyXG4kYmx1ZTogIzQyQ0FGRDtcclxuJHJlZDogI0UwNDI0MjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG5cclxuJHNlY29uZGFyeTogI0M3Q0VENTtcclxuJGRhbmdlcjogI0UwNDI0MjtcclxuJGxpZ2h0OiAkd2hpdGU7XHJcbiRyZXBvcnQtZ3JleTogI0Q4RDhEODtcclxuXHJcbiRkaXNjbGFpbWVyLWJhY2tncm91bmQ6ICM5NkM1RTg7XHJcbiRyZXBvcnQtbmF2YmFyLXRvZ2dsZS1iYWNrZ3JvdW5kOiAjOTZDNUU4O1xyXG4kcmVwb3J0LW1lbnUtaXRlbS1jb2xvcjogIzAwNjVCMztcclxuJHJlcG9ydC1yZWQ6ICNGRjJDMkQ7XHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4kaGVhZGluZy1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuXHJcblxyXG4vLz09IE5hdmJhclxyXG4kbmF2YmFyLXBhZGRpbmcteTogcmVtKDIwcHgpO1xyXG4kbmF2YmFyLXBhZGRpbmcteDogcmVtKDApO1xyXG5cclxuLy89PSBOYXZzXHJcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogYmxhY2s7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogcmVtKDE2cHgpO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogcmVtKDExcHgpO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogcmVtKDMzcHgpO1xyXG4kYnRuLWZvbnQtc2l6ZTogcmVtKDE2cHgpO1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IHJlbSg4cHgpO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLz09IEJ1dHRvbnMgKyBGb3Jtc1xyXG4vL1xyXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuJGlucHV0LXBhZGRpbmcteTogcmVtKDEycHgpO1xyXG4kaW5wdXQtcGFkZGluZy14OiByZW0oMTZweCk7XHJcbiRpbnB1dC1jb2xvcjogYmxhY2s7XHJcbiRpbnB1dC1oZWlnaHQtaW5uZXI6IHJlbSg0OHB4KTtcclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogJyc7XHJcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogJyc7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGgtZm9jdXNlZDogMXB4O1xyXG4kb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogMDtcclxuXHJcbi8vPT0gQWxlcnRcclxuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRhbGVydC1wYWRkaW5nLXg6IDAuOTVyZW07XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6IDI7XHJcbiRhbGVydC1iZy1sZXZlbDogLTEwO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vLz09IFRvb2x0aXBzXHJcbiR0b29sdGlwLWJnOiBibGFjaztcclxuJHRvb2x0aXAtb3BhY2l0eTogMTtcclxuJHRvb2x0aXAtcGFkZGluZy15OiByZW0oMTJweCk7XHJcbiR0b29sdGlwLXBhZGRpbmcteDogcmVtKDEycHgpO1xyXG4kdG9vbHRpcC1mb250LXNpemU6IHJlbSgxMnB4KTtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6IG5vbmU7XHJcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6IHJlbSgxMnB4KTtcclxuXHJcbi8vPT0gTW9kYWxzXHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAjQzdDRUQ1O1xyXG5cclxuLy89PSBDbG9zZVxyXG4kY2xvc2UtdGV4dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLz09IERyb3Bkb3duc1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogZ3JleS1saXRlO1xyXG5cclxuXHJcbi8vID09IENhcmRzXHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuJGNhcmQtYm9yZGVyLWNvbG9yOiBncmV5LWxpdGU7XHJcbiRjYXJkLWNhcC1iZzogJHdoaXRlO1xyXG5cclxuLy89PSBQcm9ncmVzcyBiYXJzXHJcblxyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogcmVtKDI4cHgpO1xyXG5cclxuLy89PSBHcmlkIGJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgICAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgeHM6IDAsXHJcbiAgICAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206IDYwMHB4LFxyXG4gICAgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbWQ6IDk2MHB4LFxyXG4gICAgLy8gTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgbGc6IDE0NDBweCxcclxuICAgIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxyXG4gICAgeGw6IDE5MjBweFxyXG4pO1xyXG5cclxuLy8gQ29sb3IgY29udHJhc3RcclxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogIDE3MDtcclxuXHJcbi8vQm94LXNoYWRvd3NcclxuJHotZGVwdGgtMS1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiR6LWRlcHRoLTEtaGFsZi1ib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiR6LWRlcHRoLTItaGFsZi1ib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kei1kZXB0aC0zLWhhbGYtYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR6LWRlcHRoLTQtaGFsZi1ib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR6LWRlcHRoLTUtaGFsZi1ib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJGJvdHRvbS1ib3gtc2hhZG93OiAwIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDAgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMXB4IDIycHggMTNweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4vL2VuZFBnZUhyXHJcbiRlbmRQZ2VIcjogd2lkdGgoNTAwcHgpLCBtYXJnaW4tdG9wKDMwcHgpO1xyXG5cclxuLy8gbG9hZGVyXHJcbiRsb2FkaW5nLS13aWR0aDogMjUwcHg7XHJcbiRsb2FkaW5nLWRvdC0tc2l6ZTogMjBweDtcclxuXHJcbmFwcC10b3AtYmFyIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNjhweDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxucGFkZGluZzogMTZweDtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IHJvdztcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hcHAtdG9wLWJhciBoMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZhbmN5LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYW5jeS1idXR0b24gaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuIiwiYXBwLXRvcC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmFwcC10b3AtYmFyIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG59XG5cbi5mYW5jeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmFuY3ktYnV0dG9uIGkubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzE5NzZkMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNib29raW5ncyB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYm9va2luZ3MgdGQsICNib29raW5ncyB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGQgI2RkZDtcbiAgcGFkZGluZzogM3B4IDEwcHggM3B4IDEwcHg7XG59XG5cbiNib29raW5ncyB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmZmO1xufVxuXG4jYm9va2luZ3MgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4jYm9va2luZ3MgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuI2Jvb2tpbmdzIC5tYXRlcmlhbC1pY29ucyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4jYm9va2luZ3MgLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbml0aWFsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bookings-list',
                templateUrl: './bookings-list.component.html',
                styleUrls: ['./bookings-list.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }]; }, { dp1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dp1']
        }], dp2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dp2']
        }], bookingsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], lostFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/bookings/bookings.component.ts":
/*!************************************************!*\
  !*** ./src/app/bookings/bookings.component.ts ***!
  \************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/bookings/bookings-base.service */ "./src/app/core/services/bookings/bookings-base.service.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookings-list/bookings-list.component */ "./src/app/bookings-list/bookings-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class BookingsComponent {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
        this.searchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.bookingsService.loadData();
        this.bookingsList$ = this.bookingsService.bookings$;
    }
    onSearchClick(startDate, endDate) {
        this.bookingsService.loadBookingByDate(startDate, endDate);
    }
}
BookingsComponent.ɵfac = function BookingsComponent_Factory(t) { return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_1__["BookingsBaseService"])); };
BookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingsComponent, selectors: [["app-bookings"]], inputs: { listIsLoading: "listIsLoading", value: "value" }, outputs: { searchClick: "searchClick" }, decls: 4, vars: 3, consts: [[1, "layout"], [3, "bookingsList", "searchClick"]], template: function BookingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-bookings-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchClick", function BookingsComponent_Template_app_bookings_list_searchClick_2_listener() { return ctx.onSearchClick({ startDate: "" }, { endDate: "" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bookingsList", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.bookingsList$));
    } }, directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_3__["BookingsListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["app-top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background-color: #1976d2;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\napp-top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n}\n\n.fancy-button[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: #ffffff;\n  border-radius: 4px;\n}\n\n.fancy-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #1976d2;\n  padding-right: 4px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n\n.layout[_ngcontent-%COMP%] {\n  background: none;\n  min-height: 100vh;\n  margin: 2em;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyIsImJvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQy9JQTs7QURrSkE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQy9JRjs7QURrSkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQy9JSjs7QURrSkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUMvSUo7O0FEa0pFO0VBQ0UsZUFBQTtBQy9JSjs7QUExQkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUE2QkoiLCJmaWxlIjoiYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3V0aWxzLnNjc3MnO1xyXG5cclxuXHJcbiRncmF5LWJhc2U6ICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAxMy41JSkgIWRlZmF1bHQ7IC8vICMyMjJcclxuJGdyYXktZGFyazogICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgICAvLyAjMzMzXHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA0Ni43JSkgIWRlZmF1bHQ7IC8vICM3NzdcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXHJcblxyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICBkYXJrZW4oIzAwNzljMiwgNi41JSkgIWRlZmF1bHQ7IC8vICMzMzdhYjdcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzAwMjMwMCAhZGVmYXVsdDtcclxuJGJyYW5kLWluZm86ICAgICAgICAgICAgIzIyNDQ5OSAhZGVmYXVsdDtcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgIzdENjQwMCAhZGVmYXVsdDtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgIzMyMDAwMCAhZGVmYXVsdDtcclxuXHJcbiRibHVlOiAjNDJDQUZEO1xyXG4kcmVkOiAjRTA0MjQyO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4kc2Vjb25kYXJ5OiAjQzdDRUQ1O1xyXG4kZGFuZ2VyOiAjRTA0MjQyO1xyXG4kbGlnaHQ6ICR3aGl0ZTtcclxuJHJlcG9ydC1ncmV5OiAjRDhEOEQ4O1xyXG5cclxuJGRpc2NsYWltZXItYmFja2dyb3VuZDogIzk2QzVFODtcclxuJHJlcG9ydC1uYXZiYXItdG9nZ2xlLWJhY2tncm91bmQ6ICM5NkM1RTg7XHJcbiRyZXBvcnQtbWVudS1pdGVtLWNvbG9yOiAjMDA2NUIzO1xyXG4kcmVwb3J0LXJlZDogI0ZGMkMyRDtcclxuXHJcbi8vPT0gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiRoZWFkaW5nLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyXHJcbiRuYXZiYXItcGFkZGluZy15OiByZW0oMjBweCk7XHJcbiRuYXZiYXItcGFkZGluZy14OiByZW0oMCk7XHJcblxyXG4vLz09IE5hdnNcclxuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiBibGFjaztcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiByZW0oMTZweCk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiByZW0oMTFweCk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiByZW0oMzNweCk7XHJcbiRidG4tZm9udC1zaXplOiByZW0oMTZweCk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogcmVtKDhweCk7XHJcbiRidG4tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vPT0gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG4kaW5wdXQtcGFkZGluZy15OiByZW0oMTJweCk7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IHJlbSgxNnB4KTtcclxuJGlucHV0LWNvbG9yOiBibGFjaztcclxuJGlucHV0LWhlaWdodC1pbm5lcjogcmVtKDQ4cHgpO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAnJztcclxuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAnJztcclxuJGlucHV0LWJvcmRlci13aWR0aC1mb2N1c2VkOiAxcHg7XHJcbiRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAwO1xyXG5cclxuLy89PSBBbGVydFxyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuJGFsZXJ0LXBhZGRpbmcteTogMC43NXJlbTtcclxuJGFsZXJ0LXBhZGRpbmcteDogMC45NXJlbTtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogMjtcclxuJGFsZXJ0LWJnLWxldmVsOiAtMTA7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuJHRvb2x0aXAtYmc6IGJsYWNrO1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAxO1xyXG4kdG9vbHRpcC1wYWRkaW5nLXk6IHJlbSgxMnB4KTtcclxuJHRvb2x0aXAtcGFkZGluZy14OiByZW0oMTJweCk7XHJcbiR0b29sdGlwLWZvbnQtc2l6ZTogcmVtKDEycHgpO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogbm9uZTtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogcmVtKDEycHgpO1xyXG5cclxuLy89PSBNb2RhbHNcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICNDN0NFRDU7XHJcblxyXG4vLz09IENsb3NlXHJcbiRjbG9zZS10ZXh0LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vPT0gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiByZW0oMTBweCk7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IGdyZXk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiBncmV5LWxpdGU7XHJcblxyXG5cclxuLy8gPT0gQ2FyZHNcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kY2FyZC1ib3JkZXItY29sb3I6IGdyZXktbGl0ZTtcclxuJGNhcmQtY2FwLWJnOiAkd2hpdGU7XHJcblxyXG4vLz09IFByb2dyZXNzIGJhcnNcclxuXHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiByZW0oMjhweCk7XHJcblxyXG4vLz09IEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICAgIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICB4czogMCxcclxuICAgIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTogNjAwcHgsXHJcbiAgICAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBtZDogOTYwcHgsXHJcbiAgICAvLyBMYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICBsZzogMTQ0MHB4LFxyXG4gICAgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbiAgICB4bDogMTkyMHB4XHJcbik7XHJcblxyXG4vLyBDb2xvciBjb250cmFzdFxyXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTcwO1xyXG5cclxuLy9Cb3gtc2hhZG93c1xyXG4kei1kZXB0aC0xLWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJHotZGVwdGgtMS1oYWxmLWJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJHotZGVwdGgtMi1oYWxmLWJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR6LWRlcHRoLTMtaGFsZi1ib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJHotZGVwdGgtNC1oYWxmLWJveC1zaGFkb3c6IDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJHotZGVwdGgtNS1oYWxmLWJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kYm90dG9tLWJveC1zaGFkb3c6IDAgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAxcHggMjJweCAxM3B4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbi8vZW5kUGdlSHJcclxuJGVuZFBnZUhyOiB3aWR0aCg1MDBweCksIG1hcmdpbi10b3AoMzBweCk7XHJcblxyXG4vLyBsb2FkZXJcclxuJGxvYWRpbmctLXdpZHRoOiAyNTBweDtcclxuJGxvYWRpbmctZG90LS1zaXplOiAyMHB4O1xyXG5cclxuYXBwLXRvcC1iYXIge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA2OHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG5wYWRkaW5nOiAxNnB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmFwcC10b3AtYmFyIGgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZmFuY3ktYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhbmN5LWJ1dHRvbiBpLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxufVxyXG4iLCJhcHAtdG9wLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYXBwLXRvcC1iYXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZhbmN5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5mYW5jeS1idXR0b24gaS5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmxheW91dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDJlbTtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bookings',
                templateUrl: './bookings.component.html',
                styleUrls: ['./bookings.component.scss']
            }]
    }], function () { return [{ type: _core_services_bookings_bookings_base_service__WEBPACK_IMPORTED_MODULE_1__["BookingsBaseService"] }]; }, { listIsLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/services/bookings/bookings-base.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/bookings/bookings-base.service.ts ***!
  \*****************************************************************/
/*! exports provided: BookingsBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsBaseService", function() { return BookingsBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BookingsBaseService {
    constructor() {
        this._bookingsModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._bookings$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._selectedBooking$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._bookingError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._listIsLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    get bookingsModel$() {
        return this._bookingsModel$;
    }
    get selectedBooking$() {
        return this._selectedBooking$;
    }
    get bookings$() {
        return this._bookings$;
    }
    get bookingError$() {
        return this._bookingError$;
    }
    get listIsLoading$() {
        return this._listIsLoading$;
    }
    selectBooking(bookingId) {
        const summaries = this._bookings$.value;
        if (summaries && summaries.length) {
            const summary = summaries.find(s => s.bookingId === bookingId);
            if (summary) {
                this._selectedBooking$.next(summary);
            }
        }
    }
}
BookingsBaseService.ɵfac = function BookingsBaseService_Factory(t) { return new (t || BookingsBaseService)(); };
BookingsBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingsBaseService, factory: BookingsBaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/bookings/bookings.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/bookings/bookings.service.ts ***!
  \************************************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var backoff_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! backoff-rxjs */ "../../../../../../../node_modules/backoff-rxjs/esm2015/index.js");
/* harmony import */ var _bookings_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings-base.service */ "./src/app/core/services/bookings/bookings-base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_common_patch_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/common/patch-operations */ "./src/app/models/common/patch-operations.ts");










class BookingsService extends _bookings_base_service__WEBPACK_IMPORTED_MODULE_5__["BookingsBaseService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    loadData() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.apiUrl +
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.bookingsUrl;
        this.http
            .get(url)
            .pipe(Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_4__["retryBackoff"])(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].retryConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._summariesError.bind(this)))
            .subscribe(result => {
            this._listIsLoading$.next(true);
            this._bookings$.next(result);
        });
    }
    loadBookingByDate(start, end) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.apiUrl +
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.bookingsUrl +
            `/${start}/${end}`;
        this._listIsLoading$.next(true);
        this.http
            .get(url)
            .pipe(Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_4__["retryBackoff"])(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].retryConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._summaryError.bind(this)))
            .subscribe(result => {
            this._listIsLoading$.next(true);
            this._bookings$.next(result);
        });
    }
    loadBookingById(id) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.apiUrl +
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.bookingsUrl +
            `/${id}`;
        this._listIsLoading$.next(true);
        this.http
            .get(url)
            .pipe(Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_4__["retryBackoff"])(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].retryConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._summaryError.bind(this)))
            .subscribe(result => {
            this._listIsLoading$.next(true);
            this._selectedBooking$.next(result);
        });
    }
    post(model) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.bookingsUrl;
        return this.http.post(url, model).pipe(Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_4__["retryBackoff"])(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].retryConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(result => {
            if (result.errorMessage) {
                this._bookingError$.next(result.errorMessage);
            }
            this._bookingsModel$.next(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._modelError.bind(this)));
    }
    update(_id, _path, _value) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.apiUrl +
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.bookingsUrl +
            `/${_id}`;
        const patchModel = {
            operation: _models_common_patch_operations__WEBPACK_IMPORTED_MODULE_7__["PatchOperations"].replace,
            path: _path,
            value: _value
        };
        return this.http.patch(url, patchModel).pipe(Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_4__["retryBackoff"])(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].retryConfig), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(result => {
            this._bookingsModel$.next(result);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._updateError.bind(this)));
    }
    _summariesError(err) {
        this._handleError(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    _updateError(err) {
        this._handleError(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    }
    _summaryError(err) {
        this._handleError(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    _modelError(err) {
        this._handleError(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    _error(err) {
        this._handleError(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    _handleError(err) {
        this._listIsLoading$.next(false);
        let error;
        if (err && err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // A client-side or network error occurred. Handle it accordingly.
            let detailedMessage = `${err.message}`;
            if (err.statusText) {
                detailedMessage += `<br/>${err.statusText}`;
            }
            error = {
                errorMessage: 'Unfortunately a network error has occurred. This may be because you have no Internet connection or there may be a server problem. Please try again later.',
                errorNumber: err.status,
                detailedMessage
            };
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            error = {
                errorMessage: 'Unfortunately a network error has occurred. This may be because you have no Internet connection or there may be a server problem. Please try again later.',
                originalError: err
            };
        }
        this._bookingsModel$.next(null);
    }
}
BookingsService.ɵfac = function BookingsService_Factory(t) { return new (t || BookingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingsService, factory: BookingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/common/patch-operations.ts":
/*!***************************************************!*\
  !*** ./src/app/models/common/patch-operations.ts ***!
  \***************************************************/
/*! exports provided: PatchOperations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchOperations", function() { return PatchOperations; });
var PatchOperations;
(function (PatchOperations) {
    PatchOperations[PatchOperations["unknown"] = 0] = "unknown";
    PatchOperations[PatchOperations["test"] = 1] = "test";
    PatchOperations[PatchOperations["remove"] = 2] = "remove";
    PatchOperations[PatchOperations["add"] = 3] = "add";
    PatchOperations[PatchOperations["replace"] = 4] = "replace";
    PatchOperations[PatchOperations["move"] = 5] = "move";
    PatchOperations[PatchOperations["copy"] = 6] = "copy";
})(PatchOperations || (PatchOperations = {}));


/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TopBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 2, vars: 0, template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Service Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["app-top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background-color: #1976d2;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\napp-top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n}\n\n.fancy-button[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: #ffffff;\n  border-radius: 4px;\n}\n\n.fancy-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #1976d2;\n  padding-right: 4px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyIsInRvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUMvSUE7O0FEa0pBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUMvSUY7O0FEa0pBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMvSUo7O0FEa0pFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDL0lKOztBRGtKRTtFQUNFLGVBQUE7QUMvSUo7O0FBMUJBO0VBQ0ksY0FBQTtBQTZCSjs7QUExQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQTZCSiIsImZpbGUiOiJ0b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3V0aWxzLnNjc3MnO1xyXG5cclxuXHJcbiRncmF5LWJhc2U6ICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAxMy41JSkgIWRlZmF1bHQ7IC8vICMyMjJcclxuJGdyYXktZGFyazogICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgICAvLyAjMzMzXHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA0Ni43JSkgIWRlZmF1bHQ7IC8vICM3NzdcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXHJcblxyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICBkYXJrZW4oIzAwNzljMiwgNi41JSkgIWRlZmF1bHQ7IC8vICMzMzdhYjdcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzAwMjMwMCAhZGVmYXVsdDtcclxuJGJyYW5kLWluZm86ICAgICAgICAgICAgIzIyNDQ5OSAhZGVmYXVsdDtcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgIzdENjQwMCAhZGVmYXVsdDtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgIzMyMDAwMCAhZGVmYXVsdDtcclxuXHJcbiRibHVlOiAjNDJDQUZEO1xyXG4kcmVkOiAjRTA0MjQyO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4kc2Vjb25kYXJ5OiAjQzdDRUQ1O1xyXG4kZGFuZ2VyOiAjRTA0MjQyO1xyXG4kbGlnaHQ6ICR3aGl0ZTtcclxuJHJlcG9ydC1ncmV5OiAjRDhEOEQ4O1xyXG5cclxuJGRpc2NsYWltZXItYmFja2dyb3VuZDogIzk2QzVFODtcclxuJHJlcG9ydC1uYXZiYXItdG9nZ2xlLWJhY2tncm91bmQ6ICM5NkM1RTg7XHJcbiRyZXBvcnQtbWVudS1pdGVtLWNvbG9yOiAjMDA2NUIzO1xyXG4kcmVwb3J0LXJlZDogI0ZGMkMyRDtcclxuXHJcbi8vPT0gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiRoZWFkaW5nLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyXHJcbiRuYXZiYXItcGFkZGluZy15OiByZW0oMjBweCk7XHJcbiRuYXZiYXItcGFkZGluZy14OiByZW0oMCk7XHJcblxyXG4vLz09IE5hdnNcclxuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiBibGFjaztcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiByZW0oMTZweCk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiByZW0oMTFweCk7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiByZW0oMzNweCk7XHJcbiRidG4tZm9udC1zaXplOiByZW0oMTZweCk7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogcmVtKDhweCk7XHJcbiRidG4tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vPT0gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG4kaW5wdXQtcGFkZGluZy15OiByZW0oMTJweCk7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IHJlbSgxNnB4KTtcclxuJGlucHV0LWNvbG9yOiBibGFjaztcclxuJGlucHV0LWhlaWdodC1pbm5lcjogcmVtKDQ4cHgpO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAnJztcclxuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAnJztcclxuJGlucHV0LWJvcmRlci13aWR0aC1mb2N1c2VkOiAxcHg7XHJcbiRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAwO1xyXG5cclxuLy89PSBBbGVydFxyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuJGFsZXJ0LXBhZGRpbmcteTogMC43NXJlbTtcclxuJGFsZXJ0LXBhZGRpbmcteDogMC45NXJlbTtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogMjtcclxuJGFsZXJ0LWJnLWxldmVsOiAtMTA7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuJHRvb2x0aXAtYmc6IGJsYWNrO1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAxO1xyXG4kdG9vbHRpcC1wYWRkaW5nLXk6IHJlbSgxMnB4KTtcclxuJHRvb2x0aXAtcGFkZGluZy14OiByZW0oMTJweCk7XHJcbiR0b29sdGlwLWZvbnQtc2l6ZTogcmVtKDEycHgpO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogbm9uZTtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogcmVtKDEycHgpO1xyXG5cclxuLy89PSBNb2RhbHNcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICNDN0NFRDU7XHJcblxyXG4vLz09IENsb3NlXHJcbiRjbG9zZS10ZXh0LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vPT0gRHJvcGRvd25zXHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiByZW0oMTBweCk7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IGdyZXk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiBncmV5LWxpdGU7XHJcblxyXG5cclxuLy8gPT0gQ2FyZHNcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4kY2FyZC1ib3JkZXItY29sb3I6IGdyZXktbGl0ZTtcclxuJGNhcmQtY2FwLWJnOiAkd2hpdGU7XHJcblxyXG4vLz09IFByb2dyZXNzIGJhcnNcclxuXHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiByZW0oMjhweCk7XHJcblxyXG4vLz09IEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICAgIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICB4czogMCxcclxuICAgIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTogNjAwcHgsXHJcbiAgICAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBtZDogOTYwcHgsXHJcbiAgICAvLyBMYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICBsZzogMTQ0MHB4LFxyXG4gICAgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbiAgICB4bDogMTkyMHB4XHJcbik7XHJcblxyXG4vLyBDb2xvciBjb250cmFzdFxyXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTcwO1xyXG5cclxuLy9Cb3gtc2hhZG93c1xyXG4kei1kZXB0aC0xLWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJHotZGVwdGgtMS1oYWxmLWJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJHotZGVwdGgtMi1oYWxmLWJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR6LWRlcHRoLTMtaGFsZi1ib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJHotZGVwdGgtNC1oYWxmLWJveC1zaGFkb3c6IDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJHotZGVwdGgtNS1oYWxmLWJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kYm90dG9tLWJveC1zaGFkb3c6IDAgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAxcHggMjJweCAxM3B4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbi8vZW5kUGdlSHJcclxuJGVuZFBnZUhyOiB3aWR0aCg1MDBweCksIG1hcmdpbi10b3AoMzBweCk7XHJcblxyXG4vLyBsb2FkZXJcclxuJGxvYWRpbmctLXdpZHRoOiAyNTBweDtcclxuJGxvYWRpbmctZG90LS1zaXplOiAyMHB4O1xyXG5cclxuYXBwLXRvcC1iYXIge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA2OHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG5wYWRkaW5nOiAxNnB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmFwcC10b3AtYmFyIGgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZmFuY3ktYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhbmN5LWJ1dHRvbiBpLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxufVxyXG4iLCJhcHAtdG9wLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYXBwLXRvcC1iYXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZhbmN5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5mYW5jeS1idXR0b24gaS5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-bar',
                templateUrl: './top-bar.component.html',
                styleUrls: ['./top-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    apiVersion: '1.0',
    version: 'DEV',
    origin: 'localhost:4200',
    apiConfig: {
        apiUrl: 'https://localhost:5001/api',
        bookingsUrl: '/booking',
        clientsUrl: '/client',
        vehiclesUrl: '/vehicle',
    },
    retryConfig: {
        initialInterval: 1000,
        maxRetries: 5
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michael\Source\repos\ServiceWorkshopFrontEnd\ServiceWorkshopApp\service-workshop-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DisplayProduct.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DisplayProduct.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue */ "./resources/js/components/header.vue");
/* harmony import */ var _footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue */ "./resources/js/components/footer.vue");
/* harmony import */ var _nav_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.vue */ "./resources/js/components/nav.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Nav: _nav_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      cart: [],
      show: true,
      totalPrice: '',
      products: [{
        id: 11,
        name: 'product 1',
        price: 5,
        description: 'product description'
      }, {
        id: 22,
        name: 'product 2',
        price: 54,
        description: 'product description'
      }, {
        id: 33,
        name: 'product 3',
        price: 55,
        description: 'product description'
      }]
    };
  },
  computed: {
    getTotalCartPrice: function getTotalCartPrice() {
      var totalPrice = 0;
      this.cart.forEach(function (element) {
        totalPrice += element.price * element.quantity;
      });
      return totalPrice;
    },
    count: function count() {
      var count = 0;
      this.cart.forEach(function (element) {
        count += 1;
      });
      return count;
    }
  },
  methods: {
    isAlreadyExists: function isAlreadyExists(id) {
      //check this id exists in cart array use loadsh
      var r = _.find(this.cart, {
        'id': id
      });

      if (r === undefined) {
        return true;
      }

      return false;
    },
    addToCart: function addToCart(index) {
      // this.count++;
      //event.preventDefault();
      //event.target.disabled = true;
      this.cart.push(_objectSpread({}, this.products[index], {
        quantity: 1
      }));
    },
    showProduct: function showProduct() {
      this.show = false;
    },
    back: function back() {
      this.show = true;
    },
    changeQuantity: function changeQuantity(newIndex) {
      this.cart[newIndex].quantity = parseInt(event.target.value);
    },
    removeFromCart: function removeFromCart(index) {
      this.cart.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayProduct_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayProduct.vue */ "./resources/js/components/DisplayProduct.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Product: _DisplayProduct_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      display: true,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      qualification: [],
      gender: 'male'
    };
  },
  methods: {
    sign_in: function sign_in() {
      this.display = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DisplayProduct.vue?vue&type=template&id=007d0a78&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DisplayProduct.vue?vue&type=template&id=007d0a78& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Header"),
      _vm._v(" "),
      _c("Nav"),
      _vm._v(" "),
      _vm.show
        ? _c("div", { staticClass: "container-fluid bg-3 text-center" }, [
            _c("h3", [
              _vm._v("Some of my Work "),
              _c("b", [
                _vm._v("Counter value :"),
                _c(
                  "button",
                  { attrs: { type: "button" }, on: { click: _vm.showProduct } },
                  [_vm._v("View cart " + _vm._s(_vm.count))]
                )
              ])
            ]),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.products, function(product, index) {
                return _c("div", { staticClass: "col-sm-3" }, [
                  _c("p", [_vm._v("Some text..")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w3-third" }, [
                    _c(
                      "div",
                      {
                        staticClass: "w3-card w3-container",
                        staticStyle: { "min-height": "460px" }
                      },
                      [
                        _c("h3", [_vm._v(_vm._s(product.name))]),
                        _c("br"),
                        _vm._v(" "),
                        _c("i", {
                          staticClass:
                            "fa fa-desktop w3-margin-bottom w3-text-theme",
                          staticStyle: { "font-size": "120px" }
                        }),
                        _vm._v(" "),
                        _c("h4", [_vm._v("price: $" + _vm._s(product.price))]),
                        _vm._v(" "),
                        _c("b", [
                          _vm._v("Description: " + _vm._s(product.description))
                        ]),
                        _vm._v(" "),
                        _vm.isAlreadyExists(product.id)
                          ? _c(
                              "button",
                              {
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.addToCart(index)
                                  }
                                }
                              },
                              [_vm._v("Add to cart")]
                            )
                          : _c(
                              "button",
                              {
                                attrs: { type: "button" },
                                on: { click: _vm.showProduct }
                              },
                              [_vm._v("View cart ")]
                            )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        : _c("div", { staticClass: "container-fluid bg-3 text-center" }, [
            _c(
              "button",
              { attrs: { type: "button" }, on: { click: _vm.back } },
              [_vm._v("Back to shopping")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              [
                _vm._l(_vm.cart, function(newProduct, newIndex) {
                  return _c("div", { key: newIndex, staticClass: "col-sm-3" }, [
                    _c("p", [
                      _c(
                        "button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.removeFromCart(newIndex)
                            }
                          }
                        },
                        [_vm._v("Remove product ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w3-third" }, [
                      _c(
                        "div",
                        {
                          staticClass: "w3-card w3-container",
                          staticStyle: { "min-height": "460px" }
                        },
                        [
                          _c("h3", [
                            _vm._v(
                              _vm._s(newProduct.name) +
                                " (qaunt:  " +
                                _vm._s(newProduct.quantity) +
                                ")"
                            )
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "fa fa-desktop w3-margin-bottom w3-text-theme",
                            staticStyle: { "font-size": "120px" }
                          }),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(
                              "price: $" +
                                _vm._s(newProduct.price) +
                                "\n                                     "
                            ),
                            _c("label", { attrs: { for: "sel1" } }, [
                              _vm._v(" quantity:")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                on: {
                                  change: function($event) {
                                    return _vm.changeQuantity(newIndex)
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("1")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("2")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("3")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v("4")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b", [
                            _vm._v(
                              "Description: " + _vm._s(newProduct.description)
                            )
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _vm.totalPrice > 0
                            ? _c("b", [
                                _vm._v(
                                  "Total Price: $" + _vm._s(_vm.totalPrice)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(
                            "\n                                  SubTotal : " +
                              _vm._s(newProduct.price * newProduct.quantity) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                }),
                _vm._v(
                  "\n                Total Cart : " +
                    _vm._s(_vm.getTotalCartPrice) +
                    "\n        "
                )
              ],
              2
            )
          ]),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("product")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DisplayProduct.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/DisplayProduct.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayProduct_vue_vue_type_template_id_007d0a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayProduct.vue?vue&type=template&id=007d0a78& */ "./resources/js/components/DisplayProduct.vue?vue&type=template&id=007d0a78&");
/* harmony import */ var _DisplayProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/DisplayProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DisplayProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DisplayProduct_vue_vue_type_template_id_007d0a78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DisplayProduct_vue_vue_type_template_id_007d0a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DisplayProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DisplayProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/DisplayProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DisplayProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DisplayProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DisplayProduct.vue?vue&type=template&id=007d0a78&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/DisplayProduct.vue?vue&type=template&id=007d0a78& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayProduct_vue_vue_type_template_id_007d0a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DisplayProduct.vue?vue&type=template&id=007d0a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DisplayProduct.vue?vue&type=template&id=007d0a78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayProduct_vue_vue_type_template_id_007d0a78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayProduct_vue_vue_type_template_id_007d0a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
webpackHotUpdate_N_E("pages/add_member",{

/***/ "./components/member_add.js":
/*!**********************************!*\
  !*** ./components/member_add.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Addmember; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\tsujishunya104\\Desktop\\shunya-s15\\jphacks\\B_2003\\front\\components\\member_add.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Addmember = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Addmember, _Component);

  var _super = _createSuper(Addmember);

  function Addmember(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Addmember);

    _this = _super.call(this, props);
    _this.handlesubmit = _this.handlesubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Addmember, [{
    key: "handlesubmit",
    value: function handlesubmit(e) {
      e.preventDefault();
      var method = "POST";
      var body = JSON.stringify({
        name: new_member.name.value,
        email_address: new_member.email_address.value,
        affiliation: new_member.affiliation.value,
        face_photo: new_member.picture.value
      }); //console.log(body);

      fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/register_user/register_user', {
        method: "POST",
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        //console.log(responseJson);
        if (responseJson.result == 0) {
          window.alert("このメールアドレスはすでに登録されています。");
          location.href = "/add_member";
        } else if (responseJson.result == 1) {
          window.alert("顔認証に失敗しました。もう一度顔がはっきりわかるような写真を提出してください。");
          location.href = "/add_member";
        } else {
          window.alert("登録が完了しました！");
          location.href = "/member_list";
        }
      })["catch"](function (error) {
        window.alert("登録時にエラーが起きました。もう一度入力してください。");
        location.href = "/add_member"; //console.error('error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, "Add member"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 18
        }
      }, "\"\u30B5\u30FC\u30D3\u30B9\u540D\"\u3078\u3088\u3046\u3053\u305D"), "\u767B\u9332\u3059\u308B\u30E1\u30F3\u30D0\u30FC\u306E\u60C5\u5831\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044"), __jsx("form", {
        id: "new_member",
        onSubmit: this.handlesubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, "\u540D\u524D:", __jsx("input", {
        type: "text",
        name: "name",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 23
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:", __jsx("input", {
        type: "email",
        name: "email_address",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 28
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, "\u6240\u5C5E:", __jsx("input", {
        type: "text",
        name: "affiliation",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, "\u6B63\u9762\u3092\u5411\u3044\u305F\u5199\u771F:", __jsx("input", {
        type: "file",
        accept: "image/*",
        name: "picture",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 29
        }
      })), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, "\u65B0\u898F\u767B\u9332")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/member_list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }
      }, "Member list"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }, "Go home"))));
    }
  }]);

  return Addmember;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW1iZXJfYWRkLmpzIl0sIm5hbWVzIjpbIkFkZG1lbWJlciIsInByb3BzIiwiaGFuZGxlc3VibWl0IiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIm5ld19tZW1iZXIiLCJ2YWx1ZSIsImVtYWlsX2FkZHJlc3MiLCJhZmZpbGlhdGlvbiIsImZhY2VfcGhvdG8iLCJwaWN0dXJlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VKc29uIiwicmVzdWx0Iiwid2luZG93IiwiYWxlcnQiLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsUzs7Ozs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBRmU7QUFHbEI7Ozs7aUNBRVlDLEMsRUFBRTtBQUNYQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBZjtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ0MsWUFBSSxFQUFFQyxVQUFVLENBQUNELElBQVgsQ0FBZ0JFLEtBQXZCO0FBQTZCQyxxQkFBYSxFQUFFRixVQUFVLENBQUNFLGFBQVgsQ0FBeUJELEtBQXJFO0FBQTJFRSxtQkFBVyxFQUFFSCxVQUFVLENBQUNHLFdBQVgsQ0FBdUJGLEtBQS9HO0FBQXFIRyxrQkFBVSxFQUFFSixVQUFVLENBQUNLLE9BQVgsQ0FBbUJKO0FBQXBKLE9BQWYsQ0FBYixDQUhXLENBSVg7O0FBQ0FLLFdBQUssQ0FBQyxvRkFBRCxF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QUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUcsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQURKLENBZkksQ0FBUjtBQXFCSDs7OztFQXhEa0MwQiwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGRfbWVtYmVyLjhjNDdkYzA3NjNlNGVkZDhkNzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRtZW1iZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlc3VibWl0ID0gdGhpcy5oYW5kbGVzdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVzdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bmFtZTogbmV3X21lbWJlci5uYW1lLnZhbHVlLGVtYWlsX2FkZHJlc3M6IG5ld19tZW1iZXIuZW1haWxfYWRkcmVzcy52YWx1ZSxhZmZpbGlhdGlvbjogbmV3X21lbWJlci5hZmZpbGlhdGlvbi52YWx1ZSxmYWNlX3Bob3RvOiBuZXdfbWVtYmVyLnBpY3R1cmUudmFsdWUsfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly91emk4ZmUxd3U0LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3JlZ2lzdGVyX3VzZXIvcmVnaXN0ZXJfdXNlcicse21ldGhvZDogXCJQT1NUXCIsYm9keTogYm9keX0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VKc29uLnJlc3VsdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuOBk+OBruODoeODvOODq+OCouODieODrOOCueOBr+OBmeOBp+OBq+eZu+mMsuOBleOCjOOBpuOBhOOBvuOBmeOAglwiKVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2FkZF9tZW1iZXJcIlxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZUpzb24ucmVzdWx0ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi6aGU6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CC44KC44GG5LiA5bqm6aGU44GM44Gv44Gj44GN44KK44KP44GL44KL44KI44GG44Gq5YaZ55yf44KS5o+Q5Ye644GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvYWRkX21lbWJlclwiXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi55m76Yyy44GM5a6M5LqG44GX44G+44GX44Gf77yBXCIpXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvbWVtYmVyX2xpc3RcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFwi55m76Yyy5pmC44Gr44Ko44Op44O844GM6LW344GN44G+44GX44Gf44CC44KC44GG5LiA5bqm5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCIpXHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2FkZF9tZW1iZXJcIlxyXG4gICAgICAgIC8vY29uc29sZS5lcnJvcignZXJyb3InKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+QWRkIG1lbWJlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+PGgxPlwi44K144O844OT44K55ZCNXCLjgbjjgojjgYbjgZPjgZ08L2gxPueZu+mMsuOBmeOCi+ODoeODs+ODkOODvOOBruaDheWgseOCkuaVmeOBiOOBpuOBj+OBoOOBleOBhDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cIm5ld19tZW1iZXJcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPHA+5ZCN5YmNOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7jg6Hjg7zjg6vjgqLjg4njg6zjgrk6PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbF9hZGRyZXNzXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7miYDlsZ46PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFmZmlsaWF0aW9uXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7mraPpnaLjgpLlkJHjgYTjgZ/lhpnnnJ86PGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG5hbWU9XCJwaWN0dXJlXCIgcmVxdWlyZWQ+PC9pbnB1dD48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7mlrDopo/nmbvpjLI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL21lbWJlcl9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TWVtYmVyIGxpc3Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkdvIGhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
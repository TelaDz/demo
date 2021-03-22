(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[892],{

/***/ 7892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8582);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8222);
/* harmony import */ var antd_es_table_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4077);
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9597);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);






var About = function About(props) {
  console.log('About', props);
  var columns = [{
    title: '序号',
    dataIndex: 'key'
  }];
  var dataSource = [{
    key: 0,
    name: 'Jack'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    columns: columns,
    dataSource: dataSource
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    onClick: function onClick() {
      props.history.go(-1);
    }
  }, "\u8FD4\u56DE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    onClick: function onClick() {
      props.history.push('/');
    }
  }, "Home"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ })

}]);
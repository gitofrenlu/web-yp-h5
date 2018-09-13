webpackJsonp([1],{

/***/ "+zAQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
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
    data: function () {
        return {
            imgurl: "",
            name: "",
            mobile: "",
            address: "",
            company: "",
            isEdit: false
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        update: function () {
            let param = {
                name: this.name,
                mobile: this.mobile,
                company: this.company,
                address: this.address
            };
            this.$dialog.loading.open("更新中...");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* setUserInfo */])(param).then(d => {
                this.$dialog.loading.close();

                this.isEdit = false;
                if (d.code == this.$responseStatus.success) {
                    this.$dialog.toast({ mes: d.result });
                } else {
                    this.$dialog.toast({ mes: d.message });
                }
            });
        },
        loadData() {
            this.$dialog.loading.open();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["b" /* getUserInfo */])().then(d => {
                this.$dialog.loading.close();
                if (d.code == this.$responseStatus.success) {
                    this.imgurl = d.result.imgUrl;
                    this.name = d.result.nickName;
                    this.mobile = d.result.mobile;
                    this.address = d.result.address;
                    this.company = d.result.company;
                } else {
                    this.$dialog.toast({ mes: d.message });
                }
            });
        }
    }
});

/***/ }),

/***/ "/n1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_orderContent__ = __webpack_require__("4KKs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_orderContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__templates_orderContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__("P9l9");
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
    components: { orderContent: __WEBPACK_IMPORTED_MODULE_0__templates_orderContent___default.a },
    data() {
        return {
            tabData: [],
            datetime: "",
            key: 0,
            searchDate: ""
        };
    },
    created: function () {
        this.loadData();
    },
    methods: {
        loadData() {
            this.tabData = [];
            let param = {
                status: this.key,
                dateTime: this.searchDate || ""
            };
            this.$dialog.loading.open("加载中...");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["c" /* getOrderList */])(param).then(d => {
                this.$dialog.loading.close();
                if (d.code == this.$responseStatus.success) {
                    this.tabData = d.result;
                } else {
                    this.$dialog.toast({ mes: d.message });
                }
            });
        },
        toload(label, key = 0) {
            this.searchDate = "";
            this.key = key;

            let time = this.datetime.trim();
            if (time == "") {
                this.loadData();
            } else {
                this.datetime = "";
                this.$refs.dataTime.currentValue = "";
                this.loadData();
            }
        },
        search() {
            this.searchDate = this.datetime;
            this.loadData();
        },
        concel: function (id) {
            this.$dialog.confirm({
                title: '取消订单',
                mes: '确定取消该订单吗？',
                opts: [{
                    txt: '再考虑考虑',
                    color: false,
                    stay: false, //是否保留提示框
                    callback: () => {} //按钮回调函数
                }, {
                    txt: '取消订单',
                    color: '#bd9707',
                    stay: false, //是否保留提示框
                    callback: () => {
                        let param = {
                            orderId: id
                        };
                        this.$dialog.loading.open("正在取消...");
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["d" /* concelOrder */])(param).then(d => {
                            this.$dialog.loading.close();
                            if (d.code == this.$responseStatus.success) {
                                this.$dialog.toast({
                                    mes: '取消成功',
                                    timeout: 1500,
                                    icon: 'success'
                                });
                                this.loadData();
                            } else {
                                this.$dialog.toast({ mes: d.message });
                            }
                        });
                    }
                }]
            });
        }
    }
});

/***/ }),

/***/ "0XEj":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('yd-layout', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    staticClass: "container"
  }), _vm._v(" "), _c('yd-tabbar', {
    attrs: {
      "slot": "tabbar"
    },
    slot: "tabbar"
  }, [_c('yd-tabbar-item', {
    attrs: {
      "title": "首页",
      "link": "/index",
      "active": _vm.active[0]
    },
    nativeOn: {
      "click": function($event) {
        _vm.changeTab(0)
      }
    }
  }, [_c('yd-icon', {
    attrs: {
      "slot": "icon",
      "name": "home-outline"
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('yd-tabbar-item', {
    attrs: {
      "title": "购物车",
      "link": "/mycart",
      "active": _vm.active[1]
    },
    nativeOn: {
      "click": function($event) {
        _vm.changeTab(1)
      }
    }
  }, [_c('yd-icon', {
    attrs: {
      "slot": "icon",
      "name": "shopcart-outline"
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('yd-tabbar-item', {
    attrs: {
      "title": "我的订单",
      "link": "/myorder",
      "active": _vm.active[2]
    },
    nativeOn: {
      "click": function($event) {
        _vm.changeTab(2)
      }
    }
  }, [_c('yd-icon', {
    attrs: {
      "slot": "icon",
      "name": "feedback"
    },
    slot: "icon"
  })], 1), _vm._v(" "), _c('yd-tabbar-item', {
    attrs: {
      "title": "会员中心",
      "link": "/user",
      "active": _vm.active[3]
    },
    nativeOn: {
      "click": function($event) {
        _vm.changeTab(3)
      }
    }
  }, [_c('yd-icon', {
    attrs: {
      "slot": "icon",
      "name": "ucenter-outline"
    },
    slot: "icon"
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "16/l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
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
    created: function () {
        this.loadData();
    },
    mounted: function () {},
    data: function () {
        return {
            list: []
        };
    },
    methods: {
        loadData() {
            this.list = JSON.parse(sessionStorage.getItem(this.$myCart)) || [];
        },
        submit: function () {
            if (this.list == 0) {
                this.$dialog.toast({
                    mes: '您的购物车还没有商品',
                    timeout: 1500
                });
            }
            let param = {
                list: sessionStorage.getItem(this.$myCart)
            };
            this.$dialog.loading.open("正在下单...");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["e" /* addCart */])(param).then(d => {
                this.$dialog.loading.close();
                if (d.code == this.$responseStatus.success) {
                    this.$dialog.toast({ mes: d.result });
                    sessionStorage.removeItem(this.$myCart);
                    this.list = [];
                } else {
                    this.$dialog.toast({ mes: d.message });
                }
            });
        }

    },
    watch: {
        list: {
            handler: function (val, odlval) {
                for (let i in val) {
                    if (val[i].size <= 0) {
                        val.splice(i, 1);

                        let refs = this.$refs.spinner;
                        for (let ref of refs) {

                            ref.setDefalutValue();
                        }
                    }
                }
                sessionStorage.setItem(this.$myCart, JSON.stringify(val));
                return val;
            },
            deep: true
        }
    },
    components: {},
    computed: {
        num: function () {
            return this.list.length;
        }
    }
});

/***/ }),

/***/ "2kYS":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mycart_class"
  }, [_c('header', [_c('p', {
    staticClass: "title grey"
  }, [_vm._v("购物车（" + _vm._s(_vm.num) + "）")])]), _vm._v(" "), (_vm.list.length > 0) ? _c('section', [_c('table', [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.list), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.standard))]), _vm._v(" "), _c('td', [_c('yd-spinner', {
      ref: "spinner",
      refInFor: true,
      staticClass: "flex flex_align_center",
      attrs: {
        "unit": "1",
        "min": "0"
      },
      model: {
        value: (l.size),
        callback: function($$v) {
          _vm.$set(l, "size", $$v)
        },
        expression: "l.size"
      }
    })], 1)])
  }))])]) : _c('div', {
    staticClass: "noData"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("lA5J")
    }
  })]), _vm._v(" "), (_vm.list.length > 0) ? _c('div', {
    staticClass: "footer"
  }, [_c('button', {
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("确认下单")])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("产品名称")]), _vm._v(" "), _c('th', [_vm._v("规格")]), _vm._v(" "), _c('th', [_vm._v("数量")])])
}]}

/***/ }),

/***/ "3Ltg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4KKs":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("mkgb")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("7C5q"),
  /* template */
  __webpack_require__("8ZcM"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "7C5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: {
        tabData: {
            required: true,
            type: Array,
            default: []
        }
    },
    data: function () {
        return {};
    },
    methods: {
        concel: function (id) {
            this.$emit('concel', id);
        }
    },
    watch: {
        tabData: {
            handler(newValue, oldValue) {},
            deep: true
        }
    }
});

/***/ }),

/***/ "8ZcM":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order_tab_class"
  }, [(_vm.tabData && _vm.tabData.length > 0) ? _c('div', _vm._l((_vm.tabData), function(l) {
    return _c('div', {
      staticClass: "tab_item"
    }, [_vm._t("title", [_c('p', {
      staticClass: "time"
    }, [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), (l.status == 0) ? _c('button', {
      staticClass: "title_button yellow_background",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.concel(l.id)
        }
      }
    }, [_vm._v("取消订单")]) : _vm._e()]), _vm._v(" "), _vm._t("default", [_c('table', {
      staticClass: "item_table"
    }, [_c('tbody', [_vm._l((l.goods), function(g) {
      return _c('tr', [_c('td', [_vm._v(_vm._s(g.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(g.standard))]), _vm._v(" "), (g.price != '0.00') ? _c('td', [_vm._v(_vm._s(g.price) + "元")]) : _c('td', [_vm._v("待商议")])])
    }), _vm._v(" "), _c('tr', [(l.totalPrice != '0.00') ? _c('td', {
      staticClass: "total_class",
      attrs: {
        "colspan": "3"
      }
    }, [_vm._v("实收总价:" + _vm._s(l.totalPrice) + "元")]) : _c('td', {
      staticClass: "total_class",
      attrs: {
        "colspan": "3"
      }
    }, [_vm._v("实收总价: 待商议")])])], 2)])])], 2)
  })) : _c('div', {
    staticClass: "noData"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("lA5J")
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ "ENeJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Fbcq":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("X/ih")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("PKPl"),
  /* template */
  __webpack_require__("O8hP"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "M93x":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("O+rY")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("xJD8"),
  /* template */
  __webpack_require__("0XEj"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "MiD0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("P9l9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_imgShow__ = __webpack_require__("Fbcq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_imgShow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_imgShow__);
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
    created: function () {
        let isredirect = this.$route.query.redirect;
        if (isredirect) {
            let openid = this.$route.query.openId;
            let msg = this.$route.query.message;
            if (!openid) {
                this.$dialog.alert({ mes: msg });
                return;
            }
            this.$localStorage.set("yp-openid", openid);
        }

        this.loadData();
    },
    mounted: function () {},
    data: function () {
        return {
            list: [],
            cartImg: "../../static/image/rice.jpeg",
            imgShowData: {
                url: "",
                title: "",
                name: ""
            }
        };
    },
    methods: {
        loadData() {
            this.list = [];
            this.$dialog.loading.open('加载中...');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["f" /* getGoods */])().then(d => {
                this.$dialog.loading.close();
                if (d.code == this.$responseStatus.success) {
                    this.list = d.result;
                } else {
                    this.$dialog.toast({ mes: d.message });
                }
            });
        },
        addToShopCart($event, item) {
            // let left_now = $event.pageX;
            // let top_now = $event.pageY - 40; //保证购物车从按钮上方开始移动
            // let left = window.screen.width - 40;//获取屏幕宽度
            // let top = 10

            // let $roll = $(".cartroll")
            // let $cart = $(".mycart")
            // $roll.css({top:top_now,left:left_now}).show()

            // let speedY = (top - top_now) / 60
            // let speenX = (left - left_now) / 60
            // let interval = setInterval(() =>{
            //     if(top_now <= top && left_now >= left){
            //         $roll.hide();
            //         clearInterval(interval)
            //     }
            //     if(top_now > top){
            //         top_now+= speedY;
            //     }
            //     if(left_now < left){
            //         left_now+= speenX;
            //     }
            //     $roll.css({top:top_now,left:left_now})

            // },10)

            this.$dialog.toast({ mes: "添加购物车成功" });

            let cartGoods_json = sessionStorage.getItem(this.$myCart);
            let cartGood = JSON.parse(cartGoods_json);
            if (!cartGood) {
                cartGood = [];
            }
            let flag = true;
            cartGood.forEach(good => {
                if (good.id == item.id) {
                    good.size = Number(good.size) + Number(item.size);
                    flag = false;
                }
            });
            if (flag) {
                cartGood.push({
                    id: item.id,
                    name: item.name,
                    standard: item.standard,
                    size: item.size
                });
            }

            sessionStorage.setItem(this.$myCart, JSON.stringify(cartGood));
        },
        showImg: function (good) {
            this.imgShowData = {
                url: this.$baseimgurl + good.imgUrl,
                //  url:"http://5b0988e595225.cdn.sohucs.com/images/20170906/58cdb24be3624488ad3e8d3d00b4585f.jpeg",
                title: `${good.name} - ${good.standard}`,
                name: 'imgshow'
            };
            this.$refs.imgshow.show();
        },
        routeTo: function () {
            let APP = this.$root.$children[0];
            APP.active = [false, true, false, false];
            this.$router.push("/mycart");
        }
    },
    watch: {},
    components: {
        imgshow: __WEBPACK_IMPORTED_MODULE_1__templates_imgShow___default.a
    }
});

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_index__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_localstorage__ = __webpack_require__("UnSZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock_mock__ = __webpack_require__("telf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock_mock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mock_mock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_js_global_js__ = __webpack_require__("vLzD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_ydui__ = __webpack_require__("r8FW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_ydui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_ydui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_ydui_dist_ydui_rem_css__ = __webpack_require__("ENeJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_ydui_dist_ydui_rem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_ydui_dist_ydui_rem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_base_scss__ = __webpack_require__("nzb2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_common_scss__ = __webpack_require__("WWTk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_common_scss__);











 /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_ydui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6__common_js_global_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_localstorage___default.a);

$(document).ready(function () {
  //设定标准rem
  // document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'

});

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_3__router_index__["a" /* default */]
});

router.beforeEach((to, from, next) => {

  next();
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  router,
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "O+rY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "O8hP":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img_show_class",
    attrs: {
      "name": _vm.name
    },
    on: {
      "click": _vm.imgHide
    }
  }, [_c('div', {
    staticClass: "imgContent"
  }, [_c('h1', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.url
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ "P9l9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* unused harmony export fetch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_util__ = __webpack_require__("hhm8");



let backBase = "/business";

let base = '' + backBase;
// let base = backBase;


let instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    timeout: 30000 // request timeout
});

instance.interceptors.request.use(config => {
    let options = {
        'Content-Type': 'application/json;charset=UTF-8',
        'x-wx_yp_openid': localStorage.getItem("yp-openid")
    };
    config.headers = $.extend(options, config.headers);
    return config;
}, error => {
    return Promise.reject(error);
});

let err_code = {
    success: 0,
    need_open_dd: 10,
    need_login: 100
};

instance.interceptors.response.use(response => {

    let code = response.data.code;
    let msg = response.data.message;

    let ContentType;
    let header = response.headers;
    for (let i in header) {
        if (i == "content-type") {
            ContentType = header[i];
        }
    }

    if (code == err_code.need_login) {
        location.href = `#/index`;
        location.reload();
    }
    if (code != err_code.success && msg == "") {
        response.data.message = "操作失败，请重试";
    }

    return response;
}, error => {
    return Promise.reject(error);
});

// 封装axios的post请求
function fetch(url, param, type = "post") {
    return new Promise((resolve, reject) => {
        if (type == "post") {
            instance.post(url, param).then(response => {
                resolve(response.data);
            }).catch(error => {
                if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
                    this.$dialog.toast({ mes: "网络连接超时，请稍后重试" });
                }
                reject(error);
            });
        }
        if (type == "get") {
            let params = {
                params: param
            };
            instance.get(url, params).then(response => {
                resolve(response.data);
            }).catch(error => {
                if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
                    this.$dialog.toast({ mes: "网络连接超时，请稍后重试" });
                }
                reject(error);
            });
        }
    });
}
//utils
const getGoods = () => {
    return fetch(`${base}/getGoods`, {}, 'get');
};
/* harmony export (immutable) */ __webpack_exports__["f"] = getGoods;

const getOrderList = param => {
    return fetch(`${base}/getOrderList`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getOrderList;

const getUserInfo = () => {
    return fetch(`${base}/getUserInfo`, {}, 'get');
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getUserInfo;

const setUserInfo = param => {
    return fetch(`${base}/setUserInfo`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = setUserInfo;

const addCart = param => {
    return fetch(`${base}/addCart`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["e"] = addCart;


const concelOrder = param => {
    return fetch(`${base}/concelOrder`, param, 'post');
};
/* harmony export (immutable) */ __webpack_exports__["d"] = concelOrder;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "PKPl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        url: {
            required: true,
            type: String,
            default: ""
        },
        title: {
            required: true,
            type: String,
            default: ""
        },
        name: {
            required: true,
            type: String,
            default: ""
        }
    },
    data: function () {
        return {};
    },
    methods: {
        imgHide: function () {
            $(`[name='${this.name}']`).hide();
        },
        show: function () {
            $(`[name='${this.name}']`).show();
        }
    },
    watch: {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "PLQF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Pt/T":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page_index"
  }, [_c('header', [_c('p', {
    staticClass: "title grey"
  }, [_vm._v("店铺推荐"), _c('span', {
    on: {
      "click": function($event) {
        _vm.routeTo()
      }
    }
  }, [_c('yd-icon', {
    staticClass: "mycart",
    attrs: {
      "name": "shopcart-outline",
      "size": "0.5rem"
    }
  })], 1)])]), _vm._v(" "), (_vm.list.length > 0) ? _c('div', {
    staticClass: "scroll"
  }, [_c('yd-scrollnav', _vm._l((_vm.list), function(item, index) {
    return _c('yd-scrollnav-panel', {
      key: index,
      attrs: {
        "label": item.label
      }
    }, [_c('p', {
      staticClass: "scrollnav-title"
    }, [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c('yd-list', {
      attrs: {
        "theme": 1
      }
    }, _vm._l((item.goods), function(g) {
      return _c('yd-list-item', {
        key: g.id
      }, [_c('img', {
        attrs: {
          "slot": "img",
          "src": _vm.$baseimgurl + g.imgUrl,
          "alt": g.name + ' - ' + g.standard
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.showImg(g)
          }
        },
        slot: "img"
      }), _vm._v(" "), _c('span', {
        attrs: {
          "slot": "title"
        },
        slot: "title"
      }, [_vm._v(_vm._s(g.name) + " - " + _vm._s(g.standard))]), _vm._v(" "), _c('yd-list-other', {
        attrs: {
          "slot": "other"
        },
        slot: "other"
      }, [_c('yd-spinner', {
        staticClass: "flex flex_align_center",
        attrs: {
          "unit": "1"
        },
        model: {
          value: (g.size),
          callback: function($$v) {
            _vm.$set(g, "size", $$v)
          },
          expression: "g.size"
        }
      }), _vm._v(" "), _c('button', {
        staticClass: "button yellow_background",
        on: {
          "click": function($event) {
            _vm.addToShopCart($event, g)
          }
        }
      }, [_vm._v("加入购物车")])], 1)], 1)
    }))], 1)
  }))], 1) : _c('div', {
    staticClass: "noData"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("lA5J")
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cartroll"
  }, [_c('img', {
    attrs: {
      "src": _vm.cartImg
    }
  })]), _vm._v(" "), _c('imgshow', {
    ref: "imgshow",
    attrs: {
      "title": _vm.imgShowData.title,
      "name": _vm.imgShowData.name,
      "url": _vm.imgShowData.url
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ "QDR7":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("PLQF")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("/n1E"),
  /* template */
  __webpack_require__("aomE"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "Sk0W":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WWTk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X/ih":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YTwo":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user_page_class"
  }, [_c('div', {
    staticClass: "user_head"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgurl
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    class: [{
      'edit': _vm.isEdit == true
    }],
    attrs: {
      "disabled": !_vm.isEdit
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "user_content"
  }, [_c('p', [_c('span', [_vm._v("手机号：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobile),
      expression: "mobile"
    }],
    class: [{
      'edit': _vm.isEdit == true
    }],
    attrs: {
      "disabled": !_vm.isEdit
    },
    domProps: {
      "value": (_vm.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mobile = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', [_c('span', [_vm._v("单位名称：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.company),
      expression: "company"
    }],
    class: [{
      'edit': _vm.isEdit == true
    }],
    attrs: {
      "disabled": !_vm.isEdit
    },
    domProps: {
      "value": (_vm.company)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.company = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "address_class"
  }, [_c('span', [_vm._v("送货地址：")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    class: [{
      'edit': _vm.isEdit == true
    }],
    attrs: {
      "rows": "5",
      "cols": "30",
      "disabled": !_vm.isEdit
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [(!_vm.isEdit) ? _c('button', {
    on: {
      "click": function($event) {
        _vm.isEdit = !_vm.isEdit
      }
    }
  }, [_vm._v("修改信息")]) : _vm._e(), _vm._v(" "), (_vm.isEdit) ? _c('button', {
    on: {
      "click": _vm.update
    }
  }, [_vm._v("确认")]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__("dAjm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mycart__ = __webpack_require__("eu1x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mycart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_mycart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_orderPage__ = __webpack_require__("QDR7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_orderPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_orderPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_userPage__ = __webpack_require__("naSy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_userPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_userPage__);






let routes = [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__components_index___default.a,
    meta: { title: "远鹏商贸" }
}, {
    path: '/index',
    component: __WEBPACK_IMPORTED_MODULE_0__components_index___default.a,
    meta: { title: "远鹏商贸" }
}, {
    path: '/mycart',
    component: __WEBPACK_IMPORTED_MODULE_1__components_mycart___default.a,
    meta: { title: "购物车" }
}, {
    path: '/myorder',
    component: __WEBPACK_IMPORTED_MODULE_2__components_orderPage___default.a,
    meta: { title: "我的订单" }
}, {
    path: '/user',
    component: __WEBPACK_IMPORTED_MODULE_3__components_userPage___default.a,
    meta: { title: "会员中心" }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "ZKT/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aomE":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "orderpage_class"
  }, [_c('yd-cell-group', [_c('yd-cell-item', [_c('p', {
    staticClass: "flex flex_align_center",
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_c('yd-icon', {
    attrs: {
      "name": "search",
      "size": ".5rem",
      "color": "#AAAAAA"
    }
  }), _vm._v(" "), _c('span', [_vm._v("订单日期：")])], 1), _vm._v(" "), _c('yd-datetime', {
    ref: "dataTime",
    attrs: {
      "slot": "right",
      "type": "date",
      "value": _vm.datetime,
      "init-emit": false,
      "confirm-text": "搜索",
      "start-date": "2017-01-01",
      "callback": _vm.search
    },
    slot: "right",
    model: {
      value: (_vm.datetime),
      callback: function($$v) {
        _vm.datetime = $$v
      },
      expression: "datetime"
    }
  })], 1)], 1), _vm._v(" "), _c('yd-tab', {
    attrs: {
      "active-color": "#09bb07",
      "callback": _vm.toload
    }
  }, [_c('yd-tab-panel', {
    attrs: {
      "label": "待处理",
      "tabkey": Number(0)
    }
  }, [_c('order-content', {
    attrs: {
      "tab-data": _vm.tabData
    },
    on: {
      "concel": _vm.concel
    }
  })], 1), _vm._v(" "), _c('yd-tab-panel', {
    attrs: {
      "label": "处理中",
      "tabkey": Number(1)
    }
  }, [_c('order-content', {
    attrs: {
      "tab-data": _vm.tabData
    },
    on: {
      "concel": _vm.concel
    }
  })], 1), _vm._v(" "), _c('yd-tab-panel', {
    attrs: {
      "label": "已完成",
      "tabkey": Number(2)
    }
  }, [_c('order-content', {
    attrs: {
      "tab-data": _vm.tabData
    },
    on: {
      "concel": _vm.concel
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ "dAjm":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("ZKT/")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("MiD0"),
  /* template */
  __webpack_require__("Pt/T"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "eu1x":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("Sk0W")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("16/l"),
  /* template */
  __webpack_require__("2kYS"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "hhm8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export closeWindow */
/* unused harmony export toIndex */
/* unused harmony export setCookie */
/* unused harmony export getCookie */

function closeWindow() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
        window.location.href = "about:blank";
    } else if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
        window.opener = null;window.open('about:blank', '_self', '').close();
    } else {
        window.opener = null;
        window.open("about:blank", "_self");
        window.close();
    }
}

function toIndex() {
    location.href = `#/index`;
    location.reload();
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}

//取回cookie  
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

/***/ }),

/***/ "lA5J":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/nodata.66f62a6.png";

/***/ }),

/***/ "mkgb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "naSy":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("3Ltg")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("+zAQ"),
  /* template */
  __webpack_require__("YTwo"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "nzb2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "telf":
/***/ (function(module, exports, __webpack_require__) {

// 引入mockjs
const Mock = __webpack_require__("zNUS");
// 获取 mock.Random 对象
const Random = Mock.Random;
let backBase = "/business";

const base = "/mock" + backBase;
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
});
// mock一组数据
const produceNewsData2 = function (current = 1, pageSize = 10) {
    let articles = [];

    for (let i = 0; i < pageSize; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        };
        articles.push(newArticleObject);
    }

    return { 'status|1': [0, 1], articles: articles };
};
const getGoods = function () {
    let data = {
        "result": [{
            label: "大米",
            goods: [{
                id: 1,
                name: "东北大米",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 2,
                name: "东北大米",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 3,
                name: "东北大米",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 4,
                name: "东北大米",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 5,
                name: "东北大米",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 6,
                name: "东北大米",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }]
        }, {
            label: "粮油",
            goods: [{
                id: 1,
                name: "葵花大豆油",
                standard: "500g/桶",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 2,
                name: "葵花大豆油",
                standard: "500g/桶",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 3,
                name: "葵花大豆油",
                standard: "500g/桶",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 4,
                name: "葵花大豆油",
                standard: "500g/桶",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 5,
                name: "葵花大豆油",
                standard: "500g/桶",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 6,
                name: "葵花大豆油",
                standard: "500g/桶",
                imgUrl: "/static/rice/rice.jpeg"
            }]
        }, {
            label: "调料",
            goods: [{
                id: 1,
                name: "花椒",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 2,
                name: "花椒",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 3,
                name: "花椒",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 4,
                name: "花椒",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 5,
                name: "花椒",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }, {
                id: 6,
                name: "花椒",
                standard: "500g/袋",
                imgUrl: "/static/rice/rice.jpeg"
            }]
        }],
        code: 0,
        message: "success"
    };

    return data;
};

const getOrderList = function (status) {
    let data = {
        "result": [{
            createTime: "2018/08/03",
            totalPrice: 500,
            status: 1,
            goods: [{
                name: "大米",
                standard: "500g/袋",
                price: 200
            }, {
                name: "粮油",
                standard: "300g/袋",
                price: 300
            }]
        }, {
            createTime: "2018/08/03",
            totalPrice: 500,
            status: 1,
            goods: [{
                name: "大米",
                standard: "500g/袋",
                price: 200
            }, {
                name: "粮油",
                standard: "300g/袋",
                price: 300
            }]
        }, {
            createTime: "2018/08/03",
            totalPrice: 500,
            status: 1,
            goods: [{
                name: "大米",
                standard: "500g/袋",
                price: 200
            }, {
                name: "粮油",
                standard: "300g/袋",
                price: 300
            }]
        }, {
            createTime: "2018/08/03",
            totalPrice: 500,
            status: 1,
            goods: [{
                name: "大米",
                standard: "500g/袋",
                price: 200
            }, {
                name: "粮油",
                standard: "300g/袋",
                price: 300
            }]
        }, {
            createTime: "2018/08/03",
            totalPrice: 500,
            status: 1,
            goods: [{
                name: "大米",
                standard: "500g/袋",
                price: 200
            }, {
                name: "粮油",
                standard: "300g/袋",
                price: 300
            }]
        }, {
            createTime: "2018/08/04",
            totalPrice: 500,
            status: 1,
            goods: [{
                name: "大米",
                standard: "500g/袋",
                price: 200
            }, {
                name: "粮油",
                standard: "300g/袋",
                price: 300
            }]
        }],

        code: 0,
        message: "success"
    };

    return data;
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(`${base}/getGoods`, 'get', getGoods());
Mock.mock(`${base}/getOrderList`, 'post', getOrderList());

/***/ }),

/***/ "vLzD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatData */
/* unused harmony export parseDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");


const myCart = "yuanpeng_cart";
const baseImgUri = "http://ypapi.hikememo.com/static/";

const responseStatus = {
    success: 0
};

const SIGN_REGEXP = /([yMdhsm])(\1*)/g;
const DEFAULT_PATTERN = 'yyyy-MM-dd';

function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

function formatData(date, pattern) {
    if (!date) {
        return "";
    }
    date = new Date(date);
    pattern = pattern || DEFAULT_PATTERN;
    return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
            case 'y':
                return padding(date.getFullYear(), $0.length);
            case 'M':
                return padding(date.getMonth() + 1, $0.length);
            case 'd':
                return padding(date.getDate(), $0.length);
            case 'w':
                return date.getDay() + 1;
            case 'h':
                return padding(date.getHours(), $0.length);
            case 'm':
                return padding(date.getMinutes(), $0.length);
            case 's':
                return padding(date.getSeconds(), $0.length);
        }
    });
}
function parseDate(dateString, pattern) {
    if (!dateString) {
        return "";
    }
    var matchs1 = pattern.match(SIGN_REGEXP);
    var matchs2 = dateString.match(/(\d)+/g);
    if (matchs1.length == matchs2.length) {
        var _date = new Date(1970, 0, 1);
        for (var i = 0; i < matchs1.length; i++) {
            var _int = parseInt(matchs2[i]);
            var sign = matchs1[i];
            switch (sign.charAt(0)) {
                case 'y':
                    _date.setFullYear(_int);break;
                case 'M':
                    _date.setMonth(_int - 1);break;
                case 'd':
                    _date.setDate(_int);break;
                case 'h':
                    _date.setHours(_int);break;
                case 'm':
                    _date.setMinutes(_int);break;
                case 's':
                    _date.setSeconds(_int);break;
            }
        }
        return _date;
    }
    return null;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    install() {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$myCart = myCart;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$baseimgurl = baseImgUri;

        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$responseStatus = responseStatus;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter("formatData", formatData);
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter("parseData", parseDate);
    }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
	name: 'app',
	components: {},
	data() {
		return {
			active: [false, false, false, false]
		};
	},
	methods: {
		changeTab(current) {
			for (let i in this.active) {
				this.active[i] = false;
			}

			this.active[current] = true;
		}
	},
	created: function () {
		let path = this.$route.path;
		if (path == "/index") {
			this.active[0] = true;
			return;
		}
		if (path == "/mycart") {
			this.active[1] = true;
			return;
		}
		if (path == "/myorder") {
			this.active[2] = true;
			return;
		}
		if (path == "/user") {
			this.active[3] = true;
			return;
		}
		this.active[0] = true;
	}
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.87b23625c2f5fa45aa79.js.map
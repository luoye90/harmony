/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/chart.js":
/*!******************************************************************************!*\
  !*** d:/code/harmony/netInfo/entry/src/main/js/default/pages/index/chart.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  c: '',
  ctx: '',
  now: '',
  time: '',
  canvasInterval: '',
  drawPanel: function drawPanel(ctx) {
    ctx.beginPath(); //开始

    ctx.arc(300, 300, 200, 0, Math.PI * 2); //绘制弧线路径

    ctx.fillStyle = 'white'; //填充颜色

    ctx.fill(); //填充

    ctx.closePath(); //闭合
  },
  hourCalibration: function hourCalibration(ctx) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //定义刻度的数字

    ctx.beginPath(); //开始

    ctx.translate(300, 300); //移动当前坐标系的原点

    ctx.font = '30px bold'; //文字的大小

    ctx.textAlign = "center"; // 文字居中

    ctx.textBaseline = "middle"; // 设置文本绘制中的水平对齐方式 为文本块的中间

    ctx.fillStyle = "black"; // 填充颜色

    for (var i = 0; i < arr.length; i++) {
      //绘制填充类文本
      ctx.fillText(arr[i], 168 * Math.cos((i * 30 - 60) * Math.PI / 180), 168 * Math.sin((i * 30 - 60) * Math.PI / 180));
    }

    ctx.closePath(); // 结束
  },
  centerDot: function centerDot(ctx) {
    ctx.beginPath(); // 开始

    ctx.arc(0, 0, 8, 0, 2 * Math.PI); //绘制弧线路径

    ctx.fill(); //对封闭路径进行填充

    ctx.beginPath(); //开始

    ctx.fillStyle = "white";
    ctx.arc(0, 0, 5, 0, 2 * Math.PI); //绘制弧线路径

    ctx.fill(); //对封闭路径进行填充
  },
  getTimeStamp: function getTimeStamp() {
    var zoneOffset = 8; //算出时差,并转换为毫秒：

    var offset2 = new Date().getTimezoneOffset() * 60 * 1000; //算出现在的时间：

    var nowDate2 = new Date().getTime(); //此时东八区的时间

    var currentZoneDate = new Date(nowDate2 + offset2 + zoneOffset * 60 * 60 * 1000);
    return currentZoneDate;
  },
  hourHand: function hourHand(ctx, hours, minutes) {
    var radius = 2 * Math.PI / 12 * hours + 1 / 6 * Math.PI / 60 * minutes;
    ctx.save(); // 保存当前状态，为了旋转后能回到当初状态。

    ctx.beginPath(); //开始

    ctx.lineWidth = 8; // 针的宽度

    ctx.lineCap = "round"; // 针头为圆角

    ctx.strokeStyle = "green"; //针的颜色

    ctx.rotate(radius); // 旋转

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -90);
    ctx.stroke();
    ctx.closePath(); // 结束
    // 回到保存的状态

    ctx.restore();
  },
  minuteHand: function minuteHand(ctx, minutes) {
    2 * Math.PI;
    var radius = 2 * Math.PI / 60 * minutes;
    ctx.save(); // 保存当前状态，为了旋转后能回到当初状态。

    ctx.beginPath(); //开始

    ctx.lineWidth = 4; // 针的宽度

    ctx.lineCap = "round"; //针头为圆角

    ctx.strokeStyle = "black";
    ctx.rotate(radius); //旋转

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -110);
    ctx.stroke(); //绘制轮廓圆

    ctx.closePath(); //结束

    ctx.restore();
  },
  secondHand: function secondHand(ctx, seconds) {
    var radius = 2 * Math.PI / 60 * seconds;
    ctx.save(); // 保存当前状态，为了旋转后能回到当初状态。

    ctx.beginPath(); //开始

    ctx.lineWidth = 2; // 针的宽度

    ctx.lineCap = "round"; //针头为圆角

    ctx.strokeStyle = "red";
    ctx.rotate(radius); //旋转

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -140);
    ctx.stroke(); //绘制轮廓圆

    ctx.closePath(); //结束

    ctx.restore();
  },
  updateClock: function updateClock(ctx) {
    var time = this.getTimeStamp();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    ctx.save();
    this.drawPanel(this.ctx);
    this.hourCalibration(this.ctx);
    this.secondHand(this.ctx, seconds);
    this.minuteHand(this.ctx, minutes);
    this.hourHand(this.ctx, hours, minutes);
    this.centerDot(this.ctx);
    ctx.closePath();
    ctx.restore();
  },
  initData: function initData(el, val) {
    if (!this.ctx) {
      this.ctx = el.getContext('2d');
    }

    this.draw(val);
  },
  ///////////////////////////////////////////////////////
  draw: function draw(val) {
    var startAngle = 5 / 6 * Math.PI;
    var endAngle = 13 / 6 * Math.PI;
    var nowAngle = startAngle + (endAngle - startAngle) * val;
    var lineWidth = 16;
    var outerWidth = 2;
    var splitWidth = 5;
    var x = 300;
    var y = 270;
    var r1 = 250;
    var r2 = 260;
    this.ctx.clearRect(0, 0, 600, 600); //绘制背景底盘

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, r1, startAngle, endAngle);
    this.ctx.strokeStyle = '#4e6a68';
    this.ctx.lineWidth = lineWidth;
    this.ctx.setLineDash([0]);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(x, y, r2, startAngle, endAngle);
    this.ctx.strokeStyle = '#4e6a68';
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([outerWidth, splitWidth]);
    this.ctx.stroke(); // this.ctx.restore();
    //绘制填充颜色部分
    // this.ctx.save();

    this.ctx.beginPath();
    this.ctx.strokeStyle = '#18c9b2';
    this.ctx.arc(x, y, r1, startAngle, nowAngle);
    this.ctx.lineWidth = lineWidth;
    this.ctx.setLineDash([0]);
    this.ctx.stroke(); // this.ctx.restore();
    // this.ctx.save();

    this.ctx.beginPath();
    this.ctx.arc(x, y, r2, startAngle, nowAngle);
    this.ctx.lineWidth = outerWidth;
    this.ctx.setLineDash([outerWidth, splitWidth]);
    this.ctx.stroke(); // this.ctx.restore();
    //绘制表针

    this.ctx.save();
    this.ctx.beginPath(); //开始

    this.ctx.lineWidth = 5; // 针的宽度

    this.ctx.setLineDash([0]);
    this.ctx.lineCap = "round"; //针头为圆角

    this.ctx.strokeStyle = "#18c9b2";
    this.ctx.moveTo(300, 270);
    this.ctx.lineTo(220 * Math.cos(nowAngle) + 300, 220 * Math.sin(nowAngle) + 270);
    this.ctx.stroke(); //绘制轮廓圆

    this.ctx.restore();
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.hml?entry":
/*!*************************************************************************************!*\
  !*** d:/code/harmony/netInfo/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/script.js!../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../../Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\Harmony\\SDK\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\Harmony\\SDK\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/style.js!d:/code/harmony/netInfo/entry/src/main/js/default/pages/index/index.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "display": "flex",
    "width": "100%",
    "height": "100%",
    "flexDirection": "column",
    "backgroundColor": "#000000"
  },
  ".main-content": {
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "40px",
    "paddingLeft": "24px",
    "paddingRight": "24px",
    "paddingTop": "48px",
    "paddingBottom": "24px"
  },
  ".main-content text": {
    "textAlign": "left",
    "color": "#FFFFFF"
  },
  ".main-content .label": {
    "paddingTop": "18px"
  },
  ".main-content .font-30": {
    "fontSize": "30px"
  },
  ".main-content .font-40": {
    "fontSize": "30px"
  },
  ".main-content .font-60": {
    "fontSize": "60px"
  },
  ".main-content .font-80": {
    "fontSize": "80px"
  },
  ".main-content .font-weight": {
    "fontWeight": "700"
  },
  ".main-content .chart-text": {
    "position": "absolute",
    "top": "110px",
    "left": "190px",
    "width": "300px",
    "height": "300px",
    "backgroundColor": "#52c4b2",
    "borderBottomLeftRadius": "150px",
    "borderBottomRightRadius": "150px",
    "borderTopLeftRadius": "150px",
    "borderTopRightRadius": "150px",
    "paddingTop": "50px",
    "marginBottom": "48px"
  },
  ".main-content list-item": {
    "display": "flex",
    "justifyContent": "space-between"
  },
  ".main-content .chart-text list-item text": {
    "width": "100%",
    "textAlign": "center"
  },
  ".main-content .value": {
    "paddingTop": "12px",
    "paddingLeft": "2px"
  },
  ".main-content .value-second": {
    "paddingTop": "30px",
    "color": "#cccccc"
  },
  ".main-content .unit": {
    "paddingLeft": "12px",
    "paddingTop": "30px"
  },
  ".main-content progress": {
    "paddingTop": "12px",
    "color": "#419a68",
    "backgroundColor": "#aaaaaa",
    "strokeWidth": "40px"
  },
  ".main-content .good-progress": {
    "color": "#083221"
  },
  ".main-content .normal-progress": {
    "color": "#419a68"
  },
  ".main-content .not-good-progress": {
    "color": "#f7c778"
  },
  ".main-content .bad-progress": {
    "color": "#8B0000"
  },
  ".main-content slider": {
    "color": "#1c1c1c",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  ".main-content switch": {
    "fontSize": "20px",
    "marginTop": "-8px"
  },
  ".button-controller": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "20px",
    "paddingBottom": "20px"
  },
  ".btn": {
    "width": "70%",
    "height": "80px",
    "fontSize": "30px",
    "backgroundColor": "#1976D2",
    "textColor": "#FFFFFF"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.hml":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/template.js!d:/code/harmony/netInfo/entry/src/main/js/default/pages/index/index.hml ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "className": "main-content"
      },
      "type": "div",
      "classList": [
        "main-content"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:3",
            "ref": "chart"
          },
          "type": "canvas",
          "style": {
            "width": "600px",
            "height": "600px",
            "marginTop": "0px",
            "marginRight": "0px",
            "marginBottom": "0px",
            "marginLeft": "0px",
            "paddingTop": "0px",
            "paddingRight": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:4",
            "className": "chart-text"
          },
          "type": "list",
          "classList": [
            "chart-text"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:5"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:6",
                    "className": "font-weight",
                    "value": "网速"
                  },
                  "type": "text",
                  "classList": [
                    "font-weight"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:8"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:9",
                    "className": "font-80 font-weight",
                    "value": function () {return this.formatNetData('bandWidth').value}
                  },
                  "type": "text",
                  "classList": [
                    "font-80",
                    "font-weight"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:13"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:14",
                    "className": "font-weight",
                    "value": function () {return this.formatNetData('bandWidth').unit}
                  },
                  "type": "text",
                  "classList": [
                    "font-weight"
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:19",
            "className": "list-content"
          },
          "type": "list",
          "classList": [
            "list-content"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:20"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:21"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:22",
                        "className": "label font-30",
                        "value": "下载:"
                      },
                      "type": "text",
                      "classList": [
                        "label",
                        "font-30"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:23",
                        "className": "font-60 font-weight value",
                        "value": function () {return this.formatNetData('downSpeed').value}
                      },
                      "type": "text",
                      "classList": [
                        "font-60",
                        "font-weight",
                        "value"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:24",
                        "className": "font-40 unit",
                        "value": function () {return this.formatNetData('downSpeed').unit}
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "unit"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:26"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:27",
                        "className": "label font-30",
                        "value": "上传:"
                      },
                      "type": "text",
                      "classList": [
                        "label",
                        "font-30"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:28",
                        "className": "font-60 font-weight value",
                        "value": function () {return this.formatNetData('upSpeed').value}
                      },
                      "type": "text",
                      "classList": [
                        "font-60",
                        "font-weight",
                        "value"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:29",
                        "className": "font-40 unit",
                        "value": function () {return this.formatNetData('upSpeed').unit}
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "unit"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:32"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:33"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:34",
                        "className": "label font-30",
                        "value": "已用流量:"
                      },
                      "type": "text",
                      "classList": [
                        "label",
                        "font-30"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:35",
                        "className": "font-60 font-weight value",
                        "value": function () {return this.formatTrafficInfo(this.trafficInfo.dataAmount)[0]}
                      },
                      "type": "text",
                      "classList": [
                        "font-60",
                        "font-weight",
                        "value"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:36",
                        "className": "font-40 value-second",
                        "value": function () {return this.formatTrafficInfo(this.trafficInfo.dataAmount)[1]}
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "value-second"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:37",
                        "className": "font-40 unit",
                        "value": "G"
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "unit"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:39"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:40",
                        "className": "label font-30",
                        "value": "剩余流量:"
                      },
                      "type": "text",
                      "classList": [
                        "label",
                        "font-30"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:41",
                        "className": "font-60 font-weight value",
                        "value": function () {return this.formatTrafficInfo(this.trafficInfo.remain)[0]}
                      },
                      "type": "text",
                      "classList": [
                        "font-60",
                        "font-weight",
                        "value"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:42",
                        "className": "font-40 value-second",
                        "value": function () {return this.formatTrafficInfo(this.trafficInfo.remain)[1]}
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "value-second"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:43",
                        "className": "font-40 unit",
                        "value": "G"
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "unit"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:46"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:47"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:48",
                        "className": "label font-30",
                        "value": "信号强度:"
                      },
                      "type": "text",
                      "classList": [
                        "label",
                        "font-30"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:49",
                        "className": "font-60 font-weight value",
                        "value": function () {return this.signalInfo.level}
                      },
                      "type": "text",
                      "classList": [
                        "font-60",
                        "font-weight",
                        "value"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:50",
                        "className": "font-40 unit",
                        "value": "%"
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "unit"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:51",
                        "className": "font-40 value-second",
                        "value": function () {return decodeURI('%EF%BC%88') + (this.signalInfo.dbm) + decodeURI('dBm%EF%BC%89')}
                      },
                      "type": "text",
                      "classList": [
                        "font-40",
                        "value-second"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:54"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:55",
                    "className": "{{ signalInfo.class }}",
                    "type": "horizontal",
                    "percent": function () {return (this.signalInfo.level) + decodeURI('%7D')}
                  },
                  "type": "progress",
                  "classList": function () {return [this.signalInfo.class]}
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:58"
              },
              "type": "list-item",
              "style": {
                "marginTop": "75%"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:59"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:60",
                        "className": "label-mini",
                        "value": "屏幕亮度:"
                      },
                      "type": "text",
                      "classList": [
                        "label-mini"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:61",
                        "value": function () {return this.screenInfo.brightness},
                        "showtips": "true",
                        "min": "0",
                        "max": "100"
                      },
                      "type": "slider",
                      "style": {
                        "width": "30%"
                      },
                      "events": {
                        "change": "brightnessChange"
                      }
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:65"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:66",
                        "className": "label-mini",
                        "value": "屏幕常亮:"
                      },
                      "type": "text",
                      "classList": [
                        "label-mini"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:67",
                        "checked": function () {return this.screenInfo.keepScreenOn},
                        "showtext": "true"
                      },
                      "type": "switch",
                      "events": {
                        "change": "keepScreenChange"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:70"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:71",
                    "className": "button-controller"
                  },
                  "type": "div",
                  "classList": [
                    "button-controller"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:72",
                        "className": "btn",
                        "waiting": function () {return this.isLoading},
                        "value": function () {return this.$t('校正流量')}
                      },
                      "type": "button",
                      "classList": [
                        "btn"
                      ],
                      "onBubbleEvents": {
                        "click": "getValidInfo"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\Harmony\\SDK\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\Harmony\\SDK\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/index.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/script.js!d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=D:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!d:/Harmony/SDK/hmscore/2.2.0/js/build-tools/ace-loader/lib/resource-reference-script.js!d:/code/harmony/netInfo/entry/src/main/js/default/pages/index/index.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault(requireModule("@system.prompt"));

var _system2 = _interopRequireDefault(requireModule("@system.app"));

var _ohos = _interopRequireDefault(requireModule("@ohos.window"));

var _ohosNet = _interopRequireDefault(requireModule("@ohos.net.http"));

var _chart = _interopRequireDefault(__webpack_require__(/*! ./chart */ "../../../../../../../code/harmony/netInfo/entry/src/main/js/default/pages/index/chart.js"));

var _default = {
  data: {
    isLoading: false,
    netInfo: {
      tx: 0,
      rx: 0,
      downSpeed: '',
      upSpeed: '',
      bandWidth: ''
    },
    signalInfo: {
      level: '',
      dbm: '',
      "class": ''
    },
    trafficInfo: {
      remain: 0,
      dataAmount: 0,
      recordTime: 0
    },
    screenInfo: {
      keepScreenOn: true,
      brightness: 0
    }
  },
  onShow: function onShow() {
    if (this.trafficInfo.dataAmount) {
      return;
    }

    this.showToast('启动成功!', 5000);
    this.getNetInfo();
    this.getValidInfo();
    this.setWindow();

    _chart["default"].initData(this.$refs.chart);
  },
  getNetInfo: function getNetInfo() {
    var _this = this;

    setInterval((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var bandWidth;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _newArrowCheck2["default"])(this, _this);
              _context.next = 3;
              return this.getInfoFromJava();

            case 3:
              _context.next = 5;
              return this.getSignalFromJava();

            case 5:
              bandWidth = Number(this.formatNetData('bandWidth').value);

              if (bandWidth < 10) {
                bandWidth = bandWidth / 20;
              } else {
                bandWidth = 0.5 + bandWidth / 100;
              }

              if (bandWidth > 1) {
                bandWidth = 1;
              }

              _chart["default"].initData(this.$refs.chart, bandWidth);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })).bind(this), 1000);
  },
  getValidInfo: function getValidInfo(isBtnClick) {
    var _this2 = this;

    var httpRequest = _ohosNet["default"].createHttp();

    this.isLoading = true;
    httpRequest.request("http://ww.dwgiot.cn//index/ka_ban/RefreshKaban/kahao/89861500032430070843", {
      method: _ohosNet["default"].RequestMethod.GET,
      header: {
        'Content-Type': 'application/json'
      },
      extraData: {
        "data": "data to send"
      }
    }, function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(err, data) {
        var _JSON$parse, info, dataAmount, recordTime, diffVal, diffTime, day, hou, min, sec, _JSON$parse2;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _newArrowCheck2["default"])(this, _this2);
                this.isLoading = false;

                if (err) {
                  _context2.next = 22;
                  break;
                }

                info = (_JSON$parse = JSON.parse(data.result)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.info;

                if (!info.total) {
                  _context2.next = 21;
                  break;
                }

                dataAmount = parseFloat((info.dataAmount / 1024).toFixed(3));
                recordTime = new Date().getTime();
                this.trafficInfo.remain = parseFloat((500 - dataAmount).toFixed(3));

                if (!isBtnClick) {
                  _context2.next = 17;
                  break;
                }

                diffVal = (this.trafficInfo.dataAmount * 1024 - info.dataAmount).toFixed(2);
                diffTime = recordTime - this.trafficInfo.recordTime;
                day = parseInt(diffTime / 1000 / 60 / 60 / 24);
                hou = parseInt(diffTime / 1000 / 60 / 60 % 24);
                min = parseInt(diffTime / 1000 / 60 % 60 % 24);
                sec = parseInt(diffTime / 1000 % 60 % 60 % 24);
                _context2.next = 17;
                return this.showToast("\u64CD\u4F5C\u6210\u529F!\u6D41\u91CF\u8BEF\u5DEE:".concat(diffVal, "Mb, \u8BA1\u65F6:").concat(day, "\u5929").concat(hou, "\u5C0F\u65F6").concat(min, "\u5206\u949F").concat(sec, "\u79D2"), 10000);

              case 17:
                this.trafficInfo.dataAmount = dataAmount;
                this.trafficInfo.recordTime = recordTime;
                _context2.next = 22;
                break;

              case 21:
                this.showToast((_JSON$parse2 = JSON.parse(data.result)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.msg);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }().bind(this));
  },
  initAction: function initAction(code) {
    var actionData = {};
    var action = {};
    action.bundleName = "ohos.samples.netinfo";
    action.abilityName = "NetInfoInternalAbility";
    action.messageCode = code;
    action.data = actionData;
    action.abilityType = 1;
    action.syncOption = 0;
    return action;
  },
  getInfoFromJava: function () {
    var _getInfoFromJava = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var action, result, rx, tx, val;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              action = this.initAction(1001);
              _context3.next = 4;
              return FeatureAbility.callAbility(action);

            case 4:
              result = _context3.sent;
              rx = Number(result.split(',')[0]) || 0;
              tx = Number(result.split(',')[1]) || 0;

              if (this.netInfo.rx) {
                this.netInfo.downSpeed = rx - this.netInfo.rx;
                this.netInfo.upSpeed = tx - this.netInfo.tx;
                this.netInfo.bandWidth = Number(this.netInfo.downSpeed) * 8;

                if (this.trafficInfo.dataAmount) {
                  val = parseFloat(Number(this.netInfo.downSpeed + this.netInfo.upSpeed) / 1024 / 1024 / 1024);
                  this.trafficInfo.dataAmount = parseFloat((this.trafficInfo.dataAmount + val).toFixed(3));
                  this.trafficInfo.remain = parseFloat((500 - this.trafficInfo.dataAmount).toFixed(3));
                }
              }

              this.netInfo.rx = rx;
              this.netInfo.tx = tx;
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);

            case 15:
              _system2["default"].requestFullWindow({
                duration: 200
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 12]]);
    }));

    function getInfoFromJava() {
      return _getInfoFromJava.apply(this, arguments);
    }

    return getInfoFromJava;
  }(),
  getSignalFromJava: function () {
    var _getSignalFromJava = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      var action, result, strVal;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              action = this.initAction(1002);
              _context4.next = 4;
              return FeatureAbility.callAbility(action);

            case 4:
              result = _context4.sent;
              strVal = (result === null || result === void 0 ? void 0 : result.substr(28, 3)) || '';
              this.signalInfo.dbm = Number(strVal) || '';
              this.signalInfo.level = this.signalInfo.dbm ? this.signalInfo.dbm + 120 : '';

              if (this.signalInfo.level > 40) {
                this.signalInfo["class"] = 'good-progress';
              } else if (this.signalInfo.level > 30) {
                this.signalInfo["class"] = 'normal-progress';
              } else if (this.signalInfo.level > 20) {
                this.signalInfo["class"] = 'not-good-progress';
              } else {
                this.signalInfo["class"] = 'bad-progress';
              }

              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 11]]);
    }));

    function getSignalFromJava() {
      return _getSignalFromJava.apply(this, arguments);
    }

    return getSignalFromJava;
  }(),
  formatTrafficInfo: function formatTrafficInfo(val) {
    var arr = String(val).split('.');
    return [arr[0] + '.', arr[1]];
  },
  formatNetData: function formatNetData(key) {
    var val = this.netInfo[key] / 1024;
    var value = val.toFixed(2);
    var unit = "Kb/s";

    if (val > 1024) {
      unit = "Mb/s";
      value = (val / 1024).toFixed(2);
    }

    if (key === 'bandWidth') {
      unit = "Mbps";
      value = (val / 1024).toFixed(2);
    }

    return {
      value: value,
      unit: unit
    };
  },
  setWindow: function setWindow() {
    var _this3 = this;

    _ohos["default"].getTopWindow(function (err, data) {
      var _this4 = this;

      (0, _newArrowCheck2["default"])(this, _this3);
      var windowClass = data;
      windowClass.setKeepScreenOn(this.screenInfo.keepScreenOn, function (err) {
        (0, _newArrowCheck2["default"])(this, _this4);
      }.bind(this));
      windowClass.setBrightness(this.screenInfo.brightness / 100, function (err) {
        (0, _newArrowCheck2["default"])(this, _this4);
      }.bind(this));
    }.bind(this));
  },
  brightnessChange: function brightnessChange(value) {
    this.screenInfo.brightness = Number(value.progress);
    this.setWindow();
  },
  keepScreenChange: function keepScreenChange(value) {
    this.screenInfo.keepScreenOn = Boolean(value.checked);
    this.setWindow();
  },
  showToast: function showToast(msg, duration) {
    _system["default"].showToast({
      message: msg,
      duration: duration || 3000,
      bottom: 600
    });
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && (0, _typeof2["default"])(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : (0, _typeof2["default"])(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map
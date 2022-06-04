
/*************************** [bundle] ****************************/
// Original file:./src/App/home/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;
var ref=__etcpack__scope_args__.ref;

__etcpack__scope_args__=window.__etcpack__getBundle('34');
var dealMem =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('35');
var dealTime =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('36');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('37');
var template =__etcpack__scope_args__.default;

var os = globalThis.nodeRequire('os');

var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "openTime", void 0);
  }

  _createClass(_class2, [{
    key: "$setup",
    value: function $setup() {
      return {
        openTime: ref(dealTime(os.uptime())),
        // 开机时长
        totalMem: ref(dealMem(os.totalmem())),
        // 总内存
        freeMem: ref(dealMem(os.freemem())) // 空闲内存

      };
    }
  }, {
    key: "$mounted",
    value: function $mounted() {
      var _this = this;

      setTimeout(function () {
        _this.openTime = dealTime(os.uptime());
      }, 1000);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/tool/dealMem.js
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= (function (mem) {
  var G = 0,
      M = 0,
      KB = 0;
  mem > 1 << 30 && (G = (mem / (1 << 30)).toFixed(2));
  mem > 1 << 20 && mem > 1 << 10 && mem > 1 << 20 && (KB = (mem / (1 << 10)).toFixed(2));
  return G > 0 ? G + 'G' : M > 0 ? M + 'M' : KB > 0 ? KB + 'KB' : mem + 'B';
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/tool/dealTime.js
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= (function (seconds) {
  seconds = seconds | 0;
  var day = seconds / (3600 * 24) | 0;
  var hours = (seconds - day * 3600 * 24) / 3600 | 0;
  var minutes = (seconds - day * 3600 * 24 - hours * 3600) / 60 | 0;
  var second = seconds % 60;
  if (day < 10) day = '0' + day;
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (second < 10) second = '0' + second;
  return day + "天" + hours + "时" + minutes + "分" + second + "秒";
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/home/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\npadding-left: 50px;\n\n}\n\n .view>h2{\n\nmargin-top: 30px;\n\nborder-left: 2px solid rgb(38, 212, 11);\n\npadding-left: 5px;\n\nfont-size: 15px;\n\nfont-weight: 200;\n\n}\n\n .view>.computer-info>li{\n\ndisplay: inline-block;\n\nwidth: 160px;\n\nmargin: 10px 40px 0 0;\n\noutline: 1px solid rgb(227, 226, 226);\n\nfont-size: 12px;\n\nline-height: 2em;\n\npadding-left: 40px;\n\nbackground-repeat: no-repeat;\n\nbackground-size: auto 70%;\n\nbackground-position: 3px center;\n\n}\n\n .view>.computer-info>li.time{\n\nbackground-image: url('./image/time.png');\n\n}\n\n .view>.computer-info>li.memory{\n\nbackground-image: url('./image/memory.png');\n\n}\n\n .view>.computer-info>li>h4{\n\nfont-weight: 800;\n\ncolor: rgb(10, 124, 124);\n\n}\n\n .view>.computer-info>li>span{\n\nfont-weight: 400;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/home/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <h2>\n        基本信息\n    </h2>\n    <ul class=\"computer-info\">\n        <li class=\"time\">\n            <h4>开机时长</h4>\n            <span ui-bind=\"openTime\"></span>\n        </li>\n        <li class=\"memory\">\n            <h4>总内存</h4>\n            <span ui-bind=\"totalMem\"></span>\n        </li>\n        <li class=\"memory\">\n            <h4>空闲内存</h4>\n            <span ui-bind=\"freeMem\"></span>\n        </li>\n    </ul>\n\n</div>\n"
  
    return __etcpack__scope_bundle__;
}


/*************************** [bundle] ****************************/
// Original file:./src/App/tool/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('38');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('39');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "openExternal",
    value: function openExternal(event) {
      globalThis.nodeRequire('electron').shell.openExternal(event.target.getAttribute('tag'));
    }
  }, {
    key: "openNewWin",
    value: function openNewWin(event) {
      globalThis.nodeRequire('electron').ipcRenderer.send('new-win', {
        winName: event.target.getAttribute('tag'),
        size: {
          width: 960,
          height: 620
        }
      });
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/tool/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\npadding: 0 20px;\n\npadding-bottom: 20px;\n\n}\n\n .view>h2{\n\nmargin-top: 30px;\n\nborder-left: 2px solid rgb(38, 212, 11);\n\npadding-left: 5px;\n\nfont-size: 15px;\n\nfont-weight: 200;\n\n}\n\n .view>ul>li.link::after{\n\ncontent: \" \";\n\ndisplay: inline-block;\n\nwidth: 50px;\n\nheight: 50px;\n\nright: 0;\n\ntop: 0;\n\nbackground-image: url('./image/link.png');\n\nbackground-size: 60% auto;\n\nbackground-position: center center;\n\nbackground-repeat: no-repeat;\n\nposition: absolute;\n\n}\n\n .view>ul>li{\n\nposition: relative;\n\nbackground-position:10px center;\n\nbackground-size: 50px auto;\n\nbackground-repeat: no-repeat;\n\npadding-left: 70px;\n\nmin-height: 70px;\n\ndisplay: inline-block;\n\nwidth:300px;\n\noutline: 1px solid rgb(245, 244, 244);\n\nmargin-top: 20px;\n\nmargin-right: 10px;\n\ncursor: pointer;\n\n}\n\n .view>ul>li.music{\n\nbackground-image: url('./image/music.jpeg');\n\n}\n\n .view>ul>li.picture{\n\nbackground-image: url('./image/picture.jpeg');\n\n}\n\n .view>ul>li.draft{\n\nbackground-image: url('./image/draft.png');\n\n}\n\n .view>ul>li.video{\n\nbackground-image: url('./image/video.png');\n\n}\n\n .view>ul>li:hover{\n\noutline: 1px solid rgb(199, 196, 196);\n\n}\n\n .view>ul>li>h4{\n\nline-height: 40px;\n\nfont-size: 14px;\n\n}\n\n .view>ul>li>p{\n\nfont-size: 12px;\n\n}\n\n .view>ul>li>h4, .view>ul>li p{\n\npointer-events: none;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/tool/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <h2>\n        播放器\n    </h2>\n    <ul>\n        <li class=\"video\" tag=\"video-player\" ui-on:click=\"openNewWin\">\n            <h4>\n                视频播放器\n            </h4>\n            <p>\n                播放视频的小软件\n            </p>\n        </li>\n    </ul>\n    <h2>\n        编辑类\n    </h2>\n    <ul>\n        <li class=\"music link\" tag=\"https://hai2007.github.io/audio-editor/\" ui-on:click=\"openExternal\">\n            <h4>\n                音频编辑器\n            </h4>\n            <p>\n                一些常用的音频相关编辑工具集\n            </p>\n        </li>\n        <li class=\"picture\" tag=\"image-editor\" ui-on:click=\"openNewWin\">\n            <h4>\n                图片编辑器\n            </h4>\n            <p>\n                一个简单的图片编辑工具\n            </p>\n        </li>\n    </ul>\n    <h2>\n        辅助工具\n    </h2>\n    <ul>\n        <li class=\"draft\" tag=\"draft\" ui-on:click=\"openNewWin\">\n            <h4>\n                草稿纸\n            </h4>\n            <p>\n                一个方便打草稿说明的工具\n            </p>\n        </li>\n    </ul>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}

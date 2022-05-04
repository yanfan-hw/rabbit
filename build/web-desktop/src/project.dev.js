window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BlackRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb86eBrBrlCY4b2gO5WQuKm", "BlackRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        isCompleted: false,
        duration: 1.5,
        scale: .5,
        xPixel: 100
      },
      start: function start() {
        cc.log("Hello");
        this.moveRabbit();
      },
      completeAction: function completeAction() {
        this.isCompleted = !this.isCompleted;
      },
      moveRabbit: function moveRabbit() {
        var scaling = cc.scaleTo(this.duration, this.scale);
        var moveX = cc.moveBy(this.duration, this.xPixel, 0);
        var moveReturn = cc.moveBy(this.duration, -this.xPixel, 0);
        var runAction = this.node.runAction(cc.sequence(scaling, moveX, cc.flipX(true), moveReturn));
        return runAction;
      }
    });
    cc._RF.pop();
  }, {} ],
  BrownRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1744KDvhdIHb2Ci7sXn0cg", "BrownRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        isCompleted: false,
        rotation: 360,
        xPixel: 100,
        duration: 1
      },
      onLoad: function onLoad() {},
      start: function start() {
        cc.log("Hello. I'm Brownie!");
        this.moveRabbit();
      },
      completeAction: function completeAction() {
        this.isCompleted = !this.isCompleted;
      },
      moveRabbit: function moveRabbit() {
        var moveX = cc.moveBy(this.duration, this.xPixel, 0);
        var rotate = cc.rotateBy(this.duration, this.rotation);
        var runMove = this.node.runAction(cc.sequence(cc.spawn(moveX, rotate), cc.callFunc(this.completeAction, this)));
        return runMove;
      }
    });
    cc._RF.pop();
  }, {} ],
  GrayRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad62ai6GJ9I76gFFkmaBbKw", "GrayRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        isCompleted: false,
        duration: 1.5,
        yPixel: 50,
        jumpNumber: 3
      },
      onLoad: function onLoad() {},
      start: function start() {
        cc.log("Hmmm");
        this.moveRabbit();
      },
      completeAction: function completeAction() {
        this.isCompleted = !this.isCompleted;
      },
      moveRabbit: function moveRabbit() {
        var jump = cc.jumpBy(this.duration, 0, 0, this.yPixel, this.jumpNumber);
        var runJump = this.node.runAction(cc.sequence(jump, cc.callFunc(this.completeAction, this)));
        return runJump;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  RabbitMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b7d4lU3JhEwJVQFwz/E7D2", "RabbitMain");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        whiteRabbit: {
          default: null,
          type: cc.Node
        },
        brownRabbit: {
          default: null,
          type: cc.Node
        },
        grayRabbit: {
          default: null,
          type: cc.Node
        },
        blackRabbit: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.whiteRabbitCmp = this.whiteRabbit.getComponent("WhiteRabbit");
        this.brownRabbitCmp = this.brownRabbit.getComponent("BrownRabbit");
        this.grayRabbitCmp = this.grayRabbit.getComponent("GrayRabbit");
        this.blackRabbitCmp = this.blackRabbit.getComponent("BlackRabbit");
      },
      start: function start() {
        this.whiteRabbitCmp.node.active = true;
        this.brownRabbitCmp.node.active = false;
        this.grayRabbitCmp.node.active = false;
        this.blackRabbitCmp.node.active = false;
      },
      update: function update(dt) {
        this.whiteRabbitCmp.isCompleted && (this.brownRabbitCmp.node.active = true);
        this.brownRabbitCmp.isCompleted && (this.grayRabbitCmp.node.active = true);
        this.grayRabbitCmp.isCompleted && (this.blackRabbitCmp.node.active = true);
      }
    });
    cc._RF.pop();
  }, {} ],
  WhiteRabbit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d29f/GwfpK9pGDKKfieUt5", "WhiteRabbit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        duration: 1,
        xPixel: 100,
        isCompleted: false
      },
      onLoad: function onLoad() {},
      start: function start() {
        cc.log("Hello!");
        this.moveRabbit();
      },
      update: function update(dt) {},
      completeAction: function completeAction() {
        this.isCompleted = !this.isCompleted;
      },
      moveRabbit: function moveRabbit() {
        var moveX = cc.moveBy(this.duration, this.xPixel, 0);
        var runMove = this.node.runAction(cc.sequence(moveX, cc.callFunc(this.completeAction, this)));
        return runMove;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "BlackRabbit", "BrownRabbit", "GrayRabbit", "RabbitMain", "WhiteRabbit" ]);
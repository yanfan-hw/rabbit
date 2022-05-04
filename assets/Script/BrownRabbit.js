cc.Class({
    extends: cc.Component,

    properties: {
        isCompleted: false,
        rotation: 360,
        xPixel: 100,
        duration: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    start() {
        cc.log("Hello. I'm Brownie!");
        this.moveRabbit();
    },

    // update(dt) {
    // },

    completeAction() {
        this.isCompleted = !this.isCompleted;
    },
    moveRabbit() {
        let moveX = cc.moveBy(this.duration, this.xPixel, 0);
        let rotate = cc.rotateBy(this.duration, this.rotation);
        let runMove = this.node.runAction(cc.sequence(cc.spawn(moveX, rotate), cc.callFunc(this.completeAction, this)));
        return runMove;
    }
});

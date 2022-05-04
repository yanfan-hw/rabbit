cc.Class({
    extends: cc.Component,

    properties: {
        duration: 1,
        xPixel: 100,
        isCompleted: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    start() {
        cc.log("Hello!");
        this.moveRabbit();
    },

    update(dt) {

    },

    completeAction() {
        this.isCompleted = !this.isCompleted;
    },
    moveRabbit() {
        let moveX = cc.moveBy(this.duration, this.xPixel, 0);
        let runMove = this.node.runAction(cc.sequence(moveX, cc.callFunc(this.completeAction, this)));
        return runMove;
    }
});

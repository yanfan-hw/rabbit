cc.Class({
    extends: cc.Component,

    properties: {
        isCompleted: false,
        duration: 1.5,
        yPixel: 50,
        jumpNumber: 3
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    start() {
        cc.log("Hmmm");
        this.moveRabbit();
    },
    completeAction() {
        this.isCompleted = !this.isCompleted;
    },
    moveRabbit() {
        let jump = cc.jumpBy(this.duration, 0, 0, this.yPixel, this.jumpNumber);
        let runJump = this.node.runAction(cc.sequence(jump, cc.callFunc(this.completeAction, this)));
        return runJump;
    },

    update(dt) {
    },
});

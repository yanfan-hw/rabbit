cc.Class({
    extends: cc.Component,

    properties: {
        isCompleted: false,
        duration: 1.5,
        scale: 0.5,
        xPixel: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        cc.log("Hello");
        this.moveRabbit();
    },
    completeAction() {
        this.isCompleted = !this.isCompleted;
    },
    moveRabbit() {
        let scaling = cc.scaleTo(this.duration, this.scale);
        let moveX = cc.moveBy(this.duration, this.xPixel, 0);
        let moveReturn = cc.moveBy(this.duration, -this.xPixel, 0);
        let runAction = this.node.runAction(cc.sequence(scaling, moveX, cc.flipX(true), moveReturn));
        return runAction;
    },

    // update (dt) {},
});

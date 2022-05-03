cc.Class({
    extends: cc.Component,

    properties: {
        grayRabbit: {
            default: null,
            type: cc.Component
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.log("Hello. I'm Brownie!");
    },

    start() {
        this.DISTANCE = 100;
        this.defaultPosition = this.node.x;
    },

    update(dt) {
        if (this.node.x - this.defaultPosition < this.DISTANCE) {
            this.node.x += 1;
            this.node.angle -= 5;
        }
        if (this.node.x - this.defaultPosition == this.DISTANCE) {
            this.node.angle = 0;
            // cc.log(this.node.x);
            // cc.log(this.grayRabbit)
            // this.grayRabbit.node.active = true;
        }
    },

    moveRabbit() {

    }
});

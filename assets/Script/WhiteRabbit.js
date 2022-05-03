cc.Class({
    extends: cc.Component,

    properties: {
        brownRabbit: {
            default: null,
            type: cc.Component
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.log("Hello!");
    },

    start() {
        this.DISTANCE = 100;
        this.defaultPosition = this.node.x;
    },

    update(dt) {
        this.moveRabbit();
        if (this.node.x - this.defaultPosition == this.DISTANCE) {
            this.brownRabbit.node.active = true;
        }
    },
    moveRabbit() {
        if ((this.node.x - this.defaultPosition) < this.DISTANCE) {
            this.node.x += 1.0;
        }
    }
});

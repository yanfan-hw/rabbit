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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.whiteRabbitCmp = this.whiteRabbit.getComponent("WhiteRabbit");
        this.brownRabbitCmp = this.brownRabbit.getComponent("BrownRabbit");
        this.grayRabbitCmp = this.grayRabbit.getComponent("GrayRabbit");
        this.blackRabbitCmp = this.blackRabbit.getComponent("BlackRabbit");
    },

    start () {
        this.whiteRabbitCmp.node.active = true;

        this.brownRabbitCmp.node.active = false;
        this.grayRabbitCmp.node.active = false;
        this.blackRabbitCmp.node.active = false;
    },

    update (dt) {
        if (this.whiteRabbitCmp.isCompleted) {
            this.brownRabbitCmp.node.active = true;
        }
        if (this.brownRabbitCmp.isCompleted) {
            this.grayRabbitCmp.node.active = true;
        }
        if (this.grayRabbitCmp.isCompleted) {
            this.blackRabbitCmp.node.active = true;
        }
    },
});

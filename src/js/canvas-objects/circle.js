import { ctx } from '../modules/canvas-config';

export default class Circle {
    constructor(opts) {
        Object.assign(this, opts);
    }

    draw() {
        ctx.globalAlpha = this.opacity || 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        if (this.stroke) {
            ctx.strokeStyle = this.stroke.color;
            ctx.lineWidth = this.stroke.width;
            ctx.stroke();
        }
        if (this.fill) {
            ctx.fillStyle = this.fill;
            ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
    }
}

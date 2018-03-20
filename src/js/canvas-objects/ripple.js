import anime from 'animejs';
import Circle from './circle';
import { animationHandler } from '../modules/animation-handler';

export default class Ripple {
    constructor(x, y, color, size) {
        this.size = size;
        this.circle = new Circle({
            x: x,
            y: y,
            fill: color,
            r: 0,
            opacity: 1,
            stroke: {
                width: 3,
                color: color,
            },
        });
        this._animate();
    }

    _animate() {
        this.animation = anime({
            targets: this.circle,
            r: this.size,
            opacity: 0,
            easing: 'easeOutExpo',
            duration: 1100,
            complete: () => {
                animationHandler.remove(this.animation);
            },
        });
        animationHandler.add(this.animation);
    }
}

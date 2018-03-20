import anime from 'animejs';
import Circle from './circle';
import { animationHandler } from '../modules/animation-handler';

export default class Firework {
    constructor(x, y, fill, size) {
        this.size = size;
        this.particles = [];
        for (let i = 0; i < 32; i++) {
            this.particles.push(
                new Circle({
                    x: x,
                    y: y,
                    fill: fill,
                    r: anime.random(24, 48),
                })
            );
        }
        this._animate();
    }

    _animate() {
        this.animation = anime({
            targets: this.particles,
            x: particle => {
                return particle.x + anime.random(this.size, -this.size);
            },
            y: particle => {
                return (
                    particle.y +
                    anime.random(this.size * 1.15, -this.size * 1.15)
                );
            },
            r: 0,
            easing: 'easeOutExpo',
            duration: 1150,
            complete: () => {
                animationHandler.remove(this.animation);
            },
        });
        animationHandler.add(this.animation);
    }
}

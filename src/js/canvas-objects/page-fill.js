import anime from "animejs";
import Circle from "./circle";
import {cW, cH} from "../modules/canvas-config";
import {animationHandler} from "../modules/animation-handler";

export default class PageFill {
  constructor(x, y, fill) {
    Object.assign(this, {x, y, fill});
    this.circle = new Circle({
      x: this.x,
      y: this.y,
      r: 0,
      fill: this.fill
    });
    this._animate();
  }

  _animate() {
    const targetR = this._calcR();
    this.animation = anime({
      targets: this.circle,
      r: targetR,
      duration:  Math.max(targetR / 2 , 750 ),
      easing: "easeOutQuart",
      complete: () => {
        animationHandler.remove(this.animation);
        document.body.style.background = this.fill;
      }
    });
    animationHandler.add(this.animation);
  }

  _calcR() {
    const l = Math.max(this.x - 0, cW - this.x);
    const h = Math.max(this.y - 0, cH - this.y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
  }
}

import anime from "animejs";
import {ctx, cW, cH} from "./canvasConfig";


class AnimationHandler {
  constructor() {
    this.animations = [];
  }

  add(animation) {
    this.animations.push(animation);
  }

  remove(animation) {
    const index = this.animations.indexOf(animation);
    if (index > -1) {
      this.animations.splice(index, 1);
    }
  }

  init() {
    anime({
      duration: Infinity,
      update: () => {
        ctx.clearRect(0, 0, cW, cH);
        this.animations.forEach( animation => {
          animation.animatables.forEach( animatable => {
            animatable.target.draw();
          });
        });
      }
    });
  }
}

const animationHandler = new AnimationHandler();
animationHandler.init();
export {animationHandler};

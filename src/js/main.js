import WebFont from "webfontloader";

import PageFill from "./classes/PageFill";
import Ripple from "./classes/Ripple";
import Firework from "./classes/Firework";

import {cW, cH, resizeCanvas} from "./modules/canvasConfig";
import * as dotThingo from "./modules/dotThingo";
import * as colorPicker from "./modules/colorPicker";
import * as linkStyler from "./modules/linkStyler";

const handleClick = (e) => {
  if (e.touches) { 
    e.preventDefault();
    e = e.touches[0];
  }
  
  const currentColor = colorPicker.currentColor;
  const nextColor = colorPicker.next();
  const rippleSize = Math.min(200, (cW * 0.4));
  
  dotThingo.move(cW, cH);
  dotThingo.setColor(currentColor);
  
  linkStyler.setColor(currentColor);
  document.body.classList = "active";
  
  new PageFill(e.clientX, e.clientY, nextColor);
  new Ripple(e.clientX, e.clientY, currentColor, rippleSize);
  new Firework(e.clientX, e.clientY, currentColor, rippleSize);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
dotThingo.pulse();
dotThingo.addListeners(handleClick);

WebFont.load({
  google: {
    families: ['Alegreya:900'],
    text: 'Hi'
  }
});
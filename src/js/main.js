import WebFont from 'webfontloader';

import PageFill from './canvas-objects/page-fill';
import Ripple from './canvas-objects/ripple';
import Firework from './canvas-objects/firework';

import { cW, cH, resizeCanvas } from './modules/canvas-config';
import * as dotThingo from './modules/dot-thingo';
import * as colorPicker from './modules/color-picker';
import * as linkStyler from './modules/link-styler';

const handleClick = e => {
    if (e.touches) {
        e.preventDefault();
        e = e.touches[0];
    }

    const currentColor = colorPicker.currentColor;
    const nextColor = colorPicker.next();
    const rippleSize = Math.min(200, cW * 0.4);

    dotThingo.move(cW, cH);
    dotThingo.setColor(currentColor);

    linkStyler.setColor(currentColor);
    document.body.classList = 'active';

    new PageFill(e.clientX, e.clientY, nextColor);
    new Ripple(e.clientX, e.clientY, currentColor, rippleSize);
    new Firework(e.clientX, e.clientY, currentColor, rippleSize);
};

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
dotThingo.pulse();
dotThingo.addListeners(handleClick);

WebFont.load({
    google: {
        families: ['Alegreya:900'],
        text: 'Hi',
    },
});

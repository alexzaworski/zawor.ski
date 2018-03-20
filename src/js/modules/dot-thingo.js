import anime from 'animejs';
import { cW, cH } from './canvas-config';

const el = document.getElementById('target-dot');
const pulseEl = el.querySelector('.pulse--front');
const elW = el.offsetWidth;
const elH = el.offsetHeight;
const pulseSpeed = 1500;

let isPulsing = true;
let pulseTimeout;
let currentX;
let currentY;

const activate = () => {
    stopPulse();
    currentX = el.offsetLeft;
    currentY = el.offsetTop;
    el.style.transform =
        'translateX(' + currentX + 'px) translateY(' + currentY + 'px)';
};

const stopPulse = () => {
    isPulsing = false;
    el.classList.remove('pulsing');
    if (pulseTimeout) {
        window.clearTimeout(pulseTimeout);
    }
};

const chooseLocation = (xMax, yMax) => {
    let distance;
    let newX;
    let newY;
    const minDistance = Math.min(cH, cW) * 0.5;

    do {
        newX = anime.random(0, xMax - elW);
        newY = anime.random(0, yMax - elH);
        const dX = Math.pow(currentX - newX, 2);
        const dY = Math.pow(currentY - newY, 2);
        distance = Math.sqrt(dX + dY);
    } while (distance < minDistance);

    currentX = newX;
    currentY = newY;
    return { x: newX, y: newY };
};

export const pulse = () => {
    if (isPulsing) {
        el.classList.toggle('pulsing');
        pulseTimeout = window.setTimeout(() => {
            pulse();
        }, pulseSpeed);
    }
};

export const move = (xMax, yMax) => {
    if (isPulsing) {
        activate();
    }
    const { x, y } = chooseLocation(xMax, yMax);
    anime({
        targets: el,
        translateX: x,
        translateY: y,
        duration: 800,
        easing: 'easeOutExpo',
    });
};

export const setColor = color => {
    pulseEl.style.background = color;
};

export const addListeners = handler => {
    el.addEventListener('touchstart', handler);
    el.addEventListener('mousedown', handler);
};

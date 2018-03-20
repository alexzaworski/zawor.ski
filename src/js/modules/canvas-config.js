export const c = document.getElementById('c');
export const ctx = c.getContext('2d');
export let cH;
export let cW;

export const resizeCanvas = () => {
    cW = window.innerWidth;
    cH = window.innerHeight;
    c.width = cW * devicePixelRatio;
    c.height = cH * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
};

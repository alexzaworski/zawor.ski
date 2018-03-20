const el = document.createElement('style');
document.head.appendChild(el);

export const setColor = colorString => {
    el.innerText = 'a:after{background:' + colorString + '}';
};

const colors = [
    '#FF1C83', // pink
    '#282741', // purple
    '#26b4cd', // blue
    '#FFBE53', // yellow
];

let index = 0;

export let currentColor = colors[index];

export const next = () => {
    index++;
    if (index >= colors.length) {
        index = 0;
    }
    currentColor = colors[index];
    return currentColor;
};

const field = document.getElementById('field');

let rect = field.getBoundingClientRect();

let outerTopLeft = [rect.left, rect.top];
let outerBottomRight = [rect.right, rect.bottom];
let innerTopLeft = [rect.left + field.clientLeft, rect.top + field.clientTop];
let innerBottomRight = [
    rect.left + field.clientLeft + field.clientWidth,
    rect.top + field.clientTop + field.clientHeight
];
alert(`1: ${outerTopLeft}, 2: ${outerBottomRight}, 3: ${innerTopLeft}, 4: ${innerBottomRight}`)
let stpbl1 = document.getElementById('stpbl1')
let stpbrdr1 = document.getElementById('stpbrdr1')

let stpbl2 = document.getElementById('stpbl2')
let stpbrdr2 = document.getElementById('stpbrdr2')

let stpbl3 = document.getElementById('stpbl3')
let stpbrdr3 = document.getElementById('stpbrdr3')

stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = '3px solid white';
}
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = '3px solid black';
}

stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = '3px solid white';
}
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = '3px solid black';
}

stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = '3px solid white';
}
stpbl3.onmouseout = function() {
    stpbrdr3.style.borderBottom = '3px solid black';
}
let columnCount_1 = 3;
let elementGap = 20;
let elem = document.querySelector(".root");
let dot_elem = document.querySelectorAll(".root .el");
let arr_dot = Array.from(dot_elem);
arr_dot.forEach(el => console.log(el.offsetHeight))

// elem.setAttribute('column-count', 3);
// elem.setAttribute('column-gap', `${elementGap} px`);

// elem.style.columnCount = columnCount_1;
// elem.style.columnGap = `${elementGap} px`;

// elem.style.cssText = `column-count: ${columnCount_1}; column-gap: ${elementGap}px;`;
elem.style.cssText = `display: grid; grid-template-columns: repeat(${columnCount_1}, 1fr); grid-gap: ${elementGap}px;`
// elem.offsetWidth offsetHeight 
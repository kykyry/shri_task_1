let columnCount_1 = 3;
let elementGap = 4;
let elem = document.querySelector(".root");

// elem.setAttribute('column-count', 3);
// elem.setAttribute('column-gap', `${elementGap} px`);

// elem.style.columnCount = columnCount_1;
// elem.style.columnGap = `${elementGap} px`;

elem.style.cssText = `column-count: ${columnCount_1};
column-gap: ${elementGap} px;
  `;
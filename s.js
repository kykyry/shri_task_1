let columnCount = 3;
let elementGap = 20;
let elem = document.querySelector(".root");
let dot_elem = document.querySelectorAll(".root .el");
// let arr_dot = Array.from(dot_elem);
let a = 100/columnCount;
let arr_col = [];
let min_index = 0;


for(let i = 0; i< columnCount; i++){
    let qwer = document.createElement('div');
    qwer.id = i;
    qwer.style.cssText=`float: left; width: ${a}%`;
    elem.prepend(qwer);
    arr_col.push(qwer);
}
console.log(arr_par)
arr_col.forEach(el => console.log(el.offsetHeight))

for (let j = 0; j<dot_elem.length; j++){
    let min_height = 1000000;
    for(let i=arr_col.length - 1; i>= 0; i--){
        if(min_height > arr_col[i].offsetHeight){
            min_height = arr_col[i].offsetHeight;
            min_index = i;
        }
    }
    document.querySelector(`#${min_index}`).appendChild(dot_elem[j]);
}

document.querySelectorAll(".el").forEach(el => el.style.cssText=`margin-bottom: ${elementGap}px;`)
// arr_par.forEach(elem => {if (elem.offsetHeight){

// }})
// for(let i=0; i< arr_dot.length; i++){
//     let elem = document.querySelector(`#${i}`);
//     for(let j=0; j< columnCount; j++){
//         if (qwer.offsetHeight<){

//         }
//     }
// }


// elem.setAttribute('column-count', 3);
// elem.setAttribute('column-gap', `${elementGap} px`);

// elem.style.columnCount = columnCount_1;
// elem.style.columnGap = `${elementGap} px`;

// elem.style.cssText = `column-count: ${columnCount_1}; column-gap: ${elementGap}px;`;
// elem.style.cssText = `display: grid; grid-template-columns: repeat(${columnCount_1}, 1fr); grid-gap: ${elementGap}px;`
// elem.offsetWidth offsetHeight 
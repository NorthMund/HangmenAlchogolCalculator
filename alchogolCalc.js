let alchYarrow = document.querySelector('#alchogol-yarrow');
let alchHuckleberry = document.querySelector('#alchogol-huckleberry');
let alchWater = document.querySelector('#alchogol-water');
let alchBlackberry = document.querySelector('#alchogol-blackberry');
const alchClearBtn = document.querySelector('#alch-clear-button');
const addAlchButton = document.querySelector('#add-alchogol-button');
addAlchButton.addEventListener('click',handleAddClick);
alchClearBtn.addEventListener('click',clearIng);


let alchogolIng = {
    yarrow: 2,
    huckleberry: 1,
    water: 1,
    blackberry: 1,
    quantityPerOne: 2
}

function handleAddClick(){
    let alchQuantity = document.querySelector('#alchogol-quantity').value;
    let quantityForOne = alchQuantity/alchogolIng.quantityPerOne;
    let result = alchogolIng.yarrow*quantityForOne;
    refreshTdValue(alchYarrow,result);
    result = alchogolIng.huckleberry*quantityForOne;
    refreshTdValue(alchHuckleberry,result);
    result = alchogolIng.water*quantityForOne;
    refreshTdValue(alchWater,result);
    result = alchogolIng.blackberry*quantityForOne;
    refreshTdValue(alchBlackberry,result);
}

function refreshTdValue(cell,value){
    buffer = parseInt(cell.innerHTML);
    cell.innerHTML = '';
    cell.innerHTML = buffer + value;
}

function clearIng(){
    let tds = document.querySelectorAll('.alch-ing td');
    for (let i = 0;i<tds.length;i++){
        tds[i].innerHTML = 0;
    }
}
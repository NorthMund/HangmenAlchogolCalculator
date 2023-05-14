const appleCider = {
    apple: 1,
    sugar: 1,
    weat: 0,
    agarita: 0,
    corn: 0,
    blackCurrant: 0,
    huckleberry: 0,
    blackberry: 0,
    yarrow: 0,
    water: 0,
    alchogol: 1,
    appleMash: 0,
    appleCider: 0,
    quantityPerTime: 2
}

const whiskey = {
    apple: 0,
    sugar: 0,
    weat: 1,
    agarita: 1,
    corn: 0,
    blackCurrant: 0,
    huckleberry: 0,
    blackberry: 0,
    yarrow: 0,
    water: 0,
    alchogol: 1,
    appleMash: 0,
    appleCider: 0,
    quantityPerTime: 2
}

const bourbon = {
    apple: 0,
    sugar: 0,
    weat: 0,
    agarita: 1,
    corn: 1,
    blackCurrant: 0,
    huckleberry: 0,
    blackberry: 0,
    yarrow: 0,
    water: 0,
    alchogol: 1,
    appleMash: 0,
    appleCider: 0,
    quantityPerTime: 2
}

const brandy = {
    apple: 0,
    sugar: 0,
    weat: 0,
    agarita: 0,
    corn: 0,
    blackCurrant: 1,
    huckleberry: 1,
    blackberry: 1,
    yarrow: 0,
    water: 0,
    alchogol: 1,
    appleMash: 0,
    appleCider: 0,
    quantityPerTime: 2
}

const scotch = {
    apple: 0,
    sugar: 1,
    weat: 1,
    agarita: 0,
    corn: 1,
    blackCurrant: 0,
    huckleberry: 0,
    blackberry: 0,
    yarrow: 1,
    water: 0,
    alchogol: 0,
    appleMash: 0,
    appleCider: 0,
    quantityPerTime: 1
}

const calvados = {
    apple: 0,
    sugar: 0,
    weat: 0,
    agarita: 0,
    corn: 0,
    blackCurrant: 0,
    huckleberry: 0,
    blackberry: 0,
    yarrow: 0,
    water: 0,
    alchogol: 0,
    appleMash: 1,
    appleCider: 1,
    quantityPerTime: 1
}

let apple = document.querySelector('#apple');
const sugar = document.querySelector('#sugar');
const weat = document.querySelector('#weat');
const agarita = document.querySelector('#agarita');
const corn = document.querySelector('#corn');
const blackCurrant = document.querySelector('#black-currant');
const huckleberry = document.querySelector('#huckleberry');
const blackberry = document.querySelector('#blackberry');
const yarrow = document.querySelector('#yarrow');
const water = document.querySelector('#water');
const alchogol = document.querySelector('#alchogol');
const appleMash = document.querySelector('#apple-mash');
const appleCiderRow = document.querySelector('#apple-cider');

let drink = document.querySelector('#drink');
let quantity = document.querySelector('#quantity');
const addBtn = document.querySelector('#add-button');
addBtn.addEventListener('click',handleAddClick);
drink.addEventListener('change',changeQuantity);

// automaticly change quantity. depends from drink
function changeQuantity(){
    drink = document.querySelector('#drink');
    quantity = document.querySelector('#quantity');
    if (drink.value == 'scotch' || drink.value == 'calvados'){
        quantity.setAttribute('min',1);
        quantity.setAttribute('step',1);
        quantity.setAttribute('value', 1);
    } else {
        quantity.setAttribute('min', 2);
        quantity.setAttribute('step', 2);
        quantity.setAttribute('value',2)
    }
}


function handleAddClick(){
    drink = document.querySelector('#drink').value;
    switch(drink){
        case 'appleCider':
            addIngredients(appleCider);
            break;
        case 'whiskey':
            addIngredients(whiskey)
            break;
        case 'bourbon':
            addIngredients(bourbon)
            break;
        case 'brandy':
            addIngredients(brandy)
            break;
        case 'scotch':
            addIngredients(scotch)
            break;
        case 'calvados':
            addIngredients(calvados)
            break;
    }
}

function addIngredients(drink){
    quantity = document.querySelector('#quantity').value;
    let quantityForOne = quantity/drink.quantityPerTime;
    let result;
    result = (drink.apple*quantityForOne);
    refreshTdValue(apple,result);
    result = (drink.sugar*quantityForOne);
    refreshTdValue(sugar,result);
    result = (drink.weat*quantityForOne);
    refreshTdValue(apple,result);
    result = (drink.agarita*quantityForOne)
    refreshTdValue(agarita,result);
    result = (drink.corn*quantityForOne);
    refreshTdValue(corn,result);
    result = (drink.blackCurrant*quantityForOne);
    refreshTdValue(blackCurrant,result);
    result=(drink.huckleberry*quantityForOne);
    refreshTdValue(huckleberry,result);
    result = drink.blackberry*quantityForOne;
    refreshTdValue(blackberry,result);
    result=(drink.yarrow*quantityForOne)
    refreshTdValue(yarrow,result);
    result=(drink.water*quantityForOne);
    refreshTdValue(water,result);
    result = (drink.alchogol*quantityForOne);
    refreshTdValue(alchogol,result);
    result = drink.appleMash*quantityForOne
    refreshTdValue(appleMash,result);
    result=drink.appleCider*quantityForOne;
    refreshTdValue(appleCiderRow,result);
}

function refreshTdValue(cell,value){
    buffer = parseInt(cell.innerHTML);
    cell.innerHTML = '';
    cell.innerHTML = buffer + value;
}

// for (key in appleCider){
//     console.log('key: ',key,'value: ',appleCider[key])
// }

changeQuantity()
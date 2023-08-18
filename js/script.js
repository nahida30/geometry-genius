function triangleAreaCalculate(){
    const base = getInputValue('triangle-base');
    console.log(base);
    const height = getInputValue('triangle-height');
    console.log(height);

    if(isNaN(base)|| isNaN(height)){
        alert('Please insert a valid number');
        return;
    }

    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);

    const area = document.getElementById('triangle-area');
    area.innerText = triangleArea;

    addToCalculationEntry('Triangle',triangleArea)



    

}

function rectangleAreaCalculate(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    if(isNaN(width) || isNaN(length)){
        alert ('Please insert a valid number');
        return;
    }

    const area = (width * length).toFixed(2);
    console.log(area);

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

    addToCalculationEntry('Rectangle',area)


}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);

    if(isNaN(base) || isNaN(height)){
        alert ('Please insert a valid number');
        return;
    }

    const area = (base * height).toFixed(2);
    console.log(area);

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;

    addToCalculationEntry('Parallelogram',area)
}

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const input = parseFloat(inputText);
    return input;
}






function calculateRhombusArea(){
    const d1Value = innerTextValue('d1-value');
    console.log(d1Value);
    const d2Value = innerTextValue('d2-value');
    console.log(d2Value);
    if(isNaN(d1Value) || isNaN(d2Value)){
        alert ('Please insert a valid number');
        return;
    }

    const area = (0.5 * d1Value * d2Value).toFixed(2);
    console.log(area);

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;

    addToCalculationEntry('Rhombus',area)
}

function calculatePentagonArea(){
    const pentagonP = innerTextValue('pentagon-p');
    const pentagonB = innerTextValue('pentagon-b');

    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert ('Please insert a valid number');
        return;
    }

    const area = (0.5 * pentagonP * pentagonB).toFixed(2);


    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;

    addToCalculationEntry('Pentagon',area)
}
function calculateEllipseArea(){
    const ellipseA = innerTextValue('ellipse-a');
 
    const ellipseB = innerTextValue('ellipse-b');

    if(isNaN(ellipseA) || isNaN(ellipseB)){
        alert ('Please insert a valid number');
        return;
    }
    
    const area = (3.1416 * ellipseA * ellipseB).toFixed(2);
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;


    // add to calculation entry 

    addToCalculationEntry('Ellipse',area)




}
function innerTextValue(innerText){
    const innerTextFeild = document.getElementById(innerText);
    const innerValueText = innerTextFeild.innerText;
    const inner = parseFloat(innerValueText);
    return inner;
}

// add to calculation entry 
function addToCalculationEntry(areaType,area){
    console.log(areaType + ' ' + area);

    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2')
    p.innerHTML =`${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-success btn-sm">Convert </button>`;
    calculationEntry.appendChild(p);
    
}
// function getThreInputMultiById(,)

function getInputValueById (inputId){
    const inputValueString = document.getElementById(inputId);
    const inputValue = parseFloat(inputValueString.value);
    inputValueString.value = '';
    return inputValue;
}

// withOut clear the value 
function getInputValueByIdWt (inputId){
    const inputValueString = document.getElementById(inputId);
    const inputValue = parseFloat(inputValueString.value);
    return inputValue;
}

function getMalti(a,b){
    const d = getInputValueById(a);
    const h = getInputValueById(b);
    return d*h;
}
// Set inner text by id
function setInnerTextById(inputId,outputId){
    const inputVal = getInputValueByIdWt(inputId);
    const outputVal = document.getElementById(outputId);
    outputVal.innerText = inputVal;
}


// Get all buttons with the class 'btnCmToM'
const buttons = document.querySelectorAll('.btnCmToM');

// Loop through each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Find the parent p element containing both the span and the button
        const parentElement = button.closest('p');

        // Get the corresponding span element based on the parent p element
        const span = parentElement.querySelector('span');

        // Get the current area in cm² from the span's innerText
        const currentAreaCm2 = parseFloat(span.innerText);

        // Convert the area to m² (divide by 10000)
        const areaM2 = currentAreaCm2 / 10000;

        // Update the span's innerText with the converted area
        span.innerText = areaM2.toFixed(5) + 'm²';
    });
});


// Triangle Calculete
document.getElementById('btn-triangle').addEventListener('click',() => { 

    //  Update base and height outputs using setInnerTextById
     setInnerTextById('triangle-input-b', 'triangle-output-b');
     setInnerTextById('triangle-input-h', 'triangle-output-h');
    // Calculation
    const x = getMalti('triangle-input-b','triangle-input-h');
    const result = (x * 0.5);
    document.getElementById('triangle-result').innerText = result;
    
 })

// Rectangle Calculete
document.getElementById('btn-rectangle').addEventListener('click',() => { 

    //  Update base and height outputs using setInnerTextById
    setInnerTextById('rectangle-input-w', 'rectangle-output-w');
    setInnerTextById('rectangle-input-l', 'rectangle-output-l');

    const x = getMalti('rectangle-input-w','rectangle-input-l');
    document.getElementById('rectangle-result').innerText = x;
 })
 
 // Parallelogram Calculete
 document.getElementById('btn-parallelogram').addEventListener('click',() => { 
        //  Update base and height outputs using setInnerTextById
        setInnerTextById('parallelogram-input-b', 'parallelogram-output-b');
        setInnerTextById('parallelogram-input-h', 'parallelogram-output-h');


     const x = getMalti('parallelogram-input-b','parallelogram-input-h');
     document.getElementById('parallelogram-result').innerText = x;
  })
 
  // Rhombus Calculete
document.getElementById('btn-rhombus').addEventListener('click',() => { 

    //  Update base and height outputs using setInnerTextById
    setInnerTextById('rhombus-input-b', 'rhombus-output-b');
    setInnerTextById('rhombus-input-h', 'rhombus-output-h');

    const x = getMalti('rhombus-input-b','rhombus-input-h');
    const result = (x * 0.5);
    document.getElementById('rhombus-result').innerText = result;

 })

  // Pentagon Calculete
document.getElementById('btn-pentagon').addEventListener('click',() => { 
    //  Update base and height outputs using setInnerTextById
    setInnerTextById('pentagon-input-b', 'pentagon-output-b');
    setInnerTextById('pentagon-input-h', 'pentagon-output-h');


    const x = getMalti('pentagon-input-b','pentagon-input-h');
    const result = (x * 0.5);
    document.getElementById('pentagon-result').innerText = result;

 })
 
 // Ellipse Calculete
document.getElementById('btn-ellipse').addEventListener('click',() => { 
    //  Update base and height outputs using setInnerTextById
    setInnerTextById('ellipse-input-b', 'ellipse-output-b');
    setInnerTextById('ellipse-input-h', 'ellipse-output-h');


   const x = getMalti('ellipse-input-b','ellipse-input-h');
   const result = (x * 3.1416);
   document.getElementById('ellipse-result').innerText = result;

})


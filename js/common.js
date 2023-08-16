// function getThreInputMultiById(,)

function getInputValueById (inputId){
    const inputValueString = document.getElementById(inputId);
    const inputValue = parseFloat(inputValueString.value);
    inputValueString.value = '';
    return inputValue;
}

function getMalti(a,b){
    const d = getInputValueById(a);
    const h = getInputValueById(b);
    return d*h;
}

// Triangle Calculete
document.getElementById('btn-triangle').addEventListener('click',() => { 
    const x = getMalti('triangle-input-b','triangle-input-h');
    const result = (x * 0.5);
    document.getElementById('triangle-result').innerText = result;

 })


// Rectangle Calculete
document.getElementById('btn-rectangle').addEventListener('click',() => { 
    const x = getMalti('rectangle-input-w','rectangle-input-l');
    document.getElementById('rectangle-result').innerText = x;
 })
 
 // Parallelogram Calculete
 document.getElementById('btn-parallelogram').addEventListener('click',() => { 
     const x = getMalti('parallelogram-input-b','parallelogram-input-h');
     document.getElementById('parallelogram-result').innerText = x;
  })
 

  // Rhombus Calculete
document.getElementById('btn-rhombus').addEventListener('click',() => { 
    const x = getMalti('rhombus-input-b','rhombus-input-h');
    const result = (x * 0.5);
    document.getElementById('rhombus-result').innerText = result;

 })
  // Pentagon Calculete
document.getElementById('btn-pentagon').addEventListener('click',() => { 
    const x = getMalti('pentagon-input-b','pentagon-input-h');
    const result = (x * 0.5);
    document.getElementById('pentagon-result').innerText = result;

 })
 
 
 // Ellipse Calculete
document.getElementById('btn-ellipse').addEventListener('click',() => { 
   const x = getMalti('ellipse-input-b','ellipse-input-h');
   const result = (x * 3.1416);
   document.getElementById('ellipse-result').innerText = result;

})






// document.getElementById('ellipse-btn').addEventListener('click',() => { 
    
//     const p = getInputValueById('ellipse-a');
//     console.log(typeof p)
// })
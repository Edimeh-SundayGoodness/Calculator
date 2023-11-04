// mockup the buttons and paragraph for display
// give buttons a value property equal to the displayed value
// give the paragraph an id or class
// give buttons 0-9 similar class
// give operators a similar class
// give controls a similar class
// grab them to the js File
// using for each loop, add event listener of click to respective buttons
// for buttons 0-9, create a variable that stores their string equivalent
// give a maiximum number of 9 variables with a warning message if it exceeds 9
// when an operator is clicked have a variable to hold the value of the operator clicked, move values from lower display to upper display
// create a second variable to hold the second part of the value
// when = is clicked, bring the first values and second values, change its data type and use it for calculation.  

let typednum = document.getElementById('typed');
let cntrls = document.querySelectorAll('.control');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');
let answertyped = document.getElementById('answer');
let equalto = document.querySelector('.equal')
let stringnum = ''
let stringans = '';
let upperDisplay = ''
let clicked = false
let secondString = ''
let optClicked = '';
let secondpart = ''
// let clearAll = ' '

numbers.forEach((number) => {

    
        console.log(clicked)
    number.addEventListener('click', (event)=>{
        if(clicked === false){
            stringnum += number.value
            if(stringnum.length<10){
                typednum.innerHTML = stringnum
            }else if(stringnum.length>9){
                typednum.innerHTML = `you cannot exceed 9 values`
            }
            event.preventDefault()
            console.log(stringnum)
        }
        else{
            console.log('am in second string')
            secondString += number.value
            if(secondString.length<10){
                typednum.innerHTML = secondString
            }else if(secondString.length>9){
                typednum.innerHTML = `you cannot exceed 9 values`
            }
            event.preventDefault()
            // console.log(secondString)
            upperDisplay =  `${stringnum} ${optClicked} ${secondString}`
            answertyped.innerHTML = upperDisplay
        }
        console.log(secondString)
        console.log(stringnum)
    //   return  
    })
});

operators.forEach((operator) =>{
    operator.addEventListener('click', (event) =>{

        clicked = true
       console.log(clicked)
        optClicked = operator.value;
        
        upperDisplay =  `${stringnum} ${optClicked} ${secondString}`
        // console.log(secondString)
        answertyped.innerHTML = upperDisplay
        // let secondpart = secondString
        // upperDisplay += secondString
        console.log(secondString)
        typednum.innerHTML = clicked ? secondString : stringnum
        // return
        // console.log(answertyped.innerHTML)
    })
})


equalto.addEventListener('click', (event) =>{
     // console.log(typeof(answer))
     
     if(optClicked === "+"){
        answer = Number(stringnum)
        typed = Number(secondString)
        // stringans = Number(stringans)
        // stringnum = ''
        typednum.innerHTML = answer + typed
        answertyped.innerHTML = upperDisplay

        // return
    }else if(optClicked === "-"){
        answer = Number(stringnum)
        typed = Number(secondString)
        // stringans = Number(stringans)
        // stringnum = ''
        typednum.innerHTML = answer - typed
        answertyped.innerHTML = upperDisplay
        // return
    }else if(optClicked === "*"){
        answer = Number(stringnum)
        typed = Number(secondString)
        // stringans = Number(stringans)
        console.log('i am here')
        console.log(optClicked)
        console.log(stringnum)
        console.log(secondString)
        // stringnum = ''
        typednum.innerHTML = answer * typed
        answertyped.innerHTML = upperDisplay
        // return]]
    }else if(optClicked === "/"){
        answer = Number(stringnum)
        typed = Number(secondString)
        // stringans = Number(stringans)
        // stringnum = ''
        typednum.innerHTML = answer / typed
        answertyped.innerHTML = upperDisplay
        // return
    }else if(optClicked === "%"){
        answer = Number(stringnum)
        typed = Number(secondString)
        // stringans = Number(stringans)
        // stringnum = ''
        typednum.innerHTML = answer % typed
        answertyped.innerHTML = upperDisplay
        // return
    }
})
    
cntrls.forEach((control) =>{
    control.addEventListener('click', (event) =>{
        let CntrlClicked = control.value
        if(CntrlClicked === "AC"){
            let clear = ''
            typednum.innerHTML = clear
            answertyped.innerHTML = clear
            optClicked.innerHTML = ''
            stringnum = ''
            secondString = ''
            upperDisplay = ''
            // number = ''
            // clicked = false
            console.log(stringnum)
        }
        
        
    })
})
   
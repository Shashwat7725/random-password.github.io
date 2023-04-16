const result_div = document.getElementById("result");
const length_input = document.getElementById("length");
const clipboard = document.getElementById("clipboard");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number_input = document.getElementById("numbers");
const symbol_input= document.getElementById("symbols");
const generate = document.getElementById("generate");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getNumbers,
    symbol: getSymbols
};


generate.addEventListener("click",function(){
    const length = +length_input.value;  //to change string to number
    // console.log(length);
    const hasUpper = uppercase.checked;
    const hasLower = lowercase.checked;
    const hasNumber = number_input.checked;
    const hasSymbol = symbol_input.checked;

    result_div.innerText = generatePass(hasUpper, hasLower, hasNumber, hasSymbol, length);
})
//generator functions
function generatePass(upper,lower,number,symbol,length) {
    let generatePassword = '';

    const typesCount = upper + lower + number + symbol;
    // console.log(typesCount);
    const typesArr = [{upper},{lower},{number},{symbol}].filter(
        item => Object.values(item)[0]
    );
    
    // console.log(typesArr);

    if(typesCount === 0)
        return '';

    for(let i=0;i<length;i+=typesCount)
    {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName: ',funcName);

            generatePassword += randomFunc[funcName]();  //it will work as getRandomLower() for example

        });
        
    }
    const finalPassword = generatePassword.slice(0,length);
        return finalPassword;
}

function getRandomLower() {
    const randLower = Math.floor((Math.random()*26)+97);
    return String.fromCharCode(randLower);
}

function getRandomUpper() {
    const randUpper = Math.floor((Math.random()*26)+65);
    return String.fromCharCode(randUpper);
}

function getNumbers() {
    const randNum = Math.floor((Math.random()*10)+48);
    return String.fromCharCode(randNum);
}

function getSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random()*symbols.length)];
}


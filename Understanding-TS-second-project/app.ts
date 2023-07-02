function add(n1, n2, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: ';

add(number1, number2, printResult, resultPhrase);

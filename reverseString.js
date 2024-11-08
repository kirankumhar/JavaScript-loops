//? Write a for loop that reverses a given string. For example, if the input is "hello", the output should be "olleh".

function reverseString(str){
    let reversed = '';
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString('hello'));
// x = Number(prompt("Enter a number to print its multiplication table: "));
// y = Number(prompt("Enter the range for the multiplication table: "));
// function table(a, b) {
//     for (let i = 1; i <= b; i++) {
//         // console.log(a + " x " + i + " = " + (a * i));
//         console.log (`${a} x ${i} = ${a*i}`);
//                 document.write(`${a} X ${i} = ${a * i}  <br>` );
//     }
// }table(x,y);


let start = Number(prompt("Enter starting number:"));
let end = Number(prompt("Enter ending number:"));
let table = Number(prompt("Enter table number:"));

function printTable(start, end, table) {
    for (let i = start; i <= end; i++) {
        console.log(i + " x " + table + " = " + (i * table));
    }
}

printTable(start, end, table);

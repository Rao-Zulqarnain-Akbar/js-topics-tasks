function largest(a,b,c){
    if (a >b && a > c){
        console.log(a);
        document.write(a + "is the largest number");
    }
    else if (b > a && b >c){
        console.log(b);
        document.write(b + "is the largest number");
    }
    else{
        console.log(c);
        document.write(c + "is the largest number");
    }
}
a = Number(prompt("Enter first number"));
b = Number(prompt("Enter second number"));
c = Number(prompt("Enter third number"));
largest(a,b,c);

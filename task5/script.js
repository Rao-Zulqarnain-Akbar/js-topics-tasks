a = Number(prompt("Enter a number:"));
function chk(a) {
    if (a%2 == 0) {
        console.log(a + " is even.");
        document.write(a + " is even.");
    } else {
        console.log(a + " is odd.");
        document.write(a + " is odd.");
    }
}
chk(a);

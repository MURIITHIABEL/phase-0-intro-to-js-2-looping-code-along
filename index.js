const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "suprise"))




var i= "";

function countDown(i)

{

    while( i >=0)

    {
        console.log(i);
        i--;
    }
}
countDown();
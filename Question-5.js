
function countToN(n){
    //Use a while loop to count to ten, using console.log to print what number you are on
    // (YOUR CODE HERE)
    
    let x = 1;
    while (x <= n) {
        console.log("Counting, x now has a value of " + x);
        x++;
    }

    console.log("Count complete, I have finished counting to " + n);
}

countToN(3);

countToN(5);
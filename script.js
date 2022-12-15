/**
 * Your goal is to implement this function.
 *
 * The count squares function takes 2 integers, a and b. It should then calculate the number of perfect squares which
 * exist between a and b.
 *
 * For example, if a is 1, and b is 26, then the function should return 5, because there are 5 perfect squares between 1
 * and 26:
 * 1 = 1 * 1
 * 4 = 2 * 2
 * 9 = 3 * 3
 * 16 = 4 * 4
 * 25 = 5 * 5
 *
 * Note that a and b are not necessarily in order - a may be less than b, or b may be less than a. Also, zero is a
 * perfect square.
 *
 * @param a One end of the range to test
 * @param b The other end of the range
 * @returns The number of perfect squares between a and b (inclusive).
 */






function countSquares(a, b) {
    // Make sure that a and b are in order 
    let min = 0;
    let max = 0;
    
    if (a<=b){
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }

    // Have a counter that counts the squares
    let countSquares = 0;

    // Test if min and max are negative
    if ((min<0) && (max <0)){
        return countSquares;
    }

    // If min is negative, I want my loop to start at zero 
    if (min <0){
        min = 0;
    }
    

    // Loop from min to max
    // And test if each number is a perfect square 
    for (let i=min; i<=max; i++){
    // Check if i-th number in the range is a perfect square
        // Math.sqrt() return a square of a number 
        // and with isInteger() I test if that number returned by Math.sqrt() is a float or an actual integer 
        // Because to have a perfect square you need two integers multiplied togeter not two floats...
        if (Number.isInteger(Math.sqrt(i))) {
            countSquares++;
        }


    }

    return countSquares;

}









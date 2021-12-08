import read from "../../lib/reader.js"

/**
 * There is no unit test for this exercise. You will have to try it yourself in the index.js file at the root of the project.
 * 
 * Write a function that :
 *  - Secretely calculates a random integer between 0 - 100 (secret number)
 *  - Waits for a user input and gives an appropriate feedback to help him until he/she finds the secret number
 * 
 * Ensure your function appropriately handles invalid inputs (non-integer values)
 */
export async function guessTheNumber() {
    // random number between 0 - 100 :
    const random = Math.floor(100 * Math.random())
    
    // read a user input :
    let input = await read()

    // Verify that a variable is a number with : typeof(input) === "number"

}
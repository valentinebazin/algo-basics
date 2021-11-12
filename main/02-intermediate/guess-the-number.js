import read from "../../lib/reader.js";

export async function guessTheNumber() {
    // to read a user input :
    // let input = await read()

    // Verify that a variable is not a number with : Number.isNaN(input)

    // random number between 0 - 100 :
    const random = Math.floor(100 * Math.random());

    // while (true) {
    //     let input = await read()
    //     if (Number.isNaN(input))
    //         console.log("Please, input a number")
    //     else if (input < random)
    //         console.log("bigger")
    //     else if (input > random)
    //         console.log("smaller")
    //     else if (input == random) {
    //         console.log(`correct ! input: ${input} | random: ${random}`)
    //         break;
    //     }
    // }
}
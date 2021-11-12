import read from "../../lib/reader.js";

export async function guessTheNumber() {
    // to read a user input :
    // let input = await read()

    const random = Math.floor(100 * Math.random())

    while (true) {
        let input = await read()
        console.log(typeof(input))
        if (typeof input !== "number")
            console.log("Please, input a number")
        else if (input < random)
            console.log("bigger")
        else if (input > random)
            console.log("smaller")
        else if (input == random) {
            console.log(`correct ! input: ${input} | random: ${random}`)
            break;
        }
    }
}


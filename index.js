import read from "./lib/reader.js"
import { guessTheNumber } from "./main/02-intermediate/guess-the-number.js"

while(true) {
    let input = await read()   
    console.log("Vous avez écrit : " + input)
}
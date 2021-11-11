/** First function : Hello world ! */
export function helloWorld() {
    return 'Hello, world!'
}

/** 
 * Write a function that returns the sum of the two numbers passed as arguments.
 */
export function sum(a, b) {
    return a + b
}

/**
 * Write a function that converts Celcius degrees into Fahrenheit.
 * 
 * °F = °C * 9/5 + 32
 * 
 * @returns the temperature converted to Fahrenheit
 */
export function celciusToFahrenheit(celciusTemperature) {
    return celciusTemperature * (9/5) + 32
}


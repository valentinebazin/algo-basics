
/**
 * A pandemic is propagating ! Every day, number of infected persons doubles.
 * Write a function that forecasts the number of infected people at after a given
 * [dayCount], starting from the given [initialInfectedCount] on the 1st day.
 */
export function pandemicForecast(initialInfectedCount, dayCount) {
    let infectedCount = initialInfectedCount
    for(let i = 0; i < dayCount; ++i) {
        infectedCount = infectedCount * 2
    }
    return infectedCount
}

/**
 * Same exercise but using the [initialHealthyCount] as the amount of non-infected
 * people. 
 */
export function pandemicPopulation(populationCount, initialInfectedCount, nbDays) {

}
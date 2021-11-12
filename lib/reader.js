import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'INPUT> '
});

export default async function read() {
    rl.prompt();
    return new Promise(resolve => {
        rl.on('line', line => {
            resolve(
                parseInt(line) !== "NaN" ? parseInt(line)
                    : parseFloat(line) !== "NaN" ? parseFloat(line)
                        : line.trim()
            )
        })
    })
}
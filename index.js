import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'INPUT> '
});

async function read() {
    rl.prompt();
    let a;
    rl.on('line', (line) => {
        a = line.trim()
        // process.exit(0);
    })
    console.log(`input: ${a}`)
}

let a = await read()
await console.log(`I received: ${a}`)
// compile code will go here
const path = require('path'); // controi um caminho de compile.js até inbox.sol
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contract', 'Inbox.sol'); // dirname leva ao arquivo raiz
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1)); // o numero de contratos que queremos compilar (1)

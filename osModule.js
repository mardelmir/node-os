// os: version(), platform(), cpus(), totalmem(), networkInterfaces, freemem(), type(), arch()

// node osModule.js
const os = require('node:os')

const osOutput = {
    name: os.platform(),
    type: os.type(),
    version: os.version(),
    arch: os.arch(),
    cpus: os.cpus().length,
    totalmem: `${(os.totalmem() * Math.pow(10, -6)).toFixed(2)} MB`,
    freemem: `${(os.freemem() * Math.pow(10, -6)).toFixed(2)} MB`
}

console.log(osOutput)
module.exports = osOutput
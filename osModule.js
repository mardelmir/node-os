// node osModule.js

const osMod = () => {
    const os = require('node:os')

    console.log('')
    console.log(`Nombre: ${os.platform()}`)
    console.log(`Tipo: ${os.type()}`)
    console.log(`Versión: ${os.version()}`)
    console.log(`Arquitectura: ${os.arch()}`)
    console.log(`CPUs: ${os.cpus().length}`)
    console.log(`Memoria Total: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
    console.log(`Memoria Libre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`)
}

module.exports = osMod
// node networkModule.js

const networkMod = () => {
    const networkInterfaces = require('node:os').networkInterfaces()
    console.group('Interfaz de red:')
    for (const network in networkInterfaces) {
        console.group(`Interfaz ${network}:`)
        networkInterfaces[network].forEach(element => {
            console.log(`Familia: ${element.family}`)
            console.log(`Dirección: ${element.address}`)
            console.log(`Interno: ${element.internal}`)
        })
        console.log('')
        console.groupEnd()
    }
    console.groupEnd()
}

module.exports = networkMod
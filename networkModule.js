function networkMod() {
    const networkInterfaces = require('node:os').networkInterfaces()

    console.group('Interfaces de red:')
    for (const element in networkInterfaces) {
        console.group(`Interfaz ${element}:`)
        networkInterfaces[element].forEach(interface => {
            console.log(`Familia: ${interface.family}`)
            console.log(`Dirección: ${interface.address}`)
            console.log(`Interno: ${interface.internal}`)
        })
        console.log('')
        console.groupEnd()
    }
    console.groupEnd()
}

module.exports = networkMod
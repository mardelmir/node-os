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

// Corrección de clase

// const os = require('node:os')
// const redes = {}

// function printNetworkModule () {
//     const interfaces = os.networkInterfaces()
//     Object.keys(interfaces).forEach((name) => {
//         redes[name] = interfaces[names].map((interface) => ({
//             familia: interface.family,
//             direccion: interface.address,
//             interno: interface.internal
//         }))
//     })
//     return redes
// }

// redes[name] = crea array con lo que haya en name, se crea array porque no sabes si hay uno o varios objetos.
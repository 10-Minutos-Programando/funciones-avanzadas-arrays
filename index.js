const productos = [
    { nombre: 'Ordenador PC', precio: 699, departamento: 'Tecnología' },
    { nombre: 'Sartenes Verdes', precio: 39, departamento: 'Hogar' },
    { nombre: 'Reloj Calculadora', precio: 75, departamento: 'Tecnología' },
    { nombre: 'Máquina Palomitas', precio: 33, departamento: 'Hogar' },
    { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar' },
    { nombre: 'Tuppers', precio: 10, departamento: 'Hogar' }
]

// FIND
const muebleTv = productos.find(item => {
    // return item.nombre === 'Mueble TV'
    return (/Mueble/g).test(item.nombre)
}) 
console.log(muebleTv)

// MAP
const productosIva = productos.map(item => {
    // item.precio = item.precio + item.precio*0.21
    // return item

    let newPrecio = item.precio + item.precio * 0.21
    return { ...item, precio: newPrecio }
})
console.log(productosIva)

// FILTER
const productosHogar = productos.filter(item => {
    return item.departamento === 'Hogar'
})
console.log(productosHogar)

// CONCAT
const productosMore = productos.concat({
    nombre: 'Rallador Queso', precio: 9, departamento: 'Hogar'
})
console.log(productosMore)

// flatMap
const lista = productos.map(item => {
    return item.nombre
}).join(', ')
console.log(lista)

// EVERY
const check = productos.every(item => {
    return item.precio >= 100
})
console.log(check)

// SOME
const alguno = productos.some(item => {
    return item.precio > 500
})
console.log(alguno)

// INCLUDES
const sartenesIsIn = productos.map(item => {
    return item.nombre
}).includes("Sartenes Verdes")

console.log(sartenesIsIn)

// REDUCE
const precioTotal = productos.reduce((total, item) => {
    return total + item.precio
}, 0)
console.log(precioTotal)
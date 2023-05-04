const modeloContenedor = document.querySelector('.modeloContenedor');
const abrirCarrito = document.getElementById('dentroDeCarrito');
const cerrarCarrito = document.getElementById('cerrarCarrito');
const modeloCarrito = document.querySelector('.modeloCarrito')

abrirCarrito.addEventListener('click', () => {
    modeloContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modeloContenedor.classList.toggle('modal-active')
});

modeloContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modeloCarrito.addEventListener('click', (e) => {
    e.stopPropagation()

    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value)
    }
})


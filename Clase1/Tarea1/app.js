const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');
const productSelect = document.getElementById('productSelect');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    // Leer el producto seleccionado del select
    const selectedProduct = productSelect.value;

    // Crear pedido con id, producto y estado
    const order = { id: orderId++, product: selectedProduct, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

// Agrega el pedido a la lista visible
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.product} - ${order.status}`;
    orderList.appendChild(listItem);
}

// Actualiza el estado del pedido en la interfaz
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${order.product} - ${status}`;
        if (status === 'Completado') {
            listItem.classList.add('completed');
        }
    }
}


// Simula la preparación usando setTimeout y Promise
function prepareOrder(order) {
    return new Promise((resolve) => {
        const preparationTime = Math.floor(Math.random() * 5000) + 2000; // entre 2 y 7 segundos
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
}

// Procesa el pedido de forma asincrónica y actualiza el estado
async function processOrder(order) {
    await prepareOrder(order);
    order.status = 'Completado';
    updateOrderStatus(order, order.status);
}

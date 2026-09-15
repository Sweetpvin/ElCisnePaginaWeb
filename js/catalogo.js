function agregarAlmuerzoCorriente() {
    let sopa = document.getElementById('sopa').value;
    let principio = document.getElementById('principio').value;
    let proteina = document.getElementById('proteina').value;
    let desc = `Almuerzo Corriente (Sopa: ${sopa}, Principio: ${principio}, Proteína: ${proteina})`;
    addItemToCart(desc, 11500);
}
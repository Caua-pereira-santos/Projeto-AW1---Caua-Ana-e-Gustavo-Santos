/* Confirmação do pedido */

function numeroPedido() {
    var resp = Math.floor(Math.random() * 10000 + 1);

    var outNumeroPedido  = document.getElementById("outNumeroPedido");
    outNumeroPedido.textContent = resp;
}

var btGerarNumeroPedido = document.getElementById("btGerarNumeroPedido");
btGerarNumeroPedido.addEventListener("click", numeroPedido);
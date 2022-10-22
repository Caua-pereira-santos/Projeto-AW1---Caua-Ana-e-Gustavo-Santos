/* Confirmação do pedido - Ana e Gustavo*/
if (document.body.classList.contains('confirmar-pedido')) {
  window.onload = numeroPedido();
  function numeroPedido() {
    var resp = Math.floor(Math.random() * 10000 + 1);
    document.getElementById("outNumeroPedido").innerHTML = resp;
  }
}

/* Script para validação do contato  - Gustavo */
if (document.body.classList.contains('contato')) {
  const form = document.getElementById('form-contato');
  const campos = document.querySelectorAll('.required');
  const spans = document.querySelectorAll('.span-required');
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const cellphoneRegex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|)[-. ]?(\d{4})[-. ]?\s*$/;
  let isError = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarTelefone();
    validarEmail();
    validarMensagem();
    if (isError == false) {
      console.log(isError);
      form.submit();
    }
  })

  function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'inline-block';
  }

  function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
  }

  function validarNome() {
    if (campos[0].value.length < 3) {
      isError = true;
      setError(0);
    } else {
      isError = false;
      removeError(0);
    }
  }

  function validarTelefone() {
    if (!cellphoneRegex.test(campos[1].value)) {
      isError = true;
      setError(1);
    } else {
      isError = false;
      removeError(1);
    }
  }

  function validarEmail() {
    if (!emailRegex.test(campos[2].value)) {
      isError = true;
      setError(2);
    } else {
      isError = false;
      removeError(2);
    }
  }

  function validarMensagem() {
    if (campos[3].value.length < 30) {
      isError = true;
      setError(3);
    } else {
      isError = false;
      removeError(3);
    }
  }
}

/* Ana Paula: detalhes do produto */

let cupcakes = [
  {
    "desc": "AAAAAAAAA",
    "ingr": "AAAAAAAA",
    "alerg": "AAAAAAA",
    "valEner": "AAAAAA",
    "peso": "AAA",
    "preco": "AAA"
  },
  {
    "desc": "BBBBBBB",
    "ingr": "BBBBBBB",
    "alerg": "BBBBBBB",
    "valEner": "BBBBB",
    "peso": "BBB",
    "preco": "BBB"
  }
]

$(document).ready(function(){
    $(".modal-container").hide();
});

$(document).ready(function(){
  $(".article-cupcakes").click(function(){
    $('#desc-cupcakes').text("teste");

  });

});

/* Ana Paula: jQuery para carrinho */

// var listaCarrinho = [
//   {
//     nome: "cupcake 1",
//     preco: "12,00"
//   },
//   {
//     nome: "cupcake 2",
//     preco: "14,00"
//   }
// ];

// $(document).ready(function(){

//     $("#titulo-cupcake-carrinho").text(listaCarrinho[0].nome);

// });
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

$(document).ready(function(){
    $(".modal-container").hide();
});

$(document).ready(function(){
  $('.article-cupcakes').on('click', (e) => {
    $.getJSON("../cupcakes.json", function(dados){
      var id = e.target.id;
      if (!("erro" in dados.cupcakes)) {
          $.each(dados.cupcakes, function(index, value){
            if(id == dados.cupcakes[index].id) {
              $(".titulo-cupcake").html(value.nome);
              $("#desc-cupcake").html(value.desc);
              $("#ingr-cupcake").html(value.ingr);
              $("#subs-cupcake").html(value.alerg);
              $("#val-energ-cupcake").html(value.valEnerg);
              $("#peso-cupcake").html(value.peso);
              $(".preco-cupcake").html(value.preco);
            }
          });
    }});
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

/* Adicionar Menu Hamburger quando a tela chegar em 1127px */ 

/* Gustavo: jquery para alterar entre localização do gps e imagem */
$( ".gps" ).click(function() {
  var texto = $('.flex-item-image-title-2').text();

  if(texto == 'Mostrar localização') {
    $('.flex-item-image-2').hide();
    $('.gps-location').show();
    $('.flex-item-image-title-2').text('Mostrar imagem');
  } else {
    $('.flex-item-image-2').show();
    $('.gps-location').hide();
    $('.flex-item-image-title-2').text('Mostrar localização');
  }
});

var controle = window.matchMedia('(max-width: 1153px)')
var menuMobile = $('.hamburguer-menu');
var itemsMenu = $('.menu_li');

function headerResponsivo(controleVar) {
  if (controleVar.matches) { 
    menuMobile.show();
    itemsMenu.hide();
  } else {
    menuMobile.hide();
    itemsMenu.show();
  }
}

controle.addEventListener('change', headerResponsivo)

headerResponsivo(controle)

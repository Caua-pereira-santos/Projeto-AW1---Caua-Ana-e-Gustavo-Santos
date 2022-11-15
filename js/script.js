/* Confirmação do pedido - Ana e Gustavo*/
if (document.body.classList.contains('confirmar-pedido')) {
  window.onload = numeroPedido();
  function numeroPedido() {
    var resp = Math.floor(Math.random() * 10000 + 1);
    document.getElementById("outNumeroPedido").innerHTML = resp;
  }
}

// /*Teste Jquery para validação*/ 

// <script type="text/javascript">
// $(document) .ready(function() {
//  $("$formCadastro").validate({
//     rules: {
//         nome: {
//             required: true,
//             maxlength: 100,
//             minlength: 10
//         },
//         email: {
//             required: true,
//             email: true
//         }
//     }
//  })


// })
// </script>

/* Script para validação do contato  - Gustavo */

/*if (document.body.classList.contains('contato')) {
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
              $(".titulo-cupcake").text(value.nome);
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

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.stringify(this.getItem(key))
}

var cupcakesList = new Array();
var cupcake = new Object();
$(document).ready(function(){
  $('.article-cupcakes').on('click', (e) => {
    $.getJSON("../cupcakes.json", function(dados){
      var id = e.target.id;
      if (!("erro" in dados.cupcakes)) {
          $.each(dados.cupcakes, function(index, value){
            if(id == dados.cupcakes[index].id) {
              cupcake.id = value.id;
              cupcake.nome = value.nome;
              cupcake.preco = value.preco;
              cupcakesList.push(cupcake);
            }
          });
    }});
  });
  $('#adcCupcake').on('click', function() {
    localStorage.setObj(cupcake.id, cupcake);
    console.log(localStorage.getItem(cupcake.id));
    // window.location.href="carrinho.html";
  });
});

$(document).ready(function(){

 for(var i = 1; i<=3; ++i){
    $('#titulo-cupcake-carrinho').append("<br/>"+localStorage.getItem(i));
  }
});

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

headerResponsivo(controle);

// const search = document.getElementById('search');
// const matchList = document.getElementById('match-list');

// const searchStates = async searchText => {
//   const res = await fetch('../cupcakes.json');
//   const teste = await res.json();
//   const states = Object.values(teste);
//   // console.log(Object.values(states));

//   // console.log(JSON.stringify(states));

 
//   // console.log(states);

//   let matches = states.filter(state => {

//     const regex = new RegExp(`^${searchText}`, 'gi');
//     // console.log(state.name);
//     return state.nome.match(regex) || state.abbr.match(regex);
//   });

//   if (searchText.length === 0) {
//     matches = [];
//   }

//   outputHtml(matches);

//   // console.log(matches);
// }

// search.addEventListener('input', () => searchStates(search.value));

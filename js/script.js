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
    window.location.href="carrinho.html";
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
const hamburguer = document.querySelector(".hamburguer-menu");
var menuMobile = $('.hamburguer-menu');
var itemsMenu = $('.menu_li');

function headerResponsivo(controleVar) {
  if (controleVar.matches) { 
    menuMobile.show();
    itemsMenu.hide();
  } else {
    menuMobile.hide();
    itemsMenu.show();
    $('.hamburguer').hide();
  }
}

controle.addEventListener('change', headerResponsivo)

headerResponsivo(controle);

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  $('.hamburguer').toggle()
})


// const cupcakes = $.getJSON("../cupcakes.json");
// let cupcakes = 0;
//  $.getJSON("../cupcakes.json", function(dados){
//   this.cupcakes = dados;
// });

// console.log(cupcakes);

/* Código para campo de pesquisa - só funciona se o objeto cupcakes estiver definido nesse documento
  (retire os comentários do objeto cupcake...) - Gustavo
*/

// var request = new XMLHttpRequest();
// request.open('GET', '../cupcakes.json')
// request.onload = function() {
//   localStorage.setObj("cupcakes", request.responseText);
// };
// request.send();

// fetch("../cupcakes.json")
// .then(response => response.json())
// .then(cupcakes => showInfo(cupcakes));

// function showInfo(cupcakes) {
//   console.table(cupcakes.nome);
// }


const list = document.getElementById('list');

function setList(group) {
  limparLista();

  for(const cupcake of group) {
    const item = document.createElement('div');
    const text = document.createTextNode(cupcake.nome);
    item.appendChild(text);
    list.appendChild(item);
  }

  if(group.length === 0) {
    naoEncontrado();
  }
}

function limparLista() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function naoEncontrado() {
  const item = document.createElement('div');
  item.classList.add('list-group-item');
  const text = document.createTextNode('Resultado não encontrado');
  item.appendChild(text);
  list.appendChild(item);
}

function filtrarPorRelavancia(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else {
    return -1;
  }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {

  //  let cupcakes = localStorage.getObj("cupcakes");
  //  console.log(cupcakes);

  let value = event.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim();
    setList(cupcakes.filter(cupcake => {
      return cupcake.nome.includes(value);
    }).sort((cupcakeA, cupcakeB) => {
        return filtrarPorRelavancia(cupcakeB.nome, value) - filtrarPorRelavancia(cupcakeA.nome, value);
    }));
  } else {
    limparLista();
  }
});

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


// const cupcakes = [
//   {
//       "id": "1",
//       "nome": "Chocolate Peanut Butter",
//       "desc": "Cupcake de chocolate com cobertura de doce de leite com chocolate em forma geométrica no topo feito à mão",
//       "ingr": "Açúcar, leite, sacarose, farinha, chocolate em pó, fermento, água, leite condensado e ovos.",
//       "alerg": "Contém leite e glúten",
//       "valEnerg": "145 kcal",
//       "peso": "30 g",
//       "preco": "R$ 5,00"
//   },
//   {
//       "id": "2",
//       "nome": "Chocolate Hazelnut",
//       "desc": "Cupcake de chocolate com cobertura de chocolate e nozes",
//       "ingr": "Açúcar, leite, sacarose, farinha, chocolate em pó, fermento, água, leite condensado, ovos e nozes.",
//       "alerg": "Contém leite e glúten",
//       "valEnerg": "190 kcal",
//       "peso": "30g",
//       "preco": "R$ 5,00"
//   },
//   {
//       "id": "3",
//       "nome": "Vanilla Coconut",
//       "desc": "Cupcake de baunilha com cobertura e raspas de coco",
//       "ingr": "Açúcar, leite, sacarose, farinha, fermento, água, leite condensado, ovos, baunilha e coco.",
//       "alerg": "Contém leite e glúten",
//       "valEnerg": "30 g",
//       "peso": "30g",
//       "preco": "R$ 5,00"
//   },
//   {
//       "id": "4",
//       "nome": "Chocolate Coconut",
//       "desc": "Cupcake de chocolate com cobertura e raspas de coco",
//       "ingr": "Açúcar, leite, sacarose, farinha, chocolate em pó, fermento, água, leite condensado, ovos e coco.",
//       "alerg": "Contém leite e glúten",
//       "valEnerg": "30 g",
//       "peso": "30g",
//       "preco": "R$ 5,00"
//   },
//   {
//       "id": "5",
//       "nome": "dia do Orgulho Gay",
//       "desc": "Cupcake de chocolate caracterizado com bandeira LGBTQIA+",
//       "ingr": "Açúcar, leite, sacarose, farinha, chocolate em pó, fermento, água, leite condensado e ovos.",
//       "alerg": "Contém leite",
//       "valEnerg": "30 g",
//       "peso": "30g",
//       "preco": "R$ 5,00"
//   },
//   {
//       "id": "6",
//       "nome": "dia do Jazz",
//       "desc": "Cupcake de chocolate caracterizado com instrumento saxofone",
//       "ingr": "Açúcar, leite, sacarose, farinha, chocolate em pó, fermento, água, leite condensado e ovos.",
//       "alerg": "Contém leite",
//       "valEnerg": "30 g",
//       "peso": "30g",
//       "preco": "R$ 5,00"
//   },
//   {
//       "id": "7",
//       "nome": "Festival de Filme Internacional de Toronto",
//       "desc": "Cupcake de chocolate caracterizado com símbolo do teatro/cinema",
//       "ingr": "Açúcar, leite, sacarose, farinha, chocolate em pó, fermento, água, leite condensado e ovos.",
//       "alerg": "Contém leite",
//       "valEnerg": "30 g",
//       "peso": "30g",
//       "preco": "R$ 6,00"
//   }
// ];
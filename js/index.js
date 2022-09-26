/* Confirmação do pedido */

if (document.body.classList.contains('confirmar-pedido')) {
  window.onload = numeroPedido();
  function numeroPedido() {
    var resp = Math.floor(Math.random() * 10000 + 1);
    document.getElementById("outNumeroPedido").innerHTML = resp;
  }
}

/* Script para validação do contato */
if (document.body.classList.contains('contato')) {
  const form = document.getElementById('form-contato');
  const campos = document.querySelectorAll('.required');
  const spans = document.querySelectorAll('.span-required');
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const cellphoneRegex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|)[-. ]?(\d{4})[-. ]?\s*$/;
  const fields = document.querySelectorAll('.field');
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
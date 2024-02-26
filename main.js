const form = document.getElementById('form-validacao');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');
let formEValido = false;

function validaValores(valorA, valorB) {
    return parseInt(valorB) > parseInt(valorA);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEValido = validaValores(valorA.value, valorB.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.textContent = '"B" é maior que "A", formulário enviado com sucesso!';
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {
        alert('Erro: B deve ser maior que A.');
    }
})

valorB.addEventListener('keyup', function(e){
    formEValido = validaValores(valorA.value, e.target.value)
    if (!formEValido) {
        valorB.classList.add('error');
    } else {
        valorB.classList.remove('error');
    }
});

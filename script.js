const form = document.getElementById('form-deposito');
const mensagemSucesso = document.querySelector('.mensagem-sucesso');
const mensagemErro = document.querySelector('.mensagem-erro');

function validacao(numeros) { 
    const [numA, numB] = numeros;
    return numB > numA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroA = document.getElementById('numero-a').value;
    const numeroB = document.getElementById('numero-b').value;

    // Convert input values to numbers
    const numArray = [parseFloat(numeroA), parseFloat(numeroB)];

    if (validacao(numArray)) {
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    } else {
        mensagemSucesso.style.display = 'none';
        mensagemErro.style.display = 'block';
    }
});

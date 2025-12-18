const container = document.getElementById('meuContainer');
const inputs = container.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => container.classList.add('turbo'));
    input.addEventListener('blur', () => container.classList.remove('turbo'));

});

const containerNeve = document.getElementById('container-neve')

function criarFloco() {
    const floco = document.createElement('div');
    floco.classList.add('floco');
    floco.style.left = Math.random() * 100 + 'vw';
    const tamanho = Math.random() * 5 + 2;
    floco.style.width = tamanho + 'px';
    floco.style.height = tamanho + 'px';

    const duracao = Math.random() * 5 + 3;
    floco.style.animation = `cair ${duracao}s linear infinite`;
    floco.style.animationDelay = Math.random() * 2 + 's';
    containerNeve.appendChild(floco);
    setTimeout(() => {
        floco.remove();
    }, (duracao + 2) * 1000);
}
setInterval(criarFloco, 100);

const botaoEntrar = container.querySelector('button');

const inputUsuario = inputs[0];
const inputSenha = inputs[1];

    botaoEntrar.addEventListener('click', () =>{
        if (inputUsuario.value !=='' & inputSenha.value !==''){
            window.location.href = "/pages/todo.html";
        }else{
            alert("Prencha os dois campos corretamentes.");
        }
    });

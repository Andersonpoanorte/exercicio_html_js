const form = document.getElementById('form');
const campoA = document.getElementById('Campo-A');
const campoB = document.getElementById('Campo-B');



form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = `Formulário é válido pois Campo-B: <b>${campoB.value}</b>, é maior que Campo-A: <b>${campoA.value}</b>`;
    const unsuccessfulMessage = `Formulário não valido, pois Campo-B: <b>${campoB.value}</b>, é menor que Campo-A: <b>${campoA.value}</b>`;
    
    if(campoB.value > campoA.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value ='';
    }else {
        const containerUnsuccessfulMessage = document.querySelector('.unsuccessful-message');
        containerUnsuccessfulMessage.innerHTML = unsuccessfulMessage;
        containerUnsuccessfulMessage.style.display = 'block';

        campoA.value = '';
        campoB.value ='';
    }
     
});



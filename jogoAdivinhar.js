    //variáveis iniciais
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;  //gerar um número aleatório entre 1 e 100
        
    const maxTentativas = 10; //definir número máximo de tentativas
    
    let tentativasRestantes = maxTentativas; //inicializar o contador de tentativas 

//função verificar o palpite
function botaoChutar() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const feedbackAtt = document.getElementById("feedback");
    const tentativasAtt = document.getElementById("tentativas");

    //se o palpite é válido 
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        feedbackAtt.textContent = "Por favor, digite um número válido entre 1 e 100";
        return;
    }

    //compara o palpite com o número aleatório
    if (palpite === numeroAleatorio) {
        feedbackAtt.textContent = "Você acertou! Parabéns";
        tentativasAtt.textContent = "Fim de jogo!";
        document.getElementById("palpite").disabled = true;
        document.querySelector("button").disabled = true;
        return;
    } else if (palpite < numeroAleatorio) {
        feedbackAtt.textContent = "O número secreto é maior.";        
    } else {
        feedbackAtt.textContent = "O número secreto é menor.";
    }

    //decrementa o número de tentativas
    tentativasRestantes--;
    tentativasAtt.textContent = `Tentativas restantes: ${tentativasRestantes}`;    

    //se acabou as tentativas 
    if (tentativasRestantes === 0) {
        feedbackAtt.textContent = `Você perdeu! O número era ${numeroAleatorio}.`;
        tentativasAtt.tentativasAtt = "Fim de Jogo!";
        document.getElementById("palpite").disabled = true;
        document.querySelector("button").disabled = true;
    }

    //limpa o input
   document.getElementById("palpite").value = "";
}






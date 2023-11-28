function inicio() {

    let msgMes
    var mes = 0;
    let nome = window.prompt('Qual é o seu nome?')
    let resnome = window.document.getElementById('resultado')
    var mes = parseInt(prompt('Qual é o mês do seu aniversário:'))
    var resmes = window.document.getElementById('resultado1')
    var ano = parseInt(prompt('Qual o ano que você nasceu:'))
    var resano = window.document.getElementById('resultado2')
    var anos = ano + 1;
   
   
        if(mes==1){
        mes = "janeiro"
        msgMes = "Viva hoje enquanto está vivo."
    }
    else if(mes==2){
        mes = "fevereiro"
        msgMes = "Java e JavaScript são uma dlç!"
    }
        if(mes==3){
        mes = "março"
        msgMes = "Viva hoje enquanto está vivo"
    }
    else if(mes==4){
        mes = "abril"
        msgMes = "Cada um brilha de um jeito. Descubra a sua maneira e projete brilho para o mundo!"
    }
    else if(mes==5){
        mes = "maio"
        msgMes = "O projeto mais importante da sua vida é você!"
    }
    else if(mes==6){
        mes = "junho"
        msgMes = "Comece apenas acreditando que tudo dará certo."
    }  
    else if(mes==7){
        mes = "julho"
        msgMes = "Calma. Amanhã você continua. A vida é cíclica, deixa ela girar."
    }
    else if(mes==8){
        mes = "agosto"
        msgMes = "Pensamentos felizes fazem a gente voar"
    }
    else if(mes==9){
        mes = "setembro"
        msgMes = "Não deixe que seus sonhos sejam apenas sonhos."
    }
    else if(mes==10){
        mes = "outubro"
        msgMes = "Todos os nossos sonhos podem se tornar realidade, se tivermos a coragem de persegui-los. – Walt Disney"
    }
    else if(mes==11){
        mes = "novembro"
        msgMes = "onhe, acredite, dedique-se, realize!"
    }
    else if(mes==12){
        mes = "dezembro"
        msgMes = " Nada é tão nosso quanto os nossos sonhos."
    }
    else{

    }

    resnome.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
    resmes.innerHTML = `<p><strong>${mes}</strong>! Mensagem do mês: <p><H1>${msgMes}</H1>;`
    resano.innerHTML = `<p>No final do ano sua idade será :<strong>${anos}</strong;`
}
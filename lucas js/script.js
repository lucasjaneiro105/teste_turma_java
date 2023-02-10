



/*var numberOne = parseFloat(prompt('digite o primeiro numero'));
var numberTwo = parseFloat(prompt('digite o segundo numero'));
var operaçao = numberOne + numberTwo; 
alert(operaçao);
document.write('<br>');


var numberThree = parseFloat(prompt('digite o numero para calcular o quadrado dele'));
var numberFour = numberThree;
document.write ('quadrado do numero: ');
document.write(numberThree * numberFour );
document.write('<br>');


var palavra1 = ('seja bem-vindo ');
var palavra2 = prompt ('digite seu nome ');
document.write(palavra1 + palavra2);
document.write('<br>');


numberFive = parseFloat(prompt('digite o primero numero para fazer as operações basicas'));
numberSix = parseFloat(prompt('digite o segundo numero para fazer as operações basicas'));
document.write ('soma: ');
document.write (numberFive + numberSix );
document.write('<br>');


document.write ('menos: ');
document.write(numberFive - numberSix );
document.write('<br>');


document.write ('multiplicação: ');
document.write(numberFive * numberSix ); 
document.write('<br>');


document.write ('divisão: ');
document.write(numberFive / numberSix );
document.write('<br>');


numeroIdade = parseFloat(prompt('digite o ano que voce nasceu para calcular sua idade em 2030'));
numeroIdade2 = 2030;
document.write ('sua idade em 2030: ');
document.write(numeroIdade2 - numeroIdade );
document.write('<br>');*/


/*var valorDigitado = parseInt(prompt('digite um valor'));
var porcento = 0.7 ;
var valorRetornado = valorDigitado + valorDigitado * porcento ;

document.write(valorRetornado);*/


/*var numeroFuncionario = prompt('Informe o nome do Colaborador');
var salarioBruto = prompt('Informe o salario do Colaborador');

var descontoVt = salarioBruto * 0.06;
var descontoInss = salarioBruto * 0.08; 
var salarioLiquido = salarioBruto - descontoInss - descontoVt; 

document.write (`O salario bruto do colaborador ${numeroFuncionario} é de R$ ${salarioBruto}`);
document.write('<br>');

document.write (`O desconto do vale transporte é de R$ ${descontoVt}`);
document.write('<br>');

document.write (`O desconto do INSS é de R$ ${descontoInss}`);
document.write('<br>');

document.write(`O salario liquido do Colaborador ${numeroFuncionario} é de R$ ${salarioLiquido} `);
document.write('<br>');*/



/*var  nomeProduto = prompt('Informe o Nome do Produto Para Revenda');
var valordoProduto = prompt('Qual o valor do Produto');
var valorDeRevenda = valordoProduto * 1.5;

document.write (`O valor da revenda do(a) ${nomeProduto} será de R$ ${valorDeRevenda}`);
document.write('<br>');

var valordoInvestimento = prompt('Quanto você pretende investir?');
var rendimento = valordoInvestimento * 1.3;

document.write (`O valor investido vai ser ${rendimento} com 30% de rentabilidade`);
document.write('<br>');

var salario1 = prompt('Qual o valor do seu salario?');
var salario15 = salario1 * 1.15;

document.write (`O salario com acrescimo de 15% vai ser R$ ${salario15}`);
document.write('<br>');

var produtoNormal = parseInt(prompt('Qual o valor do produto?'));
var produtoDesconto = produtoNormal * 0.07;
var produtofinal = produtoNormal - produtoDesconto;

document.write (`O Produto de R$ ${produtoNormal} com o desconto de 7% vai custar R$ ${produtofinal}`);
document.write('<br>');*/


// se a cidade do usuario for maior de 18 ele pode dirigir 

/* var idadeUsuario = prompt('informa a idade do usuario:');

if(idadeUsuario < 18) {
      document.write ('O usuario pode dirigir')
}; 


var idadeUsuario = 18; 

if(idadeUsuario >= 21){

console.log('Pode Beber')

}; */ 


/*var cidadeNasc = prompt('O Usuario mora no Rio de Janeiro? rj ou sp');
if(cidadeNasc == 'rj'){ 
     document.write('O Usuario é carioca')
    } else if(cidadeNasc == 'sp') { 
        document.write('O Usuario é paulista')
    }
else{ 
 document.write ('Informe a cidade correta, tente novamente') 
};*/



/*var salario = prompt('Informe o salario, por gentileza.');
if(salario >= 3000){
document.write ('Oferecer Plano Alfa') 
} else if(salario < 3000) { 

  document.write('Oferecer Plano Beta')
}


else { 
     document.write('Coloque um valor valido')
};*/


/*var colesterol = prompt('Qual o valor do seu colesterol?')
if(colesterol <= 180){
    document.write ('Saude Ok')
} else if(colesterol > 180) {

    document.write('vamos procurar uma ajuda medica?')
}

else { 
    document.write('Coloque um valor valido, por gentileza')
};*/


/*var vendas = parseInt(prompt('Infome o valor que você vendeu nesse mês?'))
 var vendaAcima = vendas * 0.04;
 var vendasBaixo = vendas * 0.02; 

 if(vendas >= 10000) {
      document.write(vendaAcima)
 } else if (vendasBaixo < 10000) {
    document.write(vendasBaixo)
 }
else { 

    documen.write ('informe o valor valido')
};*/


/*var competência = prompt('O aluno antigiu a competência, sim ou não?')
var frenquência = prompt('Informe a procentagem de frequência (%)');

if(
    competência == 'sim' && frenquência >= 70)
     
    { document.write ('Aluno foi aprovado')}
    else{ 
        document.write('O aluno foi reprovado')
    };


   var nota = parseFloat(prompt('Qual a nota do aluno?'))
    if ( nota >= 0.00 && nota <= 4.00){
        document.write('Aluno foi reprovado')
    }
else if( nota < 7.00){ 
    document.write('Aluno está de recuperação')
}
else if( nota >= 7.00 && nota <= 10.00) {
    document.write('Aluno foi aprovado')
}
else{

    document.write('nota invalída')
};*/

/*var cor = prompt('Informe sua cor favorita'); 
switch(cor){

case 'amarelo':
    document.write('você gosta do sol')
    break;

case 'azul':
    document.write('você gosta do mar')
     break;

    case 'verde':
    document.write('você gosta da floresta')
   break;
   default: 
      document.write('você não gosta de nada')
};*/


/*var mes = prompt('digite um numero de 1 a 12 para saber o mês do numero')
switch(mes){

    case '1':
        document.write('Janeiro')
        break; 

        case '2':
        document.write('Fevereiro')
        break; 

        case '3':
        document.write('Março')
        break; 

        case '4':
        document.write('Abril')
        break; 

        case '5':
        document.write('Maio')
        break; 

        case '6':
        document.write('Junho')
        break; 

        case '7':
        document.write('Julho')
        break; 

        case '8':
        document.write('Agosto')
        break; 

        case '9':
        document.write('Setembro')
        break; 

        case '10':
        document.write('Outubro')
        break; 

        case '11':
        document.write('Novembro')
        break; 

        case '12':
        document.write('Dezembro')
        break;

        default: 
         document.write('mês invalido')
};
document.write('<br>')

var notaAluno = prompt('Qual o conceito do aluno?')
 switch (notaAluno) {
    case 'A':
        document.write('Atendido')
      break;

      case 'PA':
        document.write('Parcialmente Atendido')
      break;

      case 'NA':
        document.write('Não Atendido')
      break;

      default: 
         document.write('conceito invalido') 
 };*/


/*var usuarioIdade = 20;

if(usuarioIdade >= 18){

    console.log('Usuario maior de idade');
} else {
      console.log('Usuario menor de idade');

};*/


// condição ? true : false; 

// var usuarioIdade = 20;
// var mensagem = usuarioIdade >= 18 ? 'Usuario maior de idade' : 'Usuario menor de idade';
// console.log(mensagem);





// var gamer = 800; 
// var pontuaçao = gamer >= 1000 ? 'Usuario VIP' : 'Aumente sua pontuação para se tornar um Usuario VIP';
// console.log(pontuaçao); 

/* var altura = 0.96; 
var alturaPermitida = altura >= 1.20 ? 'Acesso Liberado' : 'Acesse apenas para crianças com mais de 1.20 metros de altura';
console.log(alturaPermitida);  */

/* var nMastigadas = 1;
while (nMastigadas <= 20) {

    console.log(`O numero de mastigadas ${nMastigadas} `);
    nMastigadas+=3;
}
 console.log('Finalmente engoliu'); */

 /*for(var xMastigadas = 1; xMastigadas <= 20; xMastigadas++){
    console.log("Mastigadas de numero" + xMastigadas +  "realizadas");
 };*/




/*var contagem = 10; 
 while (contagem >= 0) {
    console.log(`Numero ${contagem}`);
    contagem--;
 }
 console.log('acabou');*/


/*for(var contagem = 10; contagem >= 0; contagem--){
 console.log("contagem" + contagem + "realizada" );
};*/



/*var contagemUsuario = prompt('Digite um numero');
while (contagemUsuario) {
    document.write(`Numero ${contagemUsuario} foi`);
    document.write('<br>')
    contagemUsuario--;
    
}
document.write('A contagem acabou');*/





/*var i = 0;
while(i < 11){
    console.log('2 x ' + i + ' = ' + 2*i);
    i++;
};*/


/*for(var i = 0; i < 11; i++) {

    console.log('2 x ' + i + ' = ' + 2*i);
};*/


/*function operaçao(numero1, numero2) {
    return numero1 + numero2 
}

console.log(operaçao(1, 2));*/


/* function maior(n1, n2) {
    return Math.max(n1, n2);
   
}

console.log(maior(19, 18));*/


var nomes = ['Lucas', 'Leonardo', 'Breno', 'Caue', 'Rafael', 'Jean', 'Gabriel', 'Gustavo', 'Julio', 'Davi'];
nomes.push('Bidu', 'Cadu', 'Dolly');
nomes.pop('Dolly')
console.log(nomes);


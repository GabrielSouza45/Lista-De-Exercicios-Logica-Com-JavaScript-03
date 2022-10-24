// ------- Exercicio 1 ----------

// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. 
// Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. 
// Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.

document.getElementById("resultado").innerHTML = ("");

function distribuitiva() {


    let diaTotal = 0;

    let a = parseInt(prompt("Digite um valor:"));
    let b = parseInt(prompt("Digite outro valor:"));
    let c = parseInt(prompt("Digite outro valor:"));
    let d = parseInt(prompt("Digite um último valor:"));


    document.getElementById("resultado").innerHTML = (`Soma:
                                                        ${a} + ${b} = ${a+b}
                                                        ${a} + ${c} = ${a+c}
                                                        ${a} + ${d} = ${a+d}
                                                        ${b} + ${c} = ${b+c}
                                                        ${b} + ${d} = ${b+d}
                                                        ${c} + ${d} = ${c+d}

                                                        Multiplicação:
                                                        ${a} * ${b} = ${a*b}
                                                        ${a} * ${c} = ${a*c}
                                                        ${a} * ${d} = ${a*d}
                                                        ${b} * ${c} = ${b*c}
                                                        ${b} * ${d} = ${b*d}
                                                        ${c} * ${d} = ${c*d}`);

}

function primeiroExerc() {
    alert("Este é o primeiro exercício.");
}







// ------- Exercicio 2 ----------

// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME=COMPRIMENTO * LARGURA * ALTURA. 


function segundo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'primeiro()');
    document.getElementById("proximo").setAttribute('onclick', 'terceiro()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 2 - Volume da caixa retangular";
    document.getElementById("texto-exercicio").innerHTML = "Lê o comprimento, largura e altura da caixa e exibe o volume";

    document.getElementById("button").setAttribute('onclick', 'caixa()');
}

function primeiro() {
    location.reload(true);
}

function caixa() {
    let comprimento = parseInt(prompt("Digite o comprimento da caixa:"));
    let largura = parseInt(prompt("Digite a largura da caixa:"));
    let altura = parseInt(prompt("Digite a altura da caixa:"));

    let volume = comprimento * altura * largura;

    document.getElementById("resultado").innerHTML = (`Comprimento: ${comprimento}
                                                        Altura: ${altura}
                                                        Largura: ${largura}
                                                        Volume: ${volume}`);

}






// ------- Exercicio 3 ----------

// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.

function terceiro() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'segundo()');
    document.getElementById("proximo").setAttribute('onclick', 'quarto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 3 - Quadrado da Diferença";
    document.getElementById("texto-exercicio").innerHTML = "Lê dois valores e exibe o quadrado da diferença entre os dois.";

    document.getElementById("button").setAttribute('onclick', 'quadradoDiferenca()');
}



function quadradoDiferenca() {
    let a = parseInt(prompt("Digite o primeiro valor:"));
    let b = parseInt(prompt("Digite o segundo valor:"));


    let diferenca = a - b;
    let quadradoDiferenca = Math.pow(diferenca, 2);

    document.getElementById("resultado").innerHTML = (`${a} - ${b} = ${diferenca}
                                                        ${diferenca}^2 = ${quadradoDiferenca}`);
}






// ------- Exercicio 4 ----------

// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar.
// O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário,
// para que seja apresentado o valor em moeda brasileira. 

function quarto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'terceiro()');
    document.getElementById("proximo").setAttribute('onclick', 'quinto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 4 - Conversor Dólar -> Real";
    document.getElementById("texto-exercicio").innerHTML = "Lê valor em real e a cotação em dolar atual e exibe o valor em dólar.";

    document.getElementById("button").setAttribute('onclick', 'conversaoPReal()');
}


function conversaoPReal() {

    let dolar = parseFloat(prompt("Digite a quantidade em Dolar:"));
    let cotacao = parseFloat(prompt("Digite a cotação atual do dolar:"));

    let valorReal = dolar * cotacao;

    document.getElementById("resultado").innerHTML = (`Valor em real: R$${dolar}
                                                        Valor da cotação: R$${cotacao}
                                                        Valor em dólar: $${valorReal.toFixed(2)}`);
}







// ------- Exercicio 5 ----------

// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. 
// A fórmula de conversão é F = (C/5)*9+32, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

function quinto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quarto()');
    document.getElementById("proximo").setAttribute('onclick', 'sexto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 5 - Conversor Real -> Dólar";
    document.getElementById("texto-exercicio").innerHTML = "Lê valor em dolar e a cotação em dolar atual e exibe o valor em real.";

    document.getElementById("button").setAttribute('onclick', 'conversaoDolar()');
}


function conversaoDolar() {

    let real = parseFloat(prompt("Digite a quantidade em Real:"));
    let cotacao = parseFloat(prompt("Digite a cotação atual do dolar:"));

    let valorDolar = real / cotacao;

    document.getElementById("resultado").innerHTML = (`Valor em real: R$${real}
                                                        Valor da cotação: R$${cotacao}
                                                        Valor em dólar: $${valorDolar.toFixed(2)}`);
}






// -- -- -- - Exercicio 6-- -- -- -- --

// Elaborar um programa que efetue a leitura de três valores(A, B e C) e apresente como resultado
// final à soma dos quadrados dos três valores lidos.

function sexto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quinto()');
    document.getElementById("proximo").setAttribute('onclick', 'setimo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 6 - Soma dos Quadrados";
    document.getElementById("texto-exercicio").innerHTML = "Lê 3 valores e exibe a soma de seus quadrados.";

    document.getElementById("button").setAttribute('onclick', 'somaQuadrados()');
}


function somaQuadrados() {

    let a = parseInt(prompt("Digite o primeiro valor:"));
    let b = parseInt(prompt("Digite o segundo valor:"));
    let c = parseInt(prompt("Digite o terceiro valor:"));

    let aQ = Math.pow(a, 2);
    let bQ = Math.pow(b, 2);
    let cQ = Math.pow(c, 2);

    let soma = aQ + bQ + cQ;

    document.getElementById("resultado").innerHTML = (` ${a}² = ${aQ} \n ${b}² = ${bQ} \n ${c}² = ${cQ} \n
                                                    \n ${aQ} + ${bQ} + ${cQ} = ${soma}`);
}




// ------- Exercicio 7 ----------

//  Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

function setimo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'sexto()');
    document.getElementById("proximo").setAttribute('onclick', 'oitavo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 7 - Quadrado das Somas";
    document.getElementById("texto-exercicio").innerHTML = "Lê 3 valores e exibe o quadrado de suas somas.";

    document.getElementById("button").setAttribute('onclick', 'quadradoSomas()');
}


function quadradoSomas() {

    let a = parseInt(prompt("Digite o primeiro valor:"));
    let b = parseInt(prompt("Digite o segundo valor:"));
    let c = parseInt(prompt("Digite o terceiro valor:"));

    let soma = a + b + c;

    let quadrado = Math.pow(soma, 2);

    document.getElementById("resultado").innerHTML = (` ${a} + ${b} + ${c} = ${soma} \n ${soma}² = ${quadrado} \n`);

}




// ------- Exercicio 8 ----------

// Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D).
// Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, 
// e o resultado da soma (variável S) do segundo com o quarto valor.  

function oitavo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'setimo()');
    document.getElementById("proximo").setAttribute('onclick', 'nono()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 8 - Produto e Soma";
    document.getElementById("texto-exercicio").innerHTML = "Lê 4 valores e exibe o produto do 1° com o 3° e a soma do 2° com o 4°.";

    document.getElementById("button").setAttribute('onclick', 'produtoSoma()');
}


function produtoSoma() {

    let a = parseInt(prompt("Digite um valor:"));
    let b = parseInt(prompt("Digite um valor:"));
    let c = parseInt(prompt("Digite um valor:"));
    let d = parseInt(prompt("Digite um valor:"));

    let p = a * c;
    let s = b + d


    document.getElementById("resultado").innerHTML = (` A = ${a} \n B = ${b} \n C = ${c} \n D = ${d} 
                                                        \n ${a} * ${c} = ${p} \n${b} + ${d} = ${s}`);
}





// ------- Exercicio 9 ----------

// Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual 
// de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS). 

function nono() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'oitavo()');
    document.getElementById("proximo").setAttribute('onclick', 'decimo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 9 - Reajuste Salarial";
    document.getElementById("texto-exercicio").innerHTML = "Lê o salário atual e o reajuste, e exibe o novo salário.";

    document.getElementById("button").setAttribute('onclick', 'salario()');
}

let SM, PR, NS = 0;

function salario() {
    SM = parseInt(prompt("Digite o salário mensal atual:"));
    PR = parseInt(prompt("Digite o percentual de reajuste:"));

    NS = SM + (SM * PR / 100);

    document.getElementById("resultado").innerHTML = (`O novo salário será de: R$${NS.toFixed(2)}`);
}




// ------- Exercicio 10 ----------

// Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). 
// Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. 
// Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar 
// também a leitura da quantidade de votos nulos e votos em branco. 
// Ao final o programa deve apresentar o número total de eleitores, 
// considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores;
// o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos
// válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade
// de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de 
// votos em branco em relação à quantidade de eleitores. 

function decimo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'nono()');
    document.getElementById("proximo").setAttribute('onclick', 'alert(`Este é o último exercício`)');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 10 - Eleição Sindical";
    document.getElementById("texto-exercicio").innerHTML = "Lê 3 candidatos, os eleitores, votos em branco, nulos e validos e exibe o percentual.";

    document.getElementById("button").setAttribute('onclick', 'votacao()');
}


function votacao() {

    let a = prompt("Digite o nome do candidato 1:");
    let b = prompt("Digite o nome do candidato 2:");
    let c = prompt("Digite o nome do candidato 3:");

    let eleitores = parseInt(prompt("Digite o total de eleitores:"));
    let nulos = parseInt(prompt("Digite o total de votos nulos:"));
    let brancos = parseInt(prompt("Digite o total de votos em branco:"));

    let validosA = parseInt(prompt(`Digite o total de votos válidos em ${a}`));
    let validosB = parseInt(prompt(`Digite o total de votos válidos em ${b}`));
    let validosC = parseInt(prompt(`Digite o total de votos válidos em ${c}`));

    let comparacao = nulos + brancos + validosA + validosB + validosC;

    if (comparacao === eleitores) {

        let porcValidosA = validosA * 100 / eleitores;
        let porcValidosB = validosB * 100 / eleitores;
        let porcValidosC = validosC * 100 / eleitores;

        nulos = nulos * 100 / eleitores;
        brancos = brancos * 100 / eleitores;

        document.getElementById("resultado").innerHTML = (`Porcentagem de votos ${a}: ${porcValidosA.toFixed(2)}% com ${validosA} votos.
                                                            \nPorcentagem de votos ${b}: ${porcValidosB.toFixed(2)}% com ${validosB} votos.
                                                            \nPorcentagem de votos ${c}: ${porcValidosC.toFixed(2)}% com ${validosC} votos.
                                                            \n
                                                            \nProcentagem de votos brancos: ${brancos.toFixed(2)}%.
                                                            \nProcentagem de votos nulos: ${nulos.toFixed(2)}%.`);
    } else if (comparacao < eleitores) {
        alert("Erro: Quantidade de votos menor que a de eleitores.");
    } else {
        alert("Erro: Quantidade de votos maior que a de eleitores")
    }
}
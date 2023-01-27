//Testando o console.log dentro do JS
console.log("Trying the Node.JS");

//Import a biblioteca ReadLine para leitura de dados no prompt
var readLine = require("readline");

//Criando a entrada de dados para chamar a função CallBack
var dataInput = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

/*
Função CallBack:
    É uma função que quando chamada ela retorna o seu conteúdo
    em uma única instrção, ou seja, em apenas um passo! 
*/

//Criamos um CallBack para receber o que o usuário digita no prompt
dataInput.question(
    "Digite seu nome: \n",
    function(nomeUsuario){
        console.log('Olá, ' + nomeUsuario + '! Bem-vindo ao servidor Node.JS. ' );
})  

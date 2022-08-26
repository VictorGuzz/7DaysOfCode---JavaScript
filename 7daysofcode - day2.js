let nome = prompt('Qual seu nome?: ');
let idade = prompt('Quantos anos você tem?: ');
let linguagem = prompt('Qual linguagem de programação você está estudando?: ');
let resposta = prompt(`Você gosta de estudar ${linguagem}?   [1=s/2=n]: `);

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)

if(resposta == 1){
    console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}

if(resposta == 2){
    console.log('Ahh que pena... Já tentou aprender outras linguagens?');
}

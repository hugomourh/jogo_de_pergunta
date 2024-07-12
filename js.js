import input from 'readline-sync';

const questoes = [
    {  pergunta: 'Quando aconteceu o atentado às Torres Gêmeas?', resposta: '2001' },
    {  pergunta: 'Em que ano foi detectado o primeiro paciente com coronavírus?', resposta: '2019' },
    {  pergunta: 'Em que Steve Jobs apresentou o primeiro iPhone sem teclas?', resposta: '2007' },
    {  pergunta: 'Qual o ano da morte de Stephen Hawking?', resposta: '2018' },
    {  pergunta: 'Qual ano o Brasil tornou-se tetracampeão mundial de futebol?', resposta: '1994' },
    {  pergunta: 'O primeiro lançamento de foguete da SpaceX ocorreu em?', resposta: '2017' },
    {  pergunta: 'Em que ano foi apresentado o primeiro computador eletrônico?', resposta: '1946' },
    {  pergunta: 'Em que ano ocorreu a Revolução Francesa?', resposta: '1789' },
    {  pergunta: 'Em que ano começou a Primeira Guerra Mundial?', resposta: '1914' },
    {  pergunta: 'Em que ano terminou a Segunda Guerra Mundial?', resposta: '1945' },
    {  pergunta: 'O muro de Berlim foi derrubado em qual ano?', resposta: '1989' },
    {  pergunta: 'Qual o ano que o Titanic afundou?', resposta: '1912' },
    {  pergunta: 'Qual o ano de lançamento do primeiro PlayStation?', resposta: '1994' },
    {  pergunta: 'Em que ano a Declaração Universal dos Direitos Humanos foi assinada?', resposta: '1948' },
    {  pergunta: 'Em que ano a World Wide Web foi criada por Tim Berners-Lee?', resposta: '1990' },
    {  pergunta: 'Em que ano o Euro foi introduzido como moeda única na Europa?', resposta: '1999' },
    {  pergunta: 'Em que ano foi abolida a escravidão no Brasil?', resposta: '1888' },
    {  pergunta: 'Qual ano foi instaurado o regime militar no Brasil?', resposta: '1964' },
    {  pergunta: 'Em que ano o Brasil proclamou a República?', resposta: '1889' },
    {  pergunta: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', resposta: '1904' },
    {  pergunta: 'Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?', resposta: '1950' },
    {  pergunta: 'Em que ano foi adotado o Acordo de Paris sobre mudanças climáticas?', resposta: '2015' },
    {  pergunta: 'Em que ano ocorreu a Guerra das Malvinas?', resposta: '1982' },
    {  pergunta: 'Qual foi o ano em que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', resposta: '1963' },
    {  pergunta: 'Em que ano a União Europeia foi fundada?', resposta: '1993' },
    {  pergunta: 'Em que ano a Guerra Civil Espanhola começou?', resposta: '1936' },
    {  pergunta: 'Em que ano Nelson Mandela foi libertado da prisão?', resposta: '1990' },
    {  pergunta: 'Em que ano a Alemanha foi reunificada após a Guerra Fria?', resposta: '1990' },
    {  pergunta: 'Em que ano ocorreu o acidente nuclear de Chernobyl?', resposta: '1986' },
    {  pergunta: 'Em que ano o homem pisou na Lua pela primeira vez?', resposta: '1969' }
];



const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

let contador = 1;
const maxQuestoes = 10; 
let corretas = 0;

while (contador <= maxQuestoes) {
    
    const indiceAleatorio = random(0, questoes.length);
    const questao = questoes[indiceAleatorio];


    console.log(`${contador} - ${questao.pergunta}`);
    const respostajogador = input.question('Sua resposta: ');


    if (respostajogador === questao.resposta) {
        console.log("Correto");
        corretas++;
    } else {
        console.log("Incorreto");
    }
    

    contador++;

}

    if (corretas === 10) {
        console.log("Excelente");
    } else if (corretas > 5) {
        console.log("Muito bom");
    } else
        console.log("Pode Melhorar");
    
    


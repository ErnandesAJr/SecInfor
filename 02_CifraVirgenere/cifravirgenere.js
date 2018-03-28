// var chave = prompt("Digite a chave:").toUpperCase();

// var mensagem = prompt("Digite uma mensagem:").toUpperCase();

//var chave = "alunoufc".toUpperCase();
var chave = "";



var mensagem = "mllvo gjw axie, viog vlgbg dfptll n zoe fe gyyom j xof nr tuegr fg tfusfe ayqwxt rrpjnfy xg, mlm nbnju, tphuc kzg fltrf i ytamuyvi ig pzi qs or rrzzrgmtt spg acwfq, ux nnz xj eiqln ry akgphrfy".toUpperCase();
var mensagem_criptografar = mensagem;
var mensagem_descriptografar = "";
var novaChave = "";


var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Fazer os paranaues
var resultadotest = "";

var fs = require("fs");


function testar(){
    var possiveisTextos = "";
    fs.readFile('./wordlist4char.txt', 'utf-8', function(err, data){
        var linhas = data.split(/\r?\n/);
        //console.log(linhas.length)
    
        for(let i = 0; i < linhas.length; i++ ){
              // console.log(linhas[i]); // aqui podes fazer o que precisas com cada linha
            //   if(linhas[i] <= 8){
                alocarChave(linhas[i]);
                concertarChave();
                descriptografar();
                if(mensagem_descriptografar.toUpperCase().indexOf(" AMOR ") > -1 || mensagem_descriptografar.toUpperCase().indexOf(" AMOR, ") > -1 || mensagem_descriptografar.toUpperCase().indexOf(" ,AMOR ") > -1){
                    possiveisTextos += linhas[i] + " - "+ mensagem_descriptografar + "\n" + "\n";
                    //rodando a primeira vez descobre quais os 4 primeiros da chave.. analisando o texto.txt gerado
                    //apos isso testar mais uma vez agora com "alun"+linhas[i]
                    console.log(i);
                }
              //}            
        }
    
        
        fs.writeFileSync("./texto.txt", possiveisTextos);
        // linhas.forEach(function(linha){
        
        // })
    })
}

//fs.writeFileSync("./texto.txt", "Olá mundo!");
//console.log("Ficheiro salvo");

function alocarChave(tentativaChave){
    chave = tentativaChave.toUpperCase();
}

function descriptografar(){
    mensagem_descriptografar = "";
//  console.log(mensagem_criptografar);
//    console.log(novaChave);
    for(i = 0; i < mensagem.length; i++){
        if(mensagem_criptografar[i] !== " " && mensagem_criptografar[i] !== ","){
            mensagem_descriptografar += alfabeto[((alfabeto.indexOf(mensagem_criptografar[i]) - alfabeto.indexOf(novaChave[i])) + 26) % 26];
        }if(mensagem_criptografar[i] === " "){
            mensagem_descriptografar += " ";
        }if(mensagem_criptografar[i] === ","){
            mensagem_descriptografar += ",";
        }
    } 
    //fs.writeFileSync("./texto.txt", mensagem_descriptografar);
    // console.log(mensagem_descriptografar);
}

function concertarChave(){
novaChave = "";
var i = true;
var j = 0;
var q = 0;

while( i == true ){
    if(novaChave.length < mensagem.length){    
        if(mensagem[j] === " " ){
            //console.log("entrou aqui");
            novaChave += " ";
            j++;
        }if(mensagem[j] === ","){
            novaChave += ",";
            j++;
        }else{
            novaChave += chave[(q)%chave.length];   
            j++;
            q++;
        }   
    }else{
        i = false;
    }
}
}

//concertarChave();
//criptografar();
//descriptografar();
testar();
// console.log(mensagem_criptografar.length);
// console.log(novaChave.length);

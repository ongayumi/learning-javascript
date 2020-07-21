
function clicou(){
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar!";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar! O vírus já está sendo instalado.\n Brincadeiraa! :)");
}

function redirecionar(){
    //abre em nova aba:

    //window.open("https://github.com/ongayumi/learning-javascript");
    
    //abre na mesma página:
    window.location.href="https://github.com/ongayumi/learning-javascript" 
}

function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse!";
    //alert("Trocar texto!");
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui!";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,10));
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    } else {
        validar=false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase,nome,novonome){
    return frase.replace(nome,novonome)
}
alert(setReplace("Vai Japão! ","Japão","Brasil"));
*/


/*
var d=new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
*/

/*
var count;
for (count=0;count<=5;count++){
    alert(count);
}
*/

/*
var count = 0;
while(count<=5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade? ")
//var idade = 18;
if(idade>= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade")
};
*/

/*
var frutas = [{nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã",cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor); 
*/

//var lista=["maçã", "pêra","laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome="Evelyn Ayumi Onga";
//var idade = 25;
//var idade2 = 10;
//var frase="Japão é o melhor time do mundo.";
//alert( nome + " tem "+ idade + " anos.");
//alert(idade+idade2)
//console.log(nome);
//console.log(idade +idade2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));

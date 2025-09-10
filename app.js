let amigos = [];

// Comentario somente para testar commit. 
// testando mais um pouco.

function repeticaoAmigos(x){

    for (let i=0; i<amigos.length;i++){
        if (x==amigos[i]){
            return 1;
         }
    }
}


function AddAmigos(b){
    
    let html = "";

    let a = repeticaoAmigos(b);
    if(a==1){
        alert ('Não pode nome repetidos');
        return 0;
    }else{
        amigos.push(b);
        for (let i=0; i<amigos.length;i++){
            html+="<li>" + amigos[i] + "</li>";
        }
    document.querySelector("#listaAmigos").innerHTML= html;

    }


}

function adicionarAmigo(){

    document.querySelector("#resultado").innerHTML= " ";
    let amigo=document.querySelector('input').value;
    if(amigo == ''){
        alert ("Por favor, insira um nome.");
    }else{
     AddAmigos(amigo);
     //Value e utilizado por que se trata de um prompt. 
     document.querySelector("#amigo").value="";
     
}

}

function sortearAmigo(){
    let B = amigos.length;
    let a = parseInt(Math.random()*B);

    if(B==0){
        alert ('Sem amigos encontrados.Recoloque os amigos caso tenha sorteado recentemente');
        return 0;
    }else{
        console.log(a)
        console.log(B)
        console.log(amigos[a]);

        document.querySelector("#listaAmigos").innerHTML= "";
        document.querySelector("#amigo").value= "";
        document.querySelector("#resultado").innerHTML= amigos[a];
        amigos=[];


    }
  
}

    

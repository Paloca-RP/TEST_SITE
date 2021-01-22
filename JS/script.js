/*#################_Trocar_Imagem_############################*/
/*( onMouseOver="mouseEmCimaN(this)" onMouseOut="mouseForaN(this)" )  
Para ao passar mudar a imagem o "N" é o numero da função */
//Bioshock
function mouseEmCima(imagem) {
    imagem.src="../../images/Trocar_IMG/BioShock.jpg";
}
 function mouseFora(imagem) {  
    imagem.src="../../images/imagens_principais/BioShock.jpg"; 
}
//
function mouseEmCima1(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora1(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima2(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora2(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima3(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora3(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima4(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora4(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima5(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora5(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima6(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora6(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima7(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora7(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
//
function mouseEmCima8(imagem) {
    imagem.src="../../images/Trocar_IMG/";
}
 function mouseFora8(imagem) {  
    imagem.src="../../images/imagens_principais/"; 
}
/*#################_BOTAO_DE_SUBMETER_COMENTARIOS_############################*/

var lista=["mouse", "Disco Rigido", "monitor"]

function adicionarProducto (){
    var produto = document.getElementById("comments").value
        if(produto.length !== 0) {
            lista.push(produto);
            document.getElementById("comments").value = " ";
            alert("comments add");
        }else{
        alert("Insira um Produto");}
}

function mostrarLista (){
    for(let i = 0; i < lista.length;i++)
    {
        let newParagraph = document.createElement("p")  
        let newParagraph2 = document.createElement("hr")
        let textNode = document.createTextNode(lista[i])
        newParagraph.appendChild(textNode)        
        newParagraph2.appendChild(textNode)
        let element = document.getElementById("lista-comments")
        element.appendChild(newParagraph)
        element.appendChild(newParagraph2)
    }
}
function mostrarultimo (event){
    let newParagraph = document.createElement("p")
    let newParagraph2 = document.createElement("hr")
        let textNode = document.createTextNode(lista[lista.length - 1])
        newParagraph.appendChild(textNode)
        newParagraph2.appendChild(textNode)
        let element = document.getElementById("lista-comments")
        element.appendChild(newParagraph)
        element.appendChild(newParagraph2)
        event.preventDefault()
}
/*#################_registar_################## */
function registar (event){
    var produto = document.getElementById("comments").value
    if(produto.length !== 0){
        lista.push(produto)
        document.getElementById("comments").value=""
        alert("comments add");
        
        event.preventDefault()
    }
    else
        alert("Insira um Produto")
}
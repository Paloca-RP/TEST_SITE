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
/*#################__############################*/

function valida_form (){
    if(document.getElementById("nome").value == "")
    {
        alert('Por favor, preencha os campos')
        document.getElementById("nome").focus()
        return false;
    }
}
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

function valida_form (){
    if(document.getElementById("comentario").value == "")
    {
        alert('Por favor, preencha o campo')
        document.getElementById("comentario").focus()
        return false;
    }
    else
    {
        for(let i = 0; i < lista.length;i++)
        {
let newParagraph = document.createElement("div")
        newParagraph.classList.add("corpo")
        
        let newParagraph2 = document.createElement("div")
         newParagraph2.classList.add("barra-lateral4")
        
         let newParagraph3 = document.createElement("div")
            newParagraph3.classList.add("espacamento3")
        
            let newParagraph4 = document.createElement("p")
            let textNode = document.createTextNode(lista[i])
            newParagraph4.appendChild(textNode)
            let element = document.getElementById("lista-comments")
            element.appendChild(newParagraph4)


        
        }
        
    }

}
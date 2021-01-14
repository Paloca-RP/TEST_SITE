function submitComment (){
    var nome = document.getElementbyID("Name1").value
    var comment = document.getElementById("Comment1").value
    
    if(nome == "" || comment == ""){
        alert("campos vazios");
    }
}
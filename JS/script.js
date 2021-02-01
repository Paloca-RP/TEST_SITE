function calIMC(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    let imc = (peso /( altura*altura));
    document.getElementById("resultado").innerHTML = imc;
}
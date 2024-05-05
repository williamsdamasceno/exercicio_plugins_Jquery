$(document).ready(function(){
    $('#form').submit(function(e){
        e.preventDefault();

        var valorCampoA = parseInt($('#valorCampoA').val());
        var valorCampoB = parseInt($('#valorCampoB').val());

        if (valorCampoB > valorCampoA) {
            mensagemElemento.textContent = "Formulário válido! Número B é maior que o número A.";
            mensagemElemento.style.color = "green";
        } else {
            mensagemElemento.textContent = "Número B deve ser maior que o número A. Formulário inválido.";
            mensagemElemento.style.color = "red";
        }
    });                 
    });
document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const valorCampoA = parseFloat(document.getElementById("campoA").value);
    const valorCampoB = parseFloat(document.getElementById("campoB").value);
    const mensagemElemento = document.getElementById("mensagem");
    
    if (valorCampoB > valorCampoA) {
        mensagemElemento.textContent = "Formulário válido! Número B é maior que o número A.";
        mensagemElemento.style.color = "green";
    } else {
        mensagemElemento.textContent = "Número B deve ser maior que o número A. Formulário inválido.";
        mensagemElemento.style.color = "red";
    }

    $(document).ready(function(){
        $('#CEP').mask('00000-000',{
            placeholder:'99999-999'
        })
            $('#telefone').mask('(00) 00000-0000',{
                placeholder:'(99) 99999-9999'
            })
            $('#CPF').mask('000.000.000-00',{
            placeholder:'999.999.999-99'
        })
            $('#form').validate({
                rules: {
                    Nome: {
                    required:true,
                },
                    email: {
                        required: true,
                        email: true 
                    },
                    telefone: {
                        required: true,
                    },
                    cpf: {
                        required: true,
                    },
                    endereco: {
                        required: true,
                    },
                    cep: {
                        required: true,
                    },
                  
                
                    }
                })

            })
        })






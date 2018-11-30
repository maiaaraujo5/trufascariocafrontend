/*Funções Java Script para o formulário - com Jquery*/

/*
 * A função LOAD abaixo pode também ser escrita das seguintes formas:
 * 
 * jquery(document).ready(function(){
 *      //faça alguma coisa
 * });
 * ou
 * 
 * $(document).ready(function(){
 *      //faça alguma coisa
 * });
 *
 *  OBS: caracter $ é utilizado como um modo bem curto de dizer jquery.
 *  Ou seja, $("p") é o mesmo que jquery("p").
 *   
 */

/*Comandos que serão executados com a página for carregada*/
$(function() {
  	
	
    /* Ação do botão cancelar */
    $(".btvoltar").click(function(){window.location.href='../indexJQ.html';});
	
	 /*Limpar campos de um form quando o usuário clicar no botão Limpar */    
    $(".btlimpar").click(function(){
    	$('form').each (function(){
    		  this.reset();
    	});
    });
    
    /*Regras de validação dos campos do form CLIENTE - biblioteca JQUERY VALIDATION*/
    $("#formcliente").validate({ //usa o name dos campos do form
        rules: {
            //email:{required: true, email:true},
            nome:{required: true, minlength: 4},
            senha:{required:true, minlength: 6},
            confirmasenha:{required:true, minlength: 6, equalTo:"#senha"},
            rbsexo:{required:true},
            cpf:{required: true},
            dtnasc:{required: true, dateBR:true},
            telefone:{required: true},            
            celular:{required: false},                        
            cbocategoria:{required: true},
            cep:{required:true},
            endereco:{required:true},
            numero:{required:true},
            complemento:{required:false},
            bairro:{required:true},
            cidade:{required:true},
            cboestado:{required:true},
            inforef:{required:true}            
        },
    
        messages: {
        	//email:{required: "Informe o email", email:"Email inválido"},
        	nome:{required: "Informe o nome", 
                minlength:"Informe ao menos 4 caracteres"},            
            senha:{required: "Informe uma senha", 
                    minlength:"Informe uma senha com ao menos 6 dígitos"},
            confirmasenha:{required: "Informe a confirmação da senha", 
                        minlength:"Informe uma confirmação de senha com ao menos 6 dígitos",
                        equalTo:"As senhas informadas não conferem."},
            rbsexo:{required: "Informe o sexo"},
            cpf:{required: "Informe o número do CPF"},
            dtnasc:{required: "Informe a data de nascimento", dateBR:"Informe uma data de nascimento válida "},
            telefone:{required: "Informe o telefone"},            
            cbocategoria:{required: "Informe o tipo de endereço"},
            cep:{required: "Informe o CEP"},                        
            endereco:{required: "Informe o logradouro"},
            numero:{required: "Informe o número"},
            bairro:{required: "Informe o número"},
            cidade:{required: "Informe a cidade"},
            cboestado:{required: "Informe a UF"},
            inforef:{required:"Informe dados de referência do endereço"}            
        },
    
        //Monta a mensagem em uma caixa separada
        errorLabelContainer: $("#mensagens"),
        errorElement: "li"
    });
 
    /*Regras de validação dos campos do form PRODUTO - biblioteca JQUERY VALIDATION*/
    $("#formproduto").validate({
        rules: {            
        	descrproduto:{required: true, minlength: 6},
        	cbocategoria:{required: true},
        	marca:{required: true},
        	cbotamanhoroupa:{required: true},
        	tamanhonum:{required: true},
        	tamanhocalcado:{required: true},        	
        	valorproduto:{required: true},
        	percdesconto:{required: false},
        	pagtoparcelado:{required: true},
        	proddestaque:{required: false},
        	dataproduto:{required: true, dateBR:true},
        	qtdestoque:{required: true}                        
        },
    
        messages: {        	
        	descrproduto:{required: "Informe a descrição do produto",
        				  minlength:"Informe uma descrição com ao menos 6 caracteres" },
        	cbocategoria:{required: "Informe a categoria do produto"},
        	marca:{required: "Informe a marca do produto"},
        	cbotamanhoroupa:{required: "Informe o tamanho da roupa"},
        	tamanhonum:{required: "Informe o tamanho da roupa"},
        	tamanhocalcado:{required: "Informe o tamanho do sapato"},
        	valorproduto:{required: "Informe o valor do produto"},        	
        	pagtoparcelado:{required: "Informe se o pagamento será parcelado"},
        	dataproduto:{required: "Informe a data de início de comercialização do produto",
        				dateBR:"Informe uma data válida"},
        	qtdestoque:{required: "Informe a quantidade em estoque"}        	
        },
    
        //Monta a mensagem em uma caixa separada
        errorLabelContainer: $("#mensagens"),
        errorElement: "li"
    });
   
    
}); //FUNÇÃO LOAD

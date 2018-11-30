/*
 * Arquivo Java Script (Sem uso de JQUERY) * 
 * 
 */
/* FUNÇÃO: validarCamposObrigCliente 
 * OBJETIVO: verificar se todos os campos obrigatórios do formcliente foram informados pelo usuário*/
function validarCliente(form){
    
	/*Validar campos obrigatórios*/
	
    if (form.email.value === ""){
        alert("Informe o e-mail.");
        form.email.focus();
    }else if (form.senha.value === ""){
        alert("Informe a senha.");
        form.senha.focus();
    }else if (form.confirmasenha.value === ""){
        alert("Confirme a senha informada.");
        form.confirmasenha.focus();
    }else if (form.nome.value === ""){
        alert("Informe o nome completo.");
        form.nome.focus();
    }else if (!form.rbsexo[0].checked && !form.rbsexo[1].checked){
        alert("Informe o sexo.");        
        return false;
    }else if (form.cpf.value === ""){
        alert("Informe o número do CPF.");
        form.cpf.focus();
    }else if (form.dtnasc.value === ""){
        alert("Informe a data de nascimento.");
        form.dtnasc.focus();
    }else if (form.telefone.value === ""){
        alert("Informe o número telefone.");
        form.telefone.focus();
    }else if (form.cbocategoria.selectedIndex === 0){
        alert("Informe o tipo de endereço.");
        form.cbocategoria.focus();
    }else if (form.cep.value === ""){
    	alert("Informe o número do CEP.");
    	form.cep.focus();
    }else if (form.endereco.value === ""){
    	alert("Informe o endereço.");
    	form.endereco.focus();
    }else if (form.numero.value === ""){
    	alert("Informe o número.");
    	form.numero.focus();
    }else if (form.bairro.value === ""){    	
    	alert("Informe o bairro.");    	
    	form.bairro.focus();
    }else if (form.cidade.value === ""){
		alert("Informe a cidade.");
		form.cidade.focus();
    }else if (form.cboestado.selectedIndex === 0){
    	form.cboestado.focus();
    	alert("Informe o estado.");    	
    }else if (form.inforef.value === ""){    	
		alert("Informe as referências do endereço.");
		form.inforef.focus();
    }else if(form.senha.value !== form.confirmasenha.value){
    	form.senha.value = "";
    	form.confirmasenha.value = "";
    	alert("As senhas informadas não conferem.");
    }
    
    return false;
}


/* FUNÇÃO: validarCamposObrigProduto 
 * OBJETIVO: verificar se todos os campos obrigatórios do formproduto foram informados pelo usuário*/
function validarProduto(form){
    
    /* if(document.getElementById("idnome").value === ""){
        alert("Informe o nome");
    }
    
    OU COMO ABAIXO
     */
	    
    if (form.descrproduto.value === ""){
        alert("Informe a descrição do produto.");
        form.descrproduto.focus();
    }else if (form.cbocategoria.selectedIndex === 0){
        alert("Informe a categoria do produto de produto.");
        form.cbocategoria.focus();
    }else if (form.marca.value === ""){
        alert("Informe a marca do produto.");
	}else if ((form.cbotamanhoroupa.selectedIndex === 0) && 
			  (form.tamanhonum.value === "") &&
    	      (form.tamanhosapato.value === "") ){		
        	alert("Informe o tamanho do produto.");
    }else if (form.valorproduto.value === ""){
            alert("Informe o valor do produto.");
            form.valorproduto.focus();
    }else if (form.percdesconto.value === ""){
            alert("Informe o percentual de desconto.");
            form.percdesconto.focus();
    }else if (!form.pagtoparcelado[0].checked && !form.pagtoparcelado[1].checked){    	 
        alert("Informe se admite pagamento parcelado.");
    }else if (!form.proddestaque[0].checked && !form.proddestaque[1].checked){
            alert("Informe se o produto deverá ser exibido na seção de destaques.");
    }else if (form.dataproduto.value === ""){
        alert("Informe de início da comercialização deste produto na loja.");
        form.dataproduto.focus();
    }else if (form.qtdestoque.value === ""){
        alert("Informe a quantidade em estoque.");
        form.qtdestoque.focus();
    }
   
    return false;
}

function avaliarCategoriaProduto(categoria){
	
	cbotamanhoroupa = document.getElementById("cbotamanhoroupa");
	tamanhonum = document.getElementById("tamanhonum");
	tamanhosapato = document.getElementById("tamanhosapato");
	
	if((categoria.value === "1" || categoria.value === "5")){ //Camisa ou Saia
		cbotamanhoroupa.style.display = "block";
		tamanhonum.style.display = "none";
		tamanhosapato.style.display = "none"; 
	}
	else if((categoria.value === "2")||(categoria.value === "3")||(categoria.value === "4")){ //Calça, Short, Bermuda
		cbotamanhoroupa.style.display = "none";
		tamanhonum.style.display = "block";
		tamanhosapato.style.display = "none";
	}	
	else if(categoria.value === "6"){ //Sapato
		cbotamanhoroupa.style.display = "none";
		tamanhonum.style.display = "none";
		tamanhosapato.style.display = "block";
	}
		
}


/* Validar o campo CEP, conforme a expressão regular definida */ 
function validarCep(cep){
        exp = /\d{2}\.\d{3}\-\d{3}/;
        if(!exp.test(cep.value)){
				cep.value = "";
                alert('Numero de Cep Inválido');               
		}
}

/* Validar o campo CPF, conforme a expressão regular definida */ 
function validarCpf(cpf){
        exp = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;
        if(!exp.test(cpf.value)){
				cpf.value = "";
                alert('Numero do CPF Inválido');               
		}
}

/*Validar o campo telefone, usando a expressão regular definida */
function validarTelefone(tel){
        exp = /\(\d{2}\)\ \d{4,5}\-\d{4}/;
        /* o método exec retorna o valor pesquisado
         * o test retorna true ou false*/
        if(!exp.test(tel.value)){
                tel.value = "";
                alert('Numero de Telefone Inválido!');
        }
}


/* Validar o campo data, conforme a expressão regular definida */ 
function validarData(data){
        //alert('Data Invalida!'); 
        exp = /\d{2}\/\d{2}\/\d{4}/;
        /*     \/ – Uma barra literal  */
        if(exp.test(data.value)){
            var dia = data.value.substring(0,2);
            var mes = data.value.substring(3,5);
            var ano = data.value.substring(6,10);
            
            if((dia < 1) || (dia > 31)){
                alert('Data Invalida!');
            }else if((mes < 1) || (mes>12)){
                alert('Data Invalida!');
            }else if(ano<=1900){
                alert('Data Inválida!');
            }                  
        }
        else{
            data.value ="";
            alert('Data Invalida!');
        }       
}

/* Validar o campo e-mail, conforme a expressão regular definida */ 
function validarEmail(email){

    /*A expressão regular abaixo veio da especificação do HTML5*/
    var filtro = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    /*
     * Explicação da expressão regular
     * 
     * 
     * outras expressões: 
     * [_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$
     * ^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$
     *
     * (+) Casa o elemento precedente uma ou mais vezes. Por exemplo, ba+ casa
     *  "ba", "baa", "baaa", e assim por diante.
     * (\) Escape - anula o significado especial do metacaractere seguinte;
     * por exemplo, \. representa apenas um ponto.
     * (^) Casa o começo da cadeia de caracteres. Numa situação de múltiplas
     * linhas, casa o começo das linhas.
     * Logo percebe-se que as âncoras não casam pedaços do texto, elas servem 
     * apenas como uma referência.
     * ($) Casa o fim da cadeia de caracteres ou a posição logo antes da quebra
     * de linha do fim da cadeia.
     * Numa situação de múltiplas linhas, casa o fim das linhas.
     * (*) Coincidência dos caracteres precedidos ZERO ou mais vezes.  
     *   */
    
    if(filtro.test(email.value)) {
        return true;
    } else {
        email.value = "";
        return alert("E-mail inválido");
    }
    
}

/* Verificar se um campo só contém dígitos numéricos */
function validarDigNum(valor) {    
	
	if (!isNaN(valor.value)){
		return true;
	}else{
		valor.value = "";
        return alert("Este campo admite apenas números");
	}

}

/* Validar o tamanho do campo senha*/
function validarTamSenha(senha){
	if (senha.value.length >= 6){
		return true;
	}else{		
        return alert("Informe uma senha com ao menos 6 dígitos");
	}
}

/*Validar o tamanho do campo nome*/
function validarTamNome(nome){
	if (nome.value.length >= 4){
		return true;
	}else{		
        return alert("Informe ao menos 4 caracteres");
	}
}

function validarTamDescricao(descricao){
	if (descricao.value.length >= 6){
		return true;
	}else{		
        return alert("Informe uma descrição com ao menos 6 caracteres");
	}
}

/* MÁSCARAS DE CAMPO */

/* Máscara de CPF */ 
function mascaraCpf(cpf){  
        if(mascaraInteiro(cpf)===false){
                event.returnValue = false;
        }       
        return formataCampo(cpf, '000.000.000-00', event);
}

/* Máscara de Telefone */ 
function mascaraTelefone(tel){  
        if(mascaraInteiro(tel)===false){
                event.returnValue = false;
        }       
        return formataCampo(tel, '(00) 0000-0000', event);
}

/* Máscara de Celular */ 
function mascaraCelular(cel){  
        if(mascaraInteiro(cel)===false){
                event.returnValue = false;
        }       
        return formataCampo(cel, '(00) 00000-0000', event);
}

/* Máscara de Data */
function mascaraData(data){ 
        if(mascaraInteiro(data)===false){
                event.returnValue = false;
        }       
        return formataCampo(data, '00/00/0000', event);
}

/* Máscara de CEP */ 
function mascaraCep(cep){  
        if(mascaraInteiro(cep)===false){
                event.returnValue = false;
        }       
        return formataCampo(cep, '00.000-000', event);
}

/*Máscara de Moeda - complicado demais - melhor usar JQuery MaskMoney*/
/*Não estudar - existem soluções melhores*/
function MascaraMoeda(valor, SeparadorMilesimo, SeparadorDecimal, e){
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    if ((whichCode == 13) || (whichCode == 0) || (whichCode == 8)) return true;
    key = String.fromCharCode(whichCode); // Valor para o código da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inválida
    len = valor.value.length;
    for(i = 0; i < len; i++)
        if ((valor.value.charAt(i) != '0') && (valor.value.charAt(i) != SeparadorDecimal)) break;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(valor.value.charAt(i))!=-1) aux += valor.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) valor.value = '';
    if (len == 1) valor.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) valor.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        valor.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        valor.value += aux2.charAt(i);
        valor.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}



/* Validar se um campo é numérico */
function mascaraInteiro(){
        //veja a tabela de códigos ASCII
        if (event.keyCode < 48 || event.keyCode > 57){ 
                event.returnValue = false;
                return false;
        }
        return true;
}

/* Formatar a máscara de um campo para ser exibido a cada 
 * tecla pressionada */
function formataCampo(campo, mascara, evento) { 
        var booleanoMascara; 

        var digitado = evento.keyCode;
        exp = /\:|\-|\.|\/|\(|\)| /g; //Verifica toda a string (global). 
        // OBS: No espaço antes da / final - usado na máscara de telefone
        
        /* pegar a expressão e removar os caracteres / ( : , etc ... 
         * de modo que fique só número */
        campoSoNumeros = campo.value.toString().replace(exp,""); 
         
        var posicaoCampo = 0; //indice para percorrer o campoSoNumeros
        var novoValorCampo="";
        var tamanhoMascara = campoSoNumeros.length;; 

        if (digitado !== 8) { // 8 é o ASCII do backspace 
                for(i=0; i<= tamanhoMascara; i++) { // pecorre a máscara
                        booleanoMascara  = ((mascara.charAt(i) === "-") ||
                                            (mascara.charAt(i) === ".") ||
                                            (mascara.charAt(i) === "/") ||
                                            (mascara.charAt(i) === "(") ||
                                            (mascara.charAt(i) === ")") ||
                                            (mascara.charAt(i) === " ") ||
                                            (mascara.charAt(i) === "%") ||
                                            (mascara.charAt(i) === ":")); 
                        
                        /* Se o caracter avaliado na máscara é um dos listados
                         * acima*/
                        if (booleanoMascara) { 
                                novoValorCampo += mascara.charAt(i); 
                                /* o incremento a seguir aumenta o tamanho da 
                                 * máscara, pois agora incluiu-se um dos 
                                 * caracteres listados acima*/
                                tamanhoMascara++; 
                        }else { /* Se o caracter avaliado na máscara
                             *  for um número (neste caso o 0) */
                           novoValorCampo +=campoSoNumeros.charAt(posicaoCampo); 
                           posicaoCampo++; 
                        }              
                  }
                  campo.value = novoValorCampo; //colocar o novo valor no campo
                  return true; 
        }else { 
                return true; 
        }
}


/* Limpar os campos dentro de uma área/div */ /* Aula - 5 */
function limparCampos(area){
    
   /*pegar todos os elementos (neste caso campos) dentro de uma área informada*/
    var elementos = document.getElementById(area).querySelectorAll('*');
    for(var i = 0; i<elementos.length;i++){  
        switch (elementos[i].type) {
               case "text":
               case "textarea":
               case "password":               	   
                    elementos[i].value="";
                    break;
               case "file":	   
                   elementos[i].value="";                   
               case "select-one":
                    elementos[i].selectedIndex = 0;
                    break;
               case "radio":
               case "checkbox":
                    elementos[i].checked = false;
               break;
        }
    }   
}

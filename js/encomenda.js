function registerEncomenda(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;
    var cep = document.getElementById('cep').value;
    var qtd = document.getElementById('qtd').value;
    var sabor = document.getElementById('sabor').value;
    var data = document.getElementById('data').value;
    var obs = document.getElementById('obs').value;

    fetch('http://localhost:8081/encomenda', {
        method: 'POST',
        mode: 'CORS',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome": nome,
            "email": email,
            "celular": celular,
            "endereco":{
                "endereco": endereco,
                "cep": cep
            },
            "quantidadeTrufas":qtd,
            "sabores":sabor,
            "dataEntrega": data,
            "embaladas": true,
            "observacoes":obs
        })
    }).then(()=> {
        swal({
            title: "Encomenda Realizada com Sucesso",
            text: "Sua encomenda foi realizada, em alguns instantes, estaramos entregando",
            icon: "success",
            button: "ok!",
        })
    })


}

$(document).ready(function(){
    
        $('#enviarform').click(registerEncomenda)
    });
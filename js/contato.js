function registerContato(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var obs = document.getElementById('obs').value;


    fetch('http://localhost:8081/contato', {
        method: 'POST',
        mode: 'CORS',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        "nome": nome,
        "email": email,
        "mensagem": obs
        })
    }).then(()=> {
        swal({
            title: "Contato Enviado",
            text: "Logo entraremos em contato, obrigado pela preferencia",
            icon: "success",
            button: "ok!",
        })
    })
}


$(document).ready(function(){
    
        $('#msgcontato').click(registerContato)
    });
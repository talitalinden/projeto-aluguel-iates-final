function insereMensagem(parametro) {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem").value


    var objeto = {}
    objeto = {'nome': nome, 'email': email, 'mensagem': mensagem}


    console.log('objeto', objeto);

    inserirMensagem(objeto)
}

function logar() {
    var emailLogin = document.getElementById("email").value
    var senhaLogin = document.getElementById("senha").value

    var objetoLogin = {'email': emailLogin, 'senha': senhaLogin}

    var resultadoLogin = validarUsuario(objetoLogin);

    if (resultadoLogin) {
        window.open("Mensagem.html")
    }
}

function listar() {
    var mensagens = obterMensagens();

    console.log(mensagens);

    var thead = "<thead>"+
        "<th>Nome</th>"+
        "<th>Email</th>"+
        "<th>Mensagem</th>"+
    "</thead>" 

    var tbody = '<tbody>';
    mensagens.forEach(function (loop) {
        tbody += "<tr>"+
        "<td>"+loop.nome+"</td>" +
        "<td>"+ loop.email+"</td>" +
        "<td>"+loop.mensagem+"</td>" +
        "</tr>";
    })

    tbody += '</tbody>'

    document.getElementById("tabela").innerHTML = thead + tbody


}
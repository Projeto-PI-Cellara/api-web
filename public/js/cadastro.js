
// Array para armazenar empresas cadastradas para validação de código de ativação 
let listaEmpresasCadastradas = [];

function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var cpfVar = ipt_cpf.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmacaoSenhaVar = ipt_confirmacao_senha.value;
    var codigoVar = ipt_codigo_ativacao.value;
    // var idEmpresaVincular

    // Verificando se há algum campo em branco
    if (
        nomeVar == "" ||
        cpfVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "" ||
        codigoVar == ""
    ) {
        alert
            ("Mensagem de erro para todos os campos em branco");

        return false;
    } 

    // Verificando se o código de ativação é de alguma empresa cadastrada
    // for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
    //   if (listaEmpresasCadastradas[i].codigo_ativacao == codigoVar) {
    //     idEmpresaVincular = listaEmpresasCadastradas[i].id
    //     console.log("Código de ativação válido.");
    //     break;
    //   } else {
    //     cardErro.style.display = "block";
    //     mensagem_erro.innerHTML = "(Mensagem de erro para código inválido)";
    //     finalizarAguardar();
    //   }
    // }


    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            cpfServer: cpfVar,
            emailServer: emailVar,
             senhaServer: senhaVar/*,
             idEmpresaVincularServer: idEmpresaVincular*/
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                
                alert(
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        
        });

    return false;
}

// Listando empresas cadastradas 
// function listar() {
//     fetch("/empresas/listar", {
//         method: "GET",
//     })
//         .then(function (resposta) {
//             resposta.json().then((empresas) => {
//                 empresas.forEach((empresa) => {
//                     listaEmpresasCadastradas.push(empresa);

//                     console.log("listaEmpresasCadastradas")
//                     console.log(listaEmpresasCadastradas[0].codigo_ativacao)
//                 });
//             });
//         })
//         .catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//         });
// }



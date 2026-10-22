function cadastrar() {
    let nome = ipt_nome.value;
    let cpf = ipt_cpf.value;
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let confirmacaoSenha = ipt_confirmacao_senha.value;
    let codigo_ativacao = ipt_codigo_ativacao.value;

    let erro = false;

    if (nome == "") {
        alert("O nome está vazio");
        erro = true;
    } else if (cpf == "") {
        alert("O CPF está vazio");
        erro = true;
    } else if (email == "") {
        alert("O e-mail está vazio");
        erro = true;
    } else if (senha == "") {
        alert("A senha está vazia");
        erro = true;
    } else if (codigo_ativacao == "") {
        alert("O código de ativação está vazio");
        erro = true;
    }

    if (!email.includes("@")) {
        alert("E-mail inválido! O e-mail deve conter pelo menos um '@'.");
        erro = true;
    }

    if (senha != confirmacaoSenha) {
        alert("As senhas inseridas não condizem.");
        erro = true;
    }

    if (cpf.length != 11) {
        alert("Insira um CPF válido com apenas 11 números");
        erro = true;
    }

    if (senha.length <= 7) {
        alert("A senha precisa ser maior que 7 caracteres");
        erro = true;
    }

    if (!erro) {
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html";
    }
}
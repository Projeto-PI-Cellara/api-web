function login() {
    let emailLogin = ipt_email_login.value;
    let senhaLogin = ipt_senha_login.value;

    let erro = false;

    if (emailLogin == "" || !emailLogin.includes("@")) {
        alert("E-mail inválido! O e-mail deve conter pelo menos um '@'.");
        erro = true;
    } else if (senhaLogin == "") {
        alert("A senha está vazia");
        erro = true;
    }

    if (!erro) {
        let emailMock = "fernanda@sptech.school";
        let senhaMock = "123456789";

        if (emailLogin == emailMock && senhaLogin == senhaMock) {
            alert("Login realizado com sucesso!");
            window.location.href = "dashboard.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    }
}
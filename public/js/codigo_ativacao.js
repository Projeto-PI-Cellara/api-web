const duracao = 600000

function gerarCodigoAtivacao() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let valor = ""

    for (let i = 0; i < 16; i++) {
        valor += caracteres[(Math.random() * 35).toFixed()]
    }

    exibir.innerHTML = `${valor}`

    const idEmpresa = sessionStorage.ID_EMPRESA
    const idPessoa = sessionStorage.ID_PESSOA
    // const isAdmin = sessionStorage.IS_ADMIN
    let id

    fetch("/codigosAtivacao/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            valor: valor,
            duracao: duracao,
            fkEmpresa: idEmpresa,
            fkCriador: idPessoa
        }),
    })
    .then(function (resposta) {
        return resposta.json()
    })
    .then( function (resposta) {
        console.log("Esse é o id:")
        id = resposta.id
        console.log(id)
        setTimeout(()=>{
            fetch(`/codigosAtivacao/expirar/${id}`, {
                method: "DELETE"
            })
        }, duracao)
        console.log("código expirado")
    }
    )


}
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio padrão

    // Pega os valores do formulário
    const nome = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    const ocupacao = document.getElementById("ocupacao").value;
    const novidades = document.getElementById("novidades").checked ? "Sim" : "Não";

    // Salva no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("ocupacao", ocupacao);
    localStorage.setItem("novidades", novidades);

    // Redireciona para a página de resultado
    window.location.href = "resultado.html";
});

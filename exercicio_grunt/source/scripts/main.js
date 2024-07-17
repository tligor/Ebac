let botao = document.getElementById("enviar");

botao.addEventListener('click', function(e){
    e.preventDefault();  // Evita o comportamento padrão do botão (submit do formulário)

    let usuario = document.getElementById("username").value;
    let senha = document.getElementById("password").value;

    if (usuario === 'admin' && senha === 'admin') {
        alert("Login efetuado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

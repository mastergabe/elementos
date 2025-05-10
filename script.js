function mostrarNome(nome) {
    const info = document.getElementById('info' + (nome === 'Gabriel' ? '1' : nome === 'Amigo 1' ? '2' : '3'));
    info.innerHTML = "Eu sou o " + nome + "!";
}

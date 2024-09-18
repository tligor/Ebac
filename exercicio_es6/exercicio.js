const alunos = [{
    nome: 'João',
    nota: 7.5
}, {
    nome: 'Maria',
    nota: 5.8
}, {
    nome: 'Pedro',
    nota: 8.2
}, {
    nome: 'José',
    nota: 6.9
}]

function verificaAluno(nome, nota){
    if(nota >= 6){
        console.log(`${nome} foi aprovado com ${nota} pontos`)
    }else{
        console.log(`${nome} foi reprovado com ${nota} pontos`)
    }
}
for (i = 0; i < alunos.length; i++) {
    verificaAluno(alunos[i].nome, alunos[i].nota)
}
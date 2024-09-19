const saudacao:string = 'Olá ';
let nomeUsr:string = 'Igor';
function multiplica(a:number,b:number): number{
    return a * b;
}
function enviaSaudacao(saudacao:string, nome:string):string{
    return  saudacao + nome
}

console.log(multiplica(3,5));
console.log(enviaSaudacao(saudacao, nomeUsr));
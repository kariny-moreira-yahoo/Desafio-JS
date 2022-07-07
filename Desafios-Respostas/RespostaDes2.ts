enum Trabalho {
    'Engenheiro',
    'Veterinária',
    'Zootecnista',

}

type Pessoa = {
    nome: string,
    idade: number,
    profissão: Trabalho

}

let pessoa1: Pessoa = {
    nome: 'Pedro',
    idade: 29,
    profissão: Trabalho.Zootecnista

};
let pessoa2: Pessoa = {
    nome: 'Stefani',
    idade: 19,
    profissão: Trabalho.Veterinária

};
let pessoa3: Pessoa = {
    nome: 'Carlos',
    idade: 32,
    profissão: Trabalho.Engenheiro

};
let pessoa4: Pessoa = {
    nome: 'Igor',
    idade: 39,
    profissão: Trabalho.Zootecnista

}
interface Disciplina {
    codigo: string;
    nome: string;
    creditos: number;
}
interface Aluno {
    nome: string;
    creditosCursados: number;
}

/*
* Funções de Ordem Superior - RETORNA uma função
* Função validadora específica para o número de créditos de uma disciplina.
* */
function criarValidadorDeCreditos(disciplina: Disciplina): (aluno: Aluno) => boolean {
    const CREDITOS_MINIMOS = disciplina.creditos * 4;

    // Retorna a função que valida permitindo da regra e da disciplina
    return (aluno: Aluno): boolean => {
        console.log(`Validando ${aluno.nome} para ${disciplina.nome}. Créditos necessários: ${CREDITOS_MINIMOS}. Aluno tem: ${aluno.creditosCursados}`);
        return aluno.creditosCursados >= CREDITOS_MINIMOS;
    };
}

/*
* Funções de Ordem Superior - RECEBE uma função
* Executa uma ação em lote para um conjunto de alunos.
* */
function aplicar(alunos: Aluno[], acao: (aluno: Aluno) => void): void {
    console.log("\n Iniciando Ação em Lote na Jala University");
    alunos.forEach(acao);
    console.log("Ação em Lote Concluída");
}

// Demonstração

console.log("Demonstração da HOF que retorna função:");
const disciplinaAvancada: Disciplina = { codigo: 'CAC300', nome: 'Compiladores', creditos: 4 };
const validadorParaCompiladores = criarValidadorDeCreditos(disciplinaAvancada);

const alunoApto: Aluno = { nome: 'Vanessa', creditosCursados: 20 };
const alunoInapto: Aluno = { nome: 'Ricardo', creditosCursados: 10 };

console.log(`Vanessa pode cursar Compiladores? ${validadorParaCompiladores(alunoApto)}`); // true
console.log(`Ricardo pode cursar Compiladores? ${validadorParaCompiladores(alunoInapto)}`); // false


console.log("\nDemonstração da HOF que recebe função:");
const alunosParaNotificar = [alunoApto, alunoInapto];

// Ação de callback
const notificarSobrePeriodoDeRematricula = (aluno: Aluno) => {
    console.log(`  Prezado(a) ${aluno.nome}, o período de rematrícula para o próximo semestre está aberto! Acesse o portal Jala.`);
};

aplicar(alunosParaNotificar, notificarSobrePeriodoDeRematricula);
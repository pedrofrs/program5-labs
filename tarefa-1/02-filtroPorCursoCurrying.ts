interface Aluno {
    ra: string;
    nome: string;
    curso: 'Ciência da Computação' | 'Engenharia de Software' | 'Design Digital';
}

const alunosJala: Aluno[] = [
    { ra: 'RA01', nome: 'Rodrigo', curso: 'Ciência da Computação' },
    { ra: 'RA02', nome: 'Laura', curso: 'Engenharia de Software' },
    { ra: 'RA03', nome: 'Pedro', curso: 'Ciência da Computação' },
    { ra: 'RA04', nome: 'Apolo', curso: 'Design Digital' },
];

// Função Curried: recebe o curso e retorna uma função de filtro.
const criarFiltroPorCurso =  (curso: Aluno['curso']) =>
        (listaDeAlunos: Aluno[]): Aluno[] => {
            return listaDeAlunos.filter(aluno => aluno.curso === curso);
        };


console.log("Criando filtros especializados para cada curso...");

// Funções de filtro especializadas
const filtrarAlunosDeComputacao = criarFiltroPorCurso('Ciência da Computação');
const filtrarAlunosDeEngenharia = criarFiltroPorCurso('Engenharia de Software');

// Filtros
const alunosDeComputacao = filtrarAlunosDeComputacao(alunosJala);
const alunosDeEngenharia = filtrarAlunosDeEngenharia(alunosJala);

console.log("\nAlunos de Ciência da Computação:");
console.log(alunosDeComputacao);

console.log("\nAlunos de Engenharia de Software:");
console.log(alunosDeEngenharia);
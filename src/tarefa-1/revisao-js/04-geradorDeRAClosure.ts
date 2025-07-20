type Aluno = {
    id: number;
    nome: string;
};

// Função fábrica que cria um gerenciador de curso para a Jala University
function criarGerenciadorDeCurso(nomeDoCurso: string) {
    // Estado interno privado, inacessível diretamente
    const estudantes: Aluno[] = [];
    let proximoId = 1;

    return {
        // Metodo para matricular um novo estudante
        matricular: (nome: string): Aluno => {
            const novoEstudante: Aluno = { id: proximoId++, nome };
            estudantes.push(novoEstudante);
            console.log(`[Jala University] Estudante matriculado no curso "${nomeDoCurso}":`, novoEstudante);
            return novoEstudante;
        },

        // Metodo para listar todos os estudantes matriculados
        listarEstudantes: (): Aluno[] => {
            console.log(`[Jala University] Lista de estudantes do curso "${nomeDoCurso}":`, estudantes);
            // Retornamos uma cópia para evitar mutação externa
            return [...estudantes];
        },

        // Metodo para buscar um estudante por ID
        buscarPorId: (id: number): Aluno | undefined => {
            const achado = estudantes.find(e => e.id === id);
            console.log(
                `[Jala University] Busca por ID ${id} no curso "${nomeDoCurso}":`,
                achado ?? 'Não encontrado'
            );
            return achado;
        }
    };
}

// —————— Uso do gerenciador de curso ——————
const gerenciadorTS = criarGerenciadorDeCurso("TypeScript Avançado");

const alice = gerenciadorTS.matricular("Alice");
const bob   = gerenciadorTS.matricular("Bob");

gerenciadorTS.listarEstudantes();
gerenciadorTS.buscarPorId(1);

gerenciadorTS.buscarPorId(3);
// → undefined

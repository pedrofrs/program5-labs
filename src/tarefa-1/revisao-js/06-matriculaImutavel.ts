interface Disciplina {
    codigo: string;
    nome: string;
}

interface Matricula {
    semestre: string;
    alunoId: string;
    disciplinas: Disciplina[];
}

const matriculaInicial: Matricula = {
    semestre: '2025.2',
    alunoId: 'RA007',
    disciplinas: [
        { codigo: 'DB101', nome: 'Banco de Dados' },
    ],
};

// --- IMUTÁVEL para adicionar uma disciplina ---
const novaDisciplina: Disciplina = { codigo: 'WEB202', nome: 'Desenvolvimento Web' };

// Operador spread para criar um novo objeto de matrícula
// e um novo array de disciplinas, sem alterar os originais.
const matriculaAtualizada: Matricula = {
    ...matriculaInicial, // Copia as propriedades de Nível 1
    disciplinas: [
        ...matriculaInicial.disciplinas, // Copia as disciplinas existentes
        novaDisciplina, // Adiciona a nova disciplina
    ],
};


// --- Demonstração ---
console.log("Matrícula Original:");
console.dir(matriculaInicial, { depth: null });

console.log("\nMatrícula Atualizada (Imutável):");
console.dir(matriculaAtualizada, { depth: null });


console.log("\nO objeto original foi modificado? " + (matriculaInicial === matriculaAtualizada)); // false
console.log("O array de disciplinas original foi modificado? " + (matriculaInicial.disciplinas === matriculaAtualizada.disciplinas)); // false
console.log("Conteúdo da matrícula original permanece o mesmo:", matriculaInicial.disciplinas.length === 1); // true
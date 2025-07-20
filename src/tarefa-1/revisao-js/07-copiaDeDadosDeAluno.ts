interface Historico {
    coeficiente: number;
    disciplinasCompletas: number;
}

interface Aluno {
    ra: string;
    nome: string;
    historico: Historico;
}

const alunoOriginal: Aluno = {
    ra: 'RA777',
    nome: 'Lucas',
    historico: {
        coeficiente: 8.7,
        disciplinasCompletas: 12,
    },
};

// Shallow Copy (Cópia Rasa) ---
const alunoShallowCopy: Aluno = { ...alunoOriginal };

// simulaa a conclusão de uma nova disciplina na CÓPIA
alunoShallowCopy.historico.disciplinasCompletas = 13;

console.log("Após modificar a CÓPIA RASA ");
console.log("Aluno Original:", alunoOriginal);
console.log("Aluno Shallow Copy:", alunoShallowCopy);


// Resetando o original para o próximo teste
alunoOriginal.historico.disciplinasCompletas = 12;

// Deep Copy (Cópia Profunda)
const alunoDeepCopy: Aluno = JSON.parse(JSON.stringify(alunoOriginal));

//simula a conclusão de uma nova disciplina na CÓPIA PROFUNDA
alunoDeepCopy.historico.disciplinasCompletas = 13;
alunoDeepCopy.nome = "Lucas (Formando)"; // Alterando também uma propriedade de nível 1

console.log("\n--- Após modificar a CÓPIA PROFUNDA (Deep Copy) ---");
console.log("Aluno Original:", alunoOriginal);
console.log("Aluno Deep Copy:", alunoDeepCopy);

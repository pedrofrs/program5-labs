interface DisciplinaCursada {
    codigo: string;
    notaFinal: number;
    status: 'Aprovado' | 'Reprovado';
}

// Simula uma busca no sistema acadêmico da Jala.
function consultarHistorico(
    ra: string,
    onSuccess: (historico: DisciplinaCursada[]) => void,
    onError: (erro: string) => void
): void {
    console.log(`[SISTEMA JALA] Consultando histórico para o RA: ${ra}...`);

    // Simula a latência da rede
    setTimeout(() => {
        // Banco de dados simulado em memoria
        const db: Record<string, DisciplinaCursada[]> = {
            'JALA-2023-0123': [
                { codigo: 'CAL101', notaFinal: 8.5, status: 'Aprovado' },
                { codigo: 'LPG101', notaFinal: 9.0, status: 'Aprovado' },
            ],
        };

        const historico = db[ra];
        if (historico) {
            onSuccess(historico); // Chama o callback de sucesso
        } else {
            onError(`RA ${ra} não encontrado no sistema da Jala University.`); // Chama o callback de erro
        }
    }, 2000);
}


// --- Demonstração ---
const exibirHistoricoComSucesso = (historico: DisciplinaCursada[]) => {
    console.log("Histórico encontrado com sucesso!");
    console.table(historico);
};

const exibirMensagemDeErro = (erro: string) => {
    console.error(`Erro na consulta: ${erro}`);
};

// consultas passando os callbacks
console.log("Iniciando consulta para RA válido...");
consultarHistorico('JALA-2023-0123', exibirHistoricoComSucesso, exibirMensagemDeErro);

setTimeout(() => {
    console.log("\nIniciando consulta para RA inválido...");
    consultarHistorico('RA-INEXISTENTE', exibirHistoricoComSucesso, exibirMensagemDeErro);
}, 3000)
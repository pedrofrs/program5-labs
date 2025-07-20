interface Aluno {
    id: string;
    nome: string;
    mensalidadeBase: number;
}

let DESCONTO_BOLSA_JALA_GLOBAL = 0.15;

function calcularMensalidadeImpura(aluno: Aluno): number {
    const valorFinal = aluno.mensalidadeBase * (1 - DESCONTO_BOLSA_JALA_GLOBAL);
    console.log(`[LOG JALA] Cálculo para ${aluno.nome}, desconto global de ${DESCONTO_BOLSA_JALA_GLOBAL * 100}% aplicado.`);
    return valorFinal;
}


// Exemplo de Função PURA
function calcularMensalidadePura(mensalidadeBase: number, percentualDesconto: number): number {
    return mensalidadeBase * (1 - percentualDesconto);
}


// Demonstração
const alunoExemplo: Aluno = { id: 'RA001', nome: 'Sofia', mensalidadeBase: 1200 };

console.log("\nFunção IMPURA:");
const mensalidade1 = calcularMensalidadeImpura(alunoExemplo);
console.log(`Valor da mensalidade de ${alunoExemplo.nome}: R$${mensalidade1.toFixed(2)}`);


console.log("\nExecutando a mesma função IMPURA após mudança externa:");
const mensalidade2 = calcularMensalidadeImpura(alunoExemplo); // Mesma entrada, resultado diferente!
console.log(`Valor da mensalidade de ${alunoExemplo.nome}: R$${mensalidade2.toFixed(2)}`);


console.log("\nExecutando função PURA:");
const mensalidadePura1 = calcularMensalidadePura(alunoExemplo.mensalidadeBase, 0.15);
const mensalidadePura2 = calcularMensalidadePura(alunoExemplo.mensalidadeBase, 0.30);
console.log(`Valor com 15% de desconto: R$${mensalidadePura1.toFixed(2)}`);
console.log(`Valor com 30% de desconto: R$${mensalidadePura2.toFixed(2)}`);
// A função pura é totalmente previsível e explícita.
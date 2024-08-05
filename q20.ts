

const contarAprovados = () => {
    let aprovados = 0;

    for (let i = 1; i <= 5; i++) {
        const nota = Number(prompt(`Digite a nota do aluno ${i}: `));
        if (nota >= 7) {
            aprovados++;
        }
    }

    console.log(`Número de alunos aprovados: ${aprovados}`);
};

contarAprovados();

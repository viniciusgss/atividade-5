

const encontrarMaiorEMenor = () => {
    let maior: number | null = null;
    let menor: number | null = null;

    for (let i = 1; i <= 10; i++) {
        const numero = Number(prompt(`Digite o número ${i}: `));
        if (maior === null || numero > maior) {
            maior = numero;
        }
        if (menor === null || numero < menor) {
            menor = numero;
        }
    }

    console.log(`O maior número digitado foi: ${maior}`);
    console.log(`O menor número digitado foi: ${menor}`);
};

encontrarMaiorEMenor();

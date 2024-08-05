
const calcularMedia = () => {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        const nota = Number(prompt(`Digite a nota ${i}: `));
        soma += nota;
    }
    const media = soma / 5;
    console.log(`A média das notas é: ${media}`);
};

calcularMedia();

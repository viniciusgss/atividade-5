
const somarDigitos = () => {
    const numero = prompt('Digite um número inteiro: ');
    let soma = 0;

    for (const digito of numero) {
        soma += Number(digito);
    }

    console.log(`A soma dos dígitos do número ${numero} é: ${soma}`);
};

somarDigitos();

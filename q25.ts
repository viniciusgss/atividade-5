
const somarDigitosPares = () => {
    const numero = prompt('Digite um número inteiro: ');
    let soma = 0;

    for (const digito of numero) {
        const dig = Number(digito);
        if (dig % 2 === 0) {
            soma += dig;
        }
    }

    console.log(`A soma dos dígitos pares do número ${numero} é: ${soma}`);
};

somarDigitosPares();

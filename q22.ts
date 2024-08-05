

const exibirDivisores = () => {
    const numero = Number(prompt('Digite um número inteiro: '));

    console.log(`Os divisores de ${numero} são:`);
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
};

exibirDivisores();

const calcularMediaAltura = () => {
    let somaAlturas = 0;

    for (let i = 1; i <= 5; i++) {
        const altura = Number(prompt(`Digite a altura da pessoa ${i} (em metros): `));
        somaAlturas += altura;
    }

    const media = somaAlturas / 5;
    console.log(`A média de altura das 5 pessoas é: ${media.toFixed(2)} metros`);
};

calcularMediaAltura();
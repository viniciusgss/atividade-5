const exibirNumerosPares = () => {
    console.log("Números pares de 1 a 50:");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};

exibirNumerosPares();

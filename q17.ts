const exibirMultiplosDeTres = () => {
    console.log("Múltiplos de 3 no intervalo de 1 a 50:");
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
};

exibirMultiplosDeTres();

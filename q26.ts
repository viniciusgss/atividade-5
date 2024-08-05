
const inverterNumero = () => {
    const numero = prompt('Digite um número inteiro: ');
    const numeroInvertido = numero.split('').reverse().join('');

    console.log(`O número ${numero} invertido é: ${numeroInvertido}`);
};

inverterNumero();

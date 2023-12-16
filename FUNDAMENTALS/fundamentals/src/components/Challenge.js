const Challenge = () => {
// O desafio consiste em criar um componente fiho chamado Challenge , importa lo na classe pai App.js e mostrar dois numeros na tela, depois mostrar a soma desses
// numeros no console do navegador atraves de um evento que chama a funcao ao clicar em um botao:
  let A = 3;
  let B = 6;

  const handleSumVariables = () => {
    console.log(A + B);
  };

  return (
    <div>
      <p>O valor da variavel A eh: {A}</p>
      <p>O valor da variavel B eh: {B}</p>
      <button onClick={handleSumVariables}>
        Clique e aparecera a soma das variaveis!
      </button>
    </div>
  );
};

export default Challenge;

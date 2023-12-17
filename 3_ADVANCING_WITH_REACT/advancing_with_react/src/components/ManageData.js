//importando o useState
import { useState } from "react";
const ManageData = () => {
  //criando uma variaval para testar se ela re renderiza no JSX(ela nao renderiza)
  let someData = 10;

  //criando o hook que recebe a variavel number inicializada com o valor 10, e o setNumber que vai alterar o estado dessa variavel:
  const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        {/*Renderizando uma vez*/}
        <p>Valor : {someData}</p>
        {/*Mesmo com um evento de click, a variavel nao re renderiza, ela permanece 10 */}
        <button onClick={() => (someData = 15)}>
          Clique aqui para re renderizar a variavel
        </button>
        <div>
          {/*Chamando a variavel nuber inicializada no hook com o valor 10*/}
          <p>Valor : {number}</p>
          {/*Mudando o estado da variavel number com o evento de onClick invocando uma funcao e passando o parametro setNumber */}
          <button onClick={() => (setNumber(25))}>
            Clique aqui para mudar o estado da variavel number!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageData;

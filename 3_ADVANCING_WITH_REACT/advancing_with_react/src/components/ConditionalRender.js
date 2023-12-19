import { useState } from "react";

const ConditionalRender = () => {
  //criando uma variavel com useState e declarando ela como bolleana(true)
  const [x] = useState(true);
  const [y] = useState(false);

  //condicional com if else ternario:
  const [name, setName] = useState('Matheus');
  return (
    <div>
      <div>
        <h1>Isso vai ser renderizado?</h1>
        {/*interpolando e verificando se x for verdadeiro ela renderiza no navegador:*/}
        {/*true && true = true*/}
        {x && <p>Se x for verdadeiro , renderiza isso</p>}
        {/**Se y ef falso, entao nao renderiza */}
        {y && (
          <p>Isso nao vai ser renderizado, pois false && verdadeiro da false</p>
        )}
        {/*Negacao de false, da verdadeiro, entao rendeirzara:*/}
        {!y && <p>Negacao de false, eh verdadeiro, entao renderiza!</p>}
      </div>
      <div>
        <h1>If ternario:</h1>
        {/**Como o nome iniciado no atributo name e 'Matheus , entao vai cair no else pois da false */}
        {name === 'Joao' ? (
          <div>
            <p>O nome e Joao!</p>
          </div>
        ) : (
          <div>
            <p>Nome nao encontrado!</p>
          </div>
        )}
        {/**Vamos criar um botao para gerar um evento onclick para alterar a mudanca do estado do atributo
         *  name com o setNAme. Ao clicar no botao, agora ele muda o estado do name no if ternario e altera o nome que era MAtheus para Joao e 
         * a condicional se torna true, caindo no if ternario, renderizando 'O nome e Joao!*/}
        <button onClick={() => setName('Joao')}>Clica aqui! </button>
      </div>
    </div>
  );
};

export default ConditionalRender;

import { useState } from "react";

const ConditionalRender = () => {
  //criando uma variavel com useState e declarando ela como bolleana(true)
  const [x] = useState(true);
  const [y] = useState(false);
  return (
    <div>
      <h1>Isso vai ser renderizado?</h1>
      {/*interpolando e verificando se x for verdadeiro ela renderiza no navegador:*/}
      {/*true && true = true*/}
      {x && <p>Se x for verdadeiro , renderiza isso</p>}
      {/**Se y ef falso, entao nao renderiza */}
      {y && <p>Isso nao vai ser renderizado, pois false && verdadeiro da false</p>}
      {/*Negacao de false, da verdadeiro, entao rendeirzara:*/}
      {!y && <p>Negacao de false, eh verdadeiro, entao renderiza!</p>}
    </div>
  );
};

export default ConditionalRender;

const Event = () => {
  const handleMyEventButton = (e) => {
    // parametro 'e' mostra no console o que ocorre por tras dos panos com esse evento, mas e opcional
    console.log(e);
    console.log("Evento disparado");
  };

  //Criando uma funcao para renderizacao de JSX(HTML):
  const renderSomething = (boolean) => {
    if (boolean) {
      return <h1>Essa funcao renderiza JSX!</h1>;
    } else {
      return <h1>Se der false, a funcao renderiza esse JSX!</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEventButton}>Click on me!</button>
      </div>
      <div>
        {/*Criando uma funcao inline dentro do proprio evento, podemos fazer isso quando for uma funcao simples:*/}
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui tambem!
        </button>
      </div>
      <div>
        {/*ao retornar true, ele chama o primeiro h1*/}
        {renderSomething(true)}
         {/*ao retornar false, ele chama o segundo  h1*/}
        {renderSomething(false)}
      </div>
    </div>
  );
};
export default Event;

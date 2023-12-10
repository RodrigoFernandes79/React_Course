const Event = () => {
  const handleMyEventButton = (e) => {
    // parametro 'e' mostra no console o que ocorre por tras dos panos com esse evento, mas e opcional
    console.log(e);
    console.log("Evento disparado");
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEventButton}>Click on me!</button>
      </div>
    </div>
  );
};
export default Event;

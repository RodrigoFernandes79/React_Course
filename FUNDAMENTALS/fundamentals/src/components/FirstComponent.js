//comentario fora do JSP
const FirstComponent = () => {
  //comentario pode ser dentro da funcao

  /*
comentario fora do JSP tambem pode ser
em multiplas 
linhas 
*/
  return (
    <dir className="FirstComponent">
      {/*Comentario no JSP dentro do return e dentro da tag pai */}
      <h1>My First Component</h1>
      <p>Jsx lesson</p>
    </dir>
  );
};

export default FirstComponent;

const TemplateExpression = () => {
  const name = "Robert";

  const data = {
    age: 34,
    job: "programmer",
  };
  return (
    <div>
      <h1>Hello, {name}! How are you?</h1>
      <p>Your job is {data.job}</p>
      <p>
        Your name is {name}, and you are {data.age} years old!
      </p>
      {console.log("JSX REACT")}
      {2 + 2}
    </div>
  );
};

export default TemplateExpression;

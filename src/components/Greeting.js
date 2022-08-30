import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleChangeText = () => {
    setChangedText(true);
  };
  return (
    <>
      <h1>Greetings</h1>
      {changedText ? <Output>Changed!</Output> : <p>Nice to meet you all!</p>}
      <button onClick={handleChangeText}>Change Text</button>
    </>
  );
};

export default Greeting;

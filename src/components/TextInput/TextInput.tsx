import React, { ChangeEvent, useState } from "react";

function TextInput() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log("Введений текст:", event.target.value);
  };

  return <input type="text" value={text} onChange={handleTextChange} />;
}

export default TextInput;

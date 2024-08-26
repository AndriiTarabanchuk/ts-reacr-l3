import React, { FormEvent } from "react";

function OnSubmit() {
  const handleSubmit = (event: FormEvent) => {
    // запобігаємо стандартній поведінці форми (відправці форми)
    event.preventDefault();
    console.log("OnSubmit Форма була відправлена!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Відправити</button>
    </form>
  );
}

export default OnSubmit;

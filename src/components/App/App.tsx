import "./App.css";
import MyComp, { User } from "../MyComp/MyComp";
import UseRef from "../UseRef/UseRef";
import OnSubmit from "../OnFubmit/OnSubmit";
import ParentComponent from "../ParentComponent/ParentComponent";
import TextInput from "../TextInput/TextInput";
import Input from "../Input/Input";
import { useState } from "react";
import InputKeyboard from "../InputKeyboard/InputKeyboard";

function App() {
  const user: User = {
    id: 123,
    name: "string",
    birthYear: 1900,
  };
  const [value, setValue] = useState(10);
  const [count, setCount] = useState("10");
  const [press, setPress] = useState(0);

  return (
    <div className="App">
      <main>
        <MyComp user={user} />
        <UseRef />
        <OnSubmit />
        <ParentComponent />
        <TextInput />

        <p>input</p>
        <Input value={value} type={"number"} onChange={(e) => console.log(e)} />
        <p>Enter</p>
        <InputKeyboard
          value={count}
          onChange={(e) => setCount(e)}
          onPressEnter={() => {
            console.log(count);
          }}
        />
      </main>
    </div>
  );
}

export default App;

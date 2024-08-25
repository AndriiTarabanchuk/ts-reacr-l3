import "./App.css";
import MyComp, { User } from "../MyComp/MyComp";

function App() {
  const user: User = {
    id: 123,
    name: "string",
    birthYear: 1900,
  };
  return (
    <div className="App">
      <main>
        <MyComp user={user} />
      </main>
    </div>
  );
}

export default App;

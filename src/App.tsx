import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Mahesh",
    last: "Pattar",
  };

  const personList = [
    {
      id: 1,
      first: "Joe",
      last: "Cough",
    },
    {
      id: 2,
      first: "Simon",
      last: "Jerome",
    },
  ];

  return (
    <div className="App">
      <Greet name="Mahesh" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;

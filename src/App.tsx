import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscat";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Greet name="Mahesh" isLoggedIn={true} messageCount={5} />
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Award goes to Mahesh Pattar</Heading>
      </Oscar>
    </div>
  );
}

export default App;

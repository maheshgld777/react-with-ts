import "./App.css";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container
        style={{
          borderColor: "black",
          alignItems: "center",
          padding: "10px 20px 40px 80px",
        }}
      />
    </div>
  );
}

export default App;

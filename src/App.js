import "./App.css";
import Logo from "./Assets/images/logo.svg";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <img src={Logo} />
      <Container />
    </div>
  );
}

export default App;

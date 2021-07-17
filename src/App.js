import logo from "./logo.svg";
import "./App.scss";
import { DefaultButton, DefaultCard } from "./components/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DefaultCard>
          <h1>Test card heading</h1>
          <p>test card content</p>
        </DefaultCard>
        <DefaultButton>Test</DefaultButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AWS AMP DEPLOY</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            style="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fy7VG8cLNm4SeOuId36KlGn%2Fwalnut-insurance-project%3Fnode-id%3D0%253A1"
            allowfullscreen
          >
            View Figma
          </iframe>
        </a>
      </header>
    </div>
  );
}

export default App;

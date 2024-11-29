import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className=" App-header-banner">
          <i
            aria-hidden="true"
            className="fa fa-phone"
            style={{ color: "#FF8A1E", fontSize: "25px" ,margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> Call : +01 123455678990</p>
        </div>
        <div className="App-header-banner" aria-hidden="true">
          <i
            class="fa fa-envelope"
            style={{ color: "#FF8A1E", fontSize: "25px" ,margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> Email : demo@gmail.com</p>
        </div>
      </header>
      <footer className="App-footer">
        <p className="App-footer-text">Get in Touch</p>
      </footer>
    </div>
  );
}

export default App;

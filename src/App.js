import "./App.css";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, Pages } from "./containers/navigation";
import Theme from "./styles/theme";
import Player from "./containers/player/Player";


function App() {
  return (
    <Router>
      <Theme>
        <div className="App">
          <header>
           <NavBar />
          </header>
          <Pages />
          <Player />
        </div>
      </Theme>
    </Router>
  );
}

export default App;

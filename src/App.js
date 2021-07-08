import "./App.css";
//import SidebarData from './components/data/SidebarData'
import Navbar from "./components/paner-form/Navbar";
import Index from "./components/paner-form/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import GenerationInformation from "../pages/GenerationInformation";
import PropertyDetail from "./components/pages/PropertyDetail";
import Rooms from "./components/pages/Rooms";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/propDetail" component={PropertyDetail} />
          <Route path="/rooms" component={Rooms} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/paner-form/Navbar'
import MiniNavbar from './components/paner-form/MiniNavbar'
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <MiniNavbar/>
      </Router>
      
    </div>
  );
}

export default App;

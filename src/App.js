import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './footer/footer';
import Navbar from './header/header';
import Home from './home/home';
import Leads from './leads/leads';
import Analytics from './analytics/analytics';
import Report from './report/report';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Routes>
              <Route exact path = "/" element={<Home/>} />
              <Route exact path = "/leads" element={<Leads/>} />
              <Route exact path = "/analytics" element={<Analytics/>} />
              <Route exact path = "/report" element={<Report/>} />
          </Routes>
        </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import TopStoriesCard from './components/Top-stories';
import Navbar from './components/navbar';
import './assets/css/style.css';
import Contents from './views/contents';
import Dashboard from './views/dashboard'

function App() {
  return (
    <Router>
      <div className="App row m-0 p-0">
        <Sidebar />
        <div className="main col-10 overflow-y-scroll m-0 p-0">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/contents" element={<Contents />} />
            
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;

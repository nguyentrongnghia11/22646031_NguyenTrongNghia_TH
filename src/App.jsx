
//// json-server --watch public/db.json --port 3000
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // Nhập Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Header title={"Dashboard"} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

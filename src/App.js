
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Projects';

const App = () => {
  return (
    <Router>
  
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

    </Router>
  );
};

export default App;


import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
        <Footer />

    </Router>
  );
};

export default App;


// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import AboutUS from './AboutUS';
// import Home from './Home';
// import Projects from './Projects';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           {/* <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUS />} /> */}
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


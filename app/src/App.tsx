
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<div className='text-orange-500'>Home</div>} />
        </Routes>
      </Router>
  
  );
};

export default App;

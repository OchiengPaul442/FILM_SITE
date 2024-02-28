import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import MNAFAPAC from "@pages/MNFAPAC";
import Courses from "@pages/MNFAPAC/Courses"; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MNAFAPAC />} />
          <Route path="/courses" element={<Courses />} /> 
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

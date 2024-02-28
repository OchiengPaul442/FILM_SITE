import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import MNAFAPAC from "@pages/MNFAPAC";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MNAFAPAC />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

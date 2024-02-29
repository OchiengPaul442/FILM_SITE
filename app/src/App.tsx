import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import MNAFAPAC from '@pages/MNFAPAC';
import Courses from '@pages/MNFAPAC/Courses';
import CourseDetails from '@pages/MNFAPAC/Courses/details';
import { TopScrollOnVisit } from '@services/utils';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopScrollOnVisit />
        <Routes>
          <Route path="/" element={<MNAFAPAC />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

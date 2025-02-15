import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Choice from './pages/choice';
import Yes from './pages/yes';
import Home from './pages/home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/choice" element={<Choice/>} />
        <Route path="/yes" element={<Yes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './pages/start';
import Yes from './pages/yes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/yes" element={<Yes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
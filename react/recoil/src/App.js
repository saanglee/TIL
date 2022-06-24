import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './Counter';
import RenderGlobal from './RenderGlobal';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="counter" element={<RenderGlobal />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

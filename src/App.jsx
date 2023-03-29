import React from 'react';
import { useSelector } from 'react-redux';
import Homepage from './pages/Home/main';
import Join from './pages/Join/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

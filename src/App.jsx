import React from 'react';
import { useSelector } from 'react-redux';
import Homepage from './pages/Home/main';
import Join from './pages/Join/main';
import Groupchat from './pages/Groupchat/main';
import Personalchat from './pages/Personalchat/main';
import Search from './pages/Search/main';
import Profile from './pages/Profile/main';
import Settings from './pages/Settings/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/groupchat" element={<Groupchat />} />
          <Route path="/personalchat" element={<Personalchat />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

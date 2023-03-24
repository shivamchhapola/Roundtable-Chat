import React from 'react';
import { useSelector } from 'react-redux';
import Homepage from './pages/Home/main';

export default function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div data-theme={theme}>
      <Homepage />
    </div>
  );
}

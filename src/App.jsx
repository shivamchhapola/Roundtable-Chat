import React from 'react';
import Homepage from './pages/Home/main';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  const scrollEvent = () => {
    console.log(window.pageYOffset);
  };

  window.addEventListener('scroll', scrollEvent);

  return (
    <Provider store={store}>
      <div>
        <Homepage />
      </div>
    </Provider>
  );
}

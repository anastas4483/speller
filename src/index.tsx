import { MainPage } from '@/views/main-page/MainPage.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {

  return (
    <MainPage />
  );
};

root.render(<App />);

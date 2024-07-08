import React from 'react';
import './App.css';
import { MainContainer } from './components/MainContainer';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainContainer />
    </MantineProvider>
  );
}

export default App;

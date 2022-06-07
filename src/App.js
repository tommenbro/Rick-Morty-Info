import React from 'react';
import Characters from './components/Characters';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />

        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

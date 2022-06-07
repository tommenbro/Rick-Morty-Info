import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-secondary">
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default App;

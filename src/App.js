import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='mx-auto' style={{ backgroundColor: '#f8f4ff' }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

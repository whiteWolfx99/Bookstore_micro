import React from 'react';
import Navbar from './View/Navbar';
import Main from './Routes';

export default function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Main />
      </main>
    </div>
  );
}

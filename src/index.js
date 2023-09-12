import React from 'react';
import { createRoot } from 'react-dom/client';
import Board from './components/Board';



function App(){
  return (
    <div>
      <Board />
    </div>
  );
}

const root = createRoot(           
  document.getElementById('root'));
  root.render(<App />);


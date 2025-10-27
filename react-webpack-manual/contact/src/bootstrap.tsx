import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <div>
      <h1>Contact App - Modo Standalone</h1>
      <p>Rodando independentemente na porta 3001</p>
      <hr />
      <ContactApp />
    </div>
  );
}
// src/App.jsx
import { Suspense, lazy } from 'react';

// ---
// IMPORTAÇÃO DINÂMICA
// ---
// 'contact_app' é o 'name' que definimos no webpack.config.js do remoto
// '/ContactApp' é a chave 'exposes' que definimos
const ContactApp = lazy(() => import('contact_app/ContactApp'));

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>App Host (rodando em 3000)</h1>
      <p>Este componente está sendo carregado do app remoto (porta 3001).</p>

      <hr />

      Suspense é obrigatório para lidar com o carregamento (lazy)
      <Suspense fallback={<div>Carregando contact app...</div>}>
        <ContactApp />
      </Suspense>
    </div>
  );
}

export default App;
// src/index.js
// Este arquivo é necessário, mas a aplicação principal
// será inicializada pelo 'host' em um cenário real.
// Para fins de teste, podemos importar o App local.

// Verifica se está sendo executado como standalone
// (quando há um elemento root no DOM)
if (document.getElementById('root')) {
  // Modo standalone - renderiza a aplicação completa
  import('./bootstrap');
}

// O Module Federation sempre conseguirá importar o App.tsx
// mesmo que o bootstrap não execute

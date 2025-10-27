import { ReactCompilerTester } from './components/ReactCompilerTester';

const ContactApp = () => {
  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
      <h2>🔗 App Remoto (rodando em 3001)</h2>
      <p>Este componente vem do Module Federation!</p>
      <ReactCompilerTester />
    </div>
  );
};

export default ContactApp;
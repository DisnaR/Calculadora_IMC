import React from 'react';
import './App.css';
import FormularioIMC from './components/FormularioIMC';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <FormularioIMC />
    </div>
  );
};

export default App;
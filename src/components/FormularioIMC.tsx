import React, { useState } from 'react';
import './FormularioIMC.css';

const FormularioIMC: React.FC = () => {
const [altura, setAltura] = useState<number>(0);
const [peso, setPeso] = useState<number>(0);
const [imc, setImc] = useState<number | null>(null);
const [classificacao, setClassificacao] = useState<string>('');

const calcularIMC = () => {
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado);

    if (imcCalculado < 18.5) {
    setClassificacao('Baixo peso');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
    setClassificacao('Eutrofia (Peso Adequado)');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
    setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
    setClassificacao('Obesidade Grau 1');
    } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
    setClassificacao('Obesidade Grau 2');
    } else {
    setClassificacao('Obesidade Extrema');
    }
};

return (
    <div className="formulario-container">
    <h2>Calculadora de IMC</h2>
    <div className="input-container">
        <label htmlFor="altura">Altura (m):</label>
        <input
        type="number"
        id="altura"
        value={altura}
        onChange={(e) => setAltura(parseFloat(e.target.value))}
        />
    </div>
    <div className="input-container">
        <label htmlFor="peso">Peso (kg):</label>
        <input
        type="number"
        id="peso"
        value={peso}
        onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
    </div>
    <button onClick={calcularIMC}>Calcular IMC</button>
    {imc !== null && (
        <div className="resultado-container">
        <p>Seu IMC é: {imc.toFixed(2)}</p>
        <p>Classificação: {classificacao}</p>
        </div>
    )}
    </div>
);
};

export default FormularioIMC;
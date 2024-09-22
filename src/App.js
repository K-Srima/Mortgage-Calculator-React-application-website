import React, {useState} from 'react';
import './App.css';
function App() {
  const [principal, setPrincipal] = useState('');
  const[interest, setInterest] = useState('');
  const[years, setYears] = useState('');
  const[monthlyPayment, setMonthlyPayment] = useState(null);
  const calculateMortgage = () => {
    const principalAmount = parseFloat(principal);
    const annualInterestRate = parseFloat(interest)/100;
    const loanTermYears = parseInt(years);
    if (isNaN(principalAmount) || isNaN(annualInterestRate) || isNaN(loanTermYears)) {
      alert("Please enter valid numbers");
      return;
    }
    const monthlyInterestRate = annualInterestRate / 12;
    const totalPayments = loanTermYears*12;
    const calculatedMonthlyPayment = (principalAmount*monthlyInterestRate)/(1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
  };
  return (
    <div className="calculator-container">
      <h2>Mortgage calculator</h2>
      <label>Loan Amount ($):</label>
      <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="Enter loan amount" />
      <label>Annual Interest Rate (%):</label>
      <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} placeholder="Enter interest rate" />
      <label>Loan Term (years):</label>
      <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Enter loan term in years" />
      <button onClick={calculateMortgage}>Calculate</button>
      {monthlyPayment && (<div className="result">
        <h3>Monthly Payment: $ {monthlyPayment}</h3>
        </div>
      )}
      </div>
  );
}
export default App;

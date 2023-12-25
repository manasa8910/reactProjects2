import DiscreteSlider from "./Components/DiscreateSlider.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import Chart from "./Components/Chart.jsx";
import Navbar from "./Components/Navbar.jsx";
import Dropdown from "./Components/Dropdown.jsx";

function App() {
  const [slider1Value, setSlider1Value] = useState(3000);
  const [slider2Value, setSlider2Value] = useState(600);
  const [slider3Value, setSlider3Value] = useState(2400);
  const [slider4Value, setSlider4Value] = useState(5);
  const [tenure, setTenure] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(45.29);
  const [interest, setInterest] = useState(317.4);
  const [dynamicData, setDynamicData] = useState([]);

  useEffect(() => {
    setDynamicData({
      slider1Value,
      interest,
    });
  }, [slider1Value, interest]);

  const calculateMonthlyPayment = (
    loanAmount,
    annualInterestRate,
    loanTenureYears,
    decimalPlaces = 2
  ) => {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const totalPayments = loanTenureYears * 12;
    const numerator =
      loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
    const monthlyPayment = (numerator / denominator).toFixed(decimalPlaces);
    const totalPayableAmount = monthlyPayment * totalPayments;
    const totalInterestAmount = totalPayableAmount - loanAmount;
    setInterest(totalInterestAmount.toFixed(3));
    return monthlyPayment;
  };

  const handleSlider1Change = (newValue) => {
    setSlider1Value(newValue);
    const downPayment = (newValue * 20) / 100;
    setSlider2Value(downPayment);
    const loanAmount = newValue - downPayment;
    setSlider3Value(loanAmount);
    const monthlyPayment = calculateMonthlyPayment(
      loanAmount,
      slider4Value,
      tenure
    );
    setMonthlyPayment(monthlyPayment);
  };

  const handleSlider2Change = (newValue) => {
    setSlider2Value(newValue);
    const loanAmount = slider1Value - newValue;
    setSlider3Value(loanAmount);
    const monthlyPayment = calculateMonthlyPayment(
      loanAmount,
      slider4Value,
      tenure
    );
    setMonthlyPayment(monthlyPayment);
  };

  const handleSlider3Change = (newValue) => {
    setSlider3Value(newValue);
    const downPayment = slider1Value - newValue;
    setSlider2Value(downPayment);
    const monthlyPayment = calculateMonthlyPayment(
      newValue,
      slider4Value,
      tenure
    );
    setMonthlyPayment(monthlyPayment);
  };

  const handleSlider4Change = (newValue) => {
    setSlider4Value(newValue);
    const loanAmount = slider1Value;
    const monthlyPayment = calculateMonthlyPayment(
      loanAmount,
      slider4Value,
      tenure
    );
    setMonthlyPayment(monthlyPayment);
  };

  const handleTenureChange = (event) => {
    setTenure(event.target.value);
    const monthlyPayment = calculateMonthlyPayment(
      slider3Value,
      slider4Value,
      event.target.value
    );
    setMonthlyPayment(monthlyPayment);
  };
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="left-panel">
          <DiscreteSlider
            title="Home Value"
            value={slider1Value}
            onSliderChange={handleSlider1Change}
            defaultValue={3000}
            steps={100}
            min={1000}
            max={10000}
            type="$"
          />
          <DiscreteSlider
            title="Down Payment"
            value={slider2Value}
            onSliderChange={handleSlider2Change}
            defaultValue={600}
            steps={100}
            min={0}
            max={slider1Value}
            type="$"
          />
          <DiscreteSlider
            title="Loan Amount"
            value={slider3Value}
            onSliderChange={handleSlider3Change}
            defaultValue={2400}
            steps={100}
            min={0}
            max={slider1Value}
            type="$"
          />
          <DiscreteSlider
            title="Interest Rate"
            value={slider4Value}
            onSliderChange={handleSlider4Change}
            defaultValue={5}
            steps={1}
            min={2}
            max={18}
            type="%"
          />
          <Dropdown onChangeHandler={handleTenureChange} tenureValue={tenure} />
        </div>
        <div className="right-panel">
          <p className="emi">Monthly Payment: $ {monthlyPayment}</p>
          <Chart dataVal={dynamicData} />
        </div>
      </div>
    </div>
  );
}

export default App;

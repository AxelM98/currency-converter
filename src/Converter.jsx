import "./styles.css";
import React, { useState } from "react";

function Converter() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiEndpoint = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
    const requestOptions = {
      method: "GET",
      headers: {
        apikey: "zCOMJfx8v7rQ8niOco4lajR2TCCivyrW",
      },
    };
    fetch(apiEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => setResult(data.result.toFixed(2)))
      .catch((error) => console.error(error));
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  console.log(result);

  return (
    <div className="converter">
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <label className="row">
              Amount:
              <input
                className="select input"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </label>
            <label className="row">
              From:
              <select
                className="select"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
                <option value="GBP">GBP</option>
              </select>
            </label>
            <label className="row">
              To:
              <select
                className="select"
                value={toCurrency}
                onChange={handleToCurrencyChange}
              >
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
              </select>
            </label>
            <button type="submit">Convert</button>
          </form>
          <div className="row result">
            Result: {result} {result && toCurrency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;

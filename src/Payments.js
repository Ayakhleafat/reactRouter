import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaymentPage() {
  const [currency, setCurrency] = useState('USD');
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Payment Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="expiry" className="form-label">Expiry Date</label>
                    <input type="text" className="form-control" id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="col">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cvv" placeholder="CVV" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cardHolderName" className="form-label">Cardholder Name</label>
                  <input type="text" className="form-control" id="cardHolderName" placeholder="Enter cardholder name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="currency" className="form-label">Currency</label>
                  <select className="form-select" id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="USD">JOD</option>
                    <option value="EUR">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">EUR</option>
                  </select>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;





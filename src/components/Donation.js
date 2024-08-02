import React, { useState } from "react";
import PaymentIcon from "@material-ui/icons/Payment";
import LoopIcon from "@material-ui/icons/Loop";
import axios from "axios";
import "../styles/Donation.css";

const Donation = () => {
  // States to handle form fields
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  // States to check API request status
  const [isLoading, setIsLoading] = useState(false);

  // Error
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { email, fullName, amount, currency };
    setIsLoading(true);
    setIsError(false);
    if (email === "" || fullName === "" || amount === "") {
      setIsLoading(false);
      setError("Please Fill All Fields");
      setIsError(true);
    } else {
      try {
        const apiReq = await axios.post(
          "/api/payment/initialize-transaction",
          data
        );
        if (apiReq) {
          window.location = apiReq.data.data.authorization_url;
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        {isError && <h1 className="warning">{error}</h1>}
        <div className="form__group">
          <label htmlFor="email">Email :</label> <br />
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="fullName">Full Name :</label> <br />
          <input
            type="text"
            id="fullName"
            placeholder="Catherine James"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="currency">Currency :</label> <br />
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="NGN">NGN</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="amount">Amount Donated:</label> <br />
          <input
            type="number"
            id="amount"
            placeholder="100"
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="any"
          />
        </div>
        <div className="form__group">
          {isLoading ? (
            <button disabled>
              <LoopIcon /> Processing......
            </button>
          ) : (
            <button type="submit">
              <PaymentIcon /> Continue
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Donation;

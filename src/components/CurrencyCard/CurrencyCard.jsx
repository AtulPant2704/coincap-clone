import "./CurrencyCard.css";

const CurrencyCard = () => {
  return (
    <tr className="currency-card">
      <td className="currency-type">1</td>
      <td className="currency-type currency-name-img">
        <img
          src="https://assets.coincap.io/assets/icons/eth@2x.png"
          alt="eth"
          className="currency-img"
        />
        <div className="currency-name">
          <span>Bitcoin</span>
          <span>BTC</span>
        </div>
      </td>
      <td className="currency-type">$29,505.21</td>
      <td className="currency-type">$558.99b</td>
      <td className="currency-type">$29,381.71</td>
      <td className="currency-type">19.06m</td>
      <td className="currency-type">$12.02b</td>
      <td className="currency-type">-2.73%</td>
    </tr>
  );
};

export { CurrencyCard };

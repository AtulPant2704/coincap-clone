import "./MarketInfoHeader.css";

const MarketInfoHeader = () => {
  return (
    <section className="market-info">
      <ul className="market-info-list">
        <li className="info-type">
          <p className="info-name">MARKET CAP</p>
          <p className="info-name">$1.59T</p>
        </li>
        <li className="info-type">
          <p className="info-name">EXCHANGE VOL</p>
          <p className="info-name">$52.96B</p>
        </li>
        <li className="info-type">
          <p className="info-name">ASSETS</p>
          <p className="info-name">2,295</p>
        </li>
        <li className="info-type">
          <p className="info-name">EXCHANGES</p>
          <p className="info-name">73</p>
        </li>
        <li className="info-type">
          <p className="info-name">MARKETS</p>
          <p className="info-name">1,561</p>
        </li>
        <li className="info-type">
          <p className="info-name">BTC DOM INDEX</p>
          <p className="info-name">35.3%</p>
        </li>
      </ul>
    </section>
  );
};

export { MarketInfoHeader };

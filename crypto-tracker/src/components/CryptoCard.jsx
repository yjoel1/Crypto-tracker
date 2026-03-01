import PriceChange from "./PriceChange";

function CryptoCard({ coin }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
      <p>Price: ${coin.current_price}</p>
      <PriceChange change={coin.price_change_percentage_24h} />
    </div>
  );
}

export default CryptoCard;
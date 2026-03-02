import CryptoCard from "./CryptoCard";

function CryptoList({ coins }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {coins.length === 0 ? (
        <div style={{ textAlign: "center", color: "#444", fontSize: "13px", letterSpacing: "2px", padding: "40px 0" }}>
          NO COINS FOUND
        </div>
      ) : (
        coins.map((coin) => (
          <CryptoCard key={coin.id} coin={coin} />
        ))
      )}
    </div>
  );
}

export default CryptoList;

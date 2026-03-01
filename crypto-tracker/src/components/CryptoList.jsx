import CryptoCard from "./CryptoCard";

function CryptoList({ coins }) {
  return (
    <div>
      {coins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default CryptoList;
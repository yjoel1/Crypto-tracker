function PriceChange({ change }) {
  const color = change >= 0 ? "green" : "red";

  return (
    <p style={{ color }}>
      24h Change: {change?.toFixed(2)}%
    </p>
  );
}

export default PriceChange;
function PriceChange({ change }) {
  const isUp = change >= 0;
  return (
    <span style={{
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      color: isUp ? "#00ff88" : "#ff4444",
      background: isUp ? "rgba(0,255,136,0.1)" : "rgba(255,68,68,0.1)",
      padding: "2px 7px",
      borderRadius: "4px",
      display: "inline-block",
      marginTop: "4px",
    }}>
      {isUp ? "▲" : "▼"} {Math.abs(change?.toFixed(2))}%
    </span>
  );
}

export default PriceChange;

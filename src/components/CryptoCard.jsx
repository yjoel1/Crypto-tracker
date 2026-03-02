import PriceChange from "./PriceChange";

function CryptoCard({ coin }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "12px",
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "background 0.2s, border 0.2s, transform 0.2s",
      cursor: "default",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.border = "1px solid rgba(0,255,136,0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Left: icon + name */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <img src={coin.image} alt={coin.name} style={{ width: "36px", height: "36px", borderRadius: "50%" }} />
        <div>
          <div style={{ fontWeight: "700", fontSize: "15px", color: "#fff", letterSpacing: "-0.3px" }}>
            {coin.name}
          </div>
          <div style={{ fontSize: "11px", color: "#555", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "2px" }}>
            {coin.symbol}
          </div>
        </div>
      </div>

      {/* Right: price + change */}
      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "800", fontSize: "16px", color: "#fff", letterSpacing: "-0.5px" }}>
          ${coin.current_price.toLocaleString()}
        </div>
        <PriceChange change={coin.price_change_percentage_24h} />
      </div>
    </div>
  );
}

export default CryptoCard;

import { useEffect, useState } from "react";
import CryptoList from "./components/CryptoList";
import SearchBar from "./components/SearchBar";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "#41a5ac",
      fontFamily: "'Courier New', monospace",
      color: "#e0e0e0",
      padding: "40px 20px",
      boxSizing: "border-box",
    }}>
      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "4px", color: "#00ff88" }}>LIVE</span>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ff88", display: "inline-block", boxShadow: "0 0 8px #00ff88", animation: "pulse 2s infinite" }} />
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: "900", letterSpacing: "-2px", margin: "0 0 6px 0", color: "#fff" }}>
            CRYPTO<span style={{ color: "#00ff88" }}>.TRACK</span>
          </h1>
          <p style={{ fontSize: "11px", color: "#444", letterSpacing: "2px", margin: 0 }}>
            POWERED BY COINGECKO · PRICES IN USD
          </p>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        {loading ? (
          <div style={{ textAlign: "center", padding: "60px 0", fontSize: "12px", letterSpacing: "4px", color: "#00ff88" }}>
            FETCHING MARKET DATA...
          </div>
        ) : (
          <CryptoList coins={filteredCoins} />
        )}
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
        input::placeholder { color: #444; }
      `}</style>
    </div>
  );
}

export default App;

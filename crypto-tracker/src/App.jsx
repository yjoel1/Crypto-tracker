import { useEffect, useState } from "react";
import CryptoList from "./components/CryptoList";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    )
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

  return (
    <div>
      <h1>Crypto Tracker</h1>
      {loading ? <p>Loading...</p> : <CryptoList coins={coins} />}
    </div>
  );
}

export default App;
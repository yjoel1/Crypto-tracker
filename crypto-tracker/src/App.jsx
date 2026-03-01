import { useEffect, useState } from "react";
import CryptoList from "./components/CryptoList";
import SearchBar from "./components/SearchBar";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
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

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? <p>Loading...</p> : <CryptoList coins={filteredCoins} />}
    </div>
  );
}

export default App;
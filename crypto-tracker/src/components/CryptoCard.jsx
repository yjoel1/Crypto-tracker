import { Card, CardContent, Typography } from "@mui/material";
import PriceChange from "./PriceChange";

function CryptoCard({ coin }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {coin.name} ({coin.symbol.toUpperCase()})
        </Typography>
        <Typography>
          Price: ${coin.current_price}
        </Typography>
        <PriceChange change={coin.price_change_percentage_24h} />
      </CardContent>
    </Card>
  );
}

export default CryptoCard;
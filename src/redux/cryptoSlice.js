import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoins = createAsyncThunk(
  "crypto/fetchCoins",
  async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );
    return response.json();
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    coins: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.loading = false;
      });
  },
});

export default cryptoSlice.reducer;
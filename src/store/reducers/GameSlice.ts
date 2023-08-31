import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchGameDetails, fetchGames } from "./AsyncThunks";
import { GameState, IGame, IGameDetails } from "models/game";


const initialState: GameState = {
   games: [],
   gameDetails: null,
   isLoading: false,
   error: ''
};

export const gameSlice = createSlice({
   name: 'game',
   initialState,
   reducers: {
      setGameDetails(state, action: PayloadAction<IGameDetails>) {
         state.gameDetails = action.payload;
      },
   },
   extraReducers: {
      [fetchGames.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
         state.isLoading = false;
         state.error = '';
         state.games = action.payload;
      },
      [fetchGames.pending.type]: (state) => {
         state.isLoading = true;
      },
      [fetchGames.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },
      [fetchGameDetails.fulfilled.type]: (state, action: PayloadAction<IGameDetails>) => {
         state.isLoading = false;
         state.error = '';
         state.gameDetails = action.payload;
      },
      [fetchGameDetails.pending.type]: (state) => {
         state.isLoading = true;
      },
      [fetchGameDetails.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      }
   }
})

export default gameSlice.reducer;
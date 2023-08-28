import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, GAME, GAMES } from "constants/urlConstants";
import { FilterState } from "models/filter";
import { IGame, IGameDetails } from "models/game";



const headers = {
   'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
   'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
}


function getDataLoadErrorMessage(error: unknown): string {
   let errorMessage = 'Loading error.';

   if (axios.isAxiosError(error)) {
      errorMessage += ' ' + (error.response?.data.message || error.response?.data.status_message);
   } else if (error instanceof Error) {
      errorMessage += ' ' + error.message;
   }
   return errorMessage;
}



export const fetchGames = createAsyncThunk(
   'games/fetchByFilter',
   async (filter: FilterState, thunkAPI) => {
      try {
         const response = await axios.get<IGame[]>(API_BASE_URL + GAMES, { headers, params: filter });
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(getDataLoadErrorMessage(error));
      }
   }
)

export const fetchGameDetails = createAsyncThunk(
   'games/fetchByID',
   async (id: number, thunkAPI) => {
      try {
         const response = await axios.get<IGameDetails>(API_BASE_URL + GAME, { headers, params: { id } });
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(getDataLoadErrorMessage(error));
      }
   }
)
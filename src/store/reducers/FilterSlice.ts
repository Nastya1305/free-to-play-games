import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category, FilterState, Platform, SortBy } from "models/filter";


const initialState: FilterState = {
   'sort-by': 'relevance',
   category: null,
   platform: 'all'
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setSort(state, action: PayloadAction<SortBy>) {
         state['sort-by'] = action.payload;
      },
      setCategory(state, action: PayloadAction<Category | 'All'>) {
         if (action.payload === 'All')
            state.category = null;
         else state.category = action.payload;
      },
      setPlatform(state, action: PayloadAction<Platform>) {
         state.platform = action.payload;
      }
   }
})

export default filterSlice.reducer;
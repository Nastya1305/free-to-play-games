import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from 'store/reducers/GameSlice';
import filterReducer from 'store/reducers/FilterSlice';

const rootReducer = combineReducers({
   gameReducer,
   filterReducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
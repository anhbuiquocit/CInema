import { configureStore } from '@reduxjs/toolkit'
import listFlimReducer from './../features/listFlim/listFlimSlice';
import flimClickReducer from './../features/listFlim/FlimClick';
export default configureStore({
  reducer: {
      listFlim: listFlimReducer,
      flimClick: flimClickReducer
  }
})
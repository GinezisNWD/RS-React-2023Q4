import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  page: number;
  per_page: number;
  beer_name: string;
}

const initialState: NavigationState = {
  page: 1,
  per_page: 25,
  beer_name: '',
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    pageChange(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    per_pageChange(state, action: PayloadAction<number>) {
      state.per_page = action.payload;
    },
    beer_nameChange(state, action: PayloadAction<string>) {
      state.beer_name = action.payload;
    },
  },
});

export default navigationSlice.reducer;

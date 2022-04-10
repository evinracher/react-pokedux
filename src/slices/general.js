import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    clearError: (state) => {
      state.error = '';
    },
    toggleLoader: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleLoader, setError, clearError } = generalSlice.actions;

export default generalSlice.reducer;

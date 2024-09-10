import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	wallet: null,
	showWallet: false,
};

export const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		add: (state, action) => {
			state.wallet = action.payload;
		},
		remove: (state, action) => {
			state.wallet = null;
		},
		show: (state, action) => {
			state.showWallet = true;
		},
		hide: (state, action) => {
			state.showWallet = false;
		},
	},
});

export const { add, remove, show, hide } = walletSlice.actions;
export const selectWallet = (state) => state.wallet;
export default walletSlice.reducer;

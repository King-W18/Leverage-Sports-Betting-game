import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "../features/WalletSlice";

export const store = configureStore({
	reducer: {
		wallet: walletReducer,
	},
});

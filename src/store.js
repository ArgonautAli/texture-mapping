import { configureStore } from "@reduxjs/toolkit";
import { imageSlice } from "./redux/imageSlice/imageSlice";
import { shapeSlice } from "./redux/shapeSlice/shapeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  image: imageSlice.reducer,
  shape: shapeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootReducer from "./index";
import thunk from "redux-thunk";
import initialState from "./initialState";

export default initialState => {
  let store;
  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["authReducer","cartReducer"],
      blacklist: ["registerReducer"]
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      applyMiddleware(thunk)
    );
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  }
  return store;
};

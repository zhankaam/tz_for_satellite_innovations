import { applyMiddleware, combineReducers, createStore } from "redux";
import resultReducer from "./modules/result/reducer";
import createSagaMiddleware from "redux-saga";
import { resultWatcherSaga } from "./modules/result/sagas";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  results: resultReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootWatcher);

function* rootWatcher() {
  yield* resultWatcherSaga();
}

export const useTypedSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;

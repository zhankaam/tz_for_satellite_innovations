import { getResultsSuccess } from "./action-creator";
import { setIsFetching } from "./../result/action-creator";
import { SagaIterator } from "@redux-saga/core";
import { call, put, takeEvery } from "redux-saga/effects";
import { setError } from "../result/action-creator";
import { API } from "./api";
import TYPES from "./action-types";
import IAction from "../../../helpers/i-action";
import getErrorMessage from "../../../helpers/getErrorMessage";

function* searchWord({ payload }: IAction<TYPES>): SagaIterator {
  try {
    yield put(setIsFetching(true));

    const result = yield call(API.searchWord, payload.word);

    yield put(getResultsSuccess(result.data));

    yield put(setIsFetching(false));
  } catch (e) {
    yield put(setError(getErrorMessage(e)));
  }
}

export function* resultWatcherSaga() {
  yield takeEvery(TYPES.SEARCH_WORD, searchWord);
}

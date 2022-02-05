import IAction from "../../../helpers/i-action";
import TYPES from "./action-types";
import { IResponse } from "./api";

export const getResultsSuccess = (wordList: IResponse[]): IAction<TYPES> => ({
  type: TYPES.GET_RESULTS_SUCCESS,
  payload: { wordList },
});

export const searchWord = (word: string): IAction<TYPES> => ({
  type: TYPES.SEARCH_WORD,
  payload: { word },
});

export const setError = (message: string | null): IAction<TYPES> => ({
  type: TYPES.SET_ERROR,
  payload: { message },
});

export const setIsFetching = (isFetching: boolean): IAction<TYPES> => ({
  type: TYPES.SET_IS_FETCHING,
  payload: { isFetching },
});

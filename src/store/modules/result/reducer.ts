import IAction from "../../../helpers/i-action";
import TYPES from "./action-types";

const initialState = {
  results: [],
  isFetching: false,
  error: null,
};

export default (
  state: InitialStateType = initialState,
  { type, payload }: IAction<TYPES> = {} as IAction<TYPES>
): InitialStateType => {
  switch (type) {
    case TYPES.GET_RESULTS_SUCCESS:
      return { ...state, results: payload.results };

    case TYPES.SET_IS_FETCHING:
      return { ...state, isFetching: payload.isFetching };

    case TYPES.SET_ERROR:
      return { ...state, error: payload.message };

    default:
      return { ...state };
  }
};

export type InitialStateType = typeof initialState;

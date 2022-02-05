import { Action } from "redux";

export default interface IAction<T, TP = any> extends Action<T> {
  payload: TP;
}

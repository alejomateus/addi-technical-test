import { ActionReducerMap } from "@ngrx/store";
import { IIdentifiTypesState } from "../state/app.state";
import { appReducer, ILanguage } from "./app.reducer";
import { identificationTypesReducer } from "./identification-types.reducer";
export interface IAppState {
  language: ILanguage;
  identificationTypes: IIdentifiTypesState;
}

export const AppRootReducer: ActionReducerMap<IAppState> = {
  language: appReducer,
  identificationTypes: identificationTypesReducer,
};

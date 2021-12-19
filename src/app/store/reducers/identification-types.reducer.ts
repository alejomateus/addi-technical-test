import { createReducer, on } from "@ngrx/store";
import * as identificationTypesActions from "../actions/identification-types.actions";
import { IIdentifiTypesState } from "../state/app.state";

const initialState: IIdentifiTypesState = {
  documenTypes: null,
  error: null,
  loaded: null,
  loading: null,
};

export const identificationTypesReducer = createReducer(
  initialState,
  on(identificationTypesActions.identificationTypesLoad, (state) => ({
    ...state,
    documenTypes: null,
    error: null,
    loaded: null,
    loading: true,
  })),
  on(
    identificationTypesActions.identificationTypesSave,
    (state, documenTypes) => ({
      ...state,
      documenTypes,
      error: null,
      loaded: true,
      loading: false,
    }),
  ),
  on(
    identificationTypesActions.identificationTypesError,
    (state, { error }) => ({
      ...state,
      error,
      loaded: false,
      loading: false,
    }),
  ),
);

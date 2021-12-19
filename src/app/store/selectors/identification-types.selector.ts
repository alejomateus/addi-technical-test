import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  IdentificationTypesFetureName,
  IIdentifiTypesState,
} from "../state/app.state";

export const IdentificacionRootSelector = createFeatureSelector<
  IIdentifiTypesState
>(IdentificationTypesFetureName);

export const selectIdentificationTypes = createSelector(
  IdentificacionRootSelector,
  (state: IIdentifiTypesState) => state,
);

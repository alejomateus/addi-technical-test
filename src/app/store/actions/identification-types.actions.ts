import { IDocumentType } from "@app/models/document-types";
import { createAction } from "@ngrx/store";

export const enum TypeActions {
  identificationTypesLoadString = "[identificationTypes] Loading data",
  identificationTypesSaveString = "[identificationTypes] Successful data loaded",
  identificationTypesErrorString = "[identificationTypes] Save error response",
}
export const identificationTypesLoad = createAction(
  TypeActions.identificationTypesLoadString,
);
export const identificationTypesSave = createAction(
  TypeActions.identificationTypesSaveString,
  (data: IDocumentType[]) => ({ data }),
);
export const identificationTypesError = createAction(
  TypeActions.identificationTypesErrorString,
  (error: any) => ({ error }),
);

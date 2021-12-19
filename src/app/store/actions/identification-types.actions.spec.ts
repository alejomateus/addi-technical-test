import { IDocumentType } from "@app/models/document-types";
import {
  identificationTypesError,
  identificationTypesLoad,
  identificationTypesSave,
  TypeActions,
} from "./identification-types.actions";

describe("shared Data Actions", () => {
  it("should identificationTypesDataLoad", () => {
    expect(identificationTypesLoad()).toEqual({
      type: TypeActions.identificationTypesLoadString,
    });
  });
  it("should vehicleDataSuccess", () => {
    const identificationTypesDataSuccess: IDocumentType[] = [];
    expect(identificationTypesSave(identificationTypesDataSuccess)).toEqual({
      type: TypeActions.identificationTypesSaveString,
      data: identificationTypesDataSuccess,
    });
  });

  it("should identificationTypesDataError", () => {
    const identificationTypesDataError = {
      message: "Internal server error",
    };
    expect(identificationTypesError(identificationTypesDataError)).toEqual({
      type: TypeActions.identificationTypesErrorString,
      error: identificationTypesDataError,
    });
  });
});

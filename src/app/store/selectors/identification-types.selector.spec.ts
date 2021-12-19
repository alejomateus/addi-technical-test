import { IIdentifiTypesState } from "../state/app.state";
import { selectIdentificationTypes } from "./identification-types.selector";

describe("CitySelector", () => {
  const initialCitiesReducer: IIdentifiTypesState = {
    documenTypes: { data: [] },
    error: null,
    loaded: true,
    loading: false,
  };

  it("should return the selectVehiclesCategories", () => {
    expect(selectIdentificationTypes.projector(initialCitiesReducer)).toEqual(
      initialCitiesReducer,
    );
  });
});

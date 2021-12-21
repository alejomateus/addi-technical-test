
import { Injectable } from "@angular/core";
import { Languages } from "@store/actions/app.actions";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AppModelMock {
  public static selectLanguageNull$: BehaviorSubject<
    any
  > = new BehaviorSubject(null);
  public static selectLanguage$: BehaviorSubject<
    any
  > = new BehaviorSubject("en");
  public static selectIdentificationTypeNull$: BehaviorSubject<
    any
  > = new BehaviorSubject(null);
  public static selectIdentificationType$: BehaviorSubject<
    any
  > = new BehaviorSubject({
    documenTypes: null,
    error: null,
    loaded: null,
    loading: null,
  });
  public static selectIdentificationTypesData$: BehaviorSubject<
    any
  > = new BehaviorSubject({
    documenTypes: {
      data: [
        {
          value: "CE",
          description: "Cédula de extranjeria",
        },
        {
          value: "CC",
          description: "Cédula de ciudadania",
        },
      ],
    },
    error: null,
    loaded: true,
    loading: false,
  });
  public static selectIdentificationTypesError$: BehaviorSubject<
    any
  > = new BehaviorSubject({
    documenTypes: null,
    error: {
      message: "internal server error",
    },
    loaded: true,
    loading: false,
  });


  public changeLanguaje(Language: Languages): void {}

}

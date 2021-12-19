import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { changeLanguaje, Languages } from "../actions/app.actions";
import { IAppState } from "../reducers/index.app.reducer";
import { selectLanguage } from "../selectors/app.selector";
import { selectIdentificationTypes } from "../selectors/identification-types.selector";
import { IIdentifiTypesState } from "../state/app.state";
import * as documentTypeActions from "../actions/identification-types.actions";

@Injectable()
export class AppFacade {
  public selectLanguage$: Observable<Languages> = this.store.pipe(
    select(selectLanguage),
  );
  public selectIdentificationType$: Observable<
  IIdentifiTypesState
> = this.store.pipe(select(selectIdentificationTypes));
public selectIdentificationType2$: Observable<
IIdentifiTypesState
> = this.store.pipe(select(selectIdentificationTypes));
  constructor(private store: Store<IAppState>) { }
  changeLanguaje(language: Languages) {
    this.store.dispatch(changeLanguaje(language));
  }

  public getIdentificationTypes(): void {
    this.store.dispatch(documentTypeActions.identificationTypesLoad());
  }

}

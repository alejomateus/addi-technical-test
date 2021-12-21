import { Injectable } from "@angular/core";
import { IdentificationTypesService } from "@services/identification-types.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as identificationTypesActions from "../actions/identification-types.actions";

@Injectable()
export class IdentificationTypesEffect {
  loadDocumentTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(identificationTypesActions.identificationTypesLoad),
      switchMap(() =>
        this.identificationTypesService.getDocumentTypes().pipe(
          map(({identificationTypes}) =>
            identificationTypesActions.identificationTypesSave(
              identificationTypes
            ),
          ),
          catchError((error) =>
            of(identificationTypesActions.identificationTypesError({ error })),
          ),
        ),
      ),
    ),
  );
  constructor(
    private actions$: Actions,
    private identificationTypesService: IdentificationTypesService,
  ) {}
}

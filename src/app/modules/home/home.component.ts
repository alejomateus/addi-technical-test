import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDocumentType } from '@app/models/document-types';
import { Languages } from '@app/store/actions/app.actions';
import { AppFacade } from '@app/store/facades/app.facade';
import { IIdentifiTypesState } from '@app/store/state/app.state';
import { TranslateService } from '@ngx-translate/core';
import { ValidationService } from '@services/validation.service';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from "rxjs/operators";
import { FormValidationMessages } from './models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  identificationTypes!: IDocumentType[];
  prospect: any = undefined;
  personJudicialRecords: any = undefined;
  score: number = 0;
  loading: boolean = false;
  validationMessages!: FormValidationMessages;
  formValidation!: FormGroup;
  constructor(private validationService: ValidationService,
    public translate: TranslateService,
    private appFacade: AppFacade,
  ) {
    this.selectLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Languages) => {
        if (value) {
          this.translate.use(value);
        }
      });
  }

  ngOnInit(): void {
    this.initForm();
    this.getInitialState();
  }
  async getInitialState(): Promise<any> {
    const promiseDocumentTypes = await this.selectIdentificationType$
      .pipe(take(1))
      .toPromise();
    if (promiseDocumentTypes.documenTypes === null) {
      this.appFacade.getIdentificationTypes();
      this.selectIdentificationType2$
        .pipe(takeUntil(this.destroy$))
        .subscribe((action: IIdentifiTypesState) => {
          if (action && action.documenTypes !== null) {
            this.loadUserState(action);
          }
        });
    }
    if (promiseDocumentTypes.documenTypes !== null) {
      this.loadUserState(promiseDocumentTypes);
    }
  }
  loadUserState(action: IIdentifiTypesState) {
    this.identificationTypes = action.documenTypes != null ? action.documenTypes.data : [];
    this.chooseDocumentType(this.identificationTypes[0].value);
  }
  chooseDocumentType(documentType: string): void {
    this.formValidation.controls.identificationType.setValue(documentType);
  }
  initForm() {
    this.formValidation = new FormGroup({
      identificationType: new FormControl('', [Validators.required]),
      identificationNumber: new FormControl('', [Validators.required]),
      names: new FormControl('', [Validators.required]),
      lastnames: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^([a-zA-Z0-9-+_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
        ),
      ]),
      phoneNumber: new FormControl('', [Validators.required,
      Validators.pattern("^[3]{1}[0-9]{9}$"),
      ]),
      birthDate: new FormControl('', [Validators.required]),
    });
    this.validationMessages = {
      identificationType: [
        { type: 'required', message: 'form_errors.identificationType.required' }
      ],
      identificationNumber: [
        { type: 'required', message: 'form_errors.identificationNumber.required' },
      ],
      names: [
        { type: 'required', message: 'form_errors.names.required' }
      ],
      lastnames: [
        { type: 'required', message: 'form_errors.lastnames.required' }
      ],
      email: [
        { type: 'required', message: 'form_errors.email.required' },
        { type: 'pattern', message: 'form_errors.email.pattern' }

      ],
      phoneNumber: [
        { type: 'required', message: 'form_errors.phoneNumber.required' },
        { type: 'pattern', message: 'form_errors.phoneNumber.pattern' }
      ],
      birthDate: [
        { type: 'required', message: 'form_errors.birthDate.required' }
      ]
    };
  }
  /**
   * checkCustomerData
   */
  checkCustomerData() {
    this.loading = true;
    const values = this.formValidation?.value;
    this.validationService.validateProspect(values.identificationType, values.identificationNumber)
      .pipe(takeUntil(this.destroy$)).subscribe(async (value) => {
        this.prospect = value.exists;
        if (this.personJudicialRecords != undefined) {
          await this.getCustomerScore(values)
        }
      });

    this.validationService.validateJudicialReports(values.identificationType, values.identificationNumber)
      .pipe(takeUntil(this.destroy$)).subscribe(async (value) => {
        this.personJudicialRecords = value.personJudicialRecords;
        if (this.prospect != undefined) {
          await this.getCustomerScore(values)
        }
      });
  }
  /**
   * getCustomerScore
   * @param values formValues
   */
  async getCustomerScore(values: any): Promise<any> {
    if (this.score <= 0) {
      if ((this.personJudicialRecords != undefined && this.personJudicialRecords.length == 0) &&
        (this.prospect != undefined && this.prospect)) {
        let value = await this.validationService.getScore(values.identificationType, values.identificationNumber)
          .pipe(takeUntil(this.destroy$)).toPromise();
        this.score = JSON.parse(JSON.stringify(value)).score;
      } else {
        this.prospect = undefined;
        this.personJudicialRecords = undefined;
      }
    }
    this.loading = false;
  }
  get selectLanguage$(): Observable<Languages> {
    return this.appFacade.selectLanguage$;
  }
  get selectIdentificationType$(): Observable<IIdentifiTypesState> {
    return this.appFacade.selectIdentificationType$;
  }
  get selectIdentificationType2$(): Observable<IIdentifiTypesState> {
    return this.appFacade.selectIdentificationType2$;
  }
}

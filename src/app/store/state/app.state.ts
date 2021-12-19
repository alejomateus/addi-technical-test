import { IDocumentTypeService } from '@app/models/document-types';
import { ILanguage } from '../reducers/app.reducer';

export const LanguageFeatureName = 'language';

export const initialState: ILanguage = {
  language: 'es',
};
export const IdentificationTypesFetureName = "identificationTypes";

export interface IIdentifiTypesState {
  documenTypes: IDocumentTypeService | null | undefined;
  error: any;
  loaded: boolean | null;
  loading: boolean | null;
}

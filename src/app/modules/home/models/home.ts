import { ValidationMessages } from "@app/models/forms";

export interface FormValidationMessages {
  names: ValidationMessages[];
  lastnames: ValidationMessages[];
  email: ValidationMessages[];
  identificationType: ValidationMessages[];
  identificationNumber: ValidationMessages[];
  phoneNumber: ValidationMessages[];
  birthDate: ValidationMessages[];
}

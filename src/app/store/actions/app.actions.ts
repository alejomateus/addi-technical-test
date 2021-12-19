import { createAction } from "@ngrx/store";

export type Languages = "es" | "en";

export const enum TypeActionsApp {
  languageChange = "[APP COMPONENT] translate lenguaje",
}
export const changeLanguaje = createAction(
  TypeActionsApp.languageChange,
  (language: Languages) => ({ language }),
);

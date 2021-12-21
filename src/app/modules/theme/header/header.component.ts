import { Component, OnInit } from '@angular/core';
import { LanguagesSelect } from '@app/models/languages';
import { Languages } from '@store/actions/app.actions';
import { AppFacade } from '@store/facades/app.facade';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  language!: Languages;
  languages: LanguagesSelect[] = [{ label: "Español", value: "es" }, { label: "English", value: "en" }];
  constructor(private appFacade: AppFacade) { }

  ngOnInit(): void {
    this.selectLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Languages) => {
        this.language = value ? value : 'es';
      });
  }
  changeLanguage() {
    this.appFacade.changeLanguaje(this.language);
  }

  get selectLanguage$(): Observable<Languages> {
    return this.appFacade.selectLanguage$;
  }
}

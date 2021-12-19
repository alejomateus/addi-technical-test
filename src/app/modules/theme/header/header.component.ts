import { Component, OnInit } from '@angular/core';
import { Languages } from '@app/store/actions/app.actions';
import { AppFacade } from '@app/store/facades/app.facade';
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
  languages: String[] = ["es", "en"];
  constructor(private appFacade: AppFacade) { }

  ngOnInit(): void {
    this.selectLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Languages) => {
        if (value) {
          this.language = value;
        }
      });
  }
  changeLanguage() {
    this.appFacade.changeLanguaje(this.language);
  }

  get selectLanguage$(): Observable<Languages> {
    return this.appFacade.selectLanguage$;
  }
}

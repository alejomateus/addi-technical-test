import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './service/modal.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [
    ModalService
  ]
})
export class ThemeModule { }

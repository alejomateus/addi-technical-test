import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ContentChild(TemplateRef)
  tplRef!: TemplateRef<any>;
  @Input()
  id!: string;
  @Output() actionModal = new EventEmitter<{
    typeAction: string;
    payload: string;
    element: any;
  }>();
  @Input()
  innerHtmlContent!: SafeHtml;
  @Input() set innerHtmlContentString(text: string) {
    if (text) {
      this.innerHtmlContent = this.sanitizer.bypassSecurityTrustHtml(text);
    }
  }
  private element: any;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private sanitizer: DomSanitizer,
  ) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    debugger;
    if (!this.id) {
      return;
    }
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.close();
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    debugger;
    this.element.style.display = "block";
    document.body.classList.add("modal-open");
  }

  close(): void {
    this.element.style.display = "none";
    document.body.classList.remove("modal-open");
  }


}

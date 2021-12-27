import { Injectable } from "@angular/core";

/**
 * Injectable
 */
@Injectable({ providedIn: "root" })
export class ModalService {
  public modals: any[] = [];
  /**
   * Add modal to array
   * @param modal modal
   */
  add(modal: any): void {
    this.modals.push(modal);
  }
  /**
   * Remove modal for screen
   * @param id id to identify modal
   */
  remove(id: string): void {
    this.modals = this.modals.filter((x) => x.id !== id);
  }
  /**
   * open modal specified by id
   * @param id id to identify modal
   */
  open(id: string): void {
    debugger;
    const modal = this.modals.find((x) => x.id === id);
    modal.open();
  }
  /**
   * close modal specified by id
   * @param id id to identify modal
   */
  close(id: string, interno: boolean): void {
    const modal = this.modals.find((x) => x.id === id);
    modal.close(interno);
  }
}

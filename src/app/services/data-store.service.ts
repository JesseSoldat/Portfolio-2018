import { Injectable } from "@angular/core";
// Rxjs
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataStoreService {
  private showModal = new BehaviorSubject(false);
  public readonly showModal$: Observable<
    boolean
  > = this.showModal.asObservable();

  constructor() {}

  onShowModal(show) {
    this.showModal.next(show);
  }
}

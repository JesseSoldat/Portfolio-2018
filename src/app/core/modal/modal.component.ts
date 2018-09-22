import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
// Services
import { DataStoreService } from "../../services/data-store.service";

declare let jQuery: any;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  showModal$: Observable<boolean>;
  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.dataStoreService.showModal$
      .pipe(
        tap(shouldShow => {
          if (shouldShow) {
            jQuery("#myModal").modal("show");
          }
        })
      )
      .subscribe();
  }
}

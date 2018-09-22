import { Component, OnInit } from "@angular/core";
import { DataStoreService } from "../../services/data-store.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {}

  onContact(contactType) {
    this.dataStoreService.onShowModal(true);
  }
}

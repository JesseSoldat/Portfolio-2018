import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-clipboard",
  templateUrl: "./clipboard.component.html",
  styleUrls: ["./clipboard.component.css"]
})
export class ClipboardComponent implements OnInit {
  @Input()
  showClipboard: true;
  constructor() {}

  ngOnInit() {}
}

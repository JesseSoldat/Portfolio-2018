import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { Router, NavigationEnd } from "@angular/router";

import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(updates: SwUpdate, router: Router) {
    // reload page if there is a SW update
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });

    // scroll to top of page on every route change
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }
}

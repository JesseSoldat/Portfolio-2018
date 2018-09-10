import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Routing ---------------------
import { AppRoutingModule } from "./app-routing.module";
// Components ------------------
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

// Modules --------------------
import { CoreModule } from "./core/core.module";
// SW ------------------------
import { ServiceWorkerModule } from "@angular/service-worker";
// ENV -----------------------
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

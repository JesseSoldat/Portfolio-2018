import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from "../shared/shared.module";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about/about.component";

@NgModule({
  imports: [SharedModule, AboutRoutingModule],
  declarations: [AboutComponent]
})
export class AboutModule {}

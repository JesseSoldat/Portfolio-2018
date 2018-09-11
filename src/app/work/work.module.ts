import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from "../shared/shared.module";
import { WorkRoutingModule } from "./work-routing.module";
// Components
import { WorkComponent } from "./work/work.component";
import { WorkDetailsComponent } from "./work/work-details/work-details.component";

@NgModule({
  imports: [SharedModule, WorkRoutingModule],
  declarations: [WorkComponent, WorkDetailsComponent]
})
export class WorkModule {}

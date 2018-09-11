import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from "../shared/shared.module";
import { SkillsRoutingModule } from "./skills-routing.module";

@NgModule({
  imports: [SharedModule, SkillsRoutingModule],
  declarations: []
})
export class SkillsModule {}

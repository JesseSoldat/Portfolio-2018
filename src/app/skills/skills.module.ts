import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from "../shared/shared.module";
import { SkillsRoutingModule } from "./skills-routing.module";
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [SharedModule, SkillsRoutingModule],
  declarations: [SkillsComponent]
})
export class SkillsModule {}

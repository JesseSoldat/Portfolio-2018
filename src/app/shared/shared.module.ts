import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgsRevealModule } from "ng-scrollreveal";

@NgModule({
  imports: [CommonModule, NgsRevealModule.forRoot()],
  declarations: [],
  exports: [CommonModule, NgsRevealModule]
})
export class SharedModule {}

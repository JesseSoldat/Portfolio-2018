import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// 3rd Party --------------------
import { NgsRevealModule } from "ng-scrollreveal";

@NgModule({
  imports: [CommonModule, NgsRevealModule.forRoot()],
  declarations: [],
  exports: [CommonModule, NgsRevealModule]
})
export class SharedModule {}

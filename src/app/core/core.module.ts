import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";

// Services -------------------------

@NgModule({
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule {}

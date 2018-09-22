import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ClipboardComponent } from "./clipboard/clipboard.component";
import { ModalComponent } from "./modal/modal.component";

// Services -------------------------

@NgModule({
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ClipboardComponent,
    ModalComponent
  ],
  exports: [NavbarComponent, ModalComponent, FooterComponent]
})
export class CoreModule {}

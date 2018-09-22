import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Components
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ClipboardComponent } from "./clipboard/clipboard.component";
import { ModalComponent } from "./modal/modal.component";

//Third Party
import { ClipboardModule } from "ngx-clipboard";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ClipboardComponent,
    ModalComponent
  ],
  exports: [NavbarComponent, ModalComponent, FooterComponent]
})
export class CoreModule {}

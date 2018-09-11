import { Component } from "@angular/core";

declare let jQuery: any;

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent {
  isActive = "iowa";

  changeBackground(img, e) {
    e.preventDefault();
    this.isActive = img;
    jQuery(".aboutImgWrapper").css(
      "background-image",
      `url(../../../assets/img/${img}.jpg)`
    );
  }
}

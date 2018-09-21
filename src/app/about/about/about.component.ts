import { Component, OnInit } from "@angular/core";

import aboutData from "./aboutData.js";

declare let jQuery: any;

interface AboutData {
  title: string;
  description: string;
}

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  isActive = "iowa";
  aboutData: AboutData;

  ngOnInit() {
    this.aboutData = aboutData["iowa"];
  }

  changeBackground(img, e) {
    e.preventDefault();
    this.isActive = img;
    this.aboutData = aboutData[this.isActive];

    jQuery(".aboutImgWrapper").css(
      "background-image",
      `url(../../../assets/img/${img}.jpg)`
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// data
import projects from "./projectsData";

interface Project {
  title: string;
  img: string;
  url: string;
  github: string;
  tech: string;
  description: string;
}

@Component({
  selector: "app-work-details",
  templateUrl: "./work-details.component.html",
  styleUrls: ["./work-details.component.css"]
})
export class WorkDetailsComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      param => (this.project = projects[param["id"]])
    );
  }
}

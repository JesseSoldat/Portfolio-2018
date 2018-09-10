import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "work", loadChildren: "./work/work.module#WorkModule" },
  { path: "skills", loadChildren: "./skills/skills.module#SkillsModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

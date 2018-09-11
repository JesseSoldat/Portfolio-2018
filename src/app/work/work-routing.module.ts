import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WorkComponent } from "./work/work.component";
import { WorkDetailsComponent } from "./work/work-details/work-details.component";

const routes: Routes = [
  {
    path: "",
    component: WorkComponent,
    children: [{ path: ":id", component: WorkDetailsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubscribeComponent } from "../subscribe/subscribe.component";

const routes: Routes = [{ path: "subscribe", component: SubscribeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

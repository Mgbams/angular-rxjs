import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { ArticlesListDeletedComponent } from "./articles-list-deleted/articles-list-deleted.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ROUTES } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from "./weather/weather.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { FromOfComponent } from "./from-of/from-of.component";
import { RangeComponent } from "./range/range.component";
import { MapComponent } from "./map/map.component";
import { MapFilterComponent } from "./map-filter/map-filter.component";

const routes: Routes = [
  { path: "subscribe", component: SubscribeComponent },
  { path: "fromof", component: FromOfComponent },
  { path: "range", component: RangeComponent },
  { path: "map", component: MapComponent },
  { path: "mapFilter", component: MapFilterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlesListDeletedComponent,
    NavbarComponent,
    WeatherComponent,
    SubscribeComponent,
    FromOfComponent,
    RangeComponent,
    MapComponent,
    MapFilterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

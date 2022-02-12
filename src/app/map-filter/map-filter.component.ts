import { Component, OnInit } from "@angular/core";
import { range } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-map-filter",
  templateUrl: "./map-filter.component.html",
  styleUrls: ["./map-filter.component.css"],
})
export class MapFilterComponent implements OnInit {
  range$ = range(0, 10);
  constructor() {}

  ngOnInit() {
    this.range$
      .pipe(
        map((x) => Math.pow(x, 2)),
        filter((x) => x % 2 == 0)
      )
      .subscribe({
        next: (value) => {
          console.log(value);
        },
      });
  }
}

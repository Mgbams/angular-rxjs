import { Component, OnInit } from "@angular/core";
import { range } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  range$ = range(0, 10);
  constructor() {}

  ngOnInit() {
    this.range$.pipe(map((x) => Math.pow(x, 2))).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Observable, range } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-range",
  templateUrl: "./range.component.html",
  styleUrls: ["./range.component.css"],
})
export class RangeComponent implements OnInit {
  range$ = range(0, 10);

  constructor() {}

  ngOnInit() {
    this.range$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    this.range$.pipe(filter((x) => x % 2 == 0)).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";

@Component({
  selector: "app-from-of",
  templateUrl: "./from-of.component.html",
  styleUrls: ["./from-of.component.css"],
})
export class FromOfComponent implements OnInit {
  of$ = of([1, 2, 3]);
  from$ = from([1, 2, 3]);

  constructor() {}

  ngOnInit() {
    this.of$.subscribe((v) => console.log(v));
    this.from$.subscribe((v) => console.log(v));
  }
}

import { Component, OnInit } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"],
})
export class SubscribeComponent implements OnInit {
  onNext$: Observable<string>;
  onError$: Observable<number>;

  constructor() {
    this.onNext$ = of("Hello World !");
    this.onError$ = throwError(`Accès interdit`);
    this.onError$.subscribe((error) => console.error(error));
  }

  ngOnInit() {
    this.onNext$.subscribe({ error: (value) => console.log(value) });
  }
}

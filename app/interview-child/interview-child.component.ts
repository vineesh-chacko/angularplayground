import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-interview-child",
  templateUrl: "./interview-child.component.html",
  styleUrls: ["./interview-child.component.css"]
})
export class InterviewChildComponent implements OnInit {
   _message: string;
  @Input()
  userName: string;
  @Input()
  id: number;
  constructor() {}

  ngOnInit() {
 
  }
}

import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../services/questions.service";
import { QuestionsModule } from "../questions/questions.module";

@Component({
  selector: "app-questions-index",
  templateUrl: "./questions-index.component.html",
  styleUrls: ["./questions-index.component.css"]
})
export class QuestionsIndexComponent implements OnInit {
  public modelArry1: QuestionsModule[] = [];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService
      .getQuestion()
      .subscribe(data => (this.modelArry1 = data));
  }
}

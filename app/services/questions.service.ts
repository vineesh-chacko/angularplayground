import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { QuestionsModel } from "../questions/questionsModel";

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) {}

  getQuestion(): Observable<QuestionsModel[]> {
    var url = "http://dummy.restapiexample.com/api/v1/employees";
    return this.http.get<QuestionsModel[]>(url);
  }
}

import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import {
  interval,
  range,
  from,
  Observable,
  Observer,
  Subject,
  Subscription
} from "rxjs";
import { HttpClient } from "@angular/common/http";
// import "rxjs/add/operator/toPromise";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/catch";

@Injectable()
export class LoginService {
  url: string = "http://localhost:53236/api/appuser";

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) {}

  getUser(): Observable<any> {
    return this.http.get(this.url);
    //.do(data => console.log(JSON.stringify(data)))
  }

  public CheckEmailAndPassword(email: string, password: string) {
    //var user  = this.localStorage.get("user") as User;
    //var user = new User("admin@admin.com", "admin");
    // if (email == user.email && password == user.password) return true;
    return false;
  }

  public getRsjxTestMethodUsingSubscribe(): Observable<any> {
    var mynumbers = interval(1000);
    return mynumbers;
  }

  public getRsjxTestMethodUsingCustomSubscribe(): Observable<any> {
    var mynumber = Observable.create((observer: Observer<any>) => {
      observer.next("test");
    });
    return mynumber;
  }
}

class User {
  email: string;
  password: string;

  constructor(email: string, password: string, private http: HttpClient) {
    this.email = email;
    this.password = password;
  }
}

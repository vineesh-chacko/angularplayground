import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  OnDestroy
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Personal } from "./personal";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { InterviewChildComponent } from "../interview-child/interview-child.component";
import { HttpClient } from "@angular/common/http";
import { CanComponentDeactivate } from "../CanDeactivateGuard/can-component-deactivate";
import { CompanyComponent } from "../company/company.component";
import { interval, range, from, Observable, Subject, Subscription } from "rxjs";
import { LoginService } from "../services/login.service";
import { take, map } from "rxjs/operators";

var animateDisplay = [
  trigger("myAnimations", [
    state(
      "void",
      style({
        opacity: 0,
        backgroundColor: "#eee",
        transform: "translateX(-100%)"
      })
    ),
    state(
      "Added",
      style({
        opacity: 1,
        backgroundColor: "#cfd8dc",
        transform: "translateX(0%)"
      })
    ),
    state(
      "new",
      style({
        backgroundColor: "e89a1e",
        transform: "translateX(100%)"
      })
    ),
    transition("void => Added", animate("3000ms ease-in")),
    transition("Added => void", animate("3000ms ease-in"))
    //transition("active => inactive", animate("100ms ease-out"))
  ])
];

@Component({
  selector: "app-interview",
  templateUrl: "./interview.component.html",
  styleUrls: ["./interview.component.css"],
  animations: [animateDisplay]
})
export class InterviewComponent implements CanComponentDeactivate, OnDestroy {
  canNavigate: boolean = true;
  personal: Personal;
  personalList: Personal[] = [];
  childData: string;
  currentState: string = "void";
  mySubscription: Subscription;
  placeOfBirth: string;
  @ViewChild(InterviewChildComponent)
  child: InterviewChildComponent;
  @ViewChildren(InterviewChildComponent)
  child2: QueryList<InterviewChildComponent>;
  @ViewChild("Two")
  child_2: InterviewChildComponent;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.placeOfBirth = "10/10/2018";
    //interval example
    /*
    // custom
    var custom = Observable.create(_observer => {
      _observer.next("test");
    });

    custom.subscribe(
      n => {
        console.log(n);
      },
      () => {},
      () => {}
    );
  

*/
    //   var mynumbers = new Subject<any>();
    //   this.mySubscription = mynumbers.subscribe(
    //     n => {
    //       console.log(n);
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log("completed1");
    //     }
    //   );
    //   mynumbers.next("test");
    //   mynumbers.complete();
    // }
    // ngOnInit() {
    //   this.loginService
    //     .getRsjxTestMethodUsingSubscribe()
    //     .pipe(take(5))
    //     .pipe(
    //       map(p => {
    //         return p * -1;
    //       })
    //     )
    //     .subscribe(
    //       n => {
    //         console.log(n);
    //       },
    //       error => {
    //         console.log(error);
    //       },
    //       () => {
    //         console.log("completed1");
    //       }
    //     );
  }

  ngAfterViewInit() {}
  OnDataModified() {
    //console.log(this.child2.toArray());
    var array = this.child2.toArray();
    for (var i = 0; i < array.length; i++) {
      array[i].userName = "modified at" + array[i].id;
      //    console.log(ar)
    }
  }

  onChangeDataClick2() {
    this.child_2.userName = "test";
  }

  onRegisterClick(form: NgForm) {
    this.personal = new Personal(
      form.value.email,
      form.value.password,
      form.value.dateOfBirth,
      form.value.placeOfBirth
    );

    this.http.get("url").subscribe(response => {});

    setTimeout(() => {
      this.personalList.push(this.personal);
    }, 2000);
    this.currentState = "Added";
  }

  ngOnDestroy() {
    // console.log("destroy");
    // this.mySubscription.unsubscribe();
  }
  onEmailChange() {
    this.canNavigate = false;
  }
  // Animate() {
  //   console.log(this.currentState);
  //   this.currentState = "Added";
  // }
}

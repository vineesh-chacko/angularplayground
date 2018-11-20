import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "../../../node_modules/@angular/common";
import { HttpClientModule } from "@angular/common/http";

// Components
import { HomeComponent } from "../Home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { DurationPipe } from "../pipe/duration.pipe";
import { LoginService } from "../services/login.service";
import { SampleDirective } from "../directives/sample.directive";
import { QuestionsModule } from "../questions/questions.module";
import { QuestionsService } from "../services/questions.service";
import { InterviewComponent } from "../interview/interview.component";
import { InterviewChildComponent } from "../interview-child/interview-child.component";
import { CanDeactivateServiceService } from "../CanDeactivateGuard/can-deactivate-service.service";
import { TextboxDirective } from "../directives/textbox.directive";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InterviewComponent,
    InterviewChildComponent,
    DurationPipe,
    SampleDirective,
    TextboxDirective
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InterviewComponent,
    InterviewChildComponent
  ],
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [
    LoginService,
    QuestionsModule,
    QuestionsService,
    CanDeactivateServiceService
  ]
})
export class AccountModule {}

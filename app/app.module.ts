import { BrowserModule } from "@angular/platform-browser"; // AOT compliltion.
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LocalStorageModule } from "angular-2-local-storage";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Modules
import { AccountModule } from "./account/account.module";
import { QuestionsModule } from "./questions/questions.module";

//Components
import { HomeComponent } from "./Home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { QuestionsIndexComponent } from "./questions-index/questions-index.component";
import { QuestionsNewComponent } from "./questions-new/questions-new.component";
import { QuestionsViewComponent } from "./questions-view/questions-view.component";
import { ContactComponent } from "./contact/contact.component";
import { CompanyComponent } from "./company/company.component";
import { InterviewComponent } from "./interview/interview.component";
import { CanDeactivateServiceService } from "./CanDeactivateGuard/can-deactivate-service.service";
import { TextboxDirective } from "./directives/textbox.directive";

var myRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "questions", component: QuestionsIndexComponent },
  { path: "contact", component: ContactComponent },
  { path: "newquestions", component: QuestionsNewComponent },
  { path: "viewquestions", component: QuestionsViewComponent },
  {
    path: "interview",
    component: InterviewComponent,
    canDeactivate: [CanDeactivateServiceService]
  }
];

@NgModule({
  declarations: [AppComponent, ContactComponent, CompanyComponent],
  imports: [
    BrowserModule,
    AccountModule,
    QuestionsModule,
    RouterModule.forRoot(myRoutes),
    LocalStorageModule.withConfig({
      prefix: "register-app",
      storageType: "localStorage"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

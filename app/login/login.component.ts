import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;
  message: string;
  length: number = 150;
  constructor(
    private localStorage: LocalStorageService,
    private loginService: LoginService
  ) {}

  onLoginClick() {
    if (
      this.loginService.CheckEmailAndPassword(this.email, this.password) == true
    )
      this.message = "Successfull login";
    else this.message = "Invalid  login";

    this.loginService.getUser().subscribe((user: Response) => {
      console.log(user);
    }),
      error => {};
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { CompanyComponent } from "../company/company.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor() {}

  @ViewChild(CompanyComponent) comp: CompanyComponent;

  ngAfterViewInit() {}

  ngOnInit() {}

  onChangeDataClick() {
    this.comp.companyTitle = "New Title";
  }
}

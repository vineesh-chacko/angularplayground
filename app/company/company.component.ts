import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent  {

  // declaratoin
  @Input() companyTitle: string;
  @Input() companyLocation:string;  

  constructor() {
    //initilasation
    this.companyTitle="Cardtronics";
    this.companyLocation = "Chry";
    
  }

  ngOnChanges(changes:SimpleChanges)
  {
    //console.log(changes);
    //console.log("ngOnChanges");
  }

  ngOnInit()
  {
    //console.log("ngOnInit");
  }

  ngDoCheck()
  {
    //console.log("ngDoCheck");
  }

  ngAfterContentInit()
  {
    //console.log("ngAfterContentInit");
  }

  ngAfterContentChecked()
  {
   // console.log("ngAfterContentChecked");
  }
  ngAfterViewInit()
  {
   // console.log("ngAfterViewInit");
  }
  ngAfterViewChecked()
  {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy()
  {
   // console.log("ngOnDestroy");
  }
}


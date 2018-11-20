import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CanComponentDeactivate } from "./can-component-deactivate";

@Injectable()
export class CanDeactivateServiceService
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    if (component.canNavigate) {
      return true;
    } else {
      if (confirm("Are you sure you want to leave?") == true) {
        return true;
      } else {
        return false;
      }
    }
  }
}

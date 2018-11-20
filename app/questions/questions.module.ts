import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { QuestionsIndexComponent } from "../questions-index/questions-index.component";
import { QuestionsNewComponent } from "../questions-new/questions-new.component";
import { QuestionsViewComponent } from "../questions-view/questions-view.component";
import { QuestionsService } from "../services/questions.service";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    QuestionsIndexComponent,
    QuestionsNewComponent,
    QuestionsViewComponent
  ],
  exports: [
    QuestionsIndexComponent,
    QuestionsNewComponent,
    QuestionsViewComponent
  ],
  providers: [QuestionsService]
})
export class QuestionsModule {}

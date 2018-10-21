import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { QuestionStages } from '../../models/question-page.model'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  capitalForm = new FormGroup({
    answer: new FormControl('', Validators.required)
  });

  currentStage: QuestionStages = 0;
  rightAnswer = 'rome';

  onSubmit() {
    this.currentStage = this.capitalForm.value.answer.toLowerCase() === this.rightAnswer ? QuestionStages.Right : QuestionStages.Wrong;
  }

  goBack() {
    this.currentStage = QuestionStages.Question;
  }
}

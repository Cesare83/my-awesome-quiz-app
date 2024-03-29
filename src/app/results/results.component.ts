//-----------------------------------IMPORT MODULES-----------------------------
import { Component, Input } from '@angular/core';
import { Answers } from '../quiz.model';

//-----------------------------------COMPONENT----------------------------------
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() answers: Answers;
}

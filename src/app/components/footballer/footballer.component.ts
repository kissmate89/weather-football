import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FootballerModel } from 'src/app/models/footballer.model';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.scss']
})
export class FootballerComponent implements OnChanges {
  @Input('footballerData') footballerData: FootballerModel;
  @Input('selectedIds') selectedIds: number[];
  @Output('footballerClicked') footballerClicked: EventEmitter<FootballerModel> = new EventEmitter<FootballerModel>();

  selected: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedIds']) {
      this.selected = this.selectedIds.some(id => id === this.footballerData.id);
    }
  }

  footballerSelected() {
    this.footballerClicked.emit(this.footballerData);
  }

}

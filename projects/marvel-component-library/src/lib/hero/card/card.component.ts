import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cardTitle: string = '';
  @Input() cardImageAlt: string = '';
  @Input() cardImage: string = '';
  @Input() cardDescription: string = '';
  @Input() cardDataId: string = '';
  @Input() cardButtonText: string = 'Detail';
  @Input() buttonFunction: (args: string) => void = () => {};

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  emitClick(id: string) {
    this.clickEmitter.emit(this.buttonFunction(id));
  }
}

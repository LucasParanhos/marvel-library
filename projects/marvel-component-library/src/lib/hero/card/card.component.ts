import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTitle :string = '';
  @Input() cardImageAlt :string = '';
  @Input() cardImage :string = '';
  @Input() cardDescription :string = '';


  constructor() {

   }

  ngOnInit(): void {
  }

}

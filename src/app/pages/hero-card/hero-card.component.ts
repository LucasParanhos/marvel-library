import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  mockCardData = {
    cardTitle: 'Spider Man',
    cardImageAlt: 'Spider Man Casting a Web',
    cardImage:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/b74b48f9-6c13-452e-8776-ea1ab9074953/74b9774e-a415-4499-8f1a-26e5e0940ecd/1280x720/match/image.jpg',
    cardDescription: `Spiderman, Spiderman
    Does whatever a spider can
    Spins a web any size
    Catches thieves just like flies
    Look out, here come the Spiderman
    Is he strong, listen bud
    He's got radioactive blood
    Can he swing from a thread?
    Take a look over head
    Hey there, there goes the Spiderman`,
  };

  constructor() {}

  ngOnInit(): void {}
}

import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MarvelComponentLibraryComponent } from './marvel-component-library.component';
import { CardComponent } from './hero/card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MarvelComponentLibraryComponent, CardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [MarvelComponentLibraryComponent, CardComponent],
})
export class MarvelComponentLibraryModule {}

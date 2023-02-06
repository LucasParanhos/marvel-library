import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { MarvelComponentLibraryComponent } from './marvel-component-library.component';
import { CardComponent } from './hero/card/card.component';

@NgModule({
  declarations: [MarvelComponentLibraryComponent, CardComponent],
  imports: [BrowserAnimationsModule, MatCardModule, MatButtonModule],
  exports: [MarvelComponentLibraryComponent, CardComponent],
})
export class MarvelComponentLibraryModule {}

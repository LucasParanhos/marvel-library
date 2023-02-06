import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComponentLibraryComponent } from './marvel-component-library.component';

describe('MarvelComponentLibraryComponent', () => {
  let component: MarvelComponentLibraryComponent;
  let fixture: ComponentFixture<MarvelComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelComponentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

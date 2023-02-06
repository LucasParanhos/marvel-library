import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComponentsLibComponent } from './marvel-components-lib.component';

describe('MarvelComponentsLibComponent', () => {
  let component: MarvelComponentsLibComponent;
  let fixture: ComponentFixture<MarvelComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

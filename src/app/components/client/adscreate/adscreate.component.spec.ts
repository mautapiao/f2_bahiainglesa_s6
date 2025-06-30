import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdscreateComponent } from './adscreate.component';

describe('AdscreateComponent', () => {
  let component: AdscreateComponent;
  let fixture: ComponentFixture<AdscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdscreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ToursComponent } from './tours.component';

describe('ToursComponent', () => {
  let component: ToursComponent;
  let fixture: ComponentFixture<ToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColumnComponent } from './right-column.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RightColumnComponent', () => {
  let component: RightColumnComponent;
  let fixture: ComponentFixture<RightColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightColumnComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});

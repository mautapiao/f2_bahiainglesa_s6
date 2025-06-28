import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryComponent } from './recovery.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RecoveryComponent', () => {
  let component: RecoveryComponent;
  let fixture: ComponentFixture<RecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});

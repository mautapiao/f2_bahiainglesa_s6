import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalltoactionComponent } from './calltoaction.component';

describe('CalltoactionComponent', () => {
  let component: CalltoactionComponent;
  let fixture: ComponentFixture<CalltoactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalltoactionComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalltoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});

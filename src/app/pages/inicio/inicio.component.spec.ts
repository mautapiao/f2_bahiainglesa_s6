import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});

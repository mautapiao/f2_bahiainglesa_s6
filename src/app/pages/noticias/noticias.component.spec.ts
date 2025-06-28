import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasComponent } from './noticias.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('NoticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});

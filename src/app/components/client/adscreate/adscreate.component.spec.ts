import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdscreateComponent } from './adscreate.component';

describe('AdscreateComponent', () => {
  let component: AdscreateComponent;
  let fixture: ComponentFixture<AdscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdscreateComponent, RouterTestingModule]
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

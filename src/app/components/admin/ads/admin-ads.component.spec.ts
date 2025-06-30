import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAdsComponent } from './admin-ads.component';

describe('AdminAdsComponent', () => {
  let component: AdminAdsComponent;
  let fixture: ComponentFixture<AdminAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdsComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

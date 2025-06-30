import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdsEditComponent } from './admin-ads-edit.component';

describe('AdminAdsEditComponent', () => {
  let component: AdminAdsEditComponent;
  let fixture: ComponentFixture<AdminAdsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesUpdateComponent } from './warehouses-update.component';

describe('WarehousesUpdateComponent', () => {
  let component: WarehousesUpdateComponent;
  let fixture: ComponentFixture<WarehousesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesDeleteComponent } from './warehouses-delete.component';

describe('WarehousesDeleteComponent', () => {
  let component: WarehousesDeleteComponent;
  let fixture: ComponentFixture<WarehousesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

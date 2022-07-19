import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySaveComponent } from './inventory-save.component';

describe('InventorySaveComponent', () => {
  let component: InventorySaveComponent;
  let fixture: ComponentFixture<InventorySaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

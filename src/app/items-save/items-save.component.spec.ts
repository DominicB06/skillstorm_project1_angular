import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSaveComponent } from './items-save.component';

describe('ItemsSaveComponent', () => {
  let component: ItemsSaveComponent;
  let fixture: ComponentFixture<ItemsSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsReadComponent } from './items-read.component';

describe('ItemsReadComponent', () => {
  let component: ItemsReadComponent;
  let fixture: ComponentFixture<ItemsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDesignComponent } from './stack-design.component';

describe('StackDesignComponent', () => {
  let component: StackDesignComponent;
  let fixture: ComponentFixture<StackDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefavComponent } from './onefav.component';

describe('OnefavComponent', () => {
  let component: OnefavComponent;
  let fixture: ComponentFixture<OnefavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnefavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnefavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

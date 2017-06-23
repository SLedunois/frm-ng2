import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BxmodalComponent } from './bxmodal.component';

describe('BxmodalComponent', () => {
  let component: BxmodalComponent;
  let fixture: ComponentFixture<BxmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

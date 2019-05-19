import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagerComponent } from './damager.component';

describe('DamagerComponent', () => {
  let component: DamagerComponent;
  let fixture: ComponentFixture<DamagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MurucaComponent } from './muruca.component';

describe('MurucaComponent', () => {
  let component: MurucaComponent;
  let fixture: ComponentFixture<MurucaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MurucaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MurucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

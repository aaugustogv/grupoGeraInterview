import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoraComponent } from './distribuidora.component';

describe('DistribuidoraComponent', () => {
  let component: DistribuidoraComponent;
  let fixture: ComponentFixture<DistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribuidoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

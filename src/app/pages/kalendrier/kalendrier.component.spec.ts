import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendrierComponent } from './kalendrier.component';

describe('KalendrierComponent', () => {
  let component: KalendrierComponent;
  let fixture: ComponentFixture<KalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

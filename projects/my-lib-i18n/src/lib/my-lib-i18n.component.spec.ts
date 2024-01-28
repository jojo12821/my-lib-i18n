import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibI18nComponent } from './my-lib-i18n.component';

describe('MyLibI18nComponent', () => {
  let component: MyLibI18nComponent;
  let fixture: ComponentFixture<MyLibI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibI18nComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLibI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

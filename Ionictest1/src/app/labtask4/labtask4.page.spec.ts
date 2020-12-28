import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Labtask4Page } from './labtask4.page';

describe('Labtask4Page', () => {
  let component: Labtask4Page;
  let fixture: ComponentFixture<Labtask4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Labtask4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Labtask4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

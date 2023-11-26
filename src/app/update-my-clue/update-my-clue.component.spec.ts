import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMyClueComponent } from './update-my-clue.component';

describe('UpdateMyClueComponent', () => {
  let component: UpdateMyClueComponent;
  let fixture: ComponentFixture<UpdateMyClueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyClueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMyClueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

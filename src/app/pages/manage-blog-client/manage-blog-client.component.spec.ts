import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogClientComponent } from './manage-blog-client.component';

describe('ManageBlogClientComponent', () => {
  let component: ManageBlogClientComponent;
  let fixture: ComponentFixture<ManageBlogClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBlogClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBlogClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

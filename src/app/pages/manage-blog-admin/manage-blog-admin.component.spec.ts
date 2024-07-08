import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogAdminComponent } from './manage-blog-admin.component';

describe('ManageBlogAdminComponent', () => {
  let component: ManageBlogAdminComponent;
  let fixture: ComponentFixture<ManageBlogAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBlogAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBlogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

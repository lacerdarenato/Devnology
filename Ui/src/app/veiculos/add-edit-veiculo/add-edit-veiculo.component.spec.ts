import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVeiculoComponent } from './add-edit-veiculo.component';

describe('AddEditVeiculoComponent', () => {
  let component: AddEditVeiculoComponent;
  let fixture: ComponentFixture<AddEditVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

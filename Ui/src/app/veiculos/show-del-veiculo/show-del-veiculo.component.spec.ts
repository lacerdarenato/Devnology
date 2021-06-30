import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelVeiculoComponent } from './show-del-veiculo.component';

describe('ShowDelVeiculoComponent', () => {
  let component: ShowDelVeiculoComponent;
  let fixture: ComponentFixture<ShowDelVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

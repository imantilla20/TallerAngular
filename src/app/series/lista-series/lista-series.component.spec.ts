import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaSeriesComponent } from './lista-series.component';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../series.service';

describe('ListaSeriesComponent', () => {
  let component: ListaSeriesComponent;
  let fixture: ComponentFixture<ListaSeriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSeriesComponent],
      imports: [HttpClientTestingModule, CommonModule],
      providers: [SeriesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

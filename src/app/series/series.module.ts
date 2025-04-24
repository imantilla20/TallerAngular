import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSeriesComponent } from './lista-series/lista-series.component';

@NgModule({
  declarations: [
    ListaSeriesComponent  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaSeriesComponent
  ]
})
export class SeriesModule { }

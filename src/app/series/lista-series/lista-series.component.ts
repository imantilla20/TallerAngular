import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-lista-series',
  standalone:false,
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {
  series: Series[] = [];
  averageSeasons: number = 0;
  visibilidad: boolean = false;

  nameSerie: string = '';
  descriptionSerie: string = '';
  webpageSerie: string = '';
  posterSerie: string = '';

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.calculateAverageSeasons();
    });
  }

  showDetail(serie: Series): void {
    this.nameSerie = serie.name;
    this.descriptionSerie = serie.description;
    this.webpageSerie = serie.webpage;
    this.posterSerie = serie.poster;
    this.visibilidad = true;
  }

  calculateAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return Math.round((total / this.series.length) * 10) / 10;
  }
}

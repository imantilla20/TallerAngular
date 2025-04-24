import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {
  series: Series[] = [];
  averageSeasons: number = 0;
  idSerie: number = 0;
  nameSerie: string = '';
  descriptionSerie: string = '';
  webpageSerie: string = '';
  seasonsSerie: number = 0;
  posterSerie: string = '';
  visibilidad: boolean = false;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.estimateAverageSeasons();
    });
  }

  showDetail(serie: Series): void {
    this.idSerie = serie.id;
    this.nameSerie = serie.name;
    this.descriptionSerie = serie.description;
    this.seasonsSerie = serie.seasons;
    this.webpageSerie = serie.webpage;
    this.posterSerie = serie.poster;
    this.visibilidad = true;
  }

  estimateAverageSeasons(): number {
    const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return this.series.length > 0 ? total / this.series.length : 0;
  }
}


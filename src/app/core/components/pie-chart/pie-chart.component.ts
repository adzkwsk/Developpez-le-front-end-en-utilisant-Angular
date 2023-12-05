import { Component, EventEmitter, Input, OnChanges, OnInit,  Output, SimpleChanges } from '@angular/core';
import { PieChartData } from '../../models/PieCharts';
import { LegendPosition } from '@swimlane/ngx-charts'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data: PieChartData[] = [];
  @Output() selectedCountry = new EventEmitter<string> ;
  pieChartData: PieChartData[] = [];

  //options
  view: [number, number] = [700, 370]; // width & height
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;


  ngOnInit(): void {
    this.pieChartData = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pieChartData = this.data;
  }


  onCountrySelect(event: PieChartData) {
    // this.router.navigate(['/country-detail', event.name]);
    this.selectedCountry.emit(event.name)
  }

}


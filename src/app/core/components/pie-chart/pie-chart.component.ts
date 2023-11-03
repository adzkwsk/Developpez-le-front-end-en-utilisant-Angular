import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  pieChartData: PieChartData[] = [];

  //options
  view: [number, number] = [700, 370]; // width & height
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pieChartData = this.data;
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pieChartData = this.data;
  }

  getJOforCountry(): number {
    let total = 0;
    this.data.forEach(data => {
      total += data.value; 
    });
    return total;
  }

  onCountrySelect(event: any) {
    this.router.navigate(['/country-detail', event.name]);
  }

}


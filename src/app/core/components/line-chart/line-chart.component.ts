import { Component, Input, OnInit } from '@angular/core';
import { LineChartData } from '../../models/LineCharts';
import { Olympic } from '../../models/Olympic';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data!: LineChartData[];
  lineChartData!: LineChartData[];

  // Options 
  view: [number, number] = [700, 400];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'testX';
  yAxisLabel: string = 'testY'; 
  timeline: boolean = true; 

  constructor() {}

  ngOnInit(): void {
    console.log(this.data)
    if (this.data) {
      this.lineChartData = this.data
      console.log(this.data)
    }
  }

}
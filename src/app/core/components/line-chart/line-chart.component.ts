import { Component, Input, OnInit } from '@angular/core';
import { LineChartData } from '../../models/LineCharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data!: LineChartData[];
  lineChartData!: LineChartData[];

  // Options 
  view: [number, number] = [700, 370];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  ngOnInit(): void {
    if (this.data) {
      this.lineChartData = this.data
    }
  }


}
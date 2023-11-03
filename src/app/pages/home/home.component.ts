import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, Subscription } from 'rxjs';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { PieChartData } from '../../core/models/PieCharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  olympicData: Olympic[] = [];
  pieData: PieChartData[] = [];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.subscription = this.olympicService.getOlympics().subscribe((data) => {
      if (data) {
        this.olympicData = data;
        this.pieData = this.olympicData.map( olympic => {
          return {
            name: olympic.country,
            value: olympic.participations.reduce((total, participation) => total + participation.medalsCount, 0)
          };
        });
        console.log(this.pieData)
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

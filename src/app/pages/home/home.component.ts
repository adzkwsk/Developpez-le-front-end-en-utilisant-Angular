import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { PieChartData } from '../../core/models/PieCharts';
import { Router } from '@angular/router';
import { Constants } from 'src/app/core/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  olympicData: Olympic[] = [];
  pieData: PieChartData[] = [];

  constructor(
    private olympicService: OlympicService,
    private router: Router) {}

  ngOnInit(): void {
    this.olympicService.getOlympics()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.olympicData = data ?? [];
        this.pieData = this.olympicData.map(olympic => ({
          name: olympic.country,
          value: olympic.participations.reduce((total, participation) => total + participation.medalsCount, 0)
        }));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getJOforCountry(): number {
    return this.pieData.reduce((total, data) => total + data.value, 0);
  }

  onCountrySelect(event: string) {
      this.router.navigate([Constants.COUNTRY_DETAIL_URL, event]);
  }
}

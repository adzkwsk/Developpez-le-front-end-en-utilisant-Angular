import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { LineChartData, DataPoint } from 'src/app/core/models/LineCharts';
import { Participation } from 'src/app/core/models/Participation';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  countryName: string = '';
  olympicData!: Olympic;
  lineChartData!: LineChartData[];

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('country') || '';
      this.fetchCountryData();
    });
  }

  getTotalEntries(): Number {
    return this.olympicData.participations.length
  }

  getTotalMedals(): Number {
    return this.olympicData.participations.reduce(
      (previousValue: any, currentValue: any) => 
        previousValue + currentValue.medalsCount
      , 0
    )
  }

  getTotalAthletes(): Number {
    return this.olympicData.participations.reduce(
      (previousValue: any, currentValue: any) => 
        previousValue + currentValue.athleteCount
      , 0
    )
  }

  // Fetch country-specific data
  private fetchCountryData() {
    this.olympicService.getOlympic(this.countryName).subscribe(data => {
      if (data) {
        this.olympicData = data
        this.lineChartData = this.convertToLineChartData(data)
      }
    }, error => this.router.navigate(['/not-found']));
  }

  private convertToLineChartData(countryData: Olympic): LineChartData[] {
    const lineChartData: LineChartData[] = [{
      name: countryData.country,
      series: countryData.participations.map(participation => {
        return {
          name: participation.year.toString(),
          value: participation.medalsCount
        } as DataPoint;
      })
    }];
    return lineChartData;
  }


  goBack() {
    this.router.navigate(['/']);
  }
}


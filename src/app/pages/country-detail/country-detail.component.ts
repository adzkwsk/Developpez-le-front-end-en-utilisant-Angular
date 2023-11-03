import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { LineChartData, DataPoint } from 'src/app/core/models/LineCharts';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  countryName: string = '';
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

  // Fetch country-specific data
  private fetchCountryData() {
    console.log("country name", this.countryName)
    this.olympicService.getOlympic(this.countryName).subscribe(data => {
      if (data) {
        this.lineChartData = this.convertToLineChartData(data)
      } else {
        // this.router.navigate(['/not-found']);
        console.log("blabla")
      }
    });
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


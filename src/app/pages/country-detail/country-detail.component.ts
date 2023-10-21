import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService } from '../../core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { LegendPosition } from '@swimlane/ngx-charts'; 


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  countryName!: string | null;
  lineChartData: any[] = [];
  
  // options
  view: [number, number] = [700, 370]; 
  gradient: boolean = true;
  showLegend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  autoScale: boolean = true;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private olympicService: OlympicService) { }

  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('country');
    this.loadCountryDetails();
  }

  loadCountryDetails() {

  }

  goBack() {
    this.router.navigate(['/']);
  }
}


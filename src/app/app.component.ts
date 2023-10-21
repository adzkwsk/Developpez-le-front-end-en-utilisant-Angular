import { Component, OnDestroy, OnInit } from '@angular/core';
import { OlympicService } from './core/services/olympic.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  olympics$ = this.olympicService.getOlympics();
  
  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    console.log("app")
    this.olympicService.loadInitialData().subscribe() // Find a new solution for observable (rm subscribe)
  }

}

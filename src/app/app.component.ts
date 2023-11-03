import { Component, OnDestroy, OnInit } from '@angular/core';
import { OlympicService } from './core/services/olympic.service';
import { Subscription, pipe, take } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  olympicSub!: Subscription;
  
  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicSub = this.olympicService.loadInitialData().pipe(take(1)).subscribe()
  }

  // ngOnDestroy(): void {
  //     this.olympicSub.unsubscribe()
  // }

}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PieChartComponent } from './core/components/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { LineChartComponent } from './core/components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NotFoundComponent, 
    PieChartComponent, 
    CountryDetailComponent, 
    LineChartComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, ScatterChartComponent, BarChartComponent, DoughnutChartComponent, BubbleChartComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

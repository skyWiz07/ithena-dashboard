import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { CardComponent } from './components/card/card.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NumericalWidgetComponent } from './components/numerical-widget/numerical-widget.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ScatterChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    BubbleChartComponent,
    CardComponent,
    NumericalWidgetComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss'],
})
export class ScatterChartComponent {
  title = 'ng-chart';
  scatterChart: any = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    this.scatterChart = new Chart('scatter-chart-canvas', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: -10,
                y: 0,
              },
              {
                x: 0,
                y: 10,
              },
              {
                x: 10,
                y: 5,
              },
              {
                x: 0.5,
                y: 5.5,
              },
            ],
            backgroundColor: 'rgb(255, 99, 132)',
          },
        ],
      },
    });
  }
}
